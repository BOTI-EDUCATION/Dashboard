import{cV as ae,cW as de,k as fe,o as Z,b as W,w as A,p as w,q as k,s as pe,V as N,D as te,x as ne,n as re,G as he,m as ie,C as ve,H as me}from"./index.822dd088.js";import{r as ye}from"./vue.runtime.esm-bundler.2fadf847.js";import{b as be}from"./index.85e01d0e.js";import{a as xe,b as Fe,c as se,V as Ae}from"./VCard.6b3a5132.js";import{V as X,d as we}from"./VBtn.e4d3d498.js";import{V as ke}from"./VDivider.342aecb6.js";var le={exports:{}};(function(F){var $=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(o){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,y={},s={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function a(e){return e instanceof m?new m(e.type,a(e.content),e.alias):Array.isArray(e)?e.map(a):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++p}),a.__id},clone:function a(e,t){t=t||{};var n,i;switch(s.util.type(e)){case"Object":if(i=s.util.objId(e),t[i])return t[i];n={},t[i]=n;for(var u in e)e.hasOwnProperty(u)&&(n[u]=a(e[u],t));return n;case"Array":return i=s.util.objId(e),t[i]?t[i]:(n=[],t[i]=n,e.forEach(function(g,l){n[l]=a(g,t)}),n);default:return e}},getLanguage:function(a){for(;a;){var e=c.exec(a.className);if(e)return e[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,e){a.className=a.className.replace(RegExp(c,"gi"),""),a.classList.add("language-"+e)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(n){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(a){var e=document.getElementsByTagName("script");for(var t in e)if(e[t].src==a)return e[t]}return null}},isActive:function(a,e,t){for(var n="no-"+e;a;){var i=a.classList;if(i.contains(e))return!0;if(i.contains(n))return!1;a=a.parentElement}return!!t}},languages:{plain:y,plaintext:y,text:y,txt:y,extend:function(a,e){var t=s.util.clone(s.languages[a]);for(var n in e)t[n]=e[n];return t},insertBefore:function(a,e,t,n){n=n||s.languages;var i=n[a],u={};for(var g in i)if(i.hasOwnProperty(g)){if(g==e)for(var l in t)t.hasOwnProperty(l)&&(u[l]=t[l]);t.hasOwnProperty(g)||(u[g]=i[g])}var f=n[a];return n[a]=u,s.languages.DFS(s.languages,function(b,T){T===f&&b!=a&&(this[b]=u)}),u},DFS:function a(e,t,n,i){i=i||{};var u=s.util.objId;for(var g in e)if(e.hasOwnProperty(g)){t.call(e,g,e[g],n||g);var l=e[g],f=s.util.type(l);f==="Object"&&!i[u(l)]?(i[u(l)]=!0,a(l,t,null,i)):f==="Array"&&!i[u(l)]&&(i[u(l)]=!0,a(l,t,g,i))}}},plugins:{},highlightAll:function(a,e){s.highlightAllUnder(document,a,e)},highlightAllUnder:function(a,e,t){var n={callback:t,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var i=0,u;u=n.elements[i++];)s.highlightElement(u,e===!0,n.callback)},highlightElement:function(a,e,t){var n=s.util.getLanguage(a),i=s.languages[n];s.util.setLanguage(a,n);var u=a.parentElement;u&&u.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(u,n);var g=a.textContent,l={element:a,language:n,grammar:i,code:g};function f(T){l.highlightedCode=T,s.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,s.hooks.run("after-highlight",l),s.hooks.run("complete",l),t&&t.call(l.element)}if(s.hooks.run("before-sanity-check",l),u=l.element.parentElement,u&&u.nodeName.toLowerCase()==="pre"&&!u.hasAttribute("tabindex")&&u.setAttribute("tabindex","0"),!l.code){s.hooks.run("complete",l),t&&t.call(l.element);return}if(s.hooks.run("before-highlight",l),!l.grammar){f(s.util.encode(l.code));return}if(e&&o.Worker){var b=new Worker(s.filename);b.onmessage=function(T){f(T.data)},b.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else f(s.highlight(l.code,l.grammar,l.language))},highlight:function(a,e,t){var n={code:a,grammar:e,language:t};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),m.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(a,e){var t=e.rest;if(t){for(var n in t)e[n]=t[n];delete e.rest}var i=new D;return z(i,i.head,a),C(a,i,e,i.head,0),I(i)},hooks:{all:{},add:function(a,e){var t=s.hooks.all;t[a]=t[a]||[],t[a].push(e)},run:function(a,e){var t=s.hooks.all[a];if(!(!t||!t.length))for(var n=0,i;i=t[n++];)i(e)}},Token:m};o.Prism=s;function m(a,e,t,n){this.type=a,this.content=e,this.alias=t,this.length=(n||"").length|0}m.stringify=function a(e,t){if(typeof e=="string")return e;if(Array.isArray(e)){var n="";return e.forEach(function(f){n+=a(f,t)}),n}var i={type:e.type,content:a(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},u=e.alias;u&&(Array.isArray(u)?Array.prototype.push.apply(i.classes,u):i.classes.push(u)),s.hooks.run("wrap",i);var g="";for(var l in i.attributes)g+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+g+">"+i.content+"</"+i.tag+">"};function _(a,e,t,n){a.lastIndex=e;var i=a.exec(t);if(i&&n&&i[1]){var u=i[1].length;i.index+=u,i[0]=i[0].slice(u)}return i}function C(a,e,t,n,i,u){for(var g in t)if(!(!t.hasOwnProperty(g)||!t[g])){var l=t[g];l=Array.isArray(l)?l:[l];for(var f=0;f<l.length;++f){if(u&&u.cause==g+","+f)return;var b=l[f],T=b.inside,J=!!b.lookbehind,K=!!b.greedy,ue=b.alias;if(K&&!b.pattern.global){var oe=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,oe+"g")}for(var Q=b.pattern||b,x=n.next,E=i;x!==e.tail&&!(u&&E>=u.reach);E+=x.value.length,x=x.next){var j=x.value;if(e.length>a.length)return;if(!(j instanceof m)){var M=1,S;if(K){if(S=_(Q,E,a,J),!S||S.index>=a.length)break;var V=S.index,ge=S.index+S[0].length,L=E;for(L+=x.value.length;V>=L;)x=x.next,L+=x.value.length;if(L-=x.value.length,E=L,x.value instanceof m)continue;for(var P=x;P!==e.tail&&(L<ge||typeof P.value=="string");P=P.next)M++,L+=P.value.length;M--,j=a.slice(E,L),S.index-=E}else if(S=_(Q,0,j,J),!S)continue;var V=S.index,O=S[0],H=j.slice(0,V),ee=j.slice(V+O.length),G=E+j.length;u&&G>u.reach&&(u.reach=G);var R=x.prev;H&&(R=z(e,R,H),E+=H.length),B(e,R,M);var ce=new m(g,T?s.tokenize(O,T):O,ue,O);if(x=z(e,R,ce),ee&&z(e,x,ee),M>1){var U={cause:g+","+f,reach:G};C(a,e,t,x.prev,E,U),u&&U.reach>u.reach&&(u.reach=U.reach)}}}}}}function D(){var a={value:null,prev:null,next:null},e={value:null,prev:a,next:null};a.next=e,this.head=a,this.tail=e,this.length=0}function z(a,e,t){var n=e.next,i={value:t,prev:e,next:n};return e.next=i,n.prev=i,a.length++,i}function B(a,e,t){for(var n=e.next,i=0;i<t&&n!==a.tail;i++)n=n.next;e.next=n,n.prev=e,a.length-=i}function I(a){for(var e=[],t=a.head.next;t!==a.tail;)e.push(t.value),t=t.next;return e}if(!o.document)return o.addEventListener&&(s.disableWorkerMessageHandler||o.addEventListener("message",function(a){var e=JSON.parse(a.data),t=e.language,n=e.code,i=e.immediateClose;o.postMessage(s.highlight(n,s.languages[t],t)),i&&o.close()},!1)),s;var h=s.util.currentScript();h&&(s.filename=h.src,h.hasAttribute("data-manual")&&(s.manual=!0));function d(){s.manual||s.highlightAll()}if(!s.manual){var v=document.readyState;v==="loading"||v==="interactive"&&h&&h.defer?document.addEventListener("DOMContentLoaded",d):window.requestAnimationFrame?window.requestAnimationFrame(d):window.setTimeout(d,16)}return s}($);F.exports&&(F.exports=r),typeof ae<"u"&&(ae.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(c,p){var y={};y["language-"+p]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[p]},y.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:y}};s["language-"+p]={pattern:/[\s\S]+/,inside:r.languages[p]};var m={};m[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:s},r.languages.insertBefore("markup","cdata",m)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(o,c){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:r.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(o){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var p=o.languages.markup;p&&(p.tag.addInlined("style","css"),p.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading\u2026",c=function(h,d){return"\u2716 Error "+h+" while fetching file: "+d},p="\u2716 Error: File does not exist or is empty",y={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",m="loading",_="loaded",C="failed",D="pre[data-src]:not(["+s+'="'+_+'"]):not(['+s+'="'+m+'"])';function z(h,d,v){var a=new XMLHttpRequest;a.open("GET",h,!0),a.onreadystatechange=function(){a.readyState==4&&(a.status<400&&a.responseText?d(a.responseText):a.status>=400?v(c(a.status,a.statusText)):v(p))},a.send(null)}function B(h){var d=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(d){var v=Number(d[1]),a=d[2],e=d[3];return a?e?[v,Number(e)]:[v,void 0]:[v,v]}}r.hooks.add("before-highlightall",function(h){h.selector+=", "+D}),r.hooks.add("before-sanity-check",function(h){var d=h.element;if(d.matches(D)){h.code="",d.setAttribute(s,m);var v=d.appendChild(document.createElement("CODE"));v.textContent=o;var a=d.getAttribute("data-src"),e=h.language;if(e==="none"){var t=(/\.(\w+)$/.exec(a)||[,"none"])[1];e=y[t]||t}r.util.setLanguage(v,e),r.util.setLanguage(d,e);var n=r.plugins.autoloader;n&&n.loadLanguages(e),z(a,function(i){d.setAttribute(s,_);var u=B(d.getAttribute("data-range"));if(u){var g=i.split(/\r\n?|\n/g),l=u[0],f=u[1]==null?g.length:u[1];l<0&&(l+=g.length),l=Math.max(0,Math.min(l-1,g.length)),f<0&&(f+=g.length),f=Math.max(0,Math.min(f,g.length)),i=g.slice(l,f).join(`
`),d.hasAttribute("data-start")||d.setAttribute("data-start",String(l+1))}v.textContent=i,r.highlightElement(v)},function(i){d.setAttribute(s,C),v.textContent=i})}}),r.plugins.fileHighlight={highlight:function(d){for(var v=(d||document).querySelectorAll(D),a=0,e;e=v[a++];)r.highlightElement(e)}};var I=!1;r.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(le);function Se(F){return F&&typeof F=="object"&&"default"in F?F.default:F}var q=ye,Y=Se(le.exports),$e=q.defineComponent({props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},setup:function($,r){var o=r.slots,c=r.attrs,p=o&&o.default&&o.default()||[],y=$.code||p&&p.length?p[0].children:"",s=$.inline,m=$.language,_=Y.languages[m],C="language-".concat(m);return function(){return s?q.h("code",{class:[C],innerHTML:Y.highlight(y,_)}):q.h("pre",Object.assign({},c,{class:[c.class,C]}),[q.h("code",Object.assign({},c,{class:[c.class,C],innerHTML:Y.highlight(y,_)}))])}}}),Ee=$e;const _e={class:"d-flex justify-end"},Pe={__name:"AppCardCode",props:{title:{type:String,required:!0},code:{type:Object,required:!0},codeLanguage:{type:String,required:!1,default:"markup"},noPadding:{type:Boolean,required:!1,default:!1}},setup(F){const $=F,r=de("preferredCodeLanguage","ts"),o=fe(!1);return(c,p)=>(Z(),W(Ae,null,{default:A(()=>[w(xe,null,{append:A(()=>[w(X,{icon:"",size:"x-small",color:k(o)?"primary":"default",variant:"text",class:pe(k(o)?"":"text-disabled"),onClick:p[0]||(p[0]=y=>o.value=!k(o))},{default:A(()=>[w(N,{size:"20",icon:"tabler-code"})]),_:1},8,["color","class"])]),default:A(()=>[w(Fe,null,{default:A(()=>[te(ne($.title),1)]),_:1})]),_:1}),F.noPadding?re(c.$slots,"default",{key:0}):(Z(),W(se,{key:1},{default:A(()=>[re(c.$slots,"default")]),_:3})),w(be,null,{default:A(()=>[he(ie("div",null,[w(ke),w(se,{class:"d-flex gap-y-3 flex-column"},{default:A(()=>[ie("div",_e,[w(we,{modelValue:k(r),"onUpdate:modelValue":p[1]||(p[1]=y=>ve(r)?r.value=y:null),mandatory:"",variant:"outlined",density:"compact"},{default:A(()=>[w(X,{size:"x-small",value:"ts",color:k(r)==="ts"?"primary":"default"},{default:A(()=>[w(N,{size:"x-large",icon:"custom-typescript",color:k(r)==="ts"?"primary":"secondary"},null,8,["color"])]),_:1},8,["color"]),w(X,{size:"x-small",value:"js",color:k(r)==="js"?"primary":"default"},{default:A(()=>[w(N,{size:"x-large",icon:"custom-javascript",color:k(r)==="js"?"primary":"secondary"},null,8,["color"])]),_:1},8,["color"])]),_:1},8,["modelValue"])]),(Z(),W(k(Ee),{key:$.code[k(r)],language:$.codeLanguage},{default:A(()=>[te(ne($.code[k(r)]),1)]),_:1},8,["language"]))]),_:1})],512),[[me,k(o)]])]),_:1})]),_:3}))}};export{Pe as _};
