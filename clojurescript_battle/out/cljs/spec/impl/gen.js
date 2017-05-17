// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18099__auto__,writer__18100__auto__,opt__18101__auto__){
return cljs.core._write.call(null,writer__18100__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20455 = arguments.length;
var i__18569__auto___20456 = (0);
while(true){
if((i__18569__auto___20456 < len__18568__auto___20455)){
args__18575__auto__.push((arguments[i__18569__auto___20456]));

var G__20457 = (i__18569__auto___20456 + (1));
i__18569__auto___20456 = G__20457;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq20454){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20454));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20459 = arguments.length;
var i__18569__auto___20460 = (0);
while(true){
if((i__18569__auto___20460 < len__18568__auto___20459)){
args__18575__auto__.push((arguments[i__18569__auto___20460]));

var G__20461 = (i__18569__auto___20460 + (1));
i__18569__auto___20460 = G__20461;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq20458){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20458));
});

var g_QMARK__20462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_20463 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20462){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20462))
,null));
var mkg_20464 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__20462,g_20463){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__20462,g_20463))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__20462,g_20463,mkg_20464){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__20462).call(null,x);
});})(g_QMARK__20462,g_20463,mkg_20464))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__20462,g_20463,mkg_20464){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_20464).call(null,gfn);
});})(g_QMARK__20462,g_20463,mkg_20464))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__20462,g_20463,mkg_20464){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_20463).call(null,generator);
});})(g_QMARK__20462,g_20463,mkg_20464))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__18644__auto___20480 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__18644__auto___20480){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20481 = arguments.length;
var i__18569__auto___20482 = (0);
while(true){
if((i__18569__auto___20482 < len__18568__auto___20481)){
args__18575__auto__.push((arguments[i__18569__auto___20482]));

var G__20483 = (i__18569__auto___20482 + (1));
i__18569__auto___20482 = G__20483;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20480))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20480){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20480),args);
});})(g__18644__auto___20480))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__18644__auto___20480){
return (function (seq20465){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20465));
});})(g__18644__auto___20480))
;


var g__18644__auto___20484 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__18644__auto___20484){
return (function cljs$spec$impl$gen$list(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20485 = arguments.length;
var i__18569__auto___20486 = (0);
while(true){
if((i__18569__auto___20486 < len__18568__auto___20485)){
args__18575__auto__.push((arguments[i__18569__auto___20486]));

var G__20487 = (i__18569__auto___20486 + (1));
i__18569__auto___20486 = G__20487;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20484))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20484){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20484),args);
});})(g__18644__auto___20484))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__18644__auto___20484){
return (function (seq20466){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20466));
});})(g__18644__auto___20484))
;


var g__18644__auto___20488 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__18644__auto___20488){
return (function cljs$spec$impl$gen$map(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20489 = arguments.length;
var i__18569__auto___20490 = (0);
while(true){
if((i__18569__auto___20490 < len__18568__auto___20489)){
args__18575__auto__.push((arguments[i__18569__auto___20490]));

var G__20491 = (i__18569__auto___20490 + (1));
i__18569__auto___20490 = G__20491;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20488))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20488){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20488),args);
});})(g__18644__auto___20488))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__18644__auto___20488){
return (function (seq20467){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20467));
});})(g__18644__auto___20488))
;


var g__18644__auto___20492 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__18644__auto___20492){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20493 = arguments.length;
var i__18569__auto___20494 = (0);
while(true){
if((i__18569__auto___20494 < len__18568__auto___20493)){
args__18575__auto__.push((arguments[i__18569__auto___20494]));

var G__20495 = (i__18569__auto___20494 + (1));
i__18569__auto___20494 = G__20495;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20492))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20492){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20492),args);
});})(g__18644__auto___20492))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__18644__auto___20492){
return (function (seq20468){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20468));
});})(g__18644__auto___20492))
;


var g__18644__auto___20496 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__18644__auto___20496){
return (function cljs$spec$impl$gen$set(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20497 = arguments.length;
var i__18569__auto___20498 = (0);
while(true){
if((i__18569__auto___20498 < len__18568__auto___20497)){
args__18575__auto__.push((arguments[i__18569__auto___20498]));

var G__20499 = (i__18569__auto___20498 + (1));
i__18569__auto___20498 = G__20499;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20496))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20496){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20496),args);
});})(g__18644__auto___20496))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__18644__auto___20496){
return (function (seq20469){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20469));
});})(g__18644__auto___20496))
;


