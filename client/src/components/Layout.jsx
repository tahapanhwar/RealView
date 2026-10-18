import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-paper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
