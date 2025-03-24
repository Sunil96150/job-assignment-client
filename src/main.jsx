import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './component/MainLayout.jsx';
import NotfoundPage from './pages/NotfoundPage.jsx';
import Home from './pages/Home.jsx';
import Details from './pages/Details.jsx';
import Login from './pages/Login.jsx';
import AddAssignment from './pages/AddAssignment.jsx';
import Update from './pages/Update.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import AuthProvider from './pages/provider/AuthProvider.jsx';
import Register from './pages/Register.jsx';
import Apply from './pages/Apply.jsx';
import PrivateRoute from './component/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotfoundPage></NotfoundPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-job-server-dkbc92rqk-sunil1986s-projects.vercel.app/assignments')
      },
      {
        path: '/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-job-server-dkbc92rqk-sunil1986s-projects.vercel.app/assignments/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://assignment-job-server-dkbc92rqk-sunil1986s-projects.vercel.app/assignments/${params.id}`)
      },
      {
        path: '/addassignment',
        element: <PrivateRoute><AddAssignment></AddAssignment></PrivateRoute>
        
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,

      },
      {
        path: '/apply',
        element:<Apply></Apply>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
