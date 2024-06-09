import { Link } from "react-router-dom";
import pfp from "../assets/backgrounds/pfp.png";
import fav from "../assets/backgrounds/fav.png";
import pol from "../assets/backgrounds/polaroid.png";
import settings from "../assets/backgrounds/settings.png";
import grp from "../assets/backgrounds/grp.png";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col p-4 w-[5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md justify-between bg-black">
          <div>
            <Link
              to="/main/settings/profile"
              className="flex justify-center items-center"
            >
              <img src={pfp} alt="pfp" />
            </Link>
          </div>
          <div className="flex flex-col space-y-2 items-center gap-2">
            <Link to="/polaroid" className="flex justify-center items-center">
              <img src={pol} alt="polaroid" className="w-[30px]" />
            </Link>
            <Link to="/main/group" className="flex justify-center items-center">
              <img src={grp} alt="grp" className="w-[30px]" />
            </Link>
            <Link
              to="/main/favorites"
              className="flex justify-center items-center"
            >
              <img src={fav} alt="fav" className="w-[30px]" />
            </Link>
            <Link
              to="/main/settings"
              className="flex justify-center items-center"
            >
              <img src={settings} alt="settings" className="w-[30px]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
