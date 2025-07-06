import React from "react";

export const LINKEDIN: string = "https://www.linkedin.com/in/tavis-macfarlane-550b23175/";
export const GITHUB: string = "https://github.com/TavisMac1";
export const HIGHLIGHT_COLOR = {color: "dodgerblue"} as React.CSSProperties


export const SKILLS = (): React.ReactElement => {
      return ( 
            <>
                  - C#  
                  <br/>                
                  - React
                  <br />
                  - Javascript
                  <br />
                  - TypeScript
                  <br />
                  - Azure
                  <br />
                  - Python (Python & Django)
                  <br />
                  - .NET
                  <br />
                  - Java
                  <br />
                  - Swift
                  <br />
                  - PHP (PHP & Laravel)
                  <br />
                  - SQL (SQLite, SQL Server)
                  <br />
                  - NoSQL (Firebase, MongoDB)
                  <br />
                  - Unity
                  <br />
                  - AI
                  <br />
                  - OAuth 2.0    
            </>
      )
}

export const ABOUT_DESC = (): React.ReactElement =>{
      return (
            <>
                  <h3 style={HIGHLIGHT_COLOR}>
                        Intermediate full stack developer
                  </h3>
                  <p>
                        Enjoys solving logic problems, designing systems, working with bright people, developing code and configuring systems. <br /><br />
                        I spend a lot of my time working on personal projects and learning new technologies which peak my interest (hoping to try Elm soon!). <br /><br />
                        I strongly believe there is no 'I' in team and love teaching, learning and working with others.
                  </p>
            </>
      )
} 

export const TRICKS = (): React.ReactElement => {
      return (
            <>
                  - Press the <span style={HIGHLIGHT_COLOR}><b>tab</b></span> key after typing a few letters of a command to autocomplete!
                  <br/><br/>
                  - Press the <span style={HIGHLIGHT_COLOR}><b>enter</b></span> key after typing a few letters of a command to autocomplete and submit
                  <br/><br/>
                  - Type <span style={HIGHLIGHT_COLOR}><b>'cls'</b></span> to clear your history
                  <br/><br/>
                  - Use the <b style={HIGHLIGHT_COLOR}>UP Arrow</b> and <b style={HIGHLIGHT_COLOR}>DOWN Arrow</b> Keys  to navgiate through your command history
            </>
      );
} 
