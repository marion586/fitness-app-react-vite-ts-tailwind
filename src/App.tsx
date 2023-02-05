import React, { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/Home";
import Benefits from "@/scenes/Benefits";
import OurClasses from "./scenes/OurClasses";
Benefits;
const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    // on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
