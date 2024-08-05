import React from 'react';
import css from './video.module.css';
import { FaPlayCircle } from "react-icons/fa";


const Video = () => {
    return (
        <div>
        <div className={css.continerVideo}>
            
            <div className={css.i}>   
            <h3>Discover</h3>
            <h1>OUR VIDEO</h1>
            <i><FaPlayCircle fontSize={100} color='#fff' background-color='#000'/></i>

            </div>
            
            
        </div>
            
        </div>
    );
}

export default Video;
