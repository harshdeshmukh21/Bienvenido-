import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Chatlist from "./chatlist";

const Home = () => {
  return (
    <div className="flex flex-row bg-[url('src/assets/backgrounds/BG-Dark.png')] bg-cover bg-center">
      <Sidebar />
      <Chatlist />
      <Outlet /> {/* This is where nested routes will render */}
    </div>
  );
};

export default Home;
