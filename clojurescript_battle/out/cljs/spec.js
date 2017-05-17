// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'coll'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (100);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__18156__auto__ = (((spec == null))?null:spec);
var m__18157__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__18156__auto__)]);
if(!((m__18157__auto__ == null))){
return m__18157__auto__.call(null,spec,x);
} else {
var m__18157__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__18157__auto____$1 == null))){
return m__18157__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__18156__auto__ = (((spec == null))?null:spec);
var m__18157__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__18156__auto__)]);
if(!((m__18157__auto__ == null))){
return m__18157__auto__.call(null,spec,path,via,in$,x);
} else {
var m__18157__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__18157__auto____$1 == null))){
return m__18157__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__18156__auto__ = (((spec == null))?null:spec);
var m__18157__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__18156__auto__)]);
if(!((m__18157__auto__ == null))){
return m__18157__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__18157__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__18157__auto____$1 == null))){
return m__18157__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__18156__auto__ = (((spec == null))?null:spec);
var m__18157__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__18156__auto__)]);
if(!((m__18157__auto__ == null))){
return m__18157__auto__.call(null,spec,gfn);
} else {
var m__18157__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__18157__auto____$1 == null))){
return m__18157__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__18156__auto__ = (((spec == null))?null:spec);
var m__18157__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__18156__auto__)]);
if(!((m__18157__auto__ == null))){
return m__18157__auto__.call(null,spec);
} else {
var m__18157__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__18157__auto____$1 == null))){
return m__18157__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__19671 = cljs.core.get.call(null,reg,spec);
spec = G__19671;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__17481__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__17481__auto__){
return x;
} else {
return and__17481__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__17481__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__17481__auto__)){
return x;
} else {
return and__17481__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__17493__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
var or__17493__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__17493__auto____$1)){
return or__17493__auto____$1;
} else {
var or__17493__auto____$2 = (function (){var and__17481__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__17481__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__17481__auto__;
}
})();
if(cljs.core.truth_(or__17493__auto____$2)){
return or__17493__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__17493__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__17493__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__17481__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__17481__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__17481__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__17481__auto__ = (form instanceof cljs.core.Symbol);
if(and__17481__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__17481__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4425__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4425__auto__)){
var probs = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__18479__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19722_19768 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19723_19769 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19722_19768,_STAR_print_fn_STAR_19723_19769,sb__18479__auto__){
return (function (x__18480__auto__){
return sb__18479__auto__.append(x__18480__auto__);
});})(_STAR_print_newline_STAR_19722_19768,_STAR_print_fn_STAR_19723_19769,sb__18479__auto__))
;

