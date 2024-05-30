import React, { useState } from "react";

const TextBox: React.FC = () => {
    const [text, setText] = useState('');

    const changeText = (newText: string) => {    
        const changeTextEvent = new CustomEvent('CHANGE_TEXT', { detail: { text: newText } });
        window.dispatchEvent(changeTextEvent);
    }

    return (
        <div>
            <h1>TextBox</h1>
            {/* <input type="text" onChange={(event) => setText(text + "aa")}></input> */}
            <input type="text" onChange={(event) => changeText(event.target.value)}></input>
            {/* <p>Text: {text}</p> */}
        </div>
    )
}

export default TextBox;