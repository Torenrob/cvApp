import r from "react";
import { Demographics } from "./demographics";
import EducationInfo from "./education";
import WorkExp from "./workExp";

export function Content(): r.ReactNode {
	return (
		<div id="contentCont">
			<Demographics />
			<EducationInfo />
			<WorkExp />
		</div>
	);
}
