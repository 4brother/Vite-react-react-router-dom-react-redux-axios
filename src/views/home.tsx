import { useState } from 'react';

const Home = () => {
  const [title] = useState('Home');
  return (
    <div className="home">
      <h2>{ title } Page</h2>
    </div>
  );
};
export default Home;
