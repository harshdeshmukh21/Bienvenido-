import { Link, Outlet } from "react-router-dom";
import maleuser from "../assets/backgrounds/Male User.png";
import sec from "../assets/backgrounds/Bunch of Keys.png";
import priv from "../assets/backgrounds/Security Configuration.png";
import appear from "../assets/backgrounds/Paint Palette.png";
import acc from "../assets/backgrounds/Google Classroom.png";

const Settings = () => {
  return (
    <>
      <div className="flex flex-col p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md bg-black">
        <div className="text-white font-montserrat text-2xl">Settings</div>
        <div className="w-[59vw] h-[15vh] mt-10 ml-5 flex flex-row rounded-md">
          <img
            src={maleuser}
            className="w-[60px] h-[60px] mr-5 ml-2"
            alt="Profile"
          />
          <div>
            <Link
              to="profile"
              className="text-white font-montserrat text-xl ml-5 mb-2"
            >
              Profile
            </Link>

            <div className="flex flex-row gap-4">
              <Link
                to="/main/settings/profile/username"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Username
              </Link>
              <Link
                to="/main/settings/profile/pfp"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Profile Picture
              </Link>
              <Link
                to="/main/settings/profile/bio"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Bio
              </Link>
              <Link
                to="/settings/profile/email"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Email id
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[59vw] h-[15vh] mt-3 ml-5 flex flex-row rounded-md">
          <img
            src={sec}
            className="w-[60px] h-[60px] mr-5 ml-2"
            alt="Security"
          />
          <div>
            <Link
              to="/main/settings/security"
              className="text-white font-montserrat text-xl ml-5 mb-2"
            >
              Security
            </Link>

            <div className="flex flex-row gap-4">
              <Link
                to="security"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Two-factor Authentication
              </Link>
              <Link
                to="/settings/security"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Password Reset
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[59vw] h-[15vh] mt-3 ml-5 flex flex-row rounded-md">
          <img
            src={priv}
            className="w-[60px] h-[60px] mr-5 ml-2"
            alt="Privacy"
          />
          <div>
            <Link
              to="privacy"
              className="text-white font-montserrat text-xl mt-2 ml-5 mb-2"
            >
              Privacy
            </Link>

            <div className="flex flex-row gap-4">
              <Link
                to="/settings/privacy"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Online Status
              </Link>
              <Link
                to="/settings/privacy"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Hide Glimpz
              </Link>
              <Link
                to="/settings/privacy"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Last Seen
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[59vw] h-[15vh] mt-3 ml-5 flex flex-row rounded-md">
          <img
            src={appear}
            className="w-[60px] h-[60px] mr-5 ml-2"
            alt="Appearance"
          />
          <div>
            <Link
              to="appearance"
              className="text-white font-montserrat text-xl ml-5 mb-2"
            >
              Appearance
            </Link>

            <div className="flex flex-row gap-4">
              <Link
                to="/settings/appearance"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Font Style
              </Link>
              <Link
                to="/settings/appearance"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Chat Background
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[59vw] h-[15vh] mt-3 ml-5 flex flex-row rounded-md">
          <img
            src={acc}
            className="w-[60px] h-[60px] mr-5 ml-2"
            alt="Account"
          />
          <div>
            <Link
              to="account"
              className="text-white font-montserrat text-xl ml-5 mb-2"
            >
              Account
            </Link>

            <div className="flex flex-row gap-4">
              <Link
                to="/settings/account"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Deactivate Account
              </Link>
              <Link
                to="/settings/account"
                className="text-white font-montserrat text-xs mt-3 ml-5 opacity-70"
              >
                Delete Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Settings;
