// Compiled by ClojureScript 0.0-2227
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__7277__7278__auto__){var G__14211 = p1__7277__7278__auto__;if(G__14211)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__14211.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__14211.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14211);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14211);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__14212_SHARP_){return (cljs.core.val.call(null,p1__14212_SHARP_) > 1);
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__14214 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__14214,0,null);var v = cljs.core.nth.call(null,vec__14214,1,null);var p = vec__14214;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"missing-key","missing-key",2360894698),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"map","map",1014012110),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return schema.core.both.call(null,s1,s2);
} else
{return null;
}
}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___14220 = schema.utils.use_fn_validation;var output_schema14215_14221 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema14216_14222 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker14217_14223 = schema.core.checker.call(null,input_schema14216_14222);var output_checker14218_14224 = schema.core.checker.call(null,output_schema14215_14221);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___14220,output_schema14215_14221,input_schema14216_14222,input_checker14217_14223,output_checker14218_14224){
return (function unwrap_schema_form_key(G__14219){var validate__7247__auto__ = ufv___14220.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14225 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14219], null);var temp__4092__auto___14226 = input_checker14217_14223.call(null,args__7248__auto___14225);if(cljs.core.truth_(temp__4092__auto___14226))
{var error__7249__auto___14227 = temp__4092__auto___14226;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__7249__auto___14227)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14227,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14216_14222,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14225], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var k = G__14219;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),2)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-54341422,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14228 = output_checker14218_14224.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14228))
{var error__7249__auto___14229 = temp__4092__auto___14228;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__7249__auto___14229)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14229,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14215_14221,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14220,output_schema14215_14221,input_schema14216_14222,input_checker14217_14223,output_checker14218_14224))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema14215_14221,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14216_14222], null)));
var ufv___14235 = schema.utils.use_fn_validation;var output_schema14230_14236 = schema.core.Any;var input_schema14231_14237 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker14232_14238 = schema.core.checker.call(null,input_schema14231_14237);var output_checker14233_14239 = schema.core.checker.call(null,output_schema14230_14236);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___14235,output_schema14230_14236,input_schema14231_14237,input_checker14232_14238,output_checker14233_14239){
return (function explicit_schema_key_map(G__14234){var validate__7247__auto__ = ufv___14235.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14234], null);var temp__4092__auto___14241 = input_checker14232_14238.call(null,args__7248__auto___14240);if(cljs.core.truth_(temp__4092__auto___14241))
{var error__7249__auto___14242 = temp__4092__auto___14241;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__7249__auto___14242)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14242,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14231_14237,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14240], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var s = G__14234;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14243 = output_checker14233_14239.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14243))
{var error__7249__auto___14244 = temp__4092__auto___14243;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__7249__auto___14244)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14244,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14230_14236,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14235,output_schema14230_14236,input_schema14231_14237,input_checker14232_14238,output_checker14233_14239))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema14230_14236,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14231_14237], null)));
var ufv___14250 = schema.utils.use_fn_validation;var output_schema14245_14251 = schema.core.Any;var input_schema14246_14252 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker14247_14253 = schema.core.checker.call(null,input_schema14246_14252);var output_checker14248_14254 = schema.core.checker.call(null,output_schema14245_14251);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___14250,output_schema14245_14251,input_schema14246_14252,input_checker14247_14253,output_checker14248_14254){
return (function split_schema_keys(G__14249){var validate__7247__auto__ = ufv___14250.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14255 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14249], null);var temp__4092__auto___14256 = input_checker14247_14253.call(null,args__7248__auto___14255);if(cljs.core.truth_(temp__4092__auto___14256))
{var error__7249__auto___14257 = temp__4092__auto___14256;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__7249__auto___14257)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14257,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14246_14252,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14255], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var s = G__14249;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14258 = output_checker14248_14254.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14258))
{var error__7249__auto___14259 = temp__4092__auto___14258;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__7249__auto___14259)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14259,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14245_14251,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14250,output_schema14245_14251,input_schema14246_14252,input_checker14247_14253,output_checker14248_14254))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema14245_14251,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14246_14252], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__14263){var vec__14264 = p__14263;var k = cljs.core.nth.call(null,vec__14264,0,null);var v = cljs.core.nth.call(null,vec__14264,1,null);var pk = key_project.call(null,k);var temp__4090__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4090__auto__))
{var vec__14265 = temp__4090__auto__;var ok = cljs.core.nth.call(null,vec__14265,0,null);var ov = cljs.core.nth.call(null,vec__14265,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__14266){
var key_project = cljs.core.first(arglist__14266);
arglist__14266 = cljs.core.next(arglist__14266);
var key_combine = cljs.core.first(arglist__14266);
arglist__14266 = cljs.core.next(arglist__14266);
var val_combine = cljs.core.first(arglist__14266);
var maps = cljs.core.rest(arglist__14266);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___14274 = schema.utils.use_fn_validation;var output_schema14268_14275 = plumbing.fnk.schema.InputSchema;var input_schema14269_14276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker14270_14277 = schema.core.checker.call(null,input_schema14269_14276);var output_checker14271_14278 = schema.core.checker.call(null,output_schema14268_14275);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278){
return (function union_input_schemata(G__14272,G__14273){var validate__7247__auto__ = ufv___14274.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14272,G__14273], null);var temp__4092__auto___14280 = input_checker14270_14277.call(null,args__7248__auto___14279);if(cljs.core.truth_(temp__4092__auto___14280))
{var error__7249__auto___14281 = temp__4092__auto___14280;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__7249__auto___14281)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14281,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14269_14276,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14279], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var i1 = G__14272;var i2 = G__14273;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7247__auto__,ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278){
return (function (p1__14267_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__14267_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__14267_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1110869890);
}
});})(validate__7247__auto__,ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278))
,((function (validate__7247__auto__,ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"k1","k1",-1640528161,null),new cljs.core.Symbol(null,"k2","k2",-1640528160,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));
}
} else
{return null;
}
}
}
}
}
});})(validate__7247__auto__,ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278))
,((function (validate__7247__auto__,ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7247__auto__,ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14282 = output_checker14271_14278.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14282))
{var error__7249__auto___14283 = temp__4092__auto___14282;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__7249__auto___14283)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14283,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14268_14275,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14274,output_schema14268_14275,input_schema14269_14276,input_checker14270_14277,output_checker14271_14278))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema14268_14275,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14269_14276], null)));
var ufv___14289 = schema.utils.use_fn_validation;var output_schema14284_14290 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema14285_14291 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker14286_14292 = schema.core.checker.call(null,input_schema14285_14291);var output_checker14287_14293 = schema.core.checker.call(null,output_schema14284_14290);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___14289,output_schema14284_14290,input_schema14285_14291,input_checker14286_14292,output_checker14287_14293){
return (function required_toplevel_keys(G__14288){var validate__7247__auto__ = ufv___14289.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14288], null);var temp__4092__auto___14295 = input_checker14286_14292.call(null,args__7248__auto___14294);if(cljs.core.truth_(temp__4092__auto___14295))
{var error__7249__auto___14296 = temp__4092__auto___14295;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__7249__auto___14296)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14296,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14285_14291,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14294], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var input_schema = G__14288;while(true){
return cljs.core.keep.call(null,((function (validate__7247__auto__,ufv___14289,output_schema14284_14290,input_schema14285_14291,input_checker14286_14292,output_checker14287_14293){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__7247__auto__,ufv___14289,output_schema14284_14290,input_schema14285_14291,input_checker14286_14292,output_checker14287_14293))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14297 = output_checker14287_14293.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14297))
{var error__7249__auto___14298 = temp__4092__auto___14297;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__7249__auto___14298)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14298,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14284_14290,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14289,output_schema14284_14290,input_schema14285_14291,input_checker14286_14292,output_checker14287_14293))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema14284_14290,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14285_14291], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4266__auto__ = (function iter__14307(s__14308){return (new cljs.core.LazySeq(null,(function (){var s__14308__$1 = s__14308;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14308__$1);if(temp__4092__auto__)
{var s__14308__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14308__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14308__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14310 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14309 = 0;while(true){
if((i__14309 < size__4265__auto__))
{var vec__14313 = cljs.core._nth.call(null,c__4264__auto__,i__14309);var k = cljs.core.nth.call(null,vec__14313,0,null);var v = cljs.core.nth.call(null,vec__14313,1,null);cljs.core.chunk_append.call(null,b__14310,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__14315 = (i__14309 + 1);
i__14309 = G__14315;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14310),iter__14307.call(null,cljs.core.chunk_rest.call(null,s__14308__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14310),null);
}
} else
{var vec__14314 = cljs.core.first.call(null,s__14308__$2);var k = cljs.core.nth.call(null,vec__14314,0,null);var v = cljs.core.nth.call(null,vec__14314,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__14307.call(null,cljs.core.rest.call(null,s__14308__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",271859124,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1637187556,null));
}))),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4266__auto__ = (function iter__14324(s__14325){return (new cljs.core.LazySeq(null,(function (){var s__14325__$1 = s__14325;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14325__$1);if(temp__4092__auto__)
{var s__14325__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14325__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14325__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14327 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14326 = 0;while(true){
if((i__14326 < size__4265__auto__))
{var vec__14330 = cljs.core._nth.call(null,c__4264__auto__,i__14326);var k = cljs.core.nth.call(null,vec__14330,0,null);var v = cljs.core.nth.call(null,vec__14330,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__14327,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__14332 = (i__14326 + 1);
i__14326 = G__14332;
continue;
}
} else
{{
var G__14333 = (i__14326 + 1);
i__14326 = G__14333;
continue;
}
}
} else
{{
var G__14334 = (i__14326 + 1);
i__14326 = G__14334;
continue;
}
}
} else
{{
var G__14335 = (i__14326 + 1);
i__14326 = G__14335;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14327),iter__14324.call(null,cljs.core.chunk_rest.call(null,s__14325__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14327),null);
}
} else
{var vec__14331 = cljs.core.first.call(null,s__14325__$2);var k = cljs.core.nth.call(null,vec__14331,0,null);var v = cljs.core.nth.call(null,vec__14331,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__14324.call(null,cljs.core.rest.call(null,s__14325__$2)));
} else
{{
var G__14336 = cljs.core.rest.call(null,s__14325__$2);
s__14325__$1 = G__14336;
continue;
}
}
} else
{{
var G__14337 = cljs.core.rest.call(null,s__14325__$2);
s__14325__$1 = G__14337;
continue;
}
}
} else
{{
var G__14338 = cljs.core.rest.call(null,s__14325__$2);
s__14325__$1 = G__14338;
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
});return iter__4266__auto__.call(null,input_schema);
})()));
} else
{return null;
}
}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",2405949387),new cljs.core.Keyword(null,"failures","failures",1689842587),fails], null));
} else
{return null;
}
});
var ufv___14361 = schema.utils.use_fn_validation;var output_schema14339_14362 = schema.core.Any;var input_schema14340_14363 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker14341_14364 = schema.core.checker.call(null,input_schema14340_14363);var output_checker14342_14365 = schema.core.checker.call(null,output_schema14339_14362);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___14361,output_schema14339_14362,input_schema14340_14363,input_checker14341_14364,output_checker14342_14365){
return (function compose_schemata(G__14343,G__14344){var validate__7247__auto__ = true;if(validate__7247__auto__)
{var args__7248__auto___14366 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14343,G__14344], null);var temp__4092__auto___14367 = input_checker14341_14364.call(null,args__7248__auto___14366);if(cljs.core.truth_(temp__4092__auto___14367))
{var error__7249__auto___14368 = temp__4092__auto___14367;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__7249__auto___14368)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14368,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14340_14363,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14366], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var G__14355 = G__14343;var vec__14357 = G__14355;var i2 = cljs.core.nth.call(null,vec__14357,0,null);var o2 = cljs.core.nth.call(null,vec__14357,1,null);var G__14356 = G__14344;var vec__14358 = G__14356;var i1 = cljs.core.nth.call(null,vec__14358,0,null);var o1 = cljs.core.nth.call(null,vec__14358,1,null);var G__14355__$1 = G__14355;var G__14356__$1 = G__14356;while(true){
var vec__14359 = G__14355__$1;var i2__$1 = cljs.core.nth.call(null,vec__14359,0,null);var o2__$1 = cljs.core.nth.call(null,vec__14359,1,null);var vec__14360 = G__14356__$1;var i1__$1 = cljs.core.nth.call(null,vec__14360,0,null);var o1__$1 = cljs.core.nth.call(null,vec__14360,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__7247__auto__)
{var temp__4092__auto___14369 = output_checker14342_14365.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14369))
{var error__7249__auto___14370 = temp__4092__auto___14369;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__7249__auto___14370)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14370,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14339_14362,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14361,output_schema14339_14362,input_schema14340_14363,input_checker14341_14364,output_checker14342_14365))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema14339_14362,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14340_14363], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___14449 = schema.utils.use_fn_validation;var output_schema14371_14450 = schema.core.Any;var input_schema14372_14451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker14373_14452 = schema.core.checker.call(null,input_schema14372_14451);var output_checker14374_14453 = schema.core.checker.call(null,output_schema14371_14450);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function split_schema(G__14375,G__14376){var validate__7247__auto__ = ufv___14449.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14375,G__14376], null);var temp__4092__auto___14455 = input_checker14373_14452.call(null,args__7248__auto___14454);if(cljs.core.truth_(temp__4092__auto___14455))
{var error__7249__auto___14456 = temp__4092__auto___14455;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__7249__auto___14456)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14456,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14372_14451,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14454], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var s = G__14375;var ks = G__14376;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4266__auto__ = ((function (ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function iter__14413(s__14414){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function (){var s__14414__$1 = s__14414;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14414__$1);if(temp__4092__auto__)
{var s__14414__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14414__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14414__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14416 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14415 = 0;while(true){
if((i__14415 < size__4265__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4264__auto__,i__14415);cljs.core.chunk_append.call(null,b__14416,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4266__auto__ = ((function (i__14415,in_QMARK_,c__4264__auto__,size__4265__auto__,b__14416,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function iter__14433(s__14434){return (new cljs.core.LazySeq(null,((function (i__14415,in_QMARK_,c__4264__auto__,size__4265__auto__,b__14416,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function (){var s__14434__$1 = s__14434;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14434__$1);if(temp__4092__auto____$1)
{var s__14434__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14434__$2))
{var c__4264__auto____$1 = cljs.core.chunk_first.call(null,s__14434__$2);var size__4265__auto____$1 = cljs.core.count.call(null,c__4264__auto____$1);var b__14436 = cljs.core.chunk_buffer.call(null,size__4265__auto____$1);if((function (){var i__14435 = 0;while(true){
if((i__14435 < size__4265__auto____$1))
{var vec__14439 = cljs.core._nth.call(null,c__4264__auto____$1,i__14435);var k = cljs.core.nth.call(null,vec__14439,0,null);var v = cljs.core.nth.call(null,vec__14439,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14436,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14457 = (i__14435 + 1);
i__14435 = G__14457;
continue;
}
} else
{{
var G__14458 = (i__14435 + 1);
i__14435 = G__14458;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14436),iter__14433.call(null,cljs.core.chunk_rest.call(null,s__14434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14436),null);
}
} else
{var vec__14440 = cljs.core.first.call(null,s__14434__$2);var k = cljs.core.nth.call(null,vec__14440,0,null);var v = cljs.core.nth.call(null,vec__14440,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14433.call(null,cljs.core.rest.call(null,s__14434__$2)));
} else
{{
var G__14459 = cljs.core.rest.call(null,s__14434__$2);
s__14434__$1 = G__14459;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__14415,in_QMARK_,c__4264__auto__,size__4265__auto__,b__14416,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
,null,null));
});})(i__14415,in_QMARK_,c__4264__auto__,size__4265__auto__,b__14416,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
;return iter__4266__auto__.call(null,s);
})()));
{
var G__14460 = (i__14415 + 1);
i__14415 = G__14460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14416),iter__14413.call(null,cljs.core.chunk_rest.call(null,s__14414__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14416),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__14414__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4266__auto__ = ((function (in_QMARK_,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function iter__14441(s__14442){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453){
return (function (){var s__14442__$1 = s__14442;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14442__$1);if(temp__4092__auto____$1)
{var s__14442__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14442__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14442__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14444 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14443 = 0;while(true){
if((i__14443 < size__4265__auto__))
{var vec__14447 = cljs.core._nth.call(null,c__4264__auto__,i__14443);var k = cljs.core.nth.call(null,vec__14447,0,null);var v = cljs.core.nth.call(null,vec__14447,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14444,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14461 = (i__14443 + 1);
i__14443 = G__14461;
continue;
}
} else
{{
var G__14462 = (i__14443 + 1);
i__14443 = G__14462;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14444),iter__14441.call(null,cljs.core.chunk_rest.call(null,s__14442__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14444),null);
}
} else
{var vec__14448 = cljs.core.first.call(null,s__14442__$2);var k = cljs.core.nth.call(null,vec__14448,0,null);var v = cljs.core.nth.call(null,vec__14448,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14441.call(null,cljs.core.rest.call(null,s__14442__$2)));
} else
{{
var G__14463 = cljs.core.rest.call(null,s__14442__$2);
s__14442__$1 = G__14463;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
,null,null));
});})(in_QMARK_,s__14414__$2,temp__4092__auto__,ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
;return iter__4266__auto__.call(null,s);
})()),iter__14413.call(null,cljs.core.rest.call(null,s__14414__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
,null,null));
});})(ks__$1,validate__7247__auto__,ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
;return iter__4266__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14464 = output_checker14374_14453.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14464))
{var error__7249__auto___14465 = temp__4092__auto___14464;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__7249__auto___14465)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14465,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14371_14450,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14449,output_schema14371_14450,input_schema14372_14451,input_checker14373_14452,output_checker14374_14453))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema14371_14450,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14372_14451], null)));
var ufv___14496 = schema.utils.use_fn_validation;var output_schema14466_14497 = plumbing.fnk.schema.GraphIOSchemata;var input_schema14467_14498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker14468_14499 = schema.core.checker.call(null,input_schema14467_14498);var output_checker14469_14500 = schema.core.checker.call(null,output_schema14466_14497);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___14496,output_schema14466_14497,input_schema14467_14498,input_checker14468_14499,output_checker14469_14500){
return (function sequence_schemata(G__14470,G__14471){var validate__7247__auto__ = ufv___14496.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___14501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14470,G__14471], null);var temp__4092__auto___14502 = input_checker14468_14499.call(null,args__7248__auto___14501);if(cljs.core.truth_(temp__4092__auto___14502))
{var error__7249__auto___14503 = temp__4092__auto___14502;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__7249__auto___14503)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14503,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema14467_14498,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___14501], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var G__14487 = G__14470;var vec__14489 = G__14487;var i1 = cljs.core.nth.call(null,vec__14489,0,null);var o1 = cljs.core.nth.call(null,vec__14489,1,null);var G__14488 = G__14471;var vec__14490 = G__14488;var k = cljs.core.nth.call(null,vec__14490,0,null);var vec__14491 = cljs.core.nth.call(null,vec__14490,1,null);var i2 = cljs.core.nth.call(null,vec__14491,0,null);var o2 = cljs.core.nth.call(null,vec__14491,1,null);var G__14487__$1 = G__14487;var G__14488__$1 = G__14488;while(true){
var vec__14492 = G__14487__$1;var i1__$1 = cljs.core.nth.call(null,vec__14492,0,null);var o1__$1 = cljs.core.nth.call(null,vec__14492,1,null);var vec__14493 = G__14488__$1;var k__$1 = cljs.core.nth.call(null,vec__14493,0,null);var vec__14494 = cljs.core.nth.call(null,vec__14493,1,null);var i2__$1 = cljs.core.nth.call(null,vec__14494,0,null);var o2__$1 = cljs.core.nth.call(null,vec__14494,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__14495 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__14495,0,null);var unused = cljs.core.nth.call(null,vec__14495,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___14504 = output_checker14469_14500.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___14504))
{var error__7249__auto___14505 = temp__4092__auto___14504;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__7249__auto___14505)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___14505,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema14466_14497,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___14496,output_schema14466_14497,input_schema14467_14498,input_checker14468_14499,output_checker14469_14500))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema14466_14497,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14467_14498], null)));

//# sourceMappingURL=schema.js.map