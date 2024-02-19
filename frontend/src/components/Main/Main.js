import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import NavbarComponent from '../Navbar/Navbar';

import Avatar from '../../assets/images/Avatar.webp';

import './Main.css';

export default function Main() {
    return (
        <div className="containerMain">
            <NavbarComponent/>
            <Row>
                <Col sm={6}>
                    <p className="title1">Salutare tuturor! Sunt</p>
                    <p className="title2">Robert, meditator la Informatică și student la Facultatea de Inginerie în Limbi Străine</p>
                    <p className="title3">Aici ar trebuie să vină o scurtă descriere despre persoana ta, orice consideri relevant.</p>
                    <Button variant="outline-light" className="button">Despre Mine</Button>{' '}
                </Col>
                <Col sm={6} className="imageContainer">
                    <img src={Avatar} className="imageMain" alt="Avatar"/>
                </Col>
            </Row>
        </div>
    )
}