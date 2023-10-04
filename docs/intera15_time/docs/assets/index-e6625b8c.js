(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();class l{constructor(t,o,n){this.hourHand=document.querySelector(t),this.minuteHand=document.querySelector(o),this.secondHand=document.querySelector(n),this.initializeClock(),setInterval(()=>this.updateClock(),1e3)}initializeClock(){this.updateClock()}updateClock(){const t=new Date,o=t.getSeconds()/60,n=(o+t.getMinutes())/60,e=(n+t.getHours())/12;this.setRotation(this.secondHand,o),this.setRotation(this.minuteHand,n),this.setRotation(this.hourHand,e)}setRotation(t,o){t.style.setProperty("--rotation",o*360)}}class m{constructor(t,o){this.dateDiv=document.querySelector(t),this.timeDiv=document.querySelector(o),this.updateClock(),setInterval(()=>this.updateClock(),1e3)}updateClock(){const t=new Date,o=this.formatDate(t),n=this.formatTime(t);this.dateDiv.innerText=o,this.timeDiv.innerText=n}formatDate(t){const o=t.getFullYear(),n=this.zeroPad(t.getMonth()+1),e=this.zeroPad(t.getDate()),s=["日","月","火","水","木","金","土"][t.getDay()];return`${o}年 ${n}月 ${e}日 ${s}曜日`}formatTime(t){const o=this.zeroPad(t.getHours()),n=this.zeroPad(t.getMinutes()),e=this.zeroPad(t.getSeconds());return`${o}:${n}:${e}`}zeroPad(t){return t.toString().padStart(2,"0")}}new l("[data-hour-hand]","[data-minute-hand]","[data-second-hand]");new m("#date","#clock");const d=new Date,c=SunCalc.getTimes(d,35.63314483101375,139.88032459585844),a=document.getElementById("icon"),u=d.getTime();u>=c.sunrise.getTime()&&u<=c.sunset.getTime()?a.src="./images/sun.png":a.src="./images/moon.png";
