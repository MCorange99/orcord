import Client from "../../index";
import axios from "axios";
import rls from "readline-sync";

const Command = {
    name: "register",
    usage: "register",
    description: "Register another account",

    execute: (client: typeof Client, args: string[]): typeof Client => {
        const username = "asd"; // rls.question("username: ");
        const email = "asd"; // rls.questionEMail("Email: ");
        const passwd = "asd"; // rls.questionNewPassword("Password: ");
        const grav = "asd"; // rls.question("gravatar email(optional): ") || "";


        axios({
            method: "post",
            url: client.data.host + "/api/user/register",
            data: {
                username: username,
                email: email,
                password: passwd,
                gravatar_email: grav
            }
        }).then((res) => {
            console.log(res || "nothin");
        }).catch((err) => {
            console.log(err);
        });
        return client;
    }
};

export default Command;