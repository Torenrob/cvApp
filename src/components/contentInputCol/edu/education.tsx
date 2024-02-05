import r, { FormEvent } from "react";
import { Input } from "../../ui/input.tsx";

const imgStyle = {
	aspectRatio: "1/1",
	width: "1.5rem",
};

const btnStyle = {
	backgroundColor: "transparent",
	borderRadius: "15px",
	Position: "relative",
};

export function EducationInfo(): r.ReactNode {
	function submit(e: FormEvent) {
		e.preventDefault();
		console.log(e);
	}

	return (
		<div id="eduInfo">
			<div id="eduInputHeader" style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Education</h3>
				<button style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			<form onSubmit={submit}>
				<Input className="inputStyle" label="School" placeholder="School Name" />
				<Input className="inputStyle" label="Degree" placeholder="Degree/Field of Study" />
				<Input className="inputStyle" label="Start Date" placeholder="Enter Start Date" />
				<Input className="inputStyle" label="End Date" placeholder="Enter End Date or Present" />
				<Input className="inputStyle" label="Location" desc="optional" placeholder="School Location" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
