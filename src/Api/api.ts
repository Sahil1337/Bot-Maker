import Client from "./types/Client";
import Message from "./types/Messages";

import FirstLines from "./Strings/FirstLines";
import MidLines from "./Strings/MidLines";
import Endings from "./Strings/Endings";

const CreateBotFile = async (client: Client, msges: Message[]) => {
    let commands = "";

    Promise.all([
        msges.forEach(message => {
            let cmd = `case"${message.trigger}": \n message.channel.send("${message.message}") \n break;`;
            commands = commands + "\n" +cmd ;
        })
    ]);

    let WholeCode = FirstLines + MidLines + commands + Endings + `\n const TOKEN = "${client.Token}"; \n  Client.login(TOKEN)`;
    return WholeCode
}

export default CreateBotFile;