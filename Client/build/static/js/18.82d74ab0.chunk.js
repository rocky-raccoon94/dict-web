(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[18],{425:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),s=a(31),c=a(12),l=a(0),o=a.n(l),m=a(9),i=a(3),u=function(){var e=Object(s.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:e.sent,t({type:i.b,payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}();t.default=function(){var e=Object(m.c)((function(e){return e.auth.user.name})),t=Object(m.c)((function(e){return e.msgs})).slice(0,100).reverse(),a=Object(m.b)(),n=Object(l.useState)(""),d=Object(c.a)(n,2),p=d[0],f=d[1];return Object(l.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/messages");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,a({type:i.j,payload:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),a({type:i.j,payload:[]});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement("div",{className:"flex flex-1 h-screen-2 font-sans antialiased flex-col bg-gray-200 font-semibold dark:bg-gray-700 dark:text-gray-400"},o.a.createElement("div",{className:"border-b flex px-6 py-2 items-center flex-none bg-green-200 dark:bg-gray-700"},o.a.createElement("div",{className:"flex flex-col "},o.a.createElement("h3",{className:"text-grey-darkest mb-1 font-extrabold font-Noto text-2xl"},"ChatRoom"))),o.a.createElement("div",{className:"overflow-y-auto font-Noto h-screen-2"},t.map((function(t,a){return o.a.createElement("div",{className:"px-6 py-4 flex-1 flex mx-10 "+"".concat(t.name===e&&"justify-end"),key:a},o.a.createElement("div",{className:"flex items-start mb-4 text-sm"},o.a.createElement("div",{className:"flex-1 overflow-hidden"},o.a.createElement("div",null,o.a.createElement("span",{className:"pr-5 font-bold"},t.name),o.a.createElement("span",{className:"bg-purple-200 py-1 px-2 dark:text-gray-800 rounded-lg text-grey text-xs"},null!==t.time&&t.time.substring(5,10)+" "+t.time.substring(11,19))),o.a.createElement("div",{className:"p-2 flex "},o.a.createElement("p",{className:"p-4 rounded-lg text-black leading-normal bg-white "+"".concat(t.name===e&&"bg-green-200")},t.msg)))))}))),o.a.createElement("div",{className:"pb-6 px-4 flex-none mt-4 font-Noto"},o.a.createElement("div",{className:"flex rounded-lg border-2 border-grey "},o.a.createElement("button",{onClick:function(){return u(a,{name:e,msg:p,time:(new Date).toISOString(Date.now())})},className:"text-3xl text-grey border-r-2 border-grey p-2"},o.a.createElement("svg",{className:"fill-current h-6 w-6 block",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"}))),o.a.createElement("input",{type:"text",className:"w-full px-4",placeholder:"Add a new message!",onChange:function(e){return f(e.target.value)}}))))}}}]);
//# sourceMappingURL=18.82d74ab0.chunk.js.map