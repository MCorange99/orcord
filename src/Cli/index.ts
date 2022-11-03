#!/usr/bin/env node
import rls from "readline-sync";
import { handleCommand, handleMessage, loadCommands } from "./handler.js";
// import help from "./commands/Other/help";
// import register from "./commands/Auth/register";
// import setHost from "./commands/Config/sethost";
// import exit from "./commands/Other/exit";
// import * as utils from "./utils";

export enum Status {
    NotLoggedIn,
    LoggedIn
}


const client: client = {
    data: {
        host: "localhost:9999",
        prompt: "> ",
        exit: false,
        prefix: "/",
        history: [],
        commands: {
            // help: help,
            // register: register,
            // sethost: setHost,
            // exit: exit,
        },
    },
    
    init: async () => {
        await loadCommands(client);
        return;
    },
    
    printPrompt: () => {
        process.stdout.write(client.data.prompt);
    },
    
    // completer(line: string): [string[], string] {
    //      const hits = this.handler.commands.filter(function(c) { return c.indexOf(line) == 0 });
    //      // show all completions if none found
    //      return [hits.length ? hits : completions, line];
    // }

    start: () => {
        while (!client.data.exit) {
            client.printPrompt();
            const text = rls.question();
            if (text == "") continue;
            if (text.startsWith(client.data.prefix)) {
                const args = text.substring(client.data.prefix.length).split(" ");
                const command = args.shift();
                if (command) handleCommand(client, command, args);
            } else {
                handleMessage(client, text);
            }
            
        }
    }
};
await client.init();
client.start();
export default client;
// console.log(cli);