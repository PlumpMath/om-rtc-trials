// Compiled by ClojureScript 0.0-2227
goog.provide('rtc.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('om.core');
goog.require('rtc.prefix');
goog.require('rtc.messaging');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('rtc.prefix');
goog.require('rtc.messaging');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.debug');
cljs.core.enable_console_print_BANG_.call(null);
rtc.main.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shit","shit",1017433522),"whatever"], null));
rtc.main.handle_stream = (function handle_stream(owner,stream,node){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"stream","stream",4416881394),stream);
var G__16044_16045 = webrtcDetectedBrowser;var caseval__16046;
switch (G__16044_16045){
case "firefox":
node.mozSrcObject = stream
break;
default:
node.src = URL.createObjectURL(stream)
}
return node.play();
});
rtc.main.vid_loop = (function vid_loop(owner,data,vidc){var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__){
return (function (state_16165){var state_val_16166 = (state_16165[1]);if((state_val_16166 === 1))
{var state_16165__$1 = state_16165;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16165__$1,2,vidc);
} else
{if((state_val_16166 === 2))
{var inst_16124 = (state_16165[2]);var inst_16125 = cljs.core.nth.call(null,inst_16124,0,null);var inst_16126 = cljs.core.nth.call(null,inst_16124,1,null);var inst_16127 = cljs.core.nth.call(null,inst_16124,2,null);var inst_16128 = inst_16124;var state_16165__$1 = (function (){var statearr_16167 = state_16165;(statearr_16167[7] = inst_16125);
(statearr_16167[8] = inst_16126);
(statearr_16167[9] = inst_16128);
(statearr_16167[10] = inst_16127);
return statearr_16167;
})();var statearr_16168_16193 = state_16165__$1;(statearr_16168_16193[2] = null);
(statearr_16168_16193[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 3))
{var inst_16128 = (state_16165[9]);var inst_16131 = cljs.core.nth.call(null,inst_16128,0,null);var inst_16132 = cljs.core.nth.call(null,inst_16128,1,null);var inst_16133 = cljs.core.nth.call(null,inst_16128,2,null);var inst_16134 = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"webc","webc",1017549569));var inst_16135 = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pc","pc",1013907813));var inst_16136 = cljs.core.deref.call(null,data);var inst_16137 = inst_16136.call(null,new cljs.core.Keyword(null,"role","role",1017410536));var state_16165__$1 = (function (){var statearr_16169 = state_16165;(statearr_16169[11] = inst_16137);
(statearr_16169[12] = inst_16134);
(statearr_16169[13] = inst_16135);
(statearr_16169[14] = inst_16133);
(statearr_16169[15] = inst_16132);
return statearr_16169;
})();var G__16170_16194 = (((inst_16131 instanceof cljs.core.Keyword))?inst_16131.fqn:null);var caseval__16195;
switch (G__16170_16194){
case "remote":
(function (){var statearr_16171 = state_16165__$1;(statearr_16171[1] = 10);
return statearr_16171;
})()
break;
case "local":
(function (){var statearr_16172 = state_16165__$1;(statearr_16172[1] = 6);
return statearr_16172;
})()
break;
default:
(function (){var statearr_16173_16196 = state_16165__$1;(statearr_16173_16196[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
})()
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 4))
{var inst_16163 = (state_16165[2]);var state_16165__$1 = state_16165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16165__$1,inst_16163);
} else
{if((state_val_16166 === 5))
{var inst_16158 = (state_16165[2]);var state_16165__$1 = (function (){var statearr_16174 = state_16165;(statearr_16174[16] = inst_16158);
return statearr_16174;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16165__$1,12,vidc);
} else
{if((state_val_16166 === 6))
{var inst_16137 = (state_16165[11]);var inst_16135 = (state_16165[13]);var inst_16133 = (state_16165[14]);var inst_16132 = (state_16165[15]);var inst_16138 = om.core.get_node.call(null,owner,inst_16132);var inst_16139 = inst_16135.addStream(inst_16133);var inst_16140 = cljs.core._EQ_.call(null,inst_16137,new cljs.core.Keyword(null,"initiator","initiator",764917153));var state_16165__$1 = (function (){var statearr_16175 = state_16165;(statearr_16175[17] = inst_16139);
(statearr_16175[18] = inst_16138);
return statearr_16175;
})();if(inst_16140)
{var statearr_16176_16197 = state_16165__$1;(statearr_16176_16197[1] = 7);
} else
{var statearr_16177_16198 = state_16165__$1;(statearr_16177_16198[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 7))
{var inst_16142 = [new cljs.core.Keyword(null,"igum","igum",1017135016)];var inst_16143 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16142,null));var state_16165__$1 = state_16165;var statearr_16178_16199 = state_16165__$1;(statearr_16178_16199[2] = inst_16143);
(statearr_16178_16199[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 8))
{var inst_16145 = [new cljs.core.Keyword(null,"rgum","rgum",1017403135)];var inst_16146 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16145,null));var state_16165__$1 = state_16165;var statearr_16179_16200 = state_16165__$1;(statearr_16179_16200[2] = inst_16146);
(statearr_16179_16200[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 9))
{var inst_16138 = (state_16165[18]);var inst_16134 = (state_16165[12]);var inst_16133 = (state_16165[14]);var inst_16148 = (state_16165[2]);var inst_16149 = cljs.core.async.put_BANG_.call(null,inst_16134,inst_16148);var inst_16150 = rtc.main.handle_stream.call(null,owner,inst_16133,inst_16138);var state_16165__$1 = (function (){var statearr_16180 = state_16165;(statearr_16180[19] = inst_16149);
return statearr_16180;
})();var statearr_16181_16201 = state_16165__$1;(statearr_16181_16201[2] = inst_16150);
(statearr_16181_16201[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 10))
{var inst_16133 = (state_16165[14]);var inst_16132 = (state_16165[15]);var inst_16152 = om.core.get_node.call(null,owner,inst_16132);var inst_16153 = rtc.main.handle_stream.call(null,owner,inst_16133,inst_16152);var state_16165__$1 = state_16165;var statearr_16182_16202 = state_16165__$1;(statearr_16182_16202[2] = inst_16153);
(statearr_16182_16202[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 11))
{var inst_16155 = cljs.core.print.call(null,"TROUBLE IN VID-LOOP");var state_16165__$1 = state_16165;var statearr_16183_16203 = state_16165__$1;(statearr_16183_16203[2] = inst_16155);
(statearr_16183_16203[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16166 === 12))
{var inst_16160 = (state_16165[2]);var inst_16128 = inst_16160;var state_16165__$1 = (function (){var statearr_16184 = state_16165;(statearr_16184[9] = inst_16128);
return statearr_16184;
})();var statearr_16185_16204 = state_16165__$1;(statearr_16185_16204[2] = null);
(statearr_16185_16204[1] = 3);
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
var state_machine__10268__auto____0 = (function (){var statearr_16189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16189[0] = state_machine__10268__auto__);
(statearr_16189[1] = 1);
return statearr_16189;
});
var state_machine__10268__auto____1 = (function (state_16165){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16165);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16190){if((e16190 instanceof Object))
{var ex__10271__auto__ = e16190;var statearr_16191_16205 = state_16165;(statearr_16191_16205[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16165);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16206 = state_16165;
state_16165 = G__16206;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16165){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__))
})();var state__10284__auto__ = (function (){var statearr_16192 = f__10283__auto__.call(null);(statearr_16192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_16192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);
return c__10282__auto__;
});
rtc.main.error = (function error(p1__16207_SHARP_){return cljs.core.print.call(null,p1__16207_SHARP_.name);
});
rtc.main.locals = (function locals(owner,c){return getUserMedia(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio","audio",1107070792),true], null)),(function (p1__16208_SHARP_){return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local","local",1117049565),"lvid",p1__16208_SHARP_], null));
}),(function (p1__16209_SHARP_){return cljs.core.print.call(null,goog.debug.expose(p1__16209_SHARP_));
}));
});
rtc.main.data_channel_coord = (function data_channel_coord(dc,owner,joint,key){var dc_send_delta = cljs.core.partial.call(null,joint,new cljs.core.Keyword(null,"dc-send-delta","dc-send-delta",1756149427));var handle_msg = cljs.core.partial.call(null,joint,new cljs.core.Keyword(null,"dc-handle-message","dc-handle-message",1755959266));dc.onopen = dc_send_delta;
dc.onmessage = handle_msg;
dc.opnclose = dc_send_delta;
return om.core.set_state_BANG_.call(null,owner,key,dc);
});
rtc.main.initdc = (function initdc(pc,owner,joint){var dc = pc.createDataChannel("sendDataChannel",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reliable","reliable",4761250748),true], null)));return rtc.main.data_channel_coord.call(null,dc,owner,joint,new cljs.core.Keyword(null,"sc","sc",1013907906));
});
rtc.main.r_candidate = (function r_candidate(pc,val){var jscandidate = cljs.core.clj__GT_js.call(null,val);var rdescript = (new RTCIceCandidate(jscandidate));return pc.addIceCandidate(rdescript);
});
rtc.main.r_offer = (function r_offer(pc,descr,pc_coord,data){var jsdescr = cljs.core.clj__GT_js.call(null,descr);var rtcdesc = (new RTCSessionDescription(jsdescr));pc.setRemoteDescription(rtcdesc);
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,data).call(null,new cljs.core.Keyword(null,"role","role",1017410536)),new cljs.core.Keyword(null,"joiner","joiner",4154342089)))
{return pc.createAnswer(((function (jsdescr,rtcdesc){
return (function (p1__16210_SHARP_){return cljs.core.async.put_BANG_.call(null,pc_coord,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localsend","localsend",4104582373),p1__16210_SHARP_], null));
});})(jsdescr,rtcdesc))
,((function (jsdescr,rtcdesc){
return (function (p1__16211_SHARP_){return cljs.core.print.call(null,p1__16211_SHARP_);
});})(jsdescr,rtcdesc))
,{});
} else
{return null;
}
});
rtc.main.pc_loop = (function pc_loop(owner,data){var pc_coord = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"pc-coord","pc-coord",1986842125));var webc = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"webc","webc",1017549569));var pc = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pc","pc",1013907813));var streamc = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"streamc","streamc",3426980949));var c__10282__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__,pc_coord,webc,pc,streamc){
return (function (){var f__10283__auto__ = (function (){var switch__10267__auto__ = ((function (c__10282__auto__,pc_coord,webc,pc,streamc){
return (function (state_16404){var state_val_16405 = (state_16404[1]);if((state_val_16405 === 1))
{var state_16404__$1 = state_16404;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16404__$1,2,pc_coord);
} else
{if((state_val_16405 === 2))
{var inst_16336 = (state_16404[7]);var inst_16336__$1 = (state_16404[2]);var inst_16337 = cljs.core.nth.call(null,inst_16336__$1,0,null);var inst_16338 = cljs.core.nth.call(null,inst_16336__$1,1,null);var inst_16339 = inst_16336__$1;var state_16404__$1 = (function (){var statearr_16406 = state_16404;(statearr_16406[8] = inst_16339);
(statearr_16406[9] = inst_16338);
(statearr_16406[10] = inst_16337);
(statearr_16406[7] = inst_16336__$1);
return statearr_16406;
})();var statearr_16407_16447 = state_16404__$1;(statearr_16407_16447[2] = null);
(statearr_16407_16447[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 3))
{var inst_16342 = (state_16404[11]);var inst_16339 = (state_16404[8]);var inst_16342__$1 = cljs.core.nth.call(null,inst_16339,0,null);var inst_16343 = cljs.core.nth.call(null,inst_16339,1,null);var state_16404__$1 = (function (){var statearr_16408 = state_16404;(statearr_16408[12] = inst_16343);
(statearr_16408[11] = inst_16342__$1);
return statearr_16408;
})();var G__16409_16448 = (((inst_16342__$1 instanceof cljs.core.Keyword))?inst_16342__$1.fqn:null);var caseval__16449;
switch (G__16409_16448){
case "r-offer":
(function (){var statearr_16410 = state_16404__$1;(statearr_16410[1] = 18);
return statearr_16410;
})()
break;
case "dc-send-delta":
(function (){var statearr_16411 = state_16404__$1;(statearr_16411[1] = 13);
return statearr_16411;
})()
break;
case "offer":
(function (){var statearr_16412 = state_16404__$1;(statearr_16412[1] = 16);
return statearr_16412;
})()
break;
case "ice":
(function (){var statearr_16413 = state_16404__$1;(statearr_16413[1] = 6);
return statearr_16413;
})()
break;
case "answer":
(function (){var statearr_16414 = state_16404__$1;(statearr_16414[1] = 15);
return statearr_16414;
})()
break;
case "remstr":
(function (){var statearr_16415 = state_16404__$1;(statearr_16415[1] = 11);
return statearr_16415;
})()
break;
case "r-candidate":
(function (){var statearr_16416 = state_16404__$1;(statearr_16416[1] = 17);
return statearr_16416;
})()
break;
case "ondc":
(function (){var statearr_16417 = state_16404__$1;(statearr_16417[1] = 12);
return statearr_16417;
})()
break;
case "addstr":
(function (){var statearr_16418 = state_16404__$1;(statearr_16418[1] = 10);
return statearr_16418;
})()
break;
case "dc-handle-message":
(function (){var statearr_16419 = state_16404__$1;(statearr_16419[1] = 14);
return statearr_16419;
})()
break;
case "localsend":
(function (){var statearr_16420 = state_16404__$1;(statearr_16420[1] = 19);
return statearr_16420;
})()
break;
default:
(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_16342__$1))))})()
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 4))
{var inst_16402 = (state_16404[2]);var state_16404__$1 = state_16404;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16404__$1,inst_16402);
} else
{if((state_val_16405 === 5))
{var inst_16397 = (state_16404[2]);var state_16404__$1 = (function (){var statearr_16421 = state_16404;(statearr_16421[13] = inst_16397);
return statearr_16421;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16404__$1,20,pc_coord);
} else
{if((state_val_16405 === 6))
{var inst_16343 = (state_16404[12]);var inst_16344 = inst_16343.candidate;var state_16404__$1 = state_16404;if(cljs.core.truth_(inst_16344))
{var statearr_16422_16450 = state_16404__$1;(statearr_16422_16450[1] = 7);
} else
{var statearr_16423_16451 = state_16404__$1;(statearr_16423_16451[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 7))
{var inst_16343 = (state_16404[12]);var inst_16346 = [new cljs.core.Keyword(null,"sdpMLineIndex","sdpMLineIndex",4496307298),new cljs.core.Keyword(null,"candidate","candidate",1522567413)];var inst_16347 = inst_16343.candidate;var inst_16348 = inst_16347.sdpMLineIndex;var inst_16349 = inst_16343.candidate;var inst_16350 = inst_16349.candidate;var inst_16351 = [inst_16348,inst_16350];var inst_16352 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16346,inst_16351);var inst_16353 = [new cljs.core.Keyword(null,"s-candidate","s-candidate",778418203),inst_16352];var inst_16354 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16353,null));var inst_16355 = cljs.core.async.put_BANG_.call(null,webc,inst_16354);var state_16404__$1 = state_16404;var statearr_16424_16452 = state_16404__$1;(statearr_16424_16452[2] = inst_16355);
(statearr_16424_16452[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 8))
{var state_16404__$1 = state_16404;var statearr_16425_16453 = state_16404__$1;(statearr_16425_16453[2] = null);
(statearr_16425_16453[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 9))
{var inst_16358 = (state_16404[2]);var state_16404__$1 = state_16404;var statearr_16426_16454 = state_16404__$1;(statearr_16426_16454[2] = inst_16358);
(statearr_16426_16454[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 10))
{var inst_16343 = (state_16404[12]);var inst_16360 = inst_16343.stream;var inst_16361 = [new cljs.core.Keyword(null,"remote","remote",4374260664),"rvid",inst_16360];var inst_16362 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16361,null));var inst_16363 = cljs.core.async.put_BANG_.call(null,streamc,inst_16362);var state_16404__$1 = state_16404;var statearr_16427_16455 = state_16404__$1;(statearr_16427_16455[2] = inst_16363);
(statearr_16427_16455[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 11))
{var inst_16343 = (state_16404[12]);var inst_16342 = (state_16404[11]);var inst_16365 = cljs.core.print.call(null,inst_16342,inst_16343);var state_16404__$1 = state_16404;var statearr_16428_16456 = state_16404__$1;(statearr_16428_16456[2] = inst_16365);
(statearr_16428_16456[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 12))
{var inst_16343 = (state_16404[12]);var inst_16342 = (state_16404[11]);var inst_16339 = (state_16404[8]);var inst_16336 = (state_16404[7]);var inst_16367 = inst_16343.channel;var inst_16368 = (function (){var vec__16341 = inst_16339;var val = inst_16343;var key = inst_16342;var vec__16334 = inst_16336;var G__16333 = inst_16339;return ((function (vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,inst_16367,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc){
return (function (p1__16212_SHARP_,p2__16213_SHARP_){return cljs.core.async.put_BANG_.call(null,pc_coord,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16212_SHARP_,p2__16213_SHARP_], null));
});
;})(vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,inst_16367,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc))
})();var inst_16369 = rtc.main.data_channel_coord.call(null,inst_16367,owner,inst_16368,new cljs.core.Keyword(null,"sc","sc",1013907906));var state_16404__$1 = state_16404;var statearr_16429_16457 = state_16404__$1;(statearr_16429_16457[2] = inst_16369);
(statearr_16429_16457[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 13))
{var inst_16343 = (state_16404[12]);var inst_16342 = (state_16404[11]);var inst_16371 = cljs.core.print.call(null,inst_16342,inst_16343);var state_16404__$1 = state_16404;var statearr_16430_16458 = state_16404__$1;(statearr_16430_16458[2] = inst_16371);
(statearr_16430_16458[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 14))
{var inst_16343 = (state_16404[12]);var inst_16342 = (state_16404[11]);var inst_16339 = (state_16404[8]);var inst_16336 = (state_16404[7]);var inst_16373 = (function (){var vec__16341 = inst_16339;var val = inst_16343;var key = inst_16342;var vec__16334 = inst_16336;var G__16333 = inst_16339;return ((function (vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc){
return (function (p1__16214_SHARP_){return cljs.core.conj.call(null,p1__16214_SHARP_,val.data);
});
;})(vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc))
})();var inst_16374 = om.core.update_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"msgs","msgs",1017265284),inst_16373);var state_16404__$1 = state_16404;var statearr_16431_16459 = state_16404__$1;(statearr_16431_16459[2] = inst_16374);
(statearr_16431_16459[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 15))
{var inst_16376 = cljs.core.print.call(null,"here's an answer case, johann");var state_16404__$1 = state_16404;var statearr_16432_16460 = state_16404__$1;(statearr_16432_16460[2] = inst_16376);
(statearr_16432_16460[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 16))
{var inst_16343 = (state_16404[12]);var inst_16342 = (state_16404[11]);var inst_16339 = (state_16404[8]);var inst_16336 = (state_16404[7]);var inst_16378 = (function (){var vec__16341 = inst_16339;var val = inst_16343;var key = inst_16342;var vec__16334 = inst_16336;var G__16333 = inst_16339;return ((function (vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc){
return (function (p1__16215_SHARP_){return cljs.core.async.put_BANG_.call(null,pc_coord,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"localsend","localsend",4104582373),p1__16215_SHARP_], null));
});
;})(vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc))
})();var inst_16379 = (function (){var vec__16341 = inst_16339;var val = inst_16343;var key = inst_16342;var vec__16334 = inst_16336;var G__16333 = inst_16339;return ((function (vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,inst_16378,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc){
return (function (p1__16216_SHARP_){return cljs.core.print.call(null,p1__16216_SHARP_);
});
;})(vec__16341,val,key,vec__16334,G__16333,inst_16343,inst_16342,inst_16339,inst_16336,inst_16378,state_val_16405,c__10282__auto__,pc_coord,webc,pc,streamc))
})();var inst_16380 = pc.createOffer(inst_16378,inst_16379,{});var state_16404__$1 = state_16404;var statearr_16433_16461 = state_16404__$1;(statearr_16433_16461[2] = inst_16380);
(statearr_16433_16461[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 17))
{var inst_16343 = (state_16404[12]);var inst_16382 = rtc.main.r_candidate.call(null,pc,inst_16343);var state_16404__$1 = state_16404;var statearr_16434_16462 = state_16404__$1;(statearr_16434_16462[2] = inst_16382);
(statearr_16434_16462[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 18))
{var inst_16343 = (state_16404[12]);var inst_16384 = rtc.main.r_offer.call(null,pc,inst_16343,pc_coord,data);var state_16404__$1 = state_16404;var statearr_16435_16463 = state_16404__$1;(statearr_16435_16463[2] = inst_16384);
(statearr_16435_16463[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 19))
{var inst_16343 = (state_16404[12]);var inst_16386 = [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"sdp","sdp",1014017969)];var inst_16387 = inst_16343.type;var inst_16388 = inst_16343.sdp;var inst_16389 = [inst_16387,inst_16388];var inst_16390 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_16386,inst_16389);var inst_16391 = [new cljs.core.Keyword(null,"s-offer","s-offer",1391575028),inst_16390];var inst_16392 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16391,null));var inst_16393 = cljs.core.async.put_BANG_.call(null,webc,inst_16392);var inst_16394 = pc.setLocalDescription(inst_16343);var state_16404__$1 = (function (){var statearr_16436 = state_16404;(statearr_16436[14] = inst_16393);
return statearr_16436;
})();var statearr_16437_16464 = state_16404__$1;(statearr_16437_16464[2] = inst_16394);
(statearr_16437_16464[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16405 === 20))
{var inst_16399 = (state_16404[2]);var inst_16339 = inst_16399;var state_16404__$1 = (function (){var statearr_16438 = state_16404;(statearr_16438[8] = inst_16339);
return statearr_16438;
})();var statearr_16439_16465 = state_16404__$1;(statearr_16439_16465[2] = null);
(statearr_16439_16465[1] = 3);
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
});})(c__10282__auto__,pc_coord,webc,pc,streamc))
;return ((function (switch__10267__auto__,c__10282__auto__,pc_coord,webc,pc,streamc){
return (function() {
var state_machine__10268__auto__ = null;
var state_machine__10268__auto____0 = (function (){var statearr_16443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16443[0] = state_machine__10268__auto__);
(statearr_16443[1] = 1);
return statearr_16443;
});
var state_machine__10268__auto____1 = (function (state_16404){while(true){
var ret_value__10269__auto__ = (function (){try{while(true){
var result__10270__auto__ = switch__10267__auto__.call(null,state_16404);if(cljs.core.keyword_identical_QMARK_.call(null,result__10270__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10270__auto__;
}
break;
}
}catch (e16444){if((e16444 instanceof Object))
{var ex__10271__auto__ = e16444;var statearr_16445_16466 = state_16404;(statearr_16445_16466[5] = ex__10271__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16404);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10269__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16467 = state_16404;
state_16404 = G__16467;
continue;
}
} else
{return ret_value__10269__auto__;
}
break;
}
});
state_machine__10268__auto__ = function(state_16404){
switch(arguments.length){
case 0:
return state_machine__10268__auto____0.call(this);
case 1:
return state_machine__10268__auto____1.call(this,state_16404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10268__auto____0;
state_machine__10268__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10268__auto____1;
return state_machine__10268__auto__;
})()
;})(switch__10267__auto__,c__10282__auto__,pc_coord,webc,pc,streamc))
})();var state__10284__auto__ = (function (){var statearr_16446 = f__10283__auto__.call(null);(statearr_16446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);
return statearr_16446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__,pc_coord,webc,pc,streamc))
);
return c__10282__auto__;
});
rtc.main.pc_coord = (function pc_coord(owner,data){var pc = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pc","pc",1013907813));var pc_coord__$1 = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"pc-coord","pc-coord",1986842125));var joint = ((function (pc,pc_coord__$1){
return (function (p1__16468_SHARP_,p2__16469_SHARP_){return cljs.core.async.put_BANG_.call(null,pc_coord__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16468_SHARP_,p2__16469_SHARP_], null));
});})(pc,pc_coord__$1))
;var ice = cljs.core.partial.call(null,joint,new cljs.core.Keyword(null,"ice","ice",1014008317));var addstr = cljs.core.partial.call(null,joint,new cljs.core.Keyword(null,"addstr","addstr",3886377314));var remstr = cljs.core.partial.call(null,joint,new cljs.core.Keyword(null,"remstr","remstr",4374264521));var ondc = cljs.core.partial.call(null,joint,new cljs.core.Keyword(null,"ondc","ondc",1017319952));pc.onicecandidate = ice;
pc.onaddstream = addstr;
pc.onremovestream = remstr;
var G__16471 = (((data.call(null,new cljs.core.Keyword(null,"role","role",1017410536)) instanceof cljs.core.Keyword))?data.call(null,new cljs.core.Keyword(null,"role","role",1017410536)).fqn:null);var caseval__16472;
switch (G__16471){
case "joiner":
caseval__16472=pc.ondatachannel = ondc
break;
case "initiator":
caseval__16472=rtc.main.initdc.call(null,pc,owner,joint)
break;
default:
caseval__16472=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data.call(null,new cljs.core.Keyword(null,"role","role",1017410536))))))})()
}
return caseval__16472;
});
rtc.main.pc = (function pc(owner,data){rtc.main.pc_coord.call(null,owner,data);
return rtc.main.pc_loop.call(null,owner,data);
});
rtc.main.dcsend = (function dcsend(owner){var sc = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sc","sc",1013907906));var node = om.core.get_node.call(null,owner,"dc");var val = node.value;return sc.send(val);
});
var ufv___16491 = schema.utils.use_fn_validation;var output_schema16474_16492 = schema.core.Any;var input_schema16475_16493 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",-1637113383,null))], null);var input_checker16476_16494 = schema.core.checker.call(null,input_schema16475_16493);var output_checker16477_16495 = schema.core.checker.call(null,output_schema16474_16492);/**
* Inputs: [data owner opts]
*/
rtc.main.final_rtc = ((function (ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function final_rtc(G__16478,G__16479,G__16480){var validate__7247__auto__ = ufv___16491.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___16496 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16478,G__16479,G__16480], null);var temp__4092__auto___16497 = input_checker16476_16494.call(null,args__7248__auto___16496);if(cljs.core.truth_(temp__4092__auto___16497))
{var error__7249__auto___16498 = temp__4092__auto___16497;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"final-rtc","final-rtc",-1286422717,null),cljs.core.pr_str.call(null,error__7249__auto___16498)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16498,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema16475_16493,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___16496], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var data = G__16478;var owner = G__16479;var opts = G__16480;while(true){
if(typeof rtc.main.t16486 !== 'undefined')
{} else
{
/**
* @constructor
*/
rtc.main.t16486 = (function (G__16479,opts,G__16478,input_schema16475,output_schema16474,ufv__,data,validate__7247__auto__,input_checker16476,final_rtc,G__16480,owner,output_checker16477,meta16487){
this.G__16479 = G__16479;
this.opts = opts;
this.G__16478 = G__16478;
this.input_schema16475 = input_schema16475;
this.output_schema16474 = output_schema16474;
this.ufv__ = ufv__;
this.data = data;
this.validate__7247__auto__ = validate__7247__auto__;
this.input_checker16476 = input_checker16476;
this.final_rtc = final_rtc;
this.G__16480 = G__16480;
this.owner = owner;
this.output_checker16477 = output_checker16477;
this.meta16487 = meta16487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rtc.main.t16486.cljs$lang$type = true;
rtc.main.t16486.cljs$lang$ctorStr = "rtc.main/t16486";
rtc.main.t16486.cljs$lang$ctorPrWriter = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"rtc.main/t16486");
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
rtc.main.t16486.prototype.om$core$IRenderState$ = true;
rtc.main.t16486.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (_,p__16489){var self__ = this;
var map__16490 = p__16489;var map__16490__$1 = ((cljs.core.seq_QMARK_.call(null,map__16490))?cljs.core.apply.call(null,cljs.core.hash_map,map__16490):map__16490);var msgs = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"msgs","msgs",1017265284));var sc = cljs.core.get.call(null,map__16490__$1,new cljs.core.Keyword(null,"sc","sc",1013907906));var ___$1 = this;var webc = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"webc","webc",1017549569));return cljs.core.apply.call(null,React.DOM.div,{"className": "full flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(sc)?om_tools.dom.element.call(null,React.DOM.div,om.dom.input.call(null,{"ref": "dc", "type": "text"}),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (webc,___$1,map__16490,map__16490__$1,msgs,sc,validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (){return rtc.main.dcsend.call(null,self__.owner);
});})(webc,___$1,map__16490,map__16490__$1,msgs,sc,validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
},"america"),om_tools.dom.element.call(null,React.DOM.div,cljs.core.map.call(null,((function (webc,___$1,map__16490,map__16490__$1,msgs,sc,validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (msg){return om_tools.dom.element.call(null,React.DOM.div,msg,cljs.core.PersistentVector.EMPTY);
});})(webc,___$1,map__16490,map__16490__$1,msgs,sc,validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
,msgs),cljs.core.PersistentVector.EMPTY)],null))):null),React.DOM.video({"ref": "lvid"}),React.DOM.video({"ref": "rvid"})],null))));
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
rtc.main.t16486.prototype.om$core$IWillMount$ = true;
rtc.main.t16486.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (_){var self__ = this;
var ___$1 = this;var streamc = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"streamc","streamc",3426980949));rtc.main.pc.call(null,self__.owner,self__.data);
return rtc.main.vid_loop.call(null,self__.owner,self__.data,streamc);
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
rtc.main.t16486.prototype.om$core$IInitState$ = true;
rtc.main.t16486.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (_){var self__ = this;
var ___$1 = this;var pc_config = ((cljs.core._EQ_.call(null,"firefox",webrtcDetectedBrowser))?{"iceServers": [{"url": "stun:23.21.150.121"}]}:{"iceServers": [{"url": "stun:stun.l.google.com:19302"}]});var pc_constants = {"optional": [{"DtlsSrtpKeyAgreement": true}]};var pc = RTCPeerConnection(pc_config,pc_constants);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc","pc",1013907813),pc,new cljs.core.Keyword(null,"msgs","msgs",1017265284),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"streamc","streamc",3426980949),cljs.core.async.chan.call(null)], null);
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
rtc.main.t16486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (_16488){var self__ = this;
var _16488__$1 = this;return self__.meta16487;
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
rtc.main.t16486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function (_16488,meta16487__$1){var self__ = this;
var _16488__$1 = this;return (new rtc.main.t16486(self__.G__16479,self__.opts,self__.G__16478,self__.input_schema16475,self__.output_schema16474,self__.ufv__,self__.data,self__.validate__7247__auto__,self__.input_checker16476,self__.final_rtc,self__.G__16480,self__.owner,self__.output_checker16477,meta16487__$1));
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
rtc.main.__GT_t16486 = ((function (validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495){
return (function __GT_t16486(G__16479__$1,opts__$1,G__16478__$1,input_schema16475__$1,output_schema16474__$1,ufv____$1,data__$1,validate__7247__auto____$1,input_checker16476__$1,final_rtc__$1,G__16480__$1,owner__$1,output_checker16477__$1,meta16487){return (new rtc.main.t16486(G__16479__$1,opts__$1,G__16478__$1,input_schema16475__$1,output_schema16474__$1,ufv____$1,data__$1,validate__7247__auto____$1,input_checker16476__$1,final_rtc__$1,G__16480__$1,owner__$1,output_checker16477__$1,meta16487));
});})(validate__7247__auto__,ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
}
return (new rtc.main.t16486(G__16479,opts,G__16478,input_schema16475_16493,output_schema16474_16492,ufv___16491,data,validate__7247__auto__,input_checker16476_16494,final_rtc,G__16480,owner,output_checker16477_16495,null));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___16499 = output_checker16477_16495.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___16499))
{var error__7249__auto___16500 = temp__4092__auto___16499;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"final-rtc","final-rtc",-1286422717,null),cljs.core.pr_str.call(null,error__7249__auto___16500)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16500,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema16474_16492,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___16491,output_schema16474_16492,input_schema16475_16493,input_checker16476_16494,output_checker16477_16495))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,rtc.main.final_rtc),schema.core.make_fn_schema.call(null,output_schema16474_16492,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16475_16493], null)));
rtc.main.__GT_final_rtc = (function() {
var __GT_final_rtc = null;
var __GT_final_rtc__1 = (function (cursor__9015__auto__){return om.core.build.call(null,rtc.main.final_rtc,cursor__9015__auto__);
});
var __GT_final_rtc__2 = (function (cursor__9015__auto__,m16473){return om.core.build.call(null,rtc.main.final_rtc,cursor__9015__auto__,m16473);
});
__GT_final_rtc = function(cursor__9015__auto__,m16473){
switch(arguments.length){
case 1:
return __GT_final_rtc__1.call(this,cursor__9015__auto__);
case 2:
return __GT_final_rtc__2.call(this,cursor__9015__auto__,m16473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_final_rtc.cljs$core$IFn$_invoke$arity$1 = __GT_final_rtc__1;
__GT_final_rtc.cljs$core$IFn$_invoke$arity$2 = __GT_final_rtc__2;
return __GT_final_rtc;
})()
;
rtc.main.set_room = (function set_room(data,owner){var node = om.core.get_node.call(null,owner,"room");var node_val = node.value;return om.core.update_BANG_.call(null,data,new cljs.core.Keyword(null,"room","room",1017410637),node_val);
});
var ufv___16523 = schema.utils.use_fn_validation;var output_schema16502_16524 = schema.core.Any;var input_schema16503_16525 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",-1637113383,null))], null);var input_checker16504_16526 = schema.core.checker.call(null,input_schema16503_16525);var output_checker16505_16527 = schema.core.checker.call(null,output_schema16502_16524);/**
* Inputs: [{:keys [role], :as data} owner opts]
*/
rtc.main.room_space = ((function (ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function room_space(G__16506,G__16507,G__16508){var validate__7247__auto__ = ufv___16523.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___16528 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16506,G__16507,G__16508], null);var temp__4092__auto___16529 = input_checker16504_16526.call(null,args__7248__auto___16528);if(cljs.core.truth_(temp__4092__auto___16529))
{var error__7249__auto___16530 = temp__4092__auto___16529;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"room-space","room-space",-1802195123,null),cljs.core.pr_str.call(null,error__7249__auto___16530)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16530,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema16503_16525,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___16528], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var G__16517 = G__16506;var map__16518 = G__16517;var map__16518__$1 = ((cljs.core.seq_QMARK_.call(null,map__16518))?cljs.core.apply.call(null,cljs.core.hash_map,map__16518):map__16518);var data = map__16518__$1;var role = cljs.core.get.call(null,map__16518__$1,new cljs.core.Keyword(null,"role","role",1017410536));var owner = G__16507;var opts = G__16508;var G__16517__$1 = G__16517;var owner__$1 = owner;var opts__$1 = opts;while(true){
var map__16519 = G__16517__$1;var map__16519__$1 = ((cljs.core.seq_QMARK_.call(null,map__16519))?cljs.core.apply.call(null,cljs.core.hash_map,map__16519):map__16519);var data__$1 = map__16519__$1;var role__$1 = cljs.core.get.call(null,map__16519__$1,new cljs.core.Keyword(null,"role","role",1017410536));var owner__$2 = owner__$1;var opts__$2 = opts__$1;if(typeof rtc.main.t16520 !== 'undefined')
{} else
{
/**
* @constructor
*/
rtc.main.t16520 = (function (role,opts,G__16517,map__16518,ufv__,data,validate__7247__auto__,room_space,input_schema16503,G__16506,input_checker16504,G__16508,G__16507,owner,output_schema16502,output_checker16505,map__16519,meta16521){
this.role = role;
this.opts = opts;
this.G__16517 = G__16517;
this.map__16518 = map__16518;
this.ufv__ = ufv__;
this.data = data;
this.validate__7247__auto__ = validate__7247__auto__;
this.room_space = room_space;
this.input_schema16503 = input_schema16503;
this.G__16506 = G__16506;
this.input_checker16504 = input_checker16504;
this.G__16508 = G__16508;
this.G__16507 = G__16507;
this.owner = owner;
this.output_schema16502 = output_schema16502;
this.output_checker16505 = output_checker16505;
this.map__16519 = map__16519;
this.meta16521 = meta16521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rtc.main.t16520.cljs$lang$type = true;
rtc.main.t16520.cljs$lang$ctorStr = "rtc.main/t16520";
rtc.main.t16520.cljs$lang$ctorPrWriter = ((function (map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"rtc.main/t16520");
});})(map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
;
rtc.main.t16520.prototype.om$core$IRenderState$ = true;
rtc.main.t16520.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var webc = om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"webc","webc",1017549569));return cljs.core.apply.call(null,React.DOM.div,{"className": "full flex"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,self__.role,new cljs.core.Keyword(null,"joiner","joiner",4154342089)))?React.DOM.button({"onClick": ((function (webc,___$2,map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function (){return cljs.core.async.put_BANG_.call(null,webc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connect","connect",1965255772)], null));
});})(webc,___$2,map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
},"start"):null),(cljs.core.truth_(self__.data.call(null,new cljs.core.Keyword(null,"role","role",1017410536)))?om.core.build.call(null,rtc.main.final_rtc,self__.data):null)],null))));
});})(map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
;
rtc.main.t16520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function (_16522){var self__ = this;
var _16522__$1 = this;return self__.meta16521;
});})(map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
;
rtc.main.t16520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function (_16522,meta16521__$1){var self__ = this;
var _16522__$1 = this;return (new rtc.main.t16520(self__.role,self__.opts,self__.G__16517,self__.map__16518,self__.ufv__,self__.data,self__.validate__7247__auto__,self__.room_space,self__.input_schema16503,self__.G__16506,self__.input_checker16504,self__.G__16508,self__.G__16507,self__.owner,self__.output_schema16502,self__.output_checker16505,self__.map__16519,meta16521__$1));
});})(map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
;
rtc.main.__GT_t16520 = ((function (map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527){
return (function __GT_t16520(role__$2,opts__$3,G__16517__$2,map__16518__$2,ufv____$1,data__$2,validate__7247__auto____$1,room_space__$1,input_schema16503__$1,G__16506__$1,input_checker16504__$1,G__16508__$1,G__16507__$1,owner__$3,output_schema16502__$1,output_checker16505__$1,map__16519__$2,meta16521){return (new rtc.main.t16520(role__$2,opts__$3,G__16517__$2,map__16518__$2,ufv____$1,data__$2,validate__7247__auto____$1,room_space__$1,input_schema16503__$1,G__16506__$1,input_checker16504__$1,G__16508__$1,G__16507__$1,owner__$3,output_schema16502__$1,output_checker16505__$1,map__16519__$2,meta16521));
});})(map__16519,map__16519__$1,data__$1,role__$1,owner__$2,opts__$2,G__16517,map__16518,map__16518__$1,data,role,owner,opts,validate__7247__auto__,ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
;
}
return (new rtc.main.t16520(role__$1,opts__$2,G__16517__$1,map__16518__$1,ufv___16523,data__$1,validate__7247__auto__,room_space,input_schema16503_16525,G__16506,input_checker16504_16526,G__16508,G__16507,owner__$2,output_schema16502_16524,output_checker16505_16527,map__16519__$1,null));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___16531 = output_checker16505_16527.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___16531))
{var error__7249__auto___16532 = temp__4092__auto___16531;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"room-space","room-space",-1802195123,null),cljs.core.pr_str.call(null,error__7249__auto___16532)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16532,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema16502_16524,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___16523,output_schema16502_16524,input_schema16503_16525,input_checker16504_16526,output_checker16505_16527))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,rtc.main.room_space),schema.core.make_fn_schema.call(null,output_schema16502_16524,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16503_16525], null)));
rtc.main.__GT_room_space = (function() {
var __GT_room_space = null;
var __GT_room_space__1 = (function (cursor__9015__auto__){return om.core.build.call(null,rtc.main.room_space,cursor__9015__auto__);
});
var __GT_room_space__2 = (function (cursor__9015__auto__,m16501){return om.core.build.call(null,rtc.main.room_space,cursor__9015__auto__,m16501);
});
__GT_room_space = function(cursor__9015__auto__,m16501){
switch(arguments.length){
case 1:
return __GT_room_space__1.call(this,cursor__9015__auto__);
case 2:
return __GT_room_space__2.call(this,cursor__9015__auto__,m16501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_room_space.cljs$core$IFn$_invoke$arity$1 = __GT_room_space__1;
__GT_room_space.cljs$core$IFn$_invoke$arity$2 = __GT_room_space__2;
return __GT_room_space;
})()
;
var ufv___16546 = schema.utils.use_fn_validation;var output_schema16534_16547 = schema.core.Any;var input_schema16535_16548 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker16536_16549 = schema.core.checker.call(null,input_schema16535_16548);var output_checker16537_16550 = schema.core.checker.call(null,output_schema16534_16547);/**
* Inputs: [data owner]
*/
rtc.main.app_view = ((function (ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550){
return (function app_view(G__16538,G__16539){var validate__7247__auto__ = ufv___16546.get_cell();if(cljs.core.truth_(validate__7247__auto__))
{var args__7248__auto___16551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16538,G__16539], null);var temp__4092__auto___16552 = input_checker16536_16549.call(null,args__7248__auto___16551);if(cljs.core.truth_(temp__4092__auto___16552))
{var error__7249__auto___16553 = temp__4092__auto___16552;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app-view","app-view",-518813558,null),cljs.core.pr_str.call(null,error__7249__auto___16553)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16553,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema16535_16548,new cljs.core.Keyword(null,"value","value",1125876963),args__7248__auto___16551], null));
} else
{}
} else
{}
var o__7250__auto__ = (function (){var data = G__16538;var owner = G__16539;while(true){
if(typeof rtc.main.t16543 !== 'undefined')
{} else
{
/**
* @constructor
*/
rtc.main.t16543 = (function (input_checker16536,output_checker16537,ufv__,data,validate__7247__auto__,output_schema16534,G__16538,input_schema16535,G__16539,owner,app_view,meta16544){
this.input_checker16536 = input_checker16536;
this.output_checker16537 = output_checker16537;
this.ufv__ = ufv__;
this.data = data;
this.validate__7247__auto__ = validate__7247__auto__;
this.output_schema16534 = output_schema16534;
this.G__16538 = G__16538;
this.input_schema16535 = input_schema16535;
this.G__16539 = G__16539;
this.owner = owner;
this.app_view = app_view;
this.meta16544 = meta16544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
rtc.main.t16543.cljs$lang$type = true;
rtc.main.t16543.cljs$lang$ctorStr = "rtc.main/t16543";
rtc.main.t16543.cljs$lang$ctorPrWriter = ((function (validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"rtc.main/t16543");
});})(validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550))
;
rtc.main.t16543.prototype.om$core$IRenderState$ = true;
rtc.main.t16543.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return om.core.build.call(null,rtc.messaging.websock,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child","child",1108535438),rtc.main.room_space], null)], null));
});})(validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550))
;
rtc.main.t16543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550){
return (function (_16545){var self__ = this;
var _16545__$1 = this;return self__.meta16544;
});})(validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550))
;
rtc.main.t16543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550){
return (function (_16545,meta16544__$1){var self__ = this;
var _16545__$1 = this;return (new rtc.main.t16543(self__.input_checker16536,self__.output_checker16537,self__.ufv__,self__.data,self__.validate__7247__auto__,self__.output_schema16534,self__.G__16538,self__.input_schema16535,self__.G__16539,self__.owner,self__.app_view,meta16544__$1));
});})(validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550))
;
rtc.main.__GT_t16543 = ((function (validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550){
return (function __GT_t16543(input_checker16536__$1,output_checker16537__$1,ufv____$1,data__$1,validate__7247__auto____$1,output_schema16534__$1,G__16538__$1,input_schema16535__$1,G__16539__$1,owner__$1,app_view__$1,meta16544){return (new rtc.main.t16543(input_checker16536__$1,output_checker16537__$1,ufv____$1,data__$1,validate__7247__auto____$1,output_schema16534__$1,G__16538__$1,input_schema16535__$1,G__16539__$1,owner__$1,app_view__$1,meta16544));
});})(validate__7247__auto__,ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550))
;
}
return (new rtc.main.t16543(input_checker16536_16549,output_checker16537_16550,ufv___16546,data,validate__7247__auto__,output_schema16534_16547,G__16538,input_schema16535_16548,G__16539,owner,app_view,null));
break;
}
})();if(cljs.core.truth_(validate__7247__auto__))
{var temp__4092__auto___16554 = output_checker16537_16550.call(null,o__7250__auto__);if(cljs.core.truth_(temp__4092__auto___16554))
{var error__7249__auto___16555 = temp__4092__auto___16554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app-view","app-view",-518813558,null),cljs.core.pr_str.call(null,error__7249__auto___16555)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__7249__auto___16555,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema16534_16547,new cljs.core.Keyword(null,"value","value",1125876963),o__7250__auto__], null));
} else
{}
} else
{}
return o__7250__auto__;
});})(ufv___16546,output_schema16534_16547,input_schema16535_16548,input_checker16536_16549,output_checker16537_16550))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,rtc.main.app_view),schema.core.make_fn_schema.call(null,output_schema16534_16547,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16535_16548], null)));
rtc.main.__GT_app_view = (function() {
var __GT_app_view = null;
var __GT_app_view__1 = (function (cursor__9015__auto__){return om.core.build.call(null,rtc.main.app_view,cursor__9015__auto__);
});
var __GT_app_view__2 = (function (cursor__9015__auto__,m16533){return om.core.build.call(null,rtc.main.app_view,cursor__9015__auto__,m16533);
});
__GT_app_view = function(cursor__9015__auto__,m16533){
switch(arguments.length){
case 1:
return __GT_app_view__1.call(this,cursor__9015__auto__);
case 2:
return __GT_app_view__2.call(this,cursor__9015__auto__,m16533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app_view.cljs$core$IFn$_invoke$arity$1 = __GT_app_view__1;
__GT_app_view.cljs$core$IFn$_invoke$arity$2 = __GT_app_view__2;
return __GT_app_view;
})()
;
om.core.root.call(null,rtc.main.app_view,rtc.main.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",4427965699),goog.dom.getElement("app"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (p1__16556_SHARP_){return cljs.core.print.call(null,p1__16556_SHARP_);
}),new cljs.core.Keyword(null,"shared","shared",4405305303),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vidc","vidc",1017523684),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"pc-coord","pc-coord",1986842125),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"webc","webc",1017549569),cljs.core.async.chan.call(null)], null)], null));

//# sourceMappingURL=main.js.map