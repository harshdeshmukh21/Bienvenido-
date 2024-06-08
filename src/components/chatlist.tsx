import Chat from "./chat";

const Chatlist = () => {
  return (
    <>
      <div className="flex flex-col p-4 w-[30vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md gap-[15px] bg-black">
        <div className="flex flex-row justify-between">
          <div className="text-white font-montserrat text-2xl">Search</div>
          <img
            src="src/assets/backgrounds/search.png"
            className="h-[25px] w-[25px] mt-1"
            alt="search"
          />
        </div>
        <Chat />
        <Chat />
        <Chat />
      </div>
    </>
  );
};

export default Chatlist;
