
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./components/landingPageComponents/Auth";
import LandingPage from './components/landingPageComponents/LandingPage';
import SignupInput from "./components/landingPageComponents/SignupInput";
import SigninInput from "./components/landingPageComponents/SigninInput";
import SubscriptionPage from "./pages/SubscriptionPage";
import AboutUsPage from "./pages/AboutUsPage";
import AuthCheckComponent from "./components/AuthCheckComponent";
import Home from "./components/homePageComponents/pages/Home/Home"
import ContactHub from "./components/homePageComponents/pages/Contact_Hub_Component/ContactHub";
import Prescription from "./components/homePageComponents/pages/Prescription_Component/Prescription";
import RxHistory from "./components/homePageComponents/pages/RxHistory_component/RxHistory";
import Products from "./components/homePageComponents/pages/Product_Component/Product";
import SearchHospitals from "./components/homePageComponents/Components/SearchHospitals/SearchHospitals";
import Error from "./components/homePageComponents/Components/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage></LandingPage>,
    },
    {
      path: "/auth",
      element: <Auth></Auth>,
      children: [
        { path: "/auth/signup", element: <SignupInput></SignupInput> },
        { path: "/auth/", element: <SigninInput></SigninInput> },
      ],
    },
    {
      path: "/subscription",
      element: <SubscriptionPage />,
    },
    {
      path: "/about",
      element: <AboutUsPage />,
    },
    {
      path:"/home",
      element:<AuthCheckComponent/>,
      children:[
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/contact_hub",
          element: <ContactHub />,
        },
        {
          path: "/home/prescription",
          element: <Prescription />,
        },
        {
          path: "/home/rx_history",
          element: <RxHistory />
        },
        {
          path: "/home/products",
          element: <Products />
        },
        {
          path: "/home/search",
          element: <SearchHospitals />
        },
        {
          path: "*",
          element: <Error />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}
export default App;
