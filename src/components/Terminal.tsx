import React, { useState, useRef, useEffect } from "react";
import { Interfaces } from "../interfaces/main_d";
import { Enums } from "../enums/enums";
import { CommandHelper } from "../utils/CommandHelper";

const COMMANDS: Array<Interfaces.ICommands> = [
    { command: Enums.Commands.HELP, description: "Show available commands" },
    { command: Enums.Commands.ABOUT, description: "About me" },
    { command: Enums.Commands.PROJECTS, description: "List projects" },
    { command: Enums.Commands.CONTACT, description: "Contact info" },
];

const Terminal: React.FunctionComponent<Interfaces.ITerminalProps> = (props) => {
    const [history, setHistory] = useState<Array<string>>([]);
    const [input, setInput] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const commandHelper = new CommandHelper();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleCommand = (cmd: string): string  => {
        switch (cmd) {
            case "help":
                return COMMANDS.map(c => `${c.command} - ${c.description}`).join("\n");
            case "about":
                return `
                    Intermediate full stack developer.\n
                    Enjoys solving logic problems, designing systems, working with bright people, developing code and configuring systems.\n I spend a lot of my time working on personal projects and learning new technologies which peak my interesting (hoping to try Elm soon :))\n. I strongly believe there is no 'I' in team and love teaching, learning and working with others.
                `;
            case "projects":
                props.setProjectViewOpen(true);
                return "Opening Projects. . ."
            case "contact":
                return "Email: macfarlanetavis@protonmail.com";
            default:
                return `Command not found: ${cmd}`;
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const transformed = commandHelper.MatchToCommand(input);

        const output = handleCommand(transformed);

        setHistory(prev => [...prev, `> ${transformed}`, output]);

        setInput("");
    };

    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            width: 380,
            background: "#181818",
            color: "#33FF33",
            fontFamily: "monospace",
            borderTopLeftRadius: 8,
            boxShadow: "0 0 16px #000",
            zIndex: 1000,
            padding: 0,
            border: "2px solid #222"
        }}>
            <div style={{
                borderBottom: "1px solid #222",
                padding: "8px 16px",
                background: "#111"
            }}>
                <strong>Available Commands:</strong>
                <ul style={{ margin: 0, padding: "4px 0 0 16px", fontSize: 14 }}>
                    {COMMANDS.map(cmd => (
                        <li key={cmd.command}>
                            <span style={{ color: "#33FF33" }}>{cmd.command}</span>
                            <span style={{ color: "#aaa" }}> - {cmd.description}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{
                maxHeight: 120,
                overflowY: "auto",
                padding: "8px 16px",
                fontSize: 15,
                minHeight: 60
            }}>
                {
                    Array.isArray(history) ?
                        history.map((line, i) => (
                            <div key={i} style={{ whiteSpace: "pre-wrap" }}>{line}</div>
                        ))
                    : 
                        history
                }
            </div>
            <form onSubmit={onSubmit} style={{
                display: "flex",
                borderTop: "1px solid #222",
                background: "#181818",
                padding: "8px 16px"
            }}>
                <span style={{ color: "#33FF33", marginRight: 4 }}>&gt;</span>
                <input
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    style={{
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "#33FF33",
                        fontFamily: "monospace",
                        fontSize: 15,
                        flex: 1
                    }}
                    autoComplete="off"
                />
            </form>
        </div>
    );
};

export default Terminal;