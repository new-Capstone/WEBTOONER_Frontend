import "../styles/Main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const line = "WEBTOONER";
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prev) => {
        let result = prev ? prev + line[count] : line[0];
        setCount(count + 1);

        if (count >= line.length) {
          setCount(0);
          setTitle("");
        }
        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <div>
      <main id="main">
        <div className="container">
          <h4>Welcome</h4>
          <h2>
            <span>{title}</span>
          </h2>
          <p>
            웹툰 작가 지망생을 위한 인공지능 모델을 활용한 웹툰 이미지 변환
            서비스와 튜터 매칭 서비스
          </p>
          <button
            className="use"
            onClick={() => {
              navigate("/use");
            }}
          >
            시작하기
          </button>
        </div>
      </main>
    </div>
  );
};

export default Main;
