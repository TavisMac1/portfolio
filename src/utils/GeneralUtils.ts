import React from "react";
import { GoodnightComputer, RustExceller, UnityGame } from "../ProjectObjects";
import { Project } from "../components/Project";

export class GeneralUtils 
{

    public GenerateProjects(): Array<React.ReactElement>
    {
        const projects: Array<React.ReactElement> = [
            React.createElement(Project, { project: GoodnightComputer }),
            React.createElement(Project, { project: RustExceller }),
            React.createElement(Project, { project: UnityGame })
        ];
        return projects;
    }

}