(this["webpackJsonpmeme-maker2"]=this["webpackJsonpmeme-maker2"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),i=(a(9),a(1)),m=(a(10),function(e){var t=e.id,a=e.title,n=e.url,c=e.width,r=e.height,i=e.selectBase,m={id:t,title:a,url:n,width:c,height:r};return l.a.createElement("div",{className:"meme-thumb",style:{backgroundImage:"url(".concat(n,")")},onClick:function(){return i(m)}},l.a.createElement("p",null,a))}),s=function(e){var t=e.selectBase,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){return s(e.data.memes)}))}),[]),l.a.createElement("div",{className:"meme-image-list"},l.a.createElement("div",{className:"meme-thumb-list"},r.length>0?r.map((function(e){return l.a.createElement(m,{key:e.id,id:e.id,title:e.name,url:e.url,width:e.width,height:e.height,selectBase:t})})):l.a.createElement("p",null,"Loading meme bases...")))},o=function(e){var t=e.data,a=(e.text,t.width/t.height);return l.a.createElement("svg",{width:500*a,height:500*a},l.a.createElement("image",{xlinkHref:t.url}),l.a.createElement("text",{x:0,y:0}," tedfsdsadsxt "))},u=function(e){var t=e.data,a=t.title;t.url,t.width,t.height,t.id;return l.a.createElement("div",{className:"meme-editor"},l.a.createElement("h2",null,"EDIT MEME"),l.a.createElement("p",null,a),l.a.createElement("div",{className:"meme-editor-sections"},l.a.createElement("div",{className:"meme-window"},l.a.createElement(o,{data:t})),l.a.createElement("div",{className:"text-edit"})))};var d=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"BUILD-A-MEME"),l.a.createElement("div",{className:"panels"},l.a.createElement("div",{className:"panel-left"},l.a.createElement("h2",null,"CHOOSE A BASE"),l.a.createElement(s,{selectBase:function(e){c(e)}})),l.a.createElement("div",{className:"panel-right"},l.a.createElement(u,{data:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.4d4380ae.chunk.js.map