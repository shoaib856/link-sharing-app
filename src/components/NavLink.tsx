import { NavLink as NavLinkRouter } from "react-router-dom";
type NavLinkProps = {
  to: string;
  label: string;
  icon: JSX.Element;
};
const NavLink = ({ label, to, icon }: NavLinkProps) => {
  return (
    <NavLinkRouter
      className={
        "nav-link px-[27px] py-[11px] flex items-center gap-2 rounded-lg capitalize font-semibold text-gray"
      }
      to={to}
    >
      {icon}
      <span>{label}</span>
    </NavLinkRouter>
  );
};

export default NavLink;
