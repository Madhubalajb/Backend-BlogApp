(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),u=n.n(c),o=n(1),l=n.n(o),s=n(2),i=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:e.login},r.a.createElement("input",{type:"text",placeholder:"Username",onChange:e.u_name,required:!0}),r.a.createElement("input",{type:"password",placeholder:"Password",onChange:e.u_password,required:!0}),r.a.createElement("button",{type:"submit"},"Login")))},p=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:e.addUser},r.a.createElement("input",{type:"text",placeholder:"Name",onChange:e.name}),r.a.createElement("input",{type:"text",placeholder:"Username",onChange:e.u_name}),r.a.createElement("input",{type:"password",placeholder:"Set Password",onChange:e.u_password}),r.a.createElement("button",{type:"submit"},"Sign Up")))},m=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create new"),r.a.createElement("form",{onSubmit:e.blog},r.a.createElement("input",{type:"text",placeholder:"Title",onChange:e.title,required:!0}),r.a.createElement("input",{type:"text",placeholder:"Author",onChange:e.author,required:!0}),r.a.createElement("input",{type:"text",placeholder:"url",onChange:e.url,required:!0}),r.a.createElement("button",{type:"submit"},"Create")))},d=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(s.a)(n,2),u=c[0],o=c[1],l={display:u?"none":""},i={display:u?"":"none"},p=function(){o(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:p}})),r.a.createElement("div",null,r.a.createElement("div",{style:l},r.a.createElement("button",{onClick:p},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:p},"cancel")))})),b=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2);n[0],n[1];return r.a.createElement("div",null,e.blogs.map((function(e){return r.a.createElement("p",{onClick:function(e){return function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.url),r.a.createElement("p",null,"likes ",e.likes),r.a.createElement("p",null,"added by ",e.author))}(e)}},e.title)})))},f=n(4),g=n.n(f),v=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(g.a.post("api/login",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},h=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(g.a.post("api/users",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},E=null,w=function(e){E="bearer ".concat(e)},y=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(g.a.get("api/blogs"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},O=function(e){var t,n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:E}},a.next=3,l.a.awrap(g.a.post("api/blogs",e,t));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))},j=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),f=o[0],g=o[1],E=Object(a.useState)(""),j=Object(s.a)(E,2),x=j[0],S=j[1],k=Object(a.useState)(""),C=Object(s.a)(k,2),U=C[0],_=C[1],B=Object(a.useState)(""),L=Object(s.a)(B,2),q=L[0],A=L[1],I=Object(a.useState)(""),J=Object(s.a)(I,2),R=J[0],D=J[1],N=Object(a.useState)(""),V=Object(s.a)(N,2),P=V[0],T=V[1],W=Object(a.useState)([]),z=Object(s.a)(W,2),H=z[0],$=z[1],F=Object(a.useState)(""),G=Object(s.a)(F,2),K=G[0],M=G[1],Q=Object(a.useState)(!1),X=Object(s.a)(Q,2),Y=(X[0],X[1],r.a.createRef()),Z=r.a.createRef(),ee=r.a.createRef();Object(a.useEffect)((function(){y().then((function(e){return $(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);_(t),w(t.token)}}),[]);var te=function(e){M(e),setTimeout((function(){M("")}),5e3)},ne=function(e){return g(e.target.value)},ae=function(e){return S(e.target.value)};return""===U?r.a.createElement(d,{buttonLabel:"Login",ref:Y},r.a.createElement(i,{login:function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,l.a.awrap(v({username:f,password:x}));case 4:t=n.sent,window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(t)),w(t.token),_(t),g(""),S(""),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),null,null,[[1,12]])},u_name:ne,u_password:ae})):r.a.createElement("div",null,K,r.a.createElement("p",null,U.name," logged in"),r.a.createElement("button",{onClick:function(){_(""),window.localStorage.removeItem("loggedBlogAppUser"),w("")}},"logout"),r.a.createElement(d,{buttonLabel:"Create new",ref:ee},r.a.createElement(m,{blog:function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),ee.current.toggleVisibility(),n.prev=2,n.next=5,l.a.awrap(O({title:q,author:R,url:P}));case 5:t=n.sent,$(H.concat(t)),te("Blog created :)"),A(""),D(""),T(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),null,null,[[2,13]])},title:function(e){return A(e.target.value)},author:function(e){return D(e.target.value)},url:function(e){return T(e.target.value)}})),r.a.createElement(d,{buttonLabel:"SignUp",ref:Z},r.a.createElement(p,{addUser:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),Z.current.toggleVisibility(),t.prev=2,t.next=5,l.a.awrap(h({name:n,username:f,password:x}));case 5:t.sent,te("User created :)"),c(""),g(""),S(""),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}}),null,null,[[2,12]])},name:function(e){return c(e.target.value)},u_name:ne,u_password:ae})),r.a.createElement("h1",null,"Blogs"),r.a.createElement(b,{blogs:H}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.4d119b9d.chunk.js.map