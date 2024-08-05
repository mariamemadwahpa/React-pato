import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './header.module.css'
import slide1 from '../img/slide1-01.jpg'
import slide2 from '../img/master-slides-01.jpg'
import slide3 from '../img/master-slides-02.jpg'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


const Header = () => {
    return (
      <div className={css.contanerheader}>
        <Carousel data-bs-theme="dark">
      
        <Carousel.Item>
          <img className="d-block w-100"src={slide1} alt="First slide"/>
          <Carousel.Caption>
          <div className={css.Header}>
            <h1>Welcome to</h1>
            <p>PATO PLACE</p>
            <button>LOOK MENU</button>
          </div> 
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div className={css.Header}>
            <h1>Welcome to</h1>
            <p>PATO PLACE</p>
            <button>LOOK MENU</button>
              </div> 
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div className={css.Header}>
            <h1>Welcome to</h1>
            <p>PATO PLACE</p>
            <button>LOOK MENU</button>
              </div> 
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    
      </div>
    );
    
    
}

export default Header;
