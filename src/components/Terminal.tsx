import React, { useState, useRef, useEffect } from "react";
import { Interfaces } from "../interfaces/main_d";
import { Enums } from "../enums/enums";
import { CommandHelper } from "../utils/CommandHelper";
import { Fade, IconButton } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { SKILLS } from "../consts";
import { ABOUT_DESC } from "../consts";

const COMMANDS: Array<Interfaces.ICommands> = [
    { command: Enums.Commands.HELP, description: "Show available commands" },
    { command: Enums.Commands.ABOUT, description: "About me" },
    { command: Enums.Commands.PROJECTS, description: "List projects" },
    { command: Enums.Commands.CONTACT, description: "Contact info" },
    { command: Enums.Commands.SKILLS, description: "My skills" },
];

const Terminal: React.FunctionComponent<Interfaces.ITerminalProps> = (props) => {
    const [history, setHistory] = useState<Array<string>>([]);
    const [commandHistory, setCommandHistory] = useState<Array<string>>([]);
    const [input, setInput] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const commandHelper = new CommandHelper();
    const [visible, setVisible] = useState<boolean>(true);
    const [historyIndex, setHistoryIndex] = useState<number>(history.length);

    const handleToggle = () => {
        setVisible((v) => !v);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const determineIfCommandRun = (command: string): boolean => {
        let wasCommandRun = commandHistory.find(e => e === command);

        if (wasCommandRun !== undefined) return false;

        return true;
    }

    const handleCommand = (cmd: string): string  => {
        switch (cmd) {
            case Enums.Commands.HELP:
                return COMMANDS.map(c => `${c.command} - ${c.description}`).join("\n");
            case Enums.Commands.ABOUT:
                if (determineIfCommandRun(Enums.Commands.ABOUT))
                    props.setProgression(props.progression + 25);

                return ABOUT_DESC;
            case Enums.Commands.PROJECTS:
                if (determineIfCommandRun(Enums.Commands.PROJECTS))
                    props.setProgression(props.progression + 25);
                
                props.setProjectViewOpen(true);
                return "Opening Projects . ."
            case Enums.Commands.CONTACT:
                if (determineIfCommandRun(Enums.Commands.CONTACT))
                    props.setProgression(props.progression + 25);
                
                return "Email: macfarlanetavis@protonmail.com";
            case Enums.Commands.SKILLS:
                if (determineIfCommandRun(Enums.Commands.SKILLS))
                    props.setProgression(props.progression + 25);
                return SKILLS;
            case Enums.Commands.CLS:
                setHistory([]);
                return ""
            default:
                return `Command not found: ${cmd}`;
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const transformed = commandHelper.MatchToCommand(input);

        const output = handleCommand(transformed);

        setHistory(prev => [...prev, `> ${transformed}`, output]);
        setCommandHistory(prev => [...prev, transformed]);

        setInput("");
    };

    useEffect(() => {
        console.log(commandHistory);
        setInput(commandHistory[historyIndex]);
    }, [historyIndex])

    return (
      <div>
        <IconButton
          onClick={handleToggle}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1100,
            color: '#00FF41',
            bgcolor: '#181818',
            border: '1px solid #00FF41',
            '&:hover': { bgcolor: '#232323' },
            display: visible ? 'none' : 'inline-flex',
          }}
          aria-label="Show terminal"
        >
          <VisibilityIcon />
        </IconButton>
        <Fade in={visible}>
          <div 
            style={{
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
              border: "2px solid #222",
              height: "100vh"
            }}
          >
            <IconButton
              onClick={handleToggle}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: '#00FF41',
                bgcolor: '#181818',
                border: '1px solid #00FF41',
                '&:hover': { bgcolor: '#232323' },
              }}
              aria-label="Hide terminal"
            >
              <VisibilityOffIcon />
            </IconButton>
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
                maxHeight: "70%",
                overflowY: "auto",
                padding: "8px 16px",
                fontSize: 15,
                height: "60%",
                minHeight: "60%"
            }}>
                {
                    Array.isArray(history) ?
                        history.map((line, i) => (
                            <div key={i} style={{ 
                                    whiteSpace: "pre-wrap",
                                    borderTop: '2px dashed #00FF41',
                                    padding: "10px"
                                }}
                            >
                                {line} 
                            </div>
                        ))
                    : 
                    <>
                        history
                        <hr/>
                    </>
                }
            </div>
            <form onSubmit={onSubmit} style={{
                display: "flex",
                borderTop: "1px solid #222",
                background: "#181818",
                padding: "8px 16px",
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
                        flex: 1,
                        height: "100%"
                    }}
                    autoComplete="off"
                    placeholder="Type a command here"
                    onKeyDown={e => {
                        if (e.key === "Tab") {

                            // prevents URL bar focus
                            e.preventDefault();

                            setInput(
                                commandHelper.MatchToCommand(input)
                            );
                        }
                        else if (e.key === "ArrowUp") {
                            console.log("arrow");
                            if (    
                                    historyIndex !== commandHistory.length && 
                                    commandHistory[historyIndex -1] !== null &&
                                    commandHistory[historyIndex -1] !== "undefined"
                                ) 
                                {
                                    console.log("in if");
                                    setHistoryIndex(historyIndex -1);
                                }
                        }
                    }}
                />
            </form>
          </div>
        </Fade>
      </div>
    );
};

export default Terminal;