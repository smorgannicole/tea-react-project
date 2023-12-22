const CreateYourOwn = () => {
    return (
        <div className="col">
            <form id="add-form">
                <h3><label className="form-label" for="add-name">Tea Name</label></h3>
                <input className="form-control" type="text" name="add-name" id="add-name" placeholder="Create Tea Name" />
                <h3><label className="form-label" for="add-description">Tea Description</label></h3>
                <input className="form-control" type="text" name="add-description" id="add-description" placeholder="Create Tea Description" />
                <div>
                    <button className="btn btn-outline-success add" data-add>Create Tea</button>
                </div>
            </form>
        </div>
    );
}

export default CreateYourOwn;