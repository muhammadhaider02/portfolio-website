import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const SkillBar = ({ name, level }) => (
  <div className="w-full mb-3">
    <div className="flex justify-between text-white text-sm mb-1">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-2 bg-gray-700 rounded-full">
      <div
        className="h-2 bg-white rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const ServiceCard = ({ index, title, icon, skills }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = React.useState(false);

  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" },
    },
    index * 0.1
  );

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-6 min-h-[280px] flex justify-center items-center flex-col transition-all duration-100 ease-linear">
          {!hovered ? (
            <>
              <i className={`${icon} text-6xl text-white mb-3`}></i>
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </>
          ) : (
            <div className="w-full">
              {skills.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    // Mobile-only top margin to fix overlap, no effect on laptop
    <div className="mt-36 sm:mt-0">
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        ref={paragraphRef}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m an AI & ML Engineer who builds intelligent, end-to-end systems
        that work seamlessly in the background so you can focus on innovation.
        From real-time data pipelines and distributed ML training to workflow automation,
        I design solutions that save time, scale effortlessly, and deliver measurable results.
        Let’s turn your ideas into reality.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
