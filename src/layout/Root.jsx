import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <>
        <div className="h-[68px]">
            <Nav />
        </div>

        <Outlet/>
    </>
    
  );
};

export default Root;