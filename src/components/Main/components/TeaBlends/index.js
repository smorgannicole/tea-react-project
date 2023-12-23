const TeaBlends = (props) => {
    const { name, origin, tasteDescription, description, caffeine } = props.tea;

    return (
        <div>
            <h3>{name}</h3>
            <p>{origin}</p>
            <p>{description}</p>
            <p>{tasteDescription}</p>
            <p>{caffeine}</p>
        </div>
    );
}

export default TeaBlends;