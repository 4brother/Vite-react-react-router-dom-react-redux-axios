import { useState } from 'react';

const Children1 = () => {
  const [title] = useState('Children1');
  return (
    <div className="Children1">
      <h2>{ title } Page</h2>
    </div>
  );
};
export default Children1;
