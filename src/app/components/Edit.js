"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

export default function Edit() {
  const [horizontalVideos, setHorizontalVideos] = useState([]);
  const [verticalVideos, setVerticalVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          "https://wassim-portfolio.onrender.com/api/videos"
        );
        const data = await res.json();

        if (data.data) {
          const videos = data.data.map((item) => ({
            category: item.Category,
            url: item.video_url,
            orientation: item.Orientation,
          }));


          // Function to group videos by category
          const groupByCategory = (videosArray) => {
            const grouped = {};
            videosArray.forEach((video) => {
              if (!grouped[video.category]) {
                grouped[video.category] = { name: video.category, videos: [] };
              }
              grouped[video.category].videos.push(video.url);
            });
            return Object.values(grouped);
          };

          setHorizontalVideos(
            groupByCategory(
              videos.filter((v) => v.orientation === "Horizontal")
            )
          );
          setVerticalVideos(
            groupByCategory(videos.filter((v) => v.orientation === "Vertical"))
          );

        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-col font-mono text-white p-6 my-6">
      {/* Main Title */}
      <div className="mb-8 ml-6 w-fit">
        <Fade direction="left" triggerOnce={true}>
          <h1 className="uppercase relative text-5xl font-bold pb-2">
            My Best Edits
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-amber-500 via-orange-400 via-red-400 to-rose-500"></span>
          </h1>
        </Fade>
      </div>

      {/* Horizontal Videos */}
      <VideoSection title="Horizontal Videos" videos={horizontalVideos} />

      {/* Vertical Videos */}
      <VideoSection title="Vertical Videos" videos={verticalVideos} />
    </div>
  );
}

function VideoSection({ title, videos }) {
  return (
    <div className="mb-12">
      <div className="mb-6 ml-6 w-fit">
        <Fade direction="left" triggerOnce={true} delay={200}>
          <h2 className="uppercase relative text-3xl font-bold pb-2 text-[#87F5F5]">
            {title}
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-gradient-to-r from-[#FFE5F1] via-[#F042FF] via-[#7226FF]"></span>
          </h2>
        </Fade>
      </div>

      <div className="flex space-x-8 overflow-x-auto">
        {videos.map((section) => (
          <div key={section.name} className="w-[400px]">
            <h2 className="text-2xl font-semibold mb-4 text-center uppercase">
              {section.name}
            </h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="pt-10 pb-14"
            >
              {section.videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <video
                    className="rounded-lg shadow-lg w-full h-[250px]"
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}
