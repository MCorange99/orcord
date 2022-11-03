/* eslint-disable @typescript-eslint/no-explicit-any */
import help from "./commands/Other/help";

/* eslint-disable no-var */


declare global {
    type client = {
        data: {
            host: string,
            prompt: string,
            exit: boolean,
            prefix: string,
            history: [],
            commands: any
        },
        
        init: () => void;
        
        printPrompt: () => void;

        start: () => void;
    }
}   