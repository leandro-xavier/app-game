import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../components/homePage/HomePage';
import Navigation from '../components/navigation/Navigation';
import {Login} from '../components/loginPage/Login.jsx';
import {Register} from '../components/registerPage/Register';
import { Dashboard } from '../components/dashboardPage/Dashboard';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element={<HomePage/>}> </Route>
            <Route path="/register" element={ <Register/>}>  </Route>
            <Route path="/login" element={ <Login/>}>  </Route>
            <Route path="/dashboard" element={ <Dashboard/>}>  </Route>
        </Routes>
  </BrowserRouter>
  )
}