try{var seq__19724_19770 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__19725_19771 = null;
var count__19726_19772 = (0);
var i__19727_19773 = (0);
while(true){
if((i__19727_19773 < count__19726_19772)){
var vec__19728_19774 = cljs.core._nth.call(null,chunk__19725_19771,i__19727_19773);
var path_19775 = cljs.core.nth.call(null,vec__19728_19774,(0),null);
var map__19731_19776 = cljs.core.nth.call(null,vec__19728_19774,(1),null);
var map__19731_19777__$1 = ((((!((map__19731_19776 == null)))?((((map__19731_19776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19731_19776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19731_19776):map__19731_19776);
var prob_19778 = map__19731_19777__$1;
var pred_19779 = cljs.core.get.call(null,map__19731_19777__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_19780 = cljs.core.get.call(null,map__19731_19777__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_19781 = cljs.core.get.call(null,map__19731_19777__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_19782 = cljs.core.get.call(null,map__19731_19777__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_19783 = cljs.core.get.call(null,map__19731_19777__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_19783)){
} else {
cljs.core.print.call(null,"In:",in_19783,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_19780);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_19782)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_19782));
}

if(cljs.core.empty_QMARK_.call(null,path_19775)){
} else {
cljs.core.print.call(null," at:",path_19775);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_19779);

if(cljs.core.truth_(reason_19781)){
cljs.core.print.call(null,", ",reason_19781);
} else {
}

var seq__19733_19784 = cljs.core.seq.call(null,prob_19778);
var chunk__19734_19785 = null;
var count__19735_19786 = (0);
var i__19736_19787 = (0);
while(true){
if((i__19736_19787 < count__19735_19786)){
var vec__19737_19788 = cljs.core._nth.call(null,chunk__19734_19785,i__19736_19787);
var k_19789 = cljs.core.nth.call(null,vec__19737_19788,(0),null);
var v_19790 = cljs.core.nth.call(null,vec__19737_19788,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_19789))){
} else {
cljs.core.print.call(null,"\n\t",k_19789," ");

cljs.core.pr.call(null,v_19790);
}

var G__19791 = seq__19733_19784;
var G__19792 = chunk__19734_19785;
var G__19793 = count__19735_19786;
var G__19794 = (i__19736_19787 + (1));
seq__19733_19784 = G__19791;
chunk__19734_19785 = G__19792;
count__19735_19786 = G__19793;
i__19736_19787 = G__19794;
continue;
} else {
var temp__4425__auto___19795 = cljs.core.seq.call(null,seq__19733_19784);
if(temp__4425__auto___19795){
var seq__19733_19796__$1 = temp__4425__auto___19795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19733_19796__$1)){
var c__18304__auto___19797 = cljs.core.chunk_first.call(null,seq__19733_19796__$1);
var G__19798 = cljs.core.chunk_rest.call(null,seq__19733_19796__$1);
var G__19799 = c__18304__auto___19797;
var G__19800 = cljs.core.count.call(null,c__18304__auto___19797);
var G__19801 = (0);
seq__19733_19784 = G__19798;
chunk__19734_19785 = G__19799;
count__19735_19786 = G__19800;
i__19736_19787 = G__19801;
continue;
} else {
var vec__19740_19802 = cljs.core.first.call(null,seq__19733_19796__$1);
var k_19803 = cljs.core.nth.call(null,vec__19740_19802,(0),null);
var v_19804 = cljs.core.nth.call(null,vec__19740_19802,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_19803))){
} else {
cljs.core.print.call(null,"\n\t",k_19803," ");

cljs.core.pr.call(null,v_19804);
}

var G__19805 = cljs.core.next.call(null,seq__19733_19796__$1);
var G__19806 = null;
var G__19807 = (0);
var G__19808 = (0);
seq__19733_19784 = G__19805;
chunk__19734_19785 = G__19806;
count__19735_19786 = G__19807;
i__19736_19787 = G__19808;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__19809 = seq__19724_19770;
var G__19810 = chunk__19725_19771;
var G__19811 = count__19726_19772;
var G__19812 = (i__19727_19773 + (1));
seq__19724_19770 = G__19809;
chunk__19725_19771 = G__19810;
count__19726_19772 = G__19811;
i__19727_19773 = G__19812;
continue;
} else {
var temp__4425__auto___19813 = cljs.core.seq.call(null,seq__19724_19770);
if(temp__4425__auto___19813){
var seq__19724_19814__$1 = temp__4425__auto___19813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19724_19814__$1)){
var c__18304__auto___19815 = cljs.core.chunk_first.call(null,seq__19724_19814__$1);
var G__19816 = cljs.core.chunk_rest.call(null,seq__19724_19814__$1);
var G__19817 = c__18304__auto___19815;
var G__19818 = cljs.core.count.call(null,c__18304__auto___19815);
var G__19819 = (0);
seq__19724_19770 = G__19816;
chunk__19725_19771 = G__19817;
count__19726_19772 = G__19818;
i__19727_19773 = G__19819;
continue;
} else {
var vec__19743_19820 = cljs.core.first.call(null,seq__19724_19814__$1);
var path_19821 = cljs.core.nth.call(null,vec__19743_19820,(0),null);
var map__19746_19822 = cljs.core.nth.call(null,vec__19743_19820,(1),null);
var map__19746_19823__$1 = ((((!((map__19746_19822 == null)))?((((map__19746_19822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19746_19822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19746_19822):map__19746_19822);
var prob_19824 = map__19746_19823__$1;
var pred_19825 = cljs.core.get.call(null,map__19746_19823__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_19826 = cljs.core.get.call(null,map__19746_19823__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_19827 = cljs.core.get.call(null,map__19746_19823__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_19828 = cljs.core.get.call(null,map__19746_19823__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_19829 = cljs.core.get.call(null,map__19746_19823__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_19829)){
} else {
cljs.core.print.call(null,"In:",in_19829,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_19826);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_19828)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_19828));
}

if(cljs.core.empty_QMARK_.call(null,path_19821)){
} else {
cljs.core.print.call(null," at:",path_19821);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_19825);

if(cljs.core.truth_(reason_19827)){
cljs.core.print.call(null,", ",reason_19827);
} else {
}

var seq__19748_19830 = cljs.core.seq.call(null,prob_19824);
var chunk__19749_19831 = null;
var count__19750_19832 = (0);
var i__19751_19833 = (0);
while(true){
if((i__19751_19833 < count__19750_19832)){
var vec__19752_19834 = cljs.core._nth.call(null,chunk__19749_19831,i__19751_19833);
var k_19835 = cljs.core.nth.call(null,vec__19752_19834,(0),null);
var v_19836 = cljs.core.nth.call(null,vec__19752_19834,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_19835))){
} else {
cljs.core.print.call(null,"\n\t",k_19835," ");

cljs.core.pr.call(null,v_19836);
}

var G__19837 = seq__19748_19830;
var G__19838 = chunk__19749_19831;
var G__19839 = count__19750_19832;
var G__19840 = (i__19751_19833 + (1));
seq__19748_19830 = G__19837;
chunk__19749_19831 = G__19838;
count__19750_19832 = G__19839;
i__19751_19833 = G__19840;
continue;
} else {
var temp__4425__auto___19841__$1 = cljs.core.seq.call(null,seq__19748_19830);
if(temp__4425__auto___19841__$1){
var seq__19748_19842__$1 = temp__4425__auto___19841__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19748_19842__$1)){
var c__18304__auto___19843 = cljs.core.chunk_first.call(null,seq__19748_19842__$1);
var G__19844 = cljs.core.chunk_rest.call(null,seq__19748_19842__$1);
var G__19845 = c__18304__auto___19843;
var G__19846 = cljs.core.count.call(null,c__18304__auto___19843);
var G__19847 = (0);
seq__19748_19830 = G__19844;
chunk__19749_19831 = G__19845;
count__19750_19832 = G__19846;
i__19751_19833 = G__19847;
continue;
} else {
var vec__19755_19848 = cljs.core.first.call(null,seq__19748_19842__$1);
var k_19849 = cljs.core.nth.call(null,vec__19755_19848,(0),null);
var v_19850 = cljs.core.nth.call(null,vec__19755_19848,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_19849))){
} else {
cljs.core.print.call(null,"\n\t",k_19849," ");

cljs.core.pr.call(null,v_19850);
}

var G__19851 = cljs.core.next.call(null,seq__19748_19842__$1);
var G__19852 = null;
var G__19853 = (0);
var G__19854 = (0);
seq__19748_19830 = G__19851;
chunk__19749_19831 = G__19852;
count__19750_19832 = G__19853;
i__19751_19833 = G__19854;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__19855 = cljs.core.next.call(null,seq__19724_19814__$1);
var G__19856 = null;
var G__19857 = (0);
var G__19858 = (0);
seq__19724_19770 = G__19855;
chunk__19725_19771 = G__19856;
count__19726_19772 = G__19857;
i__19727_19773 = G__19858;
continue;
}
} else {
}
}
break;
}

var seq__19758_19859 = cljs.core.seq.call(null,ed);
var chunk__19759_19860 = null;
var count__19760_19861 = (0);
var i__19761_19862 = (0);
while(true){
if((i__19761_19862 < count__19760_19861)){
var vec__19762_19863 = cljs.core._nth.call(null,chunk__19759_19860,i__19761_19862);
var k_19864 = cljs.core.nth.call(null,vec__19762_19863,(0),null);
var v_19865 = cljs.core.nth.call(null,vec__19762_19863,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_19864))){
} else {
cljs.core.print.call(null,k_19864," ");

cljs.core.pr.call(null,v_19865);

cljs.core.newline.call(null);
}

var G__19866 = seq__19758_19859;
var G__19867 = chunk__19759_19860;
var G__19868 = count__19760_19861;
var G__19869 = (i__19761_19862 + (1));
seq__19758_19859 = G__19866;
chunk__19759_19860 = G__19867;
count__19760_19861 = G__19868;
i__19761_19862 = G__19869;
continue;
} else {
var temp__4425__auto___19870 = cljs.core.seq.call(null,seq__19758_19859);
if(temp__4425__auto___19870){
var seq__19758_19871__$1 = temp__4425__auto___19870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19758_19871__$1)){
var c__18304__auto___19872 = cljs.core.chunk_first.call(null,seq__19758_19871__$1);
var G__19873 = cljs.core.chunk_rest.call(null,seq__19758_19871__$1);
var G__19874 = c__18304__auto___19872;
var G__19875 = cljs.core.count.call(null,c__18304__auto___19872);
var G__19876 = (0);
seq__19758_19859 = G__19873;
chunk__19759_19860 = G__19874;
count__19760_19861 = G__19875;
i__19761_19862 = G__19876;
continue;
} else {
var vec__19765_19877 = cljs.core.first.call(null,seq__19758_19871__$1);
var k_19878 = cljs.core.nth.call(null,vec__19765_19877,(0),null);
var v_19879 = cljs.core.nth.call(null,vec__19765_19877,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_19878))){
} else {
cljs.core.print.call(null,k_19878," ");

cljs.core.pr.call(null,v_19879);

cljs.core.newline.call(null);
}

var G__19880 = cljs.core.next.call(null,seq__19758_19871__$1);
var G__19881 = null;
var G__19882 = (0);
var G__19883 = (0);
seq__19758_19859 = G__19880;
chunk__19759_19860 = G__19881;
count__19760_19861 = G__19882;
i__19761_19862 = G__19883;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19723_19769;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19722_19768;
}
return [cljs.core.str(sb__18479__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__18479__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19886_19888 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19887_19889 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19886_19888,_STAR_print_fn_STAR_19887_19889,sb__18479__auto__){
return (function (x__18480__auto__){
return sb__18479__auto__.append(x__18480__auto__);
});})(_STAR_print_newline_STAR_19886_19888,_STAR_print_fn_STAR_19887_19889,sb__18479__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19887_19889;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19886_19888;
}
return [cljs.core.str(sb__18479__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4423__auto__ = (function (){var or__17493__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var g = temp__4423__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4423__auto__,spec__$1){
return (function (p1__19890_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__19890_SHARP_);
});})(g,temp__4423__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map paths (vectors of keywords) to generators. These will be
 *   used instead of the generators at those paths. Note that parent
 *   generator (in the spec or overrides map) will supersede those of any
 *   subtrees. A generator for a regex op must always return a
 *   sequential collection (i.e. a generator for s/? should return either
 *   an empty sequence/vector or a sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args19891 = [];
var len__18568__auto___19894 = arguments.length;
var i__18569__auto___19895 = (0);
while(true){
if((i__18569__auto___19895 < len__18568__auto___19894)){
args19891.push((arguments[i__18569__auto___19895]));

var G__19896 = (i__18569__auto___19895 + (1));
i__18569__auto___19895 = G__19896;
continue;
} else {
}
break;
}

var G__19893 = args19891.length;
switch (G__19893) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19891.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__17481__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__17481__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__17481__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword/symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__17493__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
var or__17493__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__17493__auto____$1)){
return or__17493__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
cljs.spec.fn_spec_roles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null);
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Fn-specs must include at least :args or :ret specs.
 */
cljs.spec.fn_specs_QMARK_ = (function cljs$spec$fn_specs_QMARK_(m){
var or__17493__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.fn_spec_sym = (function cljs$spec$fn_spec_sym(sym,role){
return cljs.core.symbol.call(null,[cljs.core.str(sym),cljs.core.str("$"),cljs.core.str(cljs.core.name.call(null,role))].join(''));
});
/**
 * Returns :args/:ret/:fn map of specs for var or symbol v.
 */
cljs.spec.fn_specs = (function cljs$spec$fn_specs(v){
var s = cljs.spec.__GT_sym.call(null,v);
var reg = cljs.spec.registry.call(null);
return cljs.core.reduce.call(null,((function (s,reg){
return (function (m,role){
return cljs.core.assoc.call(null,m,role,cljs.core.get.call(null,reg,cljs.spec.fn_spec_sym.call(null,s,role)));
});})(s,reg))
,cljs.core.PersistentArrayMap.EMPTY,cljs.spec.fn_spec_roles);
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(v__$1),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__18479__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19903_19908 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19904_19909 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19903_19908,_STAR_print_fn_STAR_19904_19909,sb__18479__auto__,ed,conformed){
return (function (x__18480__auto__){
return sb__18479__auto__.append(x__18480__auto__);
});})(_STAR_print_newline_STAR_19903_19908,_STAR_print_fn_STAR_19904_19909,sb__18479__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19904_19909;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19903_19908;
}
return [cljs.core.str(sb__18479__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__19905 = ((function (conform_BANG_){
return (function() { 
var G__19910__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_19906 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.fn_specs.call(null,v);
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args):null);
var ret = (function (){var _STAR_instrument_enabled_STAR_19907 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_19907;
}})();
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret,args):null);
if(cljs.core.truth_((function (){var and__17481__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__17481__auto__)){
var and__17481__auto____$1 = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__17481__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__17481__auto____$1;
}
} else {
return and__17481__auto__;
}
})())){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null),args);
} else {
}

return ret;
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_19906;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__19910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19911__i = 0, G__19911__a = new Array(arguments.length -  0);
while (G__19911__i < G__19911__a.length) {G__19911__a[G__19911__i] = arguments[G__19911__i + 0]; ++G__19911__i;}
  args = new cljs.core.IndexedSeq(G__19911__a,0);
} 
return G__19910__delegate.call(this,args);};
G__19910.cljs$lang$maxFixedArity = 0;
G__19910.cljs$lang$applyTo = (function (arglist__19912){
var args = cljs.core.seq(arglist__19912);
return G__19910__delegate(args);
});
G__19910.cljs$core$IFn$_invoke$arity$variadic = G__19910__delegate;
return G__19910;
})()
;})(conform_BANG_))
;
goog.object.extend(G__19905,f);

