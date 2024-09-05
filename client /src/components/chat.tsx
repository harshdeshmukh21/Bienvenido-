import React from "react";

interface ChatProps {
  userId: string;
}

const Chat: React.FC<ChatProps> = ({ userId }) => {
  return (
    <div className="chat-item">
      {/* Use userId to display user information */}
      <p>User: {userId}</p>
      {/* Add other chat item content here */}
    </div>
  );
};

export default Chat;
