import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Discord from '../../assets/icons/Discord.png';
import Instagram from '../../assets/icons/Instagram.png';
import Facebook from '../../assets/icons/Facebook.png';

import './Footer.css';

export default function Footer() {
    return (
        <div className="containerFooter">
            <Row className="centrateFooter">
                <Col sm={3} className="centrateFooter">
                    <div>
                        <a href="/"><p className="footerText">Acasă</p></a>
                        <a href="#despre"><p className="footerText">Despre mine</p></a>
                        <a href="#servicii"><p className="footerText">Servicii</p></a>
                        <a href="#faq"><p className="footerText">FAQ</p></a>
                    </div>
                </Col>
                <Col sm={3} className="centrateFooter">
                <div className="d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <p className="footerText">Mă poți contacta și la telefon:</p>
                        </div>
                        <div>
                            <p className="footerText"><b>0722353082</b></p>
                        </div>
                    </div>
                </Col>
                <Col sm={3} className="centrateFooter">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div>
                            <p className="footerText">
                                Contactează-mă pe una dintre rețelele de socializare disponibile mai jos:
                            </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="https://discord.gg/k74gZRTj" target="_blank">
                                <img src={Discord} className="socialIcon" alt="Discord"/>
                            </a>
                            <a href="https://www.instagram.com/robert.bmb/" target="_blank">
                                <img src={Instagram} target="_blank" className="socialIcon" alt="Instagram"/>
                            </a>
                            <a href="https://www.facebook.com/meditatii.informatica.2024" target="_blank" >
                                <img src={Facebook} className="socialIcon" alt="Facebook"/>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="centrateCopyRight">
                    <p className="copyRight">© {new Date().getFullYear()} Copyright | Website creat de{' '}
                        <a href="https://antoniocrantea.software/" target="_blank" style={{color: "#808080"}}>
                            Crantea Antonio-Cristian
                        </a>
                    </p>
                </div>
            </Row>
        </div>
    )
}