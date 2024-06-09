import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <Link to="chatbox" className="flex flex-row mt-2 mb-2">
      <img
        src="src/assets/backgrounds/pfp-color.png"
        alt="pfp-color"
        className="w-[40px] h-[40px] ml-2 mt-[2px]"
      />
      <div className="flex flex-col">
        <h1 className="text-white text-[16px] font-xs ml-4 font-montserrat">
          Dhruv
        </h1>
        <h2 className="text-white font-normal text-xs ml-4 opacity-70 font-montserrat">
          lorem ipsum lorem ipsum
        </h2>
      </div>
    </Link>
  );
};

export default Chat;
