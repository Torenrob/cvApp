import r, { FormEventHandler } from "react";
import { Input } from "../../ui/input.tsx";

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
			<Input required className="inputStyle" name="schoolName" label="School" placeholder="School Name" />
			<Input required className="inputStyle" name="program" label="Degree/Program" placeholder="Degree/Field of Study" />
			<Input required pattern="^(0[1-9]|1[0-2])/(0[1-9]|1\d|2\d|3[01])/\d{4}$" name="startDate" className="inputStyle" label="Start Date" placeholder="Enter Start Date" />
			<Input pattern="^(0[1-9]|1[0-2])/(0[1-9]|1\d|2\d|3[01])/\d{4}$" name="endDate" className="inputStyle" label="End Date" placeholder="Enter End Date (Leave blank if presently enrolled)" />
			<Input className="inputStyle" name="location" label="Location" desc="optional" placeholder="School Location" />
			<button className="inputBtn" style={inputBtnStyle} type="submit">
				Submit
			</button>
			<button formNoValidate className="inputBtn" style={inputBtnStyle}>
				Cancel
			</button>
		</form>
	);
}
