import React, { Suspense } from 'react';

import Loading from '../components/ts/Loading';

const withSuspense = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default withSuspense;
