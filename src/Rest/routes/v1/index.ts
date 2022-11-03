import user from "./user";
import express from "express";

const r = express.Router();

r.use("/user", user);

r.get("/", (_req: express.Request, res: express.Response) => {
    res.status(200).json({
        message: "Henlo World"
    });
});


export default r;