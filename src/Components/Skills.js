import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mueble1 from '../assets/img/vend1.jpg';
import mueble2 from '../assets/img/vend2.jpg';
import mueble3 from '../assets/img/vend3.jpg';
import mueble4 from '../assets/img/vend4.jpg';
import mueble5 from '../assets/img/vend5.jpg';
import mueble6 from '../assets/img/vend6.jpg';
import fondo from '../assets/img/color-sharp.png';
export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>COMPRA AHORA</h1>
                            <Carousel responsive= {responsive} infinite = {true} className="skill-slider">
                                <div className="item">
                                    <img src={mueble1} alt="image"></img>
                                    <h3>70 BS.</h3>
                                </div>
                                <div className="item">
                                    <img src={mueble2} alt="image"></img>
                                    <h3>50 BS.</h3>
                                </div>
                                <div className="item">
                                    <img src={mueble3} alt="image"></img>
                                    <h3>650 BS.</h3>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src = {fondo}></img>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>COMPRA AHORA</h1>
                            <Carousel responsive= {responsive} infinite = {true} className="skill-slider">
                                <div className="item">
                                    <img src={mueble4} alt="image"></img>
                                    <h3>130 BS.</h3>
                                </div>
                                <div className="item">
                                    <img src={mueble5} alt="image"></img>
                                    <h3>200 BS.</h3>
                                </div>
                                <div className="item">
                                    <img src={mueble6} alt="image"></img>
                                    <h3>1000 BS.</h3>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src = {fondo}></img>
        </section>
    )
}