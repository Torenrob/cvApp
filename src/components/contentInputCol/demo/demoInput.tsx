import r, { FormEventHandler } from "react";
import { Input } from "../../ui/input";

const inputBtnStyle = {
	background: "rgb(53, 73, 115)",
	padding: "0.45em 1.25em",
	fontWeight: "bold",
	borderRadius: "7px",
	marginTop: ".5em",
	width: "100%",
};

export function DemoInput({ confirm }: { confirm: FormEventHandler }): r.ReactNode {
	return (
		<form onSubmit={confirm}>
			<Input required className="inputStyle" name="fullName" type="text" label="Full Name" id="nameInp" key="nameInp" placeholder="John Doe" />
			<Input required className="inputStyle" name="phone" type="tel" label="Phone Number" id="telInp" key="telInp" placeholder="(555) 555-555" />
			<Input required className="inputStyle" name="email" type="email" label="Email Address" id="emailInp" key="emailInp" placeholder="yourname@example.com" />
			<Input className="inputStyle" name="location" type="text" label="Location" id="locInp" key="locInp" desc="Recommended" placeholder="Atlanta, GA" />
			<Input className="inputStyle" name="website" type="text" label="Website" id="urlInp" key="urlInp" desc="Recommended" placeholder="https://www.linkedin.com/in/" />
			<button className="inputBtn" style={inputBtnStyle}>
				Confirm
			</button>
		</form>
	);
}
