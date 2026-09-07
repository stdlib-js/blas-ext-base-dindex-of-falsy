"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var s=n(function(h,v){
function l(e,r,i,c){var t,a;if(e<=0)return-1;for(t=c,a=0;a<e;a++){if(!r[t])return a;t+=i}return-1}v.exports=l
});var f=n(function(k,d){
var p=require('@stdlib/strided-base-stride2offset/dist'),O=s();function F(e,r,i){return O(e,r,i,p(e,i))}d.exports=F
});var x=n(function(w,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=f(),m=s();j(o,"ndarray",m);q.exports=o
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),b=x(),u,y=_(R(__dirname,"./native.js"));E(y)?u=b:u=y;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
