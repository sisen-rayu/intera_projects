(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const n=Array.from(document.querySelectorAll(".select_button")),i=Array.from(document.querySelectorAll(".board_item"));n.forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.filter,l=r==="all",o=e=>e.classList.contains(r),t=[];i.forEach(e=>{(l||o(e))&&t.push(e)}),i.forEach(e=>{t.includes(e)?e.style.display="block":e.style.display="none"})})});
