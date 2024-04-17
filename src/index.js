import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    createBrowserRouter,
    RouterProvider,
    useParams,
  } from "react-router-dom";
import { Provider } from 'react-redux';
import AllEnquiries from './AllEnquiries';
import Navbar from './Navbar';
import StudentDetails from './StudentDetails'
import store from './store/store';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children:[
        {
            path:'/',
            element:<App/>
        },
        {
            path:'enquiries',
            element:<AllEnquiries/>,
           
        },
        {
          path:'enquiries/:name',
          element:<StudentDetails/>
        }
      ]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
        <RouterProvider router={router} />
  </Provider>
 
  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
