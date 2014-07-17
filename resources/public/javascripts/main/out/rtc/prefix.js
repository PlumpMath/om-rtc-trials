// Compiled by ClojureScript 0.0-2227
goog.provide('rtc.prefix');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.debug');
/**
* Given the name of a feature and optional browser overrides
* provide a consistant interface for accessing it
* @param {...*} var_args
*/
rtc.prefix.prefix = (function() {
var prefix = null;
var prefix__1 = (function (name){return prefix.call(null,window,name);
});
var prefix__3 = (function() { 
var G__19045__delegate = function (source,name,specifics){var prefixes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webkit","moz","ms"], null);var upper_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,name,0,1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,name,1)));var prefixes__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,((function (prefixes,upper_name){
return (function (p1__19042_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19042_SHARP_)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(upper_name));
});})(prefixes,upper_name))
),prefixes));var prefixes__$2 = cljs.core.assoc.call(null,prefixes__$1,"",name);var prefixes__$3 = cljs.core.vals.call(null,cljs.core.merge.call(null,prefixes__$2,specifics));var prefixes__$4 = cljs.core.map.call(null,((function (prefixes,upper_name,prefixes__$1,prefixes__$2,prefixes__$3){
return (function (p1__19043_SHARP_){return (source[p1__19043_SHARP_]);
});})(prefixes,upper_name,prefixes__$1,prefixes__$2,prefixes__$3))
,prefixes__$3);return cljs.core.some.call(null,((function (prefixes,upper_name,prefixes__$1,prefixes__$2,prefixes__$3,prefixes__$4){
return (function (p1__19044_SHARP_){if(!((p1__19044_SHARP_ == null)))
{return p1__19044_SHARP_;
} else
{return null;
}
});})(prefixes,upper_name,prefixes__$1,prefixes__$2,prefixes__$3,prefixes__$4))
,prefixes__$4);
};
var G__19045 = function (source,name,var_args){
var specifics = null;if (arguments.length > 2) {
  specifics = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__19045__delegate.call(this,source,name,specifics);};
G__19045.cljs$lang$maxFixedArity = 2;
G__19045.cljs$lang$applyTo = (function (arglist__19046){
var source = cljs.core.first(arglist__19046);
arglist__19046 = cljs.core.next(arglist__19046);
var name = cljs.core.first(arglist__19046);
var specifics = cljs.core.rest(arglist__19046);
return G__19045__delegate(source,name,specifics);
});
G__19045.cljs$core$IFn$_invoke$arity$variadic = G__19045__delegate;
return G__19045;
})()
;
prefix = function(source,name,var_args){
var specifics = var_args;
switch(arguments.length){
case 1:
return prefix__1.call(this,source);
default:
return prefix__3.cljs$core$IFn$_invoke$arity$variadic(source,name, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prefix.cljs$lang$maxFixedArity = 2;
prefix.cljs$lang$applyTo = prefix__3.cljs$lang$applyTo;
prefix.cljs$core$IFn$_invoke$arity$1 = prefix__1;
prefix.cljs$core$IFn$_invoke$arity$variadic = prefix__3.cljs$core$IFn$_invoke$arity$variadic;
return prefix;
})()
;
rtc.prefix.indexedDB = rtc.prefix.prefix.call(null,"indexedDB");
rtc.prefix.RTCPeerConnection = rtc.prefix.prefix.call(null,"RTCPeerConnection");
rtc.prefix.PersistentStorage = rtc.prefix.prefix.call(null,navigator,"PersistentStorage");

//# sourceMappingURL=prefix.js.map