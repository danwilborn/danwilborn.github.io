import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slideshow() {

    return (
        <Carousel fade="true">
            <Carousel.Item>
                <div className="carousel-container">
                    <img
                        src="./images/punky1.jpg"
                        className="carousel-img"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-container">
                    <img
                        src="./images/punky2.jpg"
                        className="carousel-img"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="carousel-container">
                    <img
                        src="./images/punky4.jpg"
                        className="carousel-img"
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slideshow;