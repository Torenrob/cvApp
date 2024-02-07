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

export function WorkExp({ changeFunct }: { changeFunct: FormEventHandler }): r.ReactNode {
	return (
		<form onSubmit={changeFunct}>
			<Input required className="inputStyle" name="title" type="text" label="Position Title" placeholder="Enter Position Title" />
			<Input required className="inputStyle" name="companyName" type="text" label="Company Name" placeholder="Enter Company Name" />
			<Input required className="inputStyle" name="location" type="text" label="Location" placeholder="Enter Company Location" />
			<Input required className="inputStyle" name="startDate" type="text" label="Start Date" placeholder="Enter Start Date" />
			<Input className="inputStyle" name="endDate" type="text" label="End Date" placeholder="Enter End Date (Leave blank if current employer)" />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<label htmlFor="workDesc">Description</label>
				<textarea id="textAreaStyle" name="workDesc" rows={15} placeholder="Enter Work Description..."></textarea>
			</div>
			<button className="inputBtn" style={btnStyle}>
				Submit
			</button>
			<button formNoValidate className="inputBtn" style={btnStyle}>
				Cancel
			</button>
		</form>
	);
}
