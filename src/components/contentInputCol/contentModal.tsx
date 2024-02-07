import r from "react";
import { Demographics } from "./demo/demographics";
import { EduModal } from "./edu/education";
import WorkModal from "./work/workExp";

export function Content(): r.ReactNode {
	return (
		<div id="contentCont">
			<Demographics />
			<EduModal />
			<WorkModal />
		</div>
	);
}