return G__19905;
});
cljs.spec.no_fn_specs = (function cljs$spec$no_fn_specs(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(v),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var specs = cljs.spec.fn_specs.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_specs_QMARK_.call(null,specs))){
var map__19915 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__19915__$1 = ((((!((map__19915 == null)))?((((map__19915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19915):map__19915);
var raw = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__19915__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_specs.call(null,v,specs);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4425__auto___19921 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__4425__auto___19921)){
var map__19919_19922 = temp__4425__auto___19921;
var map__19919_19923__$1 = ((((!((map__19919_19922 == null)))?((((map__19919_19922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19919_19922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19919_19922):map__19919_19922);
var raw_19924 = cljs.core.get.call(null,map__19919_19923__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped_19925 = cljs.core.get.call(null,map__19919_19923__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current_19926 = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped_19925,current_19926)){
} else {
}

cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);
} else {
}

return v;
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__17493__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args19927 = [];
var len__18568__auto___19930 = arguments.length;
var i__18569__auto___19931 = (0);
while(true){
if((i__18569__auto___19931 < len__18568__auto___19930)){
args19927.push((arguments[i__18569__auto___19931]));

var G__19932 = (i__18569__auto___19931 + (1));
i__18569__auto___19931 = G__19932;
continue;
} else {
}
break;
}

var G__19929 = args19927.length;
switch (G__19929) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19927.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4423__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args19934 = [];
var len__18568__auto___19937 = arguments.length;
var i__18569__auto___19938 = (0);
while(true){
if((i__18569__auto___19938 < len__18568__auto___19937)){
args19934.push((arguments[i__18569__auto___19938]));

var G__19939 = (i__18569__auto___19938 + (1));
i__18569__auto___19938 = G__19939;
continue;
} else {
}
break;
}

var G__19936 = args19934.length;
switch (G__19936) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19934.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__19943){
var map__19965 = p__19943;
var map__19965__$1 = ((((!((map__19965 == null)))?((((map__19965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19965):map__19965);
var argm = map__19965__$1;
var opt = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__19965__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__19941_SHARP_){
var or__17493__auto__ = k__GT_s.call(null,p1__19941_SHARP_);
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return p1__19941_SHARP_;
}
});})(keys_pred,k__GT_s,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec19967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec19967 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__19965,req_specs,keys__GT_specs,p__19943,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta19968){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__19965 = map__19965;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.p__19943 = p__19943;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta19968 = meta19968;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec19967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_19969,meta19968__$1){
var self__ = this;
var _19969__$1 = this;
return (new cljs.spec.t_cljs$spec19967(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__19965,self__.req_specs,self__.keys__GT_specs,self__.p__19943,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta19968__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_19969){
var self__ = this;
var _19969__$1 = this;
return self__.meta19968;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.call = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.apply = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,args19970){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19970)));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec19967.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__19974 = cljs.core.keys.call(null,m);
var vec__19975 = G__19974;
var seq__19976 = cljs.core.seq.call(null,vec__19975);
var first__19977 = cljs.core.first.call(null,seq__19976);
var seq__19976__$1 = cljs.core.next.call(null,seq__19976);
var k = first__19977;
var ks = seq__19976__$1;
var keys = vec__19975;
var ret__$1 = ret;
var G__19974__$1 = G__19974;
while(true){
var ret__$2 = ret__$1;
var vec__19978 = G__19974__$1;
var seq__19979 = cljs.core.seq.call(null,vec__19978);
var first__19980 = cljs.core.first.call(null,seq__19979);
var seq__19979__$1 = cljs.core.next.call(null,seq__19979);
var k__$1 = first__19980;
var ks__$1 = seq__19979__$1;
var keys__$1 = vec__19978;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__19986 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__19987 = ks__$1;
ret__$1 = G__19986;
G__19974__$1 = G__19987;
continue;
}
} else {
var G__19988 = ret__$2;
var G__19989 = ks__$1;
ret__$1 = G__19988;
G__19974__$1 = G__19989;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4425__auto__){
var probs = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__19981){
var vec__19982 = p__19981;
var k = cljs.core.nth.call(null,vec__19982,(0),null);
var v = cljs.core.nth.call(null,vec__19982,(1),null);
if(cljs.core.truth_((function (){var or__17493__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__19942_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__19942_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__19985 = cljs.core.PersistentVector.EMPTY;
var G__19985__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__19985,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__19985);
var G__19985__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__19985__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__19985__$1);
var G__19985__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__19985__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__19985__$2);
var G__19985__$4 = (cljs.core.truth_(self__.opt_un)?cljs.core.conj.call(null,G__19985__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un):G__19985__$3);
return G__19985__$4;
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"map__19965","map__19965",546790093,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"p__19943","p__19943",415170071,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta19968","meta19968",-993641686,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec19967.cljs$lang$type = true;

cljs.spec.t_cljs$spec19967.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec19967";

cljs.spec.t_cljs$spec19967.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec19967");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec19967 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec19967(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__19965__$2,req_specs__$1,keys__GT_specs__$1,p__19943__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta19968){
return (new cljs.spec.t_cljs$spec19967(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__19965__$2,req_specs__$1,keys__GT_specs__$1,p__19943__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta19968));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__19965,map__19965__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec19967(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__19965__$1,req_specs,keys__GT_specs,p__19943,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(form,pred,gfn,cpred_QMARK_){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__19996 = pred;
var G__19996__$1 = (cljs.core.truth_(gfn)?cljs.spec.with_gen.call(null,G__19996,gfn):G__19996);
return G__19996__$1;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__19997 = cljs.spec.the_spec.call(null,pred);
var G__19997__$1 = (cljs.core.truth_(gfn)?cljs.spec.with_gen.call(null,G__19997,gfn):G__19997);
return G__19997__$1;
} else {
if(typeof cljs.spec.t_cljs$spec19998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec19998 = (function (spec_impl,form,pred,gfn,cpred_QMARK_,meta19999){
this.spec_impl = spec_impl;
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.meta19999 = meta19999;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec19998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20000,meta19999__$1){
var self__ = this;
var _20000__$1 = this;
return (new cljs.spec.t_cljs$spec19998(self__.spec_impl,self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,meta19999__$1));
});

cljs.spec.t_cljs$spec19998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20000){
var self__ = this;
var _20000__$1 = this;
return self__.meta19999;
});

cljs.spec.t_cljs$spec19998.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec19998.prototype.apply = (function (self__,args20001){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20001)));
});

cljs.spec.t_cljs$spec19998.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec19998.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec19998.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec19998.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec19998.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec19998.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec19998.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec19998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"spec-impl","spec-impl",1706091993,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec'"], null)),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"meta19999","meta19999",-1108658210,null)], null);
});

cljs.spec.t_cljs$spec19998.cljs$lang$type = true;

cljs.spec.t_cljs$spec19998.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec19998";

cljs.spec.t_cljs$spec19998.cljs$lang$ctorPrWriter = (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec19998");
});

cljs.spec.__GT_t_cljs$spec19998 = (function cljs$spec$spec_impl_$___GT_t_cljs$spec19998(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta19999){
return (new cljs.spec.t_cljs$spec19998(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta19999));
});

}

return (new cljs.spec.t_cljs$spec19998(cljs$spec$spec_impl,form,pred,gfn,cpred_QMARK_,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});
/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args20007 = [];
var len__18568__auto___20022 = arguments.length;
var i__18569__auto___20023 = (0);
while(true){
if((i__18569__auto___20023 < len__18568__auto___20022)){
args20007.push((arguments[i__18569__auto___20023]));

var G__20024 = (i__18569__auto___20023 + (1));
i__18569__auto___20023 = G__20024;
continue;
} else {
}
break;
}

var G__20009 = args20007.length;
switch (G__20009) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20007.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__20002_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__17481__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__20002_SHARP_));
if(and__17481__auto__){
return mm.call(null,p1__20002_SHARP_);
} else {
return and__17481__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__20003_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__20003_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__20004_SHARP_,p2__20005_SHARP_){
return cljs.core.assoc.call(null,p1__20004_SHARP_,retag,p2__20005_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec20010 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec20010 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta20011){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta20011 = meta20011;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec20010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_20012,meta20011__$1){
var self__ = this;
var _20012__$1 = this;
return (new cljs.spec.t_cljs$spec20010(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta20011__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_20012){
var self__ = this;
var _20012__$1 = this;
return self__.meta20011;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.call = ((function (id,predx,dval,tag){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.apply = ((function (id,predx,dval,tag){
return (function (self__,args20013){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20013)));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,predx,dval,tag){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec20010.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4423__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__20014){
var vec__20015 = p__20014;
var k = cljs.core.nth.call(null,vec__20015,(0),null);
var f = cljs.core.nth.call(null,vec__20015,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__20015,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__20015,k,f,___$1,id,predx,dval,tag){
return (function (p1__20006_SHARP_){
return self__.tag.call(null,p1__20006_SHARP_,k);
});})(rmap__$1,p,vec__20015,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__18327__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__18327__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto____$1);
})(),x__18327__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__20015,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__20018){
var vec__20019 = p__20018;
var k = cljs.core.nth.call(null,vec__20019,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__18327__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta20011","meta20011",1250379042,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec20010.cljs$lang$type = true;

cljs.spec.t_cljs$spec20010.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec20010";

cljs.spec.t_cljs$spec20010.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec20010");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec20010 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec20010(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta20011){
return (new cljs.spec.t_cljs$spec20010(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta20011));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec20010(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args20026 = [];
var len__18568__auto___20033 = arguments.length;
var i__18569__auto___20034 = (0);
while(true){
if((i__18569__auto___20034 < len__18568__auto___20033)){
args20026.push((arguments[i__18569__auto___20034]));

var G__20035 = (i__18569__auto___20034 + (1));
i__18569__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var G__20028 = args20026.length;
switch (G__20028) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20026.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec20029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec20029 = (function (forms,preds,gfn,meta20030){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta20030 = meta20030;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec20029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20031,meta20030__$1){
var self__ = this;
var _20031__$1 = this;
return (new cljs.spec.t_cljs$spec20029(self__.forms,self__.preds,self__.gfn,meta20030__$1));
});

cljs.spec.t_cljs$spec20029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20031){
var self__ = this;
var _20031__$1 = this;
return self__.meta20030;
});

cljs.spec.t_cljs$spec20029.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec20029.prototype.apply = (function (self__,args20032){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20032)));
});

cljs.spec.t_cljs$spec20029.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec20029.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec20029.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__20037 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__20038 = (i + (1));
ret = G__20037;
i = G__20038;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec20029.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__18327__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})(),(function (){var x__18327__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec20029.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec20029.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec20029.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec20029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta20030","meta20030",-368325592,null)], null);
});

cljs.spec.t_cljs$spec20029.cljs$lang$type = true;

cljs.spec.t_cljs$spec20029.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec20029";

cljs.spec.t_cljs$spec20029.cljs$lang$ctorPrWriter = (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec20029");
});

cljs.spec.__GT_t_cljs$spec20029 = (function cljs$spec$__GT_t_cljs$spec20029(forms__$1,preds__$1,gfn__$1,meta20030){
return (new cljs.spec.t_cljs$spec20029(forms__$1,preds__$1,gfn__$1,meta20030));
});

}

return (new cljs.spec.t_cljs$spec20029(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var cform = ((function (id){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__20047 = (i + (1));
i = G__20047;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id))
;
if(typeof cljs.spec.t_cljs$spec20043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec20043 = (function (or_spec_impl,keys,forms,preds,gfn,id,cform,meta20044){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.cform = cform;
this.meta20044 = meta20044;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec20043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,cform){
return (function (_20045,meta20044__$1){
var self__ = this;
var _20045__$1 = this;
return (new cljs.spec.t_cljs$spec20043(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.cform,meta20044__$1));
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,cform){
return (function (_20045){
var self__ = this;
var _20045__$1 = this;
return self__.meta20044;
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.call = ((function (id,cform){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.apply = ((function (id,cform){
return (function (self__,args20046){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20046)));
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,cform){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec20043.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,cform))
,null)));
}
});})(___$1,id,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.getBasis = ((function (id,cform){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta20044","meta20044",-124654333,null)], null);
});})(id,cform))
;

cljs.spec.t_cljs$spec20043.cljs$lang$type = true;

cljs.spec.t_cljs$spec20043.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec20043";

cljs.spec.t_cljs$spec20043.cljs$lang$ctorPrWriter = ((function (id,cform){
return (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec20043");
});})(id,cform))
;

cljs.spec.__GT_t_cljs$spec20043 = ((function (id,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec20043(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta20044){
return (new cljs.spec.t_cljs$spec20043(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta20044));
});})(id,cform))
;

}

return (new cljs.spec.t_cljs$spec20043(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__20074 = preds;
var vec__20076 = G__20074;
var seq__20077 = cljs.core.seq.call(null,vec__20076);
var first__20078 = cljs.core.first.call(null,seq__20077);
var seq__20077__$1 = cljs.core.next.call(null,seq__20077);
var pred = first__20078;
var preds__$1 = seq__20077__$1;
var G__20075 = forms;
var vec__20079 = G__20075;
var seq__20080 = cljs.core.seq.call(null,vec__20079);
var first__20081 = cljs.core.first.call(null,seq__20080);
var seq__20080__$1 = cljs.core.next.call(null,seq__20080);
var form = first__20081;
var forms__$1 = seq__20080__$1;
var ret__$1 = ret;
var G__20074__$1 = G__20074;
var G__20075__$1 = G__20075;
while(true){
var ret__$2 = ret__$1;
var vec__20082 = G__20074__$1;
var seq__20083 = cljs.core.seq.call(null,vec__20082);
var first__20084 = cljs.core.first.call(null,seq__20083);
var seq__20083__$1 = cljs.core.next.call(null,seq__20083);
var pred__$1 = first__20084;
var preds__$2 = seq__20083__$1;
var vec__20085 = G__20075__$1;
var seq__20086 = cljs.core.seq.call(null,vec__20085);
var first__20087 = cljs.core.first.call(null,seq__20086);
var seq__20086__$1 = cljs.core.next.call(null,seq__20086);
var form__$1 = first__20087;
var forms__$2 = seq__20086__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__20088 = nret;
var G__20089 = preds__$2;
var G__20090 = forms__$2;
ret__$1 = G__20088;
G__20074__$1 = G__20089;
G__20075__$1 = G__20090;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__20117 = forms;
var vec__20119 = G__20117;
var seq__20120 = cljs.core.seq.call(null,vec__20119);
var first__20121 = cljs.core.first.call(null,seq__20120);
var seq__20120__$1 = cljs.core.next.call(null,seq__20120);
var form = first__20121;
var forms__$1 = seq__20120__$1;
var G__20118 = preds;
var vec__20122 = G__20118;
var seq__20123 = cljs.core.seq.call(null,vec__20122);
var first__20124 = cljs.core.first.call(null,seq__20123);
var seq__20123__$1 = cljs.core.next.call(null,seq__20123);
var pred = first__20124;
var preds__$1 = seq__20123__$1;
var ret__$1 = ret;
var G__20117__$1 = G__20117;
var G__20118__$1 = G__20118;
while(true){
var ret__$2 = ret__$1;
var vec__20125 = G__20117__$1;
var seq__20126 = cljs.core.seq.call(null,vec__20125);
var first__20127 = cljs.core.first.call(null,seq__20126);
var seq__20126__$1 = cljs.core.next.call(null,seq__20126);
var form__$1 = first__20127;
var forms__$2 = seq__20126__$1;
var vec__20128 = G__20118__$1;
var seq__20129 = cljs.core.seq.call(null,vec__20128);
var first__20130 = cljs.core.first.call(null,seq__20129);
var seq__20129__$1 = cljs.core.next.call(null,seq__20129);
var pred__$1 = first__20130;
var preds__$2 = seq__20129__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__20131 = nret;
var G__20132 = forms__$2;
var G__20133 = preds__$2;
ret__$1 = G__20131;
G__20117__$1 = G__20132;
G__20118__$1 = G__20133;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec20138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec20138 = (function (and_spec_impl,forms,preds,gfn,meta20139){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta20139 = meta20139;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec20138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20140,meta20139__$1){
var self__ = this;
var _20140__$1 = this;
return (new cljs.spec.t_cljs$spec20138(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta20139__$1));
});

cljs.spec.t_cljs$spec20138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20140){
var self__ = this;
var _20140__$1 = this;
return self__.meta20139;
});

cljs.spec.t_cljs$spec20138.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec20138.prototype.apply = (function (self__,args20141){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20141)));
});

cljs.spec.t_cljs$spec20138.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec20138.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec20138.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec20138.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec20138.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec20138.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec20138.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("s","and","s/and",668634387,null)),self__.forms)));
});

