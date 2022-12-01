import { Button } from "bootstrap";
import React from "react";
import { ReactSession } from "react-client-session";

const viewOrgMembers = () => {
	const orgid = ReactSession.get("orgid");
	const DisplayStockroom = async (e) => {
		e.preventDefault();
		const res = await fetch(
			"http://localhost:3000/api/v1/users/viewmembers/:orgName",
			{
				//const res = await fetch("http://localhost:3000/api/v1/users/viewstock", {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					orgid,
				}),
			}
		);
		if (res.status === 200) {
			alert("Valid stockroom is being displayed");
		}
		const data = res.json();
		console.log("data -- ", data);
	};

	return (
		<div>
			<button onClick={DisplayStockroom}>DisplayStockroom</button>
		</div>
	);
};

export default viewOrgMembers;
