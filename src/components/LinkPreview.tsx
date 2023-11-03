import { LinkState } from "../redux/storeTypes";
import rightArrow from "../assets/images/icon-arrow-right.svg";
import frontendmentor from "../assets/images/frontendmentor.svg";

const bgColor = (id: string) => {
  switch (id) {
    case "github":
      return "bg-github";
    case "frontendmentor":
      return "bg-frontendmentor";
    case "twitter":
      return "bg-twitter";
    case "linkedin":
      return "bg-linkedin";
    case "youtube":
      return "bg-youtube";
    case "facebook":
      return "bg-facebook";
    case "twitch":
      return "bg-twitch";
    case "devto":
      return "bg-devto";
    case "codewars":
      return "bg-codewars";
    case "codepen":
      return "bg-codepen";
    case "freecodecamp":
      return "bg-freecodecamp";
    case "gitlab":
      return "bg-gitlab";
    case "hashnode":
      return "bg-hashnode";
    case "stackoverflow":
      return "bg-stackoverflow";
    default:
      break;
  }
};

type LinkPreviewProps = {
  link: LinkState;
};
const LinkPreview = ({ link }: LinkPreviewProps) => {
  const isFrontendmentor = link.platformId === "frontendmentor";
  return (
    <a
      href={link.link}
      target="_blank"
      className={`w-[236px] h-11 flex gap-2 items-center rounded-lg px-4 py-[11px] hover:shadow-link transition ${bgColor(
        link.platformId
      )}`}
      style={{
        color: isFrontendmentor ? "#000" : "#fff",
      }}
    >
      <img
        src={link.platformId === "frontendmentor" ? frontendmentor : link.icon}
        alt="icon"
        className={
          link.platformId === "frontendmentor"
            ? ""
            : "filter invert brightness-0 saturate-100"
        }
      />
      <span className="flex-grow">{link.name}</span>
      <img
        src={rightArrow}
        alt="rightArrow"
        className={isFrontendmentor ? "filter invert" : ""}
      />
    </a>
  );
};

export default LinkPreview;
