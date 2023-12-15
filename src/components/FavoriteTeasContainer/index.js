import TeaBlends from "./FavoriteTeas";
import { useState, useEffect } from "react";

const getTeas = async () => {
	const url = `https://boonakitea.cyclic.app/api/all`;
	const options = {
		method: "GET",
		redirect: "follow",
	};
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const TeaBlendsContainer = () => {
    const [teas, setTeas] = useState([]);
    useEffect(() => {
        getTeas().then((teas) => {
            setTeas(teas);
        });
    }, []);
    return (
        <div className="container">
            <div className="row row-gap-4">
				{teas.length === 0 ? <h1>Loading...</h1> : teas.map((tea) => <TeaBlends tea={tea} />)}
			</div>
        </div>
    )
}

export default TeaBlendsContainer;