var g__18644__auto___20500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__18644__auto___20500){
return (function cljs$spec$impl$gen$vector(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20501 = arguments.length;
var i__18569__auto___20502 = (0);
while(true){
if((i__18569__auto___20502 < len__18568__auto___20501)){
args__18575__auto__.push((arguments[i__18569__auto___20502]));

var G__20503 = (i__18569__auto___20502 + (1));
i__18569__auto___20502 = G__20503;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20500))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20500){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20500),args);
});})(g__18644__auto___20500))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__18644__auto___20500){
return (function (seq20470){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20470));
});})(g__18644__auto___20500))
;


var g__18644__auto___20504 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__18644__auto___20504){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20505 = arguments.length;
var i__18569__auto___20506 = (0);
while(true){
if((i__18569__auto___20506 < len__18568__auto___20505)){
args__18575__auto__.push((arguments[i__18569__auto___20506]));

var G__20507 = (i__18569__auto___20506 + (1));
i__18569__auto___20506 = G__20507;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20504))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20504),args);
});})(g__18644__auto___20504))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__18644__auto___20504){
return (function (seq20471){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20471));
});})(g__18644__auto___20504))
;


var g__18644__auto___20508 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__18644__auto___20508){
return (function cljs$spec$impl$gen$elements(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20509 = arguments.length;
var i__18569__auto___20510 = (0);
while(true){
if((i__18569__auto___20510 < len__18568__auto___20509)){
args__18575__auto__.push((arguments[i__18569__auto___20510]));

var G__20511 = (i__18569__auto___20510 + (1));
i__18569__auto___20510 = G__20511;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20508))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20508),args);
});})(g__18644__auto___20508))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__18644__auto___20508){
return (function (seq20472){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20472));
});})(g__18644__auto___20508))
;


var g__18644__auto___20512 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__18644__auto___20512){
return (function cljs$spec$impl$gen$bind(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20513 = arguments.length;
var i__18569__auto___20514 = (0);
while(true){
if((i__18569__auto___20514 < len__18568__auto___20513)){
args__18575__auto__.push((arguments[i__18569__auto___20514]));

var G__20515 = (i__18569__auto___20514 + (1));
i__18569__auto___20514 = G__20515;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20512))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20512),args);
});})(g__18644__auto___20512))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__18644__auto___20512){
return (function (seq20473){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20473));
});})(g__18644__auto___20512))
;


var g__18644__auto___20516 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__18644__auto___20516){
return (function cljs$spec$impl$gen$choose(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20517 = arguments.length;
var i__18569__auto___20518 = (0);
while(true){
if((i__18569__auto___20518 < len__18568__auto___20517)){
args__18575__auto__.push((arguments[i__18569__auto___20518]));

var G__20519 = (i__18569__auto___20518 + (1));
i__18569__auto___20518 = G__20519;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20516))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20516),args);
});})(g__18644__auto___20516))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__18644__auto___20516){
return (function (seq20474){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20474));
});})(g__18644__auto___20516))
;


var g__18644__auto___20520 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__18644__auto___20520){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20521 = arguments.length;
var i__18569__auto___20522 = (0);
while(true){
if((i__18569__auto___20522 < len__18568__auto___20521)){
args__18575__auto__.push((arguments[i__18569__auto___20522]));

var G__20523 = (i__18569__auto___20522 + (1));
i__18569__auto___20522 = G__20523;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20520))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20520),args);
});})(g__18644__auto___20520))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__18644__auto___20520){
return (function (seq20475){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20475));
});})(g__18644__auto___20520))
;


var g__18644__auto___20524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__18644__auto___20524){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20525 = arguments.length;
var i__18569__auto___20526 = (0);
while(true){
if((i__18569__auto___20526 < len__18568__auto___20525)){
args__18575__auto__.push((arguments[i__18569__auto___20526]));

var G__20527 = (i__18569__auto___20526 + (1));
i__18569__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20524))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20524),args);
});})(g__18644__auto___20524))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__18644__auto___20524){
return (function (seq20476){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20476));
});})(g__18644__auto___20524))
;


var g__18644__auto___20528 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__18644__auto___20528){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20529 = arguments.length;
var i__18569__auto___20530 = (0);
while(true){
if((i__18569__auto___20530 < len__18568__auto___20529)){
args__18575__auto__.push((arguments[i__18569__auto___20530]));

var G__20531 = (i__18569__auto___20530 + (1));
i__18569__auto___20530 = G__20531;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20528))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20528),args);
});})(g__18644__auto___20528))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__18644__auto___20528){
return (function (seq20477){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20477));
});})(g__18644__auto___20528))
;


