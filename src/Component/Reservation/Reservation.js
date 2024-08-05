import React from 'react';
import css from './Reservation.module.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';

const Reservation = () => {
    return (
        <div>
            <div className={css.continerReservation}>
                <div className={css.bookT}>
                    <h2>Reservation</h2>
                    <h1>BOOK TABLE</h1>
                    <div className={css.forms}>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGriddate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridname">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Name" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="time" placeholder="" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Phone" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>People</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Person</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>

                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                            </Row>

                        </Form>
                        
                    </div>

                    <div className={css.btn}>

                        <button>BOOK TABLE</button>
                    </div>
                </div>
                
                <div className={css.booksimg}>
                <div className={css.bookimg}>
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default Reservation;
