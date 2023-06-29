import { Outlet } from "react-router";
import Header from "./../../routes/Header";

const RouteLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
};

export default RouteLayout;
