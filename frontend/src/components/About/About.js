import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ImageAbout from '../../assets/images/AboutImage.webp';

import './About.css';

export default function About() {
    return (
        <div className="containerAbout" id="despre">
            <Row>
                <Col sm={6} className="d-flex align-items-center justify-content-center">
                    <img src={ImageAbout} className="imageAbout" alt="Avatar"/>
                </Col>
                <Col sm={6}>
                    <p className="titleAbout1">Ceva despre mine, un text aici, orice, ceva, bla bla</p>
                    <p className="descriptionAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="descriptionAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="descriptionAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
            </Row>
        </div>
    )
}
