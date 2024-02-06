import r, { useState } from "react";
import { EduInput } from "./eduInput";
import { EduList } from "./eduList";
import { shrinkModal } from "@/lib/utils";

const imgStyle = {
	aspectRatio: "1/1",
	width: "1.5rem",
};

const btnStyle = {
	backgroundColor: "transparent",
	borderRadius: "15px",
	Position: "relative",
};

export interface school {
	name: string;
}

export function EduModal(): r.ReactNode {
	const [eduState, setEduState] = useState("list");

	let schoolList: Array<school> = [{ name: "UGA" }, { name: "GSU" }, { name: "FLS" }, { name: "GTECH" }, { name: "FSU" }];

	function eduChange() {
		if (eduState === "list") {
			setEduState("input");
		} else {
			setEduState("list");
		}
	}

	return (
		<div id="eduInfo">
			<div id="eduInputHeader" style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Education</h3>
				<button onClick={shrinkModal} style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img className="arrow" style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			{eduState === "list" && <EduList list={schoolList} changeFunct={eduChange} />}
			{eduState === "input" && <EduInput changeFunct={eduChange} />}
		</div>
	);
}
