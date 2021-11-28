import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from  'next/link'
import * as React from 'react';

export interface  PostListPageProps {
  posts: any
}

export default function PostListPage ({posts}:  PostListPageProps) {
  return (
    <div>
      <h1>Post List Page</h1>
      {
        posts.map((item: any) => <li key={item.id}>
          <Link href={`/posts/${item.id}`}>
            <a>{item.title}</a>
          </Link>
          {/* <p>{item.body}</p> */}
        </li>)
      }
    </div>
  );
}


export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      posts : data.map((item: any) => ({id: item.id, title: item.title, body: item.body}))
    }
  }
}