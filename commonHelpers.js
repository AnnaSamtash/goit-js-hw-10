import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as i,i as d}from"./assets/vendor-9808d4ac.js";const n=document.querySelector("[data-start]");n.disabled=!0;const l=document.querySelector("#datetime-picker"),c=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),m=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");let s;n.addEventListener("click",h);i("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]);let e=t[0];e<new Date?(d.error({message:"Please choose a date in the future",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),n.disabled=!0):(s=e,n.disabled=!1)}});function h(){if(s){n.disabled=!0,l.disabled=!0;let t=setInterval(()=>{let e=s.getTime()-Date.now();if(e<=0)clearInterval(t);else{let o=y(e),r=p(o);c.innerHTML=r[0],u.innerHTML=r[1],m.innerHTML=r[2],f.innerHTML=r[3]}},1e3)}}function y(t){const a={};return a.days=Math.floor(t/864e5),a.hours=Math.floor(t%864e5/36e5),a.minutes=Math.floor(t%864e5%36e5/6e4),a.seconds=Math.floor(t%864e5%36e5%6e4/1e3),a}function p(t){const e=Object.values(t);for(let o=0;o<e.length;o++){let r=e[o].toString();r.length>2?e[o]=r:e[o]=r.padStart(2,0)}return e}
//# sourceMappingURL=commonHelpers.js.map
