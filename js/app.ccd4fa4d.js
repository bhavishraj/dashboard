(function(){"use strict";var t={7223:function(t,n,r){var e=r(5130),o=r(6768);const l={id:"app"};function i(t,n,r,e,i,u){const a=(0,o.g2)("WorkflowTabs");return(0,o.uX)(),(0,o.CE)("div",l,[n[0]||(n[0]=(0,o.Lk)("h1",null,"GitHub Actions Dashboard",-1)),(0,o.bF)(a)])}var u=r(4232);const a={class:"tabs"},s=["onClick"];function f(t,n,r,e,l,i){const f=(0,o.g2)("WorkflowTable");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",a,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.filters,(t=>((0,o.uX)(),(0,o.CE)("button",{key:t,class:(0,u.C4)({active:l.activeFilter===t}),onClick:n=>i.setFilter(t)},(0,u.v_)(t),11,s)))),128))]),(0,o.bF)(f,{filter:l.activeFilter},null,8,["filter"])])}r(8992),r(4520);function c(t,n,r,e,l,i){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("h2",null,(0,u.v_)(r.filter)+" Workflows",1),(0,o.Lk)("table",null,[n[0]||(n[0]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Workflow"),(0,o.Lk)("th",null,"Status"),(0,o.Lk)("th",null,"Branch"),(0,o.Lk)("th",null,"Updated today")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.filteredRuns,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id},[(0,o.Lk)("td",null,(0,u.v_)(t.name),1),(0,o.Lk)("td",null,(0,u.v_)(t.status),1),(0,o.Lk)("td",null,(0,u.v_)(t.head_branch),1),(0,o.Lk)("td",null,(0,u.v_)(new Date(t.updated_at).toLocaleString()),1)])))),128))])])])}var d=r(4373),v={name:"WorkflowTable",props:{filter:String},data(){return{workflows:[]}},computed:{filteredRuns(){return"All"===this.filter?this.workflows:"main"===this.filter?this.workflows.filter((t=>t.main.includes("main"))):"v2.18"===this.filter?this.workflows.filter((t=>t.main.includes("v2.18"))):[]}},async mounted(){try{const t=await d.A.get("https://api.github.com/repos/bhavishraj/practise/actions/runs",{headers:{Authorization:`Bearer ${(void 0).VITE_GITHUB_TOKEN}`}});this.workflows=t.data.workflow_runs}catch(t){console.error("Error fetching workflows:",t)}}},h=r(1241);const k=(0,h.A)(v,[["render",c]]);var p=k,b={name:"WorkflowTabs",components:{WorkflowTable:p},data(){return{filters:["All","main","v2.18"],activeFilter:"All"}},methods:{setFilter(t){this.activeFilter=t}}};const w=(0,h.A)(b,[["render",f]]);var m=w,y={name:"App",components:{WorkflowTabs:m}};const g=(0,h.A)(y,[["render",i]]);var L=g;(0,e.Ef)(L).mount("#app")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e].call(l.exports,l,l.exports,r),l.exports}r.m=t,function(){var t=[];r.O=function(n,e,o,l){if(!e){var i=1/0;for(f=0;f<t.length;f++){e=t[f][0],o=t[f][1],l=t[f][2];for(var u=!0,a=0;a<e.length;a++)(!1&l||i>=l)&&Object.keys(r.O).every((function(t){return r.O[t](e[a])}))?e.splice(a--,1):(u=!1,l<i&&(i=l));if(u){t.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}l=l||0;for(var f=t.length;f>0&&t[f-1][2]>l;f--)t[f]=t[f-1];t[f]=[e,o,l]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,l,i=e[0],u=e[1],a=e[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(a)var f=a(r)}for(n&&n(e);s<i.length;s++)l=i[s],r.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return r.O(f)},e=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[504],(function(){return r(7223)}));e=r.O(e)})();
//# sourceMappingURL=app.ccd4fa4d.js.map