import { Container,Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import usuario from '../assets/img/usuario.jpg'
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Project = () =>{
    const[loopnum,setloopnum]=useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    return(
        <section className="project" id="project">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Creditos del estudiante:</span>
                        <h1>{'Estudainte: \t Francisco Gustavo Troche Venegas'}<br></br></h1>
                        <p>
                            C.I.:<br></br>
                            8323347 L.P.<br></br>
                            R.U.:<br></br>
                            1815390<br></br>
                            Mateira y Paralelo:
                            <br></br>
                            INF-122 "A"
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={usuario} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}