var g__18644__auto___20532 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__18644__auto___20532){
return (function cljs$spec$impl$gen$sample(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20533 = arguments.length;
var i__18569__auto___20534 = (0);
while(true){
if((i__18569__auto___20534 < len__18568__auto___20533)){
args__18575__auto__.push((arguments[i__18569__auto___20534]));

var G__20535 = (i__18569__auto___20534 + (1));
i__18569__auto___20534 = G__20535;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20532))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20532),args);
});})(g__18644__auto___20532))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__18644__auto___20532){
return (function (seq20478){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20478));
});})(g__18644__auto___20532))
;


var g__18644__auto___20536 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__18644__auto___20536){
return (function cljs$spec$impl$gen$return(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20537 = arguments.length;
var i__18569__auto___20538 = (0);
while(true){
if((i__18569__auto___20538 < len__18568__auto___20537)){
args__18575__auto__.push((arguments[i__18569__auto___20538]));

var G__20539 = (i__18569__auto___20538 + (1));
i__18569__auto___20538 = G__20539;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18644__auto___20536))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18644__auto___20536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__18644__auto___20536),args);
});})(g__18644__auto___20536))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__18644__auto___20536){
return (function (seq20479){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20479));
});})(g__18644__auto___20536))
;

var g__18657__auto___20561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__18657__auto___20561){
return (function cljs$spec$impl$gen$any(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20562 = arguments.length;
var i__18569__auto___20563 = (0);
while(true){
if((i__18569__auto___20563 < len__18568__auto___20562)){
args__18575__auto__.push((arguments[i__18569__auto___20563]));

var G__20564 = (i__18569__auto___20563 + (1));
i__18569__auto___20563 = G__20564;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20561))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20561){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20561);
});})(g__18657__auto___20561))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__18657__auto___20561){
return (function (seq20540){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20540));
});})(g__18657__auto___20561))
;


var g__18657__auto___20565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__18657__auto___20565){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20566 = arguments.length;
var i__18569__auto___20567 = (0);
while(true){
if((i__18569__auto___20567 < len__18568__auto___20566)){
args__18575__auto__.push((arguments[i__18569__auto___20567]));

var G__20568 = (i__18569__auto___20567 + (1));
i__18569__auto___20567 = G__20568;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20565))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20565){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20565);
});})(g__18657__auto___20565))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__18657__auto___20565){
return (function (seq20541){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20541));
});})(g__18657__auto___20565))
;


var g__18657__auto___20569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__18657__auto___20569){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20570 = arguments.length;
var i__18569__auto___20571 = (0);
while(true){
if((i__18569__auto___20571 < len__18568__auto___20570)){
args__18575__auto__.push((arguments[i__18569__auto___20571]));

var G__20572 = (i__18569__auto___20571 + (1));
i__18569__auto___20571 = G__20572;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20569))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20569){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20569);
});})(g__18657__auto___20569))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__18657__auto___20569){
return (function (seq20542){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20542));
});})(g__18657__auto___20569))
;


var g__18657__auto___20573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__18657__auto___20573){
return (function cljs$spec$impl$gen$char(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20574 = arguments.length;
var i__18569__auto___20575 = (0);
while(true){
if((i__18569__auto___20575 < len__18568__auto___20574)){
args__18575__auto__.push((arguments[i__18569__auto___20575]));

var G__20576 = (i__18569__auto___20575 + (1));
i__18569__auto___20575 = G__20576;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20573))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20573){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20573);
});})(g__18657__auto___20573))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__18657__auto___20573){
return (function (seq20543){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20543));
});})(g__18657__auto___20573))
;


var g__18657__auto___20577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__18657__auto___20577){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20578 = arguments.length;
var i__18569__auto___20579 = (0);
while(true){
if((i__18569__auto___20579 < len__18568__auto___20578)){
args__18575__auto__.push((arguments[i__18569__auto___20579]));

var G__20580 = (i__18569__auto___20579 + (1));
i__18569__auto___20579 = G__20580;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20577))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20577){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20577);
});})(g__18657__auto___20577))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__18657__auto___20577){
return (function (seq20544){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20544));
});})(g__18657__auto___20577))
;


var g__18657__auto___20581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__18657__auto___20581){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20582 = arguments.length;
var i__18569__auto___20583 = (0);
while(true){
if((i__18569__auto___20583 < len__18568__auto___20582)){
args__18575__auto__.push((arguments[i__18569__auto___20583]));

var G__20584 = (i__18569__auto___20583 + (1));
i__18569__auto___20583 = G__20584;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20581))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20581){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20581);
});})(g__18657__auto___20581))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__18657__auto___20581){
return (function (seq20545){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20545));
});})(g__18657__auto___20581))
;


