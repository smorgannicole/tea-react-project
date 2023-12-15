const HeroWrapper = (props) => {
    return (
        <div className="hero-wrapper row">
            {props.children}
        </div>
    );
}

export default HeroWrapper;