import Link from "next/link";
import HeroBlob from "../shared/blob/heroBlob";
import SecondBlob from "../shared/blob/secondBlob";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../shared/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen grid md:grid-cols-2 items-center justify-center px-12 relative"
    >
      {/* left */}
      <motion.div
        variants={slideInFromLeft(0.6)}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-7"
      >
        <h1 className="text-4xl font-extrabold font-shareTech text-primary-100">
          Verified Skills. <br /> Trusted Bookings. Empowering Students.
        </h1>
        <p className="text-[16px] font-inter">
          A secure campus market place where students offer services, earn
          income, and build real-world experience.
        </p>
        {/* <Button onClick={}>Explore Skills</Button> */}
        <div className="flex items-center gap-10 font-cabin">
          <Link
            href={"/register"}
            className="bg-primary-100 py-3 px-3 rounded text-white font-medium transition-colors duration-300 hover:bg-primary-100/50 hover:text-gray-300"
          >
            Start booking services
          </Link>
          <Link
            href={"/register"}
            className="bg-primary-200 py-3 px-3 rounded font-medium transition-colors duration-300 hover:bg-primary-200/50 hover:text-gray-500"
          >
            Become a verified provider
          </Link>
        </div>
      </motion.div>
      {/* right */}
        <motion.div 
        variants={slideInFromRight(0.6)}
        initial="hidden"
        animate="visible"
        className="relative w-[500px] h-[500px]">
          <div className="absolute top-0 right-0 w-full h-full z-10 animate-blob transition-all duration-300">
            <HeroBlob />
          </div>
        </motion.div>
    </section>
  );
};

export default Hero;
