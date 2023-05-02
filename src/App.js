
//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음

import {Routes, Route } from 'react-router-dom';
import Main from './ga/pages/Main';
import FindTutor from './ga/pages/FindTutor';
import About from './JinWook/pages/About';
import Chat from './JinWook/pages/Chat';
import Mypage from './Jieun/pages/Mypage';
import Edit from './Jieun/pages/Edit';
import Tutorpage from './Jieun/pages/Tutorpage';
import PhotoUpload from './Jieun/pages/Photoupload';
import TutorApply from './Jieun/pages/TutorApply';
import TutorPortfolio from './Jieun/pages/TutorPortfolio';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(True);  로그인 여부

  return (
      <Routes>
        {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/tutorpage" element={<Tutorpage/>} />
        <Route path="/photoupload" element={<PhotoUpload/>} />
        <Route path="/findtutor" element={<FindTutor />}/>
        <Route path="/tutorapply" element={<TutorApply />}/>
        <Route path="/tutorportfolio" element={<TutorPortfolio />}/>
      </Routes>
  
  );
}

export default App;
