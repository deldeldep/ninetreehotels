import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaDownload } from 'react-icons/fa';
import './header.scss';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 상태

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 메뉴 열릴 때 스크롤 방지 (선택사항)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const menuItems = [
    { title: 'OUR HOTEL', sub: ['Membership', 'Introduction', 'Brand', 'Location', 'Transportation'] },
    { title: 'ACCOMMODATION', sub: ['Standard Double', 'Standard Twin', 'Deluxe Double','Family Twin','Family Kids','Standard Triple','Family Twin Suite','Family Kids Suite','Panoramic Suite','Quad Suite'] },
    { title: 'OUR FACILITIES', sub: ['Lounge', 'Meeting Room', 'Gym'] },
    { title: 'OUR OFFERS', sub: ['Packages', 'Promotions'] },
    { title: 'OUR SERVICES', sub: ['Service Guide', 'FAQ'] },
    { title: 'FIND THE HOTEL', sub: ['Map', 'Contact'] },
  ];

  return (
    <header className={`header ${isHovered ? 'hover' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* PC 전용 TOP BAR */}
      <div className="top-bar">
        <ul className="contact">
            <li><img src="/images/icon-email.png" alt="email" /> reservation3@ninetreehotel.com</li>
            <li><img src="/images/icon-phon.png" alt="phon" /> +82-2-6917-3099</li>
            <li><a href="#">TV Channel Link Guide</a></li>
            <li><a><img src="/images/membership.png" alt="membership" /> 회원가입</a></li>
          </ul>
          <div className="util">
            <FaFacebookF /> <FaInstagram />
            <span>Korean</span>
            <span><FaDownload /> SERVICE DIRECTORY</span>
          </div>
      </div>

      <nav className="nav-container">
        <div className="nav-inner">
          <h1 className="logo">
            <Link to="/"><img src="/images/logo-b(1).png" alt="logo" /></Link>
          </h1>
          
          {/* PC GNB */}
          <ul className="gnb">
            {menuItems.map((menu, i) => (
              <li key={i} className="gnb-item">
                <Link to="/">{menu.title}</Link>
                <ul className="submenu" >
                  {menu.sub.map((sub, j) => <li key={j}><Link to="/">{sub}</Link></li>)}
                </ul>
              </li>
            ))}
          </ul>

          <div className="reservation-btn">RESERVATION</div>

          {/* 모바일 햄버거 버튼 */}
          <button className={`m-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* PC 서브메뉴 배경 */}
        <div className={`nav-bg ${isHovered ? 'active' : ''}`}></div>

        <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
          <ul className="m-gnb">
            {menuItems.map((menu, i) => (
              <li key={i} className="m-gnb-item">
                <Link to="/" onClick={toggleMenu}>{menu.title}</Link>
              </li>
            ))}
            <li className="m-res-item">
              <div className="reservation-btn-mobile">RESERVATION</div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;