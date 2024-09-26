import { Container, Row, Col } from 'react-bootstrap'
import HeroImage from '../assets/img/05.jpg'
import React from 'react'
import { kelasTerbaru, dataSwiper } from '../data/index'
import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import FaqComponent from '../components/FaqComponent'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Home = () => {
  let navigate = useNavigate();

  const handleGamelabClick = () => {
    window.location.href = 'https://www.pledis.co.kr/en/company/';
}

const handleDashboardClick = () => {
    window.location.href = 'https://www.youtube.com/playlist?list=PLk_UmMfvZDx21Z9eEQ9DcIlUfZp1uwEup';
}


  return (
    <div className='home'>
      <header className='w-100 min-vh-100 d-flex align-items-center'>
      <Container>
        <Row className='header-box d-flex align-items-center pt-lg-5'>
          <Col lg='6'>
          <h1 className='mb-4'>
            Say The Name! <br /><span>Seventeen</span><br /> by Pledis Entertaiment
          </h1>
          <p className='mb-4'>The name Seventeen is derived from the expression "13 members + 3 units + 1 group", representing how the 13 members are divided into three different units and come together to form one cohesive group.</p>

          <button className='btn btn-outline-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2' onClick={handleGamelabClick}>Merchandise</button>
          <button className='btn btn-outline-primary btn-lg rounded-1 me-2 mb-xs-0 mb-2' onClick={handleDashboardClick}>Event</button>
          </Col>
          <Col lg='6' className='pt-lg-0 pt-3'>
          <img src={HeroImage} alt='hero-img' className='img-fluid'/>
          </Col>
        </Row>
      </Container>
      </header>
      <div className='kelas w-100 min-vh-100'>
        <Container>
          <Row>
            <Col>
            <h1 className='text-center fw-bold'>Konten Terbaru</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id} className='shadow rounded'>
                  <img src={kelas.image} alt='unsplash.com' className='mb-5 rounded-top'/>
                  <div className='star1 mb-2'>
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className='mb-5 px-3'>{kelas.title}</h5>
                  <p></p>
                  <button className='btn btn-outline-info'>{kelas.buy}</button>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
              <button className='btn btn-success rounded-5 btn-lg' onClick={() => navigate('/kelas')}>
                Lihat Semua Konten
              <i className='fa-solid fa-chevron-right ms-3'></i>
              </button>
              
            </Col>
          </Row>
        </Container>
      </div>
      <div className='testimoni py-5'>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold my-5'>Testimonial</h1>
            </Col>
          </Row>
          <Row>
                  <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {dataSwiper.map((data) => {
                  return (
                  <SwiperSlide key='data.id' className='shadow-sm'>
                    <p className='desc'>{data.desc}</p>
                    <div className='people'>
                      <img src={data.image} alt=''/>
                      <div>
                        <h5 className='mb-1'>{data.name}</h5>
                        {/* <p>{data.skill}</p> */}
                      </div>
                    </div>
                  </SwiperSlide>
                  );
                })}
                
                
              </Swiper>
          </Row>
        </Container>
      </div>

      {/* SECTION FAQ */}
      <FaqComponent />

    </div>
  )
}

export default Home