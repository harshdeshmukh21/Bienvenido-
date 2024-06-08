import otp from "../assets/backgrounds/OTP.png";
import pwreset from "../assets/backgrounds/pw-reset.png";

const Security = () => {
  return (
    <>
      <div className="p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md bg-black flex flex-col items-center">
        <div className="text-white font-montserrat text-2xl">
          Security
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={otp} className="w-[60px] h-[60px] mt-16" alt="otp" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Two-factor Authentication
              </a>
            </div>
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img
                src={pwreset}
                className="w-[60px] h-[60px] mt-16"
                alt="pwreset"
              />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Password Reset
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
