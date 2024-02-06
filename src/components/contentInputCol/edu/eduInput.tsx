import r, { FormEventHandler } from "react";
import { Input } from "../../ui/input.tsx";

const btnStyle = {
	backgroundColor: "transparent",
	borderRadius: "15px",
	Position: "relative",
};

const inputBtnStyle = {
	background: "rgb(53, 73, 115)",
	padding: "0.45em 1.25em",
	fontWeight: "bold",
	borderRadius: "7px",
	marginTop: ".5em",
	width: "100%",
};

export function EduInput({ changeFunct }: { changeFunct: FormEventHandler }): r.ReactNode {
	return (
		<form onSubmit={changeFunct}>
			<Input className="inputStyle" label="School" placeholder="School Name" />
			<Input className="inputStyle" label="Degree" placeholder="Degree/Field of Study" />
			<Input className="inputStyle" label="Start Date" placeholder="Enter Start Date" />
			<Input className="inputStyle" label="End Date" placeholder="Enter End Date or Present" />
			<Input className="inputStyle" label="Location" desc="optional" placeholder="School Location" />
			<button className="inputBtn" style={inputBtnStyle} type="submit">
				Submit
			</button>
			<button className="inputBtn" style={inputBtnStyle}>
				Cancel
			</button>
		</form>
	);
}
