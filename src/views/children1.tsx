import React, { useState, Suspense } from 'react';
import Child2 from './children2';
const Children2 = React.lazy(() => import('./children2'));
const Children1 = () => {
  const [title] = useState('Children1');
  return (
    <div className="Children1">
      <h2>{ title } Page</h2>
      <Suspense>
        <Children2/>1
      </Suspense>
      <Child2/>2
    </div>
  );
};
export default Children1;
