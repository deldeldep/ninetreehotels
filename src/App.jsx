import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 다른 페이지들 추가 예정 */}
        </Routes>
      <Footer />
    </>
  );
}

export default App;