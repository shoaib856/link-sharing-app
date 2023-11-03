/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";

type componentProps = {
  label: string;
  type: string;
  id: string;
  icon: string;
  placeholder?: string;
  form: FormikProps<any>;
  labelClass?: string;
};

const FormControl = ({
  label,
  type,
  id,
  icon,
  placeholder,
  form,
  labelClass,
}: componentProps) => {
  const { errors, touched } = form || {};
  const notValid = errors[id] && touched[id];

  return (
    <div>
      <label
        htmlFor={id}
        className={`${labelClass} mb-1 block capitalize text-darkGrey ${
          notValid && "text-red"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <img
          className="absolute top-1/2 -translate-y-1/2 left-3"
          src={icon}
          alt="fieldIcon"
        />
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...form.getFieldProps(id)}
          className={`focus:border-purple  
            ${notValid && "border-red text-red"}
          focus:shadow-activeSelection transition-all pr-4 py-3 pl-11 border border-borders bg-white rounded-lg outline-none placeholder:text-darkGrey placeholder:opacity-50 w-full font-instrumentSansRegular text-darkGrey`}
        />
        {notValid && (
          <p className="text-red text-[12px] bg-white absolute top-1/2 -translate-y-1/2 right-3">
            {errors[id] as string}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormControl;
