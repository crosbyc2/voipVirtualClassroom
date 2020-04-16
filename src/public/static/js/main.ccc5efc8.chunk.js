(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{155:function(e,t,a){e.exports=a(380)},160:function(e,t,a){},161:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(21),i=a.n(c);a(160),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(154),l=a(22),s=a(23),m=a(24),h=a(26),u=a(25),d=a(33),f=a.n(d),v=o.a.createContext({}),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isActive:!1,loading:!1,room:{}},f()(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(v.Provider,{value:Object(r.a)({},this.state)},this.props.children)}}]),a}(n.Component),k=a(84),g=a(34),E=(a(161),a(12)),y=a(92),j=a.n(y),x=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={host:!1,join:!1,code:"",name:""},n.form=o.a.createRef(),f()(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"handleFile",value:function(e){var t=this,a=e.target.files[0];if(a){this.setState({loading:!0});var n=new FormData;n.append("doc",a),j.a.post("http://localhost:3000/setup",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.context.room=e.data.remoteRoom,t.context.token=e.data.token,t.context.username=e.data.username,t.context.roomName=e.data.room.name,t.context.isHost=!0,console.log("context: ",t.context),t.props.history.push("session")}))}}},{key:"handleJoin",value:function(){var e=this;console.log(this.state.code),j.a.get("http://localhost:3000/room/"+this.state.code+"?name="+this.state.name).then((function(t){console.log(t),e.context.token=t.data.token,e.context.username=e.state.name,e.context.roomName=e.state.code,e.context.isHost=!1,e.context.room=t.data.room,e.props.history.push("session")}))}},{key:"renderJoinModal",value:function(){var e=this;return o.a.createElement(E.f,{fade:!0,size:"sm",open:this.state.join,toggle:this.join},o.a.createElement(E.h,null,"Join"),o.a.createElement(E.g,null,o.a.createElement("h3",null,"Enter your name below:"),o.a.createElement("input",{value:this.state.name,onChange:function(t){e.setState({name:t.target.value})},type:"text"}),o.a.createElement("h3",null,"Enter code:"),o.a.createElement("input",{value:this.state.code,onChange:function(t){e.setState({code:t.target.value})},type:"text"}),o.a.createElement(E.a,{onClick:this.handleJoin}," Go")))}},{key:"renderHostModal",value:function(){return o.a.createElement(E.f,{fade:!0,size:"sm",open:this.state.host,toggle:this.host},o.a.createElement(E.h,null,"Host"),o.a.createElement(E.g,null,o.a.createElement("h4",null,"Choose a file to upload:"),o.a.createElement("input",{type:"file",name:"doc",onChange:this.handleFile})))}},{key:"host",value:function(){this.setState({host:!this.state.host})}},{key:"join",value:function(){this.setState({join:!this.state.join})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App",style:{width:"100%",height:"100vh"}},this.renderJoinModal(),this.renderHostModal(),o.a.createElement(E.b,{style:{maxWidth:"300px",marginLeft:"auto",marginRight:"auto"}},o.a.createElement(E.d,null,"Welcome!"),o.a.createElement(E.c,null,o.a.createElement(E.e,null,"Choose an option"),o.a.createElement(E.a,{onClick:this.join,style:{marginBottom:50}},"Join Session \u2192"),o.a.createElement(E.a,{onClick:this.host},"Host Session \u2192"))))}}]),a}(n.Component);x.contextType=v;var b=a(93),O=a.n(b),C=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).dt=new b.LocalDataTrack,n.iframe=o.a.createRef(),n.state={identity:null,roomName:"",roomNameErr:!1,previewTracks:null,localMediaAvailable:!1,hasJoinedRoom:!1,activeRoom:null,token:null},f()(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log(this.context),this.joinRoom()}},{key:"handleScrool",value:function(e){console.log(e),this.dt.send("scrool")}},{key:"joinRoom",value:function(){console.log("Joining room '"+this.context.roomName+"'...");var e={name:this.context.roomName,tracks:void 0};this.context.host&&(e.tracks=[this.dt]),this.state.previewTracks&&(e.tracks=this.state.previewTracks),console.log("Connect opotios",e),O.a.connect(this.context.token,e).then(this.didJoinRoom,(function(e){console.log(e)}))}},{key:"attachTracks",value:function(e,t){console.log(e),e.forEach((function(e){e&&t.appendChild(e.attach())}))}},{key:"attachParticipantTracks",value:function(e,t){var a=Array.from(e.tracks.values());this.attachTracks(a,t)}},{key:"didJoinRoom",value:function(e){var t=this;console.log("Joined as '"+this.context.username+"'"),this.setState({activeRoom:e,localMediaAvailable:!0,hasJoinedRoom:!0}),this.iframe.current.contentWindow.onscrool=this.handleScrool;var a=this.refs.localMedia;a.querySelector("video")||this.attachParticipantTracks(e.localParticipant,a),e.on("participantConnected",(function(e){console.log("Joining: '"+e.identity+"'")})),e.on("trackAdded",(function(e,a){console.log(a.identity+" added track: "+e.kind),"data"===e.kind&&e.on("message",(function(e){console.log(e)}));var n=t.refs.remoteMedia;t.attachTracks([e],n)}))}},{key:"render",value:function(){var e=this.state.localMediaAvailable?o.a.createElement("div",{className:"flex-item"},o.a.createElement("div",{ref:"localMedia"})," "):"";return o.a.createElement("div",{className:"flex-container"},o.a.createElement("h1",null,"Code ",this.context.roomName," "),o.a.createElement("iframe",{style:{width:"100%",height:500},src:this.context.roomName,ref:this.iframe}),e," ",o.a.createElement("div",{className:"flex-item"},o.a.createElement("div",{className:"flex-item",ref:"remoteMedia",id:"remote-media"})))}}]),a}(n.Component);C.contextType=v;var w=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),n=t.call(this,e),f()(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(C,null)}}]),a}(n.Component),J=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(g.c,null,o.a.createElement(g.a,{path:"/",component:x,exact:!0}),o.a.createElement(g.a,{path:"/session",component:w,exact:!0})))}}]),a}(n.Component);i.a.render(o.a.createElement(p,null,o.a.createElement(k.a,null,o.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.ccc5efc8.chunk.js.map