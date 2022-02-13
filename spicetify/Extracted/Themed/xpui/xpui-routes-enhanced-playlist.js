"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[682],{45685:(e,t,n)=>{n.r(t),n.d(t,{EnhancedPlaylist:()=>pe,default:()=>ye});var a=n(59713),l=n.n(a),r=n(67294),i=n.n(r),c=n(95661),s=n(13020),o=n(70369),u=n(55120),m=n(83979),d=n(20657),p=n(30947),y=n(55911),b=n(20246),f=n(43620),g=n(84242),v=n(6479),E=n.n(v),h=n(69518),x=n.n(h),I=n(44794),k=n(47991),w=n(56705),P=n(80624),O=n(25237),C=n(94967),R=n(8247),j=n(11680),T=n(45287);const N=["pageItems"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){const t=(0,j._)(),{isEnhanced:n,iteration:a,setIsEnhanced:l,toggleIsEnhanced:i}=(0,T.U)(e),c=(0,I.W6)(R.HT);let s=e;if(x().isPlaylistV1OrV2(e)){const t=x().from(e).getBase62Id();s=c?`spotify:enhanced:playlist:${t}`:`spotify:dynamic-playlist-session:${t}`}else c&&x().isCollection(e)&&(s="spotify:enhanced:collection:tracks");const[o,u]=(0,r.useState)(null),m=(0,r.useRef)({}),d=(0,r.useRef)(null),p=(0,r.useMemo)((()=>new C.Ct),[]),y=(0,r.useMemo)((()=>new C.tL),[]),b=(0,r.useCallback)((async e=>{const t=Array.from(new Set(e.map((e=>e.uri)))).filter((e=>!p.has(e)));return(await(0,w.s)(t,(async e=>{const t=e.map((e=>x().from(e).getBase62Id())),{body:n}=await y.create(t.join(","),(()=>O.fQ.getTracks(P.b.getInstance(),t)));return n.tracks}))).flat().forEach((e=>p.set((0,k.$V)(e),e))),n=p,e.map((e=>{var t;return U(U({},n.get(e.uri)),{},{uid:null==e?void 0:e.itemId,isEnhanced:null==e||null===(t=e.itemAttributes)||void 0===t?void 0:t.isRecommendation})}));var n}),[p,y]),f=(0,r.useCallback)((async(e,n,a,l,r,i)=>{var c,s,o,p,y,f,g;const v=null===(c=d.current)||void 0===c?void 0:c.stateId;let h;try{h=await i}catch(r){409===(null==r?void 0:r.status)&&(h=await t.getPage(e,n,a,l))}const x=null===(s=h)||void 0===s?void 0:s.enhancePage;if(!x)return[];const{pageItems:I}=x,k=E()(x,N),w=await b(I);if(v!==(null===(o=d.current)||void 0===o?void 0:o.stateId))return[];const P=(null===(p=d.current)||void 0===p?void 0:p.contextRevision)!==k.contextRevision,O=(null===(y=d.current)||void 0===y?void 0:y.sessionId)!==k.sessionId;(P||O)&&(r=!0),m.current=function(e,t,n,a){const l=a?{}:U({},e);return t.forEach(((e,t)=>{l[n+t]=e})),l}(m.current,w,a,r);const C=(null!==(f=null===(g=d.current)||void 0===g?void 0:g.stateId)&&void 0!==f?f:1)+(r?1:0),R=U(U({},k),{},{stateId:C});return u(R),d.current=R,w}),[b,t]),g=(0,r.useCallback)((async({itemIds:n,offset:l=0,limit:r=1})=>{d.current&&a&&f(e,a,l,r,!0,t.addRecommendation(e,d.current.sessionId,d.current.contextRevision,n,l,r))}),[f,e,t,a]),v=(0,r.useCallback)((async({itemIds:n,offset:l=0,limit:r=1})=>{d.current&&a&&f(e,a,l,r,!0,t.removeRecommendation(e,d.current.sessionId,d.current.contextRevision,n,l,r))}),[f,e,t,a]),h=(0,r.useCallback)((async(n,l)=>{var r;if(!a)return[];const i=Math.min(l,((null===(r=d.current)||void 0===r?void 0:r.numTotalItems)||1/0)-n),c=Array.from({length:i},((e,t)=>m.current[t+n]));return c.every((e=>!!e))?c:f(e,a,n,l,!1,t.getPage(e,a,n,l))}),[f,e,t,a]);return{isEnhanced:n,setIsEnhanced:l,toggleIsEnhanced:i,addRecommendation:g,removeRecommendation:v,playContext:(0,r.useMemo)((()=>({uri:s,url:null==o?void 0:o.dspContextUri})),[s,null==o?void 0:o.dspContextUri]),numTotalItems:isNaN(Number(null==o?void 0:o.numTotalItems))?void 0:Number(null==o?void 0:o.numTotalItems),numTotalRecs:isNaN(Number(null==o?void 0:o.numTotalRecs))?void 0:Number(null==o?void 0:o.numTotalRecs),fetchTracks:h,stateId:null==o?void 0:o.stateId}}var M=n(32567),S=n(35308),A=n(28248),L=n(73785),F=n(4236),z=n(42922),Z=n(49961),$=n(44461),B=n(9296),Q=n(52284),X=n(86213),q=n(27481),G=n(83384),V=n(82760),W=n(32626),H=n(65095),J=n(87257),K=n(57978),Y=n(75016),ee=n(24656),te=n(84788),ne=n(94184),ae=n.n(ne),le=n(83692);const re="TRDgmejiOzKjissuLFSx",ie=({onClick:e=(()=>{}),className:t,label:n,ariaLabel:a=n,Icon:l})=>i().createElement(le.w,{label:n},i().createElement("button",{type:"button","aria-label":a,className:ae()(re,t),onClick:e},i().createElement(l,{iconSize:16}))),ce=i().memo((function({uri:e,uid:t,name:n,durationMs:a,artists:l,album:c,isMOGEFRestricted:s,isExplicit:o,isPlayable:u,index:m,playIndex:p=null,imgUrl:y,contextUri:b,usePlayContextItem:f,isEnhanced:g,add:v,remove:E}){var h;const{useCurrentAvailability:x}=(0,r.useContext)(ee.I),[I,k]=x(e),w=u&&I,{badges:P,hasBadges:O}=(0,te.r)({offlineAvailability:k,isExplicit:o,isMOGEFRestricted:s,isEnhanced:g}),C=m+1,R=i().createElement(X.$,{uri:e,uid:t,albumUri:null==c?void 0:c.uri,artists:l,contextUri:b,isRecommendation:g,removePlaylistItems:()=>E(t),removeRecommendation:()=>E(t),addRecommendation:()=>v(t)}),j=(null==l?void 0:l.map((e=>e.name)).join(d.ag.getSeparator()))||"",{isActive:T,isPlaying:N,triggerPlay:_,togglePlay:U}=f({uid:t,uri:e,index:null!=p?p:m});return i().createElement(z.ZP,{value:"row",index:m},i().createElement(W._P,{menu:R},i().createElement(V.c,{uri:e,contextUri:b,index:m,onTriggerPlay:()=>{_()},isActive:T,ariaRowIndex:m+1,isPlayable:w,ageRestricted:s,dragMetadata:{name:n,createdBy:j}},i().createElement(q.Dd,{ariaColIndex:0},i().createElement(q.Du,{uri:e,playAriaLabel:d.ag.get("tracklist.a11y.play",n,j),onClick:()=>{U()},isPlaying:N,isActive:T},i().createElement(q.km,null,C))),i().createElement(q.vZ,{ariaColIndex:1},i().createElement(q.lD,{src:y}),i().createElement(q.vm,null,i().createElement(q.Wh,{titleText:n},n),O&&i().createElement(q.g3,null,P.enhanced&&i().createElement($.J,{iconSize:16,className:G.Z.enhanced,"aria-label":d.ag.get("web-player.enhance.button_text_enhanced")}),P.download&&i().createElement(H.G,{size:16}),P.explicit&&i().createElement(J.N,null),P.paid&&i().createElement(Y.g,null),P.nineteen&&i().createElement(K.X,{className:G.Z.nineteen,size:16})),i().createElement(q.K9,null,i().createElement(q.T6,{artists:l})))),i().createElement(q.UA,{ariaColIndex:2},i().createElement(q.BM,{uri:c.uri,name:c.name,creatorUri:null==l||null===(h=l[0])||void 0===h?void 0:h.uri},c.name)),i().createElement(q.mU,{ariaColIndex:3},!!g&&i().createElement(i().Fragment,null,i().createElement(ie,{onClick:()=>v(t),label:d.ag.get("web-player.enhance.button_label_keep_in_playlist"),Icon:B.Z}),i().createElement(ie,{onClick:()=>E(t),label:d.ag.get("web-player.enhance.button_label_remove_from_playlist"),Icon:Q.w})),i().createElement(q.A$,{duration:a}),i().createElement(q.Zv,{menu:R,label:d.ag.get("more.label.track",n,j)})))))})),se=[L.Q.INDEX,L.Q.TITLE,L.Q.ALBUM,L.Q.DURATION],oe=i().memo((function({ariaLabel:e,uri:t,name:n,usePlayContextItem:a,tracklistRef:l,fetchTracks:c,addRecommendation:s,removeRecommendation:o,nrTracks:u}){const m=(0,r.useRef)(!1),p=(0,F.k)();(0,r.useEffect)((()=>{var e;m.current&&p&&(null==l||null===(e=l.current)||void 0===e||e.update());m.current=!0}),[p,l]);const y=(0,r.useRef)((()=>{})),[b,f]=(0,r.useState)([]),g=(0,r.useCallback)((()=>{var e;const{firstIndex:t,lastIndex:n}=null==l||null===(e=l.current)||void 0===e?void 0:e.getVisibleTrackWindow(),a=n-t;return Math.max(0,t-Math.round((50-a)/2))}),[l]),v=(0,r.useCallback)((e=>{y.current(),o({itemIds:e.map((({id:e})=>e)),offset:g(),limit:50})}),[o,g]),E=(0,r.useCallback)(((e,t)=>{y.current=t,e.length>1?f(e):v(e)}),[v]),h=(0,r.useCallback)((e=>{s({itemIds:[e],offset:g(),limit:50})}),[s,g]),x=(0,r.useCallback)((e=>{o({itemIds:[e],offset:g(),limit:50})}),[o,g]),I=(0,r.useCallback)((function(e,n){const l=(0,Z.X)(e.album.images,{desiredSize:40,desiredLabel:"small"});return i().createElement(ce,{key:e.uid,index:n,playIndex:n,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.is_playable,durationMs:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isExplicit:e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:(null==l?void 0:l.url)||"",usePlayContextItem:a,isEnhanced:e.isEnhanced,add:h,remove:x})}),[a,t,h,x]),k=(0,r.useCallback)((e=>e.uri),[]),w=(0,r.useCallback)((e=>e.uid),[]);return i().createElement(i().Fragment,null,i().createElement(z.ZP,{value:"playlist-tracklist"},i().createElement(A.Pv,{testID:"playlist-tracklist",key:t,ariaLabel:e,hasHeaderRow:!0,columns:se,onRemove:E,renderRow:I,resolveUri:k,resolveUid:w,nrTracks:u,fetchTracks:c,limit:50,outerRef:l})),i().createElement(S.h,{title:d.ag.get("playlist.remove_from_playlist",n),isOpen:b.length>0,tracks:b,onClose:e=>{e.stopPropagation(),f([])},onRemove:v}))})),ue={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",enhancedPlaylist:"OfFtIpc_qctF95n1Xk6p",playlistImageContainer:"q91bEN94vb8qNievR8JN"};function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const pe=i().memo((function({metadata:e}){const{uri:t,name:n,images:a,totalLength:l,canPlay:v}=e,[E]=a,h=(0,f.Z)((null==E?void 0:E.url)||null),x=(0,r.useRef)(null),{playContext:I,numTotalItems:k,addRecommendation:w,removeRecommendation:P,fetchTracks:O,stateId:C}=D(t);(0,r.useEffect)((()=>{var e;C&&(null===(e=x.current)||void 0===e||e.update())}),[C]);const{isPlaying:R,togglePlay:j,usePlayContextItem:T}=(0,g.n)(I,{featureIdentifier:"playlist"}),N=(0,r.useCallback)((()=>j()),[j]);return i().createElement(r.Suspense,{fallback:null},i().createElement(o.$,null,d.ag.get("playlist.page-title",n)),i().createElement("section",{role:"presentation",className:ue.enhancedPlaylist,"data-testid":"enhanced-playlist-page"},i().createElement(m.s,{metadata:de(de({},e),{},{duration:null,totalLength:null!=k?k:l}),isPlaying:R,togglePlay:N,backgroundColor:h}),i().createElement("div",{className:ue.playlistContent},i().createElement(p.o,{backgroundColor:h},i().createElement(p.F,null,v?i().createElement(u.$,{onClick:N,isPlaying:R,size:y.qE.lg,uri:t}):null,i().createElement(M.v,{uri:t}),i().createElement(b.y,{menu:i().createElement(s.X,{uri:t})},i().createElement(c.z,null))))),i().createElement("div",{className:"contentSpacing"},i().createElement(r.Suspense,{fallback:null},i().createElement(oe,{key:t,ariaLabel:n,nrTracks:null!=k?k:Math.max(15,l),uri:t,name:n,usePlayContextItem:T,tracklistRef:x,fetchTracks:O,addRecommendation:w,removeRecommendation:P})))))})),ye=pe}}]);
//# sourceMappingURL=xpui-routes-enhanced-playlist.js.map