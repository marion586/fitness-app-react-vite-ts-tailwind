import React, { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "./shared/types";

SelectedPage;
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
      console.log(isTopOfPage, "istopmlk", scrollY);
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        excepturi, accusamus sint molestiae harum quod deserunt id dolore
        quibusdam ullam! Eius sit quis, nemo in consequatur laboriosam debitis
        libero molestias, sint cum cupiditate. Consectetur assumenda enim
        recusandae possimus numquam ut! Placeat pariatur quis aperiam, voluptate
        facilis et necessitatibus aliquam laudantium velit. Aliquam quia
        explicabo sapiente ab odio cupiditate, laboriosam, vero optio facere
        dolor ipsam? Nam sequi laudantium eligendi sed quod cupiditate quaerat
        quo placeat modi quisquam quasi eveniet veritatis dolorum delectus
        cumque animi corrupti, odio neque quos mollitia! Enim labore officia ea
        culpa suscipit soluta maiores minus, omnis animi obcaecati iusto, fuga
        at tempora velit. Optio omnis laboriosam id nobis voluptatibus,
        dignissimos enim corporis deserunt animi fugiat dolores rem nesciunt
        ratione quo at ad in libero aperiam aliquid sunt quia velit cumque quas?
        Corporis ad doloribus voluptate ex modi, non sapiente omnis. Porro id
        possimus eaque praesentium asperiores fugit harum eius quos adipisci
        earum saepe cupiditate accusamus illo pariatur repellat, accusantium
        cumque odio vitae rerum vel. Adipisci quasi hic, numquam, harum quam
        assumenda vitae nemo ipsa labore obcaecati saepe mollitia consequuntur
        quae odit incidunt debitis quo reiciendis. Vero maiores corporis totam
        aspernatur tempore placeat fugit esse perferendis culpa animi natus
        accusantium optio, laboriosam sequi numquam sed? Perspiciatis, tempora
        vero nam nulla quasi quisquam perferendis quidem asperiores accusantium.
        Eum temporibus amet architecto nulla nam eligendi quisquam consequatur
        iure, sint totam aspernatur alias. Ad reprehenderit animi dolorum saepe
        eveniet ipsa iste perferendis vitae vero, eius modi natus hic qui
        voluptas adipisci id voluptates accusantium illo aliquam iusto! Ad rerum
        quaerat hic dicta dolor voluptatem nemo necessitatibus accusantium sed
        doloribus corporis voluptates, voluptate, laborum molestiae? Pariatur
        commodi dicta ullam. Optio dolorum ducimus ipsam inventore cum cumque
        atque harum dolore eligendi qui exercitationem molestiae aspernatur quam
        voluptate vitae fugiat tempore, cupiditate omnis quae sapiente eaque id
        tenetur voluptas quisquam. Porro sunt, vero ducimus ratione voluptas
        atque dolore, aliquid repudiandae nesciunt facilis autem? Voluptatum id
        autem, aliquid culpa saepe dolor asperiores illo labore porro dolores
        possimus veritatis adipisci ut laboriosam enim, consequuntur tempore
        eaque! Cumque nemo autem alias praesentium dignissimos excepturi iusto,
        fugiat deleniti enim. Atque repellendus amet vitae quae cum natus
        provident quaerat voluptas voluptates, molestiae neque in laboriosam
        debitis dolorem sint? Dolore molestias iure necessitatibus laudantium
        fugiat? Error impedit, nobis laboriosam tenetur ipsam voluptate deserunt
        quae, omnis id iste veritatis nesciunt accusamus natus. Eligendi illo
        facere nostrum eos minus delectus in ex assumenda! Quisquam cumque
        consequatur fugiat assumenda quam id recusandae quidem enim maiores eum
        officiis earum, molestias fuga nostrum ullam corporis, architecto
        dolorum quis esse iure cum adipisci suscipit voluptas. Iure nostrum
        veniam rem quasi! Non obcaecati numquam iure praesentium eos nostrum
        voluptates consectetur quas fugit corrupti, est blanditiis temporibus
        corporis alias provident ab laborum necessitatibus consequatur rerum
        fuga voluptate? Cupiditate, incidunt aperiam doloribus molestias et
        mollitia hic maiores exercitationem nihil. Non aliquid error sint, iste
        veritatis quasi exercitationem ut veniam quo temporibus voluptatum, quia
        repudiandae earum quibusdam quod consequuntur, praesentium aut tempore
        quos ab dolores cupiditate ratione odio. Beatae velit minus nulla
        deleniti fugit dicta eos, quos molestiae ipsum. Facilis non autem
        veritatis enim voluptatibus quod porro distinctio dolore! Quaerat
        laudantium at reiciendis quae, a officiis nemo magni. Doloribus, illo
        sequi. Iste illum porro natus dicta enim rem, ipsam commodi sapiente
        reprehenderit repellendus tenetur officia pariatur placeat aliquam
        dolorem nisi ipsum molestias fugiat dolore cum tempora nemo! Rerum esse
        autem error impedit exercitationem sunt iusto voluptatem, voluptates
        dolore quis laborum alias earum iste accusamus quod. Doloribus molestias
        quisquam numquam consequatur adipisci nostrum placeat, accusantium
        aliquam! Totam molestiae ut et neque qui, dicta officiis aperiam tenetur
        inventore! Illo distinctio nemo vel neque quod delectus. Eos deleniti ut
        accusamus expedita doloribus eveniet non repellendus dicta! Ducimus
        recusandae consectetur itaque incidunt temporibus eligendi ex
        consequatur doloribus placeat et. Deleniti modi odio maiores aliquid
        amet sequi perspiciatis blanditiis officiis ratione sint corrupti eum
        commodi, illo velit asperiores neque tempore iusto nobis ex. Aliquam
        veniam nulla iusto odio at consectetur autem laboriosam corporis
        officiis animi temporibus accusantium cum maiores unde ipsam voluptate
        optio, officia quis mollitia earum dolores tenetur! Fugiat ducimus
        doloremque cumque possimus necessitatibus sint, enim reiciendis ullam
        deserunt unde atque vel maxime obcaecati exercitationem earum minima,
        reprehenderit vero quo, laudantium blanditiis perferendis itaque nihil!
        Esse repellat sint reiciendis, eaque excepturi quam adipisci dicta,
        nihil est neque beatae cupiditate ipsam odio eveniet. Eum ullam, dolore
        unde ducimus officiis excepturi delectus temporibus, in commodi impedit
        totam vel accusantium, culpa aliquid similique soluta nostrum maxime id
        molestiae! Sed, optio? Nostrum doloribus consectetur impedit atque ipsum
        eos aut harum ipsa fugit, quaerat, ab accusantium voluptas quos. Natus
        quaerat quas beatae odit nobis commodi mollitia explicabo temporibus
        amet cupiditate provident quisquam, magnam aperiam ipsum quae iste sed
        est nostrum accusantium sit quibusdam voluptas veritatis tempora quos!
        Consequatur perspiciatis laudantium at deserunt porro? Velit unde
        tenetur nostrum asperiores sapiente possimus distinctio at eos sequi
        suscipit expedita corporis maiores eligendi et, accusantium architecto
        modi. Natus eius est ipsam, adipisci atque quibusdam doloribus
        consequuntur dolores optio magni voluptas unde eveniet debitis nisi
        perferendis neque consectetur a quam aspernatur. Illo porro sed nisi
        maiores, dicta corporis ratione temporibus magnam consequatur dolores
        eius dolorum vero iusto aut voluptates optio doloribus quam. Harum
        commodi delectus laboriosam. Cupiditate quibusdam non sint quia omnis,
        expedita reprehenderit accusantium facilis? Aperiam eligendi quidem iste
        quod voluptas hic asperiores voluptates? Quod eaque molestiae provident!
        Debitis, perspiciatis? Similique aliquam fuga maxime non natus libero ea
        blanditiis minima. Deserunt sint unde error possimus velit culpa
        corrupti quod, quisquam, ratione consequatur officiis ipsum explicabo et
        incidunt neque labore magnam excepturi, maiores nam sunt esse ipsam.
        Saepe laborum odio autem hic a atque consequuntur culpa maiores adipisci
        fuga, numquam eligendi in optio! Dolorum iusto, earum ab necessitatibus
        maxime optio accusamus quia! Magni, consequatur odit corrupti
        repudiandae natus aliquam, iste animi exercitationem libero, adipisci
        saepe repellat dolorem iure cumque. Commodi voluptatibus distinctio est
        eius, eveniet, quia dolor cupiditate doloremque quam quaerat hic,
        ratione nam maiores qui nostrum architecto aperiam nobis ad nemo ab. Ut
        laboriosam repudiandae vitae, facilis quos impedit soluta natus maiores
        commodi unde!
      </p>
    </div>
  );
};

export default App;
