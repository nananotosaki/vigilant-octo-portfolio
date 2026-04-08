import { useState } from "react";
import OutputDisplay from "./OutputDisplay";
import InputLine from "./InputLine";
import { handleCommand } from "./Commands";

export default function Terminal() {
    //actual terminal logic
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const [currentInput, setCurrentInput] = useState("");

    function handleChange(e) {
        setCurrentInput(e.target.value);
    }
    function SubmitCommand(e) {
        e.preventDefault();
        const output = handleCommand(currentInput);
        if (output.type === "clear") {
            setCommandHistory([]);
            return;
        }
        else {
            setCommandHistory([...commandHistory, { input: currentInput, output }]);
        }
        setCurrentInput("");
        setHistoryIndex(0);
    }
    // history
    function handleKeyDown(e) {
        if (e.key === "ArrowUp") {
            if (historyIndex < commandHistory.length) {
                setHistoryIndex(historyIndex + 1);
                setCurrentInput(commandHistory[commandHistory.length - historyIndex - 1].input);
            }
        }
    }
    function handleKeyUp(e) {
        if (e.key === "ArrowDown") {
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
                setCurrentInput(commandHistory[commandHistory.length - historyIndex].input);
            }
        }
    }

    return (
        <div className="terminal">
            <div className="terminal-titlebar">
            <div className="titlebar-dot red" />
            <div className="titlebar-dot yellow" />
            <div className="titlebar-dot green" />
            <span className="titlebar-title">nana@portfolio:~</span>
            </div>
            <OutputDisplay output={commandHistory} />
            <InputLine input={currentInput} onChange={handleChange} onSubmit={SubmitCommand} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
        </div>
    );
}