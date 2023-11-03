type SecondaryButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
};

const SecondaryButton = ({
  label,
  disabled,
  onClick,
  type,
  icon,
  className,
}: SecondaryButtonProps) => {
  return (
    <button
      type={type}
      className={
        "border border-purple hover:bg-lightPurple bg-white text-purple disabled:opacity-25 disabled:bg-white disabled:cursor-not-allowed transition px-[27px] py-[11px] !h-[46px] flex items-center justify-center gap-2 rounded-lg capitalize font-medium " +
        className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="icon" className="mr-2" />}
      <span>{label}</span>
    </button>
  );
};

export default SecondaryButton;
