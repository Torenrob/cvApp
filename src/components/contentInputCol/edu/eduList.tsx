import { school } from "../contentModal";
import r from "react";

const styleList = {
	display: "flex",
	justifyContent: "space-between",
	padding: "0.75em",
};

const btnStyle = {
	background: "rgb(53, 73, 115)",
	padding: "0em 1.25em",
	fontWeight: "bold",
	borderRadius: "7px",
};

export function EduList({ list }: { list: Array<school> }): r.ReactNode {
	return (
		<div id="eduList">
			{list.map((school: school): r.ReactNode => {
				return (
					<div style={styleList} key={school.name}>
						<h4>{school.name}</h4>
						<div style={{ display: "flex", width: "35%", justifyContent: "space-between" }}>
							<button style={btnStyle}>Edit</button>
							<button style={btnStyle}>Delete</button>
						</div>
					</div>
				);
			})}
			<button style={{ ...btnStyle, marginTop: "1.5em", width: "100%", padding: "0.45em" }}>+Add</button>
		</div>
	);
}
