import Link from "next/link";
import HeroBlob from "../shared/blob/heroBlob";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../shared/motion";
import { CldImage } from "next-cloudinary";

const MobileHero = () => {
  return (
    <section id="home" className="min-h-screen mt-24">
      {/* blob and image */}
           {/* <HeroBlob /> */}
           <div>
              <CldImage
          className="object-cover w-full clip"
          src="https://res.cloudinary.com/dxveggtpi/image/upload/v1764247214/erasebg-transformed_bg9lce.png"
          alt="student"
          width={800}
          height={800}
        />
           </div>
        
      {/* write-up */}
      <div className="flex flex-col gap-7">
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
      </div>
    </section>
  );
};

export default MobileHero;
