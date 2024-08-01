import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/homePageComponents/Components/layout/layout"
import Home from "../components/homePageComponents/pages/Home/Home"
import ContactHub from "../components/homePageComponents/pages/Contact_Hub_Component/ContactHub";
import Prescription from "../components/homePageComponents/pages/Prescription_Component/Prescription";
import RxHistory from "../components/homePageComponents/pages/RxHistory_component/RxHistory";
import Products from "../components/homePageComponents/pages/Product_Component/Product";
import SearchHospitals from "../components/homePageComponents/Components/SearchHospitals/SearchHospitals";
import Error from "../components/homePageComponents/Components/Error";
import AuthCheckComponent from "../components/AuthCheckComponent";

const Dashboard = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <AuthCheckComponent/>,
      children: [
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
    }])

  return (
    <RouterProvider router={router} />
  )
}

export default Dashboard;