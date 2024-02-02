import r from "react";
import { Input } from "./ui/input";

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

export function Demographics(): r.ReactNode {
	return (
		<div id="demoInp">
			<div style={{ display: "flex", gap: "1em", justifyContent: "space-between" }}>
				<h3>Personal Information</h3>
				<button style={btnStyle} aria-label="Show/Hide Personal Information Form">
					<img style={imgStyle} alt="Show/Hide" />
				</button>
			</div>
			<Input className="inputStyle" type="text" label="Full Name" id="nameInp" key="nameInp" placeholder="John Doe" />
			<Input className="inputStyle" type="tel" label="Phone Number" id="telInp" key="telInp" placeholder="(555) 555-555" />
			<Input className="inputStyle" type="email" label="Email Address" id="emailInp" key="emailInp" placeholder="yourname@example.com" />
			<Input className="inputStyle" type="text" label="Location" id="locInp" key="locInp" desc="Recommended" placeholder="Atlanta, GA" />
			<Input className="inputStyle" type="url" label="Website" id="urlInp" key="urlInp" desc="Recommended" placeholder="https://www.linkedin.com/in/" />
		</div>
	);
}
