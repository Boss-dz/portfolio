import { Fade } from "react-awesome-reveal";


const currentDate = new Date();
const year = currentDate.getFullYear(); 
const age = year - 2004; 

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center text-white font-mono gap-y-3 mb-6 max-md:mt-14 mt-2">
      <div>
        <Fade direction="left" triggerOnce={true}>
          <h1 className="text-5xl relative uppercase pb-2 font-bold">
            About Me
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-amber-500 via-orange-400 via-red-400 to-rose-500"></span>
          </h1>
        </Fade>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="text-[#FFE5F1]text-xl text-center leading-[1.5]">
          <Fade cascade={true} damping={0.2} triggerOnce={true}>
            <span className="block">
              Hi, I'm Mohamed Wassim, a {age}-year-old video editor based in
              meftah in
            </span>
            <span className="block">
              Algeria, with five years of experience. I specialize in Premiere
            </span>
            <span className="block">
              Adobe Pro and After Effects, and using Illustrator and
            </span>
            <span className="block">Photoshop to perfect my work.</span>
            <span className="block">
              I'm always seeking new ways to tell stories thatcaptivate and
              inspire.
            </span>
          </Fade>
        </div>
      </div>
    </div>
  );
}