var g__18657__auto___20585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__18657__auto___20585){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20586 = arguments.length;
var i__18569__auto___20587 = (0);
while(true){
if((i__18569__auto___20587 < len__18568__auto___20586)){
args__18575__auto__.push((arguments[i__18569__auto___20587]));

var G__20588 = (i__18569__auto___20587 + (1));
i__18569__auto___20587 = G__20588;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20585))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20585){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20585);
});})(g__18657__auto___20585))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__18657__auto___20585){
return (function (seq20546){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20546));
});})(g__18657__auto___20585))
;


var g__18657__auto___20589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__18657__auto___20589){
return (function cljs$spec$impl$gen$double(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20590 = arguments.length;
var i__18569__auto___20591 = (0);
while(true){
if((i__18569__auto___20591 < len__18568__auto___20590)){
args__18575__auto__.push((arguments[i__18569__auto___20591]));

var G__20592 = (i__18569__auto___20591 + (1));
i__18569__auto___20591 = G__20592;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20589))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20589){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20589);
});})(g__18657__auto___20589))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__18657__auto___20589){
return (function (seq20547){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20547));
});})(g__18657__auto___20589))
;


var g__18657__auto___20593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__18657__auto___20593){
return (function cljs$spec$impl$gen$int(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20594 = arguments.length;
var i__18569__auto___20595 = (0);
while(true){
if((i__18569__auto___20595 < len__18568__auto___20594)){
args__18575__auto__.push((arguments[i__18569__auto___20595]));

var G__20596 = (i__18569__auto___20595 + (1));
i__18569__auto___20595 = G__20596;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20593))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20593){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20593);
});})(g__18657__auto___20593))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__18657__auto___20593){
return (function (seq20548){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20548));
});})(g__18657__auto___20593))
;


var g__18657__auto___20597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__18657__auto___20597){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20598 = arguments.length;
var i__18569__auto___20599 = (0);
while(true){
if((i__18569__auto___20599 < len__18568__auto___20598)){
args__18575__auto__.push((arguments[i__18569__auto___20599]));

var G__20600 = (i__18569__auto___20599 + (1));
i__18569__auto___20599 = G__20600;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20597))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20597){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20597);
});})(g__18657__auto___20597))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__18657__auto___20597){
return (function (seq20549){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20549));
});})(g__18657__auto___20597))
;


var g__18657__auto___20601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__18657__auto___20601){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20602 = arguments.length;
var i__18569__auto___20603 = (0);
while(true){
if((i__18569__auto___20603 < len__18568__auto___20602)){
args__18575__auto__.push((arguments[i__18569__auto___20603]));

var G__20604 = (i__18569__auto___20603 + (1));
i__18569__auto___20603 = G__20604;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20601))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20601){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20601);
});})(g__18657__auto___20601))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__18657__auto___20601){
return (function (seq20550){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20550));
});})(g__18657__auto___20601))
;


var g__18657__auto___20605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__18657__auto___20605){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20606 = arguments.length;
var i__18569__auto___20607 = (0);
while(true){
if((i__18569__auto___20607 < len__18568__auto___20606)){
args__18575__auto__.push((arguments[i__18569__auto___20607]));

var G__20608 = (i__18569__auto___20607 + (1));
i__18569__auto___20607 = G__20608;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20605))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20605){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20605);
});})(g__18657__auto___20605))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__18657__auto___20605){
return (function (seq20551){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20551));
});})(g__18657__auto___20605))
;


var g__18657__auto___20609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__18657__auto___20609){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20610 = arguments.length;
var i__18569__auto___20611 = (0);
while(true){
if((i__18569__auto___20611 < len__18568__auto___20610)){
args__18575__auto__.push((arguments[i__18569__auto___20611]));

var G__20612 = (i__18569__auto___20611 + (1));
i__18569__auto___20611 = G__20612;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20609))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20609){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20609);
});})(g__18657__auto___20609))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__18657__auto___20609){
return (function (seq20552){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20552));
});})(g__18657__auto___20609))
;


var g__18657__auto___20613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__18657__auto___20613){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20614 = arguments.length;
var i__18569__auto___20615 = (0);
while(true){
if((i__18569__auto___20615 < len__18568__auto___20614)){
args__18575__auto__.push((arguments[i__18569__auto___20615]));

var G__20616 = (i__18569__auto___20615 + (1));
i__18569__auto___20615 = G__20616;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20613))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20613){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20613);
});})(g__18657__auto___20613))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__18657__auto___20613){
return (function (seq20553){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20553));
});})(g__18657__auto___20613))
;


