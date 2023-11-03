type componentProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton = ({ label, disabled, onClick, type }: componentProps) => {
  return (
    <button
      type={type}
      className="hover:shadow-activeSelection hover:bg-purpleHoverColor bg-purple text-white rounded-lg !h-[46px] py-[11px] px-[27px] font-instrumentSans font-medium  disabled:bg-purpleHoverColor disabled:shadow-none disabled:cursor-not-allowed transition"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
