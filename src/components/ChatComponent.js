import React, { useState, useEffect } from "react";
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";

function ChatComponent() {
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    // WebSocket 연결 설정
    const socket = new SockJS("https://capstone-webtooner/ws-stomp");

    const client = Stomp.over(socket);
    client.debug = console.log; // Enable debug logging

    client.connect(
      {},
      () => {
        console.log("WebSocket 연결 성공!");
        console.log(socket);
        setStompClient(client);
      },
      (error) => {
        console.error("WebSocket 연결 실패:", error);
      }
    );

    // 컴포넌트 언마운트 시 WebSocket 연결 해제
    return () => {
      if (stompClient) {
        stompClient.disconnect();
        console.log("WebSocket 연결 해제");
      }
    };
  }, []);

  return <div>{/* 채팅 컴포넌트 내용 */}</div>;
}

export default ChatComponent;
