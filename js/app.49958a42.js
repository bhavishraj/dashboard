(function(){"use strict";var t={6271:function(t,n,r){var o=r(5130),e=r(6768);const l={id:"app"};function i(t,n,r,o,i,u){const a=(0,e.g2)("WorkflowTabs");return(0,e.uX)(),(0,e.CE)("div",l,[n[0]||(n[0]=(0,e.Lk)("h1",null,"GitHub Actions Dashboard",-1)),(0,e.bF)(a)])}var u=r(4232);const a={class:"tabs"},s=["onClick"];function c(t,n,r,o,l,i){const c=(0,e.g2)("WorkflowTable");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("div",a,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(l.filters,(t=>((0,e.uX)(),(0,e.CE)("button",{key:t,class:(0,u.C4)({active:l.activeFilter===t}),onClick:n=>i.setFilter(t)},(0,u.v_)(t),11,s)))),128))]),(0,e.bF)(c,{filter:l.activeFilter},null,8,["filter"])])}r(8992),r(4520);function f(t,n,r,o,l,i){return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("h2",null,(0,u.v_)(r.filter)+" Workflows",1),(0,e.Lk)("table",null,[n[0]||(n[0]=(0,e.Lk)("thead",null,[(0,e.Lk)("tr",null,[(0,e.Lk)("th",null,"Workflow"),(0,e.Lk)("th",null,"Status"),(0,e.Lk)("th",null,"Branch"),(0,e.Lk)("th",null,"Updated today")])],-1)),(0,e.Lk)("tbody",null,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(i.filteredRuns,(t=>((0,e.uX)(),(0,e.CE)("tr",{key:t.id},[(0,e.Lk)("td",null,(0,u.v_)(t.name),1),(0,e.Lk)("td",null,(0,u.v_)(t.status),1),(0,e.Lk)("td",null,(0,u.v_)(t.head_branch),1),(0,e.Lk)("td",null,(0,u.v_)(new Date(t.updated_at).toLocaleString()),1)])))),128))])])])}r(3949);var d=r(4373),v={name:"WorkflowTable",props:{filter:String},data(){return{workflows:[]}},computed:{filteredRuns(){return"All"===this.filter?this.workflows:"main"===this.filter?(console.log(this.workflows),this.workflows.filter((t=>t.name.includes("main")))):"v2.18"===this.filter?this.workflows.filter((t=>t.name.includes("v2.18"))):[]}},async mounted(){try{const t=await d.A.get("https://api.github.com/repos/bhavishraj/practise/actions/runs"),n=t.data.workflow_runs;console.log(n);const r={};n.forEach((t=>{const{workflow_id:n}=t;r[n]||(r[n]=t)})),this.workflows=Object.values(r),console.log(this.workflows)}catch(t){console.error("Error fetching workflows:",t)}}},h=r(1241);const k=(0,h.A)(v,[["render",f]]);var p=k,b={name:"WorkflowTabs",components:{WorkflowTable:p},data(){return{filters:["All","main","v2.18"],activeFilter:"All"}},methods:{setFilter(t){this.activeFilter=t}}};const w=(0,h.A)(b,[["render",c]]);var m=w,g={name:"App",components:{WorkflowTabs:m}};const y=(0,h.A)(g,[["render",i]]);var L=y;(0,o.Ef)(L).mount("#app")}},n={};function r(o){var e=n[o];if(void 0!==e)return e.exports;var l=n[o]={exports:{}};return t[o].call(l.exports,l,l.exports,r),l.exports}r.m=t,function(){var t=[];r.O=function(n,o,e,l){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],e=t[c][1],l=t[c][2];for(var u=!0,a=0;a<o.length;a++)(!1&l||i>=l)&&Object.keys(r.O).every((function(t){return r.O[t](o[a])}))?o.splice(a--,1):(u=!1,l<i&&(i=l));if(u){t.splice(c--,1);var s=e();void 0!==s&&(n=s)}}return n}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[o,e,l]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var o in n)r.o(n,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};r.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,l,i=o[0],u=o[1],a=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(a)var c=a(r)}for(n&&n(o);s<i.length;s++)l=i[s],r.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return r.O(c)},o=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(6271)}));o=r.O(o)})();
//# sourceMappingURL=app.49958a42.js.map