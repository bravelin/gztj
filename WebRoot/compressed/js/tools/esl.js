var define,require;!function(n){function t(n,t){_(n);var e=hn.waitSeconds;return Q(n)&&e&&(W&&clearTimeout(W),W=setTimeout(r,1e3*e)),en(n,t)}function r(){var n,t=[],r=[],e={};for(var i in X)w(i)||(t.push(i),n=1),K(X[i].realDeps||[],function(t){X[t]||e[t]||(n=1,r.push(t),e[t]=1)});if(n)throw new Error("[MODULE_TIMEOUT]Hang( "+(t.join(", ")||"none")+" ) Miss( "+(r.join(", ")||"none")+" )")}function e(){var n=arguments.length;if(n){for(var t,r,e=arguments[--n];n--;){var i=arguments[n];J(i)?t=i:Q(i)&&(r=i)}var o=window.opera;if(!t&&document.attachEvent&&(!o||"[object Opera]"!==o.toString())){var c=P();t=c&&c.getAttribute("data-require-id")}r=r||["require","exports","module"],t?(a(t,r,e),on&&clearTimeout(on),on=setTimeout(u,10)):pn.push({deps:r,factory:e})}}function i(n){var t=[];for(var r in X){var e=X[r];e.state==n&&t.push(e)}return t}function o(){var n=hn.config[this.id];return n&&"object"==typeof n?n:{}}function a(n,t,r){if(!y(n)){var e={id:n,deps:t,factory:r,exports:{},config:o,state:Y,hardDeps:{}};X[n]=e}}function u(){var n=[],t={},r=i(Y);K(r,function(r){var e=r.deps.slice(0);r.realDeps=e;var i=r.factory,o=/require\(\s*(['"'])([^'"]+)\1\s*\)/g,a=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm;G(i)&&i.toString().replace(a,"").replace(o,function(n,t,r){e.push(r)}),K(e,function(e){var i=L(e);if(i.resource){var o=R(i.module,r.id);t[o]||(n.push(o),t[o]=1)}}),r.state=Z}),S(n,function(){c(r)})}function c(n){var t=[];K(n,function(n){if(n.state===Z){var r=n.id,e=n.deps,i=n.hardDeps,o=G(n.factory)?n.factory.length:0;K(e,function(n,t){n=R(n,r),e[t]=n,o>t&&(i[n]=1)});for(var a=n.realDeps,u=a.length,c={};u--;){var s=R(a[u],r);!s||s in c||s in ln?a.splice(u,1):(c[s]=1,a[u]=s,t.push(s))}n.realDepsIndex=c,n.state=nn,f(n),l(r)}}),S(t)}function f(t){function r(){o++;var n=1,r=[];return K(t.realDeps,function(e){if(x(e)){if(!w(e))switch(v(i,e)){case an:case un:n=0;break;case cn:t.hardDeps[e]&&r.push(e)}}else n=0;return!!n}),n&&K(r,function(n){p(n)}),n=n&&0===r.length,n&&(t.state=tn),o--,n}function e(){if(!(t.state==rn||o>1)&&r()){try{var e=t.factory,a=G(e)?e.apply(n,s(t.deps,{require:M(i),exports:t.exports,module:t})):e;"undefined"!=typeof a&&(t.exports=a),t.state=rn,t.invokeFactory=null}catch(u){if(/^\[MODULE_MISS\]"([^"]+)/.test(u.message))return void(t.hardDeps[RegExp.$1]=1);throw u}l(i),d(i)}}var i=t.id;t.invokeFactory=e,e();var o=0}function s(n,t){var r=[];return K(n,function(n,e){r[e]=t[n]||k(n)}),r}function v(n,t,r){if(!x(t))return an;if(r=r||{},r[t]=1,t==n)return cn;var e=E(t),i=e&&e.realDeps;if(i)for(var o=i.length;o--;){var a=i[o];if(!r[a]){var u=v(n,a,r);switch(u){case an:case cn:return u}}}return un}function l(n){for(var t in X){var r=X[t].realDepsIndex||{};r[n]&&p(t)}}function p(n){var t=X[n];t&&t.invokeFactory&&t.invokeFactory()}function d(n){vn++,K(fn,function(t){t&&t(n)}),vn--,h()}function h(){1>vn&&(sn.sort(function(n,t){return t-n}),K(sn,function(n){fn.splice(n,1)}),sn=[])}function g(n){K(fn,function(t,r){n==t&&sn.push(r)})}function m(n){fn.push(n)}function y(n){return n in X}function w(n){return y(n)&&X[n].state==rn}function x(n){return y(n)&&X[n].state>=nn}function k(n){return w(n)?X[n].exports:null}function E(n){return X[n]}function b(n,t){X[n]={exports:t||!0,state:rn},l(n),d(n)}function D(n){var t=pn.slice(0);pn.length=0,pn=[],K(t,function(t){var r=t.id||n;a(r,t.deps,t.factory)}),u()}function S(t,r,e){function i(){function e(n){var t=1;return K(n,function(n){return a[n]||(a[n]=1,ln[n])?void 0:w(n)&&e(E(n).realDeps)?void 0:(t=0,!1)}),t}if(!o){var a={};e(t)&&(o=1,g(i),r.apply(n,s(t,ln)))}}if(r=r||new Function,e=e||"",J(t)){if(!w(t))throw new Error('[MODULE_MISS]"'+t+'" is not exists!');return k(t)}if(Q(t)){if(0===t.length)return void r();var o=0;m(i),K(t,function(n){n in ln||(n.indexOf("!")>0?$:U)(n,e)}),i()}}function U(n){function t(){var t=r.readyState;("undefined"==typeof t||/^(loaded|complete)$/.test(t))&&(r.onload=r.onreadystatechange=null,r=null,D(n),delete dn[n])}if(!dn[n]){if(y(n))return void c([E(n)]);dn[n]=1;var r=document.createElement("script");r.setAttribute("data-require-id",n),r.src=I(n),r.async=!0,r.readyState?r.onreadystatechange=t:r.onload=t,C(r)}}function $(n,t){function r(t){b(n,t)}function e(e){w(n)||e.load(u,M(t),r,o.call({id:n}))}var i=L(n),a=i.module,u=i.resource;r.fromText=function(n,t){new Function(t)(),D(n)},w(a)?e(k(a)):S([a],e)}function T(n,t){var r=hn[n],e=typeof r;if("string"==e||"number"==e)hn[n]=t;else if(Q(r))K(t,function(n){r.push(n)});else for(var i in t)r[i]=t[i]}function q(){hn.baseUrl=hn.baseUrl.replace(/\/$/,"")+"/",j(),F(),O(),A()}function O(){gn=[],K(hn.packages,function(n){var t=n;J(n)&&(t={name:n.split("/")[0],location:n,main:"main"}),t.location=t.location||t.name,t.main=(t.main||"main").replace(/\.js$/i,""),gn.push(t)}),gn.sort(V("name"))}function j(){mn=N(hn.paths),mn.sort(V())}function A(){wn=N(hn.urlArgs),wn.sort(V())}function F(){xn=[],xn=N(hn.map),xn.sort(V()),K(xn,function(n){var t=n.k;n.v=N(n.v),n.v.sort(V()),n.reg="*"==t?/^/:H(t)})}function I(n){function t(n){f||(c+=(c.indexOf("?")>0?"&":"?")+n,f=1)}var r=/(\.[a-z0-9]+)$/i,e=/(\?[^#]*)$/i,i=".js",o=n,a="";if(e.test(n)&&(a=RegExp.$1,n=n.replace(e,"")),r.test(n)&&(i=RegExp.$1,o=n.replace(r,"")),!bn.test(o))return n;var u,c=o;K(mn,function(n){var t=n.k;return H(t).test(o)?(c=c.replace(t,n.v),u=1,!1):void 0}),u||K(gn,function(n){var t=n.name;return H(t).test(o)?(c=c.replace(t,n.location),!1):void 0}),/^([a-z]{2,10}:\/)?\//i.test(c)||(c=hn.baseUrl+c),c+=i+a;var f;return K(wn,function(n){return H(n.k).test(o)?(t(n.v),!1):void 0}),yn&&t(yn),c}function M(n){function t(t,e){if(J(t)){var i;return(i=r[t])||(i=S(R(t,n),e,n),r[t]=i),i}if(Q(t)){var o=[];K(t,function(t){var r=L(t),e=R(r.module,n);r.resource&&!w(e)&&o.push(e)}),S(o,function(){var r=[];K(t,function(t){r.push(R(t,n))}),S(r,e,n)},n)}}var r={};return t.toUrl=function(t){return I(R(t,n))},t}function R(n,t){if(!n)return"";var r=L(n);if(!r)return n;var e=r.resource,i=z(r.module,t);if(K(gn,function(n){var t=n.name,r=t+"/"+n.main;return t==i?(i=i.replace(t,r),!1):void 0}),i=B(i,t),e){var o=k(i);return e=o&&o.normalize?o.normalize(e,function(n){return R(n,t)}):R(e,t),i+"!"+e}return i}function z(n,t){if(/^\.{1,2}/.test(n)){var r=t.split("/"),e=n.split("/"),i=r.length-1,o=e.length,a=0,u=0;n:for(var c=0;o>c;c++){var f=e[c];switch(f){case"..":if(!(i>a))break n;a++,u++;break;case".":u++;break;default:break n}}return r.length=i-a,e=e.slice(u),r.push.apply(r,e),r.join("/")}return n}function _(n){function t(n){/^\.{1,2}/.test(n)&&r.push(n)}var r=[];if(J(n)?t(n):K(n,function(n){t(n)}),r.length>0)throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+r.join(", "))}function L(n){var t=n.split("!");return bn.test(t[0])?{module:t[0],resource:t[1]||""}:null}function B(n,t){return K(xn,function(r){return r.reg.test(t)?(K(r.v,function(t){var r=t.k,e=H(r);return e.test(n)?(n=n.replace(r,t.v),!1):void 0}),!1):void 0}),n}function N(n){var t=[];for(var r in n)n.hasOwnProperty(r)&&t.push({k:r,v:n[r]});return t}function P(){if(kn)return kn;if(En&&"interactive"==En.readyState)return En;for(var n=document.getElementsByTagName("script"),t=n.length;t--;){var r=n[t];if("interactive"==r.readyState)return En=r,r}}function C(n){kn=n;var t=document;(t.getElementsByTagName("head")[0]||t.body).appendChild(n),kn=null}function H(n){return new RegExp("^"+n+"(/|$)")}function Q(n){return n instanceof Array}function G(n){return"function"==typeof n}function J(n){return"string"==typeof n}function K(n,t){if(Q(n))for(var r=0,e=n.length;e>r&&t(n[r],r)!==!1;r++);}function V(n){return n=n||"k",function(t,r){var e=t[n],i=r[n];return"*"==i?-1:"*"==e?1:i.length-e.length}}var W,X={},Y=1,Z=2,nn=3,tn=4,rn=5,en=M("");t.toUrl=I;var on;e.amd={};var an=0,un=1,cn=2,fn=[],sn=[],vn=0,ln={require:t,exports:1,module:1},pn=[],dn={},hn={baseUrl:"./",paths:{},config:{},map:{},packages:[],waitSeconds:0,urlArgs:{}};t.config=function(n){for(var t in hn)if(n.hasOwnProperty(t)){var r=n[t];"urlArgs"==t&&J(r)?yn=r:T(t,r)}q()},q();var gn,mn,yn,wn,xn,kn,En,bn=/^[-_a-z0-9\.]+(\/[-_a-z0-9\.]+)*$/i;n.define=e,n.require=t}(this);