import React from "react";
import emojiRegex from "emoji-regex";
import "./ErrorSpan.css";

const ErrorSpan = props => {
    const err1 = "Error, note is empty";
    const err2 = "Error, number of characters is longer than a 100";
    const err3 = "Error, contains emojis";
    const regex = emojiRegex();
    let match;

    while (match = regex.exec(props.checkNote)) {
        const emoji = match[0];
        if(emoji){
            return <span>{err3}</span>;
        }
    }
    if (props.checkNote.length <= 0) {
        return <span>{err1}</span>
    }
    if (props.checkNote.length > 100) {
        return <span>{err2}</span>
    }
    return ("");
}

export default ErrorSpan;