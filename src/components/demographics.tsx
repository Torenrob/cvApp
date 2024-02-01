import r from "react";
import { Input } from "./ui/input";

export function Demographics(): r.ReactNode {
	return (
		<div id="demoInp">
			<Input type="text" id="nameInp" key="nameInp" />
			<Input type="tel" id="telInp" key="telInp" />
			<Input type="email" id="emailInp" key="emailInp" />
			<Input type="text" id="strNumInp" key="strNumInp" />
			<Input type="text" id="strNameInp" key="strNameInp" />
			<Input type="text" id="cityInp" key="cityInp" />
			<Input type="text" id="stateInp" key="stateInp" />
			<Input type="text" placeholder="Zip Code" pattern="^\d{5}(?:-\d{4})?$" id="zipInp" key="zipInp" />
			<Input type="url" id="urlInp" key="urlInp" />
		</div>
	);
}
