import React, { useState } from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

import './Contact.css';

const styles = {
    error: {
        color: "red",
        fontStyle: "italic",
        fontWeight: "bold",
    },
};
  
const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(<span style={styles.error}>Numele este obligatoriu</span>),
    user_contact: Yup.string().required(<span style={styles.error}>O modalitate de contact este obligatorie</span>),
    message: Yup.string().required(<span style={styles.error}>Mesajul este obligatoriu</span>),
});

export default function Contact() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const sendEmail = (values) => {
        emailjs.send('service_gc6mt9w', 'template_zxt4u2b', values, 'eHBC55-naAmnbPDwl')
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="containerContact" id="contact">
            <p className="titleContact">Contactează-mă</p>
            <Container>
                <Formik
                    initialValues={{
                        user_name: '',
                        user_contact: '',
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        if (!values.user_name || !values.user_contact || !values.message) {
                            setSubmitting(false);
                            return;
                        }
                        sendEmail(values);
                        resetForm();
                        Swal.fire({
                            title: 'Mesajul a fost trimis cu succes!',
                            icon: 'success',
                            timer: 2500,
                            showConfirmButton: false,
                        });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="contactContainer">
                            <Row>
                                <Col sm={6}>
                                    <b><label htmlFor="message" className="contactText">Nume:</label></b>
                                    <Field type="text" name="user_name" className="form-control formAppearance field" placeholder="Numele tău" />
                                    <ErrorMessage name="user_name" component="div" className="error-message" /> 
                                </Col>
                                <Col sm={6}>
                                    <b><label htmlFor="message" className="contactText">Telefon / Email:</label></b>
                                    <Field type="text" name="user_contact" className="form-control formAppearance" placeholder="Modalitate de contact"/>
                                    <ErrorMessage name="user_contact" component="div" className="error-message" />
                                </Col>
                            </Row>
                            <Row>
                                <b><label htmlFor="message" className="contactText">Mesaj:</label></b>
                                <Field as="textarea" name="message" className="textarea form-control formAppearance" rows="6" cols="50" placeholder="Scrie aici mesajul..."/>
                                <ErrorMessage name="message" component="div" className="error-message" />
                            </Row>
                            <Row>
                                <div className="centerButton">
                                    <Button
                                        variant="outline-light"
                                        type="submit"
                                        className="d-flex align-items-center justify-content-center buttonContact"
                                        disabled={isSubmitting || isFormSubmitted}
                                    >
                                        Trimite
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}