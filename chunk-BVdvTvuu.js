import{N as G,O as FP,T as E,V as Ie,ln as bi,mn as de,rr as qI,vr}from"./chunk-CoEP_lO_.js";var i=new WeakMap;var h=(()=>{class e{_appRef;_injector=E(Ie);_environmentInjector=E(de);load(t){let n=this._appRef=this._appRef||this._injector.get(bi),o=i.get(n);o||(o={loaders:new Set,refs:[]},i.set(n,o),n.onDestroy(()=>{i.get(n)?.refs.forEach(y=>y.destroy()),i.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(FP(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=vr({token:e,factory:e.ɵfac})}return e})();var j=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=qI({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var a;function g(){if(a===void 0&&(a=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{a=e.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return a}function w(e){return g()?.createHTML(e)||e}function k(e,r,t){e.innerHTML=w(t.sanitize(G.HTML,r)||``)}export{w as i,j as n,k as r,h as t};