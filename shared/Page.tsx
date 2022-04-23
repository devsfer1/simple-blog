import React from 'react';
import Header from './header';
import CenterWrapper from './centerWrapper';
import Head from 'next/head';

type PageProps = {
  title: string;
  children: React.ReactNode;
};

export const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <CenterWrapper>
        {children}
      </CenterWrapper>
    </>
  );
};
