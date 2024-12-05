import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [light, setLight] = useState()

	return (
		<div className="text-center">
			<div className="row container bg-dark mx-auto mt-4 p-2 d-flex justify-content-center" style={{ width: "10px", height: "100px" }} ></div>
			<div class="row container bg-dark mx-auto p-2 d-flex justify-content-center rounded" style={{ width: "100px", height: "200px" }}>
				<div className="light bg-danger rounded-circle mt-2 shadow bg-body-tertiary" style={{ width: "50px", height: "50px" }}></div>
				<div className="light bg-warning rounded-circle" style={{ width: "50px", height: "50px" }}></div>
				<div className="light bg-success rounded-circle" style={{ width: "50px", height: "50px" }}></div>
			</div>
		</div>
	);
};

export default Home;
