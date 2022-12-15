import './App.less';
import Layout from '@/layouts/index';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout/>
      </Router>
    </div>
  );
}

export default App;
