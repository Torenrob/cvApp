import r, { SyntheticEvent, useState } from "react";
import { EduInput } from "./eduInput";
import { EduList } from "./eduList";
import { shrinkModal } from "@/lib/utils";
import { signal } from "@preact/signals";

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
	schoolName: string;
	program: string;
	startDate: string;
	endDate: string;
	location: string;
}
let school: Array<school> = [];
export let schoolList = signal(school);

export function EduModal(): r.ReactNode {
	const [eduState, setEduState] = useState("list");

	function eduChange(e: SyntheticEvent) {
		let submitBtn = e.nativeEvent as SubmitEvent;

		if (eduState === "list" || submitBtn.submitter?.hasAttribute("formnovalidate")) {
			setEduState("input");
		} else {
			e.preventDefault();
			let form: FormData = new FormData(e.target as HTMLFormElement);
			let formData = Object.fromEntries(form) as unknown;

			school.push(formData as school);
			console.log(schoolList);
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
			{eduState === "list" && <EduList list={schoolList.value} changeFunct={eduChange} />}
			{eduState === "input" && <EduInput changeFunct={eduChange} />}
		</div>
	);
}
