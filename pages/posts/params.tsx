import * as React from 'react';

export interface IAppProps {}

export default function ParamsPage(props: IAppProps) {
  return <div>ParamsPage</div>;
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    props: {},
  };
}
