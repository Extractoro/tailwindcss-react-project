import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

const Banner = ({ banner, heading, subheading, btn1, btn2, type }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        <motion.div
          className={`${type === "student" ? "md:w-4/5" : "md:w-3/5"}`}
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subheading}</p>
          <div className="space-x-5 space-y-4">
            <button className="btnPrimary">{btn1}</button>
            {type !== "student" && (
              <button className="btnPrimary">{btn2}</button>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img src={banner} alt="Banner" className="lg:h-[386px]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
