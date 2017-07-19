!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","prop-types","react"],t):"object"==typeof exports?exports.ReactVirtualInput=t(require("classnames"),require("noop"),require("prop-types"),require("react")):e.ReactVirtualInput=t(e.classnames,e.noop,e["prop-types"],e.react)}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,s,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var p=n(10),d=r(p),v=n(9),b=r(v),m=n(7),h=r(m),y=n(6),g=r(y),A=n(8),k=r(A),N=(s=u=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e){var t=n.props,r=(t.focused,t.onFocus),o=n.refs,a=o.clear,i=o.root;o.text;n.stop(e),i.contains(e.target)&&e.target!==a&&n.setState({focused:!0},r)},n._onClear=function(e){var t=n.props.onClear;n.stop(e),t(e)},n.state={focused:e.focused},n}return l(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.onBlur;document.addEventListener("click",function(){t(e)},!1)}},{key:"componentWillReceiveProps",value:function(e){var t=e.focused;t!==this.state.focused&&this.setState({focused:t})}},{key:"getSlicedValue",value:function(){var e=this.props,t=e.maxLength,n=e.value,r=e.filter;return r(n.slice(0,t))}},{key:"stop",value:function(e){e.nativeEvent.stopImmediatePropagation(),e.nativeEvent.stopPropagation()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.value,r=e.clearable,a=e.blinkable,i=(e.onClear,e.focused),l=e.placeholder,u=(e.filter,o(e,["className","value","clearable","blinkable","onClear","focused","placeholder","filter"])),s=!!n;return d.default.createElement("div",c({},u,{ref:"root",onClick:this._onClick,"data-focuced":i,"data-clearable":r,"data-blinkable":a,className:(0,h.default)("react-virtual-input",t)}),d.default.createElement("span",{className:"react-virtual-input-text",ref:"text"},this.getSlicedValue()),!s&&d.default.createElement("span",{className:"react-virtual-input-placeholder"},l),a&&this.state.focused&&d.default.createElement("span",{"data-value":s,className:"blinking-cursor"}),r&&s&&d.default.createElement("span",{className:"react-virtual-input-close",onClick:this._onClear},d.default.createElement("img",{src:g.default})))}}]),t}(p.PureComponent),u.propTypes={className:b.default.string,clearable:b.default.bool,blinkable:b.default.bool,onClear:b.default.func,maxLength:b.default.number,value:b.default.string,placeholder:b.default.string,filter:b.default.func,focused:b.default.bool,onFocus:b.default.func,onBlur:b.default.func},u.defaultProps={maxLength:Number.MAX_VALUE,clearable:!0,blinkable:!0,focused:!1,filter:function(e){return e},onFocus:k.default,onBlur:k.default,onClear:k.default},s);t.default=N},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'@-webkit-keyframes blink{0%,to{border-color:transparent}50%{border-color:#3e82f7}}@keyframes blink{0%,to{border-color:transparent}50%{border-color:#3e82f7}}.react-virtual-input{font-size:10px;line-height:2em;height:2em;border:1px solid #ccc;position:relative;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.react-virtual-input:after{content:"";height:100%;vertical-align:middle;display:inline-block}.react-virtual-input[data-clearable=true]{padding:.6em 3.6em .6em 1em}.react-virtual-input[data-clearable=false]{padding:.6em 1em}.react-virtual-input>span{vertical-align:middle;display:inline-block}.react-virtual-input-text{font-size:1.6em}.react-virtual-input-placeholder{color:#999;font-size:1.4em}.react-virtual-input-close,.react-virtual-input-placeholder{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.react-virtual-input-close{display:block;width:14px;height:14px;right:.5em}.react-virtual-input-close:after{content:"";display:block;position:absolute;top:-.6em;right:-.6em;bottom:-.6em;left:-.6em}.react-virtual-input-close>img{width:100%;position:absolute}.react-virtual-input .blinking-cursor{font-weight:100;font-size:2.4em;height:100%;border-left:2px solid #3e82f7;color:#3e82f7;position:relative;z-index:2;-webkit-animation:1s blink step-end infinite;animation:1s blink step-end infinite}.react-virtual-input .blinking-cursor[data-value=true]{margin-left:.2em}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(s(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(s(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],l=o[2],u=o[3],s={css:i,media:l,sourceMap:u};n[a]?n[a].parts.push(s):t.push(n[a]={id:a,parts:[s]})}return t}function a(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function s(e,t){var n,r,o;if(t.singleton){var a=y++;n=h||(h=l(t)),r=c.bind(null,n,a,!1),o=c.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=A(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},v=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=v(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=v(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var l=n[i],u=d[l.id];u.refs--,a.push(u)}if(e){var s=o(e);r(s,t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var A=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1OTg1QjMzMzZDMTExRTdBQzI5OTQwRUUyNTcwNzZEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ1OTg1QjM0MzZDMTExRTdBQzI5OTQwRUUyNTcwNzZEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDU5ODVCMzEzNkMxMTFFN0FDMjk5NDBFRTI1NzA3NkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDU5ODVCMzIzNkMxMTFFN0FDMjk5NDBFRTI1NzA3NkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6wsdI/AAAGNUlEQVR42tRa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"},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-virtual-input.js.map