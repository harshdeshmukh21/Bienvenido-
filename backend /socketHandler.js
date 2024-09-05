const socketHandler = (io) => {
  const onlineUsers = new Set();

  io.on("connection", (socket) => {
    console.log("New client connected");

    // Handle user coming online
    socket.on("userOnline", (userId) => {
      onlineUsers.add(userId);
      io.emit("onlineUsers", Array.from(onlineUsers));
    });

    // Handle joining a room
    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });

    // Handle leaving a room
    socket.on("leaveRoom", (room) => {
      socket.leave(room);
      console.log(`User left room: ${room}`);
    });

    // Handle chat messages
    socket.on("chatMessage", (message) => {
      io.to(message.room).emit("message", message);
    });

    // Handle typing indicator
    socket.on("typing", (data) => {
      socket.to(data.room).emit("typing", data);
    });

    // Handle request for online users
    socket.on("getOnlineUsers", () => {
      socket.emit("onlineUsers", Array.from(onlineUsers));
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      // Remove user from online users
      onlineUsers.forEach((userId) => {
        if (socket.id === userId) {
          onlineUsers.delete(userId);
        }
      });
      io.emit("onlineUsers", Array.from(onlineUsers));
    });
  });
};

module.exports = socketHandler;
