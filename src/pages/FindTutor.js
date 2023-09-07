import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    ></div>
  );
}

const Findtutor = () => {
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
    arrows: true, // 올바른 속성명은 'arrows'입니다.
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <div
        className="noir_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        <h1>Noir</h1>
        <Slider {...settings}>
          {noirPortfolioList.map((record) => (
            <section key={record?.tutorId}>
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
            </section>
          ))}
        </Slider>
      </div>

      <div
        className="romance_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        <h1>Romance</h1>
        <Slider {...settings}>
          {romancePortfolioList.map((record) => (
            <section key={record?.tutorId}>
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
            </section>
          ))}
        </Slider>
      </div>

      <div
        className="action_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        <h1>Action</h1>
        <Slider {...settings}>
          {actionPortfolioList.map((record) => (
            <section key={record?.tutorId}>
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
            </section>
          ))}
        </Slider>
      </div>

      <div
        className="horror_imageContainer"
        style={{ width: "75%", margin: "0 auto" }}
      >
        <h1>Horror</h1>
        <Slider {...settings}>
          {horrorPortfolioList.map((record) => (
            <section key={record?.tutorId}>
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
            </section>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Findtutor;
