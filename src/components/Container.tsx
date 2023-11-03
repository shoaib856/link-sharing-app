type ContainerProps = {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
};

const Container = ({ children, title, subtitle }: ContainerProps) => {
  return (
    <div className="bg-white flex-1 rounded-xl flex flex-col justify-between">
      <div className="p-10 ">
        <div className="mb-10">
          <h1 className="text-darkGrey mb-2 text-[32px] font-semibold">
            {title}
          </h1>
          {subtitle && <p className="text-gray">{subtitle}</p>}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Container;
