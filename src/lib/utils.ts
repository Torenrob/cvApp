import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SyntheticEvent } from "react";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function shrinkModal(e: SyntheticEvent) {
	const target = e.target as HTMLElement;

	const modal = target.parentNode?.parentNode?.parentNode as HTMLElement;

	console.log(modal.childNodes);

	if (modal?.classList?.contains("shrink")) {
		modal.classList.remove("shrink");
		target.classList.remove("flipArrow");
		return;
	}

	target.classList.add("flipArrow");
	modal.classList.add("shrink");
}
