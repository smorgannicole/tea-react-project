const MainWrapper = (props) => {
    return (
        <div className="main-wrapper row">
            {props.children}
        </div>
    );
}

export default MainWrapper;