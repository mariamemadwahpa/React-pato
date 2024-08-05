import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './REVIEW.module.css'
import img1 from '../img/avatar-01.jpg'
import img2 from '../img/avatar-04.jpg'
import img3 from '../img/avatar-05.jpg'
import { FaStar } from "react-icons/fa6";

const REVIEW = () => {
    return (
        <div className={css.ContinerREVIEW}>
          <h3>Customers Say</h3>
          <h1>REVIEW</h1>
        <Carousel data-bs-theme="dark">
      
        <Carousel.Item>
          <img className="d-block "src={img1} alt="First slide"/>
          <div className={css.REVIEW}>
          <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          
          <h5>MARIE SIMMONS - NEW YORK</h5><br/>
          </div>
         
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block "src={img2} alt="First slide"/>
        <div className={css.REVIEW}>
          <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <h5>MARIE SIMMONS - NEW YORK</h5><br/>

          </div>         
        
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block "src={img3} alt="First slide"/>
        <div className={css.REVIEW}>
          <p>“ We are lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”</p>
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />
          <FaStar color='red' fontSize={20} />

          <h5>MARIE SIMMONS - NEW YORK</h5>
          <br/>
          </div>
        </Carousel.Item>
      </Carousel>
    
      </div>
    );
}

export default REVIEW;
