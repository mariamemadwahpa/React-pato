import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import css from './events.module.css'
const Events = () => {
    return (
        <div>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                <div data-aos="flip-left"
                 data-aos-easing="ease-out-cubic"
                     data-aos-duration="2000">
                    <div className={css.eventimgone}>
                        <div className={css.Upcomming}>
                            <h3>Upcomming</h3>
                            <h6>EVENTS</h6>

                        </div>
                        <div className={css.eventimgoneCard}>
                            <div className={css.lineEventimgoneCard}></div>
                            <div className={css.ImgEventimgoneCard}></div>
                            <div className={css.textEventimgoneCard}>
                                <h2>WINES DURING SPECIFIC NIGHTS</h2>
                                <p>Donec quis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius excepturi dolore nesciunt, animi ullam dolor ipsum beatae consequuntur odit provident,</p>
                            </div>
                        </div>

                    </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className={css.eventimgTow}>
                    <div className={css.Upcomming}>
                            <h3>Upcomming</h3>
                            <h6>EVENTS</h6>

                        </div>
                        <div className={css.eventimgoneCard}>
                            <div className={css.lineEventimgoneCard}></div>
                            <div className={css.ImgEventimgoneCardTow}></div>
                            <div className={css.textEventimgoneCard}>
                                <h2>WINES DURING SPECIFIC NIGHTS</h2>
                                <p>Donec quis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius excepturi dolore nesciunt, animi ullam dolor ipsum beatae consequuntur odit provident, </p>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={css.eventimgThree}>
                    <div className={css.Upcomming}>
                            <h3>Upcomming</h3>
                            <h6>EVENTS</h6>

                        </div>
                        <div className={css.eventimgoneCard}>
                            <div className={css.lineEventimgoneCard}></div>
                            <div className={css.ImgEventimgoneCardThree}></div>
                            <div className={css.textEventimgoneCard}>
                                <h2>WINES DURING SPECIFIC NIGHTS</h2>
                                <p>Donec quis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius excepturi dolore nesciunt, animi ullam dolor ipsum beatae consequuntur odit provident,</p>
                            </div>
                        </div>

                    </div>
                    
                </Carousel.Item>
            </Carousel>

        </div>
    );
}

export default Events;
