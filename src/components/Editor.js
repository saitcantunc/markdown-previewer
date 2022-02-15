import React from "react";

const Editor = ({ content, handleTextChange }) => {
	return <textarea value={content} onChange={handleTextChange} />;
};

export default Editor;
