var Sn=Array.isArray,Gt=Array.prototype.indexOf,Nn=Array.from,Cn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,bn=Array.prototype,Zt=Object.getPrototypeOf;function Fn(t){return typeof t=="function"}const Ln=()=>{};function Mn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,wt=4,W=8,st=16,k=32,q=64,H=128,y=256,U=512,v=1024,I=2048,P=4096,C=8192,X=16384,$t=32768,yt=65536,qn=1<<17,zt=1<<19,gt=1<<20,ct=Symbol("$state"),Yn=Symbol("legacy props");function Tt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function mt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Bn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Vn(){J=!0}const Gn=1,Kn=2,Zn=16,$n=1,zn=2,Wn=4,Xn=8,Jn=16,Qn=4,tr=1,nr=2,en="[",ln="[!",an="]",At={},rr=Symbol();function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function er(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function lr(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),K(a.reaction),Pt(a.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return{}}function Q(){return!J||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function ar(t){return Rt(ut(t))}function sn(t,n=!1){var e;const r=ut(t);return n||(r.equals=mt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function sr(t,n=!1){return Rt(sn(t,n))}function Rt(t){return u!==null&&!g&&(u.f&T)!==0&&(A===null?yn([t]):A.push(t)),t}function ur(t,n){return u!==null&&!g&&Q()&&(u.f&(T|st))!==0&&(A===null||!A.includes(t))&&rn(),un(t,n)}function un(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),kt(t,I),Q()&&o!==null&&(o.f&v)!==0&&(o.f&(k|q))===0&&(R===null?gn([t]):R.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&I)===0&&(!e&&s===o||(x(s,n),(i&(v|y))!==0&&((i&T)!==0?kt(s,P):nt(s))))}}let O=!1;function or(t){O=t}let m;function L(t){if(t===null)throw xt(),At;return m=t}function fr(){return L(N(m))}function ir(t){if(O){if(N(m)!==null)throw xt(),At;m=t}}function _r(t=1){if(O){for(var n=t,r=m;n--;)r=N(r);m=r}}function cr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===ln)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,on,Dt,It;function vr(){if(pt===void 0){pt=window,on=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Dt=_t(n,"firstChild").get,It=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function N(t){return It.call(t)}function pr(t,n){if(!O)return et(t);var r=et(m);if(r===null)r=m.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),L(e),e}return L(r),r}function hr(t,n){if(!O){var r=et(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function dr(t,n=1,r=!1){let e=O?m:t;for(var l;n--;)l=e,e=N(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=rt();return e===null?l==null||l.after(s):e.before(s),L(s),s}return L(e),e}function Er(t){t.textContent=""}function Ot(t){var n=T|I,r=u!==null&&(u.f&T)!==0?u:null;return o===null||r!==null&&(r.f&y)!==0?n|=y:o.f|=gt,{ctx:f,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function wr(t){const n=Ot(t);return n.equals=mt,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function fn(t){for(var n=t.parent;n!==null;){if((n.f&T)===0)return n;n=n.parent}return null}function _n(t){var n,r=o;Z(fn(t));try{St(t),n=Ut(t)}finally{Z(r)}return n}function Nt(t){var n=_n(t),r=(D||(t.f&y)!==0)&&t.deps!==null?P:v;x(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function Ct(t){o===null&&u===null&&Qt(),u!==null&&(u.f&y)!==0&&o===null&&Jt(),ot&&Xt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var l=(t&q)!==0,a=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=$t}catch(p){throw S(s),p}else n!==null&&nt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|H))===0;if(!i&&!l&&e&&(a!==null&&cn(s,a),u!==null&&(u.f&T)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function yr(t){const n=b(W,null,!1);return x(n,v),n.teardown=t,n}function gr(t){Ct();var n=o!==null&&(o.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function Tr(t){return Ct(),vn(t)}function mr(t){const n=b(q,t,!0);return(r={})=>new Promise(e=>{r.outro?dn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Pt(t){return b(wt,t,!1)}function vn(t){return b(W,t,!0)}function Ar(t,n=[],r=Ot){const e=n.map(r);return pn(()=>t(...e.map(In)))}function pn(t,n=0){return b(W|st|n,t,!0)}function xr(t,n=!0){return b(W|k,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),z(t,0),x(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dn(t,n){var r=[];Mt(t,r,!0),En(r,()=>{S(t),n&&n()})}function En(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if((t.f&C)===0){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&yt)!==0||(e.f&k)!==0;Mt(e,n,a?r:!1),e=l}}}function Rr(t){qt(t,!0)}function qt(t,n){if((t.f&C)!==0){t.f^=C,(t.f&v)===0&&(t.f^=v),Y(t)&&(x(t,I),nt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&k)!==0;qt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let M=[],lt=[];function Yt(){var t=M;M=[],Et(t)}function wn(){var t=lt;lt=[],Et(t)}function kr(t){M.length===0&&queueMicrotask(Yt),M.push(t)}function ht(){M.length>0&&Yt(),lt.length>0&&wn()}let j=!1,V=!1,G=null,B=!1,ot=!1;function dt(t){ot=t}let F=[];let u=null,g=!1;function K(t){u=t}let o=null;function Z(t){o=t}let A=null;function yn(t){A=t}let c=null,E=0,R=null;function gn(t){R=t}let jt=1,$=0,D=!1;function Bt(){return++jt}function Y(t){var h;var n=t.f;if((n&I)!==0)return!0;if((n&P)!==0){var r=t.deps,e=(n&y)!==0;if(r!==null){var l,a,s=(n&U)!==0,i=e&&o!==null&&!D,_=r.length;if(s||i){var p=t,w=p.parent;for(l=0;l<_;l++)a=r[l],(s||!((h=a==null?void 0:a.reactions)!=null&&h.includes(p)))&&(a.reactions??(a.reactions=[])).push(p);s&&(p.f^=U),i&&w!==null&&(w.f&y)===0&&(p.f^=y)}for(l=0;l<_;l++)if(a=r[l],Y(a)&&Nt(a),a.wv>t.wv)return!0}(!e||o!==null&&!D)&&x(t,v)}return!1}function Tn(t,n){for(var r=n;r!==null;){if((r.f&H)!==0)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw j=!1,t}function mn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&H)===0)}function tt(t,n,r,e){if(j){if(r===null&&(j=!1),mn(n))throw t;return}r!==null&&(j=!0);{Tn(t,n);return}}function Ht(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&T)!==0?Ht(a,n,!1):n===a&&(r?x(a,I):(a.f&v)!==0&&x(a,P),nt(a))}}function Ut(t){var it;var n=c,r=E,e=R,l=u,a=D,s=A,i=f,_=g,p=t.f;c=null,E=0,R=null,D=(p&y)!==0&&(g||!B||u===null),u=(p&(k|q))===0?t:null,A=null,vt(t.ctx),g=!1,$++;try{var w=(0,t.fn)(),h=t.deps;if(c!==null){var d;if(z(t,E),h!==null&&E>0)for(h.length=E+c.length,d=0;d<c.length;d++)h[E+d]=c[d];else t.deps=h=c;if(!D)for(d=E;d<h.length;d++)((it=h[d]).reactions??(it.reactions=[])).push(t)}else h!==null&&E<h.length&&(z(t,E),h.length=E);if(Q()&&R!==null&&!g&&h!==null&&(t.f&(T|P|I))===0)for(d=0;d<R.length;d++)Ht(R[d],t);return l!==null&&$++,w}finally{c=n,E=r,R=e,u=l,D=a,A=s,vt(i),g=_}}function An(t,n){let r=n.reactions;if(r!==null){var e=Gt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&T)!==0&&(c===null||!c.includes(n))&&(x(n,P),(n.f&(y|U))===0&&(n.f^=U),St(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function ft(t){var n=t.f;if((n&X)===0){x(t,v);var r=o,e=f,l=B;o=t,B=!0;try{(n&st)!==0?hn(t):Ft(t),bt(t);var a=Ut(t);t.teardown=typeof a=="function"?a:null,t.wv=jt;var s=t.deps,i}catch(_){tt(_,t,r,e||t.ctx)}finally{B=l,o=r}}}function xn(){try{tn()}catch(t){if(G!==null)tt(t,G,null);else throw t}}function Vt(){try{for(var t=0;F.length>0;){t++>1e3&&xn();var n=F,r=n.length;F=[];for(var e=0;e<r;e++){var l=n[e];(l.f&v)===0&&(l.f^=v);var a=kn(l);Rn(a)}}}finally{V=!1,G=null}}function Rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|C))===0)try{Y(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function nt(t){V||(V=!0,queueMicrotask(Vt));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(q|k))!==0){if((r&v)===0)return;n.f^=v}}F.push(n)}function kn(t){var n=[],r=t.first;t:for(;r!==null;){var e=r.f,l=(e&k)!==0,a=l&&(e&v)!==0,s=r.next;if(!a&&(e&C)===0){if((e&wt)!==0)n.push(r);else if(l)r.f^=v;else{var i=u;try{u=r,Y(r)&&ft(r)}catch(w){tt(w,r,null,r.ctx)}finally{u=i}}var _=r.first;if(_!==null){r=_;continue}}if(s===null){let w=r.parent;for(;w!==null;){if(t===w)break t;var p=w.next;if(p!==null){r=p;continue t}w=w.parent}}r=s}return n}function Dn(t){var n;for(ht();F.length>0;)V=!0,Vt(),ht();return n}async function Dr(){await Promise.resolve(),Dn()}function In(t){var n=t.f,r=(n&T)!==0;if(u!==null&&!g){A!==null&&A.includes(t)&&nn();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[E]===t?E++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&y)===0&&(l.f^=y)}return r&&(l=t,Y(l)&&Nt(l)),t.v}function Ir(t){var n=g;try{return g=!0,t()}finally{g=n}}const On=-7169;function x(t,n){t.f=t.f&On|n}function Or(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{sr as $,N as A,At as B,an as C,xt as D,yt as E,jn as F,Er as G,ln as H,Nn as I,mr as J,rt as K,o as L,K as M,Z as N,u as O,yr as P,kr as Q,Cn as R,Sn as S,J as T,rr as U,hr as V,Ar as W,pr as X,ir as Y,dr as Z,wr as _,fr as a,ur as a0,C as a1,un as a2,sn as a3,ut as a4,Kn as a5,Mt as a6,En as a7,S as a8,Gn as a9,vn as aA,Dn as aB,ar as aC,Dr as aD,Wt as aE,Zn as aa,ct as ab,Pn as ac,bn as ad,Un as ae,_t as af,Hn as ag,Zt as ah,Bn as ai,qn as aj,Wn as ak,mt as al,Xn as am,Yn as an,zn as ao,$n as ap,Jn as aq,on as ar,tr as as,nr as at,st as au,$t as av,Pt as aw,Qn as ax,Fn as ay,Ln as az,pn as b,or as c,Rr as d,xr as e,m as f,f as g,O as h,gr as i,Et as j,Ir as k,Mn as l,In as m,Or as n,Ot as o,dn as p,Vn as q,cr as r,L as s,er as t,Tr as u,lr as v,_r as w,vr as x,et as y,en as z};
