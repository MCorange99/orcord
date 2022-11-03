import Client from "../../index";

const Help = {
    name: "help",
    usage: "help [command]",
    description: "Shows some information for a command to help you use it :)",

    execute: (client: typeof Client, args: string[]): typeof Client => {
        if (!args[0]) {
            console.log("usage:", Help.usage);
            return client;
        }
        if (client.data.commands[args[0] as keyof typeof client.data.commands] == undefined) {
            console.log("Command '" + args[0] + "' doesnt exist");
            return client;
        }
        console.log("usage:", client.data.commands[args[0] as keyof typeof client.data.commands].usage);
        console.log("description:", client.data.commands[args[0] as keyof typeof client.data.commands].description);
        return client;
    }
};
export default Help;