import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";

const RootLayout = () => {
  return (
    <div className="p-6">
      <Navbar />
      <div className="flex gap-6">
        <Preview />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
