import React, { useState } from "react";
import "../styles/Chat.css";
import Header from "../components/Header";

  

function Chat() {
  const [input, setInput] = useState("");
  const [chatRooms, setChatRooms] = useState([
    "Chat Room 1",
    "Chat Room 2",
    "Chat Room 3",
    "Chat Room 4",
    "Chat Room 5",
    "Chat Room 6",
  ]);
  const [selectedChatRoom, setSelectedChatRoom] = useState(chatRooms[0]);
  const [chatMessages, setChatMessages] = useState({
    "Chat Room 1": [
      { sender: "User A", message: "채팅방 1 유저A 메시지 전송" },
      { sender: "User B", message: "채팅방 1 유저B 메시지 전송" },
      { sender: "User A", message: "채팅방 1 유저A 채팅" },
      { sender: "User B", message: "채팅방 1 유저B 채팅" },
      { sender: "User A", message: "채팅방 1 유저A 마지막 채팅" },
    ],
    "Chat Room 2": [
      { sender: "User A", message: "채팅방 2 유저A 메시지 전송" },
      { sender: "User B", message: "채팅방 2 유저B 메시지 전송" },
      { sender: "User A", message: "채팅방 2 유저A 채팅" },
      { sender: "User B", message: "채팅방 2 유저B 채팅" },
      { sender: "User A", message: "채팅방 2 유저A 마지막 채팅" },
    ],
    "Chat Room 3": [
      { sender: "User A", message: "채팅방 3 유저A 메시지 전송" },
      { sender: "User B", message: "채팅방 3 유저B 메시지 전송" },
      { sender: "User A", message: "채팅방 3 유저A 채팅" },
      { sender: "User B", message: "채팅방 3 유저B 채팅" },
      { sender: "User A", message: "채팅방 3 유저A 마지막 채팅" },
    ],
    "Chat Room 4": [
      { sender: "User A", message: "채팅방 4 유저A 메시지 전송" },
      { sender: "User B", message: "채팅방 4 유저B 메시지 전송" },
      { sender: "User A", message: "채팅방 4 유저A 채팅" },
      { sender: "User B", message: "채팅방 4 유저B 채팅" },
      { sender: "User A", message: "채팅방 4 유저A 마지막 채팅" },
    ],
    "Chat Room 5": [
      { sender: "User A", message: "채팅방 5 유저A 메시지 전송" },
      { sender: "User B", message: "채팅방 5 유저B 메시지 전송" },
      { sender: "User A", message: "채팅방 5 유저A 채팅" },
      { sender: "User B", message: "채팅방 5 유저B 채팅" },
      { sender: "User A", message: "채팅방 5 유저A 마지막 채팅" },
    ],
    "Chat Room 6": [
      { sender: "User A", message: "채팅방 6 유저A 메시지 전송" },
      { sender: "User B", message: "채팅방 6 유저B 메시지 전송" },
      { sender: "User A", message: "채팅방 6 유저A 채팅" },
      { sender: "User B", message: "채팅방 6 유저B 채팅" },
      { sender: "User A", message: "채팅방 6 유저A 마지막 채팅" },
    ],
  });

  const sendMessage = (e) => {
    e.preventDefault();
    const newChatMessage = { message: input, sender: "me" };
    setChatMessages((prevState) => ({
      ...prevState,
      [selectedChatRoom]: [...prevState[selectedChatRoom], newChatMessage],
    }));
    setInput("");
  };

  const handleChatRoomClick = (chatRoom) => {
    setSelectedChatRoom(chatRoom);
  };

  return (
    <div className="main-header">
      <Header />
      <div className="chat-container">
        <div className="chat-sidebar">
          {/* 채팅방 목록 */}
          {chatRooms.map((chatRoom, index) => (
            <button
              key={index}
              className={
                selectedChatRoom === chatRoom ? "chat-room-btn active" : "chat-room-btn"
              }
              onClick={() => handleChatRoomClick(chatRoom)}
            >
              {chatRoom}
            </button>
          ))}
        </div>
        <div className="chat">
          <div className="chat-header">
            <h4>
              To: <span className="chat-name">{selectedChatRoom}</span>
            </h4>
            <strong>Details</strong>
          </div>
          <div className="chat-body">
            {/* 채팅 내역 */}
            {chatMessages[selectedChatRoom].map((chatMessage, index) => (
              <div key={index} className={`chat-message ${chatMessage.sender === "User A" ? "left" : "right"}`}>
                {chatMessage.message}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <form className="chat-form">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
                type="text"
              />
              <button onClick={sendMessage}>Send a message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
