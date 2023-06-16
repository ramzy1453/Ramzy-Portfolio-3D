import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer h-[30rem]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            {demo_link && (
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <FaPlay className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="projects">
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <h1 className="my-20 text-4xl text-center">Web Projects</h1>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          disableOnInteraction: false,
          reverseDirection: true,
          delay: 1500,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.web.map((project, index) => (
          <SwiperSlide key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="my-20 text-4xl text-center">3D Web Projects</h1>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          disableOnInteraction: false,
          reverseDirection: true,
          delay: 1500,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.threejs.map((project, index) => (
          <SwiperSlide key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="my-20 text-4xl text-center">AI Projects</h1>
      <Swiper
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          disableOnInteraction: false,
          reverseDirection: true,
          delay: 1500,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.ai.map((project, index) => (
          <SwiperSlide key={`project-${index}`}>
            <ProjectCard index={index} {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SectionWrapper(Works, "");
