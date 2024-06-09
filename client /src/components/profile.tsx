import alt from "../assets/backgrounds/@.png";
import pfp from "../assets/backgrounds/pfp.png";
import email from "../assets/backgrounds/mail.png";
import bio from "../assets/backgrounds/pen-paper.png";

const Profile = () => {
  return (
    <>
      <div className="p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md bg-black flex flex-col justifyt-center items-center">
        <div className="text-white font-montserrat text-2xl">
          Profile
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={alt} className="w-[60px] h-[60px] mt-16" alt="@" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Username
              </a>
            </div>
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={pfp} className="w-[60px] h-[60px] mt-16" alt="pfp" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Profile Picture
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img
                src={email}
                className="w-[60px] h-[60px] mt-14"
                alt="email-id"
              />
              <a className="text-white font-montserrat text-base mt-2" href="">
                Email id
              </a>
            </div>
            <div className="h-[275px] w-[25vw] border-4 border-gray-500 p-4 mt-3 rounded-md flex flex-col items-center">
              <img src={bio} className="w-[60px] h-[60px] mt-14" alt="bio" />
              <a className="text-white font-montserrat text-base mt-3" href="">
                Bio
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
