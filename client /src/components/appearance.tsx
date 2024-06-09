import fontstyle from "../assets/backgrounds/Aa.png";
import chatbg from "../assets/backgrounds/Chat Background.png";

const Appearance = () => {
  return (
    <>
      <div className="p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md bg-black flex flex-col justifyt-center items-center">
        <div className="text-white font-montserrat text-2xl">
          Appearance
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img
                src={fontstyle}
                className="w-[75px] h-[50px] mt-16"
                alt="@"
              />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Font Style
              </a>
            </div>
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={chatbg} className="w-[60px] h-[60px] mt-16" alt="pfp" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Chat Background
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appearance;
