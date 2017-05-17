// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19563){
var map__19588 = p__19563;
var map__19588__$1 = ((((!((map__19588 == null)))?((((map__19588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19588):map__19588);
var m = map__19588__$1;
var n = cljs.core.get.call(null,map__19588__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19590_19612 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19591_19613 = null;
var count__19592_19614 = (0);
var i__19593_19615 = (0);
while(true){
if((i__19593_19615 < count__19592_19614)){
var f_19616 = cljs.core._nth.call(null,chunk__19591_19613,i__19593_19615);
cljs.core.println.call(null,"  ",f_19616);

var G__19617 = seq__19590_19612;
var G__19618 = chunk__19591_19613;
var G__19619 = count__19592_19614;
var G__19620 = (i__19593_19615 + (1));
seq__19590_19612 = G__19617;
chunk__19591_19613 = G__19618;
count__19592_19614 = G__19619;
i__19593_19615 = G__19620;
continue;
} else {
var temp__4425__auto___19621 = cljs.core.seq.call(null,seq__19590_19612);
if(temp__4425__auto___19621){
var seq__19590_19622__$1 = temp__4425__auto___19621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19590_19622__$1)){
var c__18304__auto___19623 = cljs.core.chunk_first.call(null,seq__19590_19622__$1);
var G__19624 = cljs.core.chunk_rest.call(null,seq__19590_19622__$1);
var G__19625 = c__18304__auto___19623;
var G__19626 = cljs.core.count.call(null,c__18304__auto___19623);
var G__19627 = (0);
seq__19590_19612 = G__19624;
chunk__19591_19613 = G__19625;
count__19592_19614 = G__19626;
i__19593_19615 = G__19627;
continue;
} else {
var f_19628 = cljs.core.first.call(null,seq__19590_19622__$1);
cljs.core.println.call(null,"  ",f_19628);

var G__19629 = cljs.core.next.call(null,seq__19590_19622__$1);
var G__19630 = null;
var G__19631 = (0);
var G__19632 = (0);
seq__19590_19612 = G__19629;
chunk__19591_19613 = G__19630;
count__19592_19614 = G__19631;
i__19593_19615 = G__19632;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19633 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17493__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19633);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19633)))?cljs.core.second.call(null,arglists_19633):arglists_19633));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19594_19634 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19595_19635 = null;
var count__19596_19636 = (0);
var i__19597_19637 = (0);
while(true){
if((i__19597_19637 < count__19596_19636)){
var vec__19598_19638 = cljs.core._nth.call(null,chunk__19595_19635,i__19597_19637);
var name_19639 = cljs.core.nth.call(null,vec__19598_19638,(0),null);
var map__19601_19640 = cljs.core.nth.call(null,vec__19598_19638,(1),null);
var map__19601_19641__$1 = ((((!((map__19601_19640 == null)))?((((map__19601_19640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19601_19640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19601_19640):map__19601_19640);
var doc_19642 = cljs.core.get.call(null,map__19601_19641__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19643 = cljs.core.get.call(null,map__19601_19641__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19639);

cljs.core.println.call(null," ",arglists_19643);

if(cljs.core.truth_(doc_19642)){
cljs.core.println.call(null," ",doc_19642);
} else {
}

var G__19644 = seq__19594_19634;
var G__19645 = chunk__19595_19635;
var G__19646 = count__19596_19636;
var G__19647 = (i__19597_19637 + (1));
seq__19594_19634 = G__19644;
chunk__19595_19635 = G__19645;
count__19596_19636 = G__19646;
i__19597_19637 = G__19647;
continue;
} else {
var temp__4425__auto___19648 = cljs.core.seq.call(null,seq__19594_19634);
if(temp__4425__auto___19648){
var seq__19594_19649__$1 = temp__4425__auto___19648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19594_19649__$1)){
var c__18304__auto___19650 = cljs.core.chunk_first.call(null,seq__19594_19649__$1);
var G__19651 = cljs.core.chunk_rest.call(null,seq__19594_19649__$1);
var G__19652 = c__18304__auto___19650;
var G__19653 = cljs.core.count.call(null,c__18304__auto___19650);
var G__19654 = (0);
seq__19594_19634 = G__19651;
chunk__19595_19635 = G__19652;
count__19596_19636 = G__19653;
i__19597_19637 = G__19654;
continue;
} else {
var vec__19603_19655 = cljs.core.first.call(null,seq__19594_19649__$1);
var name_19656 = cljs.core.nth.call(null,vec__19603_19655,(0),null);
var map__19606_19657 = cljs.core.nth.call(null,vec__19603_19655,(1),null);
var map__19606_19658__$1 = ((((!((map__19606_19657 == null)))?((((map__19606_19657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19606_19657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19606_19657):map__19606_19657);
var doc_19659 = cljs.core.get.call(null,map__19606_19658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19660 = cljs.core.get.call(null,map__19606_19658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19656);

cljs.core.println.call(null," ",arglists_19660);

if(cljs.core.truth_(doc_19659)){
cljs.core.println.call(null," ",doc_19659);
} else {
}

var G__19661 = cljs.core.next.call(null,seq__19594_19649__$1);
var G__19662 = null;
var G__19663 = (0);
var G__19664 = (0);
seq__19594_19634 = G__19661;
chunk__19595_19635 = G__19662;
count__19596_19636 = G__19663;
i__19597_19637 = G__19664;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__19588,map__19588__$1,m,n,nm){
return (function (p__19608){
var vec__19609 = p__19608;
var role = cljs.core.nth.call(null,vec__19609,(0),null);
var spec = cljs.core.nth.call(null,vec__19609,(1),null);
if(cljs.core.truth_((function (){var and__17481__auto__ = spec;
if(cljs.core.truth_(and__17481__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__17481__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__19588,map__19588__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map