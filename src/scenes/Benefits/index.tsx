import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Arth Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, placeat?",
  },
];
import Htext from "@/components/common/HText";
import Benefit from "./UI/Benefit";
import ActionButton from "@/components/common/ActionButton";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <Htext>MORE THAN JUST GYM.</Htext>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
            repudiandae obcaecati id, ab fugiat accusamus aut sed iusto sapiente
            laborum dolorum ducimus nemo! Aliquam quos eligendi hic sint
            officia?
          </p>
        </motion.div>

        {/* BENEFITS */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}

        <div className="mt-16 items-center justify-between gap-20  md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="" />
          {/* DESCRIPTION */}

          <div>
            {/* TITLE */}

            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    MILLIONS OF HAPPY MEMBERS GETTING {"  "}
                    <span className="text-primary-500"> FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt dolor culpa reiciendis neque rem ullam nemo vero
                sapiente qui quis et odio in minima soluta asperiores, alias ea
                magni minus? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Incidunt, dolorum.
              </p>

              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
                vel beatae tenetur omnis quaerat itaque accusamus in
                reprehenderit, reiciendis ut eligendi deserunt accusantium
                doloribus ducimus officiis temporibus, dolores illum cumque.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative z-[10] mt-16">
              <div className="before:absolute before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
