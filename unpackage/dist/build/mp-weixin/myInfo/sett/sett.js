(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["myInfo/sett/sett"],{2418:function(t,n,e){"use strict";(function(t){e("a28b");r(e("66fd"));var n=r(e("24a4"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"24a4":function(t,n,e){"use strict";e.r(n);var r=e("cc6b"),c=e("f72c");for(var o in c)"default"!==o&&function(t){e.d(n,t,(function(){return c[t]}))}(o);e("d6d2");var u,i=e("f0c5"),a=Object(i["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=a.exports},"57b5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("2f62");function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){u(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i={data:function(){return{}},methods:o({},(0,r.mapMutations)(["loginOut"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.loginOut(),setTimeout((function(){t.navigateBack()}),200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=i}).call(this,e("543d")["default"])},6665:function(t,n,e){},cc6b:function(t,n,e){"use strict";var r,c=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}))},d6d2:function(t,n,e){"use strict";var r=e("6665"),c=e.n(r);c.a},f72c:function(t,n,e){"use strict";e.r(n);var r=e("57b5"),c=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=c.a}},[["2418","common/runtime","common/vendor"]]]);