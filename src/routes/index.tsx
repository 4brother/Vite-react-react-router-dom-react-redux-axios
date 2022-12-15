import Home from '@/views/home';
import Test from '@/views/test';
import Children1 from '@/views/children1';
import Children2 from '@/views/children2';
import { HomeOutlined } from '@ant-design/icons';
export default [
  {
    path: '/home',
    name: 'Home',
    icon: <HomeOutlined />,
    element: <Home />,
  },
  {
    path: '/test',
    name: 'Test',
    element: <Test/>,
  },
  {
    path: '/parent',
    name: 'Parent',
    icon: <HomeOutlined />,
    children: [
      {
        path: '/parent/children1',
        name: 'Children1',
        icon: <HomeOutlined />,
        element: <Children1/>,
      },
      {
        path: '/parent/children2',
        name: 'Children2',
        icon: <HomeOutlined />,
        element: <Children2/>,
      },
    ],
  },
];
