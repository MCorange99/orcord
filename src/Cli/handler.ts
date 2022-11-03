import Client from "./index.js";
import { TodoError } from "./error.js";
import glob from "glob";
import path from "path";
export function handleCommand(client: typeof Client, cmd: string, args: string[]): typeof Client {
    
    const comm = client.data.commands[cmd as keyof typeof client.data.commands];
    if (comm) {
        client = comm.execute(client, args) || client;
    } else {
        console.log("error: Unknown command:", cmd);
    }
    
    return client;
}

export function handleMessage(client: typeof Client, txt: string): typeof Client {
    throw new TodoError("TBD");
}

export async function loadCommands(client: typeof Client): Promise<typeof Client> {
    console.log(process.cwd());
    const cmdpaths = glob.sync("./target/src/Cli/commands/**/*.js");
    console.log(cmdpaths);
    for (const cmd of cmdpaths) {
        const com = await import(path.join(process.cwd(), cmd));
        client.data.commands[com.default.name] = com.default;
    }
    console.log(client);
    return client;
}