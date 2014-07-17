// Compiled by ClojureScript 0.0-2227
goog.provide('rtc.messaging');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('om.core');
goog.require('goog.net.WebSocket');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('cljs.reader');
goog.require('goog.ui.IdGenerator');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
rtc.messaging.insock_loop = (function insock_loop(chan,data,owner){var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__){
return (function (state_16655){var state_val_16656 = (state_16655[1]);if((state_val_16656 === 1))
{var state_16655__$1 = state_16655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16655__$1,2,chan);
} else
{if((state_val_16656 === 2))
{var inst_16621 = (state_16655[2]);var inst_16622 = inst_16621;var state_16655__$1 = (function (){var statearr_16657 = state_16655;(statearr_16657[7] = inst_16622);
return statearr_16657;
})();var statearr_16658_16683 = state_16655__$1;(statearr_16658_16683[2] = null);
(statearr_16658_16683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 3))
{var inst_16626 = (state_16655[8]);var inst_16622 = (state_16655[7]);var inst_16624 = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"pc-coord","pc-coord",1986842125));var inst_16625 = cljs.reader.read_string.call(null,inst_16622);var inst_16626__$1 = cljs.core.get.call(null,inst_16625,0);var inst_16627 = cljs.core.get.call(null,inst_16625,1);var inst_16628 = cljs.core.print.call(null,inst_16625);var state_16655__$1 = (function (){var statearr_16659 = state_16655;(statearr_16659[8] = inst_16626__$1);
(statearr_16659[9] = inst_16627);
(statearr_16659[10] = inst_16628);
(statearr_16659[11] = inst_16624);
return statearr_16659;
})();var G__16660_16684 = (((inst_16626__$1 instanceof cljs.core.Keyword))?inst_16626__$1.fqn:null);var caseval__16685;
switch (G__16660_16684){
case "r-offer":
(function (){var statearr_16661 = state_16655__$1;(statearr_16661[1] = 10);
return statearr_16661;
})()
break;
case "r-candidate":
(function (){var statearr_16662 = state_16655__$1;(statearr_16662[1] = 9);
return statearr_16662;
})()
break;
case "offer":
(function (){var statearr_16663 = state_16655__$1;(statearr_16663[1] = 8);
return statearr_16663;
})()
break;
case "joined":
(function (){var statearr_16664 = state_16655__$1;(statearr_16664[1] = 7);
return statearr_16664;
})()
break;
case "created":
(function (){var statearr_16665 = state_16655__$1;(statearr_16665[1] = 6);
return statearr_16665;
})()
break;
default:
(function (){var statearr_16666_16686 = state_16655__$1;(statearr_16666_16686[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
})()
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 4))
{var inst_16653 = (state_16655[2]);var state_16655__$1 = state_16655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16655__$1,inst_16653);
} else
{if((state_val_16656 === 5))
{var inst_16648 = (state_16655[2]);var state_16655__$1 = (function (){var statearr_16667 = state_16655;(statearr_16667[12] = inst_16648);
return statearr_16667;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16655__$1,12,chan);
} else
{if((state_val_16656 === 6))
{var inst_16629 = om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"role","role",1017410536),new cljs.core.Keyword(null,"initiator","initiator",764917153));var state_16655__$1 = state_16655;var statearr_16668_16687 = state_16655__$1;(statearr_16668_16687[2] = inst_16629);
(statearr_16668_16687[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 7))
{var inst_16631 = om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"role","role",1017410536),new cljs.core.Keyword(null,"joiner","joiner",4154342089));var state_16655__$1 = state_16655;var statearr_16669_16688 = state_16655__$1;(statearr_16669_16688[2] = inst_16631);
(statearr_16669_16688[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 8))
{var inst_16626 = (state_16655[8]);var inst_16624 = (state_16655[11]);var inst_16633 = [inst_16626];var inst_16634 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16633,null));var inst_16635 = cljs.core.async.put_BANG_.call(null,inst_16624,inst_16634);var state_16655__$1 = state_16655;var statearr_16670_16689 = state_16655__$1;(statearr_16670_16689[2] = inst_16635);
(statearr_16670_16689[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 9))
{var inst_16626 = (state_16655[8]);var inst_16627 = (state_16655[9]);var inst_16624 = (state_16655[11]);var inst_16637 = [inst_16626,inst_16627];var inst_16638 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16637,null));var inst_16639 = cljs.core.async.put_BANG_.call(null,inst_16624,inst_16638);var state_16655__$1 = state_16655;var statearr_16671_16690 = state_16655__$1;(statearr_16671_16690[2] = inst_16639);
(statearr_16671_16690[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 10))
{var inst_16626 = (state_16655[8]);var inst_16627 = (state_16655[9]);var inst_16624 = (state_16655[11]);var inst_16641 = [inst_16626,inst_16627];var inst_16642 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16641,null));var inst_16643 = cljs.core.async.put_BANG_.call(null,inst_16624,inst_16642);var state_16655__$1 = state_16655;var statearr_16672_16691 = state_16655__$1;(statearr_16672_16691[2] = inst_16643);
(statearr_16672_16691[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 11))
{var inst_16626 = (state_16655[8]);var inst_16627 = (state_16655[9]);var inst_16645 = cljs.core.print.call(null,"key :",inst_16626,"val :",inst_16627,"w");var state_16655__$1 = state_16655;var statearr_16673_16692 = state_16655__$1;(statearr_16673_16692[2] = inst_16645);
(statearr_16673_16692[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16656 === 12))
{var inst_16650 = (state_16655[2]);var inst_16622 = inst_16650;var state_16655__$1 = (function (){var statearr_16674 = state_16655;(statearr_16674[7] = inst_16622);
return statearr_16674;
})();var statearr_16675_16693 = state_16655__$1;(statearr_16675_16693[2] = null);
(statearr_16675_16693[1] = 3);
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
});})(c__10282__auto__))
;return ((function (switch__10267__auto__,c__10282__auto__){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16679 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16679[0] = state_machine__10268__auto__);
(statearr_16679[1] = 1);
return statearr_16679;
});
var state_machine__10268__auto____1 = (function (state_16655){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16655);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16680){if((e16680 instanceof Object))
{var ex__10271__auto__ = e16680;var statearr_16681_16694 = state_16655;(statearr_16681_16694[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16695 = state_16655;
state_16655 = G__16695;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16655){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__))
})();var state__10284__auto__ = (function (){var statearr_16682 = f__10283__auto__.call(null);(statearr_16682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_16682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);
return c__10282__auto__;
});
rtc.messaging.outsock_loop = (function outsock_loop(chan,data,websock,owner){var sockout = (function (p1__16696_SHARP_,p2__16697_SHARP_){return websock.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16696_SHARP_,p2__16697_SHARP_], null));
});var client_id = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"client-id","client-id",3404733903));var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__,sockout,client_id){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__,sockout,client_id){
return (function (state_16778){var state_val_16779 = (state_16778[1]);if((state_val_16779 === 1))
{var state_16778__$1 = state_16778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16778__$1,2,chan);
} else
{if((state_val_16779 === 2))
{var inst_16754 = (state_16778[2]);var inst_16755 = cljs.core.nth.call(null,inst_16754,0,null);var inst_16756 = cljs.core.nth.call(null,inst_16754,1,null);var inst_16757 = inst_16754;var state_16778__$1 = (function (){var statearr_16780 = state_16778;(statearr_16780[7] = inst_16757);
(statearr_16780[8] = inst_16756);
(statearr_16780[9] = inst_16755);
return statearr_16780;
})();var statearr_16781_16802 = state_16778__$1;(statearr_16781_16802[2] = null);
(statearr_16781_16802[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 3))
{var inst_16757 = (state_16778[7]);var inst_16760 = (state_16778[10]);var inst_16760__$1 = cljs.core.nth.call(null,inst_16757,0,null);var inst_16761 = cljs.core.nth.call(null,inst_16757,1,null);var state_16778__$1 = (function (){var statearr_16782 = state_16778;(statearr_16782[11] = inst_16761);
(statearr_16782[10] = inst_16760__$1);
return statearr_16782;
})();var G__16783_16803 = (((inst_16760__$1 instanceof cljs.core.Keyword))?inst_16760__$1.fqn:null);var caseval__16804;
switch (G__16783_16803){
case "s-offer":
(function (){var statearr_16784 = state_16778__$1;(statearr_16784[1] = 8);
return statearr_16784;
})()
break;
case "s-candidate":
(function (){var statearr_16785 = state_16778__$1;(statearr_16785[1] = 7);
return statearr_16785;
})()
break;
case "connect":
(function (){var statearr_16786 = state_16778__$1;(statearr_16786[1] = 6);
return statearr_16786;
})()
break;
default:
(function (){var statearr_16787_16805 = state_16778__$1;(statearr_16787_16805[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
})()
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 4))
{var inst_16776 = (state_16778[2]);var state_16778__$1 = state_16778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16778__$1,inst_16776);
} else
{if((state_val_16779 === 5))
{var inst_16771 = (state_16778[2]);var state_16778__$1 = (function (){var statearr_16788 = state_16778;(statearr_16788[12] = inst_16771);
return statearr_16788;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16778__$1,10,chan);
} else
{if((state_val_16779 === 6))
{var inst_16760 = (state_16778[10]);var inst_16762 = sockout.call(null,inst_16760,client_id);var state_16778__$1 = state_16778;var statearr_16789_16806 = state_16778__$1;(statearr_16789_16806[2] = inst_16762);
(statearr_16789_16806[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 7))
{var inst_16761 = (state_16778[11]);var inst_16760 = (state_16778[10]);var inst_16764 = sockout.call(null,inst_16760,inst_16761);var state_16778__$1 = state_16778;var statearr_16790_16807 = state_16778__$1;(statearr_16790_16807[2] = inst_16764);
(statearr_16790_16807[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 8))
{var inst_16761 = (state_16778[11]);var inst_16760 = (state_16778[10]);var inst_16766 = sockout.call(null,inst_16760,inst_16761);var state_16778__$1 = state_16778;var statearr_16791_16808 = state_16778__$1;(statearr_16791_16808[2] = inst_16766);
(statearr_16791_16808[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 9))
{var inst_16768 = cljs.core.print.call(null,"whatever");var state_16778__$1 = state_16778;var statearr_16792_16809 = state_16778__$1;(statearr_16792_16809[2] = inst_16768);
(statearr_16792_16809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16779 === 10))
{var inst_16773 = (state_16778[2]);var inst_16757 = inst_16773;var state_16778__$1 = (function (){var statearr_16793 = state_16778;(statearr_16793[7] = inst_16757);
return statearr_16793;
})();var statearr_16794_16810 = state_16778__$1;(statearr_16794_16810[2] = null);
(statearr_16794_16810[1] = 3);
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
});})(c__10282__auto__,sockout,client_id))
;return ((function (switch__10267__auto__,c__10282__auto__,sockout,client_id){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16798 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16798[0] = state_machine__10268__auto__);
(statearr_16798[1] = 1);
return statearr_16798;
});
var state_machine__10268__auto____1 = (function (state_16778){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16778);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16799){if((e16799 instanceof Object))
{var ex__10271__auto__ = e16799;var statearr_16800_16811 = state_16778;(statearr_16800_16811[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16812 = state_16778;
state_16778 = G__16812;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16778){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__,sockout,client_id))
})();var state__10284__auto__ = (function (){var statearr_16801 = f__10283__auto__.call(null);(statearr_16801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_16801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__,sockout,client_id))
);
return c__10282__auto__;
});
var ufv___16831 = schema.utils.use_fn_validation;var output_schema16816_16832 = schema.core.Any;var input_schema16817_16833 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",-1637113383,null))], null);var input_checker16818_16834 = schema.core.checker.call(null,input_schema16817_16833);var output_checker16819_16835 = schema.core.checker.call(null,output_schema16816_16832);/**
* Inputs: [data owner opts]
*/
rtc.messaging.websock = ((function (ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function websock(G__16820,G__16821,G__16822){var validate__7247__auto__ = ufv___16831.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___16836 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16820,G__16821,G__16822], null);var temp__4092__auto___16837 = input_checker16818_16834.call(null,args__7248__auto___16836);if(cljs.core.truth_(temp__4092__auto___16837))
{var error__7249__auto___16838 = temp__4092__auto___16837;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"websock","websock",-416190767,null),cljs.core.pr_str.call(null,error__7249__auto___16838)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16838,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema16817_16833,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___16836], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var data = G__16820;var owner = G__16821;var opts = G__16822;while(true){
if(typeof rtc.messaging.t16827 !== 'undefined')
{} else
{
/**
* @constructor
*/
rtc.messaging.t16827 = (function (output_schema16816,opts,ufv__,websock,G__16821,G__16822,data,G__16820,validate__7247__auto__,input_schema16817,input_checker16818,owner,output_checker16819,meta16828){
this.output_schema16816 = output_schema16816;
this.opts = opts;
this.ufv__ = ufv__;
this.websock = websock;
this.G__16821 = G__16821;
this.G__16822 = G__16822;
this.data = data;
this.G__16820 = G__16820;
this.validate__7247__auto__ = validate__7247__auto__;
this.input_schema16817 = input_schema16817;
this.input_checker16818 = input_checker16818;
this.owner = owner;
this.output_checker16819 = output_checker16819;
this.meta16828 = meta16828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rtc.messaging.t16827.cljs$lang$type = true;
rtc.messaging.t16827.cljs$lang$ctorStr = "rtc.messaging/t16827";
rtc.messaging.t16827.cljs$lang$ctorPrWriter = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"rtc.messaging/t16827");
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
rtc.messaging.t16827.prototype.om$core$IRenderState$ = true;
rtc.messaging.t16827.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.build.call(null,self__.opts.call(null,new cljs.core.Keyword(null,"child","child",1108535438)),self__.data);
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
rtc.messaging.t16827.prototype.om$core$IWillMount$ = true;
rtc.messaging.t16827.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (_){var self__ = this;
var ___$1 = this;var webc = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"webc","webc",1017549569));var in_c = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"in-c","in-c",1017139501));var websock__$2 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"websock","websock",2238245002));var G__16830_16839 = websock__$2;G__16830_16839.addEventListener(goog.net.WebSocket.EventType.CLOSED,((function (G__16830_16839,webc,in_c,websock__$2,___$1,validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (p1__16813_SHARP_){return cljs.core.print.call(null,goog.debug.expose(p1__16813_SHARP_));
});})(G__16830_16839,webc,in_c,websock__$2,___$1,validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
);
G__16830_16839.addEventListener(goog.net.WebSocket.EventType.OPENED,((function (G__16830_16839,webc,in_c,websock__$2,___$1,validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (){return cljs.core.print.call(null,"the channel is alive");
});})(G__16830_16839,webc,in_c,websock__$2,___$1,validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
);
G__16830_16839.addEventListener(goog.net.WebSocket.EventType.MESSAGE,((function (G__16830_16839,webc,in_c,websock__$2,___$1,validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (p1__16814_SHARP_){return cljs.core.async.put_BANG_.call(null,in_c,p1__16814_SHARP_.message);
});})(G__16830_16839,webc,in_c,websock__$2,___$1,validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
);
G__16830_16839.open(("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/ws"));
rtc.messaging.insock_loop.call(null,in_c,self__.data,self__.owner);
return rtc.messaging.outsock_loop.call(null,webc,self__.data,websock__$2,self__.owner);
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
rtc.messaging.t16827.prototype.om$core$IInitState$ = true;
rtc.messaging.t16827.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"websock","websock",2238245002),(new goog.net.WebSocket()),new cljs.core.Keyword(null,"in-c","in-c",1017139501),cljs.core.async.chan.call(null)], null);
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
rtc.messaging.t16827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (_16829){var self__ = this;
var _16829__$1 = this;return self__.meta16828;
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
rtc.messaging.t16827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function (_16829,meta16828__$1){var self__ = this;
var _16829__$1 = this;return (new rtc.messaging.t16827(self__.output_schema16816,self__.opts,self__.ufv__,self__.websock,self__.G__16821,self__.G__16822,self__.data,self__.G__16820,self__.validate__7247__auto__,self__.input_schema16817,self__.input_checker16818,self__.owner,self__.output_checker16819,meta16828__$1));
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
rtc.messaging.__GT_t16827 = ((function (validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835){
return (function __GT_t16827(output_schema16816__$1,opts__$1,ufv____$1,websock__$1,G__16821__$1,G__16822__$1,data__$1,G__16820__$1,validate__7247__auto____$1,input_schema16817__$1,input_checker16818__$1,owner__$1,output_checker16819__$1,meta16828){return (new rtc.messaging.t16827(output_schema16816__$1,opts__$1,ufv____$1,websock__$1,G__16821__$1,G__16822__$1,data__$1,G__16820__$1,validate__7247__auto____$1,input_schema16817__$1,input_checker16818__$1,owner__$1,output_checker16819__$1,meta16828));
});})(validate__7247__auto__,ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
}
return (new rtc.messaging.t16827(output_schema16816_16832,opts,ufv___16831,websock,G__16821,G__16822,data,G__16820,validate__7247__auto__,input_schema16817_16833,input_checker16818_16834,owner,output_checker16819_16835,null));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___16840 = output_checker16819_16835.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___16840))
{var error__7249__auto___16841 = temp__4092__auto___16840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"websock","websock",-416190767,null),cljs.core.pr_str.call(null,error__7249__auto___16841)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16841,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema16816_16832,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___16831,output_schema16816_16832,input_schema16817_16833,input_checker16818_16834,output_checker16819_16835))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,rtc.messaging.websock),schema.core.make_fn_schema.call(null,output_schema16816_16832,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16817_16833], null)));
rtc.messaging.__GT_websock = (function() {
var __GT_websock = null;
var __GT_websock__1 = (function (cursor__9015__auto__){return om.core.build.call(null,rtc.messaging.websock,cursor__9015__auto__);
});
var __GT_websock__2 = (function (cursor__9015__auto__,m16815){return om.core.build.call(null,rtc.messaging.websock,cursor__9015__auto__,m16815);
});
__GT_websock = function(cursor__9015__auto__,m16815){
switch(arguments.length){
case 1:
return __GT_websock__1.call(this,cursor__9015__auto__);
case 2:
return __GT_websock__2.call(this,cursor__9015__auto__,m16815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_websock.cljs$core$IFn$_invoke$arity$1 = __GT_websock__1;
__GT_websock.cljs$core$IFn$_invoke$arity$2 = __GT_websock__2;
return __GT_websock;
})()
;

//# sourceMappingURL=messaging.js.map