import React, { useState } from 'react';

const CreateYourOwn = ({ addTea }) => {

    const [newTea, setNewTea] = useState({ name: "", origin: "", description: "", tasteDescription: "", caffeine: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTea({ ...newTea, [name]: value });
    };

    const handleAddTea = (e) => {
        e.preventDefault();
        console.log("Adding Tea:", newTea);
        addTea(newTea);
        setNewTea({ name: "", origin: "", description: "", tasteDescription: "", caffeine: "" });
    };

    return (
        <div className="col">
            <form id="add-form">
                <h3><label className="form-label" htmlFor="add-name">Tea Name</label></h3>
                <input className="form-control" type="text" name="name" id="add-name" placeholder="Create Tea Name" value={newTea.name} onChange={handleInputChange} />
                <h3><label className="form-label" htmlFor="add-description">Tea Description</label></h3>
                <input className="form-control" type="text" name="description" id="add-description" placeholder="Create Tea Description" value={newTea.description} onChange={handleInputChange} />
                <div>
                <button onClick={handleAddTea} className="btn btn-outline-success add" data-add>Create Tea</button>
                </div>
            </form>
        </div>
    );
}

export default CreateYourOwn;