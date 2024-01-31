import { ReactNode } from "react";

export function ToolModal(): ReactNode {
	return (
		<>
			<div id="optionsModal">
				<button key={1} aria-label="Open Input Fields">
					<img src="src/assets/text-input-svgrepo-com.svg" alt="Information Input" />
					<span>Information</span>
				</button>
				<button key={2} aria-label="Open Customization Options">
					<img src="src/assets/settings-03-svgrepo-com.svg" alt="Customize" />
					<span>Options</span>
				</button>
			</div>
		</>
	);
}
