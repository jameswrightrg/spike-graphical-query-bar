(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r=a(0),u=a.n(r),c=a(2),l=a.n(c),s=(a(9),a(10),a(3));a(11);function p(e){var t=e.value;return u.a.createElement("div",{className:"custom-input"},t.map((function(e){return function e(t){switch(t.type){case"Brackets":return u.a.createElement("div",{className:"brackets"},t.value.map((function(t){return e(t)})));case"AndOrSelector":return u.a.createElement("span",{className:"andor-selector"},t.value===n.And?"AND":"OR");case"Table":return u.a.createElement("span",{className:"table-pill"},t.value);case"Pattern":return u.a.createElement("span",{className:"column-name-pattern-pill"},t.value);case"Tag":return u.a.createElement("span",{className:"tag-pill"},t.value);case"string":return u.a.createElement("span",null,t.value);default:return u.a.createElement("span",null)}}(e)})))}!function(e){e[e.And=0]="And",e[e.Or=1]="Or"}(n||(n={}));var i=function(){var e=Object(r.useState)("(table:Customer.Details AND pattern:%name%) or pattern:%customername% or tag:Name"),t=Object(s.a)(e,2),a=t[0],c=t[1],l=function(e){return e.map((function(e){return i(e)})).reduce((function(e,t){return e.concat(t)}))},i=function(e){switch(e.type){case"string":return e.value.split(" ").map((function(e){return function(e){var t=e.split(":");switch(t[0].toLowerCase()){case"and":return{type:"AndOrSelector",value:n.And};case"or":return{type:"AndOrSelector",value:n.Or};case"table":return{type:"Table",value:t[1],valid:!0};case"pattern":return{type:"Pattern",value:t[1]};case"tag":return{type:"Tag",value:t[1]};default:return{type:"string",value:e}}}(e)}));case"bracketed-string":return[{type:"Brackets",value:l(e.value)}]}},o=function(e){var t=function e(t){for(var a=t.length,n=[],r="",u=0,c=0;c<a;c++)"("===t[c]?(0===u?(n.push({type:"string",value:r}),r=""):r+=t[c],u++):")"===t[c]?(1===u?(n.push({type:"bracketed-string",value:e(r)}),r=""):r+=t[c],u>=1&&u--):r+=t[c];return 0===u?n.push({type:"string",value:r}):n.push({type:"bracketed-string",value:e(r)}),n}(e);return console.log(t),l(t)}(a);return u.a.createElement("div",{className:"field"},u.a.createElement("input",{value:a,onChange:function(e){return c(e.currentTarget.value)},placeholder:"Enter query here"}),u.a.createElement(p,{value:o}))};var o=function(){return u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"App-header"},u.a.createElement(i,null)))};l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(o,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.30564179.chunk.js.map