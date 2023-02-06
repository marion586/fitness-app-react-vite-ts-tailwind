import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Htext from "@/components/common/HText";
import Class from "./UI/Class";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const classes: Array<ClassType> = [
  {
    name: "weight Tranning classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam, ab exercitationem ducimus expedita rem vel perferendis aliquid harum hic?",
    image: image1,
  },
  {
    name: "fitness classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam, ab exercitationem ducimus expedita rem vel perferendis aliquid harum hic?",
    image: image2,
  },
  {
    name: "yoga classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam, ab exercitationem ducimus expedita rem vel perferendis aliquid harum hic?",
    image: image3,
  },
  {
    name: "ab core classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam, ab exercitationem ducimus expedita rem vel perferendis aliquid harum hic?",
    image: image4,
  },
  {
    name: "adventure classes",
    image: image5,
  },
  {
    name: "weight Tranning classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam, ab exercitationem ducimus expedita rem vel perferendis aliquid harum hic?",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/6">
            <Htext>OUR CLASSES</Htext>

            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              adipisci laudantium repellendus mollitia, placeat sed delectus
              modi ex aliquid blanditiis. Excepturi necessitatibus reprehenderit
              dolorem ea dolore, magnam ipsa hic nesciunt.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden ">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                name={item.name}
                description={item.description}
                image={item.image}
                key={`${item.name}-${index}`}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
