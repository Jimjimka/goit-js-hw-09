const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),a.addEventListener("click",(()=>{e.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.79872643.js.map
