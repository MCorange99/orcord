import v1Routes from "./v1";
import router from "express";

const r = router.Router();

r.use("/", v1Routes); // Default version v1
r.use("/v1", v1Routes);

export default r;