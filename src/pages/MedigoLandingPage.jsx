import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '../App.css'
import Signupin from '../components/landingPageComponents/Signupin';
import LandingPage from '../components/landingPageComponents/LandingPage';


export default function MedigoLandingPage()
{
    return (
        <Router>
          <Routes>
            <Route
              exact path='/'
              element={<LandingPage />}>
            </Route>
            <Route
              exact path='/Signin'
              element={
                <Signupin
                  initial={
                    {
                      state: 1,
                      switch: {
                        message: "Don't have an account?",
                        action: "Sign up"
                      }
                    }
                  } />
              }>
            </Route>
            <Route
              exact path='/Signup'
              element={
                <Signupin
                  initial={
                    {
                      state: 0,
                      switch: {
                        message: "Already have an account?",
                        action: "Sign in"
                      }
                    }
                  } />
              }>
            </Route>
            <Route exact path="*" element={<LandingPage/>} >
              </Route>
          </Routes>
        </Router>
      )
}