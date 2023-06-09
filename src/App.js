
//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음

import {Routes, Route } from 'react-router-dom';
import Main from './ga/pages/Main';
import FindTutor from './ga/pages/FindTutor';
import FindTutor_romance from './ga/pages/FindTutor_romance';
import FindTutor_action from './ga/pages/FindTutor_action';
import FindTutor_horror from './ga/pages/FindTutor_horror';
import Use from './ga/pages/Use';
import About from './JinWook/pages/About';
import Chat from './JinWook/pages/Chat';
import AssignTutor from './JinWook/pages/AssignTutor';
import Mypage from './Jieun/pages/Mypage';
import Edit from './Jieun/pages/Edit';
import Tutorpage from './Jieun/pages/Tutorpage';
import TutorApply from './Jieun/pages/TutorApply';
import TutorPortfolio from './Jieun/pages/TutorPortfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

import User from './JinWook/pages/User'

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
        
        <Route path="/findtutor/noir" element={<FindTutor />}/>
        <Route path="/findtutor/romance" element={<FindTutor_romance />}/>
        <Route path="/findtutor/action" element={<FindTutor_action />}/>
        <Route path="/findtutor/horror" element={<FindTutor_horror />}/>

        <Route path="/tutorapply" element={<TutorApply />}/>
        <Route path="/tutorportfolio" element={<TutorPortfolio />}/>
        <Route path="/assigntutor" element={<AssignTutor />}/>
        <Route path="/Use" element={<Use />}/>       
        <Route path="/user" element={<User />}/>       
      </Routes>
  
  );
}

export default App;
