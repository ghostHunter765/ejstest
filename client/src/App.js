import React from "react";
import axios from "axios";

function App() {
	const renderhtml = async () => {
		const res = await axios.post("http://localhost:5000/fileauth", {
			id: "001",
		});

		// console.log(res);
		// // window.location.href = res.url;
		window.open("http://localhost:5000/builder/" + res.data.id, "_blank");
	};

	return (
		<div>
			<button onClick={renderhtml}>click</button>
		</div>
	);
}

export default App;
