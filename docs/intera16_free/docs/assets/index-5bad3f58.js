(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))v(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const y of o.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&v(y)}).observe(document,{childList:!0,subtree:!0});function m(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerPolicy&&(o.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?o.credentials="include":u.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function v(u){if(u.ep)return;u.ep=!0;const o=m(u);fetch(u.href,o)}})();var ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N={},ce={get exports(){return N},set exports(l){N=l}};(function(l,h){(function(m,v){l.exports=v()})(ue,function(){var m=function(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")},v=function(){function s(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(r,e,t){return e&&s(r.prototype,e),t&&s(r,t),r}}(),u=function s(){var r=this;m(this,s),this.initialise=function(e){r.analyser=e,r.analyser.fftSize=2048},this.reset=function(){r.hzHistory=[],r.frequences=new Uint8Array(r.analyser.frequencyBinCount)},this.analyse=function(){r.analyser.getByteFrequencyData(r.frequences);for(var e=0;e<r.frequences.length;e++)r.hzHistory[e]||(r.hzHistory[e]=[]),r.hzHistory[e].length>r.maxValueHistory&&r.hzHistory[e].shift(),r.hzHistory[e].push(r.frequences[e])},this.getRangeAverageRatio=function(e,t){for(var n=0,a=e;a<t+e;a++)n+=r.getFrequenceRatio(a);return n/t},this.getFrequenceRatio=function(e){var t=255,n=0;r.hzHistory[e].forEach(function(f){f<t&&(t=f),f>n&&(n=f)});var a=n-t,i=r.frequences[e]-t,c=a===0?0:i/a;return r.startingScale+r.pulseRatio*c},this.startingScale=0,this.pulseRatio=1,this.maxValueHistory=100,this.hzHistory=[]},o=new u,y=function s(r){var e=this;m(this,s),this.createSourceFromAudioElement=function(t){t.setAttribute("rythm-connected",e.connectedSources.length);var n=e.audioCtx.createMediaElementSource(t);return e.connectedSources.push(n),n},this.connectExternalAudioElement=function(t){e.audio=t,e.currentInputType=e.inputTypeList.EXTERNAL;var n=t.getAttribute("rythm-connected");n?e.source=e.connectedSources[n]:e.source=e.createSourceFromAudioElement(e.audio),e.connectSource(e.source)},this.connectSource=function(t){t.connect(e.gain),e.gain.connect(o.analyser),e.currentInputType!==e.inputTypeList.STREAM?(o.analyser.connect(e.audioCtx.destination),e.audio.addEventListener("ended",e.stop)):o.analyser.disconnect()},this.setMusic=function(t){e.audio=new Audio(t),e.currentInputType=e.inputTypeList.TRACK,e.source=e.createSourceFromAudioElement(e.audio),e.connectSource(e.source)},this.setGain=function(t){e.gain.gain.value=t},this.plugMicrophone=function(){return e.getMicrophoneStream().then(function(t){e.audio=t,e.currentInputType=e.inputTypeList.STREAM,e.source=e.audioCtx.createMediaStreamSource(t),e.connectSource(e.source)})},this.getMicrophoneStream=function(){return navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,new Promise(function(t,n){navigator.getUserMedia({audio:!0},function(a){return t(a)},function(a){return n(a)})})},this.start=function(){e.currentInputType===e.inputTypeList.TRACK&&(e.audioCtx.state==="suspended"?e.audioCtx.resume().then(function(){return e.audio.play()}):e.audio.play())},this.stop=function(){e.currentInputType===e.inputTypeList.TRACK?e.audio.pause():e.currentInputType===e.inputTypeList.STREAM&&(e.audio.getAudioTracks()[0].enabled=!1)},this.browserAudioCtx=window.AudioContext||window.webkitAudioContext,this.audioCtx=r||new this.browserAudioCtx,this.connectedSources=[],o.initialise(this.audioCtx.createAnalyser()),this.gain=this.audioCtx.createGain(),this.source={},this.audio={},this.hzHistory=[],this.inputTypeList={TRACK:0,STREAM:1,EXTERNAL:2}},C=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?1.25:e.max,n=isNaN(e.min)?.75:e.min,a=(t-n)*r;s.style.transform="scale("+(n+a)+") translateZ(0)"},M=function(r){r.style.transform=""},T=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?15:e.max,n=isNaN(e.min)?-15:e.min;e.direction==="left"&&(t=-t,n=-n);var a=(t-n)*r;s.style.transform="translate3d("+(n+a)+"px, 0, 0)"},E=function(r){r.style.transform=""},P=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?30:e.max,n=isNaN(e.min)?0:e.min,a=(t-n)*r;s.style.transform="translate3d(0, "+-a+"px, 0)"},k=function(r){r.style.transform=""},D=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?20:e.max,n=isNaN(e.min)?-20:e.min;e.direction==="left"&&(t=-t,n=-n);var a=(t-n)*r;s.style.transform="rotate("+(n+a)+"deg) translateZ(0)"},q=function(r){r.style.transform=""},z=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?1:e.max,n=isNaN(e.max)?0:e.max,a=(t-n)*r;e.reverse?s.style.opacity=t-a:s.style.opacity=n+a},H=function(r){r.style.opacity=""},L=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],n=e.to||[255,255,255],a=(n[0]-t[0])*r,i=(n[1]-t[1])*r,c=(n[2]-t[2])*r;s.style.borderColor="rgb("+Math.floor(n[0]-a)+", "+Math.floor(n[1]-i)+", "+Math.floor(n[2]-c)+")"},F=function(r){r.style.borderColor=""},G=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],n=e.to||[255,255,255],a=(n[0]-t[0])*r,i=(n[1]-t[1])*r,c=(n[2]-t[2])*r;s.style.backgroundColor="rgb("+Math.floor(n[0]-a)+", "+Math.floor(n[1]-i)+", "+Math.floor(n[2]-c)+")"},V=function(r){r.style.backgroundColor=""},B=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?25:e.max,n=isNaN(e.min)?0:e.min,a=(t-n)*r;e.reverse?a=t-a:a=n+a,s.style.borderRadius=a+"px"},W=function(r){r.style.borderRadius=""},j=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?8:e.max,n=isNaN(e.min)?0:e.min,a=(t-n)*r;e.reverse?a=t-a:a=n+a,s.style.filter="blur("+a+"px)"},O=function(r){r.style.filter=""},p={up:-1,down:1,left:1,right:-1},U=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.radius)?20:e.radius,n=Object.keys(p).includes(e.direction)?e.direction:"right",a=Object.keys(p).includes(e.curve)?e.curve:"down",i=[p[n],p[a]],c=i[0],f=i[1];s.style.transform="translate3d("+c*t*Math.cos(r*Math.PI)+"px, "+f*t*Math.sin(r*Math.PI)+"px, 0)"},X=function(r){r.style.transform=""},Y=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],n=e.to||[255,255,255],a=(n[0]-t[0])*r,i=(n[1]-t[1])*r,c=(n[2]-t[2])*r;s.style.boxShadow="0 0 1em rgb("+Math.floor(n[0]-a)+", "+Math.floor(n[1]-i)+", "+Math.floor(n[2]-c)+")"},_=function(r){r.style.boxShadow=""},K=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?25:e.max,n=isNaN(e.min)?0:e.min,a=(t-n)*r;e.reverse?a=t-a:a=n+a,s.style.letterSpacing=a+"px"},I=function(r){r.style.letterSpacing=""},Z=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?.8:e.max,n=isNaN(e.min)?1.2:e.min,a=(t-n)*r+n;s.style.fontSize=a+"em"},J=function(r){r.style.fontSize="1em"},Q=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?5:e.max,n=isNaN(e.min)?0:e.min,a=(t-n)*r+n;s.style.borderWidth=a+"px"},ee=function(r){r.style.borderWidth=""},te=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=isNaN(e.max)?25:e.max,n=isNaN(e.min)?20:e.min,a=(t-n)*r;e.reverse&&(a=t-a),s.style.transform="matrix(1, "+Math.sin(a)+", 0, 1 , 0 ,0)"},re=function(r){r.style.transform=""},ne=function(s,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=e.from||[0,0,0],n=e.to||[255,255,255],a=(n[0]-t[0])*r,i=(n[1]-t[1])*r,c=(n[2]-t[2])*r;s.style.color="rgb("+Math.floor(n[0]-a)+", "+Math.floor(n[1]-i)+", "+Math.floor(n[2]-c)+")"},ae=function(r){r.style.color=""},se=function(){function s(){m(this,s),this.resets={},this.dances={},this.registerDance("size",C,M),this.registerDance("pulse",C,M),this.registerDance("shake",T,E),this.registerDance("jump",P,k),this.registerDance("twist",D,q),this.registerDance("vanish",z,H),this.registerDance("color",G,V),this.registerDance("borderColor",L,F),this.registerDance("radius",B,W),this.registerDance("blur",j,O),this.registerDance("swing",U,X),this.registerDance("neon",Y,_),this.registerDance("kern",K,I),this.registerDance("borderWidth",Q,ee),this.registerDance("fontSize",Z,J),this.registerDance("tilt",te,re),this.registerDance("fontColor",ne,ae)}return v(s,[{key:"registerDance",value:function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){};this.dances[e]=t,this.resets[e]=n}},{key:"dance",value:function(e,t,n,a){var i=e;typeof e=="string"?i=this.dances[e]||this.dances.pulse:i=e.dance;var c=document.getElementsByClassName(t);Array.from(c).forEach(function(f){return i(f,n,a)})}},{key:"reset",value:function(e,t){var n=e;typeof e=="string"?n=this.resets[e]||this.resets.pulse:n=e.reset;var a=document.getElementsByClassName(t);Array.from(a).forEach(function(i){return n(i)})}}]),s}(),ie=new se,oe=function s(r){var e=this;m(this,s),this.connectExternalAudioElement=function(t){return e.player.connectExternalAudioElement(t)},this.setMusic=function(t){return e.player.setMusic(t)},this.plugMicrophone=function(){return e.player.plugMicrophone()},this.setGain=function(t){return e.player.setGain(t)},this.connectSource=function(t){return e.player.connectSource(t)},this.addRythm=function(t,n,a,i,c){e.rythms.push({elementClass:t,type:n,startValue:a,nbValue:i,options:c})},this.start=function(){e.stopped=!1,e.player.start(),e.analyser.reset(),e.renderRythm()},this.renderRythm=function(){e.stopped||(e.analyser.analyse(),e.rythms.forEach(function(t){var n=t.type,a=t.elementClass,i=t.nbValue,c=t.startValue,f=t.options;e.dancer.dance(n,a,e.analyser.getRangeAverageRatio(c,i),f)}),e.animationFrameRequest=requestAnimationFrame(e.renderRythm))},this.resetRythm=function(){e.rythms.forEach(function(t){var n=t.type,a=t.elementClass;t.nbValue,t.startValue,t.options,e.dancer.reset(n,a)})},this.stop=function(t){e.stopped=!0,e.player.stop(),e.animationFrameRequest&&cancelAnimationFrame(e.animationFrameRequest),t||e.resetRythm()},this.player=new y(r),this.analyser=o,this.maxValueHistory=o.maxValueHistory,this.dancer=ie,this.rythms=[],this.addRythm("rythm-bass","pulse",0,10),this.addRythm("rythm-medium","pulse",150,40),this.addRythm("rythm-high","pulse",400,200),this.animationFrameRequest=void 0};return oe})})(ce);const le=N,g=WaveSurfer.create({container:"#wave",barWidth:2,backgroundColor:"#fffaf0",barGap:5,barRadius:3,cursorColor:"#fff",waveColor:"#d2b48c",progressColor:"#ff8c00",width:500,height:100,interact:!1}),d=new le,R="/assets/73_bpm78.mp3";d.setMusic(R);d.startingScale=.75;d.pulseRatio=.3;d.maxValueHistory=100;g.load(R);let x=!1;function fe(){g.stop(),g.seekTo(0),x=!1,w.textContent="再生",d.stop()}g.on("finish",fe);const w=document.getElementById("playPauseButton");w.addEventListener("click",()=>{x?(g.pause(),w.textContent="start",x=!1,d.stop()):(g.play(),w.textContent="stop",x=!0,d.start())});rate=0;clickPos={x:0,y:0};movePos={x:0,y:0};me();function me(){sw=window.innerWidth,sh=window.innerHeight,clickPos.x=b(0,sw),clickPos.y=b(0,sh),$(window).on("click",S)}window.requestAnimationFrame(A);function A(){sw=window.innerWidth,sh=window.innerHeight,ease=.02,rate+=(1-rate)*ease,Math.abs(1-rate)<.005&&S(),tg=$(".js-tg"),tgX=sw*.5,tgY=sh*.5,move=$(".js-move"),moveX=tgX*(1-rate)+clickPos.x*rate,moveY=tgY*(1-rate)+clickPos.y*rate,movePos.x+=(moveX-movePos.x)*ease,movePos.y+=(moveY-movePos.y)*ease,TweenMax.set(move,{x:movePos.x,y:movePos.y}),TweenMax.set(tg,{x:tgX,y:tgY}),window.requestAnimationFrame(A)}function S(l){rate=0,l==null?(clickPos.x=b(0,window.innerWidth),clickPos.y=b(0,window.innerHeight)):(clickPos.x=l.clientX,clickPos.y=l.clientY)}function b(l,h){return Math.random()*(h-l)+l}
