(function(t){function e(e){for(var r,s,a=e[0],c=e[1],l=e[2],p=0,d=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/sortable-post-list/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("def6");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen font-sans",attrs:{id:"app"}},[n("div",{staticClass:"container mx-auto py-6 sm:py-12 sm:px-4"},[n("Posts")],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap sm:-mx-20"},[n("div",{staticClass:"w-full sm:w-1/2 px-10 pb-12"},[n("h5",{staticClass:"mb-6 text-white text-2xl font-normal"},[t._v("Sortable Post List")]),t.loading?n("p",{staticClass:"text-center text-gray-800"},[n("svg",{staticClass:"mx-auto",attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 40 40","enable-background":"new 0 0 40 40","xml:space":"preserve"}},[n("path",{attrs:{opacity:"0.2",fill:"#000",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}}),n("path",{attrs:{fill:"#000",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n          C22.32,8.481,24.301,9.057,26.013,10.047z"}},[n("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}})],1)]),t._v(" Loading posts... ")]):t._e(),t.errorMsg?n("p",{staticClass:"text-red-400 text-xl"},[t._v(t._s(t.errorMsg))]):t._e(),n("transition-group",{attrs:{name:"list"}},t._l(t.posts,(function(e,r){return n("Post",{key:e,attrs:{index:r,text:e,move:t.move,directions:t.getDirections(r)}})})),1)],1),n("div",{staticClass:"w-full sm:w-1/2 px-10"},[n("div",{staticClass:"bg-gray-200 shadow border-solid rounded overflow-hidden border-b"},[n("div",{staticClass:"bg-gray-100 px-4 py-4 text-xl border-solid border-gray-100 border text-gray-700"},[t._v("List of actions commited")]),n("div",{staticClass:"m-3 sm:m-6"},[n("transition-group",{attrs:{name:"list"}},t._l(t.actions,(function(e){return n("Action",{key:e.id,attrs:{action:e,timeTravel:t.timeTravel}})})),1),t.actions.length<1?n("p",{staticClass:"text-gray-700"},[t._v("No action taken")]):t._e()],1)])])])},a=[],c=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("96cf"),n("2fa7")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white shadow rounded overflow-hidden sm:mr-10 border flex justify-between p-4 sm:mb-6 mb-4"},[n("div",{staticClass:"w-11/12 sm:text-lg text-sm py-4 text-gray-700"},[t._v(t._s(t.text))]),n("div",{class:[t.directions.length>1?"flex flex-col justify-between":"py-6"]},t._l(t.directions,(function(e){return n("div",{key:e},[e===t.direction.UP?n("svg",{staticClass:"sm:h-4 h-3 text-indigo-700 hover:text-indigo-300",attrs:{"aria-hidden":"true",id:"up",focusable:"false","data-prefix":"fas","data-icon":"chevron-up",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},on:{click:function(n){return t.move(e,t.index)}}},[n("path",{attrs:{fill:"currentColor",d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}})]):t._e(),e===t.direction.DOWN?n("svg",{staticClass:"sm:h-4 h-3 text-indigo-700 hover:text-indigo-300",attrs:{"aria-hidden":"true",id:"down",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},on:{click:function(n){return t.move(e,t.index)}}},[n("path",{attrs:{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}})]):t._e()])})),0)])},u=[],p=(n("a9e3"),{UP:"UP",DOWN:"DOWN"}),d={MOVE_POST:"MOVE_POST",TIME_TRAVEL:"TIME_TRAVEL",FETCH_POSTS:"FETCH_POSTS"},f={props:{directions:Array,text:String,index:Number,move:Function},data:function(){return{direction:p}}},h=f,b=n("2877"),m=Object(b["a"])(h,l,u,!1,null,null,null),v=m.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white rounded p-3 shadow border flex flex-wrap"},[n("div",{staticClass:"sm:my-3 my-1 sm:text-base text-sm w-3/4 text-gray-700"},[t._v(t._s(t.message))]),n("button",{staticClass:"h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-1/5 hover:text-white text-gray-700",attrs:{id:"button-"+t.action.id},on:{click:function(e){return t.timeTravel(t.action)}}},[t._v("Time travel")])])},x=[],g=(n("99af"),{props:{action:Object,timeTravel:Function},computed:{message:function(){return"Moved ".concat(this.action.post," from index ").concat(this.action.index," to index ").concat(this.action.direction===p.UP?this.action.index-1:this.action.index+1)}}}),w=g,y=Object(b["a"])(w,O,x,!1,null,null,null),_=y.exports,j=n("2f62");function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C={components:{Post:v,Action:_},mounted:function(){this.loadPosts()},data:function(){return{loading:!0,errorMsg:""}},computed:T({},Object(j["b"])(["posts","actions"])),methods:{move:function(t,e){this.$store.dispatch(d.MOVE_POST,{direction:t,index:e,post:this.posts[e]})},timeTravel:function(t){var e=this;this.$store.dispatch(d.TIME_TRAVEL,this.actions[0]),setTimeout((function(){e.actions.length>0&&e.actions[0].id>=t.id&&e.timeTravel(t)}),1e3)},getDirections:function(t){var e=[];return t>0&&e.push(p.UP),t<this.posts.length-1&&e.push(p.DOWN),e},loadPosts:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch(d.FETCH_POSTS).then((function(){t.loading=!1})).catch((function(e){t.loading=!1,t.errorMsg=e}));case 1:case"end":return e.stop()}}),null,this)}}},E=C,S=Object(b["a"])(E,s,a,!1,null,null,null),D=S.exports,M={name:"app",components:{Posts:D}},A=M,L=Object(b["a"])(A,o,i,!1,null,null,null),N=L.exports,k=(n("d81d"),n("fb6a"),n("4e82"),n("284c"));function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R=V({},p,{ADD_ACTION:"ADD_ACTION",REMOVE_ACTION:"REMOVE_ACTION",LOAD_POSTS:"LOAD_POSTS"}),$="https://jsonplaceholder.typicode.com/posts",F=function(t){return t.sort((function(t,e){return t.id>e.id?-1:t.id<e.id?1:0}))};function U(){var t,e;return{state:{posts:[],actions:[]},mutations:(t={},Object(c["a"])(t,R.UP,(function(t,e){var n=t.posts[e];t.posts[e]=t.posts[e-1],t.posts[e-1]=n})),Object(c["a"])(t,R.DOWN,(function(t,e){var n=t.posts[e];t.posts[e]=t.posts[e+1],t.posts[e+1]=n})),Object(c["a"])(t,R.ADD_ACTION,(function(t,e){var n=Object(k["a"])(t.actions);n.push(V({},e,{id:t.actions.length})),t.actions=F(n)})),Object(c["a"])(t,R.REMOVE_ACTION,(function(t){var e=Object(k["a"])(t.actions);e.shift(),t.actions=F(e)})),Object(c["a"])(t,R.LOAD_POSTS,(function(t,e){t.posts=e})),t),actions:(e={},Object(c["a"])(e,d.MOVE_POST,(function(t,e){var n=t.commit;n(R.ADD_ACTION,e),n(e.direction,e.index)})),Object(c["a"])(e,d.TIME_TRAVEL,(function(t,e){var n=t.commit;n(R.REMOVE_ACTION),n(e.direction,e.index)})),Object(c["a"])(e,d.FETCH_POSTS,(function(t){var e=t.commit;return new Promise((function(t,n){fetch($,{headers:{Accept:"application/json"}}).then((function(t){return t.json()})).then((function(n){var r=n.slice(0,5).map((function(t){return t.title}));e(R.LOAD_POSTS,r),t("Fetched posts successfully")})).catch((function(){n("An error occurred trying to load posts")}))}))})),e)}}r["a"].use(j["a"]);var z=new j["a"].Store(U());r["a"].config.productionTip=!1,new r["a"]({store:z,render:function(t){return t(N)}}).$mount("#app")},def6:function(t,e,n){}});
//# sourceMappingURL=app.c07ac704.js.map