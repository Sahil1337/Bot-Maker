(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),r=s(5),c=s.n(r),o=(s(15),s(2)),i=s.n(o),l=s(3),j=s(6),b=s(7),p=s(9),u=s(8),g=function(){var e=Object(l.a)(i.a.mark((function e(t,s){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",Promise.all([s.forEach((function(e){var t='case"'.concat(e.trigger,'": \n message.channel.send("').concat(e.message,'") \n break;');n=n+"\n"+t}))]),a='const Discord = require("discord.js");\nconst Client = new Discord.Client();Client.on("message", async message => {\n    const args  = message.content.slice(PREFIX.length).trim().split(\' \');\n    switch (args[0]) {'+n+"}\n})"+'\n const TOKEN = "'.concat(t.Token,'"; \n const PREFIX = "').concat(t.Prefix,'"; \n Client.login(TOKEN)'),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),d=function(e){Object(p.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).state={TOKEN:"",msges:[],tempTrigger:"",tempMessage:"",totalMessages:0},n}return Object(b.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"top-title",children:"Bot Maker"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"body-options",children:[Object(n.jsxs)("label",{children:["Bot's Token (get from ",Object(n.jsx)("a",{href:"https://discord.com/developers/applications",children:"here"}),")"]}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Token...",onChange:function(t){e.setState({TOKEN:t.target.value})}}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{children:"Messages and triggers"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Trigger",onChange:function(t){e.setState({tempTrigger:t.target.value})}}),Object(n.jsx)("input",{className:"form-control",placeholder:"Message",onChange:function(t){e.setState({tempMessage:t.target.value})}}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){var t={message:e.state.tempMessage,trigger:e.state.tempTrigger};e.state.msges.push(t);var s=e.state.totalMessages+1;e.setState({totalMessages:s})},children:"Add"})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:["Total Messages ",this.state.totalMessages]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:Object(l.a)(i.a.mark((function t(){var s,n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=g({Token:e.state.TOKEN,Prefix:"$"},e.state.msges),n=document.createElement("a"),t.next=4,s;case 4:a=t.sent,r=new Blob([a],{type:"text/javascript"}),n.href=URL.createObjectURL(r),n.download="Bot.js",document.body.appendChild(n),n.click();case 10:case"end":return t.stop()}}),t)}))),children:"Create"})]})}}]),s}(a.Component);var m=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("br",{}),Object(n.jsx)(d,{})]})};s(17),s(18);c.a.render(Object(n.jsx)(m,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fd5cb2c7.chunk.js.map