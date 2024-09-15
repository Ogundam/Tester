import logo from './logo.svg';

import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import { useSelector } from'react-redux';

const Home = lazy(() => import("./Home"))
const Login = lazy(() => import("./Login"))
const Signup = lazy(() => import("./Signup"))

function App() {

  const login = useSelector((state) => state.user.login)
  

  return (
    <Suspense
      fallback={
        <Loader/>
      }
    >
      
      

      <BrowserRouter>
      <Routes>

      <Route path='/' element={ login== true ? <Home/> : <Login/> }/>
      <Route path='/Login' element={ <Login/> }/>
      <Route path='/Signup' element={ <Signup/> }/>


      </Routes>
      </BrowserRouter>

    </Suspense>
  );
}

export default App;
