(()=>{"use strict";const e=e=>{const t=document.getElementById(`${e}`),n=document.getElementById("thanks"),o=document.getElementById("footer_leto_mozaika"),l=document.getElementById("footer_leto_schelkovo"),r=document.querySelector("body"),a=n.querySelector(".close-btn"),s=n.querySelector(".close_icon"),c=document.getElementById("free_visit_form"),i=document.getElementById("callback_form");r.addEventListener("click",(e=>{const t=e.target;t!==a&&t!==s&&t.closest(".form-wrappper")||(n.style.display="none")}));const d=(e,t="red")=>{const n=document.createElement("div");return n.style.cssText=`font-size: 1.7rem; color: ${t}; text-align: center`,n.textContent=e,n},p=d("Пожалуйста, заполните все поля"),h=d("Пожалуйста, подождите!","#3afa20"),m=d("Что-то пошло не так, пожалуйста попробуйте снова"),g=e=>{setTimeout((()=>{e.remove()}),1500)},u={};t.addEventListener("submit",(async function(e){e.preventDefault();const r=a();function a(){let e,n=0;return t.querySelector('input[type="checkbox"]')?(e=t.querySelector('input[type="checkbox"]'),!1===e.checked&&(n++,t.append(p),g(p))):t.querySelector('input[name="phone"]')?(e=t.querySelector('input[name="phone"]'),""===t.querySelector('input[name="phone"]').value&&(n++,t.append(p),g(p))):t.querySelector('input[name="name"]')&&(e=t.querySelector('input[name="name"]'),""===t.querySelector('input[name="name"]').value&&(n++,t.append(p),g(p))),o&&l&&(o.checked||l.checked||n++),console.log(n),n}a()||(t.append(h),g(h)),new FormData(t).forEach(((e,t)=>{u[t]=e})),0===r&&((await fetch("./server.php",{method:"POST",body:JSON.stringify(u)})).ok?(n.style.display="block",c.style.display="none",i.style.display="none",t.reset()):(t.append(m),g(m)))}))};(()=>{const e=document.querySelector("body"),t=document.querySelector(".clubs-list > ul");e.addEventListener("click",(e=>{e.target.closest(".club-select")?t.style.display="block":t.style.display="none"}))})(),(()=>{const e=document.getElementById("free_visit_form"),t=document.querySelector(".open-popup"),n=e.querySelector(".close_icon");document.querySelector("body").addEventListener("click",(o=>{const l=o.target;l===t?e.style.display="block":l!==n&&l.closest(".form-wrapper")||(e.style.display="none")}))})(),(()=>{const e=document.getElementById("callback_form"),t=document.querySelector(".callback-btn"),n=document.querySelector("body"),o=e.querySelector(".close_icon");n.addEventListener("click",(n=>{const l=n.target;l===t?e.style.display="block":l!==o&&l.closest(".form-wrapper")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");document.querySelector("body").addEventListener("click",(n=>{const o=n.target;o.closest(".fixed-gift")?(t.style.display="block",e.style.display="none"):(o.closest(".close-form")||!o.closest(".form-content")||o.closest(".close-btn"))&&(t.style.display="none")}))})(),(()=>{const e=document.createElement("style");e.id="main-slider-styles",e.textContent="\n    .main-slider-active {\n    display: flex !important;\n    }\n    ",document.head.append(e);const t=[...document.querySelectorAll(".main-slider > .slide")];t.forEach((e=>{e.style.display="none",e===t[0]&&e.classList.add("main-slider-active")}));const n=()=>{if(t[t.length-1].classList.contains("main-slider-active"))return t[t.length-1].classList.remove("main-slider-active"),void t[0].classList.add("main-slider-active");for(let e=0;e<t.length;e++)if(t[e].classList.contains("main-slider-active"))return t[e].classList.remove("main-slider-active"),void t[e+1].classList.add("main-slider-active")};((e=3e3)=>{setInterval(n,e)})(1500)})(),(()=>{const e=document.createElement("style");e.id="carousel-style",e.textContent="\n    .services-slider {\n        width: 100%;\n        overflow: hidden;\n        padding-left: 5px;\n        position: relative;\n      }\n      .services-slider > .slide {   \n        min-width: 226px;    \n        margin-right: 0% !important; \n        margin-left: 0%!important;\n        transition: transform 0.5s !important;\n        will-change: transform !important;\n      }\n      .services-slider > span {\n        position: absolute;\n        width: 36px;\n        height: 37px;\n        background-color: #f4c71b !important;\n        border-radius: 40%;\n        text-align: center;\n        padding-top: 11px;\n      }\n      .carousel-slider-left {\n        top: 22%;\n        left: 0;\n        cursor: pointer;\n      }\n      .carousel-slider-right {\n        top: 22%;\n        left: 96.8%;\n        cursor: pointer;\n      }\n\n      @media (max-width: 1100px) {\n        .carousel-slider-left {\n          top: 22%;\n          left: 0%;\n          cursor: pointer;\n        }\n        .carousel-slider-right {\n          top: 22%;\n          left: 96.8%;\n          cursor: pointer;\n        }\n      }\n\n      @media (max-width: 768px) {\n        .carousel-slider-left {\n          top: 22%;\n          left: 1%;\n          cursor: pointer;\n        }\n        .carousel-slider-right {\n          top: 22%;\n          left: 95%;\n          cursor: pointer;\n        }\n      }\n\n      @media (max-width: 550px) {\n        .carousel-slider-left {\n          top: 22%;\n          left: 1%;\n          cursor: pointer;\n        }\n        .carousel-slider-right {\n          top: 22%;\n          left: 92.4%;\n          cursor: pointer;\n        }\n      }\n\n      @media (max-width: 330px) {\n        .carousel-slider-left {\n          top: 22%;\n          left: 3%;\n          cursor: pointer;\n        }\n        .carousel-slider-right {\n          top: 22%;\n          left: 88.7%;\n          cursor: pointer;\n        }\n      }\n    }\n      ",document.head.append(e);const t=document.querySelector(".services-slider"),n=[...t.children],o=document.createElement("span"),l=document.createElement("span");o.className="carousel-slider-left",o.innerHTML='<i class="fa fa-angle-left"></i>',l.className="carousel-slider-right",l.innerHTML='<i class="fa fa-angle-right"></i>',t.append(o),t.append(l);const r=()=>{let e=0,o=0;t.addEventListener("click",(t=>{const l=t.target;return l.closest(".carousel-slider-right")&&o!==n.length-5?(e-=226,o++,void n.forEach((t=>{t.style.transform=`translateX(${e}px)`}))):l.closest(".carousel-slider-left")&&o>0?(e+=226,o--,void n.forEach((t=>{t.style.transform=`translateX(${e}px)`}))):void l.closest(".carousel-slider-left",".carousel-slider-right")}))};r(),window.addEventListener("resize",r)})(),(()=>{const e=document.createElement("style");e.id="photo-gallery-style",e.textContent="\n        .photo-gallery-image {\n            display: none;\n        }\n\n        .photo-gallery-slider {\n            height: 400px;\n        }\n\n        .photo-gallery-image-active {\n            display: flex;\n            width: 700px !important;\n            position: absolute;\n            left: 0;\n            right: 0;\n            margin-left: auto;\n            margin-right: auto;\n        }\n\n        .photo-gallery-wrapper {\n            position: relative;\n            display: flex;\n        }\n\n        .photo-gallery-wrapper > span {\n            z-index: 322 !important;\n            position: absolute;\n            width: 36px;\n            height: 37px;\n            background-color: #f4c71b !important;\n            border-radius: 40%;\n            text-align: center;\n            padding-top:11px;\n        }\n\n        .photo-gallery-left {\n            display: block;\n            top: 40%;\n            left: 15%;\n            cursor: pointer;\n        }\n        .photo-gallery-right {\n            display: block;\n            top: 40%;\n            left: 82%;\n            cursor: pointer;\n        }\n        .photo-gallery-dots-block {\n            position: absolute;\n            top: 90%;\n            left: 0;\n            right: 0;\n            margin-left: auto;\n            margin-right: auto;\n            display: flex;\n            allign-items: center;\n            justify-content: center;\n        }\n        .photo-gallery-dots {\n            height:  3px;\n            width: 30px;\n            margin: 1px;\n            background: #ffffff;\n            border-radius: 10%;\n        }\n        .photo-gallery-dots-active {\n            height:  3px;\n            width: 30px;\n            background: #f4c71b;\n            border: 1px solid #f4c71b;\n        }\n    ",document.head.append(e);const t=document.querySelector(".gallery-bg > .wrapper"),n=document.querySelector(".gallery-slider"),o=document.querySelectorAll(".gallery-slider > .slide > img"),l=document.createElement("span"),r=document.createElement("span"),a=document.createElement("div");t.classList.add("photo-gallery-wrapper"),n.classList.add("photo-gallery-slider"),a.classList.add("photo-gallery-dots-block"),l.className="photo-gallery-left",l.innerHTML='<i class="fa fa-angle-left"></i>',r.className="photo-gallery-right",r.innerHTML='<i class="fa fa-angle-right"></i>',t.append(l),t.append(a),t.append(r),o.forEach((e=>{e===o[0]&&e.classList.add("photo-gallery-image-active"),e.classList.add("photo-gallery-image")}));for(let e=0;e<o.length;e++){const t=document.createElement("button");t.classList.add("photo-gallery-dots"),0===e&&t.classList.add("photo-gallery-dots-active"),a.append(t)}const s=document.querySelectorAll(".photo-gallery-dots"),c=()=>{for(let e=0;e<o.length;e++){if(o[o.length-1].classList.contains("photo-gallery-image-active"))return o[o.length-1].classList.remove("photo-gallery-image-active"),o[o.length-1].classList.add("photo-gallery-image"),o[0].classList.add("photo-gallery-image-active"),s[s.length-1].classList.remove("photo-gallery-dots-active"),void s[0].classList.add("photo-gallery-dots-active");if(o[e].classList.contains("photo-gallery-image-active"))return o[e].classList.remove("photo-gallery-image-active"),o[e].classList.add("photo-gallery-image"),o[e+1].classList.add("photo-gallery-image-active"),s[e].classList.remove("photo-gallery-dots-active"),void s[e+1].classList.add("photo-gallery-dots-active")}};let i;t.addEventListener("click",(e=>{const t=e.target;if(t.closest(".photo-gallery-left"))(()=>{for(let e=0;e<o.length;e++){if(o[0].classList.contains("photo-gallery-image-active"))return o[0].classList.remove("photo-gallery-image-active"),o[0].classList.add("photo-gallery-image"),o[o.length-1].classList.add("photo-gallery-image-active"),s[0].classList.remove("photo-gallery-dots-active"),void s[s.length-1].classList.add("photo-gallery-dots-active");if(o[e].classList.contains("photo-gallery-image-active"))return o[e].classList.remove("photo-gallery-image-active"),o[e].classList.add("photo-gallery-image"),o[e-1].classList.add("photo-gallery-image-active"),s[e].classList.remove("photo-gallery-dots-active"),void s[e-1].classList.add("photo-gallery-dots-active")}})();else if(t.closest(".photo-gallery-right"))c();else if(t.closest(".photo-gallery-dots"))for(let e=0;e<o.length;e++)s[e]===t&&(o.forEach((e=>e.classList.remove("photo-gallery-image-active"))),s.forEach((e=>e.classList.remove("photo-gallery-dots-active"))),o[e].classList.add("photo-gallery-image-active"),s[e].classList.add("photo-gallery-dots-active"))})),i=setInterval(c,3e3),t.addEventListener("mouseover",(e=>{(e.target.matches(".photo-gallery-left")||e.target.matches(".photo-gallery-right")||e.target.matches(".photo-gallery-dots"))&&clearInterval(i)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".photo-gallery-left")||e.target.matches(".photo-gallery-right")||e.target.matches(".photo-gallery-dots"))&&(i=setInterval(c,3e3))}))})(),(()=>{const e=document.getElementById("m1"),t=document.getElementById("m2"),n=document.getElementById("m3"),o=document.getElementById("m4"),l=document.querySelector('[placeholder = "Промокод"]'),r=document.getElementById("price-total"),a=document.getElementById("card_leto_mozaika"),s=document.getElementById("card_leto_schelkovo"),c="ТЕЛО2020";document.querySelector("body").addEventListener("click",(()=>{a.checked&&l.value!==c?e.checked?r.innerHTML=1999:t.checked?r.innerHTML=9900:n.checked?r.innerHTML=13900:o.checked&&(r.innerHTML=19900):s.checked&&l.value!==c?e.checked?r.innerHTML=2999:t.checked?r.innerHTML=14990:n.checked?r.innerHTML=21990:o.checked&&(r.innerHTML=24990):a.checked&&l.value===c?e.checked?r.innerHTML=Math.floor(1399.3):t.checked?r.innerHTML=Math.floor(6930):n.checked?r.innerHTML=Math.floor(9730):o.checked&&(r.innerHTML=Math.floor(13930)):s.checked&&l.value===c&&(e.checked?r.innerHTML=Math.floor(2999*.7):t.checked?r.innerHTML=Math.floor(10493):n.checked?r.innerHTML=Math.floor(21990*.7):o.checked&&(r.innerHTML=Math.floor(17493)))})),l.addEventListener("input",(()=>{l===c?s.checked?e.checked?r.innerHTML=Math.floor(2999*.7):t.checked?r.innerHTML=Math.floor(10493):n.checked?r.innerHTML=Math.floor(21990*.7):o.checked&&(r.innerHTML=Math.floor(17493)):a.checked&&(e.checked?r.innerHTML=Math.floor(1399.3):t.checked?r.innerHTML=Math.floor(6930):n.checked?r.innerHTML=Math.floor(9730):o.checked&&(r.innerHTML=Math.floor(13930))):l!==c&&(a.checked?e.checked?r.innerHTML=1999:t.checked?r.innerHTML=9900:n.checked?r.innerHTML=13900:o.checked&&(r.innerHTML=19900):s.checked&&(e.checked?r.innerHTML=2999:t.checked?r.innerHTML=14990:n.checked?r.innerHTML=21990:o.checked&&(r.innerHTML=24990)))}))})(),(()=>{const e=document.querySelector(".popup-menu"),t=document.querySelector("body"),n=()=>{const e=document.querySelector(".top-menu");window.pageYOffset>330&&window.innerWidth<=768?e.style.position="fixed":e.style.position=""};window.addEventListener("scroll",n),window.addEventListener("resize",n),t.addEventListener("click",(t=>{const n=t.target;n.closest(".hidden-large > img")?e.style.display="flex":(n.closest(".close-menu-btn > img")||n.closest(".scroll > a"))&&(e.style.display="none")}))})(),(()=>{const e=document.getElementById("totop");e.style.cursor="pointer",e.style.display="none",window.addEventListener("scroll",(()=>{window.pageYOffset>640?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})(),((e,t="+7 (___) ___-__-__")=>{const n=document.querySelectorAll(e);function o(e){const n=e.keyCode,o=t,l=o.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let a=0,s=o.replace(/[_\d]/g,(e=>a<r.length?r.charAt(a++)||l.charAt(a):e));a=s.indexOf("_"),-1!==a&&(s=s.slice(0,a));let c=o.substr(0,this.value.length).replace(/_+/g,(e=>"\\d{1,"+e.length+"}")).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"===e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)})('input[name="phone"]'),document.querySelectorAll('input[name="name"]').forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-я\s]/gi,"")}))})),e("form1"),e("form2"),e("banner-form"),e("card_order"),e("footer_form")})();