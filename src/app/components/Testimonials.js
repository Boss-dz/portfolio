import { Fade } from "react-awesome-reveal";
import Card from "./Card";

export default function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center mt-6 text-mono text-white px-4 mb-3">
      {/* Title */}
      <div className="mb-8 w-fit text-center">
        <Fade direction="left" triggerOnce={true}>
          <h1 className="uppercase relative text-3xl 2xl:text-5xl font-bold pb-2 max-sm:text-2xl">
            Testimonials
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-amber-500 via-orange-400 via-red-400 to-rose-500"></span>
          </h1>
        </Fade>
      </div>

      {/* Cards Container (Flex) */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8  w-full ">
        <Fade direction="left" cascade={true} damping={0.2} triggerOnce={true}>
          <Card
            name="Riad as"
            job="Entrepreneur "
            description="Wassim’s work was fantastic. He’s creative, detail-oriented, and delivered exactly what I needed. Highly recommended!"
            picture="/pic2.jpeg"
          />
          <Card
            name="Riyad nehar"
            job="Freelancer"
            description="As a freelance video editor, wassim doesn’t just cut clips he crafts stories. Every project feels personalized, polished, and powerful. Whether it’s a promo, vlog, or cinematic edit, he brings that rare mix of creativity and precision."
            picture="/test.jpeg"
          />
          <Card
            name="Abderrahmane boukhadra"
            job="Ceo Chellalet Electronique"
            description="وسيم أظهر مهارة استثنائية في تحرير الفيديو. كان عمله دقيقاً وإبداعياً، مما جعل كل مشروع يتألق"
            picture="/pic3.jpeg"
          />
        </Fade>
      </div>
    </div>
  );
}
