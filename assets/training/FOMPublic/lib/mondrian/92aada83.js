"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[725],{4247:(t,e,n)=>{n.d(e,{A:()=>a});var o=n(1182),i=n.n(o),s=n(2806),r=n.n(s)()(i());r.push([t.id,".hXRin0tc .tiptap {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.hXRin0tc .tiptap :is(h1, h2) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.hXRin0tc .tiptap :is(p, h1, h2) {\n  margin: 0;\n}\n\n.hXRin0tc .tiptap strong {\n  font-weight: bold;\n}\n\n.hXRin0tc .tiptap em {\n  font-style: italic;\n}\n\n.hXRin0tc .tiptap s {\n  text-decoration: line-through;\n}\n\n.hXRin0tc .tiptap u {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/styles/tiptap.module.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,0CAA0C;EAC1C,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".textItem :global(.tiptap) {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.textItem :global(.tiptap :is(h1, h2)) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.textItem :global(.tiptap :is(p, h1, h2)) {\n  margin: 0;\n}\n\n.textItem :global(.tiptap strong) {\n  font-weight: bold;\n}\n\n.textItem :global(.tiptap em) {\n  font-style: italic;\n}\n\n.textItem :global(.tiptap s) {\n  text-decoration: line-through;\n}\n\n.textItem :global(.tiptap u) {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]),r.locals={textItem:"hXRin0tc"};const a=r},8725:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Qe});var o=n(6218);function i(t){(0,o.append_styles)(t,"svelte-su3qhz",".mondrian__img-1XHDzr{height:100%;width:100%}")}function s(t){let e,n;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"aria-label",n=t[0].alt),(0,o.attr)(e,"class","mondrian__img-1XHDzr"),(0,o.attr)(e,"role","img")},m(t,n){(0,o.insert)(t,e,n)},p(t,[i]){1&i&&n!==(n=t[0].alt)&&(0,o.attr)(e,"aria-label",n)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function r(t,e,n){let{item:o}=e;return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o]}n(9763);class a extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,r,s,o.safe_not_equal,{item:0},i)}}const l=a;var d=n(7268),c=n(6195);class u{constructor(t){this.parse=t=>this.zod.parse(t),this.is=t=>this.zod.safeParse(t).success,this.assert=t=>{this.parse(t)},this.zod=t}}const p=new u(c.Ay.object({name:c.Ay.enum(["fadeInUp"]),delay:c.Ay.number().min(0),duration:c.Ay.number().positive(),easing:c.Ay.enum(["ease","ease-in","ease-out","ease-in-out","linear","step-start","step-end"])})),m=new u(c.Ay.object({id:c.Ay.string(),path:c.Ay.string(),width:c.Ay.number().optional(),height:c.Ay.number().optional()})),h=new u(c.Ay.object({assetId:c.Ay.string().optional(),color:c.Ay.string().optional(),opacity:c.Ay.number().min(0).max(1).default(1)})),g=new u(h.zod.extend({type:c.Ay.literal("color"),color:h.zod.shape.color.unwrap().default("#e4e4e4")})),f=new u(h.zod.extend({type:c.Ay.literal("image"),assetId:h.zod.shape.assetId.unwrap()})),y=new u(h.zod.extend({type:c.Ay.literal("none")})),_=new u(c.Ay.discriminatedUnion("type",[g.zod,f.zod,y.zod])),v=new u(c.Ay.discriminatedUnion("type",[g.zod,y.zod])),b=c.Ay.object({id:c.Ay.string()}),$=new u(b),A=new u(b.extend({state:c.Ay.string().optional(),visible:c.Ay.boolean().optional()})),w=new u(c.Ay.object({unit:c.Ay.enum(["px","%","auto","fr"]),value:c.Ay.number()})),x=new u(c.Ay.object({top:w.zod.default({value:0,unit:"px"}),left:w.zod.default({value:0,unit:"px"}),bottom:w.zod.default({value:0,unit:"px"}),right:w.zod.default({value:0,unit:"px"})})),k=new u(c.Ay.object({id:c.Ay.string(),type:c.Ay.literal("tiptap")})),C="default",S=c.Ay.object({id:c.Ay.string().default(C),name:c.Ay.string().max(128),children:c.Ay.array(A.zod).optional(),text:k.zod.optional(),x:w.zod.default({value:0,unit:"px"}),y:w.zod.default({value:0,unit:"px"}),position:c.Ay.enum(["absolute"]).default("absolute"),width:w.zod.default({value:100,unit:"%"}),height:w.zod.default({value:100,unit:"%"}),padding:x.zod,fill:_.zod,overlay:v.zod,aspectRatioLocked:c.Ay.boolean().default(!1),clipPath:c.Ay.literal("ellipse").optional(),borderRadius:c.Ay.object({topLeft:w.zod.default({value:0,unit:"px"}),topRight:w.zod.default({value:0,unit:"px"}),bottomRight:w.zod.default({value:0,unit:"px"}),bottomLeft:w.zod.default({value:0,unit:"px"})}),entranceAnimation:p.zod.nullable().optional()}),z=new u(S),E=(new u(S.required({children:!0})),S.partial().required({id:!0,name:!0})),I=new u(E),M=new u(E.required({children:!0})),q="changeState",R="changeVisibility",L=new u(c.Ay.object({id:c.Ay.string(),event:c.Ay.enum(["click","hover"])}).and(c.Ay.discriminatedUnion("action",[c.Ay.object({action:c.Ay.literal(q),targetId:c.Ay.string(),targetState:c.Ay.string().default(C)}),c.Ay.object({action:c.Ay.literal(R),targetId:c.Ay.string(),targetVisibility:c.Ay.boolean()})]))),B=new u(c.Ay.object({id:c.Ay.string(),blockumentId:c.Ay.string(),clonedFromId:c.Ay.string().optional(),parentId:c.Ay.string(),type:c.Ay.string(),name:c.Ay.string().max(128),tagName:c.Ay.enum(["div","figure","figcaption","blockquote"]).default("div"),initialVisible:c.Ay.boolean().default(!0),initialState:c.Ay.string().default(C),states:c.Ay.intersection(c.Ay.object({default:z.zod}),c.Ay.record(I.zod)),triggers:c.Ay.array(L.zod),assets:c.Ay.record(m.zod).default({}).optional()})),N=(new u(c.Ay.object({id:c.Ay.string(),title:c.Ay.string().max(255),children:c.Ay.array($.zod).max(1)})),new u(B.zod.extend({type:c.Ay.literal("group"),states:c.Ay.intersection(c.Ay.object({default:z.zod.required({children:!0})}),c.Ay.record(M.zod.required({children:!0})))}))),W=new u(B.zod.extend({type:c.Ay.literal("image"),alt:c.Ay.string()})),j=new u(B.zod.extend({type:c.Ay.literal("shape")})),T=new u(B.zod.extend({type:c.Ay.literal("text")}));new u(c.Ay.discriminatedUnion("type",[N.zod,W.zod,j.zod,T.zod]));var Z,D;!function(t){t.Blockuments="blockuments",t.Items="items"}(Z||(Z={})),Z.Blockuments,Z.Items,function(t){t.APP="app",t.BLOCKUMENT="blockument",t.COURSE="course"}(D||(D={}));var X=n(4198),H=n(4717),O=n(2359),P=n(31),U=n(2740),F=n(9049);const K=/([a-z%]+)\s*$/i,Y=X.YY.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle"],attributes:{textSize:{default:14,parseHTML(t){const e=t.style.fontSize,n=parseFloat(e);if(isNaN(n))return null;const o=K.exec(e);if(null==o)return null;switch(o[1]){case"rem":return Math.round(10*n);case"px":return Math.round(n);default:return null}},renderHTML:t=>({style:`font-size: ${t.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:t=>({chain:e})=>e().setMark("textStyle",{textSize:t}).run()})}),V=X.YY.create({name:"paragraphStyle",addCommands:()=>({setParagraphStyle:(t,e)=>({dispatch:n,state:o,tr:i})=>{const s=i.selection.$from.blockRange(i.selection.$from);return null!=s&&(null!=n&&(i.doc.nodesBetween(s.start,s.end,((n,s)=>{if(n.type===o.schema.nodes.heading||n.type===o.schema.nodes.paragraph){const r="heading"===t?o.schema.nodes.heading:o.schema.nodes.paragraph,a={...n.attrs};"heading"===t&&"number"==typeof e.level&&(a.level=e.level),i.setNodeMarkup(s,r,a,n.marks)}if(n.type===o.schema.nodes.text){const t=o.schema.marks.textStyle.isInSet(n.marks);i.addMark(s,s+n.nodeSize,o.schema.marks.textStyle.create({...t?.attrs,textSize:e.textSize}))}})),e.bold?i.addMark(s.start,s.end,o.schema.marks.bold.create()):i.removeMark(s.start,s.end,o.schema.marks.bold)),!0)}})});H.A.configure({types:["textStyle"]});const J=[F.A.configure({history:!1,heading:{levels:[1,2]}}),O.A.configure({types:["heading","paragraph"]}),P.A,H.A,V,Y,U.A];(0,X._w)(J);var G=n(1120);const Q=new Map,tt={...(0,G.writable)(Q),add:(t,e)=>(Q.has(t)||Q.set(t,function(t){let e,n,o;t.subscribe((t=>{e=t}));const i=(0,G.writable)(e);i.subscribe((t=>{n=o??e,o=t}));const s={...i,revert(){s.set(n)},reset(){s.set(e)}};return s}(e)),Q.get(t)),get(t){if(!Q.has(t))throw new Error(`No state found for item ${t}`);return Q.get(t)},resetAll(){[...Q.values()].forEach((t=>{t.reset()}))}},et=new Map,nt={...(0,G.writable)(et),add:(t,e)=>(et.set(t,function(t){let e;t.subscribe((t=>{e=t}));const n={...(0,G.writable)(e),show(){n.set(!0)},hide(){n.set(!1)},reset(){n.set(e)}};return n}(e)),et.get(t)),get(t){if(!et.has(t))throw new Error(`No visibility found for item ${t}`);return et.get(t)},resetAll(){[...et.values()].forEach((t=>{t.reset()}))}};function ot(t,e,n){return e.addEventListener(t,n),()=>{e.removeEventListener(t,n)}}matchMedia("(prefers-reduced-motion)");const it=new WeakMap;new IntersectionObserver((t=>{for(const e of t){if(!e.isIntersecting)continue;const t=it.get(e.target);null!=t&&"paused"===t.playState&&t.play()}}),{threshold:.3});const st=({value:t,unit:e})=>{switch(e){case"auto":return"auto";case"px":return t/10+"rem";default:return(({value:t,unit:e})=>`${t}${e}`)({value:t,unit:e})}};function rt(t){(0,o.append_styles)(t,"svelte-bbp0xy",".mondrian__clipped-KfJDq2{border-radius:inherit;display:flex;height:100%;inset:0;position:absolute;width:100%;z-index:-1}")}function at(t){let e,n;const i=t[7].default,s=(0,o.create_slot)(i,t,t[6],null);return{c(){e=(0,o.element)("div"),s&&s.c(),(0,o.attr)(e,"class","mondrian__clipped-KfJDq2"),(0,o.set_style)(e,"clip-path",t[0])},m(t,i){(0,o.insert)(t,e,i),s&&s.m(e,null),n=!0},p(t,[r]){s&&s.p&&(!n||64&r)&&(0,o.update_slot_base)(s,i,t,t[6],n?(0,o.get_slot_changes)(i,t[6],r,null):(0,o.get_all_dirty_from_scope)(t[6]),null),1&r&&(0,o.set_style)(e,"clip-path",t[0])},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function lt(t,e,n){let i,s,r,a,{$$slots:l={},$$scope:d}=e,{item:c}=e;const u=tt.get(c.id);return(0,o.component_subscribe)(t,u,(t=>n(5,a=t))),t.$$set=t=>{"item"in t&&n(2,c=t.item),"$$scope"in t&&n(6,d=t.$$scope)},t.$$.update=()=>{36&t.$$.dirty&&n(4,i=c.states[a]),16&t.$$.dirty&&n(3,s="ellipse"===i.clipPath),8&t.$$.dirty&&n(0,r=s?"ellipse(50% 50%)":void 0)},[r,u,c,s,i,a,d,l]}class dt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,lt,at,o.safe_not_equal,{item:2},rt)}}const ct=dt;function ut(t){(0,o.append_styles)(t,"svelte-1cx7a5",".mondrian__fill-QARoMt{background-position:center;background-size:cover;inset:0;position:absolute;border-radius:inherit}")}function pt(t){let e;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"class","mondrian__fill-QARoMt"),(0,o.set_style)(e,"background-color",t[1]),(0,o.set_style)(e,"background-image",t[2]),(0,o.set_style)(e,"opacity",t[0].opacity)},m(t,n){(0,o.insert)(t,e,n)},p(t,n){2&n&&(0,o.set_style)(e,"background-color",t[1]),4&n&&(0,o.set_style)(e,"background-image",t[2]),1&n&&(0,o.set_style)(e,"opacity",t[0].opacity)},d(t){t&&(0,o.detach)(e)}}}function mt(t){let e,n=(null!=t[1]||null!=t[2])&&pt(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){null!=t[1]||null!=t[2]?n?n.p(t,o):(n=pt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function ht(t,e,n){let{assets:o}=e,{fill:i}=e,s=null,r=null;return t.$$set=t=>{"assets"in t&&n(3,o=t.assets),"fill"in t&&n(0,i=t.fill)},t.$$.update=()=>{if(9&t.$$.dirty)switch(i?.type){case"color":n(1,s=i.color),n(2,r=null);break;case"image":{n(1,s=null);const t=o?.[i.assetId];n(2,r=null==t?null:`url("${function(t){return`assets/${t.path}`}(t)}")`);break}default:n(1,s=n(2,r=null))}},[i,s,r,o]}class gt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,ht,mt,o.safe_not_equal,{assets:3,fill:0},ut)}}const ft=gt;function yt(t){(0,o.append_styles)(t,"svelte-7trzu6",".mondrian__item-16W7_q{position:absolute;z-index:1;height:max-content;width:max-content;user-select:none}.mondrian__item-16W7_q.mondrian__--mon-dragging-11a9Ng{cursor:grab;opacity:0.3}.mondrian__item-16W7_q.mondrian__--root-32F69W{position:relative}.mondrian__item-16W7_q.mondrian__--hidden-XVPSsW{display:none}.mondrian__item-16W7_q.mondrian__--selected-2we_mA{outline:1px solid var(--mon-color-primary-500)}.mondrian__item-16W7_q.mondrian__--dropping-into-2elrd7{outline:1px dashed var(--mon-color-primary-500)}.mondrian__item-16W7_q.mondrian__--hover-UJuRZl{outline:2px solid var(--mon-color-primary-500)}.mondrian__item-16W7_q.mondrian__--disabled-1AiK8n,.mondrian__item-16W7_q.mondrian__--disabled-1AiK8n *{pointer-events:none !important}.mondrian__item-16W7_q.mondrian__--debug-1gUWhN::after{content:attr(data-parent-id) '>' attr(data-item-id);position:absolute;bottom:0;right:0;overflow:hidden;white-space:nowrap;padding:2px 4px;font:1.1rem / 1 monospace;background-color:#f006;backdrop-filter:grayscale(100%) blur(3px);color:#000;border-radius:2px 0 0 0;pointer-events:none}")}const _t=t=>({}),vt=t=>({}),bt=t=>({}),$t=t=>({});function At(t){let e,n;return e=new ft({props:{assets:t[0].assets,fill:t[15]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n[0]&&(o.assets=t[0].assets),32768&n[0]&&(o.fill=t[15]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function wt(t){let e,n;return e=new ft({props:{assets:t[0].assets,fill:t[14]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n[0]&&(o.assets=t[0].assets),16384&n[0]&&(o.fill=t[14]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function xt(t){let e,n,i,s=null!=t[15]&&At(t),r=null!=t[14]&&wt(t);return{c(){s&&s.c(),e=(0,o.space)(),r&&r.c(),n=(0,o.empty)()},m(t,a){s&&s.m(t,a),(0,o.insert)(t,e,a),r&&r.m(t,a),(0,o.insert)(t,n,a),i=!0},p(t,i){null!=t[15]?s?(s.p(t,i),32768&i[0]&&(0,o.transition_in)(s,1)):(s=At(t),s.c(),(0,o.transition_in)(s,1),s.m(e.parentNode,e)):s&&((0,o.group_outros)(),(0,o.transition_out)(s,1,1,(()=>{s=null})),(0,o.check_outros)()),null!=t[14]?r?(r.p(t,i),16384&i[0]&&(0,o.transition_in)(r,1)):(r=wt(t),r.c(),(0,o.transition_in)(r,1),r.m(n.parentNode,n)):r&&((0,o.group_outros)(),(0,o.transition_out)(r,1,1,(()=>{r=null})),(0,o.check_outros)())},i(t){i||((0,o.transition_in)(s),(0,o.transition_in)(r),i=!0)},o(t){(0,o.transition_out)(s),(0,o.transition_out)(r),i=!1},d(t){t&&((0,o.detach)(e),(0,o.detach)(n)),s&&s.d(t),r&&r.d(t)}}}function kt(t){let e,n,i,s,r,a,l,d,c,u,p,m,h,g,f;n=new ct({props:{item:t[0],$$slots:{default:[xt]},$$scope:{ctx:t}}});const y=t[26].before,_=(0,o.create_slot)(y,t,t[32],$t);var v=t[2];function b(t,e){return{props:{item:t[0]}}}v&&(r=(0,o.construct_svelte_component)(v,b(t)));const $=t[26].after,A=(0,o.create_slot)($,t,t[32],vt);let w=[{"data-item-type":l=t[0].type},{"data-item-id":d=t[0].id.slice(0,5)},{"data-parent-id":c=t[0].parentId.slice(0,5)},{"data-mon-item-id":u=t[0].id},{class:"mondrian__item-16W7_q"},{tabindex:"-1"}],x={};for(let t=0;t<w.length;t+=1)x=(0,o.assign)(x,w[t]);return{c(){e=(0,o.element)(t[0].tagName??"div"),(0,o.create_component)(n.$$.fragment),i=(0,o.space)(),_&&_.c(),s=(0,o.space)(),r&&(0,o.create_component)(r.$$.fragment),a=(0,o.space)(),A&&A.c(),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,x),(0,o.toggle_class)(e,"mondrian__--debug-1gUWhN",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-11a9Ng",t[7]),(0,o.toggle_class)(e,"mondrian__--root-32F69W",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-XVPSsW",!t[20]),(0,o.toggle_class)(e,"mondrian__--selected-2we_mA",t[4]),(0,o.toggle_class)(e,"mondrian__--dropping-into-2elrd7",t[8]),(0,o.toggle_class)(e,"mondrian__--hover-UJuRZl",t[5]),(0,o.toggle_class)(e,"mondrian__--disabled-1AiK8n",t[6]),(0,o.set_style)(e,"padding",t[13]),(0,o.set_style)(e,"width",t[19]),(0,o.set_style)(e,"height",t[18]),(0,o.set_style)(e,"border-radius",t[12]),(0,o.set_style)(e,"top",t[16]),(0,o.set_style)(e,"left",t[17]),(0,o.set_style)(e,"z-index",t[11])},m(l,d){(0,o.insert)(l,e,d),(0,o.mount_component)(n,e,null),(0,o.append)(e,i),_&&_.m(e,null),(0,o.append)(e,s),r&&(0,o.mount_component)(r,e,null),(0,o.append)(e,a),A&&A.m(e,null),t[31](e),h=!0,g||(f=[(0,o.listen)(e,"mousedown",t[27]),(0,o.listen)(e,"click",t[28]),(0,o.listen)(e,"keydown",t[29]),(0,o.listen)(e,"keyup",t[30]),(0,o.action_destroyer)(p=t[9].call(null,e,{itemId:t[0].id,enabled:!t[6]})),(0,o.action_destroyer)(m=t[3].call(null,e,t[0]))],g=!0)},p(t,i){const s={};if(1&i[0]&&(s.item=t[0]),49153&i[0]|2&i[1]&&(s.$$scope={dirty:i,ctx:t}),n.$set(s),_&&_.p&&(!h||2&i[1])&&(0,o.update_slot_base)(_,y,t,t[32],h?(0,o.get_slot_changes)(y,t[32],i,bt):(0,o.get_all_dirty_from_scope)(t[32]),$t),4&i[0]&&v!==(v=t[2])){if(r){(0,o.group_outros)();const t=r;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}v?(r=(0,o.construct_svelte_component)(v,b(t)),(0,o.create_component)(r.$$.fragment),(0,o.transition_in)(r.$$.fragment,1),(0,o.mount_component)(r,e,a)):r=null}else if(v){const e={};1&i[0]&&(e.item=t[0]),r.$set(e)}A&&A.p&&(!h||2&i[1])&&(0,o.update_slot_base)(A,$,t,t[32],h?(0,o.get_slot_changes)($,t[32],i,_t):(0,o.get_all_dirty_from_scope)(t[32]),vt),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,x=(0,o.get_spread_update)(w,[(!h||1&i[0]&&l!==(l=t[0].type))&&{"data-item-type":l},(!h||1&i[0]&&d!==(d=t[0].id.slice(0,5)))&&{"data-item-id":d},(!h||1&i[0]&&c!==(c=t[0].parentId.slice(0,5)))&&{"data-parent-id":c},(!h||1&i[0]&&u!==(u=t[0].id))&&{"data-mon-item-id":u},{class:"mondrian__item-16W7_q"},{tabindex:"-1"}])),p&&(0,o.is_function)(p.update)&&65&i[0]&&p.update.call(null,{itemId:t[0].id,enabled:!t[6]}),m&&(0,o.is_function)(m.update)&&1&i[0]&&m.update.call(null,t[0]),(0,o.toggle_class)(e,"mondrian__--debug-1gUWhN",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-11a9Ng",t[7]),(0,o.toggle_class)(e,"mondrian__--root-32F69W",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-XVPSsW",!t[20]),(0,o.toggle_class)(e,"mondrian__--selected-2we_mA",t[4]),(0,o.toggle_class)(e,"mondrian__--dropping-into-2elrd7",t[8]),(0,o.toggle_class)(e,"mondrian__--hover-UJuRZl",t[5]),(0,o.toggle_class)(e,"mondrian__--disabled-1AiK8n",t[6]),8192&i[0]&&(0,o.set_style)(e,"padding",t[13]),524288&i[0]&&(0,o.set_style)(e,"width",t[19]),262144&i[0]&&(0,o.set_style)(e,"height",t[18]),4096&i[0]&&(0,o.set_style)(e,"border-radius",t[12]),65536&i[0]&&(0,o.set_style)(e,"top",t[16]),131072&i[0]&&(0,o.set_style)(e,"left",t[17]),2048&i[0]&&(0,o.set_style)(e,"z-index",t[11])},i(t){h||((0,o.transition_in)(n.$$.fragment,t),(0,o.transition_in)(_,t),r&&(0,o.transition_in)(r.$$.fragment,t),(0,o.transition_in)(A,t),h=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),(0,o.transition_out)(_,t),r&&(0,o.transition_out)(r.$$.fragment,t),(0,o.transition_out)(A,t),h=!1},d(i){i&&(0,o.detach)(e),(0,o.destroy_component)(n),_&&_.d(i),r&&(0,o.destroy_component)(r),A&&A.d(i),t[31](null),g=!1,(0,o.run_all)(f)}}}function Ct(t){let e,n,i=t[0].tagName??"div",s=(t[0].tagName??"div")&&kt(t);return{c(){s&&s.c(),e=(0,o.empty)()},m(t,i){s&&s.m(t,i),(0,o.insert)(t,e,i),n=!0},p(t,n){t[0].tagName??"div"?i?(0,o.safe_not_equal)(i,t[0].tagName??"div")?(s.d(1),s=kt(t),i=t[0].tagName??"div",s.c(),s.m(e.parentNode,e)):s.p(t,n):(s=kt(t),i=t[0].tagName??"div",s.c(),s.m(e.parentNode,e)):i&&(s.d(1),s=null,i=t[0].tagName??"div")},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function St(t,e,n){let i,s,r,a,l,d,c,u,p,m,h,g,{$$slots:f={},$$scope:y}=e,{item:_}=e,{idx:v=0}=e,{isRoot:b=!1}=e,{ItemComponent:$}=e,{bindTriggers:A}=e,{isSelected:w=!1}=e,{isHovered:x=!1}=e,{isDisabled:k=!1}=e,{isDragging:C=!1}=e,{isDroppingInto:S=!1}=e,{hoverItem:z=(()=>{})}=e;const E=tt.get(_.id);(0,o.component_subscribe)(t,E,(t=>n(25,h=t)));const I=nt.get(_.id);let M;return(0,o.component_subscribe)(t,I,(t=>n(20,g=t))),t.$$set=t=>{"item"in t&&n(0,_=t.item),"idx"in t&&n(23,v=t.idx),"isRoot"in t&&n(1,b=t.isRoot),"ItemComponent"in t&&n(2,$=t.ItemComponent),"bindTriggers"in t&&n(3,A=t.bindTriggers),"isSelected"in t&&n(4,w=t.isSelected),"isHovered"in t&&n(5,x=t.isHovered),"isDisabled"in t&&n(6,k=t.isDisabled),"isDragging"in t&&n(7,C=t.isDragging),"isDroppingInto"in t&&n(8,S=t.isDroppingInto),"hoverItem"in t&&n(9,z=t.hoverItem),"$$scope"in t&&n(32,y=t.$$scope)},t.$$.update=()=>{33554433&t.$$.dirty[0]&&n(24,i=function(t,e,n=Object.keys(t.states.default)){const o=t.states.default,i=structuredClone(t.states[e]);return n.reduce(((t,e)=>(t[e]||(t[e]=structuredClone(o[e])),t)),i)}(_,h)),16777216&t.$$.dirty[0]&&n(19,s=st(i.width)),16777216&t.$$.dirty[0]&&n(18,r=st(i.height)),16777216&t.$$.dirty[0]&&n(17,a=st(i.x)),16777216&t.$$.dirty[0]&&n(16,l=st(i.y)),16777216&t.$$.dirty[0]&&n(15,d=i.fill),16777216&t.$$.dirty[0]&&n(14,c=i.overlay),16777216&t.$$.dirty[0]&&n(13,u=[i.padding.top,i.padding.right,i.padding.bottom,i.padding.left].map(st).join(" ")),16777216&t.$$.dirty[0]&&n(12,p=st(i.borderRadius.topLeft)),8388608&t.$$.dirty[0]&&n(11,m=9999-v)},[_,b,$,A,w,x,k,C,S,z,M,m,p,u,c,d,l,a,r,s,g,E,I,v,i,h,f,function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(t){o.binding_callbacks[t?"unshift":"push"]((()=>{M=t,n(10,M)}))},y]}class zt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,St,Ct,o.safe_not_equal,{item:0,idx:23,isRoot:1,ItemComponent:2,bindTriggers:3,isSelected:4,isHovered:5,isDisabled:6,isDragging:7,isDroppingInto:8,hoverItem:9},yt,[-1,-1])}}const Et=zt,It=[["white",16777215],["grey-200",16316664],["grey-300",15658734],["grey-400",15000804],["grey-500",13421772],["grey-600",9408399],["grey-700",7368816],["grey-800",2631720],["black",0],["primary-100",15593471],["primary-300",10200317],["primary-500",4874236],["primary-700",2569145],["primary-900",527710]],Mt=It.map((([t,e])=>[t,[e>>16&255,e>>8&255,255&e]])),qt=new Array;for(const[t,e]of It)qt.push(`--mon-color-${t}: #${e.toString(16).padStart(6,"0")}`);for(const[t,e]of Mt)qt.push(`--mon-color-${t}-rgb: ${e.join(", ")}`);(new CSSStyleSheet).insertRule(`:root { ${qt.join("; ")} }`),o.SvelteComponent;var Rt=n(2604),Lt=n.n(Rt),Bt=n(101),Nt=n.n(Bt),Wt=n(5863),jt=n.n(Wt),Tt=n(3124),Zt=n.n(Tt),Dt=n(6896),Xt=n.n(Dt),Ht=n(9917),Ot=n.n(Ht),Pt=n(4247),Ut={};Ut.styleTagTransform=Ot(),Ut.setAttributes=Zt(),Ut.insert=jt().bind(null,"head"),Ut.domAPI=Nt(),Ut.insertStyleElement=Xt(),Lt()(Pt.A,Ut);const Ft=Pt.A&&Pt.A.locals?Pt.A.locals:void 0;var Kt=n(3948);const Yt=function(){const t=(0,G.writable)({blockuments:{},items:{},tiptap:{}}),{subscribe:e,set:n,update:o}=t,i=new Map;return{subscribe:e,set:n,update:o,addManifest:(t,e)=>{i.set(t,e),s()},removeManifest:t=>{i.delete(t),s()}};function s(){n(function(...t){const e={};for(const n of t)for(const[t,o]of Object.entries(n))e[t]=Object.assign({},e[t],o);return e}(...i.values()))}}();function Vt(t){let e,n,i,s=(0,Kt.Z)(t[0],J)+"";return{c(){e=(0,o.element)("div"),n=(0,o.element)("div"),(0,o.attr)(n,"class","tiptap"),(0,o.attr)(e,"class",i=Ft.textItem)},m(t,i){(0,o.insert)(t,e,i),(0,o.append)(e,n),n.innerHTML=s},p(t,e){1&e&&s!==(s=(0,Kt.Z)(t[0],J)+"")&&(n.innerHTML=s)},d(t){t&&(0,o.detach)(e)}}}function Jt(t){let e,n=void 0!==t[0]&&Vt(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){void 0!==t[0]?n?n.p(t,o):(n=Vt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function Gt(t,e,n){let i,s,r,a,l;(0,o.component_subscribe)(t,Yt,(t=>n(5,a=t)));let{item:d}=e;const c=tt.get(d.id);return(0,o.component_subscribe)(t,c,(t=>n(6,l=t))),t.$$set=t=>{"item"in t&&n(2,d=t.item)},t.$$.update=()=>{68&t.$$.dirty&&n(4,i=d.states[l]),16&t.$$.dirty&&n(3,s=i.text.id),40&t.$$.dirty&&n(0,r=a.tiptap?.[s])},[r,c,d,s,i,a,l]}class Qt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,Gt,Jt,o.safe_not_equal,{item:2})}}const te=Qt;function ee(t){(0,o.append_styles)(t,"svelte-1vwx6yd",".mondrian__surface-3PSuzl{width:100%;position:relative}")}function ne(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function oe(t,e){let n,i,s,r;var a=e[0];function l(t,e){return{props:{idx:t[7],itemId:t[5].id}}}return a&&(i=(0,o.construct_svelte_component)(a,l(e))),{key:t,first:null,c(){n=(0,o.empty)(),i&&(0,o.create_component)(i.$$.fragment),s=(0,o.empty)(),this.first=n},m(t,e){(0,o.insert)(t,n,e),i&&(0,o.mount_component)(i,t,e),(0,o.insert)(t,s,e),r=!0},p(t,n){if(e=t,1&n&&a!==(a=e[0])){if(i){(0,o.group_outros)();const t=i;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}a?(i=(0,o.construct_svelte_component)(a,l(e)),(0,o.create_component)(i.$$.fragment),(0,o.transition_in)(i.$$.fragment,1),(0,o.mount_component)(i,s.parentNode,s)):i=null}else if(a){const t={};2&n&&(t.idx=e[7]),2&n&&(t.itemId=e[5].id),i.$set(t)}},i(t){r||(i&&(0,o.transition_in)(i.$$.fragment,t),r=!0)},o(t){i&&(0,o.transition_out)(i.$$.fragment,t),r=!1},d(t){t&&((0,o.detach)(n),(0,o.detach)(s)),i&&(0,o.destroy_component)(i,t)}}}function ie(t){let e,n,i=[],s=new Map,r=(0,o.ensure_array_like)(t[1].children);const a=t=>t[5].id;for(let e=0;e<r.length;e+=1){let n=ne(t,r,e),o=a(n);s.set(o,i[e]=oe(o,n))}return{c(){e=(0,o.element)("div");for(let t=0;t<i.length;t+=1)i[t].c();(0,o.attr)(e,"class","mondrian__surface-3PSuzl")},m(t,s){(0,o.insert)(t,e,s);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null);n=!0},p(t,[n]){3&n&&(r=(0,o.ensure_array_like)(t[1].children),(0,o.group_outros)(),i=(0,o.update_keyed_each)(i,n,a,1,t,r,s,e,o.outro_and_destroy_block,oe,null,ne),(0,o.check_outros)())},i(t){if(!n){for(let t=0;t<r.length;t+=1)(0,o.transition_in)(i[t]);n=!0}},o(t){for(let t=0;t<i.length;t+=1)(0,o.transition_out)(i[t]);n=!1},d(t){t&&(0,o.detach)(e);for(let t=0;t<i.length;t+=1)i[t].d()}}}function se(t,e,n){let i,s,{item:r}=e,{Item:a=pe}=e;const l=tt.get(r.id);return(0,o.component_subscribe)(t,l,(t=>n(4,s=t))),t.$$set=t=>{"item"in t&&n(3,r=t.item),"Item"in t&&n(0,a=t.Item)},t.$$.update=()=>{24&t.$$.dirty&&n(1,i=r.states[s])},[a,i,l,r,s]}class re extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,se,ie,o.safe_not_equal,{item:3,Item:0},ee)}}const ae=re,le=(t,e)=>{function n(n,o={}){e.triggers.filter((t=>t.event===n)).forEach((n=>{!function(t,e,n){e.dispatchEvent(new CustomEvent("trigger",{detail:n,bubbles:!0}))}(0,t,{itemId:e.id,triggerId:n.id,...o})}))}const o=[...new Set(e.triggers.map((t=>t.event)))].map((e=>"hover"===e?[ot("mouseenter",t,(()=>{n(e,{hovered:!0})})),ot("mouseleave",t,(()=>{n(e,{hovered:!1})}))]:ot(e,t,(()=>{n(e)})))).flat(2).filter(Boolean);return{destroy(){o.forEach((t=>{t()}))}}};function de(t){let e,n;return e=new Et({props:{item:t[2],idx:t[0],isRoot:t[1],ItemComponent:t[3],bindTriggers:le}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,[n]){const o={};4&n&&(o.item=t[2]),1&n&&(o.idx=t[0]),2&n&&(o.isRoot=t[1]),8&n&&(o.ItemComponent=t[3]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function ce(t,e,n){let i,s,r;(0,o.component_subscribe)(t,Yt,(t=>n(5,r=t)));let{itemId:a}=e,{idx:d=0}=e,{isRoot:c=!1}=e;return t.$$set=t=>{"itemId"in t&&n(4,a=t.itemId),"idx"in t&&n(0,d=t.idx),"isRoot"in t&&n(1,c=t.isRoot)},t.$$.update=()=>{48&t.$$.dirty&&n(2,i=r.items[a]),4&t.$$.dirty&&n(3,s=(t=>({image:()=>l,text:()=>te,group:()=>ae,shape:()=>null}[t.type]()))(i))},[d,c,i,s,a,r]}class ue extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,ce,de,o.safe_not_equal,{itemId:4,idx:0,isRoot:1})}}const pe=ue;var me=n(5608),he=n(251);function ge(t,e){return[...t.querySelectorAll(e)]}function fe(t,e,n,o){return e.addEventListener(t,n,o),()=>{e.removeEventListener(t,n,o)}}const ye={shift:!1,meta:!1,alt:!1,key:void 0,target:void 0,get combo(){return[ye.meta&&"Meta",ye.alt&&"Alt",ye.shift&&"Shift",ye.key].filter(Boolean).join("+")}},_e=((0,G.readable)(ye,(t=>{return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)};function e(t){"Shift"===t.key?ye.shift=!0:"Alt"===t.key?ye.alt=!0:"Meta"===t.key?ye.meta=!0:ye.key=t.key,ye.target=t.target,o()}function n(t){"Shift"===t.key?ye.shift=!1:"Alt"===t.key?ye.alt=!1:"Meta"===t.key?ye.meta=!1:ye.key=void 0,ye.target=t.target,o()}function o(){t(ye)}})),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1}),ve=((0,G.readable)(_e,(t=>{return window.addEventListener("mousedown",e),window.addEventListener("mousemove",o),window.addEventListener("mouseup",n),function(){window.removeEventListener("mousedown",e),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",n)};function e(t){_e.down=!0,_e.downX=_e.x=t.clientX,_e.downY=_e.y=t.clientY,_e.target=t.target,i()}function n(){_e.down=!1,_e.downX=_e.x=_e.downY=_e.y=-1,_e.target=void 0,i()}function o(t){_e.x=t.x,_e.y=t.y,i()}function i(){t(_e)}})),"mondrian-suspense");var be,$e,Ae=n(5942);class we extends he.WF{get $form(){return(0,me.gn)(this,$e,"f")?.form??null}get $slotted(){return this.$$$("*")}constructor(){super(),be.set(this,[]),$e.set(this,void 0),this.$=t=>function(t,e){return t.querySelector(e)}(this.shadowRoot,t),this.$$=t=>ge(this.shadowRoot,t),this.$$$=(t,e)=>{const n=e?`slot[name="${e}"]`:"slot:not([name])",o=this.$(n);return o?o.assignedElements({flatten:!0}).map((e=>e.matches(t)?[e]:ge(e,t))).flat():(console.warn(`Could not query ${n} within ${this.tagName.toLowerCase()} because it does not exist.`),[])},this.hasSlotted=t=>this.$slotted.some((e=>e.contains(t))),this.hasWithin=t=>this.contains(t)||this.hasSlotted(t),this.unbindEvents=()=>{(0,me.gn)(this,be,"f").forEach((t=>t()))},this.collectOff=t=>{(0,me.gn)(this,be,"f").push(t)},this.on=(t,e,n)=>{const o=fe(t,this,e,n);return this.collectOff(o),o},this.dispatch=(t,e={})=>function(t,e,n={},o={}){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,...o,detail:n}))}(this,t,e),this.constructor.formAssociated&&(0,me.GG)(this,$e,this.attachInternals(),"f")}connectedCallback(){super.connectedCallback(),this.bindEvents()}disconnectedCallback(){super.disconnectedCallback(),this.unbindEvents()}bindEvents(){}}be=new WeakMap,$e=new WeakMap,we.shadowRootOptions={...he.WF.shadowRootOptions,delegatesFocus:!0};const xe=he.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: block;
    width: var(--width, fit-content);
  }

  :host([block]) {
    --width: 100%;
  }

  :host([size='s']) {
    --height: 2.4rem;
    --font-size: 1.2rem;
  }

  :host([size='m']) {
    --height: 3.2rem;
    --font-size: 1.4rem;
  }

  :host([kind='primary']) {
    --background-color: var(--mon-color-primary);
    --color: var(--mon-color-white);
  }

  :host([kind='primary-ghost']) {
    --border-color: var(--mon-color-primary);
    --color: var(--mon-color-primary);
  }

  :host([kind='secondary']) {
    --background-color: var(--mon-color-black);
    --color: var(--mon-color-white);
  }

  :host([kind='secondary-ghost']) {
    --border-color: var(--mon-color-grey-700);
    --color: var(--mon-color-black);
  }

  :host([kind='danger']) {
    --background-color: var(--mon-color-danger);
    --color: var(--mon-color-white);
  }

  :host([kind='danger-ghost']) {
    --border-color: var(--mon-color-danger);
    --color: var(--mon-color-danger);
  }

  :host .button {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    border: 1px solid var(--border-color, transparent);
    background-color: var(--background-color, transparent);
    color: var(--color, var(--mon-color-black));
    height: var(--height, auto);
    font-size: var(--font-size, auto);
    font-weight: 600;
    white-space: nowrap;
    border-radius: var(--height, 0);
    padding: 0 1.25em;
    transition: all ease-in-out 0.1s;
  }
`;let ke=class extends we{constructor(){super(...arguments),this.kind="primary",this.size="m",this.type="button",this.href=void 0,this.block=!1}get submits(){return"submit"===this.type}bindEvents(){this.on("click",(()=>{this.submits&&this.$form?.requestSubmit()}))}render(){return this.href?he.qy`
        <a
          class="button"
          href=${this.href}
        >
          <slot />
        </a>
      `:he.qy`
      <button
        class="button"
        type=${this.type}
      >
        <slot />
      </button>
    `}};ke.formAssociated=!0,ke.styles=xe,(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],ke.prototype,"kind",void 0),(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],ke.prototype,"size",void 0),(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],ke.prototype,"type",void 0),(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],ke.prototype,"href",void 0),(0,me.Cg)([(0,Ae.MZ)({type:Boolean,reflect:!0})],ke.prototype,"block",void 0),ke=(0,me.Cg)([(0,Ae.EM)("mon-button")],ke);const Ce=he.AH`
  :host {
    cursor: pointer;
    display: flex;
    gap: var(--mon-spacing);
    padding: var(--mon-spacing) var(--mon-spacing-2);
    background-color: var(--mon-color-white);
  }

  :host([selected]) {
    background-color: var(--mon-color-primary-100);
  }

  slot[name='icon'] {
    --_icon-size: var(--mon-menu-item-icon-size, 1.6rem);
    --mon-icon-size: var(--_icon-size);
    flex: none;
    width: var(--_icon-size);
    height: var(--_icon-size);
  }

  .content {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;let Se=class extends we{constructor(){super(...arguments),this.selected=!1,this.bindEvents=()=>{this.on("mouseenter",(()=>{this.dispatch("hover",{value:this.value,hovered:!0})})),this.on("mouseleave",(()=>{this.dispatch("hover",{value:this.value,hovered:!1})}))}}render(){return he.qy`
      <slot name="icon"></slot>
      <span class="content">
        <slot></slot>
      </span>
    `}};Se.formAssociated=!0,Se.styles=Ce,(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],Se.prototype,"name",void 0),(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],Se.prototype,"value",void 0),(0,me.Cg)([(0,Ae.MZ)({type:Boolean,reflect:!0})],Se.prototype,"selected",void 0),(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],Se.prototype,"for",void 0),Se=(0,me.Cg)([(0,Ae.EM)("mon-menu-item")],Se);const ze=he.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    --icon-color: var(--mon-color-grey-700);
    display: block;
    position: relative;
    max-width: 100%;
  }

  :host(:is(:hover, :focus-within)) {
    --icon-color: var(--mon-color-primary-500);
  }

  .hidden {
    display: none;
  }

  .trigger {
    cursor: pointer;
    width: 100%;
    display: flex;
    gap: var(--mon-spacing);
    border: 1px solid var(--mon-color-border);
    border-radius: var(--mon-radius);
    background: var(--mon-color-white);
    padding: var(--mon-spacing) var(--mon-spacing-2);
    text-align: left;
  }

  .trigger-content {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .trigger-icon {
    width: 12px;
    height: 12px;
    fill: var(--icon-color);
  }

  .menu {
    --inset: calc(100% + var(--mon-spacing-h)) 0 auto 0;
  }
`;let Ee=class extends we{constructor(){super(...arguments),this.open=!1,this.value=null,this.onSubmit=t=>{this.value=t.detail.value,this.open=!1},this.onClickOutside=t=>{this.hasWithin(t.detail.$target)||(this.open=!1)},this.onClickTrigger=()=>{this.open=!this.open},this.onKeyUp=t=>{"ArrowDown"===t.key&&(t.preventDefault(),this.open=!0)},this.onSlotChange=()=>{this.value||(this.value=this.$selected?.value??null)},this.renderLabel=()=>{if(this.value)return this.$$$(`mon-menu-item[value="${this.value}"]`)[0]?.innerText}}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}renderTrigger(){const t=this.renderLabel()??he.qy`<slot name="placeholder">Choose an item…</slot>`;return he.qy`
      <button
        @click=${this.onClickTrigger}
        @keyup=${this.onKeyUp}
        type="button"
        class="trigger"
      >
        <span class="trigger-content"> ${t} </span>
        <span class="trigger-icon">
          <!-- TODO: Stop using '<i />'-based icons; use svgs instead. -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </span>
      </button>
    `}renderMenu(){return this.open?he.qy`
      <mon-menu
        class="menu"
        name=${this.name}
        floating
        autofocusit
        @clickoutside=${this.onClickOutside}
        @mon-menu:submit=${this.onSubmit}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </mon-menu>
    `:he.qy`
        <slot
          class="hidden"
          @slotchange=${this.onSlotChange}
        ></slot>
      `}render(){return he.qy` ${this.renderTrigger()} ${this.renderMenu()} `}};var Ie;Ee.styles=ze,(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],Ee.prototype,"name",void 0),(0,me.Cg)([(0,Ae.MZ)({type:Boolean,reflect:!0})],Ee.prototype,"open",void 0),(0,me.Cg)([(0,Ae.wk)()],Ee.prototype,"value",void 0),Ee=(0,me.Cg)([(0,Ae.EM)("mon-dropdown")],Ee);const Me=he.AH`
  * {
    box-sizing: border-box;
  }

  :host {
    background: var(--mon-color-white);
    border-radius: var(--mon-radius);
    padding: var(--mon-spacing) 0;
  }

  :host([bordered]) {
    border: 1px solid var(--mon-color-border);
  }

  :host([floating]) {
    position: var(--position, absolute);
    inset: var(--inset, 100% 0 auto 0);
    z-index: 99999;
  }

  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;let qe=class extends we{constructor(){super(...arguments),this.bordered=!0,this.floating=!1,this.autofocusit=!1,this.value=null,this.pressing=!1,this.bindEvents=()=>{this.on("change",this.onChange),this.on("click",this.onClick),this.on("keydown",this.onKeydown),this.on("keyup",this.onKeyup),this.on("mouseover",this.onMouseover),this.collectOff(fe("mousedown",window,(t=>{t.target instanceof HTMLElement&&!this.hasWithin(t.target)&&this.dispatch("clickoutside",{$target:t.target})})))},this.submit=()=>{this.dispatch("mon-menu:submit",{name:this.name,value:this.value})},this.choose=t=>{const e=t.closest("label")?.querySelector("input");e&&(e.checked=!0,e.focus(),e.dispatchEvent(new Event("change",{bubbles:!0})))},this.focusFirstApplicableItem=()=>{const t=this.$selected??this.$$$("mon-menu-item")[0];t&&this.choose(t)},this.onMouseover=t=>{t.target instanceof Se&&this.choose(t.target)},this.onChange=t=>{this.value=t.target.value??null,this.$slotted.forEach((t=>{const e=t.querySelector("mon-menu-item");e&&e.toggleAttribute("selected",e.value===this.value)}))},this.onClick=t=>{!this.pressing&&t.target instanceof HTMLInputElement&&requestAnimationFrame((()=>{this.submit()}))},this.onKeyup=t=>{const{key:e}=t;"Enter"!==e&&" "!==e||this.submit(),this.pressing=!1},this.onKeydown=()=>{this.pressing=!0},this.onSlotChange=()=>{this.wrapSlots(),this.autofocusit&&this.focusFirstApplicableItem()},this.wrapSlots=()=>{this.$slotted.forEach((t=>{if(!(t instanceof Se))return;const e=document.createElement("div"),n=document.createElement("li");t.replaceWith(e),(0,he.XX)(he.qy`
          <label ?for=${t.for}>
            ${(0,me.gn)(this,Ie,"f").call(this,t)} ${t}
          </label>
        `,n),e.replaceWith(n)}))},Ie.set(this,(t=>null!=t.for?he.qy``:he.qy`
      <input
        type="radio"
        role="menuitem"
        checked=${t.selected}
        name=${this.name}
        value=${t.value}
        class="mon-visually-hidden"
      />
    `))}get $selected(){return this.$$$("mon-menu-item[selected]")[0]}render(){return he.qy`
      <ul
        aria-label=${this.getAttribute("aria-label")}
        class="list"
        role="menu"
      >
        <slot @slotchange=${this.onSlotChange}>
          <li>Nothing to see here…</li>
        </slot>
      </ul>
    `}};function Re(t){(0,o.append_styles)(t,"svelte-1ooljvd",".mondrian__suspense-3tgPBN.mondrian__--loading-3irTkJ{visibility:hidden}")}Ie=new WeakMap,qe.styles=Me,(0,me.Cg)([(0,Ae.MZ)({type:String,reflect:!0})],qe.prototype,"name",void 0),(0,me.Cg)([(0,Ae.MZ)({type:Boolean,reflect:!0})],qe.prototype,"bordered",void 0),(0,me.Cg)([(0,Ae.MZ)({type:Boolean,reflect:!0})],qe.prototype,"floating",void 0),(0,me.Cg)([(0,Ae.MZ)({type:Boolean,reflect:!0})],qe.prototype,"autofocusit",void 0),qe=(0,me.Cg)([(0,Ae.EM)("mon-menu")],qe),n(2466),o.SvelteComponent,n(9777),o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,n(2732),o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent,o.SvelteComponent;const Le=t=>({isLoading:1&t}),Be=t=>({isLoading:t[0]});function Ne(t){let e,n;const i=t[2].default,s=(0,o.create_slot)(i,t,t[1],Be);return{c(){e=(0,o.element)("div"),s&&s.c(),(0,o.attr)(e,"class","mondrian__suspense-3tgPBN"),(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},m(t,i){(0,o.insert)(t,e,i),s&&s.m(e,null),n=!0},p(t,[r]){s&&s.p&&(!n||3&r)&&(0,o.update_slot_base)(s,i,t,t[1],n?(0,o.get_slot_changes)(i,t[1],r,Le):(0,o.get_all_dirty_from_scope)(t[1]),Be),(!n||1&r)&&(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},i(t){n||((0,o.transition_in)(s,t),n=!0)},o(t){(0,o.transition_out)(s,t),n=!1},d(t){t&&(0,o.detach)(e),s&&s.d(t)}}}function We(t,e,n){let{$$slots:o={},$$scope:i}=e;const s=function(){const t=new Set;return(0,d.setContext)(ve,t),t}();let r=!0;return(0,d.onMount)((()=>{Promise.all(s).then((()=>{n(0,r=!1)}))})),t.$$set=t=>{"$$scope"in t&&n(1,i=t.$$scope)},[r,i,o]}class je extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,We,Ne,o.safe_not_equal,{},Re)}}const Te=je,Ze={[q](t,e,n,o){const i="self"===t.targetId?n:o[t.targetId];!1===e.hovered?tt.get(i.id)?.revert():tt.get(i.id)?.set(t.targetState)},[R](t,e,n,o){const i="self"===t.targetId?n:o[t.targetId];!1===e.hovered?nt.get(i.id)?.set(!t.targetVisibility):nt.get(i.id)?.set(t.targetVisibility)}},De=(t,e)=>{const n=ot("trigger",t,(t=>{const{itemId:n,triggerId:o,...i}=t.detail,s=e[n];if(!s)throw new Error(`Could not execute trigger ${o} on item ${n} because the item could not be found.`);const r=s?.triggers.find((t=>t.id===o));if(!r)throw new Error(`Could not execute trigger ${o} on item ${n} because the trigger could not be found.`);const a=Ze[r.action];if(!a)throw new Error(`Could not execute trigger ${o} on item ${n} because an appropriate handler for its '${r.action}' action could not be found.`);a(r,i,s,e)}));return{destroy(){n()}}};function Xe(t){(0,o.append_styles)(t,"svelte-cm9a2g",".mondrian__preview-NTLm89{display:flex;justify-content:center;position:relative;z-index:0}")}function He(t){let e,n;return e=new Te({props:{$$slots:{default:[Pe]},$$scope:{ctx:t}}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};128&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function Oe(t){let e,n,i,s;return{c(){e=(0,o.element)("div"),n=(0,o.text)("Block "),i=(0,o.text)(t[0]),s=(0,o.text)(" could not be loaded")},m(t,r){(0,o.insert)(t,e,r),(0,o.append)(e,n),(0,o.append)(e,i),(0,o.append)(e,s)},p(t,e){1&e&&(0,o.set_data)(i,t[0])},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function Pe(t){let e,n,i,s,r,a;return n=new pe({props:{itemId:t[6].id,isRoot:!0}}),{c(){e=(0,o.element)("div"),(0,o.create_component)(n.$$.fragment),(0,o.attr)(e,"class","mondrian__preview-NTLm89")},m(l,d){(0,o.insert)(l,e,d),(0,o.mount_component)(n,e,null),s=!0,r||(a=(0,o.action_destroyer)(i=De.call(null,e,t[2])),r=!0)},p:o.noop,i(t){s||((0,o.transition_in)(n.$$.fragment,t),s=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),s=!1},d(t){t&&(0,o.detach)(e),(0,o.destroy_component)(n),r=!1,a()}}}function Ue(t){let e,n,i,s;const r=[Oe,He],a=[];function l(t,e){return 1===e?function(t){const e=t.slice(),n=e[2][e[3]];return e[6]=n,e}(t):t}return e=function(t,e){return void 0===t[1]||void 0===t[3]?0:1}(t),n=a[e]=r[e](l(t,e)),{c(){n.c(),i=(0,o.empty)()},m(t,n){a[e].m(t,n),(0,o.insert)(t,i,n),s=!0},p(t,[o]){n.p(l(t,e),o)},i(t){s||((0,o.transition_in)(n),s=!0)},o(t){(0,o.transition_out)(n),s=!1},d(t){t&&(0,o.detach)(i),a[e].d(t)}}}function Fe(t,e,n){let{manifest:o}=e,{blockumentId:i}=e;const s=Symbol("LearnComponent"),r=o.blockuments?.[i],a=o.items??{},l=r?.children[0]?.id;return Yt.addManifest(s,o),(0,d.setContext)("isLearn",!0),tt.resetAll(),nt.resetAll(),Object.values(a).forEach((t=>{tt.add(t.id,(0,G.readable)(t.initialState)),nt.add(t.id,(0,G.readable)(t.initialVisible))})),(0,d.onDestroy)((()=>{Yt.removeManifest(s)})),t.$$set=t=>{"manifest"in t&&n(4,o=t.manifest),"blockumentId"in t&&n(0,i=t.blockumentId)},[i,r,a,l,o]}class Ke extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,Fe,Ue,o.safe_not_equal,{manifest:4,blockumentId:0},Xe)}}const Ye=Ke;var Ve=n(2834),Je=n.n(Ve);const Ge=((t,e={},n="div")=>o=>{const i=(0,Ve.useRef)(null),s=(0,Ve.useRef)(null),[r,a]=(0,Ve.useState)(!1);return(0,Ve.useEffect)((()=>{const e=/on([A-Z]{1,}[a-zA-Z]*)/,n=/watch([A-Z]{1,}[a-zA-Z]*)/;s.current=new t({target:i.current,props:o});const r=[];for(const t in o){const i=t.match(e),a=t.match(n);null!=i&&"function"==typeof o[t]&&s.current.$on(`${i[1][0].toLowerCase()}${i[1].slice(1)}`,o[t]),null!=a&&"function"==typeof o[t]&&r.push([`${a[1][0].toLowerCase()}${a[1].slice(1)}`,o[t]])}if(r.length>0){const t=s.current.$$.update;s.current.$$.update=function(){r.forEach((([t,e])=>{if(null!==s.current){const n=s.current.$$.props[t];e(s.current.$$.ctx[n])}})),t.apply(null)}}return()=>{null!==s.current&&s.current.$destroy()}}),[o]),(0,Ve.useEffect)((()=>{r?null!==s.current&&s.current.$set(o):a(!0)}),[o,r]),Je().createElement(n,{ref:i,style:e})})(Ye),Qe=t=>Je().createElement(Ge,{...t})}}]);
//# sourceMappingURL=92aada83.js.map