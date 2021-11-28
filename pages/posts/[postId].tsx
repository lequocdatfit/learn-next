import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface PostDetailPageProps {
  post: any
}

export default function PostDetailPage ({post}: PostDetailPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return {
    paths: data.map((item: any) => ({params: {postId: item.id.toString()}})),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (context: GetStaticPropsContext) => {
  const postId = context.params?.postId;
  if(!postId) {
    return {
      notFound: true
    }
  }
  console.log("GET STATIC PROPS: ", context.params?.postId);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const data = await res.json();
  return {
    props: {
      post: {id: data.id, title: data.title, body: data.body}
    }
  }
}
