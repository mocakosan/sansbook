_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"+gJg":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("VTBJ"),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372 0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372 0 89-31.3 170.8-83.5 234.8z"}}]},name:"stop",theme:"outlined"},c=n("6VBw"),s=function(e,t){return r.createElement(c.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:i}))};s.displayName="StopOutlined";var u=r.forwardRef(s),l=n("VXEj"),d=n("2/Rp"),f=n("bx4M"),b=n("LAVF"),g=n("/MKj"),p=o.a.createElement;t.a=function(e){var t=e.header,n=e.data,r=e.onClickMore,o=(e.loading,Object(g.b)());return p(l.b,{style:{marginBottom:20},grid:{gutter:4,xs:2,md:3},size:"small",header:p("div",null,t),loadMore:p("div",{style:{textAlign:"center",margin:"10px 0"}},p(d.a,{onClick:r},"\ub354 \ubcf4\uae30")),bordered:!0,dataSource:n,renderItem:function(e){return p(l.b.Item,{style:{marginTop:20}},p(f.a,{actions:[p(u,{key:"stop",onClick:(n=e.id,function(){"\ud314\ub85c\uc789"===t&&o({type:b.H,data:n}),o({type:b.A,data:n})})})]},p(f.a.Meta,{description:e.nickname})));var n}})}},F6lQ:function(e,t,n){"use strict";var r=n("ODXe"),o=n("q1tI"),a=n.n(o),i=n("Vl3Y"),c=n("5rEg"),s=n("/MKj"),u=n("8QKS"),l=n("LAVF"),d=a.a.createElement;t.a=function(){var e=Object(s.c)((function(e){return e.user})).me,t=Object(u.a)((null===e||void 0===e?void 0:e.nickname)||""),n=Object(r.a)(t,2),a=n[0],f=n[1],b=Object(s.b)(),g=Object(o.useCallback)((function(){b({type:l.c,data:a})}),[a]);return d(i.a,{style:{marginBottom:"20px",border:"1px solid #d9d9d9",padding:"20px"}},d(c.a.Search,{value:a,onChange:f,addonBefore:"\ub2c9\ub124\uc784",enterButton:"\uc218\uc815",onSearch:g}))}},"W+IF":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return de}));var r=n("q1tI"),o=n.n(r),a=n("1zst"),i=n("8Kt/"),c=n.n(i),s=n("F6lQ"),u=n("+gJg"),l=n("/MKj"),d=n("nOHt"),f=n.n(d),b=n("at8e");const g=new WeakMap,p={},h={},O=()=>{},m=O(),w=Object,v=e=>e===m,y=e=>"function"==typeof e,_=(e,t)=>({...e,...t}),j="undefined"!=typeof window,E="undefined"!=typeof document,k=(e,t)=>{const n=g.get(e);return[()=>!v(t)&&e.get(t)||p,r=>{if(!v(t)){const o=e.get(t);t in h||(h[t]=o),n[5](t,_(o,r),o||p)}},n[6],()=>!v(t)&&t in h?h[t]:!v(t)&&e.get(t)||p]},S=new WeakMap;let R=0;const C=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,a;if(w(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=S.get(e),o)return o;if(o=++R+"~",S.set(e,o),n==Array){for(o="@",a=0;a<e.length;a++)o+=C(e[a])+",";S.set(e,o)}if(n==w){o="#";const t=w.keys(e).sort();for(;!v(a=t.pop());)v(e[a])||(o+=a+":"+C(e[a])+",");S.set(e,o)}}return o};let T=!0;const[L,V]=j&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[O,O],M={isOnline:()=>T,isVisible:()=>{const e=E&&document.visibilityState;return v(e)||"hidden"!==e}},x={initFocus:e=>(E&&document.addEventListener("visibilitychange",e),L("focus",e),()=>{E&&document.removeEventListener("visibilitychange",e),V("focus",e)}),initReconnect:e=>{const t=()=>{T=!0,e()},n=()=>{T=!1};return L("online",t),L("offline",n),()=>{V("online",t),V("offline",n)}}},D=!o.a.useId,I=!j||"Deno"in window,F=e=>j&&"undefined"!=typeof window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,1),P=I?r.useEffect:r.useLayoutEffect,A="undefined"!==typeof navigator&&navigator.connection,N=!I&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),W=e=>{if(y(e))try{e=e()}catch(n){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?C(e):"",t]};let B=0;const J=()=>++B;var q=0,z=1,K=2,X=3;async function H(...e){const[t,n,r,o]=e,a=_({populateCache:!0,throwOnError:!0},"boolean"===typeof o?{revalidate:o}:o||{});let i=a.populateCache;const c=a.rollbackOnError;let s=a.optimisticData;const u=!1!==a.revalidate,l=a.throwOnError;if(y(n)){const e=n,r=[],o=t.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!/^\$(inf|sub)\$/.test(o)&&e(t.get(o)._k)&&r.push(o)}return Promise.all(r.map(d))}return d(n);async function d(n){const[o]=W(n);if(!o)return;const[a,d]=k(t,o),[f,b,p]=g.get(t),h=f[o],O=()=>u&&(delete p[o],h&&h[0])?h[0](2).then(()=>a().data):a().data;if(e.length<3)return O();let w,_=r;const j=J();b[o]=[j,0];const E=!v(s),S=a(),R=S.data,C=S._c,T=v(C)?R:C;if(E&&(s=y(s)?s(T):s,d({data:s,_c:T})),y(_))try{_=_(T)}catch(V){w=V}if(_&&y(_.then)){if(_=await _.catch(e=>{w=e}),j!==b[o][0]){if(w)throw w;return _}w&&E&&(e=>"function"===typeof c?c(e):!1!==c)(w)&&(i=!0,_=T,d({data:_,_c:m}))}i&&(w||(y(i)&&(_=i(_,T)),d({data:_,_c:m}))),b[o][1]=J();const L=await O();if(d({_c:m}),!w)return i?L:_;if(l)throw w}}const Q=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},G=(e,t)=>{if(!g.has(e)){const n=_(x,t),r={},o=H.bind(m,e);let a=O;const i={},c=(e,t)=>{const n=i[e]||[];return i[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},s=(t,n,r)=>{e.set(t,n);const o=i[t];if(o)for(const e of o)e(n,r)},u=()=>{if(!g.has(e)&&(g.set(e,[r,{},{},{},o,s,c]),!I)){const t=n.initFocus(setTimeout.bind(m,Q.bind(m,r,0))),o=n.initReconnect(setTimeout.bind(m,Q.bind(m,r,1)));a=()=>{t&&t(),o&&o(),g.delete(e)}}};return u(),[e,o,u,a]}return[e,g.get(e)[4]]},[U,$]=G(new Map),Y=_({onLoadingSlow:O,onSuccess:O,onError:O,onErrorRetry:(e,t,n,r,o)=>{const a=n.errorRetryCount,i=o.retryCount,c=~~((Math.random()+.5)*(1<<(i<8?i:8)))*n.errorRetryInterval;!v(a)&&i>a||setTimeout(r,c,o)},onDiscarded:O,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>C(e)==C(t),isPaused:()=>!1,cache:U,mutate:$,fallback:{}},M),Z=(e,t)=>{const n=_(e,t);if(t){const{use:r,fallback:o}=e,{use:a,fallback:i}=t;r&&a&&(n.use=r.concat(a)),o&&i&&(n.fallback=_(o,i))}return n},ee=Object(r.createContext)({}),te=j&&window.__SWR_DEVTOOLS_USE__,ne=te?window.__SWR_DEVTOOLS_USE__:[],re=e=>y(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],oe=ne.concat(e=>(t,n,r)=>e(t,n&&((...e)=>{const r=W(t)[0],[,,,o]=g.get(U),a=o[r];return a?(delete o[r],a):n(...e)}),r));te&&(window.__SWR_DEVTOOLS_REACT__=o.a);const ae={dedupe:!0};w.defineProperty(e=>{const{value:t}=e,n=Object(r.useContext)(ee),o=y(t),a=Object(r.useMemo)(()=>o?t(n):t,[o,n,t]),i=Object(r.useMemo)(()=>o?a:Z(n,a),[o,n,a]),c=a&&a.provider,s=Object(r.useRef)(m);c&&!s.current&&(s.current=G(c(i.cache||U),a));const u=s.current;return u&&(i.cache=u[0],i.mutate=u[1]),P(()=>{if(u)return u[2]&&u[2](),u[3]},[]),Object(r.createElement)(ee.Provider,_(e,{value:i}))},"defaultValue",{value:Y});var ie,ce=(ie=(e,t,n)=>{const{cache:o,compare:a,suspense:i,fallbackData:c,revalidateOnMount:s,revalidateIfStale:u,refreshInterval:l,refreshWhenHidden:d,refreshWhenOffline:f,keepPreviousData:p}=n,[h,O,w]=g.get(o),[j,E]=W(e),S=Object(r.useRef)(!1),R=Object(r.useRef)(!1),C=Object(r.useRef)(j),T=Object(r.useRef)(t),L=Object(r.useRef)(n),V=()=>L.current,M=()=>V().isVisible()&&V().isOnline(),[x,A,N,B]=k(o,j),Q=Object(r.useRef)({}).current,G=v(c)?n.fallback[j]:c,U=(e,t)=>{let n=!0;for(const r in Q){const o=r;"data"===o?a(t[o],e[o])||v(e[o])&&a(t[o],ie)||(n=!1):t[o]!==e[o]&&(n=!1)}return n},$=Object(r.useMemo)(()=>{const e=!!j&&!!t&&(v(s)?!V().isPaused()&&!i&&(!!v(u)||u):s),n=t=>{const n=_(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=x(),o=B(),a=n(r),c=r===o?a:n(o);let l=a;return[()=>{const e=n(x());return U(e,l)?l:l=e},()=>c]},[o,j]),Y=Object(b.useSyncExternalStore)(Object(r.useCallback)(e=>N(j,(t,n)=>{U(n,t)||e()}),[o,j]),$[0],$[1]),Z=!S.current,ee=h[j]&&h[j].length>0,te=Y.data,ne=v(te)?G:te,re=Y.error,oe=Object(r.useRef)(ne),ie=p?v(te)?oe.current:te:ne,ce=!(ee&&!v(re))&&(Z&&!v(s)?s:!V().isPaused()&&(i?!v(ne)&&u:v(ne)||u)),se=!!(j&&t&&Z&&ce),ue=v(Y.isValidating)?se:Y.isValidating,le=v(Y.isLoading)?se:Y.isLoading,de=Object(r.useCallback)(async e=>{const t=T.current;if(!j||!t||R.current||V().isPaused())return!1;let r,o,i=!0;const c=e||{},s=!w[j]||!c.dedupe,u=()=>D?!R.current&&j===C.current&&S.current:j===C.current,l={isValidating:!1,isLoading:!1},d=()=>{A(l)},f=()=>{const e=w[j];e&&e[1]===o&&delete w[j]},b={isValidating:!0};v(x().data)&&(b.isLoading=!0);try{if(s&&(A(b),n.loadingTimeout&&v(x().data)&&setTimeout(()=>{i&&u()&&V().onLoadingSlow(j,n)},n.loadingTimeout),w[j]=[t(E),J()]),[r,o]=w[j],r=await r,s&&setTimeout(f,n.dedupingInterval),!w[j]||w[j][1]!==o)return s&&u()&&V().onDiscarded(j),!1;l.error=m;const e=O[j];if(!v(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return d(),s&&u()&&V().onDiscarded(j),!1;const c=x().data;l.data=a(c,r)?c:r,s&&u()&&V().onSuccess(r,j,n)}catch(g){f();const e=V(),{shouldRetryOnError:t}=e;e.isPaused()||(l.error=g,s&&u()&&(e.onError(g,j,e),(!0===t||y(t)&&t(g))&&M()&&e.onErrorRetry(g,j,e,e=>{const t=h[j];t&&t[0]&&t[0](X,e)},{retryCount:(c.retryCount||0)+1,dedupe:!0})))}return i=!1,d(),!0},[j,o]),fe=Object(r.useCallback)((...e)=>H(o,C.current,...e),[]);if(P(()=>{T.current=t,L.current=n,v(te)||(oe.current=te)}),P(()=>{if(!j)return;const e=de.bind(m,ae);let t=0;const n=((e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}})(j,h,(n,r={})=>{if(n==q){const n=Date.now();V().revalidateOnFocus&&n>t&&M()&&(t=n+V().focusThrottleInterval,e())}else if(n==z)V().revalidateOnReconnect&&M()&&e();else{if(n==K)return de();if(n==X)return de(r)}});return R.current=!1,C.current=j,S.current=!0,A({_k:E}),ce&&(v(ne)||I?e():F(e)),()=>{R.current=!0,n()}},[j]),P(()=>{let e;function t(){const t=y(l)?l(x().data):l;t&&-1!==e&&(e=setTimeout(n,t))}function n(){x().error||!d&&!V().isVisible()||!f&&!V().isOnline()?t():de(ae).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[l,d,f,j]),Object(r.useDebugValue)(ie),i&&v(ne)&&j){if(!D&&I)throw new Error("Fallback data is required when using suspense in SSR.");throw T.current=t,L.current=n,R.current=!1,v(re)?de(ae):re}return{mutate:fe,get data(){return Q.data=!0,ie},get error(){return Q.error=!0,re},get isValidating(){return Q.isValidating=!0,ue},get isLoading(){return Q.isLoading=!0,le}}},function(...e){const t=_(Y,Object(r.useContext)(ee)),[n,o,a]=re(e),i=Z(t,a);let c=ie;const{use:s}=i,u=(s||[]).concat(oe);for(let r=u.length;r--;)c=u[r](c);return c(n,o||i.fetcher||null,i)}),se=n("zuR4"),ue=o.a.createElement,le=function(e){return se.a.get(e,{withCredentials:!0}).then((function(e){return e.data}))},de=!0;t.default=function(){var e=Object(l.c)((function(e){return e.user})).me,t=Object(r.useState)(3),n=t[0],i=t[1],d=Object(r.useState)(3),b=d[0],g=d[1],p=ce("http://localhost:3001/user/followers?limit=".concat(b),le),h=p.data,O=p.error,m=ce("http://localhost:3001/user/followings?limit=".concat(n),le),w=m.data,v=m.error;Object(r.useEffect)((function(){e&&e.id||f.a.push("/")}),[e&&e.id]);var y=Object(r.useCallback)((function(){g((function(e){return e+3}))}),[]),_=Object(r.useCallback)((function(){i((function(e){return e+3}))}),[]);return e?O||v?(console.error(O||v),"\ud314\ub85c\uc789/\ud314\ub85c\uc6cc \ub85c\ub529 \uc911 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."):ue(o.a.Fragment,null,ue(c.a,null,ue("title",null,"\ub0b4\ud504\ub85c\ud544 | Sansbook ")),ue(a.a,null,ue(s.a,null),ue(u.a,{header:"\ud314\ub85c\uc789",data:w,onClickMore:_,loading:!v&&!w}),ue(u.a,{header:"\ud314\ub85c\uc6cc",data:h,onClickMore:y,loading:!O&&!h}))):"\ub0b4\uc815\ubcf4 \ub85c\ub529\uc911"}},u1GD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("W+IF")}])}},[["u1GD",1,2,0,3,4,5,13]]]);