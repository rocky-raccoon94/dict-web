(this["webpackJsonpwindmill-dashboard-react"]=this["webpackJsonpwindmill-dashboard-react"]||[]).push([[21],{422:function(e,t,a){"use strict";a.r(t);var n=a(25),l=a.n(n),r=a(31),c=a(12),o=a(0),s=a.n(o),u=a(9),i=a(3),m=a(2),p=a(6);t.default=function(){var e=Object(u.b)(),t=Object(o.useState)(1),a=Object(c.a)(t,2),n=a[0],d=a[1],f=Object(u.c)((function(e){return e.events})),b=Object(u.c)((function(e){return e.auth.user.name})),h=Object(o.useState)(0),E=Object(c.a)(h,2),y=E[0],x=E[1],g=Object(o.useState)(0),v=Object(c.a)(g,2),k=v[0],w=v[1],T=f.length,C=f.slice(10*(n-1),10*n);Object(o.useEffect)((function(){(function(){var t=Object(r.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/events");case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e({type:i.i,payload:n}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e({type:i.i,payload:[]}),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var j=function(){var t=Object(r.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:i.f,payload:a}),t.next=4,fetch("http://localhost:5000/events/".concat(a),{method:"DELETE"});case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(r.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:i.a,payload:a}),t.next=4,fetch("http://localhost:5000/events",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return s.a.createElement("div",{className:"container px-6"},s.a.createElement("div",{className:"flex flex-row  justify-start items-center my-3 "},s.a.createElement(m.Button,{layout:"outline",className:"mx-3",onClick:function(){return O({name:b,add:y,modify:k,time:(new Date).toISOString(Date.now())})}},"\u6dfb\u52a0"),s.a.createElement("span",{className:"font-Inconsolata font-semibold text-purple-600 text-lg"},"I've added"),s.a.createElement("input",{className:"block w-1/4 mt-1 mx-4 text-sm font-Inconsolata dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",onChange:function(e){return x(e.target.value||0)}}),s.a.createElement("p",{className:"px-3 text-purple-600 font-Inconsolata font-semibold text-lg"},"and modified"),s.a.createElement("input",{className:"block w-1/4 mt-1 text-sm mx-4 font-Inconsolata dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",onChange:function(e){return w(e.target.value)}}),s.a.createElement("p",{className:"px-3 text-purple-600 font-Inconsolata font-semibold text-lg"},"words.")),s.a.createElement(m.TableContainer,{className:"mb-8"},s.a.createElement(m.Table,null,s.a.createElement(m.TableHeader,null,s.a.createElement("tr",null,s.a.createElement(m.TableCell,null,"User"),s.a.createElement(m.TableCell,null,"Add"),s.a.createElement(m.TableCell,null,"Modify"),s.a.createElement(m.TableCell,null,"Date"),s.a.createElement(m.TableCell,null,"Actions"))),s.a.createElement(m.TableBody,null,C.map((function(e,t){return s.a.createElement(m.TableRow,{key:t},s.a.createElement(m.TableCell,null,s.a.createElement("div",{className:"flex items-center text-sm"},s.a.createElement("div",null,s.a.createElement("p",{className:"font-semibold"},e.name)))),s.a.createElement(m.TableCell,null,s.a.createElement(m.Badge,{type:"primary"},e.add)),s.a.createElement(m.TableCell,null,s.a.createElement(m.Badge,{type:"success"},e.modify)),s.a.createElement(m.TableCell,null,s.a.createElement("span",{className:"text-sm"},e.time)),s.a.createElement(m.TableCell,null,s.a.createElement("div",{className:"flex items-center space-x-4"},s.a.createElement(m.Button,{onClick:function(){return j(e.id)},layout:"link",size:"icon","aria-label":"Delete"},s.a.createElement(p.TrashIcon,{className:"w-5 h-5","aria-hidden":"true",hidden:e.name!==b})))))})))),s.a.createElement(m.TableFooter,null,s.a.createElement(m.Pagination,{totalResults:T,resultsPerPage:10,onChange:function(e){d(e)},label:"Table navigation"}))))}}}]);
//# sourceMappingURL=21.b529ff66.chunk.js.map