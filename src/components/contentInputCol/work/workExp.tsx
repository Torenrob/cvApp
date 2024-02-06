import r, { useState } from "react";
import { WorkList } from "./workList.tsx";
import { WorkExp } from "./workInput.tsx";

const imgStyle = {
	aspectRatio: "1/1",
	width: "1.5rem",
};

const btnStyle = {
	backgroundColor: "transparent",
	borderRadius: "15px",
	Position: "relative",
};

export interface work {
	name: string;
}

export default function WorkModal(): r.ReactNode {
	const [workState, setWorkState] = useState("list");

	function workChange() {
		if (workState === "list") {
			setWorkState("input");
		} else {
			setWorkState("list");
		}
	}

	let workList: Array<work> = [{ name: "Loyola" }, { name: "InfoMart" }, { name: "Inizio" }];

	return (
		<div id="workInfo">
			<div style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Experience</h3>
				<button style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			{workState === "list" && <WorkList list={workList} changeFunct={workChange} />}
			{workState === "input" && <WorkExp changeFunct={workChange} />}
		</div>
	);
}
