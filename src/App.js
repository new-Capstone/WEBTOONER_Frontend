
//Switch와 Route를 이용해 여러 페이지 간 이동을 구현할 수 있음
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';

function App() {
  return (
      <Routes>
        {/* <Route/>를 이용해 페이지를 추가할 수 있음 */}
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}

export default App;
