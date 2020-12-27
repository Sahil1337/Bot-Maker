import React, { Component } from 'react'
import Compiler from "../Api/api";

export default class Main extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            TOKEN: "",
            msges: [],
            tempTrigger: "",
            tempMessage: "",
            totalMessages: 0
        }
    }


    render() {
        //@ts-ignore
        return (
            <div>
                <h1 className="top-title">Bot Maker</h1>
                <br />

                <div className="body-options">
                    <label>Bot's Token (get from <a href="https://discord.com/developers/applications">here</a>)</label>
                    <input type="password" className="form-control" placeholder="Token..." onChange={(e) => {
                        this.setState({ TOKEN: e.target.value });
                        //@ts-ignore
                    }} />
                    <br />
                    <label>Messages and triggers</label>

                    <input className="form-control" placeholder="Trigger" onChange={(e) => {
                        this.setState({
                            //@ts-ignore
                            tempTrigger: e.target.value
                        });
                    }} />
                    <input className="form-control" placeholder="Message" onChange={(e) => {
                        this.setState({
                            //@ts-ignore
                            tempMessage: e.target.value
                        });
                    }} />
                    <br />
                    <button type="button" className="btn btn-dark" onClick={() => {
                        let message = {
                            //@ts-ignore
                            message: this.state.tempMessage,
                            //@ts-ignore
                            trigger: this.state.tempTrigger
                        };
                        //@ts-ignore
                        this.state.msges.push(message);


                        //@ts-ignore

                        var addedTotalMessages = this.state.totalMessages + 1;

                        this.setState({
                            //@ts-ignore
                            totalMessages: addedTotalMessages
                        });


                    }}>Add</button>
                    <br />
                    <br />
                </div>
                <br />
                <span>Total Messages {
                    //@ts-ignore
                    this.state.totalMessages
                }</span>
                <br />
                <br />
                <button className="btn btn-primary" onClick={async () => {

                    //@ts-ignore
                    let CompiledCode = (Compiler({ Token: this.state.TOKEN }, this.state.msges));

                    let DownloadElement = document.createElement("a");
                    let stringTODOwnload = await CompiledCode;
                    const codeToDownload = new Blob([stringTODOwnload], { type: "text/javascript" });

                    DownloadElement.href = URL.createObjectURL(codeToDownload);
                    DownloadElement.download = "Bot.js";
                    document.body.appendChild(DownloadElement);
                    DownloadElement.click();

                }}>Create</button>
                <br />
                <br />
                <h5 style={{ textAlign: "center" }}>We're <a href="https://github.com/PlayCosiYT/Bot-Maker">Open source</a></h5>
                <br />
                <br />\
                <div className="logo-div">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github-Logo" height={48} width={48} style={{ alignSelf: "center" }} />
                    <br />
                    <br />
                    <span>If you found any bug, create a issue <a href="https://github.com/PlayCosiYT/Bot-Maker" > here</a></span>
                </div>
            </div>
        );
    }
}



