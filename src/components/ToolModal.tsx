import { ReactNode } from "react";
import optionsImg from "../assets/settings-03-svgrepo-com.svg";
import contentImg from "../assets/text-input-svgrepo-com.svg";

export function ToolModal(): ReactNode {
	return (
		<>
			<div id="optionsModal">
				<button className="toolBtns" key={1} aria-label="Open Input Fields">
					<img src={contentImg} alt="Information Input" />
					<span>Information</span>
				</button>
				<button className="toolBtns" key={2} aria-label="Open Customization Options">
					<img src={optionsImg} alt="Customize" />
					<span>Options</span>
				</button>
			</div>
		</>
	);
}
