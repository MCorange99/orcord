import express from "express";
// import login from "./login";
import register from "./register";

const r = express.Router();

// r.use("/login", login);

r.use("/register", register);

export default r;

// Post