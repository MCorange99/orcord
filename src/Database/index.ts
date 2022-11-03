import mongoose from "mongoose";
import UserSchema from "./UserSchema";

export default class DB {
    UserSchema: typeof UserSchema;
    constructor(){
        this.UserSchema = UserSchema;
    }

    async connect() {
        const c = config.database.main;
        let url = `${c.protocol}`;

        if (c.username && c.password) url += `${c.username}:${c.password}@`;
        if (!c.ip) throw new Error("database.main.ip is null");
        url += c.ip;
        if (c.port) url += `:${c.port}`;
        url += "/";
        if (c.database) url += `${c.database}`;

        // if (c.options) url += c.options;

        logger.info(`Connecting to ${
            (c.username && c.password) ? url.replace(c.password, "****").replace(c.username, "****") : url
        }`, __filename, "database.connect()");

        mongoose.connection.once("open", () => {
            logger.info("Connected to database", __filename, "database");
        });

        await mongoose.connect(url, {
            keepAlive: true,
            connectTimeoutMS: 0,
            socketTimeoutMS: 0,
            serverSelectionTimeoutMS: 0
        });
    }
}