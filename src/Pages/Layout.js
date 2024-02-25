import { Outlet, Link } from "react-router-dom";
import Menu from "../Components/Menu";

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
