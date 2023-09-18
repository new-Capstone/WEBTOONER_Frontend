import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/Findtutor.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Findtutor = () => {
  const slickRef1 = useRef(null);
  const previous1 = useCallback(() => slickRef1.current.slickPrev(), []);
  const next1 = useCallback(() => slickRef1.current.slickNext(), []);

  const slickRef2 = useRef(null);
  const previous2 = useCallback(() => slickRef2.current.slickPrev(), []);
  const next2 = useCallback(() => slickRef2.current.slickNext(), []);

  const slickRef3 = useRef(null);
  const previous3 = useCallback(() => slickRef3.current.slickPrev(), []);
  const next3 = useCallback(() => slickRef3.current.slickNext(), []);


  const slickRef4 = useRef(null);
  const previous4 = useCallback(() => slickRef4.current.slickPrev(), []);
  const next4 = useCallback(() => slickRef4.current.slickNext(), []);

  const [noirPortfolioList, setNoirPortfolioList] = useState([]);
  const [romancePortfolioList, setRomancePortfolioList] = useState([]);
  const [actionPortfolioList, setActionPortfolioList] = useState([]);
  const [horrorPortfolioList, setHorrorPortfolioList] = useState([]);

  // 장르별 튜터 정보 불러오기
  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=noir"
        ),
        axios.get(
          "http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=romance"
        ),
        axios.get(
          "http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=action"
        ),
        axios.get(
          "http://capstone-webtooner.com/tutorapi/allByCategory?categoryName=horror"
        ),
      ])
      .then(
        axios.spread((res1, res2, res3, res4) => {
          setNoirPortfolioList(res1.data);
          setRomancePortfolioList(res2.data);
          setActionPortfolioList(res3.data);
          setHorrorPortfolioList(res4.data);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };


  console.log(noirPortfolioList);
  return (
    <div className="imageContainer">
      <div className="noir_imageContainer" style={{ width: "75%", margin: "0 auto", marginTop: "20px" }}>
        {/* <h1>Noir</h1> */}

        <div className="noir" style={{ display: "flex", justifyContent: "space-around" }}>

          <button type="button" onClick={previous1} style={{ outlineColor: "#6cb48f", color: "6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }} >
            {"<"}
          </button >
          <Slider {...settings} ref={slickRef1}>
            {noirPortfolioList.map((record) => (
              <div key={record?.tutorId}>
                <Link to={`/findtutor/noir/${record?.tutorId}`}>
                  <img
                    src={record?.url}
                    style={{
                      width: "200px",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                    alt={`Noir Tutor - ${record?.username}`}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <button type="button" onClick={next1} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }}>
            {">"}
          </button>
        </div>
      </div>
      <br />


      <div
        className="romance_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        {/* <h1>Romance</h1> */}

        <div className="romance" style={{ display: "flex", justifyContent: "space-around" }}>
          <button type="button" onClick={previous2} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }} >
            {"<"}
          </button >

          <Slider {...settings} ref={slickRef2}>
            {romancePortfolioList.map((record) => (
              <div key={record?.tutorId}>
                <Link to={`/findtutor/romance/${record?.tutorId}`}>
                  <img
                    src={record?.url}
                    style={{
                      width: "200px",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                    alt={`Romance Tutor - ${record?.username}`}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <button type="button" onClick={next2} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }}>
            {">"}
          </button>
        </div>
      </div>
      <br />


      <div
        className="action_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        {/* <h1>Action</h1> */}
        <div className="action" style={{ display: "flex", justifyContent: "space-around" }}>
          <button type="button" onClick={previous3} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }} >
            {"<"}
          </button >
          <Slider {...settings} ref={slickRef3}>
            {actionPortfolioList.map((record) => (
              <div key={record?.tutorId}>
                <Link to={`/findtutor/action/${record?.tutorId}`}>
                  <img
                    src={record?.url}
                    style={{
                      width: "200px",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                    alt={`Action Tutor - ${record?.username}`}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <button type="button" onClick={next3} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }}>
            {">"}
          </button>
        </div>
      </div>
      <br />


      <div
        className="horror_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        {/* <h1>Horror</h1> */}
        <div className="horror" style={{ display: "flex", justifyContent: "space-around" }}>
          <button type="button" onClick={previous4} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }} >
            {"<"}
          </button >
          <Slider {...settings} ref={slickRef4}>
            {horrorPortfolioList.map((record) => (
              <div key={record?.tutorId}>
                <Link to={`/findtutor/horror/${record?.tutorId}`}>
                  <img
                    src={record?.url}
                    style={{
                      width: "200px",
                      height: "300px",
                      borderRadius: "10px",
                    }}
                    alt={`Horror Tutor - ${record?.username}`}
                  />
                </Link>
              </div>
            ))}
          </Slider>
          <button type="button" onClick={next4} style={{ outlineColor: "#6cb48f", color: "#6cb48f", backgroundColor: "#ffffff", fontSize: "20px", padding: "4px 8px", alignSelf: "center" }}>
            {">"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default Findtutor;
