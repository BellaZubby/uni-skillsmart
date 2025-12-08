import Link from "next/link";
import { CldImage } from "next-cloudinary";
import Users from "../components/Users";

type Props = {
  className: string;
}

const MobileHero = ({className}: Props) => {
  return (
    <section id="home" className={`mt-24 pb-14 ${className}`}>
      {/* blob and image */}
      {/* <HeroBlob /> */}
      <div>
        <CldImage
          className="object-cover w-full home-clip gradient-bg"
          src="https://res.cloudinary.com/dxveggtpi/image/upload/v1764247214/erasebg-transformed_bg9lce.png"
          alt="student"
          width={800}
          height={800}
        />
      </div>

      {/* write-up */}
      <div className="flex flex-col gap-7 mx-2 mt-10">
        <h1 className="sm:text-3xl text-2xl font-extrabold font-shareTech text-primary-100 text-center">
          Verified Skills. Trusted Bookings. Empowering Students.
        </h1>
        <p className="text-[16px] font-inter xs:text-center">
          A secure campus market place where students offer services, earn
          income, and build real-world experience.
        </p>
        {/* <Button onClick={}>Explore Skills</Button> */}
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-center gap-5 font-cabin mx-10">
          <Link
            href={"/register/client"}
            className="bg-primary-100 text-center py-3 px-3 rounded text-sm text-white font-medium transition-colors duration-300 hover:bg-primary-100/50 hover:text-gray-300"
          >
            Start booking services
          </Link>
          <Link
            href={"/register/provider"}
            className="bg-primary-200 text-center py-3 px-3 rounded text-sm font-medium transition-colors duration-300 hover:bg-primary-200/50 hover:text-gray-500"
          >
            Become a verified provider
          </Link>
        </div>
        <Users className="mt-5" />
      </div>
      <div></div>
    </section>
  );
};

export default MobileHero;
