document.addEventListener("click",function(e){var l=document.querySelector(".field"),t=document.querySelector(".append-column"),r=document.querySelector(".remove-row"),n=document.querySelector(".append-row"),d=document.querySelector(".remove-column"),c=document.querySelectorAll("tr");r===e.target&&c.length>2&&(l.firstElementChild.children[0].remove(),c=document.querySelectorAll("tr"),r.disabled=2===c.length,t.disabled=!1),n===e.target&&c[0].children.length<10&&(c.forEach(function(e){return e.append(e.firstElementChild.cloneNode(!0))}),c=document.querySelectorAll("tr"),n.disabled=10===c[0].children.length,d.disabled=!1),d===e.target&&c[0].children.length>2&&(c.forEach(function(e){return e.children[0].remove()}),c=document.querySelectorAll("tr"),d.disabled=2===c[0].children.length,n.disabled=!1),t===e.target&&c.length<10&&(l.firstElementChild.append(l.firstElementChild.children[0].cloneNode(!0)),c=document.querySelectorAll("tr"),t.disabled=10===c.length,r.disabled=!1)});
//# sourceMappingURL=index.0db8aa14.js.map
