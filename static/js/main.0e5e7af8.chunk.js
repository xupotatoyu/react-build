(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[3],{195:function(e,t,a){e.exports=a(416)},200:function(e,t,a){},209:function(e,t,a){},212:function(e,t,a){var n={"./Detail/Detail.js":[420,2,9],"./Edit/Edit.js":[421,0,10],"./Main/Main.js":[422,1,2,7,8],"./Manage/Manage.js":[423,1,5,11],"./Sign/Sign.js":[424,12],"./Write/Write.js":[425,0,13]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=212,e.exports=r},218:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i);a(200),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(29),c=(a(201),a(128)),l=a.n(c),u=(a(187),a(89)),m=a.n(u),h=(a(181),a(95)),d=a.n(h),p=(a(134),a(110)),f=a.n(p),g=(a(179),a(60)),E=a.n(g),v=a(52),b=a(53),y=a(54),w=a(57),j=a(56),O=(a(209),a(32)),N=a(172),k=a.n(N),S=function(e){return k()({loader:function(){return a(212)("./".concat(e,"/").concat(e,".js"))},loading:function(){return null}})},x=[{path:"/main",component:S("Main"),exact:!0,title:"\u4e3b\u9875"},{path:"/sign",component:S("Sign"),exact:!0,title:"\u767b\u5f55"},{path:"/manage",component:S("Manage"),exact:!0,title:"\u7528\u6237\u7ba1\u7406\u754c\u9762"},{path:"/write",component:S("Write"),exact:!0,title:"\u5199\u535a\u5ba2"},{path:"/edit/:id",component:S("Edit"),exact:!0,title:"\u4fee\u6539\u535a\u5ba2"},{path:"/detail/:id",component:S("Detail"),exact:!0,title:"\u6587\u7ae0\u9875\u9762"}],C=function(e){return r.a.createElement(O.b,{path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes,title:e.title}))}})},M=(a(184),a(115)),I=a.n(M),q=(a(216),a(67)),P=a.n(q),V=a(426),D=a(427),L=(a(218),function(e){Object(w.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleClick=function(e){console.log("click ",e),n.setState({current:e.key})},n.state={current:"mail"},n}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(P.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(P.a.Item,{key:"main",icon:r.a.createElement(V.a,null)},r.a.createElement(s.b,{to:"/main"},"\u535a\u5ba2")),r.a.createElement(P.a.Item,{key:"manage"},r.a.createElement(s.b,{to:"/manage"},"\u7ba1\u7406\u4e2d\u5fc3")),r.a.createElement(P.a.Item,{key:"write"},r.a.createElement(s.b,{to:"/write"},"\u5199\u535a\u5ba2")))}}]),a}(r.a.Component)),W=function(e){Object(w.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={userName:"",userState:!1},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.setState({userName:this.props.userName})}},{key:"componentWillReceiveProps",value:function(e){this.setState({userName:e.userName})}},{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-title"}," \u5f90\u6000\u5b87\u7684\u535a\u5ba2"),r.a.createElement("div",{className:"header-right"},r.a.createElement("div",{className:"header-nav"},r.a.createElement(L,null)),this.state.userName?r.a.createElement("div",{className:"header-user"},r.a.createElement(I.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),r.a.createElement("span",{style:{marginLeft:"2px"},onClick:this.props.quitModal},r.a.createElement("b",null,this.state.userName))):r.a.createElement("div",{className:"header-user"},r.a.createElement(I.a,{icon:r.a.createElement(D.a,null)}),r.a.createElement("span",{style:{marginLeft:"2px"},onClick:this.props.changeModal},"\u8bf7\u767b\u5f55"))))}}]),a}(r.a.Component),T=a(428),Q=a(429),A=function(e){Object(w.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).getInputValue=function(e,t){if(t&&t.target&&t.target.value){var a=t.target.value;"username"===e?n.setState({username:a}):n.setState({password:a})}},n.showModal=function(){n.setState({visible:!0})},n.quitModal=function(){n.setState({quitVisible:!0})},n.fetchPost=function(e,t){var a=Object(y.a)(n);fetch(e,{body:JSON.stringify(t),headers:{"content-type":"application/json"},method:"POST"}).then((function(e){return e.json()})).then((function(e){0===e.errno?(E.a.success("\u767b\u5f55\u6210\u529f"),n.setState({visible:!1}),window.localStorage.setItem("userName",n.state.username),a.setState({userName:window.localStorage.getItem("userName")})):E.a.error("\u5bc6\u7801\u6216\u8005\u7528\u6237\u540d\u9519\u8bef")})).catch((function(e){return console.error(e)}))},n.fetchQuit=function(e){var t=Object(y.a)(n);fetch(e,{body:"",headers:{"content-type":"application/json"},method:"POST"}).then((function(e){return e.json()})).then((function(e){0===e.errno?(E.a.success("\u767b\u51fa\u6210\u529f"),window.localStorage.removeItem("userName"),n.setState({quitVisible:!1}),t.setState({userName:""})):E.a.error("\u9000\u51fa\u5931\u8d25")})).catch((function(e){return console.error(e)}))},n.handleLoginOk=function(e){console.log(e);var t={username:n.state.username,password:n.state.password};n.fetchPost("/api/user/login",t)},n.handleQuitOk=function(e){n.fetchQuit("/api/user/quit")},n.handleCancel=function(e){console.log(e),n.setState({visible:!1,quitVisible:!1})},n.pushSign=function(){n.props.history.push("/sign"),window.location.reload(),n.setState({visible:!1})},n.state={visible:!1,quitVisible:!1,username:"",password:"",userName:""},n}return Object(b.a)(a,[{key:"componentWillMount",value:function(){window.localStorage.getItem("userName")&&this.setState({userName:window.localStorage.getItem("userName")})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(W,Object.assign({},this.props,{changeModal:this.showModal,quitModal:this.quitModal,userName:this.state.userName})),r.a.createElement(l.a,{title:"\u767b\u5f55",visible:this.state.visible,onOk:this.handleLoginOk,onCancel:this.handleCancel},r.a.createElement("div",{style:{height:"150px",display:"flex",flexDirection:"column",justifyContent:"space-around"}},r.a.createElement(m.a,{ref:"getFormVlaue"},r.a.createElement(m.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(d.a,{placeholder:"Enter your username",onChange:function(t){return e.getInputValue("username",t)},prefix:r.a.createElement(D.a,{className:"site-form-item-icon"}),suffix:r.a.createElement(f.a,{title:"Extra information"},r.a.createElement(T.a,{style:{color:"rgba(0,0,0,.45)"}}))})),r.a.createElement(m.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(d.a.Password,{onChange:function(t){return e.getInputValue("password",t)},prefix:r.a.createElement(Q.a,{style:{color:"rgba(0,0,0,.45)"}}),placeholder:"input password"})))),r.a.createElement("span",{style:{color:"red",cursor:"default"},onClick:this.pushSign},"\u6ca1\u6709\u8d26\u6237\uff1f\u70b9\u51fb\u6ce8\u518c\u8d26\u6237")),r.a.createElement(l.a,{title:"\u6ce8\u9500",visible:this.state.quitVisible,onOk:this.handleQuitOk,onCancel:this.handleCancel},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"\u786e\u5b9a\u9000\u51fa\u767b\u5f55\uff1f"))),r.a.createElement("div",{className:"contain"},r.a.createElement(O.d,null,x.map((function(e,t){return r.a.createElement(C,Object.assign({key:t},e))})),r.a.createElement(O.a,{from:"",to:"/main"}))))}}]),a}(r.a.Component),J=a(177),U=a.n(J),_=a(178),z=a(50),B=a(130),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"\u4f4d\u53f7",name:"\u8fd9\u662fstate"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TITLE":return Object(B.a)(Object(B.a)({},e),{},{title:t.playLoad});default:return e}},H=Object(z.b)({app:F}),X=Object(z.c)(H),G=U()();o.a.render(r.a.createElement(_.a,{store:X},r.a.createElement(s.a,{history:G},r.a.createElement(A,{history:G}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[195,4,6]]]);
//# sourceMappingURL=main.0e5e7af8.chunk.js.map