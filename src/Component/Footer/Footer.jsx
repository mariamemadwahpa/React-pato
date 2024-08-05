import React from 'react';
import css from './Footer.module.css'
import { Link } from 'react-router-dom';

import img1 from '../img/photo-gallery-01.jpg'
import img2 from '../img/photo-gallery-02.jpg'
import img3 from '../img/photo-gallery-03.jpg'
import img4 from '../img/photo-gallery-04.jpg'
import img5 from '../img/photo-gallery-05.jpg'
import img6 from '../img/photo-gallery-06.jpg'
import img7 from '../img/photo-gallery-07.jpg'
import img8 from '../img/photo-gallery-08.jpg'
import img9 from '../img/photo-gallery-09.jpg'
import img10 from '../img/photo-gallery-10.jpg'
import img11 from '../img/photo-gallery-11.jpg'
import img12 from '../img/photo-gallery-12.jpg'
const Footer = () => {
    return (
        <div>
            <footer>
                <div className={css.continerFooter}>
                    <div className={css.partFooter}>
                            <h3>CONTACT US</h3>
                        <div className={css.gruopP}>
                            <p> 8th floor, 379 Hudson St, New York, NY 10018</p>
                            <p> (+02)1006213468 </p>
                            <p>mariamemadwahpa@gmail.com</p>
                        </div>
                        <div>
                            <h3>OPENING TIMES</h3>
                            <div className={css.gruopP}>
                            <p>09:30 AM – 11:00 PM</p>
                            <p>Every Day</p>

                            </div>
                        </div>
                    </div>

                    <div className={css.partFooter}>
                        <h3>LATEST TWITTER</h3>
                        <div  className={css.gruopP}>
                        <h4>@MaRiam</h4>
                        <p>Activello is a good option. It has a slider built into that displays the featured image in the slider.</p>
                        <Link href="#">mariamemadwahpa</Link>
                        <h5>21 Dec 2017</h5>
                        </div> 
                        <div  className={css.gruopP}>
                        <h4>@MaRiam</h4>
                        <p>Activello is a good option. It has a slider built into that displays https://buff.ly/2zaSfAQ</p>
                        <h5>21 Dec 2017</h5>
                        </div>
                    </div>
                   
                
                    <div className={css.partFooter}>
                        <h3>GALLEREY</h3>
                        <div className={css.gruopP}>
                            <div className={css.imgs}>
                                <img src={img1} alt="" />
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                                <img src={img4} alt="" />
                            </div>
                            <div className={css.imgs}>
                                <img src={img5} alt="" />
                                <img src={img6} alt="" />
                                <img src={img7} alt="" />
                                <img src={img8} alt="" />
                            </div>
                            <div className={css.imgs}>
                                <img src={img9} alt="" />
                                <img src={img10} alt="" />
                                <img src={img11} alt="" />
                                <img src={img12} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                    <div className={css.footertwo}>
                        <p>Copyright ©2023 All rights reserved | This template is made with  by Eng: <a href="https://www.facebook.com/profile.php?id=100083267024247&locale=ar_AR"> MaRiam E Wahpa</a></p>
                    </div>

               
            </footer>
        </div>
    );
}

export default Footer;
