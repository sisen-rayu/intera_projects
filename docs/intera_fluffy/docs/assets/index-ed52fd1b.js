(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=[...document.querySelectorAll(".js-animation")],d={rootMargin:"0px",threshold:.5},u=r=>{console.log(r),r.map(o=>{o.isIntersecting?o.target.classList.add("is-active"):o.target.classList.remove("is-active")})},f=new IntersectionObserver(u,d);a.map(r=>{f.observe(r)});const i=[["#FFC0CB","#ADD8E6","#98FB98"],["#E0BBE4","#FFDAC1","#E2F0CB"],["#F7D1E0","#C7CEEA","#F6E6E7"]],g=document.querySelector(".bg-gradient");function c(){const r=i[Math.floor(Math.random()*i.length)];g.style.backgroundImage=`linear-gradient(135deg, ${r[0]}, ${r[1]}, ${r[2]})`}setInterval(c,5e3);c();
