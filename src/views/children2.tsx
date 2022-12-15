import { useState } from 'react';

const Children2 = () => {
  const [title] = useState('Children2');
  return (
    <div className="Children2">
      <h2>{ title } Page</h2>
    </div>
  );
};
export default Children2;
