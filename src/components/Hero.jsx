import { motion } from "framer-motion";
import { styles } from "../styles";
import ProfilePic from "./ProfilePic";

const Hero = () => {
  return (
    <section className={`max-md:pt-20 relative w-full h-screen mx-auto`}>
      <div
        className={`max-w-7xl mx-auto h-full ${styles.paddingX} flex flex-col lg:flex-row items-center gap-5`}
      >
        <div className="flex-1 flex items-start gap-3">
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-purple' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
          {/* Content Wrapper */}
          <div className="flex flex-col gap-8 w-full">
            {/* Details Section */}
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm 
            </h1>
            <span className={`${styles.heroHeadText1} text-purple`}>Mansoor Shaik</span>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              
              A passionate &nbsp;
              <span className="highlights">Java FullStack Developer</span>,<br />
              Skilled in&nbsp;
              <span className="highlights">Java ,SpringBoot</span>
              &nbsp;and&nbsp;
              <span className="highlights">Microservices</span>.
            </p>
          </div>
          {/* Profile Picture */}
        </div>
        <ProfilePic />
      </div>

      {/* Scroll Indicator */}
{/*       <div className="absolute xs:bottom-0 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[48px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
