webpackJsonp([3],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"1H2/":function(t,e,n){var r={"./index.ts":"fbRD"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="1H2/"},"1LIH":function(t,e,n){"use strict";var r=n("/5sW"),o=n("hlPV"),a=n.n(o);r.default.use(a.a)},"8LOT":function(t,e){},F88d:function(t,e,n){"use strict";var r=n("LEOT"),o=n("srTi"),a=!1;var i=function(t){a||n("cCOU")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt\\components\\nuxt-loading.vue",e.a=s.exports},FSL9:function(t,e,n){"use strict";var r=n("/5sW"),o=n("G1oA"),a=n.n(o);r.default.use(a.a)},GfDd:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="GfDd"},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var d=u[f]||c,l={};r.forEach(function(t){void 0!==d[t]&&(l[t]=d[t])});var p={};o.forEach(function(t){"function"==typeof d[t]&&(p[t]=d[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var v=[t("router-view",a)];return void 0!==i.keepAlive&&(v=[t("keep-alive",v)]),t("transition",{props:l,on:p},v)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("ct3O"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return b});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("1H2/"),f=c.keys(),d={},l=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(l=t)}),l&&(d=_(l)),"function"!=typeof d){d.modules||(d.modules={});var p=!0,h=!1,v=void 0;try{for(var x,m=i()(f);!(p=(x=m.next()).done);p=!0){var y=x.value,w=y.replace(/^\.\//,"").replace(/\.(js|ts)$/,"");if("index"!==w){var g=w.split(/\//);(t=C(d,g))[w=g.pop()]=_(y),t[w].namespaced=!0}}}catch(t){h=!0,v=t}finally{try{!p&&m.return&&m.return()}finally{if(h)throw v}}}var b=d instanceof Function?d:function(){return new u.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},LEOT:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"black",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),d=n.n(f),l=n("mvHQ"),p=n.n(l),h=n("exGp"),v=n.n(h),x=n("fZjL"),m=n.n(x),y=n("woOf"),w=n.n(y),g=n("/5sW"),b=n("unZF"),_=n("qcny"),C=n("YLfZ"),$=(r=v()(d.a.mark(function t(e,n,r){var o,a,i=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!j.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),k=(o=v()(d.a.mark(function t(e,n,r){var o,a,i,s,u,f,l,p,h=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];R=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(j,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=j.nuxt.dateErr,this._hadError=!!j.nuxt.err,i=[],(s=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,D.call(this,s,j.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(j.context):_.a.layout);case 17:return u=t.sent,t.next=20,D.call(this,s,j.context,u);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return j.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(q(s,e,n)),t.prev=26,t.next=29,D.call(this,s,j.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!j.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=s[0].options.layout)&&(f=f(j.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,D.call(this,s,j.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!j.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(l=!0,s.forEach(function(t){l&&"function"==typeof t.options.validate&&(l=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),l){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==R[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=a&&s?30:45;if(a){var f=Object(C.j)(t.options.asyncData,j.context).then(function(e){Object(C.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});o.push(f)}if(s){var d=t.options.fetch(j.context);d&&(d instanceof c.a||"function"==typeof d.then)||(d=c.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),o.push(d)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),R=s.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),R=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=_.a.layout)&&(p=p(j.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),E=(a=v()(d.a.mark(function t(e){var n,r,o,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=e.app,O=e.router,T=e.store,t.next=5,c.a.all(L(O));case 5:return n=t.sent,r=new g.default(j),o=S.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),g.default.nextTick(function(){U(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(q(n,O.currentRoute)),R=O.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(O.currentRoute.params)})),r.$loading={},S.error&&r.error(S.error),O.beforeEach($.bind(r)),O.beforeEach(k.bind(r)),O.afterEach(F),O.afterEach(N.bind(r)),!S.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:k.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return F(O.currentRoute,O.currentRoute),M.call(r,O.currentRoute),void a();O.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),R=[],j=void 0,O=void 0,T=void 0,S=window.__NUXT__||{};function q(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=w()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);m()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function A(t,e){return S.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function L(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=v()(d.a.mark(function t(e,r,o,a,i){var s;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=A(Object(C.l)(e),S.data?S.data[i]:null),o.components[a]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function D(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof b.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),b.a[t])}),!a)return Object(C.i)(o,e)}function F(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=g.default.extend(t))._Ctor=t,n.components[r]=t),t})}function M(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(j.context)),this.setLayout(e)}function N(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||g.default.nextTick(function(){Object(C.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&R[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)g.default.set(t.$data,r,n[r])}}),M.call(n,t)})}function U(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){g.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(E).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},UcTi:function(t,e,n){"use strict";var r=n("/5sW"),o=n("4R+h"),a=n.n(o);r.default.use(a.a)},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},XSDV:function(t,e){},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),x()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=w,e.e=g,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=b,e.k=_,n.d(e,"h",function(){return k}),n.d(e,"m",function(){return E}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return l.a.resolve();return R(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=R,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=r||{},u=s.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,l=i[f.name];if(null==l){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(d=u(l[p]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(d)+"`");a+=(0===p?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(l),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');a+=f.prefix+d}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=j.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+u.length,c)i+=c[1];else{var d=t[a],l=n[2],p=n[3],h=n[4],v=n[5],x=n[6],m=n[7];i&&(r.push(i),i="");var y=null!=l&&null!=d&&d!==l,w="+"===x||"*"===x,g="?"===x||"*"===x,b=n[2]||s,_=h||v;r.push({name:p||o++,prefix:l||"",delimiter:b,optional:g,repeat:w,partial:y,asterisk:!!m,pattern:_?S(_):m?".*":"[^"+T(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=x()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),d=n("//Fk"),l=n.n(d),p=n("fZjL"),h=n.n(p),v=n("Dd8w"),x=n.n(v),m=n("/5sW"),y=function(){return{}};function w(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=m.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function b(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return l.a.all(b(t,(e=f()(u.a.mark(function t(e,r,o,a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=w(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,$,k=(C=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",x()({},e,{meta:g(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),E=($=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={baseUrl:"http://localhost:3000"},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=q(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,k(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,k(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return $.apply(this,arguments)});function R(t,e){var n=void 0;return(n=2===t.length?new l.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof l.a||"function"==typeof n.then)||(n=l.a.resolve(n)),n}var j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/"),u=void 0;return 2===(a=s.split("#")).length&&(s=a[0],u=a[1]),i+=s?"/"+s:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},cCOU:function(t,e){},ct3O:function(t,e,n){"use strict";var r=n("yNZV"),o=n("n1a8"),a=!1;var i=function(t){a||n("8LOT")},s=n("VU/8")(r.a,o.a,!1,i,null,null);s.options.__file=".nuxt\\components\\nuxt-error.vue",e.a=s.exports},fbRD:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return a}),n.d(e,"getters",function(){return i}),n.d(e,"mutations",function(){return s}),n.d(e,"actions",function(){return u});var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function s(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,s)}u((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=r[2&a[0]?"return":a[0]?"throw":"next"])&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[0,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},a=function(){return{menuItems:{},cards:[]}},i={menuItems:function(t){return t.menuItems},cards:function(t){return t.cards}},s={setMenu:function(t,e){t.menuItems=e},setCards:function(t,e){t.cards=e}},u={nuxtServerInit:function(t,e){var n=t.commit,a=e.app;return r(this,void 0,void 0,function(){var t;return o(this,function(e){switch(e.label){case 0:return[4,a.$axios.$get("./app-data.json")];case 1:return t=e.sent(),n("setMenu",t.menu),n("setCards",t.cards),[2]}})})}}},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:u,routes:[{path:"/",component:s,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var s=function(){return n.e(0).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var u=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},n1a8:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"__nuxt-error-page"},[e("div",{staticClass:"error"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[e("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),e("div",{staticClass:"title"},[this._v(this._s(this.message))]),404===this.statusCode?e("p",{staticClass:"description"},[e("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[this._v("Back to the home page")])],1):this._e(),this._m(0)])])};r._withStripped=!0;var o={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}]};e.a=o},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return q});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),d=n.n(f),l=n("exGp"),p=n.n(l),h=n("MU8w"),v=(n.n(h),n("/5sW")),x=n("p3jY"),m=n.n(x),y=n("mtxM"),w=n("0F0d"),g=n("HBB+"),b=n("WRRc"),_=n("ct3O"),C=n("Hot+"),$=n("yTq1"),k=n("YLfZ"),E=n("J2Ti"),R=n("zQW4"),j=n("UcTi"),O=n("FSL9"),T=n("1LIH");n.d(e,"a",function(){return _.a});var S,q=(S=p()(o.a.mark(function t(e){var n,r,a,i,u,f,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(E.a)(e)).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:A,transitions:[A],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},A,{name:t}):c()({},A,t):A}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},$.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(k.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object(k.m)(a,{route:u,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";v.default[n]||(v.default[n]=!0,v.default.use(function(){v.default.prototype.hasOwnProperty(t)||s()(v.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof R.a){t.next=15;break}return t.next=15,Object(R.a)(a.context,l);case 15:if("function"!=typeof j.default){t.next=18;break}return t.next=18,Object(j.default)(a.context,l);case 18:if("function"!=typeof O.default){t.next=22;break}return t.next=22,Object(O.default)(a.context,l);case 22:if("function"!=typeof T.default){t.next=25;break}return t.next=25,Object(T.default)(a.context,l);case 25:t.next=28;break;case 28:return t.abrupt("return",{app:a,router:n,store:r});case 29:case"end":return t.stop()}},t,this)})),function(t){return S.apply(this,arguments)});v.default.component(w.a.name,w.a),v.default.component(g.a.name,g.a),v.default.component(b.a.name,b.a),v.default.component(C.a.name,C.a),v.default.use(m.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var A={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},srTi:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("GfDd"),i=a.keys();function s(t){var e=a(t);return e.default?e.default:e}var u={},c=!0,f=!1,d=void 0;try{for(var l,p=o()(i);!(c=(l=p.next()).done);c=!0){var h=l.value;u[h.replace(/^\.\//,"").replace(/\.(js|ts)$/,"")]=s(h)}}catch(t){f=!0,d=t}finally{try{!c&&p.return&&p.return()}finally{if(f)throw d}}e.a=u},yNZV:function(t,e,n){"use strict";e.a={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}}},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),s=n("XSDV"),u=(n.n(s),{_default:function(){return n.e(1).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"tt1",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(u["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):u[n]().then(function(t){return c[n]=t,delete u[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}},zQW4:function(t,e,n){"use strict";for(var r=n("woOf"),o=n.n(r),a=n("//Fk"),i=n.n(a),s=n("BO1k"),u=n.n(s),c=n("mtWM"),f=n.n(c),d={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=u()(Array.isArray(n)?n:[n]);!(r=(i=s.next()).done);r=!0){var c=i.value;if(!e)return void delete this.defaults.headers[c][t];this.defaults.headers[c][t]=e}}catch(t){o=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||i.a.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||i.a.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},l=function(t){d["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},p=["request","delete","get","head","options","post","put","patch"],h=0;h<p.length;h++){l(p[h])}e.a=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?o()({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=f.a.create(n);!function(t){for(var e in d)t[e]=d[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)}}},["T23V"]);