
import { LayoutProps } from '@models/index';
import React, { useEffect } from 'react';
import Link from 'next/link';

export function MainLayout ({children}: LayoutProps) {
  useEffect(() => {
    console.log("Layout mounted");

    return () => {
      console.log("Layout will unmount");
    }
  }, [])
  return (
    <div>
      <h1>Main layout</h1>
      <Link href="/">
        <a>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a>
          About
        </a>
      </Link>

      <div>{children}</div>
    </div>
  );
}
