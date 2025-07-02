import React from "react";
import { GoodnightComputer, RustExceller, UnityGame } from "../ProjectObjects";
import { Project } from "../components/Project";

export class GeneralUtils 
{

    public static GenerateProjects(): Array<React.ReactElement>
    {
        const projects: Array<React.ReactElement> = [
            React.createElement(Project, { project: GoodnightComputer }),
            React.createElement(Project, { project: RustExceller }),
            React.createElement(Project, { project: UnityGame })
        ];
        return projects;
    }

    public static CreateCommandResponse(text: string): HTMLDivElement 
    {   
        let element: HTMLDivElement = new HTMLDivElement;
        element.append("<div>");

        let asteriskCount = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i]) {
                element.append(text[i]);
                if (text[i] == '*') {
                    if (asteriskCount == 0) {
                        element.append('<i>');
                    }
                    else if (asteriskCount == 1) element.append('</i>');
                    asteriskCount++;
                }
            }
            
            if (asteriskCount == 1) asteriskCount = 0;
        }  

        element.append("</div>");

        return element; 
    }
}