import { school } from "./education";
import r, { MouseEventHandler } from "react";

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

export function EduList({ list, changeFunct }: { list: Array<school>; changeFunct: MouseEventHandler }): r.ReactNode {
	return (
		<>
			<div id="expList">
				{list.map((school: school): r.ReactNode => {
					return (
						<div style={styleList} key={school.name}>
							<h4>{school.name}</h4>
							<div style={{ display: "flex", width: "35%", justifyContent: "space-between" }}>
								<button className="inputBtn" style={btnStyle}>
									Edit
								</button>
								<button className="inputBtn" style={btnStyle}>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<button className="inputBtn" onClick={changeFunct} style={{ ...btnStyle, marginTop: "1.5em", width: "100%", padding: "0.45em" }}>
				Add School
			</button>
		</>
	);
}
