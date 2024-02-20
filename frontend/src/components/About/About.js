import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import ImageAbout from '../../assets/images/Profile.jpg'

import './About.css';

export default function About() {
    return (
        <div className="containerAbout" id="despre">
            <Row>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center">
                    <img src={ImageAbout} className="imageAbout" alt="Avatar"/>
                </Col>
                <Col sm={12} md={6}>
                    <p className="titleAbout1">Ceva despre mine, ei bine...</p>
                    <p className="descriptionAbout">
                        Hey there! Eu sunt Apostol George-Robert, un tip din București care adorătotce ține de informatică și
                        tehnologie! Sunt student la Universitatea Politehnica, la facultatea FILS (Facultatea de Inginerie în
                        Limbi Străine) și de când mă știu, am fost fascinat de lumea calculatoarelor.
                    </p>
                    <p className="descriptionAbout">
                        În timpul liceului, m-am concentrat pe profilul matematică-informatică intensiv informatică, iar la
                        Bacalaureat am dat piept cu materia de informatică și am luat 10! De atunci, m-am decis să împărtășesc
                        pasiunea mea cu alții. Ajut elevi în pregătirea pentru Bac de un an încoace și sunt super fericit să
                        spun că toți au dat piept cu examenul cu succes!
                    </p>
                    <p className="descriptionAbout">
                        Abia aștept să continui să fac ce-mi place și să ajut cât mai mulți oameni să se îndrăgostească de
                        informatică la fel de mult ca mine! Te aștept și pe tine să începem pregătirea!
                    </p>
                    <div className="d-flex align-items-center justify-content-center">
                        <Button variant="outline-light" className="buttonAbout" href="#contact">Contactează-mă</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
