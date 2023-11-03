import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
