import r from "react";
import { Input } from "./ui/input.tsx";

const imgStyle = {
	aspectRatio: "1/1",
	width: "1.5rem",
};

const btnStyle = {
	backgroundColor: "transparent",
	borderRadius: "15px",
	Position: "relative",
};

export default function WorkExp(): r.ReactNode {
	return (
		<div id="workInfo">
			<div style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Experience</h3>
				<button style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			<Input className="inputStyle" type="text" label="Position Title" placeholder="Enter Position Title" />
			<Input className="inputStyle" type="text" label="Company Name" placeholder="Enter Company Name" />
			<Input className="inputStyle" type="text" label="Location" placeholder="Enter Company Location" />
			<Input className="inputStyle" type="text" label="Start Date" placeholder="Enter Start Date" />
			<Input className="inputStyle" type="text" label="End Date" placeholder="Enter End Date or Present" />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<label htmlFor="workDesc">Description</label>
				<textarea id="textAreaStyle" name="workDesc" rows={15} placeholder="Enter Work Description..."></textarea>
			</div>
		</div>
	);
}
