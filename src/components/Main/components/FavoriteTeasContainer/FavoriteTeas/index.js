import FavoriteTea from "./FavoriteTea";
import matchaImg from "../../images/matcha.jpg";
import jasmineImg from '../../images/Jasmine-pearl.png';
import whiteTeaImg from "../../images/White-tea.png"
import oolongImg from "../../images/oolong.png"
import earlGreyImg from "../../images/earl-grey.png"
import englishImg from "../../images/english-breakfast.png"
import instaIcon from "../../images/insta-icon.png"
import xIcon from "../../images/twitter-icon.png"
import facebookIcon from "../../images/facebook-icon.png"
import youtubeIcon from "../../images/youtube.icon.png"
import { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const FavoriteTeas = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const favoriteTeas = [
        {
            name: "Matcha Tea",
            image: <img className="fav-tea" src={matchaImg} alt="tea" />,
        },
        {
            name: "White Tea",
            image: <img className="fav-tea" src={whiteTeaImg} alt="tea" />,
        },
        {
            name: "Wulong (oolong) Tea",
            image: <img className="fav-tea" src={oolongImg} alt="tea" />,
        },
        {
            name: "Jasmine Dragon Pearl",
            image: <img className="fav-tea" src={jasmineImg}alt="tea" />,
        },
        {
            name: "Earl Grey",
            image: <img className="fav-tea" src={earlGreyImg} alt="tea" />,
        },
        {
            name: "English Breakfast Tea",
            image: <img className="fav-tea" src={englishImg} alt="tea" />,
        },
    ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex > favoriteTeas.length) {
            newIndex = favoriteTeas.length - 1;
        }
        setActiveIndex(newIndex);
    }

    return (
        <div className="col">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {favoriteTeas.map((favoriteTea, index) => (
                        <div className={`carousel-item ${
                            index === 0 ? 
                            'active' : ''}`}
                            key={index}>
                            <FavoriteTea text={favoriteTea.name} img={favoriteTea.image} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <hr style={{color:"white"}}></hr>
                <div className="row">
                    <div className="col"><img src={instaIcon} className="social-icons" alt="instagram icon"/></div>
                    <div className="col"><img src={xIcon} className="social-icons" alt="x icon"/></div>
                    <div className="col"><img src={facebookIcon} className="social-icons" alt="facebook icon"/></div>
                    <div className="col"><img src={youtubeIcon} className="social-icons" alt="youtube icon"/></div>
                </div>
            </div>
        </div>
    );
}

export default FavoriteTeas;