(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.querySelector(".clubs-list > ul");e.addEventListener("click",(e=>{e.target.closest(".club-select")?t.style.display="block":t.style.display="none"}))})(),(()=>{const e=document.getElementById("free_visit_form"),t=document.querySelector(".open-popup"),c=e.querySelector(".close_icon");document.querySelector("body").addEventListener("click",(o=>{const l=o.target;l===t?e.style.display="block":l!==c&&l.closest(".form-wrapper")||(e.style.display="none")}))})(),(()=>{const e=document.getElementById("callback_form"),t=document.querySelector(".callback-btn"),c=document.querySelector("body"),o=e.querySelector(".close_icon");c.addEventListener("click",(()=>{const c=event.target;c===t?e.style.display="block":c!==o&&c.closest(".form-wrapper")||(e.style.display="none")}))})()})();