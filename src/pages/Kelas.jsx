import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { semuaKelas } from '../data/index'
import FaqComponent from '../components/FaqComponent'


const Kelas = () => {
  return (
    <div className='kelas-page'>
    <div className='kelas min-vh-100'>
      <Container>
        <Row>
          <Col>
            <h1 className='fw-bold text-center'>Semua Konten</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
        <Row>
        {semuaKelas.map((kelas) => {
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
      </Container>
    </div>

    <FaqComponent />
    </div>
    
  )
}

export default Kelas