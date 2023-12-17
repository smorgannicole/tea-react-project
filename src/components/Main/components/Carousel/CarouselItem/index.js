const CarouselItem = ({tea}) => {
    return (
        <div className="carousel-item">
            <div></div>
            <div className="caroussel-item-text">{tea.name}</div>
            <img className="carousel-img" src={tea.image}/>
        </div>
    );
}

export default CarouselItem;