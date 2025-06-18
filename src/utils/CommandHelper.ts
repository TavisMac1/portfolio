import { Enums } from "../enums/enums";
import { ratio } from "fuzzball"; // using fuzzball because its a port of fuzzywuzzy which is awesome
import { Interfaces } from "../interfaces/main_d";

export class CommandHelper
{

    private NormalizeInput(command: string): string {
        return command
            .trim()
            .split(" ")
            .map(token => token.trim())
            .filter(token => token.length > 0)
            .join(" ");
    }

    public MatchToCommand(command: string): string {

        if (!command) return "";
     
        let input = this.NormalizeInput(command);

        const commands = [
            Enums.Commands.ABOUT,
            Enums.Commands.CONTACT,
            Enums.Commands.HELP,
            Enums.Commands.PROJECTS,
            Enums.Commands.SKILLS,
            Enums.Commands.CLS
        ];

        let best_matches: Array<Interfaces.IPotentialMatchRecord> = [];

        let most_probable_command = "";

        const threshold = 40;

        for (let i = 0; i < commands.length; i++) {
            let match_score = ratio(input.toLowerCase(), commands[i].toLowerCase());

            if (match_score > threshold) {
                let new_match: Interfaces.IPotentialMatchRecord = { 
                    name: commands[i], 
                    score: match_score 
                }

                best_matches.push(new_match);
            }
        }

        most_probable_command = best_matches.slice().sort(
            (a: Interfaces.IPotentialMatchRecord, b: Interfaces.IPotentialMatchRecord) => b.score - a.score
        )[0]?.name || "";

        if (!most_probable_command) return command

        return most_probable_command;
    }
}