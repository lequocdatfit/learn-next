import { NextPage } from 'next';
import { AppProps } from 'next/app';

export interface LayoutProps {
  children: React.ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => React.ReactElement;
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}