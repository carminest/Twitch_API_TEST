import React, { Fragment } from 'react';
import RouterButtons from '@src/components/routerButtons';
import { useRouter } from 'next/router';

const IndexBody = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <h1>BODY</h1>
      <RouterButtons />
    </>
  );
};

export default IndexBody;
