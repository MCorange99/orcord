import express from "express";

export default class Utils {
   
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleInvalidBody(): Function {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function (error: any, req: express.Request, res: express.Response, _next: express.NextFunction) {
            if (error.status === 400) {
                res.status(400).json({
                    code: 400,
                    message: error.message
                });
            }
        };
    }

    async isEmailAvailable (email: string) {
        return (await database.UserSchema.findOne({ email })) ? false : true;
    }
    async isUsernameAvailable (username: string) {
        return (await database.UserSchema.findOne({ username })) ? false : true;
    }

    testEmail(email: string) {
        // eslint-disable-next-line no-control-regex
        const rx = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
        return rx.test(email);
    }

    generateID(type: "channel" | "message" | "guild" | "user") {

        const token = "";
        switch (type){
        case "channel":
            // do{
            //     token = "C_";
            //     const chars = "0123456789".split("");
            //     for (let i = 0; i < 16; i++) {
            //         token += chars[Math.floor(Math.random() * chars.length)];
            //     }

            
            // } while (false);
            // return token;
            break;
        case "message":
            // do{
            //     token = "M_";
            //     const chars = "0123456789".split("");
            //     for (let i = 0; i < 16; i++) {
            //         token += chars[Math.floor(Math.random() * chars.length)];
            //     };

                
            // } while (false)
            return token;
            break;
        case "guild":
            // do{
            //     token = "G_";
            //     const chars = "0123456789".split("");
            //     for (let i = 0; i < 16; i++) {
            //         token += chars[Math.floor(Math.random() * chars.length)];
            //     };

                
            // } while (!GuildSchema.findOne({token}))
            return token;
            break;
        case "user":
            const date = new Date();
            const month = `${("0" + (date.getMonth() + 1)).slice(-2)}`;
            const day = `${("0" + date.getDate()).slice(-2)}`;

            const id = `U_${date.getFullYear()}${month}${day}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${this.getRandomInt(10)}${this.getRandomInt(10)}${this.getRandomInt(10)}`;

            return id;
            break;
        }
        return "";
    }

    /**
     * @param {number} max 
     */
    getRandomInt(max: number) {
        return Math.floor(Math.random() * (max + 1));
    }

    generateToken () {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let token = "T_";

        for (let i = 0; i < 32; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }

        return token;
    }

    newDiscrim() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXY";
        let token = "";

        for (let i = 0; i < 4; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }

        return token;
    }
    newSalt() {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        let token = "";

        for (let i = 0; i < 4; i++) {
            token += chars[Math.floor(Math.random() * chars.length)];
        }

        return token;
    }
}