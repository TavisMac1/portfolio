import { Dispatch, SetStateAction } from "react";

export namespace Interfaces {

    export interface ICommands {
        command: string,
        description: string
    }

    export interface ITerminalDrawerProps {
        setOpen: Dispatch<SetStateAction<boolean>>;
        open: boolean;
        projects?: React.ReactElement[];
    }

    export interface IProject {
        image: string;
        title: string;
        description: string;
        technologies: string[];
    }

    export interface ITerminalProps {
        setProjectViewOpen: Dispatch<SetStateAction<boolean>>;
    }

    export interface IPotentialMatchRecord {
        name: string;
        score: number;
    }
}