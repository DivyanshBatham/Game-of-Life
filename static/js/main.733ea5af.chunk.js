(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),i=a.n(l),o=(a(15),a(3)),c=a(4),s=a(7),d=a(5),m=a(8),u=a(6),h=a.n(u),f=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).onClick=function(e){var t=+e.target.dataset.x,n=+e.target.dataset.y,r=a.state.grid;r[t][n]=!r[t][n],a.setState({grid:r})},a.squares=function(e,t){return e.map(function(e,n){return r.a.createElement("div",{className:e?"square active":"square",key:n,"data-x":t,"data-y":n,onClick:a.onClick})})},a.rows=function(){return a.state.grid.map(function(e,t){return r.a.createElement("div",{className:"row",key:t},a.squares(e,t))})},a.calculateSum=function(e,t){for(var n=a.state.grid.length,r=a.state.grid[e].length,l=0,i=-1;i<2;i++)for(var o=-1;o<2;o++)0===i&&0===o||(l+=+a.state.grid[(e+i+n)%n][(t+o+r)%r]);return l},a.generateNextGeneration=function(){a.setState(function(e,t){return{generation:e.generation+1}});for(var e=[],t=0;t<a.state.grid.length;t++){for(var n=[],r=0;r<a.state.grid[t].length;r++){var l=a.calculateSum(t,r);a.state.grid[t][r]?l<2||l>3?n.push(!1):n.push(!0):n.push(3===l)}e.push(n)}a.setState({grid:e})},a.start=function(){a.pause(),a.interval=setInterval(function(){return a.generateNextGeneration()},a.state.speed)},a.pause=function(){clearInterval(a.interval)},a.changeSpeed=function(){clearInterval(a.interval);var e=[100,200,300,400,500,600,700,800,900,1e3],t=e[(e.indexOf(a.state.speed)+1)%e.length];a.setState({speed:t}),a.interval=setInterval(function(){return a.generateNextGeneration()},t),console.log("Speed Set to - "+t)},a.randomize=function(){a.pause();var e,t=document.getElementById("Main").offsetHeight,n=document.getElementById("Main").offsetWidth,r=Math.floor(n/30)+1,l=Math.floor(t/30)+1;console.log("Grid INIT: "),console.table({height:t,width:n,h:l,w:r});for(var i=[],o=1;o<=l;o++)e=Array(r).fill(null).map(function(e,t){return Boolean(Math.floor(2*Math.random()))}),i.push(e);a.setState({grid:i,generation:0})},a.clear=function(){a.pause();var e,t=document.getElementById("Main").offsetHeight,n=document.getElementById("Main").offsetWidth,r=Math.floor(n/30)+1,l=Math.floor(t/30)+1;console.log("Grid INIT: "),console.table({height:t,width:n,h:l,w:r});for(var i=[],o=1;o<=l;o++)e=Array(r).fill(null).map(function(e,t){return!1}),i.push(e);a.setState({grid:i,generation:0})},a.state={grid:[],cellSize:30,generation:0,speed:200},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,t=document.getElementById("Main").offsetHeight,a=document.getElementById("Main").offsetWidth,n=Math.floor(a/30)+1,r=Math.floor(t/30)+1;console.log("Grid INIT: "),console.table({height:t,width:a,h:r,w:n});for(var l=[],i=1;i<=r;i++)e=Array(n).fill(null).map(function(e,t){return!1}),l.push(e);this.setState({grid:l})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"Main"},r.a.createElement(this.rows,null)),r.a.createElement("div",{id:"Side"},r.a.createElement("div",{className:"TopHalf"},r.a.createElement("img",{src:h.a,alt:"Logo"}),r.a.createElement("div",{className:"controls"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:this.start},r.a.createElement("svg",{viewBox:"0 0 100 100"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-path"},r.a.createElement("rect",{id:"Rectangle_2","data-name":"Rectangle 2",fill:"#19d676",width:"100",height:"100",transform:"translate(227 -404)"}))),r.a.createElement("g",{id:"Play",clipPath:"url(#clip-path)",transform:"translate(-227 404)"},r.a.createElement("path",{id:"round-play_circle_filled-24px",fill:"#19d676",d:"M60,10a50,50,0,1,0,50,50A50.018,50.018,0,0,0,60,10ZM50,77.5v-35a2.5,2.5,0,0,1,4-2L77.35,58a2.482,2.482,0,0,1,0,4L54,79.5a2.5,2.5,0,0,1-4-2Z",transform:"translate(217 -414)"}))),r.a.createElement("div",{className:"controlsText"},"Play")),r.a.createElement("li",{onClick:this.pause},r.a.createElement("svg",{viewBox:"0 0 100 100"},r.a.createElement("defs",null,r.a.createElement("clipPath",{id:"clip-path2"},r.a.createElement("rect",{id:"Rectangle_3","data-name":"Rectangle 3",fill:"#19d676",width:"100",height:"100",transform:"translate(360 -404)"}))),r.a.createElement("g",{id:"Pause",clipPath:"url(#clip-path2)",transform:"translate(-360 404)"},r.a.createElement("path",{id:"round-pause_circle_filled-24px",fill:"#19d676",d:"M60,10a50,50,0,1,0,50,50A50.018,50.018,0,0,0,60,10ZM50,80a5.015,5.015,0,0,1-5-5V45a5,5,0,0,1,10,0V75A5.015,5.015,0,0,1,50,80Zm20,0a5.015,5.015,0,0,1-5-5V45a5,5,0,0,1,10,0V75A5.015,5.015,0,0,1,70,80Z",transform:"translate(350 -414)"}))),r.a.createElement("div",{className:"controlsText"},"Pause")),r.a.createElement("li",{onClick:this.generateNextGeneration},r.a.createElement("svg",{viewBox:"0 0 100 100"},r.a.createElement("path",{id:"Next",fill:"#19d676",d:"M50,100A50.013,50.013,0,0,1,30.538,3.929,50.013,50.013,0,0,1,69.462,96.071,49.686,49.686,0,0,1,50,100ZM68.357,27.971a3.675,3.675,0,0,0-3.671,3.671V68.357a3.671,3.671,0,0,0,7.342,0V31.642A3.675,3.675,0,0,0,68.357,27.971ZM31.666,31.383a3.693,3.693,0,0,0-3.695,3.674V64.942a3.689,3.689,0,0,0,5.8,3.01L54.956,53.01A3.647,3.647,0,0,0,56.5,49.983a3.579,3.579,0,0,0-1.542-2.957L33.772,32.046A3.712,3.712,0,0,0,31.666,31.383Z"})),r.a.createElement("div",{className:"controlsText"},"Next")),r.a.createElement("li",{onClick:this.randomize},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},r.a.createElement("path",{id:"Randomize",fill:"#19d676",d:"M50,100A50.013,50.013,0,0,1,30.538,3.929,50.013,50.013,0,0,1,69.462,96.071,49.686,49.686,0,0,1,50,100Zm7.267-46.1h0l-3.9,3.9,8.661,8.662-3.32,3.32a1.349,1.349,0,0,0-.292,1.494,1.371,1.371,0,0,0,1.288.858H70.189a1.369,1.369,0,0,0,1.383-1.383V60.266a1.371,1.371,0,0,0-1.38-1.388,1.345,1.345,0,0,0-.971.419L65.928,62.59,57.267,53.9ZM59.7,27.863a1.371,1.371,0,0,0-1.288.858,1.349,1.349,0,0,0,.292,1.494L62,33.508,29.236,66.27a2.759,2.759,0,1,0,3.9,3.9l32.79-32.734,3.293,3.293a1.343,1.343,0,0,0,.954.4,1.383,1.383,0,0,0,1.4-1.4V29.246a1.369,1.369,0,0,0-1.383-1.383ZM31.215,28.991A2.76,2.76,0,0,0,29.264,33.7L41.605,46.043l3.929-3.875L33.166,29.8A2.741,2.741,0,0,0,31.215,28.991Z"})),r.a.createElement("div",{className:"controlsText"},"Random")),r.a.createElement("li",{onClick:this.clear},r.a.createElement("svg",{viewBox:"0 0 100 100"},r.a.createElement("g",{id:"Reset",transform:"translate(-360 262)"},r.a.createElement("path",{id:"Subtraction_1","data-name":"Subtraction 1",fill:"#19d676",d:"M50,100A50.013,50.013,0,0,1,30.538,3.929,50.013,50.013,0,0,1,69.462,96.071,49.686,49.686,0,0,1,50,100ZM27.157,55.393a3.324,3.324,0,0,0-2.5,1.139,3.253,3.253,0,0,0-.784,2.571A26.389,26.389,0,0,0,49.855,81.679h.086a27.746,27.746,0,0,0,5.22-.514A26.182,26.182,0,0,0,75.649,60.679a26.507,26.507,0,0,0-5.5-21.99,26.206,26.206,0,0,0-20.271-9.561V19.968a1.627,1.627,0,0,0-1.639-1.647,1.6,1.6,0,0,0-1.152.5L34.61,31.262a1.631,1.631,0,0,0,0,2.332L47.052,46.036a1.661,1.661,0,0,0,2.824-1.182v-9.16A19.726,19.726,0,0,1,68.985,50.6a19.916,19.916,0,0,1,.13,9.027,19.577,19.577,0,0,1-15,15,20.683,20.683,0,0,1-4.242.446A19.743,19.743,0,0,1,30.374,58.183,3.273,3.273,0,0,0,27.157,55.393Z",transform:"translate(360 -262)"}))),r.a.createElement("div",{className:"controlsText"},"Clear"))))),r.a.createElement("p",{className:"generationCount"},"Generation ",this.state.generation)),r.a.createElement("div",{id:"Footer"},r.a.createElement("p",{className:"generationCount-mobile"},"Generation ",this.state.generation)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){e.exports=a.p+"static/media/logo.cc5a2e2a.png"},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.733ea5af.chunk.js.map