/* eslint-disable no-var */
import Rest from "../Rest";
import Web from "../Web";
import Logger from "@mcorange9/mclog";
import Database from "./Database";
import Utils from "./utils";
import Config from "../../config";

declare global {
    var rest: Rest;
    var web: Web;
    var logger: Logger;
    var database: Database;
    var utils: Utils;
    type config = {
        main: {
            protocol: string,
            username: string,
            password: string,
            ip: string,
            options: string,
            port: number,
            database: string
        },

        rest: {
            bindip: string,
            port: number
        }
    }
    var config: Config;
    // cli tool
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var client: any;
}