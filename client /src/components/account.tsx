import del from "../assets/backgrounds/Delete Key.png";
import deact from "../assets/backgrounds/Deactivate.png";

const Account = () => {
  return (
    <div>
      <div className="p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md bg-black flex flex-col items-center">
        <div className="text-white font-montserrat text-2xl">
          Account
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={del} className="w-[60px] h-[60px] mt-16" alt="@" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Deactivate Account
              </a>
            </div>
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={deact} className="w-[60px] h-[60px] mt-16" alt="pfp" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Delete Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
