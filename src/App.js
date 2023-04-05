//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음
import {Routes, Route } from 'react-router-dom';
import Main from './ga/pages/Main';
import FindTutor from './ga/pages/FindTutor'; 
import About from './JinWook/pages/About';
import Mypage from './Jieun/pages/Mypage';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(True);  로그인 여부

  return (
      // <Routes>
      //   {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
      //   <Route exact path="/" element={<Main />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/mypage" element={<Mypage />} />
      // </Routes>
      <FindTutor />
  );
}

export default App;
