import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
// import Header from '@components/common/Header';
import dynamic from 'next/dynamic';
import { MainLayout } from '@components/layout';
import { NextPageWithLayout } from '@models/common';

export interface AboutPageProps {}

const Header = dynamic(() => import('@components/common/Header'), { ssr: false });

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  const page = router.query?.page;
  // useeffect chi chay phia client
  // useSWR
  useEffect(() => {
    if (!page) return;
    (async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?page=${page}`);
      const data = await res.json();

      setPostList(data);
    })();
  }, [page]);

  function handleNextClick() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  console.log('Query: ', router.query);
  return (
    <div>
      About Page
      <Header />
      <ul className="postList">
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
}

AboutPage.Layout = MainLayout;


export async function getStaticProps() {
  console.log('GET STATIC PROPS');
  return {
    props: {},
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
