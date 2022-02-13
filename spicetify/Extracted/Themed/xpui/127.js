"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[127],{21127:(e,t,a)=>{a.d(t,{X:()=>B});var n=a(67294),i=a.n(n),s=a(94184),l=a.n(s),r=a(40160),o=a(16528),c=a(69518),E=a.n(c),m=a(96685),d=a(28342),u=a(20657),S=a(46245),I=a(32626),p=a(44887),_=a(7469),Z=a(34325),h=a(76343),g=a(18864),y=a(54280);var w=a(42781),C=a(92408),N=a(95661),f=a(25988),b=a(11414),x=a(24656),O=a(69010),k=a(37483),v=a(51871),A=a(60417),D=a(8716),U=a(22819);const P="pvGZ831aNzHTQMZ8CA_u",L=i().memo((({onClick:e=(()=>{}),size:t,className:a,uri:s,sharingInfo:r,interactionData:o})=>{const{onCopyLink:c}=(0,U.y)({sharingInfo:r,uri:s,interactionData:o}),E=(0,n.useCallback)((()=>{c(),e()}),[e,c]);return i().createElement(D.E,{ariaLabel:u.ag.get("mwp.list.item.share"),size:t,onClick:E,className:l()(P,a),icon:A.M})}));var R=a(82772);const M={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},T=i().memo((({episodeUri:e,showUri:t,sharingInfo:a,canDownload:s})=>{const{useDownloading:r}=(0,n.useContext)(x.I),{currentAvailability:o}=r(e),c=[O.V8.YES,O.V8.DOWNLOADING,O.V8.WAITING].includes(o),E=(0,n.useMemo)((()=>i().createElement(k.p,{uri:e,size:k.q.sm,showUri:t,className:l()({[R.Z.visibleDownloadButton]:c})})),[e,t,c]),m=(0,n.useMemo)((()=>i().createElement(L,{uri:e,sharingInfo:a,interactionData:M})),[e,a]),d=(0,n.useMemo)((()=>i().createElement(v.w,{uri:e,size:b.q.sm,className:R.Z.saveButton})),[e]);return i().createElement(i().Fragment,null,m,s&&E,d)})),j={episodeBlock:"TT1tIewS2iI8Uz8kLuQB",isActive:"Mn93NeoqnZzVnPIP83_9",title:"bG5fSAAS6rRL8xxU5iyG",titleLink:"g5gZaZVzR0tGT4pK6iEU",selected:"u9GYp1CdMSk8BG9i2o1n",topActions:"Xga3T31ofx1oxxRVrMdW",actions:"DbMYFmOEEz9PH1h1zK9n",titleContainer:"HLixBI5DbVZNC6lrUbAB",musicAndTalkArtistContainer:"YhOAZFuFU1oI_YQSof4z",musicAndTalkArtists:"DKIjGP8CcZyjr2O2HNST",playlistIcon:"A7qeQBIk3sqr7bYadWA8",noHover:"_IJaGA3ZdVU0NiTxbGsI",imageContainer:"ij5_Bi2LfqgWwHzQBXJS",showImage:"o_TP9z7A8LQvMXujJC7N",description:"LbePDApGej12_NyRphHu",metadata:"y9kEPjDek0J80YRf8JJw",badges:"hFCGY5gjCjN10WzV2VQ4",medium:"gk0rZwqBxJjSeiWV5lgV",large:"te8hrsPnSvx9SUkzV0ME",header:"V0pEigrddg3VxP_sTdAJ",descriptionContainer:"upo8sAflD1byxWObSkgn",playerActions:"DyuLxip2Kl8P7H8fW62u"},B=i().memo((({uri:e,name:t,showName:a,showUri:s,size:c,description:b,durationMs:x,images:O,badges:k,fullyPlayed:v,releaseDate:A,resumePositionMs:D,isCurrentlyPlaying:U,isPlaying:P,onContextMenu:L,onTouchStart:R,onTouchEnd:M,handlePlaybackClick:B,handleDragStart:z,handleClick:V,position:G,index:F,isPlayable:W,isPaywalled:q,isUserSubscribed:H,episodeSharingInfo:Q,playButtonWrapper:Y=null,highlightText:J=(e=>e),onMarkAsPlayed:K})=>{var X;const $=(0,o.k6)(),ee=U&&P,te=E().from(e).toURLPath(!0),ae=null===(X=E().from(s))||void 0===X?void 0:X.toURLPath(!0),ne=function({episodeUri:e}){const[t,a]=(0,n.useState)([]),i=(0,y.G)();return(0,n.useEffect)((()=>{let t=!0;return async function(){const n=await i.getArtists(e);t&&a(n)}(),()=>{t=!1}}),[e,i]),t}({episodeUri:e}),ie=(0,Z.G3)(e,A,D,v),se=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),$.push(te),V&&V(e)}),[te,$,V]),le=(0,n.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),ae&&$.push(ae)}),[ae,$]),re=q&&!H,oe=(0,n.useCallback)((e=>{e.stopPropagation(),re||B(e)}),[B,re]),ce=e=>{e.stopPropagation()},Ee=re||W,me=u.ag.get("tracklist.a11y.play",t,a),de=u.ag.get("tracklist.a11y.pause",t,a),ue=i().createElement(S.fh,{size:"sm",version:S.ul.secondary,onClick:oe,isPlaying:ee,disabled:!Ee,locked:re,ariaPlayLabel:me,ariaPauseLabel:de}),Se=Y?Y(ue):ue;return i().createElement("div",{className:l()(j.episodeBlock,{[j.isActive]:U,[j.medium]:c===g.Uo.MEDIUM,[j.large]:c===g.Uo.LARGE,[j.noHover]:c===g.Uo.XSMALL}),"data-testid":`episode-${F}`,draggable:!!z,onDragStart:z,onClick:se,onContextMenu:L,onTouchStart:R,onTouchEnd:M},i().createElement("div",{className:j.imageContainer},i().createElement(p.O,{className:l()(j.entityImage,j.showImage),type:w.p.EPISODE,size:(e=>{switch(e){case g.Uo.LARGE:return _.m$.SIZE_112;case g.Uo.MEDIUM:return _.m$.SIZE_64;default:return _.m$.SIZE_48}})(c),title:t,shape:p.K.ROUNDED_CORNERS,images:O})),i().createElement("div",{className:j.header},i().createElement("div",{className:j.titleContainer},i().createElement(r.rU,{className:j.titleLink,to:te,onClick:se},i().createElement(h.Dy.h4,{variant:m.LF.balladBold,className:j.title,"data-testid":"episodeTitle"},ie&&i().createElement(Z.Rd,null),J(t))),ne.length>0&&i().createElement("div",{className:j.musicAndTalkArtistContainer},i().createElement(d.e,{iconSize:16,className:j.playlistIcon}),i().createElement(h.Dy.p,{variant:m.LF.mesto,className:j.musicAndTalkArtists},J(ne.join(", "))))),a&&ae&&i().createElement(r.rU,{className:j.titleLink,to:ae,onClick:le},i().createElement(h.Dy.h4,{variant:m.LF.mestoBold,className:j.title},J(a)))),i().createElement("div",{className:j.descriptionContainer},i().createElement(h.Dy.p,{variant:m.LF.mesto,className:j.description},J(null!=b?b:""))),i().createElement("div",{className:j.metadata},i().createElement("div",{className:j.badges},k),i().createElement(C.E,{isPlaying:ee,fullyPlayed:v,durationMs:x,releaseDate:A,resumePositionMs:D,position:U?G:void 0})),i().createElement("div",{onClick:ce,className:j.topActions,"data-testid":"action-buttons"},i().createElement(I.yj,{menu:i().createElement(f.k,{uri:e,showUri:s,isPlayed:v,onMarkAsPlayed:K})},i().createElement(N.z,{size:N.q.sm,label:u.ag.get("more.label.context",t)}))),i().createElement("div",{onClick:ce,className:j.actions},i().createElement(T,{episodeUri:e,showUri:null!=s?s:"",sharingInfo:Q,canDownload:!q||q&&H})),i().createElement("div",{className:j.playerActions},Se))}))},44887:(e,t,a)=>{a.d(t,{O:()=>N,K:()=>C});var n=a(59713),i=a.n(n),s=a(67294),l=a.n(s),r=a(94184),o=a.n(r),c=a(80418),E=a(7469);const m={xsmall:"g3kBhX1E4EYEC2NFhhxG",small:"O5_0cReFdHe81E0xFAD1",medium:"H71KtIrytVayf_dFofu7",large:"SBpny8HrUTBzSjk7Vtk1",square:"CxurIfvXVb_TqGF4q8Yf",circle:"OadpZJiOaGfX6Qp4j6n5",image:"iJp40IxKg6emF6KYJ414",imageContainer:"vreceNX3ABcxyddeS83B",imagePlaceholder:"p6xU6jAgF1YQ43M1zZbV"},d="Ozitxbqs1vcOukDz3GDw",u="AeEoI6ueagbJtaHl2cRd";var S=a(42781),I=a(45322),p=a(68101),_=a(28151),Z=a(79458),h=a(68251);const g=({title:e,type:t,className:a})=>{const n=(e=>{switch(e){case S.p.ALBUM:return l().createElement(I.c,{className:u});case S.p.ARTIST:return l().createElement(p.a,{className:u});case S.p.SHOW:case S.p.EPISODE:return l().createElement(_.J,{className:u});case S.p.USER:return l().createElement(Z.f,{className:u});case S.p.PLAYLIST:default:return l().createElement(h.U,{className:u})}})(t);return l().createElement("div",{"aria-label":e,className:o()(d,a)},n)};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}let C;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(C||(C={}));const N=l().memo((({type:e,title:t,images:a=[],shape:n=C.SQUARE,size:i=E.m$.SIZE_56,className:s,onContextMenu:r=(()=>{}),onTouchStart:d=(()=>{}),onTouchEnd:u=(()=>{})})=>{const S=function(e=[]){const t=e.filter((e=>Boolean(e.width))),a=t.filter((e=>e.url&&e.width&&e.width>=E.eM[E.m$.SIZE_56])).sort(((e,t)=>e.width-t.width));return a.length?a:t}(a),I=S.length>0?S[0].url:"",p=S.map((({url:e,width:t})=>`${e} ${t/2}w, ${e} ${t}w`)).join(", "),_=()=>({[m.xsmall]:E.pj.includes(i),[m.small]:E.wL.includes(i),[m.medium]:E.VZ.includes(i),[m.large]:E.B_.includes(i)});return l().createElement("div",{className:o()(m.imageContainer,s),onContextMenu:r,onTouchStart:d,onTouchEnd:u,style:{width:`${E.eM[i]}px`,height:`${E.eM[i]}px`}},l().createElement(c.E,{loading:"lazy",src:I,alt:t,ariaHidden:!0,className:o()(m.image,w({[m.roundedCorners]:n===C.ROUNDED_CORNERS,[m.circle]:n===C.CIRCLE,[m.square]:n===C.SQUARE},_())),srcSet:p||void 0,testid:"entity-image"},l().createElement(g,{title:t,type:e,className:o()(w({[m.roundedCorners]:n===C.ROUNDED_CORNERS,[m.circle]:n===C.CIRCLE,[m.square]:n===C.SQUARE},_()))})))}))},7469:(e,t,a)=>{let n;a.d(t,{m$:()=>n,eM:()=>i,pj:()=>s,wL:()=>l,VZ:()=>r,B_:()=>o}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(n||(n={}));const i={[n.SIZE_48]:48,[n.SIZE_56]:56,[n.SIZE_64]:64,[n.SIZE_72]:72,[n.SIZE_80]:80,[n.SIZE_96]:96,[n.SIZE_104]:104,[n.SIZE_112]:112,[n.SIZE_120]:120,[n.SIZE_128]:128,[n.SIZE_136]:136,[n.SIZE_144]:144,[n.SIZE_152]:152,[n.SIZE_160]:160,[n.SIZE_168]:168,[n.SIZE_176]:176,[n.SIZE_184]:184,[n.SIZE_200]:200,[n.SIZE_232]:232},s=[n.SIZE_48,n.SIZE_56,n.SIZE_64],l=[n.SIZE_72,n.SIZE_80,n.SIZE_96,n.SIZE_104,n.SIZE_112,n.SIZE_120,n.SIZE_128],r=[n.SIZE_136,n.SIZE_144,n.SIZE_152,n.SIZE_160,n.SIZE_168,n.SIZE_176],o=[n.SIZE_184,n.SIZE_200,n.SIZE_232]},82772:(e,t,a)=>{a.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",ShowPage:"WqWFt0mTksL5L4pUOWTS",ShowContent:"d7DdhdSX1B_lzF6FLcT9",metadata:"uqOauyB7i5l_aA1Ct5eM",imageContainer:"mKVHiOws_N3sLMMHZq0Z",episodes:"aRegzSN92VRBnOaKWcoy",episodesHeader:"Q3wDjXPNY4lACLUxARrd",episodesSort:"bVv9NxcVuCEckfjjhS_g",episodesFilter:"hnwOA4WIO0QtXV868bO5",subtitle:"DvU6cwnEIZKsddh3VNjI",sectionTitle:"Eo3ux1gW87Uo72mONLUD",trailer:"_qWdC55CmfELMEV2YhuO",visibleDownloadButton:"zl5f8pJKfv0nfWMdN9rR",moreButton:"wKp6QJCIuhU4GEBCk9NY",saveButton:"Aw84eLe9FlAD8xXL2ehv"}}}]);
//# sourceMappingURL=127.js.map