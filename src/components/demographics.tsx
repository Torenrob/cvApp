import r from "react";

export function Demographics(): r.ReactNode {
	return (
		<div id="demoInp">
			<input type="text" id="nameInp" key="nameInp" />
			<input type="tel" id="telInp" key="telInp" />
			<input type="email" id="emailInp" key="emailInp" />
			<input type="number" id="strNumInp" key="strNumInp" />
			<input type="text" id="strNameInp" key="strNameInp" />
			<input type="text" id="cityInp" key="cityInp" />
			<input type="text" id="stateInp" key="stateInp" />
			<input type="number" id="zipInp" key="zipInp" />
			<input type="url" id="urlInp" key="urlInp" />
		</div>
	);
}
