//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
// import Main2 from "./pages/Main2";
// 장르별 튜터 찾기 페이지
// import Noir from "./pages/FindTutor/Noir";
// import Romance from "./pages/FindTutor/Romance";
// import Action from "./pages/FindTutor/Action";
// import Horror from "./pages/FindTutor/Horror";
import Use from "./pages/Use";

import About from "./pages/About";
import Chat from "./pages/Chat";
import AssignTutor from "./pages/AssignTutor";
import Mypage from "./pages/Mypage";
import Edit from "./pages/Edit";
// import Tutorpage from './Jieun/pages/Tutorpage';
import TutorApply from "./pages/TutorApply";
import TutorPortfolio from "./pages/TutorPortfolio";
import "bootstrap/dist/css/bootstrap.min.css";
import Findtutor from "./pages/Findtutor";

// 튜터 페이지 임시
import Tutorpage3 from "./pages/TutorPage3";
import Users from "./pages/Users";

import Header from "./components/Header"; // Header 컴포넌트 가져오기
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./components/AuthContext";

// <Route path="/findtutor/noir" element={<Noir />} />
// <Route path="/findtutor/romance" element={<Romance />} />
// <Route path="/findtutor/action" element={<Action />} />
// <Route path="/findtutor/horror" element={<Horror />} />

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(True);  로그인 여부

  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/SignupPage" element={<SignupPage />} />

          {/* 장르별 튜터 찾기 페이지  */}
          <Route path="/Findtutor" element={<Findtutor />} />

          {/* 장르별 튜터 상세 페이지  */}
          <Route path="/findtutor/:genre/:tutorId" element={<Tutorpage3 />} />

          <Route path="/tutorapply" element={<TutorApply />} />
          <Route
            path="/tutorportfolio/:genre/:id"
            element={<TutorPortfolio />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/assigntutor" element={<AssignTutor />} />
          <Route path="/Use" element={<Use />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
