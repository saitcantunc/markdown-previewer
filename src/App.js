import { useState } from "react";
// Components
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
	const [content, setContent] = useState("Deneme");

	const handleTextChange = (e) => {
		setContent(e.target.value);
	};

	return (
		<div className='App'>
			<Editor content={content} handleTextChange={handleTextChange} />
			<Previewer content={content} />
		</div>
	);
}

export default App;
