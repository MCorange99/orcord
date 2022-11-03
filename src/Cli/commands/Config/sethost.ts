import Client from "../../index";

const SetHost = {
    name: "sethost",
    usage: "sethost [host]",
    description: "Set the host to connect to",

    execute: (client: typeof Client, args: string[]): typeof Client => {
        if (!args[0]) {
            console.log("usage:", SetHost.usage);
            return client;
        }
        client.data.host = args[0];
        console.log("info: data.host is now '" + args[0] + "'");
        return client;
    }
};
export default SetHost;