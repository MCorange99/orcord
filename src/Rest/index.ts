import express from "express";
import cors from "cors";
import routes from "./routes";

export default class Backend {
    app: express.Express;

    constructor(){
        this.app = express();
        return;
    }

    middleware () {
        this.app.use(express.json());
        this.app.use(utils.middleware.handleInvalidBody());
        this.app.use(cors({
            origin: "*",
            methods: ["GET", "POST"]
        }));
    }
    async setRoutes () {
        const route = routes;

        this.app.use("/api", route);
    }
}