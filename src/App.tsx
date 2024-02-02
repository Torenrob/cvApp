import { ToolModal } from "./components/ToolModal";
import { Content } from "./components/contentModal";
import react from "react";
import ResumeDisplay from "./components/resumeDisplay";

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
