const TeaBlends = (props) => {
    const { name, origin, tasteDescription, description, caffeine } = props.tea;

    return (
        <div className="col d-flex flex-column">
            <h3>{name}</h3>
            <hr className="m-0"></hr>
            {origin ? (
                <>
                    <p className="mb-0" ><em><span style={{fontSize: 12}}>Country of Origin</span></em></p>
                    <p style={{fontSize: 20}}>{origin}</p>
                </>
            ) : null}
            <p className="mb-0" ><em><span style={{fontSize: 12}}>Description</span></em></p>
            <p>{description}</p>
            {tasteDescription ? (
                <>
                    <p className="mb-0" ><em><span style={{fontSize: 12}}>Notes</span></em></p>
                    <p>{tasteDescription}</p>
                </>
            ) : null}
            {caffeine ? (
                <>
                    <p className="mb-0" ><em><span style={{fontSize: 12}}>Caffeine</span></em></p>
                    <p>{caffeine}</p>
                </>
            ) : null}
        </div>
    );
}



export default TeaBlends;