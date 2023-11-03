import FormContainer from "../components/FormContainer";
import FormControl from "../components/FormControl";
import emailIcon from "../assets/images/icon-email.svg";
import passwordIcon from "../assets/images/icon-password.svg";
import PrimaryButton from "../components/PrimaryButton";
import { useFormik } from "formik";
import * as yup from "yup";
import { loginAction } from "../redux/reducers/Auth.slice";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("invalid email").required("Can't be empty"),
      password: yup.string().min(8).required("Please check again"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), ""], "Passwords must match"),
    }),
    onSubmit: () => {
      dispatch(loginAction());
    },
  });
  return (
    <FormContainer
      title="Create Account"
      subtitle="Let's get you started sharing your links!"
      footer="Already have an account?"
      footerLinkText="Login"
      footerLink="/"
      submit={registerForm.handleSubmit}
    >
      <FormControl
        id="email"
        label="Email Address"
        type="email"
        icon={emailIcon}
        placeholder="e.g. alex@email.com"
        form={registerForm}
      />
      <FormControl
        id="password"
        label="create Password"
        type="password"
        icon={passwordIcon}
        placeholder="At least 8 characters"
        form={registerForm}
      />
      <FormControl
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        icon={passwordIcon}
        placeholder="At least 8 characters"
        form={registerForm}
      />
      <PrimaryButton label="Create Account" />
    </FormContainer>
  );
};

export default Register;
