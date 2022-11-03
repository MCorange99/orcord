import express from "express";
import crypto from "crypto";
const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response) => {
    const {
        email,
        username,
        password,
        gravatar_email
    } = req.body;

    if (!email || !username || !gravatar_email || !password) {
        return res.status(400).json({
            code: "MissingProps",
            status: 400,
            props: ["email", "username", "password", "gravatar_email"],
            message: "email, username, password, gravatar_email are necessary fields"
        });
    }

    if (!(await utils.isUsernameAvailable(username))) {
        return res.status(409).json({
            code: "UsernameAlreadyTaken",
            status: 409,
            message: "The username is already taken"
        });
    }

    if (!utils.testEmail(email)) {
        return res.status(400).json({
            code: "InvalidEmail",
            status: 400,
            message: "Email address is not valid"
        });
    }

    if (!(await utils.isEmailAvailable(email))) {
        return res.status(409).json({
            code: "EmailAlreadyUsed",
            status: 409,
            message: "The email address is already in use"
        });
    }
    const salt = utils.newSalt();
    const hash = crypto.createHash("sha256").update(salt + password).digest("hex");
    const _id = utils.generateID("user");

    await new database.UserSchema({
        _id, email, username, hash, salt, discriminator: utils.newDiscrim(),
        api: {
            token: utils.generateToken()
        }}
    ).save();
    let user = await database.UserSchema.findOne({ _id });
    user = {
        id: String(user._id),
        username: String(user.username),
        discriminator: String(user.discriminator),
        hash: String(user.hash),
        verified: Boolean(user.verified),
        token: String(user.api.token),
        createdAt: String(new Date(user.createdAt).toISOString())
    };
    return res.status(200).json({ ...user });
});

export default router;