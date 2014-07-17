// Compiled by ClojureScript 0.0-2227
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1730933117);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__13941__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__13941 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__13941__delegate.call(this,m,k,f,x1,x2,xs);};
G__13941.cljs$lang$maxFixedArity = 5;
G__13941.cljs$lang$applyTo = (function (arglist__13942){
var m = cljs.core.first(arglist__13942);
arglist__13942 = cljs.core.next(arglist__13942);
var k = cljs.core.first(arglist__13942);
arglist__13942 = cljs.core.next(arglist__13942);
var f = cljs.core.first(arglist__13942);
arglist__13942 = cljs.core.next(arglist__13942);
var x1 = cljs.core.first(arglist__13942);
arglist__13942 = cljs.core.next(arglist__13942);
var x2 = cljs.core.first(arglist__13942);
var xs = cljs.core.rest(arglist__13942);
return G__13941__delegate(m,k,f,x1,x2,xs);
});
G__13941.cljs$core$IFn$_invoke$arity$variadic = G__13941__delegate;
return G__13941;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var m_atom__8748__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__13951_13957 = cljs.core.seq.call(null,m);var chunk__13952_13958 = null;var count__13953_13959 = 0;var i__13954_13960 = 0;while(true){
if((i__13954_13960 < count__13953_13959))
{var vec__13955_13961 = cljs.core._nth.call(null,chunk__13952_13958,i__13954_13960);var k_13962 = cljs.core.nth.call(null,vec__13955_13961,0,null);var v_13963 = cljs.core.nth.call(null,vec__13955_13961,1,null);var m13950_13964 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m13950_13964,k_13962,f.call(null,v_13963)));
{
var G__13965 = seq__13951_13957;
var G__13966 = chunk__13952_13958;
var G__13967 = count__13953_13959;
var G__13968 = (i__13954_13960 + 1);
seq__13951_13957 = G__13965;
chunk__13952_13958 = G__13966;
count__13953_13959 = G__13967;
i__13954_13960 = G__13968;
continue;
}
} else
{var temp__4092__auto___13969 = cljs.core.seq.call(null,seq__13951_13957);if(temp__4092__auto___13969)
{var seq__13951_13970__$1 = temp__4092__auto___13969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13951_13970__$1))
{var c__4297__auto___13971 = cljs.core.chunk_first.call(null,seq__13951_13970__$1);{
var G__13972 = cljs.core.chunk_rest.call(null,seq__13951_13970__$1);
var G__13973 = c__4297__auto___13971;
var G__13974 = cljs.core.count.call(null,c__4297__auto___13971);
var G__13975 = 0;
seq__13951_13957 = G__13972;
chunk__13952_13958 = G__13973;
count__13953_13959 = G__13974;
i__13954_13960 = G__13975;
continue;
}
} else
{var vec__13956_13976 = cljs.core.first.call(null,seq__13951_13970__$1);var k_13977 = cljs.core.nth.call(null,vec__13956_13976,0,null);var v_13978 = cljs.core.nth.call(null,vec__13956_13976,1,null);var m13950_13979 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m13950_13979,k_13977,f.call(null,v_13978)));
{
var G__13980 = cljs.core.next.call(null,seq__13951_13970__$1);
var G__13981 = null;
var G__13982 = 0;
var G__13983 = 0;
seq__13951_13957 = G__13980;
chunk__13952_13958 = G__13981;
count__13953_13959 = G__13982;
i__13954_13960 = G__13983;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8748__auto__));
} else
{return null;
}
}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8748__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__13992_13998 = cljs.core.seq.call(null,m);var chunk__13993_13999 = null;var count__13994_14000 = 0;var i__13995_14001 = 0;while(true){
if((i__13995_14001 < count__13994_14000))
{var vec__13996_14002 = cljs.core._nth.call(null,chunk__13993_13999,i__13995_14001);var k_14003 = cljs.core.nth.call(null,vec__13996_14002,0,null);var v_14004 = cljs.core.nth.call(null,vec__13996_14002,1,null);var m13991_14005 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m13991_14005,f.call(null,k_14003),v_14004));
{
var G__14006 = seq__13992_13998;
var G__14007 = chunk__13993_13999;
var G__14008 = count__13994_14000;
var G__14009 = (i__13995_14001 + 1);
seq__13992_13998 = G__14006;
chunk__13993_13999 = G__14007;
count__13994_14000 = G__14008;
i__13995_14001 = G__14009;
continue;
}
} else
{var temp__4092__auto___14010 = cljs.core.seq.call(null,seq__13992_13998);if(temp__4092__auto___14010)
{var seq__13992_14011__$1 = temp__4092__auto___14010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13992_14011__$1))
{var c__4297__auto___14012 = cljs.core.chunk_first.call(null,seq__13992_14011__$1);{
var G__14013 = cljs.core.chunk_rest.call(null,seq__13992_14011__$1);
var G__14014 = c__4297__auto___14012;
var G__14015 = cljs.core.count.call(null,c__4297__auto___14012);
var G__14016 = 0;
seq__13992_13998 = G__14013;
chunk__13993_13999 = G__14014;
count__13994_14000 = G__14015;
i__13995_14001 = G__14016;
continue;
}
} else
{var vec__13997_14017 = cljs.core.first.call(null,seq__13992_14011__$1);var k_14018 = cljs.core.nth.call(null,vec__13997_14017,0,null);var v_14019 = cljs.core.nth.call(null,vec__13997_14017,1,null);var m13991_14020 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m13991_14020,f.call(null,k_14018),v_14019));
{
var G__14021 = cljs.core.next.call(null,seq__13992_14011__$1);
var G__14022 = null;
var G__14023 = 0;
var G__14024 = 0;
seq__13992_13998 = G__14021;
chunk__13993_13999 = G__14022;
count__13994_14000 = G__14023;
i__13995_14001 = G__14024;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8748__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__8748__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14031_14035 = cljs.core.seq.call(null,ks);var chunk__14032_14036 = null;var count__14033_14037 = 0;var i__14034_14038 = 0;while(true){
if((i__14034_14038 < count__14033_14037))
{var k_14039 = cljs.core._nth.call(null,chunk__14032_14036,i__14034_14038);var m14030_14040 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m14030_14040,k_14039,f.call(null,k_14039)));
{
var G__14041 = seq__14031_14035;
var G__14042 = chunk__14032_14036;
var G__14043 = count__14033_14037;
var G__14044 = (i__14034_14038 + 1);
seq__14031_14035 = G__14041;
chunk__14032_14036 = G__14042;
count__14033_14037 = G__14043;
i__14034_14038 = G__14044;
continue;
}
} else
{var temp__4092__auto___14045 = cljs.core.seq.call(null,seq__14031_14035);if(temp__4092__auto___14045)
{var seq__14031_14046__$1 = temp__4092__auto___14045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14031_14046__$1))
{var c__4297__auto___14047 = cljs.core.chunk_first.call(null,seq__14031_14046__$1);{
var G__14048 = cljs.core.chunk_rest.call(null,seq__14031_14046__$1);
var G__14049 = c__4297__auto___14047;
var G__14050 = cljs.core.count.call(null,c__4297__auto___14047);
var G__14051 = 0;
seq__14031_14035 = G__14048;
chunk__14032_14036 = G__14049;
count__14033_14037 = G__14050;
i__14034_14038 = G__14051;
continue;
}
} else
{var k_14052 = cljs.core.first.call(null,seq__14031_14046__$1);var m14030_14053 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m14030_14053,k_14052,f.call(null,k_14052)));
{
var G__14054 = cljs.core.next.call(null,seq__14031_14046__$1);
var G__14055 = null;
var G__14056 = 0;
var G__14057 = 0;
seq__14031_14035 = G__14054;
chunk__14032_14036 = G__14055;
count__14033_14037 = G__14056;
i__14034_14038 = G__14057;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8748__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__8748__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14064_14068 = cljs.core.seq.call(null,vs);var chunk__14065_14069 = null;var count__14066_14070 = 0;var i__14067_14071 = 0;while(true){
if((i__14067_14071 < count__14066_14070))
{var v_14072 = cljs.core._nth.call(null,chunk__14065_14069,i__14067_14071);var m14063_14073 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m14063_14073,f.call(null,v_14072),v_14072));
{
var G__14074 = seq__14064_14068;
var G__14075 = chunk__14065_14069;
var G__14076 = count__14066_14070;
var G__14077 = (i__14067_14071 + 1);
seq__14064_14068 = G__14074;
chunk__14065_14069 = G__14075;
count__14066_14070 = G__14076;
i__14067_14071 = G__14077;
continue;
}
} else
{var temp__4092__auto___14078 = cljs.core.seq.call(null,seq__14064_14068);if(temp__4092__auto___14078)
{var seq__14064_14079__$1 = temp__4092__auto___14078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14064_14079__$1))
{var c__4297__auto___14080 = cljs.core.chunk_first.call(null,seq__14064_14079__$1);{
var G__14081 = cljs.core.chunk_rest.call(null,seq__14064_14079__$1);
var G__14082 = c__4297__auto___14080;
var G__14083 = cljs.core.count.call(null,c__4297__auto___14080);
var G__14084 = 0;
seq__14064_14068 = G__14081;
chunk__14065_14069 = G__14082;
count__14066_14070 = G__14083;
i__14067_14071 = G__14084;
continue;
}
} else
{var v_14085 = cljs.core.first.call(null,seq__14064_14079__$1);var m14063_14086 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m14063_14086,f.call(null,v_14085),v_14085));
{
var G__14087 = cljs.core.next.call(null,seq__14064_14079__$1);
var G__14088 = null;
var G__14089 = 0;
var G__14090 = 0;
seq__14064_14068 = G__14087;
chunk__14065_14069 = G__14088;
count__14066_14070 = G__14089;
i__14067_14071 = G__14090;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8748__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__14091){var vec__14093 = p__14091;var k = cljs.core.nth.call(null,vec__14093,0,null);var ks = cljs.core.nthnext.call(null,vec__14093,1);if(cljs.core.truth_(m))
{var temp__4090__auto__ = (function (){var and__3529__auto__ = ks;if(and__3529__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var res = temp__4090__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__8748__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14102_14108 = cljs.core.seq.call(null,x);var chunk__14103_14109 = null;var count__14104_14110 = 0;var i__14105_14111 = 0;while(true){
if((i__14105_14111 < count__14104_14110))
{var vec__14106_14112 = cljs.core._nth.call(null,chunk__14103_14109,i__14105_14111);var k_14113 = cljs.core.nth.call(null,vec__14106_14112,0,null);var v_14114 = cljs.core.nth.call(null,vec__14106_14112,1,null);var m14101_14115 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m14101_14115,((typeof k_14113 === 'string')?cljs.core.keyword.call(null,k_14113):k_14113),keywordize_map.call(null,v_14114)));
{
var G__14116 = seq__14102_14108;
var G__14117 = chunk__14103_14109;
var G__14118 = count__14104_14110;
var G__14119 = (i__14105_14111 + 1);
seq__14102_14108 = G__14116;
chunk__14103_14109 = G__14117;
count__14104_14110 = G__14118;
i__14105_14111 = G__14119;
continue;
}
} else
{var temp__4092__auto___14120 = cljs.core.seq.call(null,seq__14102_14108);if(temp__4092__auto___14120)
{var seq__14102_14121__$1 = temp__4092__auto___14120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14102_14121__$1))
{var c__4297__auto___14122 = cljs.core.chunk_first.call(null,seq__14102_14121__$1);{
var G__14123 = cljs.core.chunk_rest.call(null,seq__14102_14121__$1);
var G__14124 = c__4297__auto___14122;
var G__14125 = cljs.core.count.call(null,c__4297__auto___14122);
var G__14126 = 0;
seq__14102_14108 = G__14123;
chunk__14103_14109 = G__14124;
count__14104_14110 = G__14125;
i__14105_14111 = G__14126;
continue;
}
} else
{var vec__14107_14127 = cljs.core.first.call(null,seq__14102_14121__$1);var k_14128 = cljs.core.nth.call(null,vec__14107_14127,0,null);var v_14129 = cljs.core.nth.call(null,vec__14107_14127,1,null);var m14101_14130 = cljs.core.deref.call(null,m_atom__8748__auto__);cljs.core.reset_BANG_.call(null,m_atom__8748__auto__,cljs.core.assoc_BANG_.call(null,m14101_14130,((typeof k_14128 === 'string')?cljs.core.keyword.call(null,k_14128):k_14128),keywordize_map.call(null,v_14129)));
{
var G__14131 = cljs.core.next.call(null,seq__14102_14121__$1);
var G__14132 = null;
var G__14133 = 0;
var G__14134 = 0;
seq__14102_14108 = G__14131;
chunk__14103_14109 = G__14132;
count__14104_14110 = G__14133;
i__14105_14111 = G__14134;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8748__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4090__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4090__auto__))
{var pair__8817__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__8817__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__14135 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__14136 = cljs.core.next.call(null,ks);
m = G__14135;
ks = G__14136;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3541__auto__ = m;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4266__auto__ = (function iter__14145(s__14146){return (new cljs.core.LazySeq(null,(function (){var s__14146__$1 = s__14146;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14146__$1);if(temp__4092__auto__)
{var s__14146__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14146__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14146__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14148 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14147 = 0;while(true){
if((i__14147 < size__4265__auto__))
{var vec__14151 = cljs.core._nth.call(null,c__4264__auto__,i__14147);var k = cljs.core.nth.call(null,vec__14151,0,null);var v = cljs.core.nth.call(null,vec__14151,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__14148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14153 = (i__14147 + 1);
i__14147 = G__14153;
continue;
}
} else
{{
var G__14154 = (i__14147 + 1);
i__14147 = G__14154;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14148),iter__14145.call(null,cljs.core.chunk_rest.call(null,s__14146__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14148),null);
}
} else
{var vec__14152 = cljs.core.first.call(null,s__14146__$2);var k = cljs.core.nth.call(null,vec__14152,0,null);var v = cljs.core.nth.call(null,vec__14152,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14145.call(null,cljs.core.rest.call(null,s__14146__$2)));
} else
{{
var G__14155 = cljs.core.rest.call(null,s__14146__$2);
s__14146__$1 = G__14155;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__14156){
var m = cljs.core.first(arglist__14156);
var kvs = cljs.core.rest(arglist__14156);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__14157){
var m = cljs.core.first(arglist__14157);
arglist__14157 = cljs.core.next(arglist__14157);
var key_seq = cljs.core.first(arglist__14157);
arglist__14157 = cljs.core.next(arglist__14157);
var f = cljs.core.first(arglist__14157);
var args = cljs.core.rest(arglist__14157);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.next.call(null,s);if(temp__4092__auto__)
{var n = temp__4092__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4092__auto__ = cljs.core.seq.call(null,xs);if(temp__4092__auto__)
{var xs__$1 = temp__4092__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4266__auto__ = ((function (s){
return (function iter__14162(s__14163){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__14163__$1 = s__14163;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14163__$1);if(temp__4092__auto__)
{var s__14163__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14163__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14163__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14165 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14164 = 0;while(true){
if((i__14164 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__14164);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__14165,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__14166 = (i__14164 + 1);
i__14164 = G__14166;
continue;
}
} else
{{
var G__14167 = (i__14164 + 1);
i__14164 = G__14167;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14165),iter__14162.call(null,cljs.core.chunk_rest.call(null,s__14163__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14165),null);
}
} else
{var x = cljs.core.first.call(null,s__14163__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__14162.call(null,cljs.core.rest.call(null,s__14163__$2)));
} else
{{
var G__14168 = cljs.core.rest.call(null,s__14163__$2);
s__14163__$1 = G__14168;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4266__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__14169){
var colls = cljs.core.seq(arglist__14169);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__14170__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__14171 = conj_when.call(null,coll,x);
var G__14172 = cljs.core.first.call(null,xs);
var G__14173 = cljs.core.next.call(null,xs);
coll = G__14171;
x = G__14172;
xs = G__14173;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__14170 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14170__delegate.call(this,coll,x,xs);};
G__14170.cljs$lang$maxFixedArity = 2;
G__14170.cljs$lang$applyTo = (function (arglist__14174){
var coll = cljs.core.first(arglist__14174);
arglist__14174 = cljs.core.next(arglist__14174);
var x = cljs.core.first(arglist__14174);
var xs = cljs.core.rest(arglist__14174);
return G__14170__delegate(coll,x,xs);
});
G__14170.cljs$core$IFn$_invoke$arity$variadic = G__14170__delegate;
return G__14170;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__14176__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__14175_SHARP_){return cljs.core.apply.call(null,f,p1__14175_SHARP_,args);
}));
};
var G__14176 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14176__delegate.call(this,a,f,args);};
G__14176.cljs$lang$maxFixedArity = 2;
G__14176.cljs$lang$applyTo = (function (arglist__14177){
var a = cljs.core.first(arglist__14177);
arglist__14177 = cljs.core.next(arglist__14177);
var f = cljs.core.first(arglist__14177);
var args = cljs.core.rest(arglist__14177);
return G__14176__delegate(a,f,args);
});
G__14176.cljs$core$IFn$_invoke$arity$variadic = G__14176__delegate;
return G__14176;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__14178__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__14178 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14178__delegate.call(this,f,arg,args);};
G__14178.cljs$lang$maxFixedArity = 2;
G__14178.cljs$lang$applyTo = (function (arglist__14179){
var f = cljs.core.first(arglist__14179);
arglist__14179 = cljs.core.next(arglist__14179);
var arg = cljs.core.first(arglist__14179);
var args = cljs.core.rest(arglist__14179);
return G__14178__delegate(f,arg,args);
});
G__14178.cljs$core$IFn$_invoke$arity$variadic = G__14178__delegate;
return G__14178;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map