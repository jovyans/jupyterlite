(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4855],{16499:(r,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});var a=e(1799),t=e.n(a),o=e(82609),c=e.n(o)()(t());c.push([r.id,"/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-darker.CodeMirror {\n  background-color: #212121;\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .CodeMirror-gutters {\n  background: #212121;\n  color: #545454;\n  border: none;\n}\n\n.cm-s-material-darker .CodeMirror-guttermarker,\n.cm-s-material-darker .CodeMirror-guttermarker-subtle,\n.cm-s-material-darker .CodeMirror-linenumber {\n  color: #545454;\n}\n\n.cm-s-material-darker .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-darker div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::selection,\n.cm-s-material-darker .CodeMirror-line>span::selection,\n.cm-s-material-darker .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-darker .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-darker .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-darker .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-darker .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-darker .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-comment {\n  color: #545454;\n}\n\n.cm-s-material-darker .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-darker .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-darker .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/material-darker.css"],names:[],mappings:"AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-darker.CodeMirror {\n  background-color: #212121;\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .CodeMirror-gutters {\n  background: #212121;\n  color: #545454;\n  border: none;\n}\n\n.cm-s-material-darker .CodeMirror-guttermarker,\n.cm-s-material-darker .CodeMirror-guttermarker-subtle,\n.cm-s-material-darker .CodeMirror-linenumber {\n  color: #545454;\n}\n\n.cm-s-material-darker .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-darker div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(97, 97, 97, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::selection,\n.cm-s-material-darker .CodeMirror-line>span::selection,\n.cm-s-material-darker .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-line::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span::-moz-selection,\n.cm-s-material-darker .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-darker .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-darker .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-darker .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-darker .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-darker .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-darker .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-comment {\n  color: #545454;\n}\n\n.cm-s-material-darker .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-darker .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-darker .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-darker .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-darker .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-darker .cm-variable-3,\n.cm-s-material-darker .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-darker .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-darker .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}"],sourceRoot:""}]);const i=c},82609:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,a){"string"==typeof r&&(r=[[null,r,""]]);var t={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(t[c]=!0)}for(var i=0;i<r.length;i++){var l=[].concat(r[i]);a&&t[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},1799:r=>{"use strict";function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=r[e];return a}r.exports=function(r){var e,a,t=(a=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],a=!0,t=!1,o=void 0;try{for(var c,i=r[Symbol.iterator]();!(a=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);a=!0);}catch(r){t=!0,o=r}finally{try{a||null==i.return||i.return()}finally{if(t)throw o}}return e}}(e,a)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var a=Object.prototype.toString.call(r).slice(8,-1);return"Object"===a&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a?Array.from(r):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(r,e):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=t[1],c=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(l," */"),m=c.sources.map((function(r){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(r," */")}));return[o].concat(m).concat([A]).join("\n")}return[o].join("\n")}},74855:(r,n,e)=>{var a=e(16499);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[r.id,a,""]]);e(46062)(a,{insert:"head",singleton:!1}),a.locals&&(r.exports=a.locals)},46062:(r,n,e)=>{"use strict";var a,t={},o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}();function c(r,n){for(var e=[],a={},t=0;t<r.length;t++){var o=r[t],c=n.base?o[0]+n.base:o[0],i={css:o[1],media:o[2],sourceMap:o[3]};a[c]?a[c].parts.push(i):e.push(a[c]={id:c,parts:[i]})}return e}function i(r,n){for(var e=0;e<r.length;e++){var a=r[e],o=t[a.id],c=0;if(o){for(o.refs++;c<o.parts.length;c++)o.parts[c](a.parts[c]);for(;c<a.parts.length;c++)o.parts.push(E(a.parts[c],n))}else{for(var i=[];c<a.parts.length;c++)i.push(E(a.parts[c],n));t[a.id]={id:a.id,refs:1,parts:i}}}}function l(r){var n=document.createElement("style");if(void 0===r.attributes.nonce){var a=e.nc;a&&(r.attributes.nonce=a)}if(Object.keys(r.attributes).forEach((function(e){n.setAttribute(e,r.attributes[e])})),"function"==typeof r.insert)r.insert(n);else{var t=o(r.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}return n}var A,m=(A=[],function(r,n){return A[r]=n,A.filter(Boolean).join("\n")});function s(r,n,e,a){var t=e?"":a.css;if(r.styleSheet)r.styleSheet.cssText=m(n,t);else{var o=document.createTextNode(t),c=r.childNodes;c[n]&&r.removeChild(c[n]),c.length?r.insertBefore(o,c[n]):r.appendChild(o)}}function d(r,n,e){var a=e.css,t=e.media,o=e.sourceMap;if(t&&r.setAttribute("media",t),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleSheet)r.styleSheet.cssText=a;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(a))}}var u=null,C=0;function E(r,n){var e,a,t;if(n.singleton){var o=C++;e=u||(u=l(n)),a=s.bind(null,e,o,!1),t=s.bind(null,e,o,!0)}else e=l(n),a=d.bind(null,e,n),t=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return a(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;a(r=n)}else t()}}r.exports=function(r,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var e=c(r,n);return i(e,n),function(r){for(var a=[],o=0;o<e.length;o++){var l=e[o],A=t[l.id];A&&(A.refs--,a.push(A))}r&&i(c(r,n),n);for(var m=0;m<a.length;m++){var s=a[m];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete t[s.id]}}}}}}]);
//# sourceMappingURL=4855.386656c64135eefbb7f6.js.map