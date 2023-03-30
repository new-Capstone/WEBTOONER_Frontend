
//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음
<<<<<<< HEAD
import { BrowserRouter as router, Route, Routes } from 'react-router-dom';
=======
import {Routes, Route } from 'react-router-dom';
>>>>>>> abc74ebe856f28ca5ae32bc94e978c45de31391c

import Main from './pages/Main';
import About from './pages/About';
import Mypage from './pages/Mypage';

function App() {
  //const [isLoggedIn, setIsLoggedIn] = useState(True);  로그인 여부

  return (
<<<<<<< HEAD
    <router>
      <Routes>
        {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </router>
=======
      <Routes>
        {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
>>>>>>> abc74ebe856f28ca5ae32bc94e978c45de31391c
  );
}

export default App;
