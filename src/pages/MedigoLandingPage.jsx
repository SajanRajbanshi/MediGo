import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../App.css'
import Auth from '../components/landingPageComponents/Auth';
import LandingPage from '../components/landingPageComponents/LandingPage';
import SignupInput from "../components/landingPageComponents/SignupInput";
import SigninInput from "../components/landingPageComponents/SigninInput";


export default function MedigoLandingPage()
{
  const router=createBrowserRouter([
    {path:"/",element:<LandingPage></LandingPage> },
    {path:"/auth", element:<Auth></Auth>,children:[
      {path:"/auth/signup",element:<SignupInput></SignupInput>},
      {path:"/auth/",element:<SigninInput></SigninInput>}
    ]}
  ])
  return <RouterProvider router={router} />;
}
