import { work } from "./workExp";
import r, { MouseEventHandler } from "react";
import { Signal } from "@preact/signals";

const styleList = {
	display: "flex",
	justifyContent: "space-between",
	padding: "0.75em",
};

const btnStyle = {
	background: "rgb(53, 73, 115)",
	padding: "0em 1.25em",
	fontWeight: "bold",
	borderRadius: "7px",
};

export function WorkList({ list, changeFunct }: { list: Signal<work[]>; changeFunct: MouseEventHandler }): r.ReactNode {
	return (
		<>
			<div id="expList">
				{list.value.map((work: work): r.ReactNode => {
					return (
						<div style={styleList} key={work.title}>
							<h4>{work.title}</h4>
							<div style={{ display: "flex", width: "35%", justifyContent: "space-between" }}>
								<button className="inputBtn" style={btnStyle}>
									Edit
								</button>
								<button className="inputBtn" style={btnStyle}>
									Delete
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<button className="inputBtn" onClick={changeFunct} style={{ ...btnStyle, marginTop: ".5em", width: "100%", padding: "0.45em" }}>
				Add Experience
			</button>
		</>
	);
}
