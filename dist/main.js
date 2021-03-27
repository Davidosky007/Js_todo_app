(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,"* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.bg-test {\r\n  background: #f8f9fa;\r\n}\r\n\r\n.c-pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(o[r]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);a&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:(e,t,n)=>{var a,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function r(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},a=[],o=0;o<e.length;o++){var d=e[o],s=t.base?d[0]+t.base:d[0],l=n[s]||0,i="".concat(s," ").concat(l);n[s]=l+1;var m=r(i),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==m?(c[m].references++,c[m].updater(u)):c.push({identifier:i,updater:h(u,t),references:1}),a.push(i)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var c=n.nc;c&&(a.nonce=c)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,i=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function m(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=i(t,o);else{var c=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(c,r[t]):e.appendChild(c)}}function u(e,t,n){var a=n.css,o=n.media,c=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,b=0;function h(e,t){var n,a,o;if(t.singleton){var c=b++;n=p||(p=s(t)),a=m.bind(null,n,c,!1),o=m.bind(null,n,c,!0)}else n=s(t),a=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=r(n[a]);c[o].references--}for(var s=d(e,t),l=0;l<n.length;l++){var i=r(n[l]);0===c[i].references&&(c[i].updater(),c.splice(i,1))}n=s}}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={id:a,exports:{}};return e[a](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(e,t)=>{Object.keys(t).forEach((n=>{e.setAttribute(n,t[n])}))},t=(e,t,n,a)=>{const o=[];return{title:e,description:t,priority:n,date:a,checkList:o,addItem:function(e){o.push(e)},deleteItem:function(e){o.splice(e,1)}}},a=e=>{const n=[];return{title:e,tasksList:n,addTask:function(e,a,o,c){const r=t(e,a,o,c);return n.push(r),"hey"},deleteTask:function(e){n.splice(e,1)},editTask:function(e,t,a,o,c){let r=n[e];r={title:t,description:a,priority:o,date:c},n[e]=r}}},o=(t,n)=>{const a=document.createElement("div");e(a,{class:"col-xs-12 col-sm-6 col-md-4 pt-5",id:`project-${t}`,"data-index":t});const o=document.createElement("div");o.className="card shadow";const c=document.createElement("div");c.className="card-header text-white bg-dark d-flex justify-content-between pt-3";const r=document.createElement("h6");r.textContent=n.title;const d=document.createElement("div"),s=document.createElement("a");e(s,{class:"text-light c-pointer editProject",id:`editProject-${t}`,"data-index":t});const l=document.createElement("a");e(l,{class:"text-light c-pointer deleteProject",id:`deleteProject-${t}`,"data-index":t,"data-bs-toggle":"modal","data-bs-target":"#delProject"});const i=document.createElement("i");i.className="fas fa-edit mx-3";const m=document.createElement("i");m.className="fas fa-trash mx-3";const u=document.createElement("div");u.className="card-body";const p=((t,n)=>{const a=document.createElement("div");return n.forEach((o=>{const{title:c,description:r,priority:d,date:s}=o,l=((t,n,a,o,c,r)=>{const d=document.createElement("div");d.className="mt-3";const s=document.createElement("div");s.className="card bg-test shadow";const l=document.createElement("div");l.className="card-body";const i=document.createElement("div");i.className="d-flex justify-content-between";const m=document.createElement("h5");m.textContent=a;const u=document.createElement("div"),p=document.createElement("a");e(p,{class:"text-light c-pointer editTask","data-index":n,"data-index-project":t});const b=document.createElement("a");e(b,{class:"text-light c-pointer deleteTask","data-index":n,"data-index-project":t,"data-bs-toggle":"modal","data-bs-target":"#delTask"});const h=document.createElement("i");h.className="fas fa-edit mx-3 text-info";const v=document.createElement("i");v.className="fas fa-trash mx-3 text-danger";const g=document.createElement("span");g.className="badge rounded-pill bg-danger",g.innerHTML=r;const y=document.createElement("p");y.className="card-text",y.textContent=o;const f=document.createElement("p");f.className="card-text";const E=document.createElement("small");E.className="text-muted",E.textContent=c,f.append(E);const S=document.createElement("div");e(S,{class:"row p-2"});const x=document.createElement("button");e(x,{class:"btn btn-secondary btn-sm","data-bs-toggle":"collapse",href:`#collapse${n}${t}`,role:"button","aria-expanded":"false","aria-controls":`collapse${n}${t}`}),x.textContent="See details";const k=document.createElement("div");e(k,{class:"collapse",id:`collapse${n}${t}`});const j=document.createElement("div");return e(j,{class:"p-2"}),j.appendChild(y),k.appendChild(j),S.append(x,k),p.appendChild(h),b.appendChild(v),u.append(p,b),i.append(m,u),l.append(i,g,f,S),s.appendChild(l),d.appendChild(s),d})(t,n.indexOf(o),c,r,s,d);a.appendChild(l)})),a})(t,n.tasksList);u.appendChild(p);const b=document.createElement("div");b.className="card-footer d-grid gap-2";const h=document.createElement("button");return e(h,{class:"btn btn-primary text-light shadow add-task",type:"button",id:"save-task","data-bs-toggle":"modal","data-bs-target":"#addTask","data-projectindex":t}),h.innerHTML="Add task",s.appendChild(i),l.appendChild(m),d.append(s,l),c.append(r,d),b.appendChild(h),o.append(c,u,b),a.appendChild(o),a},c=t=>{const n=t.currentTarget.dataset.index,a=document.getElementById("addProject"),o=bootstrap.Modal.getInstance(a);document.querySelector("#exMl").innerHTML="Edit Project";const c=document.querySelector("#update-btn");e(c,{"data-index":n}),document.querySelector("#save-btn").classList.add("hide"),c.classList.remove("hide");const r=document.querySelector("#project-title-input"),d=localStorage.getItem("projects");r.value=d[n].title,o.show()},r=t=>{const n=t.currentTarget.dataset.index,a=document.querySelector("#project-title-confirm"),o=JSON.parse(localStorage.getItem("projects"));a.innerHTML=`Do you want to delete "${o[n].title}"?`;const c=document.querySelector("#delBtn");e(c,{"data-index":n})},d=t=>{const n=t.currentTarget.dataset.projectindex,a=document.querySelector("#task-title-input"),o=document.querySelector("#task-textarea"),c=document.querySelector("#task-select"),r=document.querySelector("#task-date-input");p([a,o,c,r]),document.querySelector("#exMlTask").innerHTML="Add Task";const d=document.querySelector("#update-btn-task"),s=document.querySelector("#save-btn-task");d.classList.add("hide"),s.classList.remove("hide");const l=document.querySelector("#save-btn-task");e(l,{"data-parentindex":n})},s=e=>"1"===e?"Low":"2"===e?"Medium":"3"===e?"High":e,l=t=>{const n=t.currentTarget,a=n.dataset.index,o=n.dataset.indexProject,c=document.getElementById("addTask"),r=bootstrap.Modal.getInstance(c);document.querySelector("#exMlTask").innerHTML="Edit Task";const d=document.querySelector("#update-btn-task");e(d,{"data-index":a,"data-index-project":o}),document.querySelector("#save-btn-task").classList.add("hide"),d.classList.remove("hide");const s=document.querySelector("#task-title-input"),l=document.querySelector("#task-textarea"),i=document.querySelector("#task-select"),m=document.querySelector("#task-date-input"),u=JSON.parse(localStorage.getItem("projects"));var p;s.value=u[o].tasksList[a].title,l.value=u[o].tasksList[a].description,i.value="Low"===(p=u[o].tasksList[a].priority)?"1":"Medium"===p?"2":"High"===p?"3":0,m.value=u[o].tasksList[a].date,r.show()},i=t=>{const n=t.currentTarget,a=n.dataset.index,o=n.dataset.indexProject,c=document.querySelector("#task-title-confirm"),r=JSON.parse(localStorage.getItem("projects"));c.innerHTML=`Do you want to delete "${r[o].tasksList[a].title}"?`;const d=document.querySelector("#delBtnTask");e(d,{"data-index":a,"data-index-project":o})},m=e=>{const t=document.querySelector("#projects-wrapper");document.querySelector("#projects-wrapper").innerHTML="",e.forEach((n=>{const a=e.indexOf(n),s=o(a,n);t.appendChild(s),document.querySelectorAll(".editProject").forEach((e=>{e.addEventListener("click",c)})),document.querySelectorAll(".deleteProject").forEach((e=>{e.addEventListener("click",r)})),document.querySelectorAll(".add-task").forEach((e=>{e.addEventListener("click",d)})),document.querySelectorAll(".editTask").forEach((e=>{e.addEventListener("click",l)})),document.querySelectorAll(".deleteTask").forEach((e=>{e.addEventListener("click",i)}))}))},u=JSON.parse(localStorage.getItem("projects")),p=(e=[])=>{e.forEach((e=>{e.value=""}))},b=()=>{const e=document.querySelector("#project-title-input");if(e.value.trim().length>1){const t=a(e.value);let n=[];n=JSON.parse(localStorage.getItem("projects")),n.push(t),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(n)),p([e]);const o=document.getElementById("addProject");bootstrap.Modal.getInstance(o).hide(),m(JSON.parse(localStorage.getItem("projects")))}else e.className="form-control is-invalid was-validated"},h=()=>{const e=document.querySelector("#update-btn"),t=document.querySelector("#save-btn");e.classList.add("hide"),t.classList.remove("hide"),document.querySelector("#project-title-input").value="",document.querySelector("#exMl").innerHTML="Add Project",document.querySelector("#save-btn").addEventListener("click",b)};var v=n(379),g=n.n(v),y=n(426);g()(y.Z,{insert:"head",singleton:!1}),y.Z.locals,localStorage.getItem("projects")||localStorage.setItem("projects",JSON.stringify([a("Default Project")])),(()=>{const n=document.querySelector("#content"),a=(()=>{const t=document.createElement("header"),n=document.createElement("h2"),a=document.createElement("button");return t.setAttribute("class","pt-5 d-flex justify-content-between"),n.setAttribute("class","text-secondary"),e(a,{class:"btn btn-primary btn-lg shadow",id:"add-project-btn","data-bs-toggle":"modal","data-bs-target":"#addProject"}),n.textContent="TODO List - JavaScript",a.textContent="Add project",t.append(n,a),t})(),o=(()=>{const t=document.createElement("div");e(t,{class:"modal fade",id:"addProject",tabindex:"-1","aria-labelledby":"exMl","aria-hidden":"true"});const n=document.createElement("div");n.className="modal-header";const a=document.createElement("h5");e(a,{class:"modal-title",id:"exMl"}),a.innerHTML="Add Project";const o=document.createElement("button");e(o,{class:"btn-close",type:"button","ta-bs-dismiss":"modal","aria-label":"Close"});const c=document.createElement("div");c.className="modal-body";const r=document.createElement("input");e(r,{class:"form-control",id:"project-title-input",type:"text",placeholder:"Add the title here"});const d=document.createElement("div");d.className="modal-footer";const s=document.createElement("button");e(s,{class:"btn btn-secondary",type:"button","data-bs-dismiss":"modal"}),s.innerHTML="Close";const l=document.createElement("button");e(l,{class:"btn btn-primary",type:"button",id:"save-btn"}),l.innerHTML="Save Project";const i=document.createElement("button");e(i,{class:"btn btn-primary hide",type:"button",id:"update-btn"}),i.innerHTML="Edit Project";const m=document.createElement("div");m.className="modal-content";const u=document.createElement("div");return u.className="modal-dialog",n.appendChild(a,o),c.appendChild(r),d.append(s,l,i),m.append(n,c,d),u.appendChild(m),t.appendChild(u),t})(),c=(()=>{const t=document.createElement("div");e(t,{class:"modal fade",id:"delProject",tabindex:"-1","aria-labelledby":"exMlDel","aria-hidden":"true"});const n=document.createElement("div");n.className="modal-header";const a=document.createElement("h5");e(a,{class:"modal-title",id:"exMlDel"}),a.innerHTML="Delete Project";const o=document.createElement("button");e(o,{class:"btn-close",type:"button","ta-bs-dismiss":"modal","aria-label":"Close"});const c=document.createElement("div");c.className="modal-body";const r=document.createElement("h4");e(r,{class:"alert alert-danger",id:"project-title-confirm",role:"alert"}),r.innerHTML="Do you want to delete this project?";const d=document.createElement("div");d.className="modal-footer";const s=document.createElement("button");e(s,{class:"btn btn-secondary",type:"button","data-bs-dismiss":"modal"}),s.innerHTML="Close";const l=document.createElement("button");e(l,{class:"btn btn-danger",type:"button",id:"delBtn"}),l.innerHTML="Delete project";const i=document.createElement("div");i.className="modal-content";const m=document.createElement("div");return m.className="modal-dialog",n.appendChild(a,o),c.appendChild(r),d.append(s,l),i.append(n,c,d),m.appendChild(i),t.appendChild(m),t})(),r=(()=>{const t=document.createElement("div");e(t,{class:"modal fade",id:"addTask",tabindex:"-1","aria-labelledby":"exMlTask","aria-hidden":"true"});const n=document.createElement("div");n.className="modal-header";const a=document.createElement("h5");e(a,{class:"modal-title",id:"exMlTask"}),a.innerHTML="Add Task";const o=document.createElement("button");e(o,{class:"btn-close",type:"button","ta-bs-dismiss":"modal","aria-label":"Close"});const c=document.createElement("div");c.className="modal-body";const r=document.createElement("input");e(r,{class:"form-control mb-3",id:"task-title-input",type:"text",placeholder:"Add the task title here"});const d=document.createElement("textarea");e(d,{class:"form-control mb-3",id:"task-textarea",row:"3",placeholder:"Add details here"});const s=document.createElement("select");e(s,{class:"form-control mb-3",id:"task-select","aria-label":"Choose your priority"});const l=document.createElement("option");e(l,{value:"1"});const i=document.createElement("option");e(i,{value:"2"});const m=document.createElement("option");e(m,{value:"3"}),l.textContent="Low",i.textContent="Medium",m.textContent="High",s.append(l,i,m);const u=document.createElement("input");e(u,{class:"form-control mb-3",id:"task-date-input",type:"date",placeholder:"Add the date"});const p=document.createElement("div");p.className="modal-footer";const b=document.createElement("button");e(b,{class:"btn btn-secondary",type:"button","data-bs-dismiss":"modal"}),b.innerHTML="Close";const h=document.createElement("button");e(h,{class:"btn btn-primary",type:"button",id:"save-btn-task"}),h.innerHTML="Save Task";const v=document.createElement("button");e(v,{class:"btn btn-warning hide",type:"button",id:"update-btn-task"}),v.innerHTML="Edit Task";const g=document.createElement("div");g.className="modal-content";const y=document.createElement("div");return y.className="modal-dialog",n.append(a,o),c.append(r,d,s,u),p.append(b,h,v),g.append(n,c,p),y.appendChild(g),t.appendChild(y),t})(),d=(()=>{const t=document.createElement("div");e(t,{class:"modal fade",id:"delTask",tabindex:"-1","aria-labelledby":"exMlDelTask","aria-hidden":"true"});const n=document.createElement("div");n.className="modal-header";const a=document.createElement("h5");e(a,{class:"modal-title",id:"exMlDelTask"}),a.innerHTML="Delete Task";const o=document.createElement("button");e(o,{class:"btn-close",type:"button","ta-bs-dismiss":"modal","aria-label":"Close"});const c=document.createElement("div");c.className="modal-body";const r=document.createElement("h4");e(r,{class:"alert alert-danger",id:"task-title-confirm",role:"alert"}),r.innerHTML="Do you want to delete this task?";const d=document.createElement("div");d.className="modal-footer";const s=document.createElement("button");e(s,{class:"btn btn-secondary",type:"button","data-bs-dismiss":"modal"}),s.innerHTML="Close";const l=document.createElement("button");e(l,{class:"btn btn-danger",type:"button",id:"delBtnTask"}),l.innerHTML="Delete task";const i=document.createElement("div");i.className="modal-content";const m=document.createElement("div");return m.className="modal-dialog",n.appendChild(a,o),c.appendChild(r),d.append(s,l),i.append(n,c,d),m.appendChild(i),t.appendChild(m),t})(),l=document.createElement("div");e(l,{class:"row",id:"projects-wrapper"}),n.append(c,a,o,r,d,l),document.querySelector("#add-project-btn").addEventListener("click",h),document.querySelector("#update-btn").addEventListener("click",(e=>{const t=e.currentTarget.dataset.index,n=document.querySelector("#project-title-input"),a=localStorage.getItem("projects");a[t].title=n.value,localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(a)),m(JSON.parse(localStorage.getItem("projects")));const o=document.getElementById("addProject");bootstrap.Modal.getInstance(o).hide()})),document.querySelector("#delBtn").addEventListener("click",(e=>{const t=e.currentTarget.dataset.index,n=JSON.parse(localStorage.getItem("projects"));n.splice(t,1),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(n)),m(JSON.parse(localStorage.getItem("projects")));const a=document.getElementById("delProject");bootstrap.Modal.getInstance(a).hide()})),document.querySelector("#update-btn-task").addEventListener("click",(e=>{const t=e.currentTarget,n=t.dataset.index,a=t.dataset.indexProject,o=document.querySelector("#task-title-input").value,c=document.querySelector("#task-textarea").value,r=s(document.querySelector("#task-select").value),d=document.querySelector("#task-date-input").value,l=JSON.parse(localStorage.getItem("projects")),i={title:o,description:c,priority:r,date:d};l[a].tasksList[n]=i,localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(l)),m(JSON.parse(localStorage.getItem("projects")));const u=document.getElementById("addTask");bootstrap.Modal.getInstance(u).hide()})),document.querySelector("#delBtnTask").addEventListener("click",(e=>{const t=e.currentTarget,n=t.dataset.index,a=t.dataset.indexProject,o=JSON.parse(localStorage.getItem("projects"));o[a].tasksList.splice(n,1),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(o)),m(JSON.parse(localStorage.getItem("projects")));const c=document.getElementById("delTask");bootstrap.Modal.getInstance(c).hide()})),(()=>{const e=document.querySelector("#save-btn-task");e.addEventListener("click",(()=>{const n=document.querySelector("#task-title-input").value,a=document.querySelector("#task-textarea").value,o=s(document.querySelector("#task-select").value),c=document.querySelector("#task-date-input").value,r=document.querySelector("#addTask"),d=bootstrap.Modal.getInstance(r),l=JSON.parse(localStorage.getItem("projects"));l[e.dataset.parentindex].tasksList.push(t(n,a,o,c)),localStorage.removeItem("projects"),localStorage.setItem("projects",JSON.stringify(l)),m(JSON.parse(localStorage.getItem("projects"))),d.hide()}))})(),m(u)})()})()})();