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

export default function EducationInfo(): r.ReactNode {
	return (
		<div id="eduInfo">
			<div style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Education</h3>
				<button style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			<Input className="inputStyle" label="School" placeholder="School Name" />
			<Input className="inputStyle" label="Degree" placeholder="Degree/Field of Study" />
			<Input className="inputStyle" label="Start Date" placeholder="Enter Start Date" />
			<Input className="inputStyle" label="End Date" placeholder="Enter End Date or Present" />
			<Input className="inputStyle" label="Location" desc="optional" placeholder="School Location" />
		</div>
	);
}
