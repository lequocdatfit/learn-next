import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/server/router';
import * as React from 'react';

export interface PostListPageProps {
}

export default function PostListPage (props: PostListPageProps) {
  const router = useRouter();
  function handleSubmit() {
    router.push({
      pathname: '/posts/[postId]',
      query : {
        postId: '12345',
        ref: 'social'
      }
    })
  }
  return (
    <div>
      PostListPage
      <button onClick={handleSubmit}>
        Go to detail page
      </button>
    </div>
  );
}
