import { ReactNode } from "react";
import { demographics } from "./demographics";

const demoStyle = {
	display: "flex",
	justifyContent: "space-between",
};

const btnStyle = {
	background: "rgb(53, 73, 115)",
	padding: "0.45em 1.25em",
	fontWeight: "bold",
	borderRadius: "7px",
	marginTop: ".5em",
	width: "100%",
};

export function DemoConfirmed({ info }: { info: demographics }): ReactNode {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div style={demoStyle}>
				<h3>Full Name:</h3>
				<h4>{info.fullName}</h4>
			</div>
			<div style={demoStyle}>
				<h3>Phone Number:</h3>
				<h4>{info.phone}</h4>
			</div>
			<div style={demoStyle}>
				<h3>Email:</h3>
				<h4>{info.email}</h4>
			</div>
			<div style={demoStyle}>
				<h3>Location:</h3>
				<h4>{info.location}</h4>
			</div>
			<div style={demoStyle}>
				<h3>Website:</h3>
				<h4 style={{ paddingBottom: "0.5em" }}>{info.website}</h4>
			</div>
			<button className="inputBtn" style={btnStyle}>
				Edit
			</button>
		</div>
	);
}
