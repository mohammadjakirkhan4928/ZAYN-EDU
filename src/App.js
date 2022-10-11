import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Errorpage from './Component/Errorpage/Errorpage';
import Static from './Component/Static/Static';
import Blog from './Component/Blog/Blog';
// import Tittle from './Component/Title/Tittle';
import Topic from './Component/Topic/Topic';


function App() {
const router=createBrowserRouter([
  {
    path:'/',
    loader:()=>fetch(''),
    errorElement:<Errorpage></Errorpage>,
    element:<Main></Main>,
    children: [
      {
        path:'/',
        loder:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topic></Topic>
      },
        // {
        //   path:'/topic',
        //   loader:() => fetch(''),
        //   element:<Topic></Topic>
        // },
      {
        path:'/static',
        element:<Static></Static>
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
      }
    ]

  }
])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
