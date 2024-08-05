import React from 'react';
import css from './caedTow.module.css'
import intro1 from '../img/blog-01.jpg'
import intro2 from '../img/blog-02.jpg'
import intro3 from '../img/blog-03.jpg'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const CaedTow = () => {
    return (
        <div>
             <div>
             <div className={css.cards}>
                <div className={css.cardone}>
                        <Card.Img variant="top" src={intro1} />
                        <Card.Body className={css.textCard}>
                            <h3>BEST PLACES FOR WINE</h3>
                                <Card.Text>
                                    Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.
                                </Card.Text>
                                <Link> LEARN MORE <FaArrowRight /></Link>
                         </Card.Body>
                </div>

                <div className={css.cardone}>
                        <Card.Img variant="top" src={intro2}/>
                        <Card.Body className={css.textCard}>
                            <h3>EGGS AND CHEESE</h3>
                            <Card.Text>
                                Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna
                            </Card.Text>
                            <Link> LEARN MORE <FaArrowRight /></Link>
                        </Card.Body>
                   </div>

                <div className={css.cardone}>
                        <Card.Img variant="top" src={intro3} />
                        <Card.Body className={css.textCard}>
                            <h3>STYLE THE WEDDING PARTY</h3>
                            <Card.Text>
                                Sed ornare ligula eget tortor tempor, quis porta tellus dictum.
                            </Card.Text>
                            <Link> LEARN MORE <FaArrowRight /></Link>
                        </Card.Body>
                </div>
            </div>
        </div>
            
        </div>
    );
}

export default CaedTow;
