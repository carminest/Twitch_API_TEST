import React from 'react';
import { useRouter } from 'next/router';

const RouterButtons = (): JSX.Element => {
  const router = useRouter();

  return (
    <button type='button' onClick={() => router.push('/apiPage')}>
      move to data
    </button>
  );
};

export default RouterButtons;
