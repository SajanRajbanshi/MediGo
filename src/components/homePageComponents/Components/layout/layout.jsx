// import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../Header_Component/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  );
}

