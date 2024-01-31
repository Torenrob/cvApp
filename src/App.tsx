import { ToolModal } from "./components/ToolModal";
import { Content } from "./components/contentModal";
import react from "react";

function App(): react.ReactNode {
	return (
		<>
			<ToolModal />
			<Content />
		</>
	);
}

export default App;
