import React from 'react';
import AppLayout from '@src/components/appLayout';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' />
        <meta name='description' content='test page PM' />
        <title>test page pm</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default App;
