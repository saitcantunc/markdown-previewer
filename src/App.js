import { useState } from "react";
// Components
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

const defaultContent = `
![Dwinatech Logo](https://yt3.ggpht.com/ytc/AKedOLRCB8l9dwq0qVxZIb7C7b1G5lvYlFIYzymD1Dkx=s176-c-k-c0x00ffffff-no-rj)

# Hello, 
## You'r welcom at
### DwinaTech Channel


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My Channel](https://www.youtube.com/channel/UCSS0kFyF7KWjE19Rj9PgNQA)

> Block Quot

1. First list item
2. Second list item
`;
function App() {
	const [content, setContent] = useState(defaultContent);

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