cljs.spec.t_cljs$spec20138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta20139","meta20139",152084626,null)], null);
});

cljs.spec.t_cljs$spec20138.cljs$lang$type = true;

cljs.spec.t_cljs$spec20138.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec20138";

cljs.spec.t_cljs$spec20138.cljs$lang$ctorPrWriter = (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec20138");
});

cljs.spec.__GT_t_cljs$spec20138 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec20138(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta20139){
return (new cljs.spec.t_cljs$spec20138(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta20139));
});

}

return (new cljs.spec.t_cljs$spec20138(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__20142){
var map__20145 = p__20142;
var map__20145__$1 = ((((!((map__20145 == null)))?((((map__20145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20145):map__20145);
var op = cljs.core.get.call(null,map__20145__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__20147){
var map__20159 = p__20147;
var map__20159__$1 = ((((!((map__20159 == null)))?((((map__20159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20159):map__20159);
var vec__20160 = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__20161 = cljs.core.seq.call(null,vec__20160);
var first__20162 = cljs.core.first.call(null,seq__20161);
var seq__20161__$1 = cljs.core.next.call(null,seq__20161);
var p1 = first__20162;
var pr = seq__20161__$1;
var ps = vec__20160;
var vec__20163 = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__20164 = cljs.core.seq.call(null,vec__20163);
var first__20165 = cljs.core.first.call(null,seq__20164);
var seq__20164__$1 = cljs.core.next.call(null,seq__20164);
var k1 = first__20165;
var kr = seq__20164__$1;
var ks = vec__20163;
var vec__20166 = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__20167 = cljs.core.seq.call(null,vec__20166);
var first__20168 = cljs.core.first.call(null,seq__20167);
var seq__20167__$1 = cljs.core.next.call(null,seq__20167);
var f1 = first__20168;
var fr = seq__20167__$1;
var forms = vec__20166;
var ret = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20171 = arguments.length;
var i__18569__auto___20172 = (0);
while(true){
if((i__18569__auto___20172 < len__18568__auto___20171)){
args__18575__auto__.push((arguments[i__18569__auto___20172]));

var G__20173 = (i__18569__auto___20172 + (1));
i__18569__auto___20172 = G__20173;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq20170){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20170));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__18327__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})(),(function (){var x__18327__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__18327__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__17493__auto__ = ks;
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__20174_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__20174_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__17493__auto__ = cljs.core.seq.call(null,ks);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__17493__auto__ = cljs.core.seq.call(null,forms);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__20175_SHARP_){
return cljs.core.nth.call(null,p1__20175_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__20185 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__20188 = cljs.core.nth.call(null,vec__20185,(0),null);
var seq__20189 = cljs.core.seq.call(null,vec__20188);
var first__20190 = cljs.core.first.call(null,seq__20189);
var seq__20189__$1 = cljs.core.next.call(null,seq__20189);
var p1 = first__20190;
var pr = seq__20189__$1;
var ps__$1 = vec__20188;
var vec__20191 = cljs.core.nth.call(null,vec__20185,(1),null);
var k1 = cljs.core.nth.call(null,vec__20191,(0),null);
var ks__$1 = vec__20191;
var forms__$1 = cljs.core.nth.call(null,vec__20185,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20195 = arguments.length;
var i__18569__auto___20196 = (0);
while(true){
if((i__18569__auto___20196 < len__18568__auto___20195)){
args__18575__auto__.push((arguments[i__18569__auto___20196]));

var G__20197 = (i__18569__auto___20196 + (1));
i__18569__auto___20196 = G__20197;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq20194){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20194));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__17481__auto__ = p1;
if(cljs.core.truth_(and__17481__auto__)){
return p2;
} else {
return and__17481__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__17493__auto__ = p1;
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null));
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__17493__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__17493__auto__){
return or__17493__auto__;
} else {
var or__17493__auto____$1 = (function (){var and__17481__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve.call(null,p1)));
if(cljs.core.truth_(and__17481__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__17481__auto__;
}
})();
if(cljs.core.truth_(or__17493__auto____$1)){
return or__17493__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__20201 = cljs.spec.reg_resolve.call(null,p);
var map__20201__$1 = ((((!((map__20201 == null)))?((((map__20201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20201):map__20201);
var p__$1 = map__20201__$1;
var op = cljs.core.get.call(null,map__20201__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__20201__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__20201__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__20201__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__20201__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__20203 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20203)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__20203)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20203)){
var and__17481__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__17481__auto__)){
var or__17493__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return ret;
}
}
} else {
return and__17481__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20203)){
var or__17493__auto__ = (p1 === p2);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20203)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20203)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__20222 = cljs.spec.reg_resolve.call(null,p);
var map__20222__$1 = ((((!((map__20222 == null)))?((((map__20222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20222):map__20222);
var p__$1 = map__20222__$1;
var vec__20223 = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__20224 = cljs.core.seq.call(null,vec__20223);
var first__20225 = cljs.core.first.call(null,seq__20224);
var seq__20224__$1 = cljs.core.next.call(null,seq__20224);
var p0 = first__20225;
var pr = seq__20224__$1;
var ps = vec__20223;
var vec__20226 = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__20226,(0),null);
var ks = vec__20226;
var op = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__20222__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__20230 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20230)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__20230)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20230)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20230)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20230)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20230)){
var vec__20231 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__20234 = cljs.core.nth.call(null,vec__20231,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__20234,(0),null);
var vec__20237 = cljs.core.nth.call(null,vec__20231,(1),null);
var k0 = cljs.core.nth.call(null,vec__20237,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null);
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__20243 = cljs.spec.reg_resolve.call(null,p);
var map__20243__$1 = ((((!((map__20243 == null)))?((((map__20243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20243):map__20243);
var p__$1 = map__20243__$1;
var op = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__20243,map__20243__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__20243,map__20243__$1,p__$1,op,ps,splice))
;
var G__20245 = op;
if(cljs.core._EQ_.call(null,null,G__20245)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20245)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20245)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20245)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20245)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20245)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__20256 = cljs.spec.reg_resolve.call(null,p);
var map__20256__$1 = ((((!((map__20256 == null)))?((((map__20256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20256):map__20256);
var p__$1 = map__20256__$1;
var vec__20257 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__20258 = cljs.core.seq.call(null,vec__20257);
var first__20259 = cljs.core.first.call(null,seq__20258);
var seq__20258__$1 = cljs.core.next.call(null,seq__20258);
var p0 = first__20259;
var pr = seq__20258__$1;
var ps = vec__20257;
var vec__20260 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__20261 = cljs.core.seq.call(null,vec__20260);
var first__20262 = cljs.core.first.call(null,seq__20261);
var seq__20261__$1 = cljs.core.next.call(null,seq__20261);
var k0 = first__20262;
var kr = seq__20261__$1;
var ks = vec__20260;
var op = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__20256__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__20264 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20264)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__20264)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20264)){
var temp__4425__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4425__auto__)){
var p1__$1 = temp__4425__auto__;
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20264)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20264)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__20264,map__20256,map__20256__$1,p__$1,vec__20257,seq__20258,first__20259,seq__20258__$1,p0,pr,ps,vec__20260,seq__20261,first__20262,seq__20261__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__20246_SHARP_){
return cljs$spec$deriv.call(null,p1__20246_SHARP_,x);
});})(G__20264,map__20256,map__20256__$1,p__$1,vec__20257,seq__20258,first__20259,seq__20258__$1,p0,pr,ps,vec__20260,seq__20261,first__20262,seq__20261__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20264)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__20268 = cljs.spec.reg_resolve.call(null,p);
var map__20268__$1 = ((((!((map__20268 == null)))?((((map__20268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20268):map__20268);
var p__$1 = map__20268__$1;
var op = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__20268__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.truth_(p__$1)){
var G__20270 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20270)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__20270)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20270)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20270)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__18327__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__17493__auto__ = cljs.core.seq.call(null,ks);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__17493__auto__ = cljs.core.seq.call(null,forms);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20270)){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20270)){
var x__18327__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__18327__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto____$1);
})(),x__18327__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__20284 = input;
var x = cljs.core.nth.call(null,vec__20284,(0),null);
var input__$1 = vec__20284;
var map__20287 = cljs.spec.reg_resolve.call(null,p);
var map__20287__$1 = ((((!((map__20287 == null)))?((((map__20287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20287):map__20287);
var p__$1 = map__20287__$1;
var op = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__20287__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__20284,x,input__$1,map__20287,map__20287__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__20284,x,input__$1,map__20287,map__20287__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__20289 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20289)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__20289)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20289)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4423__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4423__auto__)){
var p1__$1 = temp__4423__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20289)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__17493__auto__ = cljs.core.seq.call(null,ks);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__17493__auto__ = cljs.core.seq.call(null,forms);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__20290 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__20289,vec__20284,x,input__$1,map__20287,map__20287__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__20293){
var vec__20294 = p__20293;
var p__$2 = cljs.core.nth.call(null,vec__20294,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__20289,vec__20284,x,input__$1,map__20287,map__20287__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__20290,(0),null);
var k = cljs.core.nth.call(null,vec__20290,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__20290,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__17493__auto__ = form__$1;
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20289)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__20289,vec__20284,x,input__$1,map__20287,map__20287__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__17493__auto__ = form__$1;
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__20289,vec__20284,x,input__$1,map__20287,map__20287__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__17493__auto__ = cljs.core.seq.call(null,ks);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__17493__auto__ = cljs.core.seq.call(null,forms);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20289)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__20303 = cljs.spec.reg_resolve.call(null,p);
var map__20303__$1 = ((((!((map__20303 == null)))?((((map__20303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20303):map__20303);
var p__$1 = map__20303__$1;
var op = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__20303__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__17481__auto__ = rmap__$1;
if(cljs.core.truth_(and__17481__auto__)){
var and__17481__auto____$1 = id;
if(cljs.core.truth_(and__17481__auto____$1)){
var and__17481__auto____$2 = k;
if(cljs.core.truth_(and__17481__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__17481__auto____$2;
}
} else {
return and__17481__auto____$1;
}
} else {
return and__17481__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__17493__auto__ = f__$1;
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return p__$2;
}
})());
});})(map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__17493__auto__ = f__$1;
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__17493__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__17493__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__17493__auto__){
return or__17493__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__17493__auto__ = (function (){var temp__4425__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
var G__20306 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__20306)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__20306)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__20307 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__20307)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__20307)){
var temp__4425__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__20307)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__20307)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__20307)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__20307)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4425__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4425__auto__,G__20307,or__17493__auto__,map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__20297_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20297_SHARP_);
});})(g,temp__4425__auto__,G__20307,or__17493__auto__,map__20303,map__20303__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__20308){
while(true){
var vec__20312 = p__20308;
var seq__20313 = cljs.core.seq.call(null,vec__20312);
var first__20314 = cljs.core.first.call(null,seq__20313);
var seq__20313__$1 = cljs.core.next.call(null,seq__20313);
var x = first__20314;
var xs = seq__20313__$1;
var data = vec__20312;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4423__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4423__auto__)){
var dp = temp__4423__auto__;
var G__20315 = dp;
var G__20316 = xs;
p = G__20315;
p__20308 = G__20316;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__20330 = input;
var vec__20331 = G__20330;
var seq__20332 = cljs.core.seq.call(null,vec__20331);
var first__20333 = cljs.core.first.call(null,seq__20332);
var seq__20332__$1 = cljs.core.next.call(null,seq__20332);
var x = first__20333;
var xs = seq__20332__$1;
var data = vec__20331;
var i = (0);
var p__$1 = p;
var G__20330__$1 = G__20330;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__20334 = G__20330__$1;
var seq__20335 = cljs.core.seq.call(null,vec__20334);
var first__20336 = cljs.core.first.call(null,seq__20335);
var seq__20335__$1 = cljs.core.next.call(null,seq__20335);
var x__$1 = first__20336;
var xs__$1 = seq__20335__$1;
var data__$1 = vec__20334;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4423__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var dp = temp__4423__auto__;
var G__20337 = dp;
var G__20338 = xs__$1;
var G__20339 = (i__$2 + (1));
p__$1 = G__20337;
G__20330__$1 = G__20338;
i__$1 = G__20339;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__17493__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__17493__auto__)){
return or__17493__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec20344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec20344 = (function (regex_spec_impl,re,gfn,meta20345){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta20345 = meta20345;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec20344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20346,meta20345__$1){
var self__ = this;
var _20346__$1 = this;
return (new cljs.spec.t_cljs$spec20344(self__.regex_spec_impl,self__.re,self__.gfn,meta20345__$1));
});

cljs.spec.t_cljs$spec20344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20346){
var self__ = this;
var _20346__$1 = this;
return self__.meta20345;
});

