import React from 'react';
import css from"./welcom.module.css";
import ourstory from '../img/our-story-01.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


const Welcome = () => {
    return (
        <div>
             <div className={css.ContainerCard}>
                <div className={css.Containerparant}>
                    <div className={css.CardParantTow}>
                        <h3>Italian Restaurant</h3>
                        <h1>WELCOME</h1>
                        <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                        <Link href='#'>OUR STORE <FaArrowRight /></Link>
                    </div>
                    <div className={css.CardParantTow}>
                        <img src={ourstory} alt="" />
                    </div>
                </div>
            </div>
            <div className={css.ContainerCardtow}>
                <h3>Discover</h3>
                <h1>PATO PLACE</h1>
            </div>
        </div>
        
    );
}

export default Welcome;
