function el(e,t={}){return elOptions(elm="<"!==e[0]?document.querySelector(e):createEl(e,t),t),elm}function els(e,t){document.querySelectorAll(e).forEach((e,l)=>{t(e,l)})}function createEl(e){let t=document.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function elStyle(e,t){for(let l in t)if(t.hasOwnProperty(l)){let r=t[l];null===r?e.style.removeProperty(l):e.style[l]=r}}function elOptions(e,t={}){function l(e){if("string"==typeof e){let t=document.querySelector(e);return t||(console.warn(`El not found: ${e}`),null)}return e}if(t.to){let r=l(t.to);r&&r.appendChild(e)}if(t.before){let a=l(t.before);a&&a.parentNode&&a.parentNode.insertBefore(e,a)}if(t.after){let s=l(t.after);s&&s.parentNode&&s.parentNode.insertBefore(e,s.nextSibling)}if(t.replace){let n=l(t.replace);n&&(n.innerHTML="",n.appendChild(e))}if(t.replaceChild){var i=l(t.replaceChild);i&&i.parentNode&&i.parentNode.replaceChild(e,i)}for(let o of(t.remove&&e&&e.parentNode&&e.parentNode.removeChild(e),["click","mouseover","mouseout","change","input","keydown","keyup","focus","blur"]))t[o]&&e.addEventListener(o,t[o]);for(let c of(t.style&&elStyle(e,t.style),t.class&&(Array.isArray(t.class)?e.classList.add(...t.class):t.class.includes(" ")?e.classList.add(...t.class.split(" ")):e.classList.add(t.class)),t.removeClass&&e.classList.remove(t.removeClass),t.replaceClass&&e.classList.replace(t.replaceClass[0],t.replaceClass[1]),t.id&&(e.id=t.id),t.text&&(e.textContent=t.text),t.html&&(e.innerHTML=t.html),["name","value","type","placeholder","href","src","alt","title","target","download","for","id","disabled","selected","checked","autocomplete","autofocus","min","max","step","rows","cols","maxlength","minlength","pattern","required","multiple","accept","accept-charset","action","enctype","method","novalidate","target","rel"]))t[c]&&e.setAttribute(c,t[c]);for(let d in t)(d.startsWith("data-")||d.startsWith("aria-"))&&e.setAttribute(d,t[d])}