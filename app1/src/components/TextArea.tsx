import React, { useEffect, useState } from "react";

const TextArea: React.FC = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        //@ts-ignore
        const listener =  ({detail}) => {
            setText(detail.text)
        }

        //@ts-ignore
        window.addEventListener('CHANGE_TEXT', listener)

        // return () => {
        //     window.removeEventListener('CHANGE_TEXT')
        // }
    }, [])

    return (
        <div style={{backgroundColor: "#0000ff6e"}}>
            <h1>TextArea mfe</h1>
            <p>Text: {text}</p>
        </div>
    )
}

export default TextArea;