import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import TabBar from "../../components/TabBar";

//noir에 해당하는 튜터아이디와 튜터 이미지 가져오기
//http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=noir
const Noir = () => {
  const [noirPortfolioList, setNoirPortfolioList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=noir"
      )
      .then((response) => {
        // response.data.map((content) => console.log(content))
        setNoirPortfolioList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(noirPortfolioList);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const records = noirPortfolioList.slice(firstIndex, lastIndex);

  const npage = Math.ceil(noirPortfolioList.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1); // 페이지의 수를 만듬(npage+1 인덱스의 배열을 만들고, 거기에 Key값을 저장함)

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  return (
    <div>
      <Header />
      <div
        className="main_container"
        style={{
          gap: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "10px",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          borderRadius: "10px",
        }}
      >
        <TabBar />
        <div
          className="image_container"
          style={{ display: "flex", gap: "10px" }}
        >
          {records.map((record) => (
            <section key={record.tutorId}>
              <Link to={`/findtutor/noir/${record.tutorId}`}>
                <img
                  key={noirPortfolioList.tutorId}
                  src={record.url}
                  style={{
                    width: "200px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Link>
            </section>
          ))}
        </div>

        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              이전
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""} `}
              key={i}
            >
              <a href="#" className="page-link" onClick={() => changeCpage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              다음
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Noir;
