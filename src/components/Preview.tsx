import { useSelector } from "react-redux";
import LinkPreview from "./LinkPreview";
import { Store } from "../redux/storeTypes";
import phone from "../assets/images/illustration-phone-mockup.svg";

const Preview = () => {
  const links = useSelector((state: Store) => state.links);
  return (
    <div className="p-6 bg-white rounded-xl w-[560px] flex flex-col items-center">
      <div className="sticky top-7 mx-auto">
        <img src={phone} alt="phone mock up" />
        {links.length ? (
          <div className="not-scroll flex flex-col gap-5 z-10 !h-[332px] overflow-y-scroll absolute p-4 top-[262px] left-1/2 -translate-x-1/2">
            {links.map((link) => (
              <LinkPreview link={link} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Preview;
