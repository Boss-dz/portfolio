import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const currentDate = new Date();
const year = currentDate.getFullYear();
const age = year - 2004;

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-6 text-white font-mono max-md:mt-28 max-sm:mt-30">
      {/* Left Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
        <Fade direction="down" triggerOnce={true}>
          <p className="relative text-[#87F5F5] font-bold text-2xl pb-2 2xl:text-3xl">
            MOHAMED WASSIM
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-[#FFE5F1] via-[#F042FF] via-[#7226FF]"></span>
          </p>
          <h1 className="text-4xl font-bold text-white max-md:text-3xl pt-2 max-sm:text-3xl 2xl:text-5xl">
            PROFESSIONAL VIDEO EDITOR
          </h1>
          <p className="mt-4 text-base text-[#FFE5F1] 2xl:text-lg">
            Making Your Videos Look More Cool.
          </p>
        </Fade>
        {/* Skills / Tags Section */}
        <div className="flex flex-wrap gap-3 mt-4">
          <Fade cascade={true} damping={0.3} triggerOnce={true}>
            {[
              `${age} Y.O`,
              "VIDEO EDITING",
              "ADOBE PREMIERE PRO",
              "ADOBE ILLUSTRATOR",
              "ADOBE PHOTOSHOP",
              "ADOBE AFTER EFFECTS",
            ].map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 text-white rounded-lg text-sm font-semibold 2xl:px-4 2xl:py-2"
              >
                {tag}
              </span>
            ))}
          </Fade>
        </div>
        <Fade direction="up" cascade={true} damping={0.3} triggerOnce={true}>
          <Link href="#contact">
            <button className="mt-6 2xl:px-6 2xl:py-3 px-4 py-2 bg-amber-700 hover:bg-amber-900 rounded-lg text-white font-semibold cursor-pointer transition-all duration-600 ease-in-out">
              LET&apos;S TALK
            </button>
          </Link>
        </Fade>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <Fade direction="left" triggerOnce={true}>
          <div>
            <Image
              src="/PD.png"
              alt="Profile"
              width={400}
              height={500}
              className="rounded-lg object-cover 2xl:w-[600px] 2xl:h-[600px]"
              priority
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
