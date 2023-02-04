import ActionButton from "@/components/common/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";

import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1600px)");
  return (
    <section id="home" className="gap-16 bg-gray-20  py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}

      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGs */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              fuga!
            </p>
          </div>
        </div>
        {/* Image */}
        <div></div>
      </div>
    </section>
  );
};

export default Home;
