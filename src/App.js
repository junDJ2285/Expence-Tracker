import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/layout';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import store from './pages/store/store';
import Home from './pages/home/home';
import Expence from './pages/expence/expence';

function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
       {
        
        path:"/",
        element:<Home/>
       },
       {
        
        path:"/Login",
        element:<Login/>
       },
       {
        path:"/Signup",
        element:<Signup/>
       },
       {
        path:"/Expence",
        element:<Expence/>
       }
    ]
  }])
  return (
  < ConfigProvider>
     <Provider store={store}>
      <RouterProvider  router={router}/>
     </Provider>
  </ConfigProvider>
  );
}

export default App;
