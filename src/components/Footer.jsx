import React, { useState, useEffect } from 'react';
import './footer.scss';

const Footer = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 300px 이상 내려오면 버튼을 보여줌
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* 상단 로고 영역 */}
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/images/logo-w.png" alt="logo" />
          </div>
        </div>

        {/* 중단 상세 정보 영역: 4컬럼 구성 */}
        <div className="footer-middle">
          <div className="footer-info-item">
            <h4>CALL US</h4>
            <p>TEL: +82-2-6917-3099</p>
            <p>FAX: +82-2-6917-3297</p>
          </div>

          <div className="footer-info-item">
            <h4>INFO</h4>
            <p>파르나스호텔주식회사</p>
            <p>사업자 등록번호: 387-85-01072</p>
            <p>대표이사: 여인창</p>
          </div>

          <div className="footer-info-item">
            <h4>LOCATION</h4>
            <p>나인트리 바이 파르나스 서울 인사동</p>
            <p>(03145)서울특별시 종로구 인사동길 49</p>
            <p>통신판매신고번호 : 제 2009-서울강남-02226호</p>
          </div>

          <div className="footer-info-item contact">
            <h4>CONTACT</h4>
            <p>Email: reservation3@ninetreehotel.com</p>
            <div className="family-site">
              <select name="family" id="family-select">
                <option value="">패밀리사이트</option>
                <option value="1">나인트리 바이 파르나스 서울 명동Ⅰ</option>
                <option value="2">나인트리 바이 파르나스 서울 명동Ⅱ</option>
                <option value="3">나인트리 바이 파르나스 서울 인사동</option>
                <option value="4">나인트리 바이 파르나스 서울 동대문</option>
                <option value="5">나인트리 바이 파르나스 서울 판교</option>
                <option value="6">나인트리 프리미어 로카우스 호텔 서울 용산</option>
                <option value="7">파르나스 리워즈</option>
                {/* 추가 옵션들... */}
              </select>
            </div>
          </div>
        </div>

        {/* 하단 카피라이트 및 정책 영역 */}
        <div className="footer-bottom">
          <div className="bottom-left">
            <span>Premier Hotel Insadong</span>
          </div>
          <div className="bottom-right">
            <ul className="policy-links">
              <li>개인정보처리방침</li>
              <li>고정형 영상정보처리기기 운영·관리방침</li>
            </ul>
            <p className="copyright">Copyright 2019 Parnas Hotel Co., Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      
      {/* 우측 하단 TOP 버튼 */}
      <button 
        className={`go-top ${showButton ? 'visible' : ''}`} 
        onClick={scrollToTop}
      >
        <span className="arrow-up"></span>
      </button>
    </footer>
  );
};

export default Footer;