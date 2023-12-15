const HeroWrapper = (props) => {
    return (
        <div className="hero-wrapper">
            {props.children}
        </div>
    );
}

export default HeroWrapper;