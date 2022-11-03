import Rest from "./Rest";
//import Web from "./Web";
import Database from "./Database";
import Logger from "@mcorange9/mclog";
import config from "../config.js";
import Utils from "./utils";

async function main() {
    globalThis.config = config;
    globalThis.utils = new Utils();
    
    globalThis.logger = new Logger();
    logger.info("Initialised logger", __filename, "main()");

    globalThis.database = new Database();
    logger.info("Initialised database", __filename, "main()");

    globalThis.rest = new Rest();
    logger.info("Initialised Rest api", __filename, "main()");
    
    await database.connect();
    //globalThis.web = new Web();
    //logger.info("Initialised web panel", __filename, "main()");
}

(async () => {
    await main();
})();