import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import NavbarComponent from '../Navbar/Navbar';

import Avatar from '../../assets/images/Avatar.png';

import './Main.css';

export default function Main() {
    return (
        <div className="containerMain">
            <NavbarComponent/>
            <Row>
                <Col sm={12} md={6}>
                    <p className="titleMain1">Salutare tuturor! Sunt</p>
                    <p className="titleMain2">Robert, meditator la Informatică și student la Facultatea de Inginerie în Limbi Străine</p>
                    <p className="titleMain3">Ai bacul sau ești pasionat de informatică? Nu ezita să mă contactezi pentru a începe meditațiile.</p>
                    <Button variant="outline-light" className="buttonMain" href="#despre">Despre Mine</Button>
                </Col>
                <Col sm={12} md={6} className="imageContainer">
                    <img src={Avatar} className="imageMain" alt="Avatar"/>
                </Col>
            </Row>
        </div>
    )
}