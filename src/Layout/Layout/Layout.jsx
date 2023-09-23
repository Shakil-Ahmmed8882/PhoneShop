import { Outlet } from "react-router-dom";
import Navbar from "../Header/Nav/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Layout;