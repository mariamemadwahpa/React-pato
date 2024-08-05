import React from 'react';
// import css from"./Homa.module.css";
import NavBar from '../NavBar/NavBar';
import Header from '../header/header';
import Welcome from '../welcome/welcome';
import CardsOne from '../cardsOne/cardsOne';
import Discover from '../discover/discover';
import Events from '../events/events';
import Reservation from '../Reservation/Reservation'
import REVIEW from '../REVIEW/REVIEW';
import Video from '../video/video';
import CaedTow from '../cardTow/caedTow';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
           
            <NavBar/>
            <Header/>
            <Welcome />
            <CardsOne />
            <Discover />
            <Events />
            <Reservation />
            <REVIEW />
            <Video />
            <CaedTow />
            
                     

          
            <Footer/>

            
        </div>
        
    );
};
export default Home;