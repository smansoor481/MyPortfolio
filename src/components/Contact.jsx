
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const text = "Hello there!"
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <div className="mt-1 text-center">
            <h2 className="text-white text-3xl font-bold">Mansoor Shaik</h2>
            <p className="text-secondary text-lg mt-4">
              ☎️: +91 9121685038
            </p>
          </div>
          <div className="flex items-center justify-evenly">
            <label className='flex flex-col'>
              <a href="https://www.linkedin.com/in/mansoor12/" target="_blank" >
                <img
                  src={"/linkedin2.png"}
                  alt="logo"
                  className="w-16 h-16 object-contain"
                />  LinkedIn
              </a>
            </label>
            <label className='flex flex-col'>
              <a href="mailto:mansoor91216@gmail.com" target="_blank" >
                <img
                  src={"/email.png"}
                  alt="logo"
                  className="w-16 h-16 object-contain"
                />  Email
              </a>
            </label>

          </div>

          <div className="mt-2 text-center">
            <h2 className="text-white text-3xl font-bold">Thank You!</h2>
            <p className="text-secondary text-lg mt-4">
              I appreciate you taking the time to view my portfolio. If you’d like to connect, feel free to reach out! 😊
            </p>
          </div>
        </form>
      </motion.div>
      <div className="h-1/3 lg:h-full lg:w-1/2 lg:text-6xl text-3xl md:text-5xl flex-items xl:hidden justify-center">
        <div className="font-semibold text-center">
          {text.split("").map((letter, index) => (
            <motion.span key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}>
              {letter}</motion.span>
          )
          )}
          😊
        </div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='hidden xl:block xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";
// import { FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="xl:mt-12 flex flex-col items-center gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="bg-black-100 p-8 rounded-2xl text-center"
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact</h3>

//         <div className="mt-8 flex flex-col items-center gap-6">
//           <a
//             href="www.linkedin.com/in/jagadeeswarreddy1" // Replace with your LinkedIn profile
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-4 text-white text-lg font-medium hover:text-blue-500"
//           >
//             <FaLinkedin size={30} /> LinkedIn
//           </a>

//           <a
//             href="mailto:your.email@example.com" // Replace with your email
//             className="flex items-center gap-4 text-white text-lg font-medium hover:text-red-500"
//           >
//             <FaEnvelope size={30} /> Email
//           </a>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");
