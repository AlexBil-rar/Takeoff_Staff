import  React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { useTypedSelector } from '../hooks/useTypedSelector';
import Login from './Login';
import Home from './Home'
import { getUsers } from '../store/action/user.action';


function App() {
  const {isAuth} = useTypedSelector(state => state.user)
  const dispatch = useDispatch()
  
  React.useEffect(() => {
      dispatch(getUsers())
  })

  return (
    <Routes>
      {isAuth ? (
        <>
        <Route  path='/home' element={<Home/>} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        </>
      ) : (
        <>
          <Route path='/login' element={<Login/>} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
