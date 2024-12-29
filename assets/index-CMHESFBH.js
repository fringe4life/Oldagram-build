(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=[{name:"Vincent van Gogh",username:"vincey1853",location:"Zundert, Netherlands",avatar:"images/avatar-vangogh.jpg",post:"images/post-vangogh.jpg",comment:"just took a few mushrooms lol",likes:21},{name:"Gustave Courbet",username:"gus1819",location:"Ornans, France",avatar:"images/avatar-courbet.jpg",post:"images/post-courbet.jpg",comment:"i'm feelin a bit stressed tbh",likes:4},{name:"Joseph Ducreux",username:"jd1735",location:"Paris, France",avatar:"images/avatar-ducreux.jpg",post:"images/post-ducreux.jpg",comment:"gm friends! which coin are YOU stacking up today?? post below and WAGMI!",likes:152}],r=document.getElementById("app");r==null||r.addEventListener("dblclick",g);const l=()=>{const s=c.map(n=>p(n)).join("");r&&(r.innerHTML=s)};l();function g(s){var n;if(s.target&&s.target instanceof Element&&s.target.classList.contains("click-to-like")){console.log(s.target.parentElement);let o=s.target.parentElement;o.classList.contains("icons")&&(o=o.parentElement);const i=((n=o.querySelector("h2"))==null?void 0:n.textContent)||"";console.log(i);const e=c.find(t=>t.name===i);e&&m(e,o)}}function p({name:s,avatar:n,likes:o,username:i,comment:e,post:t}){return`<article class="post">
                <header class='post-header padding-small'>
                    <img src="assets/${n}" alt="${s}" class='avatar'>
                    <div>
                        <h2>${s}</h2>
                        <p>${i}</p>
                    </div>
                </header>
                <img src="assets/${t}" alt="Post" class='post-img click-to-like'>
                <div class='icons padding-small'>
                    <img src="assets/images/icon-heart.png" alt="Like" class='icon click-to-like'>
                    <img src="assets/images/icon-comment.png" alt="Like" class='icon'>
                    <img src="assets/images/icon-dm.png" alt="Like" class='icon'>
                </div>
                <p class='post-paragraph' id='like'><strong>${o} likes</strong></p>
                <p class='post-paragraph'><strong>${i}</strong> ${e}</p>
        </article>`}function m(s,n){s.likes+=1;const o=n.querySelector("#like");o&&(o.innerHTML=`<strong>${s.likes} likes </strong>`)}
