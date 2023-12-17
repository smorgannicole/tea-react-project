import FavoriteTea from "./FavoriteTea";
import matchaImg from "../../images/matcha.jpg";
import jasmineImg from '../../images/Jasmine-pearl.png';
import whiteTeaImg from "../../images/White-tea.png"
import oolongImg from "../../images/oolong.png"
import earlGreyImg from "../../images/earl-grey.png"
import englishImg from "../../images/english-breakfast.png"

const FavoriteTeas = () => {
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
//carousel-item next to col
    return (
        <div className="col">
            {favoriteTeas.map((favoriteTea) => (
                <FavoriteTea text={favoriteTea.name} img={favoriteTea.image} />))}
        </div>
    );
}

export default FavoriteTeas;