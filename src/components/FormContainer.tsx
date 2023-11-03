import { Link } from "react-router-dom";
import logo from "../assets/images/logo-devlinks-large.svg";

type FormContainerProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: string;
  footerLink?: string;
  footerLinkText?: string;
  submit?: () => void;
};

const FormContainer = ({
  children,
  subtitle,
  title,
  footer,
  footerLink,
  footerLinkText,
  submit,
}: FormContainerProps) => {
  return (
    <div className="max-w-[476px] w-full mx-auto">
      <img src={logo} alt="logo" className="mb-[51px] mx-auto animate-bounce" />
      <div className="bg-white p-10 !font-instrumentSans">
        <div className="mb-10">
          <h1 className="text-[2rem] mb-2 font-semibold text-darkGrey">
            {title}
          </h1>
          <p className="text-gray">{subtitle}</p>
        </div>
        <form className="flex flex-col gap-6" onSubmit={submit}>
          {children}
          {footer && (
            <p className="text-gray text-center">
              {footer}
              <Link to={footerLink || "/"} className="text-purple">
                {footerLinkText}
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
