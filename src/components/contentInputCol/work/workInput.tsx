import r, { FormEventHandler } from "react";
import { Input } from "../../ui/input.tsx";

const btnStyle = {
	background: "rgb(53, 73, 115)",
	padding: "0.45em 1.25em",
	fontWeight: "bold",
	borderRadius: "7px",
	marginTop: "0.5em",
	width: "100%",
};

export interface work {
	name: string;
}

export function WorkExp({ changeFunct }: { changeFunct: FormEventHandler }): r.ReactNode {
	return (
		<form onSubmit={changeFunct}>
			<Input className="inputStyle" type="text" label="Position Title" placeholder="Enter Position Title" />
			<Input className="inputStyle" type="text" label="Company Name" placeholder="Enter Company Name" />
			<Input className="inputStyle" type="text" label="Location" placeholder="Enter Company Location" />
			<Input className="inputStyle" type="text" label="Start Date" placeholder="Enter Start Date" />
			<Input className="inputStyle" type="text" label="End Date" placeholder="Enter End Date or Present" />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<label htmlFor="workDesc">Description</label>
				<textarea id="textAreaStyle" name="workDesc" rows={15} placeholder="Enter Work Description..."></textarea>
			</div>
			<button style={btnStyle}>Submit</button>
			<button style={btnStyle}>Cancel</button>
		</form>
	);
}
