import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"


const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">Seventeen</h3>
            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="no">
                <Link className="text-decoration-none">
                <i className="fa-brands fa-instagram"></i>
                <p className="m-0">saythename_17</p>
                </Link>
              </div>
              <div className="loc">
                <Link className="text-decoration-none">
                  <i className="fas fa-map-marker-alt"></i>
                  <p className="m-0">42, Hangang-daero, Yongsan-gu, Seoul, Republic of Korea</p>
                </Link>
              </div>
          </Col>
          <Col className="d-flex flex-column col-lg-6 col">
            <h5 className="fw-bold">Menu</h5>
            <Link to="kelas">Konten</Link>
            <Link to="testimoni">Testimoni</Link>
            <Link to="faq">FAQ</Link>
            <Link to="member">Member</Link>
          </Col>
        </Row>
        <Row className="mt-10">
        <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().
          getFullYear()}by <span className="fw-bold">Rissa Rizkika</span> All Right Reserved</p>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent