(function(){"use strict";var t={5338:function(t,n,o){var r=o(5130),e=o(6768);const l={id:"app"};function i(t,n,o,r,i,u){const a=(0,e.g2)("WorkflowTabs");return(0,e.uX)(),(0,e.CE)("div",l,[n[0]||(n[0]=(0,e.Lk)("h1",null,"GitHub Actions Dashboard",-1)),(0,e.bF)(a)])}var u=o(4232);const a={class:"tabs"},c=["onClick"];function s(t,n,o,r,l,i){const s=(0,e.g2)("WorkflowTable");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("div",a,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(l.filters,(t=>((0,e.uX)(),(0,e.CE)("button",{key:t,class:(0,u.C4)({active:l.activeFilter===t}),onClick:n=>i.setFilter(t)},(0,u.v_)(t),11,c)))),128))]),(0,e.bF)(s,{filter:l.activeFilter},null,8,["filter"])])}o(8992),o(4520);function f(t,n,o,r,l,i){return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("h2",null,(0,u.v_)(o.filter)+" Workflows",1),(0,e.Lk)("table",null,[n[0]||(n[0]=(0,e.Lk)("thead",null,[(0,e.Lk)("tr",null,[(0,e.Lk)("th",null,"Workflow"),(0,e.Lk)("th",null,"Status"),(0,e.Lk)("th",null,"Branch"),(0,e.Lk)("th",null,"Last executed on ")])],-1)),(0,e.Lk)("tbody",null,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(i.filteredRuns,(t=>((0,e.uX)(),(0,e.CE)("tr",{key:t.id},[(0,e.Lk)("td",null,(0,u.v_)(t.name),1),(0,e.Lk)("td",{style:(0,u.Tr)(i.getStatusStyle(t.conclusion))},(0,u.v_)(t.conclusion),5),(0,e.Lk)("td",null,(0,u.v_)(t.head_branch),1),(0,e.Lk)("td",null,(0,u.v_)(new Date(t.updated_at).toLocaleString()),1)])))),128))])])])}o(3949);var d=o(4373),h={name:"WorkflowTable",props:{filter:String},data(){return{workflows:[]}},computed:{filteredRuns(){return"All"===this.filter?this.workflows:"main"===this.filter?this.workflows.filter((t=>t.name.includes("main"))):"v2.18"===this.filter?this.workflows.filter((t=>t.name.includes("v2.18"))):[]},getStatusStyle(){return{success:{color:"green",fontWeight:"bold"},failure:{color:"red",fontWeight:"bold"},pending:{color:"goldenrod",fontWeight:"bold"},default:{color:"gray",fontStyle:"italic"}}}},async mounted(){try{const t=await d.A.get("https://api.github.com/repos/bhavishraj/practise/actions/runs"),n=t.data.workflow_runs;console.log(n);const o={};n.forEach((t=>{const{workflow_id:n}=t;o[n]||(o[n]=t)})),this.workflows=Object.values(o),console.log(this.workflows)}catch(t){console.error("Error fetching workflows:",t)}}},v=o(1241);const b=(0,v.A)(h,[["render",f]]);var k=b,p={name:"WorkflowTabs",components:{WorkflowTable:k},data(){return{filters:["All","main","v2.18"],activeFilter:"All"}},methods:{setFilter(t){this.activeFilter=t}}};const w=(0,v.A)(p,[["render",s]]);var g=w,y={name:"App",components:{WorkflowTabs:g}};const m=(0,v.A)(y,[["render",i]]);var L=m;(0,r.Ef)(L).mount("#app")}},n={};function o(r){var e=n[r];if(void 0!==e)return e.exports;var l=n[r]={exports:{}};return t[r].call(l.exports,l,l.exports,o),l.exports}o.m=t,function(){var t=[];o.O=function(n,r,e,l){if(!r){var i=1/0;for(s=0;s<t.length;s++){r=t[s][0],e=t[s][1],l=t[s][2];for(var u=!0,a=0;a<r.length;a++)(!1&l||i>=l)&&Object.keys(o.O).every((function(t){return o.O[t](r[a])}))?r.splice(a--,1):(u=!1,l<i&&(i=l));if(u){t.splice(s--,1);var c=e();void 0!==c&&(n=c)}}return n}l=l||0;for(var s=t.length;s>0&&t[s-1][2]>l;s--)t[s]=t[s-1];t[s]=[r,e,l]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,r){var e,l,i=r[0],u=r[1],a=r[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(e in u)o.o(u,e)&&(o.m[e]=u[e]);if(a)var s=a(o)}for(n&&n(r);c<i.length;c++)l=i[c],o.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return o.O(s)},r=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(5338)}));r=o.O(r)})();
//# sourceMappingURL=app.2a75f64b.js.map