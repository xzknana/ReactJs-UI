import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimoni } from '../data/index'

import FaqComponent from '../components/FaqComponent'

const Testimoni = () => {
  return (
    <div className='testi-page'>
      <div className='testi'>
        <Container>
        <Row className='mb-5'>
          <Col>
            <h1 className='text-center fw-bold'>Member seventeen waras atau gila?</h1>
            <p className='text-center'>jawabannya tergantung pandangan masing-masing</p>
          </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-1'>
        {testimoni.map((data) => {
                  return (
                  <Col key='data.id' className='mb-5'>
                    <p className='desc shadow-sm'>{data.desc}</p>
                    <div className='people'>
                      <img src={data.image} alt=''/>
                      <div>
                        <h5 className='mb-1'>{data.name}</h5>
                        {/* <p>{data.skill}</p> */}
                      </div>
                    </div>
                  </Col>
                  );
                })}
        </Row>

        </Container>
      </div>
    </div>
  )
}

export default Testimoni