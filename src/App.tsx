import { ToolModal } from "./components/ToolModal";
import { Content } from "./components/contentInputCol/contentModal";
import ResumeDisplay from "./components/resume/resumeDisplay";
import react from "react";

function App(): react.ReactNode {
	return (
		<>
			<ToolModal />
			<Content />
			<ResumeDisplay />
		</>
	);
}

export default App;
