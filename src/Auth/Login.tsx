import FormControl from "../components/FormControl";
import emailIcon from "../assets/images/icon-email.svg";
import passwordIcon from "../assets/images/icon-password.svg";
import PrimaryButton from "../components/PrimaryButton";
import FormContainer from "../components/FormContainer";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/reducers/Auth.slice";

const Login = () => {
  const dispatch = useDispatch();
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid email").required("Can't be empty"),
      password: yup.string().min(8).required("Please check again"),
    }),
    onSubmit: () => {
      dispatch(loginAction());
    },
  });

  return (
    <>
      <FormContainer
        title="Login"
        subtitle="Add your details below to get back into the app"
        footer="Don't have an account?"
        footerLinkText="Create account"
        footerLink="/register"
        submit={loginForm.handleSubmit}
      >
        <FormControl
          id="email"
          label="Email Address"
          type="email"
          icon={emailIcon}
          placeholder="e.g. alex@email.com"
          form={loginForm}
        />
        <FormControl
          id="password"
          label="Password"
          type="password"
          icon={passwordIcon}
          placeholder="Enter your password"
          form={loginForm}
        />
        <PrimaryButton label="Login" type="submit" />
      </FormContainer>
    </>
  );
};

export default Login;
