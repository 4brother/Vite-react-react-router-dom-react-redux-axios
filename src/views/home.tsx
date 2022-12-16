import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
const Home = () => {
  const [title] = useState('Home');
  const cookies = useAppSelector(state => state.indexStore.cookies);
  return (
    <div className="home">
      <h2>{ title } Page</h2>
      <h3>Cookies</h3>
      <p>{ cookies || '无' }</p>
    </div>
  );
};
export default Home;
