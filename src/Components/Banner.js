import { Container,Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import headerImg from '../assets/img/header-img.jpg'
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () =>{
    const[loopnum,setloopnum]=useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Buenos", "Bonitos", "Barratos"];
    const [Text, setText] = useState("");
    const tiempo=2000;
    const [Delta, setDelta] = useState(300 - Math.random * 100);
    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },Delta)
        return()=>{clearInterval(ticker)};
    }, [Text])
    const tick =()=>{
        let i = loopnum%toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,Text.length-1): fulltext.substring(0,fulltext.length+1);
        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && updateText === fulltext){
            setisDeleting(true);
            setDelta(tiempo);
        }else if(isDeleting && updateText === ''){
                setisDeleting(false);
                setloopnum(loopnum+1);
                setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Bienvenido a la mas grande tienda de muebles de la ciudad</span>
                        <h1>{'Contamos con muchos muebles y decoraciones y de buena calidad'}<br></br><span className="wrap">{Text}</span></h1>
                        <p>Tienda ubicada en la ciudad de La Paz, Bolivia.
                        Con 50 años de experiencia en venta de muebles y decoraciones para el hogar.
                        </p>
                        <button><a href="https://vymaps.com/BO/Muebleria-4-Hermanos-Sucursal-El-Alto-La-Paz--153763/">Mas informacion</a><ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}