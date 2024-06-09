import olstatus from "../assets/backgrounds/Online.png";
import hide from "../assets/backgrounds/Mark View As Hidden.png";
import lastseen from "../assets/backgrounds/Last Seen.png";

const Privacy = () => {
  return (
    <>
      <div className="p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md bg-black flex flex-col justifyt-center items-center">
        <div className="text-white font-montserrat text-2xl">
          Privacy
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img
                src={olstatus}
                className="w-[60px] h-[60px] mt-16"
                alt="olstatus"
              />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Online Status
              </a>
            </div>
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img
                src={hide}
                className="w-[60px] h-[60px] mt-16"
                alt="hideglimpz"
              />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Hide Glimpz
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img
                src={lastseen}
                className="w-[60px] h-[60px] mt-14"
                alt="lasteen"
              />
              <a className="text-white font-montserrat text-base mt-2" href="">
                Last Seen
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