cljs.spec.t_cljs$spec20344.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec20344.prototype.apply = (function (self__,args20347){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20347)));
});

cljs.spec.t_cljs$spec20344.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec20344.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec20344.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec20344.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec20344.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec20344.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec20344.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec20344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta20345","meta20345",2088237972,null)], null);
});

cljs.spec.t_cljs$spec20344.cljs$lang$type = true;

cljs.spec.t_cljs$spec20344.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec20344";

cljs.spec.t_cljs$spec20344.cljs$lang$ctorPrWriter = (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec20344");
});

cljs.spec.__GT_t_cljs$spec20344 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec20344(regex_spec_impl__$1,re__$1,gfn__$1,meta20345){
return (new cljs.spec.t_cljs$spec20344(regex_spec_impl__$1,re__$1,gfn__$1,meta20345));
});

}

return (new cljs.spec.t_cljs$spec20344(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__17481__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__17481__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__17481__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__20348_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__20348_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4423__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20352 = temp__4423__auto__;
var smallest = cljs.core.nth.call(null,vec__20352,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
if(cljs.core.truth_((function (){var and__17481__auto__ = argspec;
if(cljs.core.truth_(and__17481__auto__)){
return retspec;
} else {
return and__17481__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (c/and argspec retspec)"));
}

var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec20362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec20362 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta20363){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta20363 = meta20363;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec20362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_20364,meta20363__$1){
var self__ = this;
var _20364__$1 = this;
return (new cljs.spec.t_cljs$spec20362(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta20363__$1));
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_20364){
var self__ = this;
var _20364__$1 = this;
return self__.meta20363;
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.call = ((function (specs){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.apply = ((function (specs){
return (function (self__,args20365){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20365)));
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (specs){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec20362.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e20366){if((e20366 instanceof Error)){
var t = e20366;
return t;
} else {
throw e20366;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
if(cljs.core.truth_(self__.fnspec)){
return null;
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__20369__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__18479__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20367_20370 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20368_20371 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20367_20370,_STAR_print_fn_STAR_20368_20371,sb__18479__auto__,___$4,specs){
return (function (x__18480__auto__){
return sb__18479__auto__.append(x__18480__auto__);
});})(_STAR_print_newline_STAR_20367_20370,_STAR_print_fn_STAR_20368_20371,sb__18479__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20368_20371;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20367_20370;
}
return [cljs.core.str(sb__18479__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__20369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20372__i = 0, G__20372__a = new Array(arguments.length -  0);
while (G__20372__i < G__20372__a.length) {G__20372__a[G__20372__i] = arguments[G__20372__i + 0]; ++G__20372__i;}
  args = new cljs.core.IndexedSeq(G__20372__a,0);
} 
return G__20369__delegate.call(this,args);};
G__20369.cljs$lang$maxFixedArity = 0;
G__20369.cljs$lang$applyTo = (function (arglist__20373){
var args = cljs.core.seq(arglist__20373);
return G__20369__delegate(args);
});
G__20369.cljs$core$IFn$_invoke$arity$variadic = G__20369__delegate;
return G__20369;
})()
;})(___$4,specs))
);
}
}
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec20362.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),(function (){var x__18327__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})(),(function (){var x__18327__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})(),(function (){var x__18327__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__18327__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec20362.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta20363","meta20363",-237667651,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec20362.cljs$lang$type = true;

cljs.spec.t_cljs$spec20362.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec20362";

cljs.spec.t_cljs$spec20362.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec/t_cljs$spec20362");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec20362 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec20362(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta20363){
return (new cljs.spec.t_cljs$spec20362(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta20363));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec20362(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20374#","p1__20374#",-1026265098,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__20374#","p1__20374#",-1026265098,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__20374#","p1__20374#",-1026265098,null))))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__20374#","p1__20374#",-1026265098,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__20374#","p1__20374#",-1026265098,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__20374#","p1__20374#",-1026265098,null)))),(function (p1__20374_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__20374_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__20374_SHARP_));
}),null,true));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args20376 = [];
var len__18568__auto___20379 = arguments.length;
var i__18569__auto___20380 = (0);
while(true){
if((i__18569__auto___20380 < len__18568__auto___20379)){
args20376.push((arguments[i__18569__auto___20380]));

var G__20381 = (i__18569__auto___20380 + (1));
i__18569__auto___20380 = G__20381;
continue;
} else {
}
break;
}

var G__20378 = args20376.length;
switch (G__20378) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20376.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__20375_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20375_SHARP_,cljs.spec.conform.call(null,spec,p1__20375_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__20383_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__20383_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__20384_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__20384_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__20384_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});

//# sourceMappingURL=spec.js.map