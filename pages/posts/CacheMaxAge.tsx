import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import * as React from 'react';
import { useEffect, useState } from 'react';

export interface CacheMaxAgeProps {
  post: any;
  query: any;
}

export default function CacheMaxAge({ post }: CacheMaxAgeProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((value) => value + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{value}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<CacheMaxAgeProps> = async (
  context: GetServerSidePropsContext
) => {
  context.res.setHeader('Cache-Control', 's-maxage=5');

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const postId = context.query?.postId;
  if (!postId) {
    return {
      props: {},
    };
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();

  return {
    props: {
      post: data,
      query: context.query,
    },
  };
};
