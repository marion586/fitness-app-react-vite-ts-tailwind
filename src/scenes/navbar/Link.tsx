import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`#${
        selectedPage === lowerCasePage
      } ? "text-primary-500 " : "" transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(lowerCasePage as SelectedPage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
