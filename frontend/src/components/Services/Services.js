import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import School from '../../assets/logo/School.png';
import Exam from '../../assets/logo/Exam.png';
import Faculty from '../../assets/logo/Faculty.png';

import './Services.css';

export default function Services() {
    return (
        <div className="containerServices" id="servicii">
            <p className="titleServices">Servicii & Meditații</p>
            <Row className="cardsPosition d-flex align-items-center justify-content-center">
                <Col xs={12} sm={6} md={4} className="m-auto">
                    <Card className="cardsStyle">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={School} className="cardsImage" />
                        </div>
                        <Card.Body>
                            <Card.Title className="cardTitle">Pregătire Școlară</Card.Title>
                            <Card.Text className="cardDescription">
                                Meditațiile mele pentru elevii de liceu oferă suport esențial în pregătirea academică și nu.
                                numai. Indiferent de anul de școală, este crucial să începi pregătirile din timp pentru a obține
                                rezultate optime în viitorul examen de bacalaureat și în viața academică ulterioară.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="m-auto">
                    <Card className="cardsStyle">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={Exam} className="cardsImage" />
                        </div>
                        <Card.Body>
                            <Card.Title className="cardTitle">Examenul de Bacalaureat</Card.Title>
                            <Card.Text className="cardDescription">
                                Pentru cei ce au bacul iminent, meditațiile mele oferă o soluție rapidă și eficientă. Cu efort
                                minim, materia poate fi învățată într-un timp scurt, garantând rezultate excelente. O abordare
                                concentrată și strategică poate face diferența în obținerea succesului dorit la examen.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} className="m-auto">
                    <Card className="cardsStyle">
                        <div className="d-flex justify-content-center">
                            <Card.Img variant="top" src={Faculty} className="cardsImage" />
                        </div>
                        <Card.Body>
                            <Card.Title className="cardTitle">Admitere Facultate</Card.Title>
                            <Card.Text className="cardDescription">
                                Pentru cei ce se pregătesc pentru admitere, meditațiile mele oferă o pregătire
                                detaliată și eficientă. Vom aborda subiecte specifice, transformând examenul într-o experiență
                                mai ușoară și mai sigură. Obținerea succesului în examenul de admitere devine astfel mai
                                accesibilă și mai realizabilă.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}