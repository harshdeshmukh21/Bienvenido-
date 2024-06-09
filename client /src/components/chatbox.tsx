import send from "../assets/backgrounds/send.png";

const Chatbox = () => {
  return (
    <>
      <div className="flex flex-col p-4 w-[61.5vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md justify-between bg-black">
        <div className="text-white font-montserrat text-2xl">Username</div>
        <div className="flex flex-row justify-between">
          <input
            type="text"
            placeholder=""
            className="w-[85%] h-[40px] bg-black text-white border-none outline-none rounded-md pl-2"
          />
          <button type="button">
            <img src={send} alt="send" className="w-[40px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
