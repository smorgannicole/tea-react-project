import FavoriteTea from "./FavoriteTea";
import matchaImg from "../../images/matcha.jpg";
import jasmineImg from '../../images/Jasmine-pearl.png';
import whiteTeaImg from "../../images/White-tea.png"
import oolongImg from "../../images/oolong.png"
import earlGreyImg from "../../images/earl-grey.png"
import englishImg from "../../images/english-breakfast.png"
import { useState } from "react";

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
            <div className="inner"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {favoriteTeas.map((favoriteTea) => (
                    <FavoriteTea text={favoriteTea.name} img={favoriteTea.image} />))}
            </div>
            <div className="carousel-buttons">
                <button onClick={()=> {
                    updateIndex(activeIndex - 1);
                }} className="button-arrow">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>
                <div className="indicators">
                    {favoriteTeas.map((favoriteTea, index) => {
                        return (
                            <button onClick={()=> {
                                updateIndex(index);
                            }} className="indicator-buttons">
                                <span className={`material-symbols-outlined ${index === activeIndex? "indicator-symbol-active" : "indicator-symbol"}`}>radio_button_checked</span>
                            </button>
                        );
                    })}
                </div>
                <button onClick={()=> {
                    updateIndex(activeIndex + 1);
                }} className="button-arrow">
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>
            </div>
        </div>
    );
}

export default FavoriteTeas;