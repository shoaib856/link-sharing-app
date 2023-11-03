import SecondaryButton from "../../components/SecondaryButton";
import EmptyLinksContainer from "../../components/EmptyLinksContainer";
import Link from "../../components/Link";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/storeTypes";
import { addLink } from "../../redux/reducers/Links.slice";
import Container from "../../components/Container";

const Links = () => {
  const dispatch = useDispatch();
  const links = useSelector((state: Store) => state.links);

  const handleAddLink = () => {
    dispatch(addLink());
  };

  return (
    <Container
      title="Customize your links"
      subtitle="Add/edit/remove links below and then share all your profiles with the world!"
    >
      <SecondaryButton
        onClick={handleAddLink}
        className="w-full mb-6"
        label="+ Add new link"
      />
      {links.length ? (
        <div className="flex flex-col gap-6">
          {links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </div>
      ) : (
        <EmptyLinksContainer />
      )}
    </Container>
  );
};

export default Links;
