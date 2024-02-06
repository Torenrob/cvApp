import { work } from "./workExp";
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

export function WorkList({ list, changeFunct }: { list: Array<work>; changeFunct: MouseEventHandler }): r.ReactNode {
	return (
		<>
			{list.map((work: work): r.ReactNode => {
				return (
					<div style={styleList} key={work.name}>
						<h4>{work.name}</h4>
						<div style={{ display: "flex", width: "35%", justifyContent: "space-between" }}>
							<button style={btnStyle}>Edit</button>
							<button style={btnStyle}>Delete</button>
						</div>
					</div>
				);
			})}
			<button onClick={changeFunct} style={{ ...btnStyle, marginTop: "1.5em", width: "100%", padding: "0.45em" }}>
				Add School
			</button>
		</>
	);
}
