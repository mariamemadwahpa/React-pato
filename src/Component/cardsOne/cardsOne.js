import React from 'react';
import css from './cardsOne.module.css'
import intro1 from '../img/intro-01.jpg'
import intro2 from '../img/intro-02.jpg'
import intro3 from '../img/intro-04.jpg'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const CardsOne = () => {
    return (
        <div>
             <div className={css.cards}>
                <div className={css.cardone}>
                        <Card.Img variant="top" src={intro1} />
                        <Card.Body className={css.textCard}>
                            <h3>ROMANTIC RESTAURANT</h3>
                                <Card.Text>
                                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                                </Card.Text>
                                <Link> LEARN MORE <FaArrowRight /></Link>
                         </Card.Body>
                </div>

                <div className={css.cardone}>
                        <Card.Img variant="top" src={intro2}/>
                        <Card.Body className={css.textCard}>
                            <h3>DELICIOUS FOOD</h3>
                            <Card.Text>
                                Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna
                            </Card.Text>
                            <Link> LEARN MORE <FaArrowRight /></Link>
                        </Card.Body>
                   </div>

                <div className={css.cardone}>
                        <Card.Img variant="top" src={intro3} />
                        <Card.Body className={css.textCard}>
                            <h3>RED WINES YOU LOVE</h3>
                            <Card.Text>
                                Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                            </Card.Text>
                            <Link> LEARN MORE <FaArrowRight /></Link>
                        </Card.Body>
                </div>
            </div>
        </div>
    );
}

export default CardsOne;
