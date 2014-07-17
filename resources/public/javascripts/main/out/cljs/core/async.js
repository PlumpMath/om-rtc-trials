// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16283 = (function (f,fn_handler,meta16284){
this.f = f;
this.fn_handler = fn_handler;
this.meta16284 = meta16284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16283.cljs$lang$type = true;
cljs.core.async.t16283.cljs$lang$ctorStr = "cljs.core.async/t16283";
cljs.core.async.t16283.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16283");
});
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16285){var self__ = this;
var _16285__$1 = this;return self__.meta16284;
});
cljs.core.async.t16283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16285,meta16284__$1){var self__ = this;
var _16285__$1 = this;return (new cljs.core.async.t16283(self__.f,self__.fn_handler,meta16284__$1));
});
cljs.core.async.__GT_t16283 = (function __GT_t16283(f__$1,fn_handler__$1,meta16284){return (new cljs.core.async.t16283(f__$1,fn_handler__$1,meta16284));
});
}
return (new cljs.core.async.t16283(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16287 = buff;if(G__16287)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__16287.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16287.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16287);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16287);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16288 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16288);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16288,ret){
return (function (){return fn1.call(null,val_16288);
});})(val_16288,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___16289 = n;var x_16290 = 0;while(true){
if((x_16290 < n__4397__auto___16289))
{(a[x_16290] = 0);
{
var G__16291 = (x_16290 + 1);
x_16290 = G__16291;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16292 = (i + 1);
i = G__16292;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16296 = (function (flag,alt_flag,meta16297){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16297 = meta16297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16296.cljs$lang$type = true;
cljs.core.async.t16296.cljs$lang$ctorStr = "cljs.core.async/t16296";
cljs.core.async.t16296.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16296");
});})(flag))
;
cljs.core.async.t16296.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16298){var self__ = this;
var _16298__$1 = this;return self__.meta16297;
});})(flag))
;
cljs.core.async.t16296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16298,meta16297__$1){var self__ = this;
var _16298__$1 = this;return (new cljs.core.async.t16296(self__.flag,self__.alt_flag,meta16297__$1));
});})(flag))
;
cljs.core.async.__GT_t16296 = ((function (flag){
return (function __GT_t16296(flag__$1,alt_flag__$1,meta16297){return (new cljs.core.async.t16296(flag__$1,alt_flag__$1,meta16297));
});})(flag))
;
}
return (new cljs.core.async.t16296(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16302 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16302 = (function (cb,flag,alt_handler,meta16303){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16303 = meta16303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16302.cljs$lang$type = true;
cljs.core.async.t16302.cljs$lang$ctorStr = "cljs.core.async/t16302";
cljs.core.async.t16302.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16302");
});
cljs.core.async.t16302.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16304){var self__ = this;
var _16304__$1 = this;return self__.meta16303;
});
cljs.core.async.t16302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16304,meta16303__$1){var self__ = this;
var _16304__$1 = this;return (new cljs.core.async.t16302(self__.cb,self__.flag,self__.alt_handler,meta16303__$1));
});
cljs.core.async.__GT_t16302 = (function __GT_t16302(cb__$1,flag__$1,alt_handler__$1,meta16303){return (new cljs.core.async.t16302(cb__$1,flag__$1,alt_handler__$1,meta16303));
});
}
return (new cljs.core.async.t16302(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16305_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16305_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16306_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16306_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16307 = (i + 1);
i = G__16307;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__16308){var map__16310 = p__16308;var map__16310__$1 = ((cljs.core.seq_QMARK_.call(null,map__16310))?cljs.core.apply.call(null,cljs.core.hash_map,map__16310):map__16310);var opts = map__16310__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16308 = null;if (arguments.length > 1) {
  p__16308 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16308);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16311){
var ports = cljs.core.first(arglist__16311);
var p__16308 = cljs.core.rest(arglist__16311);
return alts_BANG___delegate(ports,p__16308);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16319 = (function (ch,f,map_LT_,meta16320){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16320 = meta16320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16319.cljs$lang$type = true;
cljs.core.async.t16319.cljs$lang$ctorStr = "cljs.core.async/t16319";
cljs.core.async.t16319.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16319");
});
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16322 = (function (fn1,_,meta16320,ch,f,map_LT_,meta16323){
this.fn1 = fn1;
this._ = _;
this.meta16320 = meta16320;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16323 = meta16323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16322.cljs$lang$type = true;
cljs.core.async.t16322.cljs$lang$ctorStr = "cljs.core.async/t16322";
cljs.core.async.t16322.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16322");
});})(___$1))
;
cljs.core.async.t16322.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16322.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16312_SHARP_){return f1.call(null,(((p1__16312_SHARP_ == null))?null:self__.f.call(null,p1__16312_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16324){var self__ = this;
var _16324__$1 = this;return self__.meta16323;
});})(___$1))
;
cljs.core.async.t16322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16324,meta16323__$1){var self__ = this;
var _16324__$1 = this;return (new cljs.core.async.t16322(self__.fn1,self__._,self__.meta16320,self__.ch,self__.f,self__.map_LT_,meta16323__$1));
});})(___$1))
;
cljs.core.async.__GT_t16322 = ((function (___$1){
return (function __GT_t16322(fn1__$1,___$2,meta16320__$1,ch__$2,f__$2,map_LT___$2,meta16323){return (new cljs.core.async.t16322(fn1__$1,___$2,meta16320__$1,ch__$2,f__$2,map_LT___$2,meta16323));
});})(___$1))
;
}
return (new cljs.core.async.t16322(fn1,___$1,self__.meta16320,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16321){var self__ = this;
var _16321__$1 = this;return self__.meta16320;
});
cljs.core.async.t16319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16321,meta16320__$1){var self__ = this;
var _16321__$1 = this;return (new cljs.core.async.t16319(self__.ch,self__.f,self__.map_LT_,meta16320__$1));
});
cljs.core.async.__GT_t16319 = (function __GT_t16319(ch__$1,f__$1,map_LT___$1,meta16320){return (new cljs.core.async.t16319(ch__$1,f__$1,map_LT___$1,meta16320));
});
}
return (new cljs.core.async.t16319(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16328 = (function (ch,f,map_GT_,meta16329){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16329 = meta16329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16328.cljs$lang$type = true;
cljs.core.async.t16328.cljs$lang$ctorStr = "cljs.core.async/t16328";
cljs.core.async.t16328.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16328");
});
cljs.core.async.t16328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t16328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16328.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16330){var self__ = this;
var _16330__$1 = this;return self__.meta16329;
});
cljs.core.async.t16328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16330,meta16329__$1){var self__ = this;
var _16330__$1 = this;return (new cljs.core.async.t16328(self__.ch,self__.f,self__.map_GT_,meta16329__$1));
});
cljs.core.async.__GT_t16328 = (function __GT_t16328(ch__$1,f__$1,map_GT___$1,meta16329){return (new cljs.core.async.t16328(ch__$1,f__$1,map_GT___$1,meta16329));
});
}
return (new cljs.core.async.t16328(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16334 = (function (ch,p,filter_GT_,meta16335){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16335 = meta16335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16334.cljs$lang$type = true;
cljs.core.async.t16334.cljs$lang$ctorStr = "cljs.core.async/t16334";
cljs.core.async.t16334.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16334");
});
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16336){var self__ = this;
var _16336__$1 = this;return self__.meta16335;
});
cljs.core.async.t16334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16336,meta16335__$1){var self__ = this;
var _16336__$1 = this;return (new cljs.core.async.t16334(self__.ch,self__.p,self__.filter_GT_,meta16335__$1));
});
cljs.core.async.__GT_t16334 = (function __GT_t16334(ch__$1,p__$1,filter_GT___$1,meta16335){return (new cljs.core.async.t16334(ch__$1,p__$1,filter_GT___$1,meta16335));
});
}
return (new cljs.core.async.t16334(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10282__auto___16419 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___16419,out){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___16419,out){
return (function (state_16398){var state_val_16399 = (state_16398[1]);if((state_val_16399 === 1))
{var state_16398__$1 = state_16398;var statearr_16400_16420 = state_16398__$1;(statearr_16400_16420[2] = null);
(statearr_16400_16420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 2))
{var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16398__$1,4,ch);
} else
{if((state_val_16399 === 3))
{var inst_16396 = (state_16398[2]);var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16398__$1,inst_16396);
} else
{if((state_val_16399 === 4))
{var inst_16380 = (state_16398[7]);var inst_16380__$1 = (state_16398[2]);var inst_16381 = (inst_16380__$1 == null);var state_16398__$1 = (function (){var statearr_16401 = state_16398;(statearr_16401[7] = inst_16380__$1);
return statearr_16401;
})();if(cljs.core.truth_(inst_16381))
{var statearr_16402_16421 = state_16398__$1;(statearr_16402_16421[1] = 5);
} else
{var statearr_16403_16422 = state_16398__$1;(statearr_16403_16422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 5))
{var inst_16383 = cljs.core.async.close_BANG_.call(null,out);var state_16398__$1 = state_16398;var statearr_16404_16423 = state_16398__$1;(statearr_16404_16423[2] = inst_16383);
(statearr_16404_16423[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 6))
{var inst_16380 = (state_16398[7]);var inst_16385 = p.call(null,inst_16380);var state_16398__$1 = state_16398;if(cljs.core.truth_(inst_16385))
{var statearr_16405_16424 = state_16398__$1;(statearr_16405_16424[1] = 8);
} else
{var statearr_16406_16425 = state_16398__$1;(statearr_16406_16425[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 7))
{var inst_16394 = (state_16398[2]);var state_16398__$1 = state_16398;var statearr_16407_16426 = state_16398__$1;(statearr_16407_16426[2] = inst_16394);
(statearr_16407_16426[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 8))
{var inst_16380 = (state_16398[7]);var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16398__$1,11,out,inst_16380);
} else
{if((state_val_16399 === 9))
{var state_16398__$1 = state_16398;var statearr_16408_16427 = state_16398__$1;(statearr_16408_16427[2] = null);
(statearr_16408_16427[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 10))
{var inst_16391 = (state_16398[2]);var state_16398__$1 = (function (){var statearr_16409 = state_16398;(statearr_16409[8] = inst_16391);
return statearr_16409;
})();var statearr_16410_16428 = state_16398__$1;(statearr_16410_16428[2] = null);
(statearr_16410_16428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16399 === 11))
{var inst_16388 = (state_16398[2]);var state_16398__$1 = state_16398;var statearr_16411_16429 = state_16398__$1;(statearr_16411_16429[2] = inst_16388);
(statearr_16411_16429[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___16419,out))
;return ((function (switch__10267__auto__,c__10282__auto___16419,out){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16415 = [null,null,null,null,null,null,null,null,null];(statearr_16415[0] = state_machine__10268__auto__);
(statearr_16415[1] = 1);
return statearr_16415;
});
var state_machine__10268__auto____1 = (function (state_16398){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16398);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16416){if((e16416 instanceof Object))
{var ex__10271__auto__ = e16416;var statearr_16417_16430 = state_16398;(statearr_16417_16430[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16431 = state_16398;
state_16398 = G__16431;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16398){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___16419,out))
})();var state__10284__auto__ = (function (){var statearr_16418 = f__10283__auto__.call(null);(statearr_16418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___16419);
return statearr_16418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___16419,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__){
return (function (state_16597){var state_val_16598 = (state_16597[1]);if((state_val_16598 === 1))
{var state_16597__$1 = state_16597;var statearr_16599_16640 = state_16597__$1;(statearr_16599_16640[2] = null);
(statearr_16599_16640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 2))
{var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16597__$1,4,in$);
} else
{if((state_val_16598 === 3))
{var inst_16595 = (state_16597[2]);var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16597__$1,inst_16595);
} else
{if((state_val_16598 === 4))
{var inst_16538 = (state_16597[7]);var inst_16538__$1 = (state_16597[2]);var inst_16539 = (inst_16538__$1 == null);var state_16597__$1 = (function (){var statearr_16600 = state_16597;(statearr_16600[7] = inst_16538__$1);
return statearr_16600;
})();if(cljs.core.truth_(inst_16539))
{var statearr_16601_16641 = state_16597__$1;(statearr_16601_16641[1] = 5);
} else
{var statearr_16602_16642 = state_16597__$1;(statearr_16602_16642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 5))
{var inst_16541 = cljs.core.async.close_BANG_.call(null,out);var state_16597__$1 = state_16597;var statearr_16603_16643 = state_16597__$1;(statearr_16603_16643[2] = inst_16541);
(statearr_16603_16643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 6))
{var inst_16538 = (state_16597[7]);var inst_16547 = f.call(null,inst_16538);var inst_16548 = cljs.core.seq.call(null,inst_16547);var inst_16549 = inst_16548;var inst_16550 = null;var inst_16551 = 0;var inst_16552 = 0;var state_16597__$1 = (function (){var statearr_16604 = state_16597;(statearr_16604[8] = inst_16549);
(statearr_16604[9] = inst_16552);
(statearr_16604[10] = inst_16551);
(statearr_16604[11] = inst_16550);
return statearr_16604;
})();var statearr_16605_16644 = state_16597__$1;(statearr_16605_16644[2] = null);
(statearr_16605_16644[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 7))
{var inst_16593 = (state_16597[2]);var state_16597__$1 = state_16597;var statearr_16606_16645 = state_16597__$1;(statearr_16606_16645[2] = inst_16593);
(statearr_16606_16645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 8))
{var inst_16552 = (state_16597[9]);var inst_16551 = (state_16597[10]);var inst_16554 = (inst_16552 < inst_16551);var inst_16555 = inst_16554;var state_16597__$1 = state_16597;if(cljs.core.truth_(inst_16555))
{var statearr_16607_16646 = state_16597__$1;(statearr_16607_16646[1] = 10);
} else
{var statearr_16608_16647 = state_16597__$1;(statearr_16608_16647[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 9))
{var inst_16585 = (state_16597[2]);var inst_16586 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_16597__$1 = (function (){var statearr_16609 = state_16597;(statearr_16609[12] = inst_16585);
return statearr_16609;
})();if(cljs.core.truth_(inst_16586))
{var statearr_16610_16648 = state_16597__$1;(statearr_16610_16648[1] = 21);
} else
{var statearr_16611_16649 = state_16597__$1;(statearr_16611_16649[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 10))
{var inst_16552 = (state_16597[9]);var inst_16550 = (state_16597[11]);var inst_16557 = cljs.core._nth.call(null,inst_16550,inst_16552);var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16597__$1,13,out,inst_16557);
} else
{if((state_val_16598 === 11))
{var inst_16549 = (state_16597[8]);var inst_16563 = (state_16597[13]);var inst_16563__$1 = cljs.core.seq.call(null,inst_16549);var state_16597__$1 = (function (){var statearr_16615 = state_16597;(statearr_16615[13] = inst_16563__$1);
return statearr_16615;
})();if(inst_16563__$1)
{var statearr_16616_16650 = state_16597__$1;(statearr_16616_16650[1] = 14);
} else
{var statearr_16617_16651 = state_16597__$1;(statearr_16617_16651[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 12))
{var inst_16583 = (state_16597[2]);var state_16597__$1 = state_16597;var statearr_16618_16652 = state_16597__$1;(statearr_16618_16652[2] = inst_16583);
(statearr_16618_16652[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 13))
{var inst_16549 = (state_16597[8]);var inst_16552 = (state_16597[9]);var inst_16551 = (state_16597[10]);var inst_16550 = (state_16597[11]);var inst_16559 = (state_16597[2]);var inst_16560 = (inst_16552 + 1);var tmp16612 = inst_16549;var tmp16613 = inst_16551;var tmp16614 = inst_16550;var inst_16549__$1 = tmp16612;var inst_16550__$1 = tmp16614;var inst_16551__$1 = tmp16613;var inst_16552__$1 = inst_16560;var state_16597__$1 = (function (){var statearr_16619 = state_16597;(statearr_16619[8] = inst_16549__$1);
(statearr_16619[14] = inst_16559);
(statearr_16619[9] = inst_16552__$1);
(statearr_16619[10] = inst_16551__$1);
(statearr_16619[11] = inst_16550__$1);
return statearr_16619;
})();var statearr_16620_16653 = state_16597__$1;(statearr_16620_16653[2] = null);
(statearr_16620_16653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 14))
{var inst_16563 = (state_16597[13]);var inst_16565 = cljs.core.chunked_seq_QMARK_.call(null,inst_16563);var state_16597__$1 = state_16597;if(inst_16565)
{var statearr_16621_16654 = state_16597__$1;(statearr_16621_16654[1] = 17);
} else
{var statearr_16622_16655 = state_16597__$1;(statearr_16622_16655[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 15))
{var state_16597__$1 = state_16597;var statearr_16623_16656 = state_16597__$1;(statearr_16623_16656[2] = null);
(statearr_16623_16656[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 16))
{var inst_16581 = (state_16597[2]);var state_16597__$1 = state_16597;var statearr_16624_16657 = state_16597__$1;(statearr_16624_16657[2] = inst_16581);
(statearr_16624_16657[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 17))
{var inst_16563 = (state_16597[13]);var inst_16567 = cljs.core.chunk_first.call(null,inst_16563);var inst_16568 = cljs.core.chunk_rest.call(null,inst_16563);var inst_16569 = cljs.core.count.call(null,inst_16567);var inst_16549 = inst_16568;var inst_16550 = inst_16567;var inst_16551 = inst_16569;var inst_16552 = 0;var state_16597__$1 = (function (){var statearr_16625 = state_16597;(statearr_16625[8] = inst_16549);
(statearr_16625[9] = inst_16552);
(statearr_16625[10] = inst_16551);
(statearr_16625[11] = inst_16550);
return statearr_16625;
})();var statearr_16626_16658 = state_16597__$1;(statearr_16626_16658[2] = null);
(statearr_16626_16658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 18))
{var inst_16563 = (state_16597[13]);var inst_16572 = cljs.core.first.call(null,inst_16563);var state_16597__$1 = state_16597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16597__$1,20,out,inst_16572);
} else
{if((state_val_16598 === 19))
{var inst_16578 = (state_16597[2]);var state_16597__$1 = state_16597;var statearr_16627_16659 = state_16597__$1;(statearr_16627_16659[2] = inst_16578);
(statearr_16627_16659[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 20))
{var inst_16563 = (state_16597[13]);var inst_16574 = (state_16597[2]);var inst_16575 = cljs.core.next.call(null,inst_16563);var inst_16549 = inst_16575;var inst_16550 = null;var inst_16551 = 0;var inst_16552 = 0;var state_16597__$1 = (function (){var statearr_16628 = state_16597;(statearr_16628[8] = inst_16549);
(statearr_16628[9] = inst_16552);
(statearr_16628[10] = inst_16551);
(statearr_16628[11] = inst_16550);
(statearr_16628[15] = inst_16574);
return statearr_16628;
})();var statearr_16629_16660 = state_16597__$1;(statearr_16629_16660[2] = null);
(statearr_16629_16660[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 21))
{var state_16597__$1 = state_16597;var statearr_16630_16661 = state_16597__$1;(statearr_16630_16661[2] = null);
(statearr_16630_16661[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 22))
{var state_16597__$1 = state_16597;var statearr_16631_16662 = state_16597__$1;(statearr_16631_16662[2] = null);
(statearr_16631_16662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16598 === 23))
{var inst_16591 = (state_16597[2]);var state_16597__$1 = state_16597;var statearr_16632_16663 = state_16597__$1;(statearr_16632_16663[2] = inst_16591);
(statearr_16632_16663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto__))
;return ((function (switch__10267__auto__,c__10282__auto__){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16636[0] = state_machine__10268__auto__);
(statearr_16636[1] = 1);
return statearr_16636;
});
var state_machine__10268__auto____1 = (function (state_16597){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16597);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16637){if((e16637 instanceof Object))
{var ex__10271__auto__ = e16637;var statearr_16638_16664 = state_16597;(statearr_16638_16664[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16665 = state_16597;
state_16597 = G__16665;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16597){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__))
})();var state__10284__auto__ = (function (){var statearr_16639 = f__10283__auto__.call(null);(statearr_16639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_16639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);
return c__10282__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10282__auto___16760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___16760){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___16760){
return (function (state_16736){var state_val_16737 = (state_16736[1]);if((state_val_16737 === 1))
{var state_16736__$1 = state_16736;var statearr_16738_16761 = state_16736__$1;(statearr_16738_16761[2] = null);
(statearr_16738_16761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 2))
{var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16736__$1,4,from);
} else
{if((state_val_16737 === 3))
{var inst_16734 = (state_16736[2]);var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16736__$1,inst_16734);
} else
{if((state_val_16737 === 4))
{var inst_16715 = (state_16736[7]);var inst_16715__$1 = (state_16736[2]);var inst_16716 = (inst_16715__$1 == null);var state_16736__$1 = (function (){var statearr_16739 = state_16736;(statearr_16739[7] = inst_16715__$1);
return statearr_16739;
})();if(cljs.core.truth_(inst_16716))
{var statearr_16740_16762 = state_16736__$1;(statearr_16740_16762[1] = 5);
} else
{var statearr_16741_16763 = state_16736__$1;(statearr_16741_16763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 5))
{var state_16736__$1 = state_16736;if(cljs.core.truth_(close_QMARK_))
{var statearr_16742_16764 = state_16736__$1;(statearr_16742_16764[1] = 8);
} else
{var statearr_16743_16765 = state_16736__$1;(statearr_16743_16765[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 6))
{var inst_16715 = (state_16736[7]);var state_16736__$1 = state_16736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16736__$1,11,to,inst_16715);
} else
{if((state_val_16737 === 7))
{var inst_16732 = (state_16736[2]);var state_16736__$1 = state_16736;var statearr_16744_16766 = state_16736__$1;(statearr_16744_16766[2] = inst_16732);
(statearr_16744_16766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 8))
{var inst_16719 = cljs.core.async.close_BANG_.call(null,to);var state_16736__$1 = state_16736;var statearr_16745_16767 = state_16736__$1;(statearr_16745_16767[2] = inst_16719);
(statearr_16745_16767[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 9))
{var state_16736__$1 = state_16736;var statearr_16746_16768 = state_16736__$1;(statearr_16746_16768[2] = null);
(statearr_16746_16768[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 10))
{var inst_16722 = (state_16736[2]);var state_16736__$1 = state_16736;var statearr_16747_16769 = state_16736__$1;(statearr_16747_16769[2] = inst_16722);
(statearr_16747_16769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 11))
{var inst_16725 = (state_16736[2]);var state_16736__$1 = state_16736;if(cljs.core.truth_(inst_16725))
{var statearr_16748_16770 = state_16736__$1;(statearr_16748_16770[1] = 12);
} else
{var statearr_16749_16771 = state_16736__$1;(statearr_16749_16771[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 12))
{var state_16736__$1 = state_16736;var statearr_16750_16772 = state_16736__$1;(statearr_16750_16772[2] = null);
(statearr_16750_16772[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 13))
{var state_16736__$1 = state_16736;var statearr_16751_16773 = state_16736__$1;(statearr_16751_16773[2] = null);
(statearr_16751_16773[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16737 === 14))
{var inst_16730 = (state_16736[2]);var state_16736__$1 = state_16736;var statearr_16752_16774 = state_16736__$1;(statearr_16752_16774[2] = inst_16730);
(statearr_16752_16774[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___16760))
;return ((function (switch__10267__auto__,c__10282__auto___16760){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16756 = [null,null,null,null,null,null,null,null];(statearr_16756[0] = state_machine__10268__auto__);
(statearr_16756[1] = 1);
return statearr_16756;
});
var state_machine__10268__auto____1 = (function (state_16736){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16736);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16757){if((e16757 instanceof Object))
{var ex__10271__auto__ = e16757;var statearr_16758_16775 = state_16736;(statearr_16758_16775[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16776 = state_16736;
state_16736 = G__16776;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16736){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___16760))
})();var state__10284__auto__ = (function (){var statearr_16759 = f__10283__auto__.call(null);(statearr_16759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___16760);
return statearr_16759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___16760))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10282__auto___16877 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___16877,tc,fc){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___16877,tc,fc){
return (function (state_16852){var state_val_16853 = (state_16852[1]);if((state_val_16853 === 1))
{var state_16852__$1 = state_16852;var statearr_16854_16878 = state_16852__$1;(statearr_16854_16878[2] = null);
(statearr_16854_16878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 2))
{var state_16852__$1 = state_16852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16852__$1,4,ch);
} else
{if((state_val_16853 === 3))
{var inst_16850 = (state_16852[2]);var state_16852__$1 = state_16852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16852__$1,inst_16850);
} else
{if((state_val_16853 === 4))
{var inst_16829 = (state_16852[7]);var inst_16829__$1 = (state_16852[2]);var inst_16830 = (inst_16829__$1 == null);var state_16852__$1 = (function (){var statearr_16855 = state_16852;(statearr_16855[7] = inst_16829__$1);
return statearr_16855;
})();if(cljs.core.truth_(inst_16830))
{var statearr_16856_16879 = state_16852__$1;(statearr_16856_16879[1] = 5);
} else
{var statearr_16857_16880 = state_16852__$1;(statearr_16857_16880[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 5))
{var inst_16832 = cljs.core.async.close_BANG_.call(null,tc);var inst_16833 = cljs.core.async.close_BANG_.call(null,fc);var state_16852__$1 = (function (){var statearr_16858 = state_16852;(statearr_16858[8] = inst_16832);
return statearr_16858;
})();var statearr_16859_16881 = state_16852__$1;(statearr_16859_16881[2] = inst_16833);
(statearr_16859_16881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 6))
{var inst_16829 = (state_16852[7]);var inst_16835 = p.call(null,inst_16829);var state_16852__$1 = state_16852;if(cljs.core.truth_(inst_16835))
{var statearr_16860_16882 = state_16852__$1;(statearr_16860_16882[1] = 9);
} else
{var statearr_16861_16883 = state_16852__$1;(statearr_16861_16883[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 7))
{var inst_16848 = (state_16852[2]);var state_16852__$1 = state_16852;var statearr_16862_16884 = state_16852__$1;(statearr_16862_16884[2] = inst_16848);
(statearr_16862_16884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 8))
{var inst_16841 = (state_16852[2]);var state_16852__$1 = state_16852;if(cljs.core.truth_(inst_16841))
{var statearr_16863_16885 = state_16852__$1;(statearr_16863_16885[1] = 12);
} else
{var statearr_16864_16886 = state_16852__$1;(statearr_16864_16886[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 9))
{var state_16852__$1 = state_16852;var statearr_16865_16887 = state_16852__$1;(statearr_16865_16887[2] = tc);
(statearr_16865_16887[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 10))
{var state_16852__$1 = state_16852;var statearr_16866_16888 = state_16852__$1;(statearr_16866_16888[2] = fc);
(statearr_16866_16888[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 11))
{var inst_16829 = (state_16852[7]);var inst_16839 = (state_16852[2]);var state_16852__$1 = state_16852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16852__$1,8,inst_16839,inst_16829);
} else
{if((state_val_16853 === 12))
{var state_16852__$1 = state_16852;var statearr_16867_16889 = state_16852__$1;(statearr_16867_16889[2] = null);
(statearr_16867_16889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 13))
{var state_16852__$1 = state_16852;var statearr_16868_16890 = state_16852__$1;(statearr_16868_16890[2] = null);
(statearr_16868_16890[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16853 === 14))
{var inst_16846 = (state_16852[2]);var state_16852__$1 = state_16852;var statearr_16869_16891 = state_16852__$1;(statearr_16869_16891[2] = inst_16846);
(statearr_16869_16891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___16877,tc,fc))
;return ((function (switch__10267__auto__,c__10282__auto___16877,tc,fc){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16873 = [null,null,null,null,null,null,null,null,null];(statearr_16873[0] = state_machine__10268__auto__);
(statearr_16873[1] = 1);
return statearr_16873;
});
var state_machine__10268__auto____1 = (function (state_16852){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16852);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16874){if((e16874 instanceof Object))
{var ex__10271__auto__ = e16874;var statearr_16875_16892 = state_16852;(statearr_16875_16892[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16893 = state_16852;
state_16852 = G__16893;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16852){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___16877,tc,fc))
})();var state__10284__auto__ = (function (){var statearr_16876 = f__10283__auto__.call(null);(statearr_16876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___16877);
return statearr_16876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___16877,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__){
return (function (state_16940){var state_val_16941 = (state_16940[1]);if((state_val_16941 === 7))
{var inst_16936 = (state_16940[2]);var state_16940__$1 = state_16940;var statearr_16942_16958 = state_16940__$1;(statearr_16942_16958[2] = inst_16936);
(statearr_16942_16958[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16941 === 6))
{var inst_16929 = (state_16940[7]);var inst_16926 = (state_16940[8]);var inst_16933 = f.call(null,inst_16926,inst_16929);var inst_16926__$1 = inst_16933;var state_16940__$1 = (function (){var statearr_16943 = state_16940;(statearr_16943[8] = inst_16926__$1);
return statearr_16943;
})();var statearr_16944_16959 = state_16940__$1;(statearr_16944_16959[2] = null);
(statearr_16944_16959[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16941 === 5))
{var inst_16926 = (state_16940[8]);var state_16940__$1 = state_16940;var statearr_16945_16960 = state_16940__$1;(statearr_16945_16960[2] = inst_16926);
(statearr_16945_16960[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16941 === 4))
{var inst_16929 = (state_16940[7]);var inst_16929__$1 = (state_16940[2]);var inst_16930 = (inst_16929__$1 == null);var state_16940__$1 = (function (){var statearr_16946 = state_16940;(statearr_16946[7] = inst_16929__$1);
return statearr_16946;
})();if(cljs.core.truth_(inst_16930))
{var statearr_16947_16961 = state_16940__$1;(statearr_16947_16961[1] = 5);
} else
{var statearr_16948_16962 = state_16940__$1;(statearr_16948_16962[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16941 === 3))
{var inst_16938 = (state_16940[2]);var state_16940__$1 = state_16940;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16940__$1,inst_16938);
} else
{if((state_val_16941 === 2))
{var state_16940__$1 = state_16940;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16940__$1,4,ch);
} else
{if((state_val_16941 === 1))
{var inst_16926 = init;var state_16940__$1 = (function (){var statearr_16949 = state_16940;(statearr_16949[8] = inst_16926);
return statearr_16949;
})();var statearr_16950_16963 = state_16940__$1;(statearr_16950_16963[2] = null);
(statearr_16950_16963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__10282__auto__))
;return ((function (switch__10267__auto__,c__10282__auto__){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16954 = [null,null,null,null,null,null,null,null,null];(statearr_16954[0] = state_machine__10268__auto__);
(statearr_16954[1] = 1);
return statearr_16954;
});
var state_machine__10268__auto____1 = (function (state_16940){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16940);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16955){if((e16955 instanceof Object))
{var ex__10271__auto__ = e16955;var statearr_16956_16964 = state_16940;(statearr_16956_16964[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16940);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16965 = state_16940;
state_16940 = G__16965;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16940){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__))
})();var state__10284__auto__ = (function (){var statearr_16957 = f__10283__auto__.call(null);(statearr_16957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_16957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);
return c__10282__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__){
return (function (state_17039){var state_val_17040 = (state_17039[1]);if((state_val_17040 === 1))
{var inst_17015 = cljs.core.seq.call(null,coll);var inst_17016 = inst_17015;var state_17039__$1 = (function (){var statearr_17041 = state_17039;(statearr_17041[7] = inst_17016);
return statearr_17041;
})();var statearr_17042_17064 = state_17039__$1;(statearr_17042_17064[2] = null);
(statearr_17042_17064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 2))
{var inst_17016 = (state_17039[7]);var state_17039__$1 = state_17039;if(cljs.core.truth_(inst_17016))
{var statearr_17043_17065 = state_17039__$1;(statearr_17043_17065[1] = 4);
} else
{var statearr_17044_17066 = state_17039__$1;(statearr_17044_17066[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 3))
{var inst_17037 = (state_17039[2]);var state_17039__$1 = state_17039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17039__$1,inst_17037);
} else
{if((state_val_17040 === 4))
{var inst_17016 = (state_17039[7]);var inst_17019 = cljs.core.first.call(null,inst_17016);var state_17039__$1 = state_17039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17039__$1,7,ch,inst_17019);
} else
{if((state_val_17040 === 5))
{var inst_17016 = (state_17039[7]);var state_17039__$1 = state_17039;var statearr_17045_17067 = state_17039__$1;(statearr_17045_17067[2] = inst_17016);
(statearr_17045_17067[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 6))
{var inst_17024 = (state_17039[2]);var state_17039__$1 = state_17039;if(cljs.core.truth_(inst_17024))
{var statearr_17046_17068 = state_17039__$1;(statearr_17046_17068[1] = 8);
} else
{var statearr_17047_17069 = state_17039__$1;(statearr_17047_17069[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 7))
{var inst_17021 = (state_17039[2]);var state_17039__$1 = state_17039;var statearr_17048_17070 = state_17039__$1;(statearr_17048_17070[2] = inst_17021);
(statearr_17048_17070[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 8))
{var inst_17016 = (state_17039[7]);var inst_17026 = cljs.core.next.call(null,inst_17016);var inst_17016__$1 = inst_17026;var state_17039__$1 = (function (){var statearr_17049 = state_17039;(statearr_17049[7] = inst_17016__$1);
return statearr_17049;
})();var statearr_17050_17071 = state_17039__$1;(statearr_17050_17071[2] = null);
(statearr_17050_17071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 9))
{var state_17039__$1 = state_17039;if(cljs.core.truth_(close_QMARK_))
{var statearr_17051_17072 = state_17039__$1;(statearr_17051_17072[1] = 11);
} else
{var statearr_17052_17073 = state_17039__$1;(statearr_17052_17073[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 10))
{var inst_17035 = (state_17039[2]);var state_17039__$1 = state_17039;var statearr_17053_17074 = state_17039__$1;(statearr_17053_17074[2] = inst_17035);
(statearr_17053_17074[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 11))
{var inst_17030 = cljs.core.async.close_BANG_.call(null,ch);var state_17039__$1 = state_17039;var statearr_17054_17075 = state_17039__$1;(statearr_17054_17075[2] = inst_17030);
(statearr_17054_17075[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 12))
{var state_17039__$1 = state_17039;var statearr_17055_17076 = state_17039__$1;(statearr_17055_17076[2] = null);
(statearr_17055_17076[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17040 === 13))
{var inst_17033 = (state_17039[2]);var state_17039__$1 = state_17039;var statearr_17056_17077 = state_17039__$1;(statearr_17056_17077[2] = inst_17033);
(statearr_17056_17077[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto__))
;return ((function (switch__10267__auto__,c__10282__auto__){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_17060 = [null,null,null,null,null,null,null,null];(statearr_17060[0] = state_machine__10268__auto__);
(statearr_17060[1] = 1);
return statearr_17060;
});
var state_machine__10268__auto____1 = (function (state_17039){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_17039);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e17061){if((e17061 instanceof Object))
{var ex__10271__auto__ = e17061;var statearr_17062_17078 = state_17039;(statearr_17062_17078[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17079 = state_17039;
state_17039 = G__17079;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_17039){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_17039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__))
})();var state__10284__auto__ = (function (){var statearr_17063 = f__10283__auto__.call(null);(statearr_17063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_17063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);
return c__10282__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17081 = {};return obj17081;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17083 = {};return obj17083;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17305 = (function (cs,ch,mult,meta17306){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17306 = meta17306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17305.cljs$lang$type = true;
cljs.core.async.t17305.cljs$lang$ctorStr = "cljs.core.async/t17305";
cljs.core.async.t17305.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t17305");
});})(cs))
;
cljs.core.async.t17305.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17305.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17305.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17305.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17305.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17305.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17305.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17307){var self__ = this;
var _17307__$1 = this;return self__.meta17306;
});})(cs))
;
cljs.core.async.t17305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17307,meta17306__$1){var self__ = this;
var _17307__$1 = this;return (new cljs.core.async.t17305(self__.cs,self__.ch,self__.mult,meta17306__$1));
});})(cs))
;
cljs.core.async.__GT_t17305 = ((function (cs){
return (function __GT_t17305(cs__$1,ch__$1,mult__$1,meta17306){return (new cljs.core.async.t17305(cs__$1,ch__$1,mult__$1,meta17306));
});})(cs))
;
}
return (new cljs.core.async.t17305(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10282__auto___17526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___17526,cs,m,dchan,dctr,done){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___17526,cs,m,dchan,dctr,done){
return (function (state_17438){var state_val_17439 = (state_17438[1]);if((state_val_17439 === 32))
{var inst_17380 = (state_17438[7]);var inst_17381 = (state_17438[8]);var inst_17379 = (state_17438[9]);var inst_17378 = (state_17438[10]);var inst_17393 = (state_17438[2]);var inst_17394 = (inst_17381 + 1);var tmp17440 = inst_17380;var tmp17441 = inst_17379;var tmp17442 = inst_17378;var inst_17378__$1 = tmp17442;var inst_17379__$1 = tmp17441;var inst_17380__$1 = tmp17440;var inst_17381__$1 = inst_17394;var state_17438__$1 = (function (){var statearr_17443 = state_17438;(statearr_17443[7] = inst_17380__$1);
(statearr_17443[8] = inst_17381__$1);
(statearr_17443[9] = inst_17379__$1);
(statearr_17443[10] = inst_17378__$1);
(statearr_17443[11] = inst_17393);
return statearr_17443;
})();var statearr_17444_17527 = state_17438__$1;(statearr_17444_17527[2] = null);
(statearr_17444_17527[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 1))
{var state_17438__$1 = state_17438;var statearr_17445_17528 = state_17438__$1;(statearr_17445_17528[2] = null);
(statearr_17445_17528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 33))
{var inst_17397 = (state_17438[12]);var inst_17399 = cljs.core.chunked_seq_QMARK_.call(null,inst_17397);var state_17438__$1 = state_17438;if(inst_17399)
{var statearr_17446_17529 = state_17438__$1;(statearr_17446_17529[1] = 36);
} else
{var statearr_17447_17530 = state_17438__$1;(statearr_17447_17530[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 2))
{var state_17438__$1 = state_17438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17438__$1,4,ch);
} else
{if((state_val_17439 === 34))
{var state_17438__$1 = state_17438;var statearr_17448_17531 = state_17438__$1;(statearr_17448_17531[2] = null);
(statearr_17448_17531[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 3))
{var inst_17436 = (state_17438[2]);var state_17438__$1 = state_17438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17438__$1,inst_17436);
} else
{if((state_val_17439 === 35))
{var inst_17420 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17449_17532 = state_17438__$1;(statearr_17449_17532[2] = inst_17420);
(statearr_17449_17532[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 4))
{var inst_17310 = (state_17438[13]);var inst_17310__$1 = (state_17438[2]);var inst_17311 = (inst_17310__$1 == null);var state_17438__$1 = (function (){var statearr_17450 = state_17438;(statearr_17450[13] = inst_17310__$1);
return statearr_17450;
})();if(cljs.core.truth_(inst_17311))
{var statearr_17451_17533 = state_17438__$1;(statearr_17451_17533[1] = 5);
} else
{var statearr_17452_17534 = state_17438__$1;(statearr_17452_17534[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 36))
{var inst_17397 = (state_17438[12]);var inst_17401 = cljs.core.chunk_first.call(null,inst_17397);var inst_17402 = cljs.core.chunk_rest.call(null,inst_17397);var inst_17403 = cljs.core.count.call(null,inst_17401);var inst_17378 = inst_17402;var inst_17379 = inst_17401;var inst_17380 = inst_17403;var inst_17381 = 0;var state_17438__$1 = (function (){var statearr_17453 = state_17438;(statearr_17453[7] = inst_17380);
(statearr_17453[8] = inst_17381);
(statearr_17453[9] = inst_17379);
(statearr_17453[10] = inst_17378);
return statearr_17453;
})();var statearr_17454_17535 = state_17438__$1;(statearr_17454_17535[2] = null);
(statearr_17454_17535[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 5))
{var inst_17317 = cljs.core.deref.call(null,cs);var inst_17318 = cljs.core.seq.call(null,inst_17317);var inst_17319 = inst_17318;var inst_17320 = null;var inst_17321 = 0;var inst_17322 = 0;var state_17438__$1 = (function (){var statearr_17455 = state_17438;(statearr_17455[14] = inst_17319);
(statearr_17455[15] = inst_17322);
(statearr_17455[16] = inst_17321);
(statearr_17455[17] = inst_17320);
return statearr_17455;
})();var statearr_17456_17536 = state_17438__$1;(statearr_17456_17536[2] = null);
(statearr_17456_17536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 37))
{var inst_17406 = (state_17438[18]);var inst_17310 = (state_17438[13]);var inst_17397 = (state_17438[12]);var inst_17406__$1 = cljs.core.first.call(null,inst_17397);var inst_17407 = cljs.core.async.put_BANG_.call(null,inst_17406__$1,inst_17310,done);var state_17438__$1 = (function (){var statearr_17457 = state_17438;(statearr_17457[18] = inst_17406__$1);
return statearr_17457;
})();if(cljs.core.truth_(inst_17407))
{var statearr_17458_17537 = state_17438__$1;(statearr_17458_17537[1] = 39);
} else
{var statearr_17459_17538 = state_17438__$1;(statearr_17459_17538[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 6))
{var inst_17370 = (state_17438[19]);var inst_17369 = cljs.core.deref.call(null,cs);var inst_17370__$1 = cljs.core.keys.call(null,inst_17369);var inst_17371 = cljs.core.count.call(null,inst_17370__$1);var inst_17372 = cljs.core.reset_BANG_.call(null,dctr,inst_17371);var inst_17377 = cljs.core.seq.call(null,inst_17370__$1);var inst_17378 = inst_17377;var inst_17379 = null;var inst_17380 = 0;var inst_17381 = 0;var state_17438__$1 = (function (){var statearr_17460 = state_17438;(statearr_17460[7] = inst_17380);
(statearr_17460[8] = inst_17381);
(statearr_17460[19] = inst_17370__$1);
(statearr_17460[20] = inst_17372);
(statearr_17460[9] = inst_17379);
(statearr_17460[10] = inst_17378);
return statearr_17460;
})();var statearr_17461_17539 = state_17438__$1;(statearr_17461_17539[2] = null);
(statearr_17461_17539[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 38))
{var inst_17417 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17462_17540 = state_17438__$1;(statearr_17462_17540[2] = inst_17417);
(statearr_17462_17540[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 7))
{var inst_17434 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17463_17541 = state_17438__$1;(statearr_17463_17541[2] = inst_17434);
(statearr_17463_17541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 39))
{var state_17438__$1 = state_17438;var statearr_17464_17542 = state_17438__$1;(statearr_17464_17542[2] = null);
(statearr_17464_17542[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 8))
{var inst_17322 = (state_17438[15]);var inst_17321 = (state_17438[16]);var inst_17324 = (inst_17322 < inst_17321);var inst_17325 = inst_17324;var state_17438__$1 = state_17438;if(cljs.core.truth_(inst_17325))
{var statearr_17465_17543 = state_17438__$1;(statearr_17465_17543[1] = 10);
} else
{var statearr_17466_17544 = state_17438__$1;(statearr_17466_17544[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 40))
{var inst_17406 = (state_17438[18]);var inst_17410 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17411 = cljs.core.async.untap_STAR_.call(null,m,inst_17406);var state_17438__$1 = (function (){var statearr_17467 = state_17438;(statearr_17467[21] = inst_17410);
return statearr_17467;
})();var statearr_17468_17545 = state_17438__$1;(statearr_17468_17545[2] = inst_17411);
(statearr_17468_17545[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 9))
{var inst_17367 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17469_17546 = state_17438__$1;(statearr_17469_17546[2] = inst_17367);
(statearr_17469_17546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 41))
{var inst_17397 = (state_17438[12]);var inst_17413 = (state_17438[2]);var inst_17414 = cljs.core.next.call(null,inst_17397);var inst_17378 = inst_17414;var inst_17379 = null;var inst_17380 = 0;var inst_17381 = 0;var state_17438__$1 = (function (){var statearr_17470 = state_17438;(statearr_17470[7] = inst_17380);
(statearr_17470[8] = inst_17381);
(statearr_17470[9] = inst_17379);
(statearr_17470[22] = inst_17413);
(statearr_17470[10] = inst_17378);
return statearr_17470;
})();var statearr_17471_17547 = state_17438__$1;(statearr_17471_17547[2] = null);
(statearr_17471_17547[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 10))
{var inst_17322 = (state_17438[15]);var inst_17320 = (state_17438[17]);var inst_17328 = cljs.core._nth.call(null,inst_17320,inst_17322);var inst_17329 = cljs.core.nth.call(null,inst_17328,0,null);var inst_17330 = cljs.core.nth.call(null,inst_17328,1,null);var state_17438__$1 = (function (){var statearr_17472 = state_17438;(statearr_17472[23] = inst_17329);
return statearr_17472;
})();if(cljs.core.truth_(inst_17330))
{var statearr_17473_17548 = state_17438__$1;(statearr_17473_17548[1] = 13);
} else
{var statearr_17474_17549 = state_17438__$1;(statearr_17474_17549[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 42))
{var state_17438__$1 = state_17438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17438__$1,45,dchan);
} else
{if((state_val_17439 === 11))
{var inst_17319 = (state_17438[14]);var inst_17339 = (state_17438[24]);var inst_17339__$1 = cljs.core.seq.call(null,inst_17319);var state_17438__$1 = (function (){var statearr_17475 = state_17438;(statearr_17475[24] = inst_17339__$1);
return statearr_17475;
})();if(inst_17339__$1)
{var statearr_17476_17550 = state_17438__$1;(statearr_17476_17550[1] = 16);
} else
{var statearr_17477_17551 = state_17438__$1;(statearr_17477_17551[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 43))
{var state_17438__$1 = state_17438;var statearr_17478_17552 = state_17438__$1;(statearr_17478_17552[2] = null);
(statearr_17478_17552[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 12))
{var inst_17365 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17479_17553 = state_17438__$1;(statearr_17479_17553[2] = inst_17365);
(statearr_17479_17553[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 44))
{var inst_17431 = (state_17438[2]);var state_17438__$1 = (function (){var statearr_17480 = state_17438;(statearr_17480[25] = inst_17431);
return statearr_17480;
})();var statearr_17481_17554 = state_17438__$1;(statearr_17481_17554[2] = null);
(statearr_17481_17554[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 13))
{var inst_17329 = (state_17438[23]);var inst_17332 = cljs.core.async.close_BANG_.call(null,inst_17329);var state_17438__$1 = state_17438;var statearr_17482_17555 = state_17438__$1;(statearr_17482_17555[2] = inst_17332);
(statearr_17482_17555[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 45))
{var inst_17428 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17486_17556 = state_17438__$1;(statearr_17486_17556[2] = inst_17428);
(statearr_17486_17556[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 14))
{var state_17438__$1 = state_17438;var statearr_17487_17557 = state_17438__$1;(statearr_17487_17557[2] = null);
(statearr_17487_17557[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 15))
{var inst_17319 = (state_17438[14]);var inst_17322 = (state_17438[15]);var inst_17321 = (state_17438[16]);var inst_17320 = (state_17438[17]);var inst_17335 = (state_17438[2]);var inst_17336 = (inst_17322 + 1);var tmp17483 = inst_17319;var tmp17484 = inst_17321;var tmp17485 = inst_17320;var inst_17319__$1 = tmp17483;var inst_17320__$1 = tmp17485;var inst_17321__$1 = tmp17484;var inst_17322__$1 = inst_17336;var state_17438__$1 = (function (){var statearr_17488 = state_17438;(statearr_17488[14] = inst_17319__$1);
(statearr_17488[15] = inst_17322__$1);
(statearr_17488[16] = inst_17321__$1);
(statearr_17488[17] = inst_17320__$1);
(statearr_17488[26] = inst_17335);
return statearr_17488;
})();var statearr_17489_17558 = state_17438__$1;(statearr_17489_17558[2] = null);
(statearr_17489_17558[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 16))
{var inst_17339 = (state_17438[24]);var inst_17341 = cljs.core.chunked_seq_QMARK_.call(null,inst_17339);var state_17438__$1 = state_17438;if(inst_17341)
{var statearr_17490_17559 = state_17438__$1;(statearr_17490_17559[1] = 19);
} else
{var statearr_17491_17560 = state_17438__$1;(statearr_17491_17560[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 17))
{var state_17438__$1 = state_17438;var statearr_17492_17561 = state_17438__$1;(statearr_17492_17561[2] = null);
(statearr_17492_17561[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 18))
{var inst_17363 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17493_17562 = state_17438__$1;(statearr_17493_17562[2] = inst_17363);
(statearr_17493_17562[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 19))
{var inst_17339 = (state_17438[24]);var inst_17343 = cljs.core.chunk_first.call(null,inst_17339);var inst_17344 = cljs.core.chunk_rest.call(null,inst_17339);var inst_17345 = cljs.core.count.call(null,inst_17343);var inst_17319 = inst_17344;var inst_17320 = inst_17343;var inst_17321 = inst_17345;var inst_17322 = 0;var state_17438__$1 = (function (){var statearr_17494 = state_17438;(statearr_17494[14] = inst_17319);
(statearr_17494[15] = inst_17322);
(statearr_17494[16] = inst_17321);
(statearr_17494[17] = inst_17320);
return statearr_17494;
})();var statearr_17495_17563 = state_17438__$1;(statearr_17495_17563[2] = null);
(statearr_17495_17563[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 20))
{var inst_17339 = (state_17438[24]);var inst_17349 = cljs.core.first.call(null,inst_17339);var inst_17350 = cljs.core.nth.call(null,inst_17349,0,null);var inst_17351 = cljs.core.nth.call(null,inst_17349,1,null);var state_17438__$1 = (function (){var statearr_17496 = state_17438;(statearr_17496[27] = inst_17350);
return statearr_17496;
})();if(cljs.core.truth_(inst_17351))
{var statearr_17497_17564 = state_17438__$1;(statearr_17497_17564[1] = 22);
} else
{var statearr_17498_17565 = state_17438__$1;(statearr_17498_17565[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 21))
{var inst_17360 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17499_17566 = state_17438__$1;(statearr_17499_17566[2] = inst_17360);
(statearr_17499_17566[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 22))
{var inst_17350 = (state_17438[27]);var inst_17353 = cljs.core.async.close_BANG_.call(null,inst_17350);var state_17438__$1 = state_17438;var statearr_17500_17567 = state_17438__$1;(statearr_17500_17567[2] = inst_17353);
(statearr_17500_17567[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 23))
{var state_17438__$1 = state_17438;var statearr_17501_17568 = state_17438__$1;(statearr_17501_17568[2] = null);
(statearr_17501_17568[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 24))
{var inst_17339 = (state_17438[24]);var inst_17356 = (state_17438[2]);var inst_17357 = cljs.core.next.call(null,inst_17339);var inst_17319 = inst_17357;var inst_17320 = null;var inst_17321 = 0;var inst_17322 = 0;var state_17438__$1 = (function (){var statearr_17502 = state_17438;(statearr_17502[28] = inst_17356);
(statearr_17502[14] = inst_17319);
(statearr_17502[15] = inst_17322);
(statearr_17502[16] = inst_17321);
(statearr_17502[17] = inst_17320);
return statearr_17502;
})();var statearr_17503_17569 = state_17438__$1;(statearr_17503_17569[2] = null);
(statearr_17503_17569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 25))
{var inst_17380 = (state_17438[7]);var inst_17381 = (state_17438[8]);var inst_17383 = (inst_17381 < inst_17380);var inst_17384 = inst_17383;var state_17438__$1 = state_17438;if(cljs.core.truth_(inst_17384))
{var statearr_17504_17570 = state_17438__$1;(statearr_17504_17570[1] = 27);
} else
{var statearr_17505_17571 = state_17438__$1;(statearr_17505_17571[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 26))
{var inst_17370 = (state_17438[19]);var inst_17424 = (state_17438[2]);var inst_17425 = cljs.core.seq.call(null,inst_17370);var state_17438__$1 = (function (){var statearr_17506 = state_17438;(statearr_17506[29] = inst_17424);
return statearr_17506;
})();if(inst_17425)
{var statearr_17507_17572 = state_17438__$1;(statearr_17507_17572[1] = 42);
} else
{var statearr_17508_17573 = state_17438__$1;(statearr_17508_17573[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 27))
{var inst_17381 = (state_17438[8]);var inst_17310 = (state_17438[13]);var inst_17379 = (state_17438[9]);var inst_17386 = (state_17438[30]);var inst_17386__$1 = cljs.core._nth.call(null,inst_17379,inst_17381);var inst_17387 = cljs.core.async.put_BANG_.call(null,inst_17386__$1,inst_17310,done);var state_17438__$1 = (function (){var statearr_17509 = state_17438;(statearr_17509[30] = inst_17386__$1);
return statearr_17509;
})();if(cljs.core.truth_(inst_17387))
{var statearr_17510_17574 = state_17438__$1;(statearr_17510_17574[1] = 30);
} else
{var statearr_17511_17575 = state_17438__$1;(statearr_17511_17575[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 28))
{var inst_17397 = (state_17438[12]);var inst_17378 = (state_17438[10]);var inst_17397__$1 = cljs.core.seq.call(null,inst_17378);var state_17438__$1 = (function (){var statearr_17512 = state_17438;(statearr_17512[12] = inst_17397__$1);
return statearr_17512;
})();if(inst_17397__$1)
{var statearr_17513_17576 = state_17438__$1;(statearr_17513_17576[1] = 33);
} else
{var statearr_17514_17577 = state_17438__$1;(statearr_17514_17577[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 29))
{var inst_17422 = (state_17438[2]);var state_17438__$1 = state_17438;var statearr_17515_17578 = state_17438__$1;(statearr_17515_17578[2] = inst_17422);
(statearr_17515_17578[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 30))
{var state_17438__$1 = state_17438;var statearr_17516_17579 = state_17438__$1;(statearr_17516_17579[2] = null);
(statearr_17516_17579[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17439 === 31))
{var inst_17386 = (state_17438[30]);var inst_17390 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17391 = cljs.core.async.untap_STAR_.call(null,m,inst_17386);var state_17438__$1 = (function (){var statearr_17517 = state_17438;(statearr_17517[31] = inst_17390);
return statearr_17517;
})();var statearr_17518_17580 = state_17438__$1;(statearr_17518_17580[2] = inst_17391);
(statearr_17518_17580[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___17526,cs,m,dchan,dctr,done))
;return ((function (switch__10267__auto__,c__10282__auto___17526,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_17522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17522[0] = state_machine__10268__auto__);
(statearr_17522[1] = 1);
return statearr_17522;
});
var state_machine__10268__auto____1 = (function (state_17438){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_17438);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e17523){if((e17523 instanceof Object))
{var ex__10271__auto__ = e17523;var statearr_17524_17581 = state_17438;(statearr_17524_17581[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17582 = state_17438;
state_17438 = G__17582;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_17438){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_17438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___17526,cs,m,dchan,dctr,done))
})();var state__10284__auto__ = (function (){var statearr_17525 = f__10283__auto__.call(null);(statearr_17525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___17526);
return statearr_17525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___17526,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17584 = {};return obj17584;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17704 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17704 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17705){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta17705 = meta17705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17704.cljs$lang$type = true;
cljs.core.async.t17704.cljs$lang$ctorStr = "cljs.core.async/t17704";
cljs.core.async.t17704.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t17704");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17704.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17706){var self__ = this;
var _17706__$1 = this;return self__.meta17705;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17706,meta17705__$1){var self__ = this;
var _17706__$1 = this;return (new cljs.core.async.t17704(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17705__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17704 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17704(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17705){return (new cljs.core.async.t17704(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17705));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17704(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10282__auto___17823 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___17823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___17823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17776){var state_val_17777 = (state_17776[1]);if((state_val_17777 === 1))
{var inst_17710 = (state_17776[7]);var inst_17710__$1 = calc_state.call(null);var inst_17711 = cljs.core.seq_QMARK_.call(null,inst_17710__$1);var state_17776__$1 = (function (){var statearr_17778 = state_17776;(statearr_17778[7] = inst_17710__$1);
return statearr_17778;
})();if(inst_17711)
{var statearr_17779_17824 = state_17776__$1;(statearr_17779_17824[1] = 2);
} else
{var statearr_17780_17825 = state_17776__$1;(statearr_17780_17825[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 2))
{var inst_17710 = (state_17776[7]);var inst_17713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17710);var state_17776__$1 = state_17776;var statearr_17781_17826 = state_17776__$1;(statearr_17781_17826[2] = inst_17713);
(statearr_17781_17826[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 3))
{var inst_17710 = (state_17776[7]);var state_17776__$1 = state_17776;var statearr_17782_17827 = state_17776__$1;(statearr_17782_17827[2] = inst_17710);
(statearr_17782_17827[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 4))
{var inst_17710 = (state_17776[7]);var inst_17716 = (state_17776[2]);var inst_17717 = cljs.core.get.call(null,inst_17716,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17718 = cljs.core.get.call(null,inst_17716,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17719 = cljs.core.get.call(null,inst_17716,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17720 = inst_17710;var state_17776__$1 = (function (){var statearr_17783 = state_17776;(statearr_17783[8] = inst_17717);
(statearr_17783[9] = inst_17718);
(statearr_17783[10] = inst_17720);
(statearr_17783[11] = inst_17719);
return statearr_17783;
})();var statearr_17784_17828 = state_17776__$1;(statearr_17784_17828[2] = null);
(statearr_17784_17828[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 5))
{var inst_17720 = (state_17776[10]);var inst_17723 = cljs.core.seq_QMARK_.call(null,inst_17720);var state_17776__$1 = state_17776;if(inst_17723)
{var statearr_17785_17829 = state_17776__$1;(statearr_17785_17829[1] = 7);
} else
{var statearr_17786_17830 = state_17776__$1;(statearr_17786_17830[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 6))
{var inst_17774 = (state_17776[2]);var state_17776__$1 = state_17776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17776__$1,inst_17774);
} else
{if((state_val_17777 === 7))
{var inst_17720 = (state_17776[10]);var inst_17725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17720);var state_17776__$1 = state_17776;var statearr_17787_17831 = state_17776__$1;(statearr_17787_17831[2] = inst_17725);
(statearr_17787_17831[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 8))
{var inst_17720 = (state_17776[10]);var state_17776__$1 = state_17776;var statearr_17788_17832 = state_17776__$1;(statearr_17788_17832[2] = inst_17720);
(statearr_17788_17832[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 9))
{var inst_17728 = (state_17776[12]);var inst_17728__$1 = (state_17776[2]);var inst_17729 = cljs.core.get.call(null,inst_17728__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17730 = cljs.core.get.call(null,inst_17728__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17731 = cljs.core.get.call(null,inst_17728__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17776__$1 = (function (){var statearr_17789 = state_17776;(statearr_17789[13] = inst_17731);
(statearr_17789[14] = inst_17730);
(statearr_17789[12] = inst_17728__$1);
return statearr_17789;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17776__$1,10,inst_17729);
} else
{if((state_val_17777 === 10))
{var inst_17736 = (state_17776[15]);var inst_17735 = (state_17776[16]);var inst_17734 = (state_17776[2]);var inst_17735__$1 = cljs.core.nth.call(null,inst_17734,0,null);var inst_17736__$1 = cljs.core.nth.call(null,inst_17734,1,null);var inst_17737 = (inst_17735__$1 == null);var inst_17738 = cljs.core._EQ_.call(null,inst_17736__$1,change);var inst_17739 = (inst_17737) || (inst_17738);var state_17776__$1 = (function (){var statearr_17790 = state_17776;(statearr_17790[15] = inst_17736__$1);
(statearr_17790[16] = inst_17735__$1);
return statearr_17790;
})();if(cljs.core.truth_(inst_17739))
{var statearr_17791_17833 = state_17776__$1;(statearr_17791_17833[1] = 11);
} else
{var statearr_17792_17834 = state_17776__$1;(statearr_17792_17834[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 11))
{var inst_17735 = (state_17776[16]);var inst_17741 = (inst_17735 == null);var state_17776__$1 = state_17776;if(cljs.core.truth_(inst_17741))
{var statearr_17793_17835 = state_17776__$1;(statearr_17793_17835[1] = 14);
} else
{var statearr_17794_17836 = state_17776__$1;(statearr_17794_17836[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 12))
{var inst_17750 = (state_17776[17]);var inst_17731 = (state_17776[13]);var inst_17736 = (state_17776[15]);var inst_17750__$1 = inst_17731.call(null,inst_17736);var state_17776__$1 = (function (){var statearr_17795 = state_17776;(statearr_17795[17] = inst_17750__$1);
return statearr_17795;
})();if(cljs.core.truth_(inst_17750__$1))
{var statearr_17796_17837 = state_17776__$1;(statearr_17796_17837[1] = 17);
} else
{var statearr_17797_17838 = state_17776__$1;(statearr_17797_17838[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 13))
{var inst_17772 = (state_17776[2]);var state_17776__$1 = state_17776;var statearr_17798_17839 = state_17776__$1;(statearr_17798_17839[2] = inst_17772);
(statearr_17798_17839[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 14))
{var inst_17736 = (state_17776[15]);var inst_17743 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17736);var state_17776__$1 = state_17776;var statearr_17799_17840 = state_17776__$1;(statearr_17799_17840[2] = inst_17743);
(statearr_17799_17840[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 15))
{var state_17776__$1 = state_17776;var statearr_17800_17841 = state_17776__$1;(statearr_17800_17841[2] = null);
(statearr_17800_17841[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 16))
{var inst_17746 = (state_17776[2]);var inst_17747 = calc_state.call(null);var inst_17720 = inst_17747;var state_17776__$1 = (function (){var statearr_17801 = state_17776;(statearr_17801[10] = inst_17720);
(statearr_17801[18] = inst_17746);
return statearr_17801;
})();var statearr_17802_17842 = state_17776__$1;(statearr_17802_17842[2] = null);
(statearr_17802_17842[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 17))
{var inst_17750 = (state_17776[17]);var state_17776__$1 = state_17776;var statearr_17803_17843 = state_17776__$1;(statearr_17803_17843[2] = inst_17750);
(statearr_17803_17843[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 18))
{var inst_17731 = (state_17776[13]);var inst_17730 = (state_17776[14]);var inst_17736 = (state_17776[15]);var inst_17753 = cljs.core.empty_QMARK_.call(null,inst_17731);var inst_17754 = inst_17730.call(null,inst_17736);var inst_17755 = cljs.core.not.call(null,inst_17754);var inst_17756 = (inst_17753) && (inst_17755);var state_17776__$1 = state_17776;var statearr_17804_17844 = state_17776__$1;(statearr_17804_17844[2] = inst_17756);
(statearr_17804_17844[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 19))
{var inst_17758 = (state_17776[2]);var state_17776__$1 = state_17776;if(cljs.core.truth_(inst_17758))
{var statearr_17805_17845 = state_17776__$1;(statearr_17805_17845[1] = 20);
} else
{var statearr_17806_17846 = state_17776__$1;(statearr_17806_17846[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 20))
{var inst_17735 = (state_17776[16]);var state_17776__$1 = state_17776;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17776__$1,23,out,inst_17735);
} else
{if((state_val_17777 === 21))
{var inst_17728 = (state_17776[12]);var inst_17720 = inst_17728;var state_17776__$1 = (function (){var statearr_17807 = state_17776;(statearr_17807[10] = inst_17720);
return statearr_17807;
})();var statearr_17808_17847 = state_17776__$1;(statearr_17808_17847[2] = null);
(statearr_17808_17847[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 22))
{var inst_17770 = (state_17776[2]);var state_17776__$1 = state_17776;var statearr_17809_17848 = state_17776__$1;(statearr_17809_17848[2] = inst_17770);
(statearr_17809_17848[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 23))
{var inst_17761 = (state_17776[2]);var state_17776__$1 = state_17776;if(cljs.core.truth_(inst_17761))
{var statearr_17810_17849 = state_17776__$1;(statearr_17810_17849[1] = 24);
} else
{var statearr_17811_17850 = state_17776__$1;(statearr_17811_17850[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 24))
{var inst_17728 = (state_17776[12]);var inst_17720 = inst_17728;var state_17776__$1 = (function (){var statearr_17812 = state_17776;(statearr_17812[10] = inst_17720);
return statearr_17812;
})();var statearr_17813_17851 = state_17776__$1;(statearr_17813_17851[2] = null);
(statearr_17813_17851[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 25))
{var state_17776__$1 = state_17776;var statearr_17814_17852 = state_17776__$1;(statearr_17814_17852[2] = null);
(statearr_17814_17852[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17777 === 26))
{var inst_17766 = (state_17776[2]);var state_17776__$1 = state_17776;var statearr_17815_17853 = state_17776__$1;(statearr_17815_17853[2] = inst_17766);
(statearr_17815_17853[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___17823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__10267__auto__,c__10282__auto___17823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_17819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17819[0] = state_machine__10268__auto__);
(statearr_17819[1] = 1);
return statearr_17819;
});
var state_machine__10268__auto____1 = (function (state_17776){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_17776);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object))
{var ex__10271__auto__ = e17820;var statearr_17821_17854 = state_17776;(statearr_17821_17854[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17855 = state_17776;
state_17776 = G__17855;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_17776){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_17776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___17823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__10284__auto__ = (function (){var statearr_17822 = f__10283__auto__.call(null);(statearr_17822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___17823);
return statearr_17822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___17823,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj17857 = {};return obj17857;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__17858_SHARP_){if(cljs.core.truth_(p1__17858_SHARP_.call(null,topic)))
{return p1__17858_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17981 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17982){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17982 = meta17982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17981.cljs$lang$type = true;
cljs.core.async.t17981.cljs$lang$ctorStr = "cljs.core.async/t17981";
cljs.core.async.t17981.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t17981");
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17981.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17983){var self__ = this;
var _17983__$1 = this;return self__.meta17982;
});})(mults,ensure_mult))
;
cljs.core.async.t17981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17983,meta17982__$1){var self__ = this;
var _17983__$1 = this;return (new cljs.core.async.t17981(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17982__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17981 = ((function (mults,ensure_mult){
return (function __GT_t17981(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17982){return (new cljs.core.async.t17981(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17982));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17981(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10282__auto___18103 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18103,mults,ensure_mult,p){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18103,mults,ensure_mult,p){
return (function (state_18055){var state_val_18056 = (state_18055[1]);if((state_val_18056 === 1))
{var state_18055__$1 = state_18055;var statearr_18057_18104 = state_18055__$1;(statearr_18057_18104[2] = null);
(statearr_18057_18104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 2))
{var state_18055__$1 = state_18055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18055__$1,4,ch);
} else
{if((state_val_18056 === 3))
{var inst_18053 = (state_18055[2]);var state_18055__$1 = state_18055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18055__$1,inst_18053);
} else
{if((state_val_18056 === 4))
{var inst_17986 = (state_18055[7]);var inst_17986__$1 = (state_18055[2]);var inst_17987 = (inst_17986__$1 == null);var state_18055__$1 = (function (){var statearr_18058 = state_18055;(statearr_18058[7] = inst_17986__$1);
return statearr_18058;
})();if(cljs.core.truth_(inst_17987))
{var statearr_18059_18105 = state_18055__$1;(statearr_18059_18105[1] = 5);
} else
{var statearr_18060_18106 = state_18055__$1;(statearr_18060_18106[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 5))
{var inst_17993 = cljs.core.deref.call(null,mults);var inst_17994 = cljs.core.vals.call(null,inst_17993);var inst_17995 = cljs.core.seq.call(null,inst_17994);var inst_17996 = inst_17995;var inst_17997 = null;var inst_17998 = 0;var inst_17999 = 0;var state_18055__$1 = (function (){var statearr_18061 = state_18055;(statearr_18061[8] = inst_17996);
(statearr_18061[9] = inst_17999);
(statearr_18061[10] = inst_17998);
(statearr_18061[11] = inst_17997);
return statearr_18061;
})();var statearr_18062_18107 = state_18055__$1;(statearr_18062_18107[2] = null);
(statearr_18062_18107[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 6))
{var inst_17986 = (state_18055[7]);var inst_18034 = (state_18055[12]);var inst_18036 = (state_18055[13]);var inst_18034__$1 = topic_fn.call(null,inst_17986);var inst_18035 = cljs.core.deref.call(null,mults);var inst_18036__$1 = cljs.core.get.call(null,inst_18035,inst_18034__$1);var state_18055__$1 = (function (){var statearr_18063 = state_18055;(statearr_18063[12] = inst_18034__$1);
(statearr_18063[13] = inst_18036__$1);
return statearr_18063;
})();if(cljs.core.truth_(inst_18036__$1))
{var statearr_18064_18108 = state_18055__$1;(statearr_18064_18108[1] = 19);
} else
{var statearr_18065_18109 = state_18055__$1;(statearr_18065_18109[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 7))
{var inst_18051 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18066_18110 = state_18055__$1;(statearr_18066_18110[2] = inst_18051);
(statearr_18066_18110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 8))
{var inst_17999 = (state_18055[9]);var inst_17998 = (state_18055[10]);var inst_18001 = (inst_17999 < inst_17998);var inst_18002 = inst_18001;var state_18055__$1 = state_18055;if(cljs.core.truth_(inst_18002))
{var statearr_18070_18111 = state_18055__$1;(statearr_18070_18111[1] = 10);
} else
{var statearr_18071_18112 = state_18055__$1;(statearr_18071_18112[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 9))
{var inst_18032 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18072_18113 = state_18055__$1;(statearr_18072_18113[2] = inst_18032);
(statearr_18072_18113[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 10))
{var inst_17996 = (state_18055[8]);var inst_17999 = (state_18055[9]);var inst_17998 = (state_18055[10]);var inst_17997 = (state_18055[11]);var inst_18004 = cljs.core._nth.call(null,inst_17997,inst_17999);var inst_18005 = cljs.core.async.muxch_STAR_.call(null,inst_18004);var inst_18006 = cljs.core.async.close_BANG_.call(null,inst_18005);var inst_18007 = (inst_17999 + 1);var tmp18067 = inst_17996;var tmp18068 = inst_17998;var tmp18069 = inst_17997;var inst_17996__$1 = tmp18067;var inst_17997__$1 = tmp18069;var inst_17998__$1 = tmp18068;var inst_17999__$1 = inst_18007;var state_18055__$1 = (function (){var statearr_18073 = state_18055;(statearr_18073[14] = inst_18006);
(statearr_18073[8] = inst_17996__$1);
(statearr_18073[9] = inst_17999__$1);
(statearr_18073[10] = inst_17998__$1);
(statearr_18073[11] = inst_17997__$1);
return statearr_18073;
})();var statearr_18074_18114 = state_18055__$1;(statearr_18074_18114[2] = null);
(statearr_18074_18114[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 11))
{var inst_17996 = (state_18055[8]);var inst_18010 = (state_18055[15]);var inst_18010__$1 = cljs.core.seq.call(null,inst_17996);var state_18055__$1 = (function (){var statearr_18075 = state_18055;(statearr_18075[15] = inst_18010__$1);
return statearr_18075;
})();if(inst_18010__$1)
{var statearr_18076_18115 = state_18055__$1;(statearr_18076_18115[1] = 13);
} else
{var statearr_18077_18116 = state_18055__$1;(statearr_18077_18116[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 12))
{var inst_18030 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18078_18117 = state_18055__$1;(statearr_18078_18117[2] = inst_18030);
(statearr_18078_18117[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 13))
{var inst_18010 = (state_18055[15]);var inst_18012 = cljs.core.chunked_seq_QMARK_.call(null,inst_18010);var state_18055__$1 = state_18055;if(inst_18012)
{var statearr_18079_18118 = state_18055__$1;(statearr_18079_18118[1] = 16);
} else
{var statearr_18080_18119 = state_18055__$1;(statearr_18080_18119[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 14))
{var state_18055__$1 = state_18055;var statearr_18081_18120 = state_18055__$1;(statearr_18081_18120[2] = null);
(statearr_18081_18120[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 15))
{var inst_18028 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18082_18121 = state_18055__$1;(statearr_18082_18121[2] = inst_18028);
(statearr_18082_18121[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 16))
{var inst_18010 = (state_18055[15]);var inst_18014 = cljs.core.chunk_first.call(null,inst_18010);var inst_18015 = cljs.core.chunk_rest.call(null,inst_18010);var inst_18016 = cljs.core.count.call(null,inst_18014);var inst_17996 = inst_18015;var inst_17997 = inst_18014;var inst_17998 = inst_18016;var inst_17999 = 0;var state_18055__$1 = (function (){var statearr_18083 = state_18055;(statearr_18083[8] = inst_17996);
(statearr_18083[9] = inst_17999);
(statearr_18083[10] = inst_17998);
(statearr_18083[11] = inst_17997);
return statearr_18083;
})();var statearr_18084_18122 = state_18055__$1;(statearr_18084_18122[2] = null);
(statearr_18084_18122[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 17))
{var inst_18010 = (state_18055[15]);var inst_18019 = cljs.core.first.call(null,inst_18010);var inst_18020 = cljs.core.async.muxch_STAR_.call(null,inst_18019);var inst_18021 = cljs.core.async.close_BANG_.call(null,inst_18020);var inst_18022 = cljs.core.next.call(null,inst_18010);var inst_17996 = inst_18022;var inst_17997 = null;var inst_17998 = 0;var inst_17999 = 0;var state_18055__$1 = (function (){var statearr_18085 = state_18055;(statearr_18085[8] = inst_17996);
(statearr_18085[16] = inst_18021);
(statearr_18085[9] = inst_17999);
(statearr_18085[10] = inst_17998);
(statearr_18085[11] = inst_17997);
return statearr_18085;
})();var statearr_18086_18123 = state_18055__$1;(statearr_18086_18123[2] = null);
(statearr_18086_18123[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 18))
{var inst_18025 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18087_18124 = state_18055__$1;(statearr_18087_18124[2] = inst_18025);
(statearr_18087_18124[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 19))
{var inst_17986 = (state_18055[7]);var inst_18036 = (state_18055[13]);var inst_18038 = cljs.core.async.muxch_STAR_.call(null,inst_18036);var state_18055__$1 = state_18055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18055__$1,22,inst_18038,inst_17986);
} else
{if((state_val_18056 === 20))
{var state_18055__$1 = state_18055;var statearr_18088_18125 = state_18055__$1;(statearr_18088_18125[2] = null);
(statearr_18088_18125[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 21))
{var inst_18048 = (state_18055[2]);var state_18055__$1 = (function (){var statearr_18089 = state_18055;(statearr_18089[17] = inst_18048);
return statearr_18089;
})();var statearr_18090_18126 = state_18055__$1;(statearr_18090_18126[2] = null);
(statearr_18090_18126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 22))
{var inst_18040 = (state_18055[2]);var state_18055__$1 = state_18055;if(cljs.core.truth_(inst_18040))
{var statearr_18091_18127 = state_18055__$1;(statearr_18091_18127[1] = 23);
} else
{var statearr_18092_18128 = state_18055__$1;(statearr_18092_18128[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 23))
{var state_18055__$1 = state_18055;var statearr_18093_18129 = state_18055__$1;(statearr_18093_18129[2] = null);
(statearr_18093_18129[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 24))
{var inst_18034 = (state_18055[12]);var inst_18043 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18034);var state_18055__$1 = state_18055;var statearr_18094_18130 = state_18055__$1;(statearr_18094_18130[2] = inst_18043);
(statearr_18094_18130[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18056 === 25))
{var inst_18045 = (state_18055[2]);var state_18055__$1 = state_18055;var statearr_18095_18131 = state_18055__$1;(statearr_18095_18131[2] = inst_18045);
(statearr_18095_18131[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18103,mults,ensure_mult,p))
;return ((function (switch__10267__auto__,c__10282__auto___18103,mults,ensure_mult,p){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18099[0] = state_machine__10268__auto__);
(statearr_18099[1] = 1);
return statearr_18099;
});
var state_machine__10268__auto____1 = (function (state_18055){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18055);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18100){if((e18100 instanceof Object))
{var ex__10271__auto__ = e18100;var statearr_18101_18132 = state_18055;(statearr_18101_18132[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18133 = state_18055;
state_18055 = G__18133;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18055){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18103,mults,ensure_mult,p))
})();var state__10284__auto__ = (function (){var statearr_18102 = f__10283__auto__.call(null);(statearr_18102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18103);
return statearr_18102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18103,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10282__auto___18270 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18270,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18270,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18240){var state_val_18241 = (state_18240[1]);if((state_val_18241 === 1))
{var state_18240__$1 = state_18240;var statearr_18242_18271 = state_18240__$1;(statearr_18242_18271[2] = null);
(statearr_18242_18271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 2))
{var inst_18203 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18204 = 0;var state_18240__$1 = (function (){var statearr_18243 = state_18240;(statearr_18243[7] = inst_18204);
(statearr_18243[8] = inst_18203);
return statearr_18243;
})();var statearr_18244_18272 = state_18240__$1;(statearr_18244_18272[2] = null);
(statearr_18244_18272[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 3))
{var inst_18238 = (state_18240[2]);var state_18240__$1 = state_18240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18240__$1,inst_18238);
} else
{if((state_val_18241 === 4))
{var inst_18204 = (state_18240[7]);var inst_18206 = (inst_18204 < cnt);var state_18240__$1 = state_18240;if(cljs.core.truth_(inst_18206))
{var statearr_18245_18273 = state_18240__$1;(statearr_18245_18273[1] = 6);
} else
{var statearr_18246_18274 = state_18240__$1;(statearr_18246_18274[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 5))
{var inst_18224 = (state_18240[2]);var state_18240__$1 = (function (){var statearr_18247 = state_18240;(statearr_18247[9] = inst_18224);
return statearr_18247;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18240__$1,12,dchan);
} else
{if((state_val_18241 === 6))
{var state_18240__$1 = state_18240;var statearr_18248_18275 = state_18240__$1;(statearr_18248_18275[2] = null);
(statearr_18248_18275[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 7))
{var state_18240__$1 = state_18240;var statearr_18249_18276 = state_18240__$1;(statearr_18249_18276[2] = null);
(statearr_18249_18276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 8))
{var inst_18222 = (state_18240[2]);var state_18240__$1 = state_18240;var statearr_18250_18277 = state_18240__$1;(statearr_18250_18277[2] = inst_18222);
(statearr_18250_18277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 9))
{var inst_18204 = (state_18240[7]);var inst_18217 = (state_18240[2]);var inst_18218 = (inst_18204 + 1);var inst_18204__$1 = inst_18218;var state_18240__$1 = (function (){var statearr_18251 = state_18240;(statearr_18251[7] = inst_18204__$1);
(statearr_18251[10] = inst_18217);
return statearr_18251;
})();var statearr_18252_18278 = state_18240__$1;(statearr_18252_18278[2] = null);
(statearr_18252_18278[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 10))
{var inst_18208 = (state_18240[2]);var inst_18209 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18240__$1 = (function (){var statearr_18253 = state_18240;(statearr_18253[11] = inst_18208);
return statearr_18253;
})();var statearr_18254_18279 = state_18240__$1;(statearr_18254_18279[2] = inst_18209);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18240__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 11))
{var inst_18204 = (state_18240[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18240,10,Object,null,9);var inst_18213 = chs__$1.call(null,inst_18204);var inst_18214 = done.call(null,inst_18204);var inst_18215 = cljs.core.async.take_BANG_.call(null,inst_18213,inst_18214);var state_18240__$1 = state_18240;var statearr_18255_18280 = state_18240__$1;(statearr_18255_18280[2] = inst_18215);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18240__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 12))
{var inst_18226 = (state_18240[12]);var inst_18226__$1 = (state_18240[2]);var inst_18227 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18226__$1);var state_18240__$1 = (function (){var statearr_18256 = state_18240;(statearr_18256[12] = inst_18226__$1);
return statearr_18256;
})();if(cljs.core.truth_(inst_18227))
{var statearr_18257_18281 = state_18240__$1;(statearr_18257_18281[1] = 13);
} else
{var statearr_18258_18282 = state_18240__$1;(statearr_18258_18282[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 13))
{var inst_18229 = cljs.core.async.close_BANG_.call(null,out);var state_18240__$1 = state_18240;var statearr_18259_18283 = state_18240__$1;(statearr_18259_18283[2] = inst_18229);
(statearr_18259_18283[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 14))
{var inst_18226 = (state_18240[12]);var inst_18231 = cljs.core.apply.call(null,f,inst_18226);var state_18240__$1 = state_18240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18240__$1,16,out,inst_18231);
} else
{if((state_val_18241 === 15))
{var inst_18236 = (state_18240[2]);var state_18240__$1 = state_18240;var statearr_18260_18284 = state_18240__$1;(statearr_18260_18284[2] = inst_18236);
(statearr_18260_18284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18241 === 16))
{var inst_18233 = (state_18240[2]);var state_18240__$1 = (function (){var statearr_18261 = state_18240;(statearr_18261[13] = inst_18233);
return statearr_18261;
})();var statearr_18262_18285 = state_18240__$1;(statearr_18262_18285[2] = null);
(statearr_18262_18285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18270,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__10267__auto__,c__10282__auto___18270,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18266[0] = state_machine__10268__auto__);
(statearr_18266[1] = 1);
return statearr_18266;
});
var state_machine__10268__auto____1 = (function (state_18240){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18240);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18267){if((e18267 instanceof Object))
{var ex__10271__auto__ = e18267;var statearr_18268_18286 = state_18240;(statearr_18268_18286[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18240);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18287 = state_18240;
state_18240 = G__18287;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18240){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18270,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__10284__auto__ = (function (){var statearr_18269 = f__10283__auto__.call(null);(statearr_18269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18270);
return statearr_18269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18270,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10282__auto___18395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18395,out){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18395,out){
return (function (state_18371){var state_val_18372 = (state_18371[1]);if((state_val_18372 === 1))
{var inst_18342 = cljs.core.vec.call(null,chs);var inst_18343 = inst_18342;var state_18371__$1 = (function (){var statearr_18373 = state_18371;(statearr_18373[7] = inst_18343);
return statearr_18373;
})();var statearr_18374_18396 = state_18371__$1;(statearr_18374_18396[2] = null);
(statearr_18374_18396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 2))
{var inst_18343 = (state_18371[7]);var inst_18345 = cljs.core.count.call(null,inst_18343);var inst_18346 = (inst_18345 > 0);var state_18371__$1 = state_18371;if(cljs.core.truth_(inst_18346))
{var statearr_18375_18397 = state_18371__$1;(statearr_18375_18397[1] = 4);
} else
{var statearr_18376_18398 = state_18371__$1;(statearr_18376_18398[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 3))
{var inst_18369 = (state_18371[2]);var state_18371__$1 = state_18371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18371__$1,inst_18369);
} else
{if((state_val_18372 === 4))
{var inst_18343 = (state_18371[7]);var state_18371__$1 = state_18371;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18371__$1,7,inst_18343);
} else
{if((state_val_18372 === 5))
{var inst_18365 = cljs.core.async.close_BANG_.call(null,out);var state_18371__$1 = state_18371;var statearr_18377_18399 = state_18371__$1;(statearr_18377_18399[2] = inst_18365);
(statearr_18377_18399[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 6))
{var inst_18367 = (state_18371[2]);var state_18371__$1 = state_18371;var statearr_18378_18400 = state_18371__$1;(statearr_18378_18400[2] = inst_18367);
(statearr_18378_18400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 7))
{var inst_18350 = (state_18371[8]);var inst_18351 = (state_18371[9]);var inst_18350__$1 = (state_18371[2]);var inst_18351__$1 = cljs.core.nth.call(null,inst_18350__$1,0,null);var inst_18352 = cljs.core.nth.call(null,inst_18350__$1,1,null);var inst_18353 = (inst_18351__$1 == null);var state_18371__$1 = (function (){var statearr_18379 = state_18371;(statearr_18379[8] = inst_18350__$1);
(statearr_18379[9] = inst_18351__$1);
(statearr_18379[10] = inst_18352);
return statearr_18379;
})();if(cljs.core.truth_(inst_18353))
{var statearr_18380_18401 = state_18371__$1;(statearr_18380_18401[1] = 8);
} else
{var statearr_18381_18402 = state_18371__$1;(statearr_18381_18402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 8))
{var inst_18350 = (state_18371[8]);var inst_18351 = (state_18371[9]);var inst_18343 = (state_18371[7]);var inst_18352 = (state_18371[10]);var inst_18355 = (function (){var c = inst_18352;var v = inst_18351;var vec__18348 = inst_18350;var cs = inst_18343;return ((function (c,v,vec__18348,cs,inst_18350,inst_18351,inst_18343,inst_18352,state_val_18372,c__10282__auto___18395,out){
return (function (p1__18288_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18288_SHARP_);
});
;})(c,v,vec__18348,cs,inst_18350,inst_18351,inst_18343,inst_18352,state_val_18372,c__10282__auto___18395,out))
})();var inst_18356 = cljs.core.filterv.call(null,inst_18355,inst_18343);var inst_18343__$1 = inst_18356;var state_18371__$1 = (function (){var statearr_18382 = state_18371;(statearr_18382[7] = inst_18343__$1);
return statearr_18382;
})();var statearr_18383_18403 = state_18371__$1;(statearr_18383_18403[2] = null);
(statearr_18383_18403[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 9))
{var inst_18351 = (state_18371[9]);var state_18371__$1 = state_18371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18371__$1,11,out,inst_18351);
} else
{if((state_val_18372 === 10))
{var inst_18363 = (state_18371[2]);var state_18371__$1 = state_18371;var statearr_18385_18404 = state_18371__$1;(statearr_18385_18404[2] = inst_18363);
(statearr_18385_18404[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18372 === 11))
{var inst_18343 = (state_18371[7]);var inst_18360 = (state_18371[2]);var tmp18384 = inst_18343;var inst_18343__$1 = tmp18384;var state_18371__$1 = (function (){var statearr_18386 = state_18371;(statearr_18386[7] = inst_18343__$1);
(statearr_18386[11] = inst_18360);
return statearr_18386;
})();var statearr_18387_18405 = state_18371__$1;(statearr_18387_18405[2] = null);
(statearr_18387_18405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18395,out))
;return ((function (switch__10267__auto__,c__10282__auto___18395,out){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18391 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18391[0] = state_machine__10268__auto__);
(statearr_18391[1] = 1);
return statearr_18391;
});
var state_machine__10268__auto____1 = (function (state_18371){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18371);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18392){if((e18392 instanceof Object))
{var ex__10271__auto__ = e18392;var statearr_18393_18406 = state_18371;(statearr_18393_18406[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18407 = state_18371;
state_18371 = G__18407;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18371){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18395,out))
})();var state__10284__auto__ = (function (){var statearr_18394 = f__10283__auto__.call(null);(statearr_18394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18395);
return statearr_18394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18395,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10282__auto___18500 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18500,out){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18500,out){
return (function (state_18477){var state_val_18478 = (state_18477[1]);if((state_val_18478 === 1))
{var inst_18454 = 0;var state_18477__$1 = (function (){var statearr_18479 = state_18477;(statearr_18479[7] = inst_18454);
return statearr_18479;
})();var statearr_18480_18501 = state_18477__$1;(statearr_18480_18501[2] = null);
(statearr_18480_18501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 2))
{var inst_18454 = (state_18477[7]);var inst_18456 = (inst_18454 < n);var state_18477__$1 = state_18477;if(cljs.core.truth_(inst_18456))
{var statearr_18481_18502 = state_18477__$1;(statearr_18481_18502[1] = 4);
} else
{var statearr_18482_18503 = state_18477__$1;(statearr_18482_18503[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 3))
{var inst_18474 = (state_18477[2]);var inst_18475 = cljs.core.async.close_BANG_.call(null,out);var state_18477__$1 = (function (){var statearr_18483 = state_18477;(statearr_18483[8] = inst_18474);
return statearr_18483;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18477__$1,inst_18475);
} else
{if((state_val_18478 === 4))
{var state_18477__$1 = state_18477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18477__$1,7,ch);
} else
{if((state_val_18478 === 5))
{var state_18477__$1 = state_18477;var statearr_18484_18504 = state_18477__$1;(statearr_18484_18504[2] = null);
(statearr_18484_18504[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 6))
{var inst_18472 = (state_18477[2]);var state_18477__$1 = state_18477;var statearr_18485_18505 = state_18477__$1;(statearr_18485_18505[2] = inst_18472);
(statearr_18485_18505[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 7))
{var inst_18459 = (state_18477[9]);var inst_18459__$1 = (state_18477[2]);var inst_18460 = (inst_18459__$1 == null);var inst_18461 = cljs.core.not.call(null,inst_18460);var state_18477__$1 = (function (){var statearr_18486 = state_18477;(statearr_18486[9] = inst_18459__$1);
return statearr_18486;
})();if(inst_18461)
{var statearr_18487_18506 = state_18477__$1;(statearr_18487_18506[1] = 8);
} else
{var statearr_18488_18507 = state_18477__$1;(statearr_18488_18507[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 8))
{var inst_18459 = (state_18477[9]);var state_18477__$1 = state_18477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18477__$1,11,out,inst_18459);
} else
{if((state_val_18478 === 9))
{var state_18477__$1 = state_18477;var statearr_18489_18508 = state_18477__$1;(statearr_18489_18508[2] = null);
(statearr_18489_18508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 10))
{var inst_18469 = (state_18477[2]);var state_18477__$1 = state_18477;var statearr_18490_18509 = state_18477__$1;(statearr_18490_18509[2] = inst_18469);
(statearr_18490_18509[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18478 === 11))
{var inst_18454 = (state_18477[7]);var inst_18464 = (state_18477[2]);var inst_18465 = (inst_18454 + 1);var inst_18454__$1 = inst_18465;var state_18477__$1 = (function (){var statearr_18491 = state_18477;(statearr_18491[7] = inst_18454__$1);
(statearr_18491[10] = inst_18464);
return statearr_18491;
})();var statearr_18492_18510 = state_18477__$1;(statearr_18492_18510[2] = null);
(statearr_18492_18510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18500,out))
;return ((function (switch__10267__auto__,c__10282__auto___18500,out){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18496 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18496[0] = state_machine__10268__auto__);
(statearr_18496[1] = 1);
return statearr_18496;
});
var state_machine__10268__auto____1 = (function (state_18477){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18477);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18497){if((e18497 instanceof Object))
{var ex__10271__auto__ = e18497;var statearr_18498_18511 = state_18477;(statearr_18498_18511[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18497;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18512 = state_18477;
state_18477 = G__18512;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18477){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18500,out))
})();var state__10284__auto__ = (function (){var statearr_18499 = f__10283__auto__.call(null);(statearr_18499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18500);
return statearr_18499;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18500,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10282__auto___18609 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18609,out){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18609,out){
return (function (state_18584){var state_val_18585 = (state_18584[1]);if((state_val_18585 === 1))
{var inst_18561 = null;var state_18584__$1 = (function (){var statearr_18586 = state_18584;(statearr_18586[7] = inst_18561);
return statearr_18586;
})();var statearr_18587_18610 = state_18584__$1;(statearr_18587_18610[2] = null);
(statearr_18587_18610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 2))
{var state_18584__$1 = state_18584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18584__$1,4,ch);
} else
{if((state_val_18585 === 3))
{var inst_18581 = (state_18584[2]);var inst_18582 = cljs.core.async.close_BANG_.call(null,out);var state_18584__$1 = (function (){var statearr_18588 = state_18584;(statearr_18588[8] = inst_18581);
return statearr_18588;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18584__$1,inst_18582);
} else
{if((state_val_18585 === 4))
{var inst_18564 = (state_18584[9]);var inst_18564__$1 = (state_18584[2]);var inst_18565 = (inst_18564__$1 == null);var inst_18566 = cljs.core.not.call(null,inst_18565);var state_18584__$1 = (function (){var statearr_18589 = state_18584;(statearr_18589[9] = inst_18564__$1);
return statearr_18589;
})();if(inst_18566)
{var statearr_18590_18611 = state_18584__$1;(statearr_18590_18611[1] = 5);
} else
{var statearr_18591_18612 = state_18584__$1;(statearr_18591_18612[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 5))
{var inst_18561 = (state_18584[7]);var inst_18564 = (state_18584[9]);var inst_18568 = cljs.core._EQ_.call(null,inst_18564,inst_18561);var state_18584__$1 = state_18584;if(inst_18568)
{var statearr_18592_18613 = state_18584__$1;(statearr_18592_18613[1] = 8);
} else
{var statearr_18593_18614 = state_18584__$1;(statearr_18593_18614[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 6))
{var state_18584__$1 = state_18584;var statearr_18595_18615 = state_18584__$1;(statearr_18595_18615[2] = null);
(statearr_18595_18615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 7))
{var inst_18579 = (state_18584[2]);var state_18584__$1 = state_18584;var statearr_18596_18616 = state_18584__$1;(statearr_18596_18616[2] = inst_18579);
(statearr_18596_18616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 8))
{var inst_18561 = (state_18584[7]);var tmp18594 = inst_18561;var inst_18561__$1 = tmp18594;var state_18584__$1 = (function (){var statearr_18597 = state_18584;(statearr_18597[7] = inst_18561__$1);
return statearr_18597;
})();var statearr_18598_18617 = state_18584__$1;(statearr_18598_18617[2] = null);
(statearr_18598_18617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 9))
{var inst_18564 = (state_18584[9]);var state_18584__$1 = state_18584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18584__$1,11,out,inst_18564);
} else
{if((state_val_18585 === 10))
{var inst_18576 = (state_18584[2]);var state_18584__$1 = state_18584;var statearr_18599_18618 = state_18584__$1;(statearr_18599_18618[2] = inst_18576);
(statearr_18599_18618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18585 === 11))
{var inst_18564 = (state_18584[9]);var inst_18573 = (state_18584[2]);var inst_18561 = inst_18564;var state_18584__$1 = (function (){var statearr_18600 = state_18584;(statearr_18600[7] = inst_18561);
(statearr_18600[10] = inst_18573);
return statearr_18600;
})();var statearr_18601_18619 = state_18584__$1;(statearr_18601_18619[2] = null);
(statearr_18601_18619[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18609,out))
;return ((function (switch__10267__auto__,c__10282__auto___18609,out){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18605 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18605[0] = state_machine__10268__auto__);
(statearr_18605[1] = 1);
return statearr_18605;
});
var state_machine__10268__auto____1 = (function (state_18584){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18584);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18606){if((e18606 instanceof Object))
{var ex__10271__auto__ = e18606;var statearr_18607_18620 = state_18584;(statearr_18607_18620[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18621 = state_18584;
state_18584 = G__18621;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18584){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18609,out))
})();var state__10284__auto__ = (function (){var statearr_18608 = f__10283__auto__.call(null);(statearr_18608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18609);
return statearr_18608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18609,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10282__auto___18756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18756,out){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18756,out){
return (function (state_18726){var state_val_18727 = (state_18726[1]);if((state_val_18727 === 1))
{var inst_18689 = (new Array(n));var inst_18690 = inst_18689;var inst_18691 = 0;var state_18726__$1 = (function (){var statearr_18728 = state_18726;(statearr_18728[7] = inst_18690);
(statearr_18728[8] = inst_18691);
return statearr_18728;
})();var statearr_18729_18757 = state_18726__$1;(statearr_18729_18757[2] = null);
(statearr_18729_18757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 2))
{var state_18726__$1 = state_18726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18726__$1,4,ch);
} else
{if((state_val_18727 === 3))
{var inst_18724 = (state_18726[2]);var state_18726__$1 = state_18726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18726__$1,inst_18724);
} else
{if((state_val_18727 === 4))
{var inst_18694 = (state_18726[9]);var inst_18694__$1 = (state_18726[2]);var inst_18695 = (inst_18694__$1 == null);var inst_18696 = cljs.core.not.call(null,inst_18695);var state_18726__$1 = (function (){var statearr_18730 = state_18726;(statearr_18730[9] = inst_18694__$1);
return statearr_18730;
})();if(inst_18696)
{var statearr_18731_18758 = state_18726__$1;(statearr_18731_18758[1] = 5);
} else
{var statearr_18732_18759 = state_18726__$1;(statearr_18732_18759[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 5))
{var inst_18699 = (state_18726[10]);var inst_18694 = (state_18726[9]);var inst_18690 = (state_18726[7]);var inst_18691 = (state_18726[8]);var inst_18698 = (inst_18690[inst_18691] = inst_18694);var inst_18699__$1 = (inst_18691 + 1);var inst_18700 = (inst_18699__$1 < n);var state_18726__$1 = (function (){var statearr_18733 = state_18726;(statearr_18733[10] = inst_18699__$1);
(statearr_18733[11] = inst_18698);
return statearr_18733;
})();if(cljs.core.truth_(inst_18700))
{var statearr_18734_18760 = state_18726__$1;(statearr_18734_18760[1] = 8);
} else
{var statearr_18735_18761 = state_18726__$1;(statearr_18735_18761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 6))
{var inst_18691 = (state_18726[8]);var inst_18712 = (inst_18691 > 0);var state_18726__$1 = state_18726;if(cljs.core.truth_(inst_18712))
{var statearr_18737_18762 = state_18726__$1;(statearr_18737_18762[1] = 12);
} else
{var statearr_18738_18763 = state_18726__$1;(statearr_18738_18763[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 7))
{var inst_18722 = (state_18726[2]);var state_18726__$1 = state_18726;var statearr_18739_18764 = state_18726__$1;(statearr_18739_18764[2] = inst_18722);
(statearr_18739_18764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 8))
{var inst_18699 = (state_18726[10]);var inst_18690 = (state_18726[7]);var tmp18736 = inst_18690;var inst_18690__$1 = tmp18736;var inst_18691 = inst_18699;var state_18726__$1 = (function (){var statearr_18740 = state_18726;(statearr_18740[7] = inst_18690__$1);
(statearr_18740[8] = inst_18691);
return statearr_18740;
})();var statearr_18741_18765 = state_18726__$1;(statearr_18741_18765[2] = null);
(statearr_18741_18765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 9))
{var inst_18690 = (state_18726[7]);var inst_18704 = cljs.core.vec.call(null,inst_18690);var state_18726__$1 = state_18726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18726__$1,11,out,inst_18704);
} else
{if((state_val_18727 === 10))
{var inst_18710 = (state_18726[2]);var state_18726__$1 = state_18726;var statearr_18742_18766 = state_18726__$1;(statearr_18742_18766[2] = inst_18710);
(statearr_18742_18766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 11))
{var inst_18706 = (state_18726[2]);var inst_18707 = (new Array(n));var inst_18690 = inst_18707;var inst_18691 = 0;var state_18726__$1 = (function (){var statearr_18743 = state_18726;(statearr_18743[7] = inst_18690);
(statearr_18743[8] = inst_18691);
(statearr_18743[12] = inst_18706);
return statearr_18743;
})();var statearr_18744_18767 = state_18726__$1;(statearr_18744_18767[2] = null);
(statearr_18744_18767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 12))
{var inst_18690 = (state_18726[7]);var inst_18714 = cljs.core.vec.call(null,inst_18690);var state_18726__$1 = state_18726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18726__$1,15,out,inst_18714);
} else
{if((state_val_18727 === 13))
{var state_18726__$1 = state_18726;var statearr_18745_18768 = state_18726__$1;(statearr_18745_18768[2] = null);
(statearr_18745_18768[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 14))
{var inst_18719 = (state_18726[2]);var inst_18720 = cljs.core.async.close_BANG_.call(null,out);var state_18726__$1 = (function (){var statearr_18746 = state_18726;(statearr_18746[13] = inst_18719);
return statearr_18746;
})();var statearr_18747_18769 = state_18726__$1;(statearr_18747_18769[2] = inst_18720);
(statearr_18747_18769[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18727 === 15))
{var inst_18716 = (state_18726[2]);var state_18726__$1 = state_18726;var statearr_18748_18770 = state_18726__$1;(statearr_18748_18770[2] = inst_18716);
(statearr_18748_18770[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18756,out))
;return ((function (switch__10267__auto__,c__10282__auto___18756,out){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18752[0] = state_machine__10268__auto__);
(statearr_18752[1] = 1);
return statearr_18752;
});
var state_machine__10268__auto____1 = (function (state_18726){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18726);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18753){if((e18753 instanceof Object))
{var ex__10271__auto__ = e18753;var statearr_18754_18771 = state_18726;(statearr_18754_18771[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18772 = state_18726;
state_18726 = G__18772;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18726){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18756,out))
})();var state__10284__auto__ = (function (){var statearr_18755 = f__10283__auto__.call(null);(statearr_18755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18756);
return statearr_18755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18756,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10282__auto___18915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___18915,out){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto___18915,out){
return (function (state_18885){var state_val_18886 = (state_18885[1]);if((state_val_18886 === 1))
{var inst_18844 = [];var inst_18845 = inst_18844;var inst_18846 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18885__$1 = (function (){var statearr_18887 = state_18885;(statearr_18887[7] = inst_18846);
(statearr_18887[8] = inst_18845);
return statearr_18887;
})();var statearr_18888_18916 = state_18885__$1;(statearr_18888_18916[2] = null);
(statearr_18888_18916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 2))
{var state_18885__$1 = state_18885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18885__$1,4,ch);
} else
{if((state_val_18886 === 3))
{var inst_18883 = (state_18885[2]);var state_18885__$1 = state_18885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18885__$1,inst_18883);
} else
{if((state_val_18886 === 4))
{var inst_18849 = (state_18885[9]);var inst_18849__$1 = (state_18885[2]);var inst_18850 = (inst_18849__$1 == null);var inst_18851 = cljs.core.not.call(null,inst_18850);var state_18885__$1 = (function (){var statearr_18889 = state_18885;(statearr_18889[9] = inst_18849__$1);
return statearr_18889;
})();if(inst_18851)
{var statearr_18890_18917 = state_18885__$1;(statearr_18890_18917[1] = 5);
} else
{var statearr_18891_18918 = state_18885__$1;(statearr_18891_18918[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 5))
{var inst_18849 = (state_18885[9]);var inst_18853 = (state_18885[10]);var inst_18846 = (state_18885[7]);var inst_18853__$1 = f.call(null,inst_18849);var inst_18854 = cljs.core._EQ_.call(null,inst_18853__$1,inst_18846);var inst_18855 = cljs.core.keyword_identical_QMARK_.call(null,inst_18846,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18856 = (inst_18854) || (inst_18855);var state_18885__$1 = (function (){var statearr_18892 = state_18885;(statearr_18892[10] = inst_18853__$1);
return statearr_18892;
})();if(cljs.core.truth_(inst_18856))
{var statearr_18893_18919 = state_18885__$1;(statearr_18893_18919[1] = 8);
} else
{var statearr_18894_18920 = state_18885__$1;(statearr_18894_18920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 6))
{var inst_18845 = (state_18885[8]);var inst_18870 = inst_18845.length;var inst_18871 = (inst_18870 > 0);var state_18885__$1 = state_18885;if(cljs.core.truth_(inst_18871))
{var statearr_18896_18921 = state_18885__$1;(statearr_18896_18921[1] = 12);
} else
{var statearr_18897_18922 = state_18885__$1;(statearr_18897_18922[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 7))
{var inst_18881 = (state_18885[2]);var state_18885__$1 = state_18885;var statearr_18898_18923 = state_18885__$1;(statearr_18898_18923[2] = inst_18881);
(statearr_18898_18923[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 8))
{var inst_18849 = (state_18885[9]);var inst_18853 = (state_18885[10]);var inst_18845 = (state_18885[8]);var inst_18858 = inst_18845.push(inst_18849);var tmp18895 = inst_18845;var inst_18845__$1 = tmp18895;var inst_18846 = inst_18853;var state_18885__$1 = (function (){var statearr_18899 = state_18885;(statearr_18899[11] = inst_18858);
(statearr_18899[7] = inst_18846);
(statearr_18899[8] = inst_18845__$1);
return statearr_18899;
})();var statearr_18900_18924 = state_18885__$1;(statearr_18900_18924[2] = null);
(statearr_18900_18924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 9))
{var inst_18845 = (state_18885[8]);var inst_18861 = cljs.core.vec.call(null,inst_18845);var state_18885__$1 = state_18885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18885__$1,11,out,inst_18861);
} else
{if((state_val_18886 === 10))
{var inst_18868 = (state_18885[2]);var state_18885__$1 = state_18885;var statearr_18901_18925 = state_18885__$1;(statearr_18901_18925[2] = inst_18868);
(statearr_18901_18925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 11))
{var inst_18849 = (state_18885[9]);var inst_18853 = (state_18885[10]);var inst_18863 = (state_18885[2]);var inst_18864 = [];var inst_18865 = inst_18864.push(inst_18849);var inst_18845 = inst_18864;var inst_18846 = inst_18853;var state_18885__$1 = (function (){var statearr_18902 = state_18885;(statearr_18902[7] = inst_18846);
(statearr_18902[8] = inst_18845);
(statearr_18902[12] = inst_18865);
(statearr_18902[13] = inst_18863);
return statearr_18902;
})();var statearr_18903_18926 = state_18885__$1;(statearr_18903_18926[2] = null);
(statearr_18903_18926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 12))
{var inst_18845 = (state_18885[8]);var inst_18873 = cljs.core.vec.call(null,inst_18845);var state_18885__$1 = state_18885;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18885__$1,15,out,inst_18873);
} else
{if((state_val_18886 === 13))
{var state_18885__$1 = state_18885;var statearr_18904_18927 = state_18885__$1;(statearr_18904_18927[2] = null);
(statearr_18904_18927[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 14))
{var inst_18878 = (state_18885[2]);var inst_18879 = cljs.core.async.close_BANG_.call(null,out);var state_18885__$1 = (function (){var statearr_18905 = state_18885;(statearr_18905[14] = inst_18878);
return statearr_18905;
})();var statearr_18906_18928 = state_18885__$1;(statearr_18906_18928[2] = inst_18879);
(statearr_18906_18928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18886 === 15))
{var inst_18875 = (state_18885[2]);var state_18885__$1 = state_18885;var statearr_18907_18929 = state_18885__$1;(statearr_18907_18929[2] = inst_18875);
(statearr_18907_18929[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___18915,out))
;return ((function (switch__10267__auto__,c__10282__auto___18915,out){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_18911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18911[0] = state_machine__10268__auto__);
(statearr_18911[1] = 1);
return statearr_18911;
});
var state_machine__10268__auto____1 = (function (state_18885){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_18885);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e18912){if((e18912 instanceof Object))
{var ex__10271__auto__ = e18912;var statearr_18913_18930 = state_18885;(statearr_18913_18930[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18931 = state_18885;
state_18885 = G__18931;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_18885){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_18885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto___18915,out))
})();var state__10284__auto__ = (function (){var statearr_18914 = f__10283__auto__.call(null);(statearr_18914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___18915);
return statearr_18914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___18915,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map