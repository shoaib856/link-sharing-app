import illustrationEmpty from "../assets/images/illustration-empty.svg";

const EmptyLinksContainer = () => {
  return (
    <div className="p-5 flex flex-col gap-10 bg-lightGray rounded-xl">
      <img
        className="max-w-[250px] w-full mx-auto"
        src={illustrationEmpty}
        alt="illustration empty"
      />
      <div className="text-center max-w-[488px] w-full mx-auto">
        <h2 className="text-darkGrey mb-6 text-[2rem] font-semibold">
          Let’s get you started
        </h2>
        <p className="text-gray">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </div>
    </div>
  );
};

export default EmptyLinksContainer;
