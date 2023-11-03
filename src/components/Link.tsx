import { useFormik } from "formik";
import SelectMenu from "./SelectMenu";
import FormControl from "./FormControl";
import linkIcon from "../assets/images/icon-link.svg";
import dragIcon from "../assets/images/icon-drag-and-drop.svg";
import { LinkState } from "../redux/storeTypes";
import { useDispatch } from "react-redux";
import { modifyLink, removeLink } from "../redux/reducers/Links.slice";
import PrimaryButton from "./PrimaryButton";
import * as yup from "yup";

type LinkProps = {
  link: LinkState;
};

const Link = ({ link }: LinkProps) => {
  const dispatch = useDispatch();
  const linkForm = useFormik<LinkState>({
    initialValues: {
      platformId: link?.platformId,
      link: link?.link,
      id: link?.id,
      icon: link?.icon,
      name: link?.name,
    },
    validationSchema: yup.object({
      link: yup.string().url("Please check the URL").required("Can't be empty"),
    }),
    onSubmit: (values) => {
      dispatch(modifyLink(values));
    },
  });

  return (
    <div className="flex flex-col gap-3 p-5 bg-lightGray rounded-xl">
      <div className="flex justify-between items-center">
        <button
          className="flex items-center gap-2 cursor-grab active:cursor-grabbing "
          type="button"
        >
          <img src={dragIcon} alt="drag icon" />
          <span className="font-semibold text-gray">Link #{link.id}</span>
        </button>
        <button
          onClick={() => dispatch(removeLink(link.id))}
          className="text-gray"
        >
          Remove
        </button>
      </div>
      <SelectMenu form={linkForm} linkId={link.id} />
      <FormControl
        labelClass="text-xs"
        label="Link"
        form={linkForm}
        id="link"
        type="text"
        placeholder="e.g. https://www.github.com/johnappleseed"
        icon={linkIcon}
      />
      <div className="self-end pt-4 w-full flex justify-end">
        <PrimaryButton
          label="Save"
          type="button"
          onClick={linkForm.submitForm}
          disabled={
            !linkForm.isValid ||
            (linkForm.values.link === link.link &&
              linkForm.values.platformId === link.platformId)
          }
        />
      </div>
    </div>
  );
};

export default Link;