var g__18657__auto___20617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__18657__auto___20617){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20618 = arguments.length;
var i__18569__auto___20619 = (0);
while(true){
if((i__18569__auto___20619 < len__18568__auto___20618)){
args__18575__auto__.push((arguments[i__18569__auto___20619]));

var G__20620 = (i__18569__auto___20619 + (1));
i__18569__auto___20619 = G__20620;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20617))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20617){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20617);
});})(g__18657__auto___20617))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__18657__auto___20617){
return (function (seq20554){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20554));
});})(g__18657__auto___20617))
;


var g__18657__auto___20621 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__18657__auto___20621){
return (function cljs$spec$impl$gen$string(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20622 = arguments.length;
var i__18569__auto___20623 = (0);
while(true){
if((i__18569__auto___20623 < len__18568__auto___20622)){
args__18575__auto__.push((arguments[i__18569__auto___20623]));

var G__20624 = (i__18569__auto___20623 + (1));
i__18569__auto___20623 = G__20624;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20621))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20621){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20621);
});})(g__18657__auto___20621))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__18657__auto___20621){
return (function (seq20555){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20555));
});})(g__18657__auto___20621))
;


var g__18657__auto___20625 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__18657__auto___20625){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20626 = arguments.length;
var i__18569__auto___20627 = (0);
while(true){
if((i__18569__auto___20627 < len__18568__auto___20626)){
args__18575__auto__.push((arguments[i__18569__auto___20627]));

var G__20628 = (i__18569__auto___20627 + (1));
i__18569__auto___20627 = G__20628;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20625))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20625){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20625);
});})(g__18657__auto___20625))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__18657__auto___20625){
return (function (seq20556){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20556));
});})(g__18657__auto___20625))
;


var g__18657__auto___20629 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__18657__auto___20629){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20630 = arguments.length;
var i__18569__auto___20631 = (0);
while(true){
if((i__18569__auto___20631 < len__18568__auto___20630)){
args__18575__auto__.push((arguments[i__18569__auto___20631]));

var G__20632 = (i__18569__auto___20631 + (1));
i__18569__auto___20631 = G__20632;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20629))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20629){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20629);
});})(g__18657__auto___20629))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__18657__auto___20629){
return (function (seq20557){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20557));
});})(g__18657__auto___20629))
;


var g__18657__auto___20633 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__18657__auto___20633){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20634 = arguments.length;
var i__18569__auto___20635 = (0);
while(true){
if((i__18569__auto___20635 < len__18568__auto___20634)){
args__18575__auto__.push((arguments[i__18569__auto___20635]));

var G__20636 = (i__18569__auto___20635 + (1));
i__18569__auto___20635 = G__20636;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20633))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20633){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20633);
});})(g__18657__auto___20633))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__18657__auto___20633){
return (function (seq20558){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20558));
});})(g__18657__auto___20633))
;


var g__18657__auto___20637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__18657__auto___20637){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20638 = arguments.length;
var i__18569__auto___20639 = (0);
while(true){
if((i__18569__auto___20639 < len__18568__auto___20638)){
args__18575__auto__.push((arguments[i__18569__auto___20639]));

var G__20640 = (i__18569__auto___20639 + (1));
i__18569__auto___20639 = G__20640;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20637))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20637){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20637);
});})(g__18657__auto___20637))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__18657__auto___20637){
return (function (seq20559){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20559));
});})(g__18657__auto___20637))
;


var g__18657__auto___20641 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__18657__auto___20641){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20642 = arguments.length;
var i__18569__auto___20643 = (0);
while(true){
if((i__18569__auto___20643 < len__18568__auto___20642)){
args__18575__auto__.push((arguments[i__18569__auto___20643]));

var G__20644 = (i__18569__auto___20643 + (1));
i__18569__auto___20643 = G__20644;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});})(g__18657__auto___20641))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__18657__auto___20641){
return (function (args){
return cljs.core.deref.call(null,g__18657__auto___20641);
});})(g__18657__auto___20641))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__18657__auto___20641){
return (function (seq20560){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20560));
});})(g__18657__auto___20641))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__18575__auto__ = [];
var len__18568__auto___20647 = arguments.length;
var i__18569__auto___20648 = (0);
while(true){
if((i__18569__auto___20648 < len__18568__auto___20647)){
args__18575__auto__.push((arguments[i__18569__auto___20648]));

var G__20649 = (i__18569__auto___20648 + (1));
i__18569__auto___20648 = G__20649;
continue;
} else {
}
break;
}

var argseq__18576__auto__ = ((((0) < args__18575__auto__.length))?(new cljs.core.IndexedSeq(args__18575__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__18576__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20645_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20645_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20646){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20646));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map