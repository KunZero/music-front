(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["singer"],{"1dad":function(t,e,n){"use strict";n("9505")},"20d0":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=Object(c["O"])("data-v-6e25da85");Object(c["x"])("data-v-6e25da85");var a={class:"singer"};Object(c["v"])();var u=r((function(t,e,n,u,o,i){var l=Object(c["C"])("index-list"),s=Object(c["C"])("router-view"),f=Object(c["D"])("loading");return Object(c["M"])((Object(c["u"])(),Object(c["h"])("div",a,[Object(c["j"])(l,{data:o.singers,onSelect:i.selectSinger},null,8,["data","onSelect"]),Object(c["j"])(s,null,{default:r((function(t){var e=t.Component;return[Object(c["j"])(c["d"],{appear:"",name:"slide"},{default:r((function(){return[(Object(c["u"])(),Object(c["h"])(Object(c["E"])(e),{data:o.selectedSinger},null,8,["data"]))]})),_:2},1024)]})),_:1})],512)),[[f,!o.singers.length]])})),o=(n("96cf"),n("1da1")),i=n("ae58"),l=(n("b0c0"),Object(c["O"])("data-v-75374488"));Object(c["x"])("data-v-75374488");var s={ref:"groupRef"},f={class:"title"},d={class:"avatar"},j={class:"name"},b={class:"fixed-title"};Object(c["v"])();var O=l((function(t,e,n,r,a,u){var o=Object(c["C"])("scroll"),i=Object(c["D"])("lazy");return Object(c["u"])(),Object(c["h"])(o,{class:"index-list","probe-type":3,onScroll:r.onScroll,ref:"scrollRef"},{default:l((function(){return[Object(c["j"])("ul",s,[(Object(c["u"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(n.data,(function(t){return Object(c["u"])(),Object(c["h"])("li",{key:t.title,class:"group"},[Object(c["j"])("h2",f,Object(c["G"])(t.title),1),Object(c["j"])("ul",null,[(Object(c["u"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(t.list,(function(t){return Object(c["u"])(),Object(c["h"])("li",{key:t.id,class:"item",onClick:function(e){return r.onItemClick(t)}},[Object(c["M"])(Object(c["j"])("img",d,null,512),[[i,t.pic]]),Object(c["j"])("span",j,Object(c["G"])(t.name),1)],8,["onClick"])})),128))])])})),128))],512),Object(c["M"])(Object(c["j"])("div",{class:"fixed",style:r.fixedStyle},[Object(c["j"])("div",b,Object(c["G"])(r.fixedTitle),1)],4),[[c["J"],r.fixedTitle]]),Object(c["j"])("div",{class:"shortcut",onTouchstart:e[1]||(e[1]=Object(c["N"])((function(){return r.onShortcutTouchStart&&r.onShortcutTouchStart.apply(r,arguments)}),["stop","prevent"])),onTouchmove:e[2]||(e[2]=Object(c["N"])((function(){return r.onShortcutTouchMove&&r.onShortcutTouchMove.apply(r,arguments)}),["stop","prevent"])),onTouchend:e[3]||(e[3]=Object(c["N"])((function(){}),["stop","prevent"]))},[Object(c["j"])("ul",null,[(Object(c["u"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(r.shortcutList,(function(t,e){return Object(c["u"])(),Object(c["h"])("li",{key:t,"data-index":e,class:["item",{current:r.currentIndex===e}]},Object(c["G"])(t),11,["data-index"])})),128))])],32)]})),_:1},8,["onScroll"])})),h=n("70d8"),v=n("2121"),p=n("22c8"),g={name:"index-list",components:{Scroll:h["a"]},props:{data:{type:Array,default:function(){return[]}}},emits:["select"],setup:function(t,e){var n=e.emit,c=Object(v["a"])(t),r=c.groupRef,a=c.onScroll,u=c.fixedTitle,o=c.fixedStyle,i=c.currentIndex,l=Object(p["a"])(t,r),s=l.shortcutList,f=l.scrollRef,d=l.onShortcutTouchStart,j=l.onShortcutTouchMove;function b(t){n("select",t)}return{onItemClick:b,groupRef:r,onScroll:a,fixedTitle:u,fixedStyle:o,currentIndex:i,shortcutList:s,scrollRef:f,onShortcutTouchStart:d,onShortcutTouchMove:j}}},m=(n("1dad"),n("6b0d")),S=n.n(m);const x=S()(g,[["render",O],["__scopeId","data-v-75374488"]]);var y=x,T=n("335a"),w=n("aaef"),R={name:"singer",components:{IndexList:y},data:function(){return{singers:[],selectedSinger:null}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["b"])();case 2:n=e.sent,t.singers=n.singers;case 4:case"end":return e.stop()}}),e)})))()},methods:{selectSinger:function(t){this.selectedSinger=t,this.cacheSinger(t),this.$router.push({path:"/singer/".concat(t.mid)})},cacheSinger:function(t){T["a"].session.set(w["f"],t)}}};n("f249");const k=S()(R,[["render",u],["__scopeId","data-v-6e25da85"]]);e["default"]=k},2121:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("96cf");var c=n("1da1"),r=n("7a23");function a(t){var e=30,n=Object(r["z"])(null),a=Object(r["z"])([]),u=Object(r["z"])(0),o=Object(r["z"])(0),i=Object(r["z"])(0),l=Object(r["f"])((function(){if(u.value<0)return"";var e=t.data[o.value];return e?e.title:""})),s=Object(r["f"])((function(){var t=i.value,n=t>0&&t<e?t-e:0;return{transform:"translate3d(0,".concat(n,"px,0)")}}));function f(){var t=n.value.children,e=a.value,c=0;e.length=0,e.push(c);for(var r=0;r<t.length;r++)c+=t[r].clientHeight,e.push(c)}function d(t){u.value=-t.y}return Object(r["K"])((function(){return t.data}),Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["p"])();case 2:f();case 3:case"end":return t.stop()}}),t)})))),Object(r["K"])(u,(function(t){for(var e=a.value,n=0;n<e.length-1;n++){var c=e[n],r=e[n+1];t>=c&&t<=r&&(o.value=n,i.value=r-t)}})),{groupRef:n,onScroll:d,fixedTitle:l,fixedStyle:s,currentIndex:o}}},"22c8":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d81d");var c=n("7a23");function r(t,e){var n=18,r=Object(c["z"])(null),a=Object(c["f"])((function(){return t.data.map((function(t){return t.title}))})),u={};function o(t){var e=parseInt(t.target.dataset.index);u.y1=t.touches[0].pageY,u.anchorIndex=e,l(e)}function i(t){u.y2=t.touches[0].pageY;var e=(u.y2-u.y1)/n|0,c=u.anchorIndex+e;l(c)}function l(t){if(!isNaN(t)){t=Math.max(0,Math.min(a.value.length-1,t));var n=e.value.children[t],c=r.value.scroll;c.scrollToElement(n,0)}}return{shortcutList:a,scrollRef:r,onShortcutTouchStart:o,onShortcutTouchMove:i}}},"68ab":function(t,e,n){},"70d8":function(t,e,n){"use strict";n("96cf");var c=n("1da1"),r=n("7a23"),a=n("bba4"),u=n("5502");e["a"]={name:"wrap-scroll",props:a["a"].props,emits:a["a"].emits,render:function(t){return Object(r["m"])(a["a"],Object(r["o"])({ref:"scrollRef"},t.$props,{onScroll:function(e){t.$emit("scroll",e)}}),{default:Object(r["L"])((function(){return[Object(r["B"])(t.$slots,"default")]}))})},setup:function(){var t=Object(r["z"])(null),e=Object(r["f"])((function(){return t.value.scroll})),n=Object(u["e"])(),a=Object(r["f"])((function(){return n.state.playlist}));return Object(r["K"])(a,Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["p"])();case 2:e.value.refresh();case 3:case"end":return t.stop()}}),t)})))),{scrollRef:t,scroll:e}}}},9505:function(t,e,n){},ae58:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var c=n("58ff");function r(){return Object(c["a"])("/api/getSingerList")}function a(t){return Object(c["a"])("/api/getSingerDetail",{mid:t.mid})}},f249:function(t,e,n){"use strict";n("68ab")}}]);