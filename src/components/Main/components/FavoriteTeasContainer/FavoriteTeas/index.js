import FavoriteTea from "./FavoriteTea";

const FavoriteTeas = () => {
    const favoriteTeas = [
        {
            name: "Matcha Tea",
        },
        {
            name: "Jasmine Dragon Pearl",
        },
        {
            name: "White Tea",
        },
        {
            name: "Wulong (oolong) Tea",
        },
        {
            name: "Earl Grey",
        },
        {
            name: "English Breakfast Tea",
        },
    ];

    return (
        <div>
            {favoriteTeas.map((favoriteTea) => (
                <FavoriteTea text={favoriteTea.name} />))}
        </div>
    );
}

export default FavoriteTeas;