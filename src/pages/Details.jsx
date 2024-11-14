import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import spring from '../assets/spring.jpg';
import summer from '../assets/summer.jpeg';
import autumn from '../assets/autumn.jpg';
import winter from '../assets/winter.jpeg';

const Details = () => {

    return (
        <div>
            <h1>Details</h1>

            <div className="carousel-wrapper">
                <Carousel>
                    <div>
                        <img src={spring} />
                        <p>Spring</p>
                    </div>
                    <div>
                        <img src={summer} />
                        <p>Summer</p>
                    </div>
                    <div>
                        <img src={autumn} />
                        <p>Autumn</p>
                    </div>
                    <div>
                        <img src={winter} />
                        <p>Winter</p>
                    </div>
                </Carousel>
            </div>
        </div>

    );
};

export default Details;