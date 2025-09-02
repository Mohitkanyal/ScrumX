import logo from './logo.svg';
import './App.css';
import Context from "./context";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserDetails } from './store/userSlice';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AccountPreferences from './pages/Preferences';
import TeamChat from './pages/TeamChat';
import Retrospectives from './pages/Retrospectives';
import Performance from './pages/Performance';
import SprintDetails from "./pages/SprintDetails";
import Responses from './pages/Responses';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserDetails()); 
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Login  />
        </>
      ),
    },
    {
      path: '/Home',
      element: (
        <>
          <Home  />
        </>
      ),
    },
    {
      path: '/Login',
      element: (
        <>
          <Login  />
        </>
      ),
    },
    {
      path: '/Register',
      element: (
        <>
          <Register  />
        </>
      ),
    },
    {
      path: '/TeamChat',
      element: (
        <>
          <TeamChat  />
        </>
      ),
    },
    {
      path: '/Retrospectives',
      element: (
        <>  
          <Retrospectives   />
        </>
      ),
    },
    {
      path: '/Performance',
      element: (
        <>  
          <Performance />
        </>
      ),
    },
    {
      path: '/Preferences',
      element: (
        <>  
          <AccountPreferences />
        </>
      ),
    },
    {
      path: '/Responses',
      element: (
        <>  
          <Responses />
        </>
      ),
    },
    
  { path: '/sprint/:sprintId', element: <SprintDetails /> }, 
  ]);


  return (
    <>
      <Context.Provider value={{fetchUserDetails}}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Context.Provider>
    </>
  );
}

export default App;