import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import Chat from "./chat";

const Chatlist: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server");
      newSocket.emit("getOnlineUsers");
    });

    newSocket.on("onlineUsers", (users: string[]) => {
      setOnlineUsers(users);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col p-4 w-[30vw] h-[96vh] mb-3 mt-3 ml-3 rounded-md gap-[15px] bg-black">
      <div className="flex flex-row justify-between">
        <div className="text-white font-montserrat text-2xl">Search</div>
        <img
          src="src/assets/backgrounds/search.png"
          className="h-[25px] w-[25px] mt-1"
          alt="search"
        />
      </div>
      {onlineUsers.map((userId) => (
        <Chat key={userId} userId={userId} />
      ))}
    </div>
  );
};

export default Chatlist;
