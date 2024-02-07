import "../../style/resumeStyle.css";
import r from "react";

export default function ResumeDisplay(): r.ReactNode {
	return (
		<div id="resumeDiv">
			<h1 style={{ textAlign: "center" }}>Toren Robinson</h1>
			<div id="resumeHeader">
				<h3>email@email.com</h3>
				<h3>(404)924-5881</h3>
				<h3>Atlanta,GA</h3>
				<h4>github.com/torenrob</h4>
			</div>
			<div id="resumeEducation">
				<h3>Education</h3>
				<span>School Name</span>
				<span>BBA Marketing</span>
				<span>Start Date</span>
				<span>End Date</span>
				<span>Location</span>
			</div>
			<div id="resumeExp">
				<h3>Experience</h3>
				<span>Position</span>
				<span>Company Name</span>
				<span>Location</span>
				<span>Start Date</span>
				<span>End Date</span>
				<span>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laboriosam doloremque? Quam, deleniti. Iure rerum excepturi, natus placeat, sunt possimus, libero consequatur quas debitis
					cupiditate laborum similique pariatur ea quod?
				</span>
			</div>
		</div>
	);
}
