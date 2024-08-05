import React from 'react';
import OURMENU1 from '../img/our-menu-01.jpg'
import OURMENU2 from '../img/our-menu-05.jpg'
import OURMENU3 from '../img/our-menu-08.jpg'
import OURMENU4 from '../img/our-menu-10.jpg'
import OURMENU5 from '../img/our-menu-13.jpg'
import OURMENU6 from '../img/our-menu-16.jpg'
import css from './discover.module.css'

const Discover = () => {
    return (
        <div>
             <div className={css.ContainerDiscover}>
                <div className={css.Discover}>
                    <div className={css.TextDiscover}>
                        <h3>Discover</h3>
                        <h1>OUR MENU</h1>
                    </div>
                    <div className={css.section}>

                        <div className={css.CardDiscoverOne}>
                            <img src={OURMENU1} alt="" />
                            <img src={OURMENU2} alt="" />
                        </div>

                        <div className={css.CardDiscoverTow}>
                            <img src={OURMENU3} alt="" />
                            <img src={OURMENU4} alt="" />
                        </div>
                    </div>
                    <div className={css.section}>

                        <div className={css.CardDiscoverThree}>
                            <img src={OURMENU5} alt="" />
                        </div>
                        <div className={css.CardDiscoverfour}>
                            <img src={OURMENU6} alt="" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Discover;
