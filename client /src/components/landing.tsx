import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Link
        to="/auth"
        id="body"
        className="flex flex-col justify-center items-center h-screen w-screen bg-[url('src/assets/backgrounds/landing-bg.png')] bg-cover bg-center"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-5xl text-black font-montserrat font-custom-weight mt-[150px] mr-[990px]"
        >
          BIENVENIDO
        </motion.h1>
        <motion.h4
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-1xl text-black font-montserrat mt-[10px] mr-[950px]"
        >
          Connect, Engage, and Thrive in Conversation.
        </motion.h4>
      </Link>
    </>
  );
};

export default Landing;
