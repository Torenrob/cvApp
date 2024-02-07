import r, { SyntheticEvent, useState } from "react";
import { WorkList } from "./workList.tsx";
import { WorkExp } from "./workInput.tsx";
import { shrinkModal } from "@/lib/utils.ts";
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

export interface work {
	title: string;
	comanyName: string;
	location: string;
	startDate: string;
	endDate: string;
}
let work: Array<work> = [];
export let workList = signal(work);

export default function WorkModal(): r.ReactNode {
	const [workState, setWorkState] = useState("list");

	function workChange(e: SyntheticEvent) {
		let submitBtn = e.nativeEvent as SubmitEvent;

		if (workState === "list" || submitBtn.submitter?.hasAttribute("formnovalidate")) {
			setWorkState("input");
		} else {
			e.preventDefault();
			let form: FormData = new FormData(e.target as HTMLFormElement);
			let formData = Object.fromEntries(form) as unknown;

			work.push(formData as work);
			setWorkState("list");
		}
	}

	return (
		<div id="workInfo">
			<div style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Experience</h3>
				<button onClick={shrinkModal} style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img className="arrow" style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			{workState === "list" && <WorkList list={workList} changeFunct={workChange} />}
			{workState === "input" && <WorkExp changeFunct={workChange} />}
		</div>
	);
}
