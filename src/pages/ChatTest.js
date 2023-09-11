import React, { useState, useEffect } from "react";
import axios from "axios";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

function ChatTest() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const connectWebSocket = async () => {
      let reconnect = 0;
      let sock;
      let ws;

      const handleWebSocketMessage = (message) => {
        const recv = JSON.parse(message.body);
        // do something with the received message
        console.log(recv);
      };

      const handleWebSocketError = () => {
        if (reconnect <= 5) {
          setTimeout(() => {
            console.log("connection reconnect");
            connectWebSocket();
          }, 10 * 1000);
        }
      };

      try {
        sock = new SockJS("https://capstone-webtooner/ws-stomp");
        ws = Stomp.over(sock);
        ws.debug = console.log; // Enable debug logging
        console.log("test");

        setTimeout(() => console.log(sock), 5000);
        setTimeout(() => console.log(sock.readyState), 5000);

        ws.connect(
          {},
          function (frame) {
            console.log("conneted" + frame);
            console.log(sock.readyState);

            ws.subscribe("/sub/chat/room/1", handleWebSocketMessage); // Replace 'roomId' with the actual room ID
            ws.send(
              "/pub/chat/message",
              {},
              JSON.stringify({
                type: "TALK",
                roomId: "1",
                sender: "sender",
                message: "message",
              }) // Replace 'roomId', 'sender', and 'message' with actual values
            );
          },
          handleWebSocketError
        );
      } catch (e) {
        setError(e);
      }

      return () => {
        // Cleanup WebSocket connection
        if (ws) {
          ws.disconnect();
        }
        if (sock) {
          sock.close();
        }
      };
    };

    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);

        // const response = await axios.get("https://capstone-webtooner/ws-stomp"); // Replace with the correct server address
        // console.log("test", response.data);

        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchUsers();
    connectWebSocket();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  if (!users) return <div>No users found.</div>;
  return (
    <ul>
      {/* {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))} */}
    </ul>
  );
}

export default ChatTest;
