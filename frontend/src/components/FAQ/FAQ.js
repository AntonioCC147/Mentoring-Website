import { useContext } from 'react';
import { Accordion, Card, AccordionContext } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import FAQS from './FAQData.json';

import up from '../../assets/icons/up.png';
import down from '../../assets/icons/down.png';

import './FAQ.css'

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
        <button
            type="button"
            className="my-accordion-button d-flex w-100 transparentCard"
            onClick={decoratedOnClick}
        >
            <div className='flex-grow-1 d-flex flex-row ps-3 text-start'>
                {children}
            </div>
            <img src={ isCurrentEventKey ? up : down } className="accordion-icon m-auto iconsFAQ" alt="Icon" />
        </button>
    );
}

export default function Feedback() {
    return (
        <div className="containerFAQ" id="faq">
            <p className="titleFAQ">Frequently Asked Questions</p>
            <Accordion flush>
                {FAQS.map((faq, index) => {
                    return (
                        <Card key={index}
                            className={"p-0 m-3 border-white card-hover" + (index === 0 ? "border-top-0 card-hover" : "")}>
                            <Card.Header>
                                <div className='d-flex flex-row p-1 pb-2'>
                                    <ContextAwareToggle eventKey={index + 1} className="cv">{faq.question}</ContextAwareToggle>
                                </div>                                
                            </Card.Header>
                            <Accordion.Collapse eventKey={index + 1}>
                                <Card.Body className="cardAnswer">{faq.response}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
            </Accordion>
        </div>
    )
}