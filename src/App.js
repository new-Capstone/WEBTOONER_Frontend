//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import FindTutor from "./pages/FindTutor";
import Use from "./pages/Use";
import About from "./pages/About";
import Chat from "./pages/Chat";
import AssignTutor from "./pages/AssignTutor";
import Mypage from "./pages/Mypage";
import Edit from "./pages/Edit";
import Tutorpage from "./pages/Tutorpage";
import TutorApply from "./pages/TutorApply";
import TutorPortfolio from "./pages/TutorPortfolio";
import Users from "./pages/Users";
import FindTutor_romance from "./pages/FindTutor_romance";
import FindTutor_action from "./pages/FindTutor_action";
import FindTutor_horror from "./pages/FindTutor_horror";
import ChatTest from "./pages/ChatTest";
import SignupPage from "./pages/SignupPage";

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(True);  로그인 여부

  return (
    <Routes>
      {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
      <Route exact path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/tutorpage" element={<Tutorpage />} />
      <Route path="/findtutor" element={<FindTutor />} />
      <Route path="/tutorapply" element={<TutorApply />} />
      <Route path="/tutorportfolio" element={<TutorPortfolio />} />
      <Route path="/assigntutor" element={<AssignTutor />} />
      <Route path="/Use" element={<Use />} />
      <Route path="/users" element={<Users />} />
      <Route path="/findtutor/romance" element={<FindTutor_romance />} />
      <Route path="/findtutor/action" element={<FindTutor_action />} />
      <Route path="/findtutor/horror" element={<FindTutor_horror />} />
      <Route path="/chattest" element={<ChatTest />} />
      <Route path="/signuppage" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
