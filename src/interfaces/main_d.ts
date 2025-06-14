export namespace Interfaces {

    export interface ICommands {
        command: string,
        description: string
    }

    export interface ITerminalDrawerProps {
        open: boolean;
        title: string;
        description?: string;
        images: string[];
    }

    export interface IPotentialMatchRecord {
        name: string;
        score: number;
    }
}