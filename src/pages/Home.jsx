import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

// Swiper 스타일 임포트
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './home.scss';

import img01 from '/images/nth3_main01.jpg';
import img02 from '/images/nth3_main02.jpg';
import img03 from '/images/nth3_main03.jpg';
import img04 from '/images/nth3_main04.jpg';
import img05 from '/images/nth3_main05.jpg';
import img06 from '/images/nth3_main06.jpg';
import mainimg from '/images/main-img2.jpg';

const Home = () => {

  const [activeTab, setActiveTab] = useState('STANDARD');
  // 세부 객실 인덱스 상태 추가 (기본값 0)
  const [detailIdx, setDetailIdx] = useState(0);
  const [activeTabFa, setActiveTabFa] = useState('MEETING ROOM');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    {
      id: 1,
      img: img01,
      title: "HIDDEN DELIGHT\nDELIGHTFUL PRICE\nDELIGHTFUL STAY\nDELIGHTFUL EXPERIENCE",
      desc: "'나인트리 바이 파르나스 서울 인사동'은 화려한 도심속에 살아 숨쉬는 우리의 멋과 일상의 여유가 가득한 인사동\n에 위치하여 한국 전통의 향취와 함께 편안한 휴식을 선사합니다."
    },
    {
      id: 2,
      img: img02,
      title: "HIDDEN DELIGHT\nDELIGHTFUL PRICE\nDELIGHTFUL STAY\nDELIGHTFUL EXPERIENCE",
      desc: "편안한 휴식과 여유, 특별한 경험을 선사합니다."
    },
    {
      id: 3,
      bg: img03,
      title: "HIDDEN DELIGHT\nDELIGHTFUL PRICE\nDELIGHTFUL STAY\nDELIGHTFUL EXPERIENCE",
      sub: "편안한 휴식과 여유, 특별한 경험을 선사합니다."
    },
    {
      id: 4,
      bg: img04,
      title: "HIDDEN DELIGHT\nDELIGHTFUL PRICE\nDELIGHTFUL STAY\nDELIGHTFUL EXPERIENCE",
      sub: "편안한 휴식과 여유, 특별한 경험을 선사합니다."
    },
    {
      id: 5,
      bg: img05,
      title: "HIDDEN DELIGHT\nDELIGHTFUL PRICE\nDELIGHTFUL STAY\nDELIGHTFUL EXPERIENCE",
      sub: "편안한 휴식과 여유, 특별한 경험을 선사합니다."
    },
    {
      id: 6,
      bg: img06,
      title: "HIDDEN DELIGHT\nDELIGHTFUL PRICE\nDELIGHTFUL STAY\nDELIGHTFUL EXPERIENCE",
      sub: "편안한 휴식과 여유, 특별한 경험을 선사합니다."
    }
  ];

  const roomData = {
    STANDARD: {
      subRooms: [
        { 
          name: "STANDARD DOUBLE", 
          title: "Standard Double",
          desc: "비즈니스 고객을 위한 심플하고 쾌적한 인테리어의 스탠다드 더블룸은 편리함과 안락함을 더합니다.",
          mainImg: "/images/main-1-1standard double.jpg",
          thumb: "/images/main-1-1standard double.jpg" 
        },
        { 
          name: "STANDARD TWIN", 
          title: "Standard Twin",
          desc: "만족스러운 수면 환경을 위한 두 개의 싱글 베드는 효율적인 공간 구성으로 독립성을 보장합니다.",
          mainImg: "/images/main-1-2standard twin.jpg",
          thumb: "/images/main-1-2standard twin.jpg" 
        },
        { 
          name: "STANDARD TRIPLE", 
          title: "Standard Triple",
          desc: "독립된 3개의 싱글 베드로 경제성을 겸비한 스탠다드 트리플 객실은 3인 투숙에 가장 이상적입니다.",
          mainImg: "/images/main-1-3standard triple.jpg",
          thumb: "/images/main-1-3standard triple.jpg" 
        }
      ]
    },
    FAMILY: {
      subRooms: [
        { 
          name: "FAMILY TWIN", 
          title: "Family Twin",
          desc: "가족단위 고객을 위해 더블 베드와 싱글 베드로 구성되었습니다. 내 집과 같은 편안한 휴식공간을 제공합니다.",
          mainImg: "/images/main-2-1family twin.jpg",
          thumb: "/images/main-2-1family twin.jpg" 
        },
        { 
          name: "FAMILY KIDS", 
          title: "Standard Twin",
          desc: "자녀를 동반한 가족 여행객을 위해 마련된 패밀리 키즈룸은 더블베드와 어른이 누워도 넉넉한 사이즈의 유니크한 이층 침대로 어린이 고객의 마음을 사로잡습니다.",
          mainImg: "/images/main-2-2family twin kids .jpg",
          thumb: "/images/main-2-2family twin kids .jpg" 
        },
      ]
    },
    SUITE: {
      subRooms: [
        { 
          name: "FAMILY TWIN SUITE", 
          title: "Family Twin Suite",
          desc: "품격 있는 인테리어로 럭셔리한 휴식을 제공하는 패밀리 트윈 스위트는 더블 베드와 싱글 베드로 구성되어 있습니다.",
          mainImg: "/images/main-3-1family twin suite.jpg",
          thumb: "/images/main-3-1family twin suite.jpg" 
        },
        { 
          name: "FAMILY KIDS SUITE", 
          title: "Family Kids Suite",
          desc: "패밀리 키즈 스위트는 넉넉한 사이즈의 더블베드뿐만 아니라 자녀 고객을 위한 별도의 키즈룸의 2층 침대와 어린이 전용 욕실을 겸비하여 더욱 재미있는 투숙을 선사합니다.",
          mainImg: "/images/main-3-2family kids suite.jpg",
          thumb: "/images/main-3-2family kids suite.jpg" 
        },
        { 
          name: "PANORAMIC SUITE", 
          title: "Panoramic Suite",
          desc: "침실 공간을 마루와 같이 간이 벽으로 분리하여 독특한 공간 활용을 구현한 파노라믹 스위트는 한국의 좌식 체험을 선사합니다.",
          mainImg: "/images/main-3-3panoramic suite.jpg",
          thumb: "/images/main-3-3panoramic suite.jpg" 
        },
        { 
          name: "QUAD SUITE", 
          title: "Quad Suite",
          desc: "쿼드 스위트의 한국 전통 창살을 형상화한 벽이 침실과 거실을 분리하여 더욱 실용적이고 고급스러운 분위기를 자아냅니다.",
          mainImg: "/images/main-3-4quad suite.jpg",
          thumb: "/images/main-3-4quad suite.jpg" 
        }
      ]
    }
  };

  const facilitiesData = {
    'MEETING ROOM': {
      title: 'Meeting room',
      desc: '품격있는 전망을 자랑하는 미팅룸은 다목적 회의실로 최첨단 장비를 갖춰 고객의 성공적인 비즈니스를 위한 최상의 시설입니다.',
      images: ['/images/main-fac-meeting01.jpg', '/images/main-fac-meeting02.jpg']
    },
    'LOUNGE 9': {
      title: 'Lounge 9',
      desc: '5층에 위치한 라운지 9에서는 다양한 목적의 비즈니스 업무 공간 활용 및 여행의 여유와 편안한 휴식을 즐길 수 있습니다.',
      images: ['/images/main-fac-lounge01.jpg', '/images/main-fac-lounge02.jpg']
    },
    'EVENT ROOM': {
      title: 'Event Room',
      desc: '한국 전통을 체험하실 수 있는 다양한 이벤트가 마련됩니다.',
      images: ['/images/main-fac-event01.jpg', '/images/main-fac-event02.jpg']
    },
    'TOP CLOUD O-FIVE': {
      title: 'Top Cloud o-five',
      desc: '한국 전통의 인사동길과 연결되는 나인트리 바이 파르나스 서울 인사동에서 20년 역사의 탑클라우드 오파이브에서는 올데이다이닝을 제공합니다. 탑클라우드 오파이브는 엄선된 신선한 식재료만을 이용하여 한국적인 맛과 스타일로 재해석하여 독창적인 미식 경험을 선사합니다.',
      images: ['/images/rest_01.jpg', '/images/rest_02.jpg', '/images/rest_03.jpg']
    },
    'ROOF TOP BAR': {
      title: 'Roof Top Bar',
      desc: '감동적인 하루의 마무리를 위한 루프탑 바는 감각적인 인테리어로 자유로움과 유쾌한 에너지로 초대합니다. 12층에 위치하여 세련된 음악과 함께 서울 도심의 아름다운 야경을 감상하며, 다양한 칵테일과 신선한 Draft Beer를 즐기실 수 있습니다.',
      images: ['/images/roofbar_01.jpg', '/images/roofbar_02.jpg']
    },
    'Arcade': {
      title: 'Arcade',
      desc: '인사동의 새로운 복합상업시설인 ‘안녕인사동’은 ‘시(時), 공(空), 감(感)’ 등 세 한자어를 키워드로 1층부터 5층까지 대형 체험형 매장 및 전시 공간 등을 마련하여 다양한 한국문화의 현재를 체험할 수 있습니다.',
      images: ['/images/main-fac-arcade01.jpg', '/images/main-fac-arcade02.jpg']
    },
    // ... 다른 탭 데이터
  };

  const offerData = [
    {
      id: 1,
      date: '2025-03-11 ~ 2026-12-31',
      title: '행복한 한복',
      desc: '한국의 전통의상 한복을 입고 서촌을 여행해 보세요!',
      tags: '#한복 #전통여행 #한복체험 #Hanbok #한복여행',
      img: '/images/admin_20250311_b77aa2d5952a72ade61f621692b8dd98.jpg'
    },
    {
      id: 2,
      date: '2024-03-22 ~ 2026-12-31',
      title: 'Seoul City Tour Bus package',
      desc: '서촌 시티투어 버스를 타고 신나는 서촌 여행!',
      tags: '#2층버스 #시티투어버스 #서울 #관광',
      img: '/images/admin_20240322_1a6ecd675755d323834f07e3cacd8e05.jpg'
    },
    // 필요에 따라 더 추가...
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setDetailIdx(0); 
  };

  

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? facilitiesData[activeTabFa].length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === facilitiesData[activeTabFa].length - 1 ? 0 : prev + 1));
  };

  // 현재 렌더링할 데이터 참조
  const currentRoom = roomData[activeTab].subRooms[detailIdx];

  const currentImages = facilitiesData[activeTabFa].images;

  return (
    <div className="home">
      <div className='home-container'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade" // 화면 전환을 opacity로 조절
          loop={true}
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          className="main-swiper"
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-item" style={{ backgroundImage: `url(${slide.img})` }}>
                <div className="overlay"></div>
                <div className="txt-box">
                  <h2 className="title">{slide.title}</h2>
                  <p className="desc">{slide.desc}</p>
                  <div className="more-btn">DISCOVER MORE</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* 하단 화살표 (선택사항) */}
        <div className="scroll-down">
          <span></span>
        </div>
      </div>
      <section className="home-intro">
        <div className="inner">
          <div className="txt-area">
            <div className="logo-img">
              {/* 로고 이미지가 있다면 img 태그로, 없다면 텍스트로 대체 */}
              <h3 className="intro-logo">
                <img src="/images/logo-b.png" alt="나인트리로고" />
              </h3>
            </div>
            <p className="desc">
              '나인트리 바이 파르나스 서울 인사동'은 화려한 도심 속에 살아 숨쉬는 우리의 
              멋과 일상의 여유가 가득한 인사동에 위치하여 한국 전통의 향취와 함께 
              편안한 휴식을 선사합니다.
            </p>
          </div>
          
          <div className="img-area">
            <div className="img-box">
              <img src={mainimg} alt='호텔외관'/>
            </div>
            {/* 이미지 뒤의 빈 박스 (디자인 포인트) */}
            <div className="bg-deco"></div>
          </div>
        </div>
      </section>
      <section className="accommodation">
        <div className="inner">
          <h2 className="sec-title">Accommodation</h2>
          
          <ul className="tab-menu">
            {Object.keys(roomData).map((tab) => (
              <li 
                key={tab} 
                className={activeTab === tab ? 'active' : ''}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>

          {/* 컨텐츠 박스 시작 */}
          <div className="room-container">
            {/* 뒤에 깔리는 테두리 박스 */}
            <div className="bg-line"></div>

            <div className="room-content">
              {/* 메인 영역: 테두리보다 왼쪽으로 더 넓게 배치됨 */}
              <div className="main-display">
                <div className="img-box">
                  <img src={currentRoom.mainImg} alt={currentRoom.title} />
                </div>
                <div className="info-box">
                  <h3>{currentRoom.title}</h3>
                  <p>{currentRoom.desc}</p>
                  <button className="details-btn">DETAILS</button>
                </div>
              </div>

              {/* 서브 리스트: 테두리 박스 안쪽에 위치 */}
              <div className="sub-list">
                {roomData[activeTab].subRooms.map((room, idx) => (
                  <div 
                    key={idx} 
                    className={`sub-item ${detailIdx === idx ? 'on' : ''}`}
                    onClick={() => setDetailIdx(idx)}
                  >
                    <div className="sub-img">
                      <img src={room.thumb} alt={room.name} />
                    </div>
                    <span>{room.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="facilities">
        <h2>Facilities</h2>
        
        {/* 탭 메뉴 */}
        <ul className="tab-menu">
          {Object.keys(facilitiesData).map((tab) => (
            <li 
              key={tab} 
              className={activeTabFa === tab ? 'active' : ''} 
              onClick={() => { setActiveTabFa(tab); setCurrentSlide(0); }}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="facilities-container">
          <div className="slider-box">
          {/* 이미지 영역: currentSlide에 따라 이미지만 변경 */}
            <div className="image-area">
              <div className="image-wrapper">
                {currentImages.map((img, index) => (
                  <img 
                    key={index}
                    src={img} 
                    alt={`${activeTabFa} ${index}`}
                    className={currentSlide === index ? 'active' : ''} 
                  />
                ))}
              </div>
            
            {/* 버튼 호버 시 색상 변경되는 컨트롤러 */}
              <div className="slider-controls">
                <button className="prev" onClick={handlePrev}><IoIosArrowBack /></button>
                <button className="next" onClick={handleNext}><IoIosArrowForward /></button>
              </div>
            </div>

          {/* 정보 영역: 탭이 바뀔 때만 변경되고 슬라이드 시에는 고정 */}
            <div className="info-area">
              <h3>{facilitiesData[activeTabFa].title}</h3>
              <p>{facilitiesData[activeTabFa].desc}</p>
              <button className="explore-btn">EXPLORE MORE</button>
            </div>
          </div>
        </div>
      </section>
      <section className="offer">
      <div className="offer-inner">
        <h2>Offer</h2>
        <p className="sub-title">특별한 날을 위한 이벤트</p>
        
        <div className="offer-grid">
          {offerData.map((item) => (
            <article key={item.id} className="offer-item">
              {/* 이미지 영역만 a태그 연결 및 호버 확대 */}
              <a href={`/offer/${item.id}`} className="image-box">
                <img src={item.img} alt={item.title} />
              </a>

              {/* 텍스트 영역 */}
              <div className="text-box">
                <span className="date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="tags">{item.tags}</span>
                <a href={`/offer/${item.id}`} className="read-more">READ MORE</a>
              </div>
            </article>
          ))}
        </div>

        <button className="view-all">SEE ALL OFFER</button>
      </div>
    </section>
    </div>
  );
};

export default Home;