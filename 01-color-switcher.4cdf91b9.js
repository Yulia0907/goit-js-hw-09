const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");t.disabled=!0;let d=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(d),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.4cdf91b9.js.map
