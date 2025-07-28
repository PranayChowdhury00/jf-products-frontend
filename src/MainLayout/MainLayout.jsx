import { Outlet } from "react-router-dom";
import Navbar from "../Componnets/Navbar";
import Footer from "../Componnets/Footer";


const MainLayout = () => {
 return (
  <div>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <Footer></Footer>
  </div>
 );
};

export default MainLayout;