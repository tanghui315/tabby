(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{81516:function(e,t,s){Promise.resolve().then(s.bind(s,66408))},66408:function(e,t,s){"use strict";s.r(t),s.d(t,{Report:function(){return F}});var l=s(36164),r=s(3546),a=s(11978),n=s(36619),i=s(35814),d=s(99092),c=s.n(d),o=s(39018),m=s.n(o),u=s(42390),f=s.n(u),x=s(40055),h=s(18500),p=s(36758),j=s(80605),g=s(63484),y=s(70410),b=s(74248),v=s(79972),w=s(36065),N=s(81565),Y=s(84942),k=s(54594),M=s(3448),S=s(22119),D=s(6230),I=s(73051),Z=s(94755),C=s(28242),O=s(72223);function E(e){let{data:t}=e,{theme:s}=(0,C.F)(),r=(0,Z.iP)(),a=r.width||0;return(0,l.jsx)(O.ZP,{data:t,colorScheme:"dark"===s?"dark":"light",theme:{light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["rgb(45, 51, 59)","#0e4429","#006d32","#26a641","#39d353"]},blockSize:a>=1300?13:a>=1100?9:a>=900?6:5,hideTotalCount:!0,showWeekdayLabels:!0})}function _(e){let{yearlyStats:t}=e,s=0,r=(null==t?void 0:t.reduce((e,t)=>{let l=c().utc(t.start).format("YYYY-MM-DD");return s+=t.views+t.selects,{...e,[l]:t.views}},{}))||{},a=Array(365).fill("").map((e,t)=>{let s=c()().subtract(t,"days").format("YYYY-MM-DD"),l=r[s]||0;return{date:s,count:l,level:Math.min(4,Math.ceil(l/5))}}).reverse();return(0,l.jsxs)("div",{className:"flex h-full flex-col rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,l.jsxs)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:[(0,l.jsx)("b",{children:s})," activities in the last year"]}),(0,l.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,l.jsx)(E,{data:a})})]})}var R=s(60079),A=s(82382),z=s(58409),L=s(25442),T=s(81040),P=s(16294);function Q(e){let{active:t,payload:s,label:r}=e;if(t&&s&&s.length){let{views:e,selects:t}=s[0].payload;return e?(0,l.jsx)(v.Zb,{children:(0,l.jsxs)(v.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,l.jsxs)("p",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completion:"}),(0,l.jsx)("b",{children:e})]}),(0,l.jsxs)("p",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"mr-3 inline-block w-20",children:"Acceptance:"}),(0,l.jsx)("b",{children:t})]}),(0,l.jsx)("p",{className:"text-muted-foreground",children:r})]})}):null}return null}function U(e){let{dailyStats:t,dateRange:s}=e,{theme:r}=(0,C.F)(),a=s.from||new Date,i=s.to||a,d={},o={};null==t||t.forEach(e=>{let t=c()(e.start).format("YYYY-MM-DD");d[t]=d[t]||0,o[t]=o[t]||0,d[t]+=e.views,o[t]+=e.selects},{});let m=(0,n.Z)({start:a,end:i}),u=m.map(e=>{let t=c()(e).format("YYYY-MM-DD"),s=d[t]||0,l=o[t]||0;return{name:c()(e).format("MMMM D"),views:s,selects:l,pendings:s-l}});return(0,l.jsxs)("div",{className:"rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,l.jsx)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:"Daily Statistics"}),(0,l.jsx)(R.h,{width:"100%",height:300,children:(0,l.jsxs)(A.v,{data:u,margin:{top:5,right:20,left:20,bottom:5},children:[(0,l.jsx)(z.$,{dataKey:"selects",stackId:"stats",fill:"dark"===r?"#e8e1d3":"#54452c",radius:3}),(0,l.jsx)(z.$,{dataKey:"pendings",stackId:"stats",fill:"dark"===r?"#423929":"#e8e1d3",radius:3}),(0,l.jsx)(L.K,{dataKey:"name",fontSize:12}),(0,l.jsx)(T.B,{fontSize:12,width:20,allowDecimals:!1}),(0,l.jsx)(P.u,{cursor:{fill:"transparent"},content:(0,l.jsx)(Q,{})})]})})]})}let V="-14d";function q(e){let{dailyStats:t}=e,s=(0,i.Z)(null==t?void 0:t.map(e=>e.views)),r=(0,i.Z)(null==t?void 0:t.map(e=>e.selects)),a=0===r?0:(r/s*100).toFixed(2);return(0,l.jsxs)("div",{className:"flex w-full flex-col items-start justify-center space-y-3 md:flex-row md:items-center md:space-x-6 md:space-y-0 xl:justify-start",children:[(0,l.jsxs)(v.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,l.jsxs)(v.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(v.ll,{className:"text-sm font-medium",children:"Acceptance Rate"}),(0,l.jsx)(N.IconActivity,{className:"text-muted-foreground"})]}),(0,l.jsx)(v.aY,{children:(0,l.jsxs)("div",{className:"text-2xl font-bold",children:[a,"%"]})})]}),(0,l.jsxs)(v.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,l.jsxs)(v.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(v.ll,{className:"text-sm font-medium",children:"Total Completions"}),(0,l.jsx)(N.IconCode,{className:"text-muted-foreground"})]}),(0,l.jsx)(v.aY,{children:(0,l.jsx)("div",{className:"text-2xl font-bold",children:m()(s).format("0,0")})})]}),(0,l.jsxs)(v.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 lg:block",children:[(0,l.jsxs)(v.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(v.ll,{className:"text-sm font-medium",children:"Total Acceptances"}),(0,l.jsx)(N.IconCheck,{className:"h-4 w-4 text-muted-foreground"})]}),(0,l.jsx)(v.aY,{children:(0,l.jsx)("div",{className:"text-2xl font-bold",children:r})})]})]})}function F(){let e,t;let s=(0,a.useSearchParams)(),[i]=(0,p.d)(),d=(0,j.UA)(),[o,m]=(0,r.useState)({from:c()().add(parseInt(V,10),"day").toDate(),to:c()().toDate()}),[u,v]=(0,r.useState)("all"),[Z,C]=(0,r.useState)([]),O=d||"true"===s.get("sample"),[{data:E,fetching:R}]=(0,x.aM)({query:y.Cl,variables:{start:c()(o.from).startOf("day").utc().format(),end:c()(o.to).endOf("day").utc().format(),users:"all"===u?void 0:[u]}});if(O){let t=(0,n.Z)({start:o.from,end:o.to||o.from});e=t.map(e=>{let t=[h.SQ.Typescript,h.SQ.Python,h.SQ.Rust],s=f()(c()(e).format("YYYY-MM-DD")+u+Z),l=Math.ceil(20*s()),r=Math.ceil(l/.35);return{start:c()(e).utc().format(),end:c()(e).add(1,"day").utc().format(),completions:r,selects:l,views:r,language:t[l%t.length]}})}else e=null==E?void 0:E.dailyStats.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views,language:e.language}));e=null==e?void 0:e.filter(e=>0===Z.length||Z.includes(e.language));let[{data:A,fetching:z}]=(0,x.aM)({query:y.Y6,variables:{users:"all"===u?void 0:u}});if(O){let e=(0,n.Z)({start:c()().toDate(),end:c()().subtract(365,"days").toDate()});t=e.map(e=>{let t=f()(c()(e).format("YYYY-MM-DD")+u+Z),s=Math.ceil(20*t()),l=s+Math.floor(10*t());return{start:c()(e).format("YYYY-MM-DD[T]HH:mm:ss[Z]"),end:c()(e).add(1,"day").format("YYYY-MM-DD[T]HH:mm:ss[Z]"),completions:l,selects:s,views:l}})}else t=null==A?void 0:A.dailyStatsInPastYear.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects,views:e.views}));return(0,l.jsxs)("div",{className:"mx-auto w-[calc(100vw-2rem)] max-w-5xl md:w-auto",children:[(0,l.jsxs)("div",{className:"mb-4 flex flex-col items-center justify-between gap-y-2 lg:flex-row lg:items-end lg:gap-y-0",children:[(0,l.jsx)(I.b,{className:"mb-0",children:"Statistics around Tabby IDE / Extensions"}),(0,l.jsx)(D.Z,{loading:R,fallback:(0,l.jsx)(M.O,{className:"h-8 w-32"}),children:(0,l.jsxs)(k.Ph,{defaultValue:"all",onValueChange:v,children:[(0,l.jsx)(k.i4,{className:"h-auto w-auto border-none py-0 shadow-none",children:(0,l.jsxs)("div",{className:"flex h-6 items-center",children:[(0,l.jsx)(N.IconUsers,{className:"mr-[0.45rem]"}),(0,l.jsx)("div",{className:"w-[190px] overflow-hidden text-ellipsis text-left",children:(0,l.jsx)(k.ki,{})})]})}),(0,l.jsx)(k.Bw,{align:"end",children:(0,l.jsxs)(k.DI,{children:[(0,l.jsx)(k.Ql,{value:"all",children:"All members"}),i.map(e=>(0,l.jsx)(k.Ql,{value:e.id,children:e.name||e.email},e.id))]})})]})})]}),(0,l.jsx)(D.Z,{loading:z,fallback:(0,l.jsx)(M.O,{className:"mb-8 h-48"}),children:(0,l.jsxs)("div",{className:"mb-8",children:[(0,l.jsx)("h1",{className:"mb-2 text-center text-xl font-semibold md:text-start",children:"Activity"}),(0,l.jsx)(_,{yearlyStats:t})]})}),(0,l.jsx)(D.Z,{loading:R,fallback:(0,l.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,l.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,l.jsx)(M.O,{className:"h-32 flex-1"}),(0,l.jsx)(M.O,{className:"h-32 flex-1"}),(0,l.jsx)(M.O,{className:"h-32 flex-1"})]}),(0,l.jsx)(M.O,{className:"h-56"})]}),children:(0,l.jsxs)("div",{className:"mb-10 flex flex-col gap-y-5",children:[(0,l.jsxs)("div",{className:"-mb-2 flex flex-col items-center justify-between gap-y-1 md:flex-row md:gap-y-0",children:[(0,l.jsx)("h1",{className:"text-xl font-semibold",children:"Usage"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3 md:flex-row md:items-center md:gap-y-0",children:[(0,l.jsxs)(Y.J2,{children:[(0,l.jsx)(Y.xo,{asChild:!0,children:(0,l.jsxs)("div",{className:"flex h-9 w-[240px] items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed md:w-[150px]",children:[(0,l.jsxs)("div",{className:"w-full",children:[0===Z.length&&(0,l.jsx)("p",{className:"w-full overflow-hidden text-ellipsis",children:"All languages"}),1===Z.length&&(0,l.jsx)("p",{className:"w-full overflow-hidden text-ellipsis",children:(0,g.t)(Z[0])}),Z.length>1&&(0,l.jsxs)("span",{className:"px-1",children:[Z.length," selected"]})]}),(0,l.jsx)(N.IconChevronUpDown,{className:"h-3 w-3"})]})}),(0,l.jsx)(Y.yk,{className:"w-[240px] p-0 md:w-[180px]",align:"end",children:(0,l.jsxs)(w.mY,{children:[(0,l.jsx)(w.sZ,{placeholder:"Language"}),(0,l.jsxs)(w.e8,{children:[(0,l.jsx)(w.rb,{children:"No results found."}),(0,l.jsx)(w.fu,{children:Object.entries(h.SQ).sort((e,t)=>t[1]===h.SQ.Other?-1:0).map(e=>{let[t,s]=e,r=Z.includes(s);return(0,l.jsxs)(w.di,{onSelect:()=>{let e=[...Z];if(r){let t=e.findIndex(e=>e===s);-1!==t&&e.splice(t,1)}else e.push(s);C(e)},className:"!pointer-events-auto cursor-pointer !opacity-100",children:[(0,l.jsx)("div",{className:(0,b.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",r?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:(0,l.jsx)(N.IconCheck,{className:(0,b.cn)("h-4 w-4")})}),(0,l.jsx)("span",{children:(0,g.t)(s)})]},s)})}),Z.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.zz,{}),(0,l.jsx)(w.fu,{children:(0,l.jsx)(w.di,{onSelect:()=>C([]),className:"!pointer-events-auto cursor-pointer justify-center text-center !opacity-100",children:"Clear filters"})})]})]})]})})]}),(0,l.jsx)(S.Z,{options:[{label:"Last 7 days",value:"-7d"},{label:"Last 14 days",value:"-14d"},{label:"Last 30 days",value:"-30d"}],defaultValue:V,onSelect:m,hasToday:!0,hasYesterday:!0})]})]}),(0,l.jsx)(q,{dailyStats:e}),(0,l.jsx)(U,{dailyStats:e,dateRange:o})]})})]})}},73051:function(e,t,s){"use strict";s.d(t,{b:function(){return d}});var l=s(36164);s(3546);var r=s(70652),a=s.n(r),n=s(74248),i=s(81565);let d=e=>{let{className:t,externalLink:s,externalLinkText:r="Learn more",children:d}=e;return(0,l.jsx)("div",{className:(0,n.cn)("mb-4 flex items-center gap-4",t),children:(0,l.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[d,!!s&&(0,l.jsxs)(a(),{className:"ml-2 inline-flex cursor-pointer flex-row items-center text-primary hover:underline",href:s,target:"_blank",children:[r,(0,l.jsx)(i.IconExternalLink,{className:"ml-1"})]})]})})}},36065:function(e,t,s){"use strict";s.d(t,{di:function(){return x},e8:function(){return o},fu:function(){return u},mY:function(){return d},rb:function(){return m},sZ:function(){return c},zz:function(){return f}});var l=s(36164),r=s(3546),a=s(4185),n=s(93170),i=s(74248);s(30220);let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)(a.mY,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",s),...r})});d.displayName=a.mY.displayName;let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,l.jsx)(n.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,l.jsx)(a.mY.Input,{ref:t,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",s),...r})]})});c.displayName=a.mY.Input.displayName;let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)(a.mY.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",s),...r})});o.displayName=a.mY.List.displayName;let m=r.forwardRef((e,t)=>(0,l.jsx)(a.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));m.displayName=a.mY.Empty.displayName;let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)(a.mY.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",s),...r})});u.displayName=a.mY.Group.displayName;let f=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)(a.mY.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border",s),...r})});f.displayName=a.mY.Separator.displayName;let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,l.jsx)(a.mY.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",s),...r})});x.displayName=a.mY.Item.displayName},84942:function(e,t,s){"use strict";s.d(t,{J2:function(){return i},i9:function(){return o},tW:function(){return m},xo:function(){return d},xp:function(){return c},yk:function(){return u}});var l=s(36164),r=s(3546),a=s(83299),n=s(74248);let i=a.fC,d=a.xz,c=a.x8,o=a.h_,m=a.ee,u=r.forwardRef((e,t)=>{let{className:s,sideOffset:r=4,...i}=e;return(0,l.jsx)(a.VY,{ref:t,sideOffset:r,className:(0,n.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...i})});u.displayName=a.VY.displayName},80605:function(e,t,s){"use strict";s.d(t,{UA:function(){return m},Uw:function(){return c},c7:function(){return d},jJ:function(){return o},xG:function(){return i}});var l=s(40055),r=s(43240);let a=(0,r.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n"),n=()=>{let[{data:e}]=(0,l.aM)({query:a});return null==e?void 0:e.serverInfo},i=()=>{var e;return null===(e=n())||void 0===e?void 0:e.isChatEnabled},d=()=>{var e;return null===(e=n())||void 0===e?void 0:e.isAdminInitialized},c=()=>{var e;return null===(e=n())||void 0===e?void 0:e.isEmailConfigured},o=()=>{var e;return null===(e=n())||void 0===e?void 0:e.allowSelfSignup},m=()=>{var e;return null===(e=n())||void 0===e?void 0:e.isDemoMode}},11978:function(e,t,s){e.exports=s(77280)},99807:function(e,t,s){"use strict";s.d(t,{T:function(){return n},f:function(){return i}});var l=s(65122),r=s(3546),a=s(72205);let n=(0,r.forwardRef)((e,t)=>(0,r.createElement)(a.WV.span,(0,l.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=n},74630:function(e,t){"use strict";t.Z=function(e){return null==e}}},function(e){e.O(0,[7565,872,55,2178,652,6201,3449,9421,3957,4553,2570,4546,3299,1889,5169,9923,7845,7444,1565,410,716,8610,3375,5289,1744],function(){return e(e.s=81516)}),_N_E=e.O()}]);