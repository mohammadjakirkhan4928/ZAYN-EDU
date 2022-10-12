import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Errorpage from './Component/Errorpage/Errorpage';
import Blog from './Component/Blog/Blog';
import Topic from './Component/Topic/Topic';
import Quez from './Component/Quez/Quez';
import Static from './Component/Static/Static';



function App() {
const router = createBrowserRouter([
  {
    path:'/',
    loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
    errorElement:<Errorpage></Errorpage>,
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Topic></Topic>
      },

        {
          path:'/topic/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            },
          element:<Quez></Quez>
        },
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
