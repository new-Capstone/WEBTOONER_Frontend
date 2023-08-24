import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from './mockdata_horror.json'
import axios from 'axios';
import Header from '../../components/Header';
import TabBar from '../../components/TabBar';

// useEffect(() => {
//   axios
//     .get('http://capstone-webtooner.com/portfolio', {
//       params: {
//         portfolioId: 1,
//       },
//     })
//     .then((response) => {
//       setImages(response.data);
//       console.log(response.data);
//     });
// }, []);

const Horror = () => {
  // 기본 페이지 1페이지부터 시작
  const [currentPage, setCurrentPage] = useState(1);
  // 화면에 보여주고 싶은 페이지당 정보 개수

  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  // 전체 페이지 수 계산(전달 받은 데이터의 길이에서, 전체 페이지를 나누어줌)
  const npage = Math.ceil(Data.length / recordsPerPage);
  // npage + 1을 사용하여 0부터 npage까지의 숫자 배열을 생성함.
  // slice(1)을 사용하여, 첫번쨰 요소를 제외 시킴 페이지는 1페이지 부터기 떄문
  const numbers = [...Array(npage + 1).keys()].slice(1); // 페이지의 수를 만듬(npage+1 인덱스의 배열을 만들고, 거기에 Key값을 저장함)
  console.log(npage, 'napge');
  console.log(numbers, 'numbers');
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


      <div className="main_container" style={{ gap: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", marginTop: "10px" }}>
        <TabBar />
        <div className='image_container' style={{ display: 'flex', gap: "10px" }}>


          {records.map((record) => (
            <section key={record.tutorId}>
              <Link to={`/findtutor/horror/${record.tutorId}`} state={{ isAdded: false }}>
                <img
                  src={record.imageUri}
                  style={{ width: "200px", height: "300px", borderRadius: "10px" }}
                />
              </Link>
            </section>
          ))}


        </div>

        <ul className='pagination'  >
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prePage} >
              이전
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? 'active' : ''} `}
              key={i}
            >
              <a href='#' className='page-link' onClick={() => changeCpage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>
              다음
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Horror;
