import Client from "../../index";

const Help = {
    name: "exit",
    usage: "exit",
    description: "Shows some information for a command to help you use it :)",

    execute: (client: typeof Client, args: string[]): typeof Client => {
        console.log("warning: Exiting");
        process.exit(0);
        return client;
    }
};
export default Help;