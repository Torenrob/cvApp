import r, { SyntheticEvent } from "react";
import { shrinkModal } from "@/lib/utils";
import { DemoInput } from "./demoInput";
import { DemoConfirmed } from "./demoConfirmed";

const imgStyle = {
	aspectRatio: "1/1",
	width: "1.55rem",
};

const btnStyle = {
	backgroundColor: "transparent",
	borderRadius: "15px",
	Position: "relative",
	aspectRatio: "1/1",
};

export interface demographics {
	fullName: string;
	phone: string;
	email: string;
	location: string;
	website: string;
}

let demoInfo: demographics;

export function Demographics(): r.ReactNode {
	const [demoState, setDemoState] = r.useState("input");

	function confirmDemo(e: SyntheticEvent) {
		if (demoState === "info") {
			setDemoState("input");
		} else {
			e.preventDefault();
			let form: FormData = new FormData(e.target as HTMLFormElement);
			let formData = Object.fromEntries(form) as unknown;
			demoInfo = formData as demographics;

			setDemoState("info");
		}
	}

	return (
		<div id="demoInp">
			<div style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Personal Information</h3>
				<button onClick={shrinkModal} style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img className="arrow" style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			{demoState === "input" && <DemoInput confirm={confirmDemo} />}
			{demoState === "info" && <DemoConfirmed info={demoInfo} />}
		</div>
	);
}
