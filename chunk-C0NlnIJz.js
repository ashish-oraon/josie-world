import{$ as LE,$n as ne,$t as Ye,An as gp,Ar as yn$1,At as Sa,B as Hl,Bt as Vc,Cn as fD,Ct as RE,Dr as xe,En as fp,Er as xE,Fn as ie,Ft as Tp,Gn as kE,H as ID,In as ip,It as U$1,Kn as kP,Lt as Ug,Mn as ho$1,Mt as Sp,N as GI,Nn as hp,Nr as zh,Nt as Tc,Ot as SE,Pn as hr$1,Q as Kt$1,Rn as j,S as E,Sn as ea,St as Qp,T as Ep,Tn as fi$1,Tr as x,U as Ie$1,Ut as WI,W as Ir$1,Xn as lv,Y as Js,Z as Kh,_ as Cp,_r as ut$1,a as AP,an as _,at as M,b as Do$1,br as vr$1,c as Be$1,ct as Mc,dr as sm,dt as Nc,et as LP,fn as be,fr as st$1,hn as bp,ir as pp,it as Lp,jn as hE,k as Fo$1,kt as SP,lr as rD,mn as bm,nn as Z,nr as pE,nt as Lh,ot as ME,pt as OE,qn as kc,qt as XI,rn as ZI,rr as pl,sn as _c,sr as q$1,st as MP,t as $,tr as oe,un as ap,ut as NP,v as Cr$1,wr as wp,xr as vt$1,xt as Qh,yr as vp,yt as Ph}from"./chunk-B0fIdX0M.js";import{t as h}from"./chunk-6LrtI1kn.js";import{f as q$2,p as vt$2}from"./chunk-DbKNyeCD.js";import{i as U$2,n as De,o as ne$1,r as F}from"./chunk-DVxyU5oW.js";import{b as _s,h as Pi$1,p as F$1,w as ie$1,x as as$1}from"./main-H2VRFLFP.js";var ci=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty(`disabled`,t)}static ɵfac=function(i){return new(i||n)(Cr$1(Sa),Cr$1(Ir$1))};static ɵdir=ZI({type:n})}return n})();var xr=(()=>{class n extends ci{static ɵfac=(()=>{let t;return function(r){return(t||(t=bm(n)))(r||n)}})();static ɵdir=ZI({type:n,features:[ip]})}return n})();var Ht=new x(``);var Cr={provide:Ht,useExisting:ho$1(()=>ui),multi:!0};function Sr(){let n=q$2()?q$2().getUserAgent():``;return/android (\d+)/.test(n.toLowerCase())}var Nr=new x(``);var ui=(()=>{class n extends ci{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode??=!Sr()}writeValue(t){let i=t??``;this.setProperty(`value`,i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static ɵfac=function(i){return new(i||n)(Cr$1(Sa),Cr$1(Ir$1),Cr$1(Nr,8))};static ɵdir=ZI({type:n,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&Ep(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[fD([Cr]),ip]})}return n})();function zt(n){return n==null||Gt(n)===0}function Gt(n){return n==null?null:Array.isArray(n)||typeof n==`string`?n.length:n instanceof Set?n.size:null}var Oe=new x(``);var fi=new x(``);var Mr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var G=class{static min(e){return Er(e)}static max(e){return wr(e)}static required(e){return mi(e)}static requiredTrue(e){return Dr(e)}static email(e){return Fr(e)}static minLength(e){return Ar(e)}static maxLength(e){return Vr(e)}static pattern(e){return Rr(e)}static nullValidator(e){return et()}static compose(e){return yi(e)}static composeAsync(e){return bi(e)}};function Er(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function wr(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function mi(n){return zt(n.value)?{required:!0}:null}function Dr(n){return n.value===!0?null:{required:!0}}function Fr(n){return zt(n.value)||Mr.test(n.value)?null:{email:!0}}function Ar(n){return e=>{let t=e.value?.length??Gt(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Vr(n){return e=>{let t=e.value?.length??Gt(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Rr(n){if(!n)return et;let e,t;return typeof n==`string`?(t=``,n.charAt(0)!==`^`&&(t+=`^`),t+=n,n.charAt(n.length-1)!==`$`&&(t+=`$`),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(zt(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function et(n){return null}function hi(n){return n!=null}function pi(n){return Tc(n)?be(n):n}function gi(n){let e={};return n.forEach(t=>{e=t!=null?$($({},e),t):e}),Object.keys(e).length===0?null:e}function _i(n,e){return e.map(t=>t(n))}function Ir(n){return!n.validate}function vi(n){return n.map(e=>Ir(e)?e:t=>e.validate(t))}function yi(n){if(!n)return null;let e=n.filter(hi);return e.length==0?null:function(t){return gi(_i(t,e))}}function Ut(n){return n!=null?yi(vi(n)):null}function bi(n){if(!n)return null;let e=n.filter(hi);return e.length==0?null:function(t){return Lh(_i(t,e).map(pi)).pipe(Ye(gi))}}function qt(n){return n!=null?bi(vi(n)):null}function ri(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function xi(n){return n._rawValidators}function Ci(n){return n._rawAsyncValidators}function Bt(n){return n?Array.isArray(n)?n:[n]:[]}function tt(n,e){return Array.isArray(n)?n.includes(e):n===e}function oi(n,e){let t=Bt(e);return Bt(n).forEach(r=>{tt(t,r)||t.push(r)}),t}function si(n,e){return Bt(e).filter(t=>!tt(n,t))}var nt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ut(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=qt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control?.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}};var ce=class extends nt{name;get formDirective(){return null}get path(){return null}};var Fe=`VALID`;var Je=`INVALID`;var le=`PENDING`;var Ae=`DISABLED`;var U=class{};var it=class extends U{value;source;constructor(e,t){super(),this.value=e,this.source=t}};var Re=class extends U{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}};var Ie=class extends U{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}};var de=class extends U{status;source;constructor(e,t){super(),this.status=e,this.source=t}};var rt=class extends U{source;constructor(e){super(),this.source=e}};var ue=class extends U{source;constructor(e){super(),this.source=e}};function Si(n){return(at(n)?n.validators:n)||null}function Tr(n){return Array.isArray(n)?Ut(n):n||null}function Ni(n,e){return(at(e)?e.asyncValidators:n)||null}function Or(n){return Array.isArray(n)?qt(n):n||null}function at(n){return n!=null&&!Array.isArray(n)&&typeof n==`object`}function Pr(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new M(1e3,``);if(!Mi(i,t))throw new M(1001,``)}function kr(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new M(-1002,``)})}var fe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=st$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return ne(this.statusReactive)}set status(e){ne(()=>this.statusReactive.set(e))}_status=ut$1(()=>this.statusReactive());statusReactive=st$1(void 0);get valid(){return this.status===Fe}get invalid(){return this.status===Je}get pending(){return this.status===le}get disabled(){return this.status===Ae}get enabled(){return this.status!==Ae}errors;get pristine(){return ne(this.pristineReactive)}set pristine(e){ne(()=>this.pristineReactive.set(e))}_pristine=ut$1(()=>this.pristineReactive());pristineReactive=st$1(!0);get dirty(){return!this.pristine}get touched(){return ne(this.touchedReactive)}set touched(e){ne(()=>this.touchedReactive.set(e))}_touched=ut$1(()=>this.touchedReactive());touchedReactive=st$1(!1);get untouched(){return!this.touched}_events=new Z;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(oi(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(oi(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(si(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(si(e,this._rawAsyncValidators))}hasValidator(e){return tt(this._rawValidators,e)}hasAsyncValidator(e){return tt(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsTouched(U$1($({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new Ie(!0,i))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),e.onlySelf||this._parent?._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new Ie(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;e.onlySelf||this._parent?.markAsDirty(U$1($({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new Re(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),e.onlySelf||this._parent?._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new Re(!0,i))}markAsPending(e={}){this.status=le;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new de(this.status,t)),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.markAsPending(U$1($({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Ae,this.errors=null,this._forEachChild(r=>{r.disable(U$1($({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new it(this.value,i)),this._events.next(new de(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(U$1($({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Fe,this._forEachChild(i=>{i.enable(U$1($({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(U$1($({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){e.onlySelf||(this._parent?.updateValueAndValidity(e),e.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Fe||this.status===le)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new it(this.value,t)),this._events.next(new de(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),e.onlySelf||this._parent?.updateValueAndValidity(U$1($({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ae:Fe}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=le,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let i=pi(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(`.`)),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i?.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new de(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new Be$1,this.statusChanges=new Be$1}_calculateStatus(){return this._allControlsDisabled()?Ae:this.errors?Je:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(le)?le:this._anyControlsHaveStatus(Je)?Je:Fe}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,e.onlySelf||this._parent?._updatePristine(e,t),r&&this._events.next(new Re(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Ie(this.touched,t)),e.onlySelf||this._parent?._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){at(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Tr(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Or(this._rawAsyncValidators)}_updateHasRequiredValidator(){ne(()=>this._hasRequired.set(this.hasValidator(G.required)))}};function Mi(n,e){return Object.hasOwn(n,e)}function Wt(n){return n.tagName===`INPUT`||n.tagName===`SELECT`||n.tagName===`TEXTAREA`}function Ei(n){if(n.tagName!==`INPUT`)return!1;let e=n.type;return e===`number`||e===`range`||e===`date`||e===`month`}function wi(n){return n.tagName===`INPUT`||n.tagName===`TEXTAREA`}function Pe(n,e,t,i){switch(t){case`name`:n.setAttribute(e,t,i);break;case`disabled`:case`readonly`:case`required`:i?n.setAttribute(e,t,``):n.removeAttribute(e,t);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?n.setAttribute(e,t,i.toString()):n.removeAttribute(e,t);break}}var jt=class{kind;context;control;message;constructor({kind:e,context:t,control:i}){this.kind=e,this.context=t,this.control=i}};var Lr=(()=>{class n{_validator=et;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):et,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,features:[sm]})}return n})();var Br={provide:Oe,useExisting:ho$1(()=>Di),multi:!0};var Di=(()=>{class n extends Lr{required;inputName=`required`;normalizeInput=kP;createValidator=t=>mi;enabled(t){return t}static ɵfac=(()=>{let t;return function(r){return(t||(t=bm(n)))(r||n)}})();static ɵdir=ZI({type:n,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&fp(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[fD([Br]),ip]})}return n})();var Fi=new x(``);var Ai=new x(``,{factory:()=>jr});var jr=`always`;function ai(n,e,t=!0){let i=()=>{};e?.valueAccessor?.registerOnChange(i),e?.valueAccessor?.registerOnTouched(i),st(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function ot(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Vi(n,e){let t=xi(n);e.validator!==null?n.setValidators(ri(t,e.validator)):typeof t==`function`&&n.setValidators([t]);let i=Ci(n);e.asyncValidator!==null?n.setAsyncValidators(ri(i,e.asyncValidator)):typeof i==`function`&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();ot(e._rawValidators,r),ot(e._rawAsyncValidators,r)}function st(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=xi(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=Ci(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return ot(e._rawValidators,i),ot(e._rawAsyncValidators,i),t}function Ri(n,e){Vi(n,e)}function Hr(n,e){return st(n,e)}function zr(n){return Object.getPrototypeOf(n.constructor)===xr}function Ii(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn===`submit`&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function $t(n,e){if(!e)return null;let t,i,r;return e.forEach(o=>{o.constructor===ui?t=o:zr(o)?i=o:r=o}),r||i||t||null}function Gr(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}var me=class extends nt{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(e){this.userOnReset=e,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof ue&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=$t(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(e,t,i){super(),this.injector=e,this.renderer=t,this.rawValueAccessors=i,this.injector?.get(oe)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let e=this.injector?.get(AP);if(!this.control||!e)return;let t=e.markForCheck.bind(e);this.subscription=new q$1,this.subscription.add(this.control.valueChanges.subscribe(t)),this.subscription.add(this.control.statusChanges.subscribe(t)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof ue&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(e){!e.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!e.customControl||(this.isCustomControlBased=!0,e.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),e.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Wt(e.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof Di))}ngControlUpdate(e,t){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,e.setCustomControlModelInput(i.value)),this.bindControlProperty(e,r,`touched`,i.touched),this.bindControlProperty(e,r,`dirty`,i.dirty),this.bindControlProperty(e,r,`valid`,i.valid),this.bindControlProperty(e,r,`invalid`,i.invalid),this.bindControlProperty(e,r,`pending`,i.pending),this.bindControlProperty(e,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(e,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);e.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(e,t,i,r){if(t[i]===r)return;t[i]=r;let o=e.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&Pe(this.renderer,e.nativeElement,i,r)}_convertErrors(e){if(e===null)return[];let t=this.control;return Object.entries(e).map(([i,r])=>new jt({context:r,kind:i,control:t}))}setParseErrorSource(e){if(e===void 0)return;let t=null,i=ut$1(()=>{let r=e();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>t).bind(this),ea(()=>{t=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(e){this.parseErrorsValidator&&(e?.removeValidators(this.parseErrorsValidator),e?.updateValueAndValidity({emitEvent:!1}))}};var Te=class extends fe{constructor(e,t,i){super(Si(t),Ni(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this._find(e)||(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){let i=this._find(e);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){let r=this._find(e);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this._find(e)?.enabled===!0}setValue(e,t={}){ne(()=>{kr(this,!0,e),Object.keys(e).forEach(i=>{Pr(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)})}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this._find(i);r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,U$1($({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new ue(this))}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return Mi(this.controls,e)?this.controls[e]:null}};var Ur={provide:ce,useExisting:ho$1(()=>Kt)};var Ve=Promise.resolve();var Kt=(()=>{class n extends ce{callSetDisabledState;get submitted(){return ne(this.submittedReactive)}_submitted=ut$1(()=>this.submittedReactive());submittedReactive=st$1(!1);_directives=new Set;form;ngSubmit=new Be$1;options;constructor(t,i,r){super(),this.callSetDisabledState=r,this.form=new Te({},Ut(t),qt(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Ve.then(()=>{t.control=this._findContainer(t.path).registerControl(t.name,t.control),t._setupWithForm(this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Ve.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Ve.then(()=>{let i=this._findContainer(t.path),r=new Te({});Ri(r,t),i.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Ve.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,i){Ve.then(()=>{this.form.get(t.path).setValue(i)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Ii(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new rt(this.control)),t?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static ɵfac=function(i){return new(i||n)(Cr$1(Oe,10),Cr$1(fi,10),Cr$1(Ai,8))};static ɵdir=ZI({type:n,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&Ep(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[fD([Ur]),ip]})}return n})();function li(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function di(n){return typeof n==`object`&&n!==null&&Object.keys(n).length===2&&`value`in n&&`disabled`in n}var qr=class extends fe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(Si(t),Ni(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),at(t)&&(t.nonNullable||t.initialValueIsDefault)&&(di(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){ne(()=>{this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)})}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new ue(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){li(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){li(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){di(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Wr=n=>n instanceof qr;var $r=(()=>{class n extends ce{callSetDisabledState;get submitted(){return ne(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=ut$1(()=>this._submittedReactive());_submittedReactive=st$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty(`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(st(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let i=this.form.get(t.path);return t._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){ai(t.control||null,t,!1),Gr(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,i){this.form.get(t.path).setValue(i)}onReset(){this.resetForm()}resetForm(t=void 0,i={}){this.form.reset(t,i),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,Ii(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new rt(this.control)),t?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(ai(i||null,t),Wr(r)&&t._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Ri(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let i=this.form?.get(t.path);i&&Hr(i,t)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Vi(this.form,this),this._oldForm&&st(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||n)(Cr$1(Oe,10),Cr$1(fi,10),Cr$1(Ai,8))};static ɵdir=ZI({type:n,features:[ip,sm]})}return n})();var Kr={provide:ce,useExisting:ho$1(()=>Zt)};var Zt=(()=>{class n extends $r{form=null;ngSubmit=new Be$1;get control(){return this.form}static ɵfac=(()=>{let t;return function(r){return(t||(t=bm(n)))(r||n)}})();static ɵdir=ZI({type:n,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&Ep(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[fD([Kr]),ip]})}return n})();var Li=Symbol(`FIELD_TREE`);var Yt=0;function Zr(){return Yt}function q(n,e){return(...t)=>{try{return Yt=e,n(...t)}finally{Yt=0}}}function Yr(n){return!n}function Ti(n){return n}function L(n){return Array.isArray(n)}function dt(n){return(typeof n==`object`||typeof n==`function`)&&n!=null}var ee=Symbol();var _t=Symbol();var Le=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(Oi(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(i=>Oi(this.predicates,i)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var ct=class extends Le{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let i=t(e);return i&&i!==_t})}};var pe=class n extends Le{ignore;static ignoreNull(e){return new n(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,i)=>{let r=i(e);return r===void 0||r===_t?t:L(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var Qt=class extends pe{constructor(e){super(e,void 0)}};var Xt=class extends Le{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let i=0;i<this.fns.length;i++){let r=this.fns[i](e);r!==_t&&(t=this.key.reducer.reduce(t,r))}return t}};function Oi(n,e){return n.length===0?e:t=>{for(let i of n){let r=t.stateOf(i.path),o=ne(r.structure.pathKeys).length-i.depth;for(let s=0;s<o;s++)r=r.structure.parent;if(!i.fn(r.context))return _t}return e(t)}}var ge=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new ct(e),this.disabledReasons=new Qt(e),this.readonly=new ct(e),this.syncErrors=pe.ignoreNull(e),this.syncTreeErrors=pe.ignoreNull(e),this.asyncErrors=pe.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Xt(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let i=e.metadata.get(t);this.getMetadata(t).mergeIn(i)}}};var ut=class{depth;constructor(e){this.depth=e}build(){return new ft(this,[],0)}};var _e=class n extends ut{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===ee){let t=this.getCurrent().children;t.size>(t.has(ee)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:q(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Be(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new n(0)}};var Be=class extends ut{logic=new ge([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(q(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(q(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(q(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(q(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(q(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(q(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(q(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new _e(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var ft=class n{builder;predicates;depth;logic;constructor(e,t,i){this.builder=e,this.predicates=t,this.depth=i,this.logic=e?Qr(e,t,i):new ge([])}getChild(e){let t=this.builder?Bi(this.builder,e):[];if(t.length===0)return new n(void 0,[],this.depth+1);if(t.length===1){let{builder:i,predicates:r}=t[0];return new n(i,[...this.predicates,...r.map(o=>en(o,this.depth))],this.depth+1)}else return new Jt(t.map(({builder:r,predicates:o})=>new n(r,[...this.predicates,...o.map(s=>en(s,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Jt=class n{all;logic;constructor(e){this.all=e,this.logic=new ge([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new n(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function Bi(n,e){if(n instanceof _e)return n.all.flatMap(({builder:t,predicate:i})=>{let r=Bi(t,e);return i?r.map(({builder:o,predicates:s})=>({builder:o,predicates:[...s,i]})):r});if(n instanceof Be)return[...e!==ee&&n.children.has(ee)?[{builder:n.getChild(ee),predicates:[]}]:[],...n.children.has(e)?[{builder:n.getChild(e),predicates:[]}]:[]];throw new M(1909,!1)}function Qr(n,e,t){let i=new ge(e);if(n instanceof _e){let r=n.all.map(({builder:o,predicate:s})=>new ft(o,s?[...e,en(s,t)]:e,t));for(let o of r)i.mergeIn(o.logic)}else if(n instanceof Be)i.mergeIn(n.logic);else throw new M(1909,!1);return i}function en(n,e){return U$1($({},n),{depth:e})}var ji=Symbol(`PATH`);var H=class n{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Xr);logicBuilder;constructor(e,t,i,r){this.keys=e,this.parent=i,this.keyInParent=r,this.root=t??this,i||(this.logicBuilder=_e.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new n([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let i=e.compile();this.builder.mergeIn(i.builder,t)}static unwrapFieldPath(e){return e[ji]}static newRoot(){return new n([],void 0,void 0,void 0)}};var Xr={get(n,e){return e===ji?n:n.getChild(e).fieldPathProxy}};var lt;var ke=new Map;var mt=class n{schemaFn;constructor(e){this.schemaFn=e}compile(){if(ke.has(this))return ke.get(this);let e=H.newRoot();ke.set(this,e);let t=lt;try{lt=e,this.schemaFn(e.fieldPathProxy)}finally{lt=t}return e}static create(e){return e instanceof n?e:new n(e)}static rootCompile(e){try{return ke.clear(),e===void 0?H.newRoot():e instanceof n?e.compile():new n(e).compile()}finally{ke.clear()}}};function Jr(n){return n instanceof mt||typeof n==`function`}function fn(n){if(lt!==H.unwrapFieldPath(n).root)throw new M(1908,!1)}function ve(n,e,t){return fn(n),H.unwrapFieldPath(n).builder.addMetadataRule(e,t),e}var te={list(){return{reduce:(n,e)=>e===void 0?n:[...n,e],getInitial:()=>[]}},min(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e<n?e:n,getInitial:()=>{}}},max(){return{reduce:(n,e)=>n===void 0||e===void 0?n??e:e>n?e:n,getInitial:()=>{}}},or(){return{reduce:(n,e)=>n||e,getInitial:()=>!1}},and(){return{reduce:(n,e)=>n&&e,getInitial:()=>!0}},override:eo};function eo(n){return{reduce:(e,t)=>t,getInitial:()=>n?.()}}var mn=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var ht=class{reducer;create;brand;[mn];constructor(e,t){this.reducer=e,this.create=t}};function B(n){return new ht(n??te.override())}function hn(){return B()}var pn=B(te.or());var gn=hn();var _n=B(te.max());var Hi=hn();var zi=B(te.max());var Gi=B(te.min());var Ui=B(te.list());function D(n,e){if(n===e)return!0;if(!n||!e||n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}function to(n){return n.errors().length>0?`invalid`:n.pending()?`unknown`:`valid`}var tn=class{node;constructor(e){this.node=e}rawSyncTreeErrors=ut$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:D});syncErrors=ut$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...no(this.node.submitState.submissionErrors())],{equal:D});syncValid=ut$1(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Yr));syncTreeErrors=ut$1(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:D});rawAsyncErrors=ut$1(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:D});asyncErrors=ut$1(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:D});parseErrors=ut$1(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:D});errors=ut$1(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:D});errorSummary=ut$1(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,i)=>[...i,...t.errorSummary()]);return ne(()=>e.sort(io)),e},{equal:D});pending=ut$1(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=ut$1(()=>{if(this.shouldSkipValidation())return`valid`;let e=to(this);return this.node.structure.reduceChildren(e,(t,i)=>i===`invalid`||t.validationState.status()===`invalid`?`invalid`:i===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=ut$1(()=>this.status()===`valid`);invalid=ut$1(()=>this.status()===`invalid`);shouldSkipValidation=ut$1(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function no(n){return n===void 0?[]:L(n)?n:[n]}function vn(n,e){if(L(n))for(let t of n)t.fieldTree??=e;else n&&(n.fieldTree??=e);return n}function Pi(n){return n.formField?n.formField.element:n.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function io(n,e){let t=Pi(n),i=Pi(e);return t===i?0:t===void 0||i===void 0?t===void 0?1:-1:t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var nn=B();var rn=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=ut$1(()=>{let i=H.unwrapFieldPath(e),r=this.node,o=Zr();for(;o>0||!r.structure.logic.hasLogic(i.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new M(1900,!1);for(let s of i.keys)if(r=r.structure.getChild(s),r===void 0)throw new M(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=ut$1(()=>{let e=this.key();if(!L(ne(this.node.structure.parent.value)))throw new M(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof fe)throw new M(1907,!1);return t}};var on=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=Qp();e&&Vc(!1);try{ne(()=>Do$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let i=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,ut$1(()=>i.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&Vc(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new M(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,ut$1(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var ro={get(n,e,t){if(e===Li)return!0;let i=n(),r=i.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=ne(i.value);if(L(o)){if(e===`length`)return i.value().length;if(e===Symbol.iterator)return()=>(i.value(),Array.prototype[Symbol.iterator].apply(i.fieldTree))}if(dt(o)&&e===Symbol.iterator)return function*(){for(let s in t)yield[s,t[s]]}},getOwnPropertyDescriptor(n,e){let t=ne(n().value),i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.configurable&&(i.configurable=!0),i},ownKeys(n){let e=ne(n().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function oo(n,e){let t=ut$1(()=>n()[e()]);return t[j]=n[j],t.set=i=>{Object.is(ne(t),i)||n.update(r=>so(r,i,e()))},t.update=i=>{t.set(i(ne(t)))},t.asReadonly=()=>t,t}function so(n,e,t){if(L(n)){let i=[...n];return i[t]=e,i}else return U$1($({},n),{[t]:e})}var he=Symbol(``);var qi=ut$1(()=>!1);var pt=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=Ie$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,i){this.logic=e,this.node=t,this.createChildNode=i}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>ne(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return ne(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||ne(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),i=ne(this.childrenMap)?.byPropertyKey.get(t)?.reader;return i||(i=this.createReader(t)),i()}reduceChildren(e,t,i){let r=this.childrenMap();if(!r)return e;let o=e;for(let s of r.byPropertyKey.values()){if(i?.(o))break;o=t(ne(s.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,i){if(e===`root`)return{keyInParent:Wi,isOrphaned:qi};let r=this.parent,o=i,s=ut$1(()=>{if(r.structure.isOrphaned())return he;let f=r.structure.childrenMap();if(!f)return he;let E=f.byPropertyKey.get(o);if(E&&E.node===this.node)return o;if(t===void 0)return he;for(let[ye,j]of f.byPropertyKey)if(j.node===this.node)return o=ye;return he}),a=ut$1(()=>s()===he);return{keyInParent:ut$1(()=>{let f=s();if(f===he)throw t===void 0?new M(-1902,!1):new M(1904,!1);return f}),isOrphaned:a}}createChildrenMap(){return kc({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,i){if(!dt(e)||!i&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r,o=L(e);t!==void 0&&(o?r=lo(t,e,this.identitySymbol):r=co(t,e));for(let s of Object.keys(e)){let a,c=e[s];if(c===void 0){t.byPropertyKey.has(s)&&(r??=$({},t),r.byPropertyKey.delete(s));continue}o&&dt(c)&&!L(c)&&(a=c[this.identitySymbol]??=Symbol(``));let f;a&&(t.byTrackingKey?.has(a)||(r??=$({},t),r.byTrackingKey??=new Map,r.byTrackingKey.set(a,this.createChildNode(s,a,o))),f=(r??t).byTrackingKey.get(a));let E=t.byPropertyKey.get(s);E===void 0?(r??=$({},t),r.byPropertyKey.set(s,{reader:this.createReader(s),node:f??this.createChildNode(s,a,o)})):f&&f!==E.node&&(r??=$({},t),E.node=f)}return r??t}createReader(e){return ut$1(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var sn=class extends pt{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return ao}get keyInParent(){return Wi}isOrphaned=qi;childrenMap;constructor(e,t,i,r,o){super(t,e,o),this.fieldManager=i,this.value=r,this.childrenMap=this.createChildrenMap()}};var an=class extends pt{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,i,r,o,s){super(t,e,s),this.logic=t,this.parent=i,this.root=this.parent.structure.root;let a=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=a.isOrphaned,this.keyInParent=a.keyInParent,this.pathKeys=ut$1(()=>[...i.structure.pathKeys(),this.keyInParent()]),this.value=oo(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var ao=ut$1(()=>[]);var Wi=ut$1(()=>{throw new M(1905,!1)});function lo(n,e,t){let i,r=new Set(n.byPropertyKey.keys()),o=n.byTrackingKey&&new Set(n.byTrackingKey.keys());for(let s=0;s<e.length;s++){let a=e[s];r.delete(s.toString()),o&&dt(a)&&Object.hasOwn(a,t)&&o.delete(a[t])}if(r.size>0){i??=$({},n);for(let s of r)i.byPropertyKey.delete(s)}if(o&&o.size>0){i??=$({},n);for(let s of o)i.byTrackingKey.delete(s)}return i}function co(n,e){let t;for(let i of n.byPropertyKey.keys())e.hasOwnProperty(i)||(t??=$({},n),t.byPropertyKey.delete(i));return t}var ln=class{node;selfSubmitting=st$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=kc({source:this.node.structure.value,computation:()=>[]})}submitting=ut$1(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var je=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new rn(this)}fieldProxy=new Proxy(()=>this,ro);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new on(this),this.submitState=new ln(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(ki,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(ki,void 0)}pendingSync=kc({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata(Hi)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(Gi)}get min(){let e=this.metadata(gn)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(zi)}get pattern(){return this.metadata(Ui)??uo}get required(){return this.metadata(pn)??fo}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||ne(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){ne(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){ne(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[mn]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=kc(this.value);e.rawSet=e.set,e.set=i=>{e.rawSet(i),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=i=>{t(i),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=ne(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,i=e(t.signal);if(i&&(this.pendingSync.set(t),await i,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,i,r){return r.newRoot(e,t,i,r)}createStructure(e){return e.kind===`root`?new sn(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new an(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,i){let r,o;return i?(r=this.pathNode.getChild(ee),o=this.structure.logic.getChild(ee)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var uo=ut$1(()=>[]);var fo=ut$1(()=>!1);function ki(n,e){return n?e&&n.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:n:e}var dn=class{node;selfTouched=st$1(!1);selfDirty=st$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=st$1([]);constructor(e){this.node=e}dirty=ut$1(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.dirty(),Ti)});touched=ut$1(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,i)=>i||t.nodeState.touched(),Ti)});disabledReasons=ut$1(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:D});disabled=ut$1(()=>!!this.disabledReasons().length);readonly=ut$1(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=ut$1(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=ut$1(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=ut$1(()=>{if(this.node.logicNode.logic.hasMetadata(nn)){let t=this.node.logicNode.logic.getMetadata(nn).compute(this.node.context);if(t)return i=>t(this.node.context,i)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=ut$1(()=>this.hidden()||this.disabled()||this.readonly())};var cn=class{newRoot(e,t,i,r){return new je({kind:`root`,fieldManager:e,value:t,pathNode:i,logic:i.builder.build(),fieldAdapter:r})}newChild(e){return new je(e)}createNodeState(e){return new dn(e)}createValidationState(e){return new tn(e)}createStructure(e,t){return e.createStructure(t)}};var un=class{injector;rootName;submitOptions;constructor(e,t,i){this.injector=e,this.rootName=t??`${this.injector.get(Js)}.form${mo++}`,this.submitOptions=i}structures=new Set;createFieldManagementEffect(e){ea(()=>{let t=new Set;this.markStructuresLive(e,t);for(let i of this.structures)t.has(i)||(this.structures.delete(i),ne(()=>i.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let i of e.children())this.markStructuresLive(i.structure,t)}};var mo=0;var $i=new x(``);function ho(n){let e,t,i;return n.length===3?[e,t,i]=n:n.length===2?Jr(n[1])?[e,t]=n:[e,i]=n:[e]=n,[e,t,i]}function po(...n){let[e,t,i]=ho(n),r=i?.injector??E(Ie$1),o=Do$1(r,()=>mt.rootCompile(t)),s=new un(r,i?.name,i?.submission),a=i?.adapter??new cn,c=je.newRoot(s,e,o,a);s.createFieldManagementEffect(c.structure);let{experimentalWebMcpTool:f}=i??{};if(f){let E$1=Do$1(r,()=>E($i,{optional:!0}));E$1&&Do$1(r,()=>E$1(c.fieldTree,{name:f.name,description:f.description}))}return c.fieldTree}async function go(n,e){let t=ne(n);if(ne(t.submitState.submitting))return!1;let i=e===void 0?t.structure.root.fieldProxy:n,r={root:t.structure.root.fieldProxy,submitted:n};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new M(1915,!1);t.markAsTouched();let s=e?.onInvalid,a=_o(t,e?.ignoreValidators);try{if(a){t.submitState.selfSubmitting.set(!0);let c=await ne(()=>o?.(i,r));return c&&vo(t,c),!c||L(c)&&c.length===0}else ne(()=>s?.(i,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function _o(n,e){switch(e){case`all`:return!0;case`none`:return ne(n.valid);default:return!ne(n.invalid)}}function vo(n,e){L(e)||(e=[e]);let t=new Map;for(let i of e){let r=vn(i,n.fieldTree),o=r.fieldTree(),s=t.get(o);s||(s=[],t.set(o,s)),s.push(r)}for(let[i,r]of t)i.submitState.submissionErrors.set(r)}var gt=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:i}){this.context=e,this.kind=t,this.control=i}};function Ki(n){if(n.length===0)return null;let e={};for(let t of n)e[t.kind]=t instanceof gt?t.context:t;return e}function Zi(n,e){return n===null?[]:Object.entries(n).map(([t,i])=>new gt({context:i,kind:t,control:e}))}var yo=new x(``);function vt(n,e){return n instanceof Function?n(e):n}function bo(n){return typeof n==`number`?isNaN(n):n===``||n===!1||n==null}function Yi(n){return n===void 0?[]:Array.isArray(n)?n:[n]}function Ji(n,e){fn(n),H.unwrapFieldPath(n).builder.addSyncErrorRule(i=>vn(e(i),i.fieldTree))}function xo(n){return new yn(n)}function Co(n,e){return new bn(n,e)}var He=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var yn=class extends He{kind=`required`};var bn=class extends He{min;kind=`min`;constructor(e,t){super(t),this.min=e}};var yt=class extends He{kind=`parse`};function ca(n,e,t){let i=B();ve(n,i,r=>{if(!(t?.when&&!t.when(r)))return typeof e==`function`?e(r):e}),ve(n,_n,({state:r})=>r.metadata(i)()),ve(n,gn,()=>_n),Ji(n,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let s=r.state.metadata(i)();if(!(s===void 0||Number.isNaN(s))&&o<s)return t?.error?vt(t.error,r):Co(s,{message:vt(t?.message,r)})})}function ua(n,e){let t=ve(n,B(),i=>e?.when?e.when(i):!0);ve(n,pn,({state:i})=>i.metadata(t)()),Ji(n,i=>{if(i.state.metadata(t)()&&bo(i.value()))return e?.error?vt(e.error,i):xo({message:vt(e?.message,i)})})}function So(n,e,t){let i=kc({source:n,computation:()=>[],equal:D}),r=s=>{let a=t(s);i.set(Yi(a.error)),a.value!==void 0&&e(a.value),i.set(Yi(a.error))},o=()=>{i.set([])};return{errors:i.asReadonly(),setRawValue:r,reset:o}}var xn=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return Ki(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new M(1910,!1)}valueAccessor=null;hasValidator(e){return e===G.required?this.field().required():!1}updateValueAndValidity(){}};var Cn={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var No=(()=>{let n={};for(let e of Object.keys(Cn))n[Cn[e]]=e;return n})();function Sn(n,e){return n[No[e]]?.()}var Nn=Object.values(Cn);function xt(){return{}}function W(n,e,t){return n[e]!==t?(n[e]=t,!0):!1}function Mo(n,e,t){let i;if(er(n)&&t.isBadInput(n))return{error:new yt};switch(n.type){case`checkbox`:return{value:n.checked};case`number`:case`range`:case`datetime-local`:if(i=ne(e),typeof i==`number`||i===null)return{value:n.value===``?null:n.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(i=ne(e),i===null||i instanceof Date)return{value:n.valueAsDate};if(typeof i==`number`)return{value:n.valueAsNumber};break}if(n.tagName===`INPUT`&&n.type===`text`&&(i??=ne(e),typeof i==`number`||i===null)){if(n.value===``)return{value:null};let r=Number(n.value);return Number.isNaN(r)?{error:new yt}:{value:r}}return{value:n.value}}function Qi(n,e){switch(n.type){case`checkbox`:n.checked=e;return;case`radio`:n.checked=e===n.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){Xi(n,e);return}else if(e===null){n.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){n.valueAsDate=e;return}else if(typeof e==`number`){Xi(n,e);return}}if(n.tagName===`INPUT`&&n.type===`text`){if(typeof e==`number`){n.value=isNaN(e)?``:String(e);return}if(e===null){n.value=``;return}}n.value=e}function Xi(n,e){isNaN(e)?n.value=``:n.valueAsNumber=e}function er(n){return n.tagName===`INPUT`}function Eo(n){return n.type===`date`||n.type===`datetime-local`||n.type===`month`||n.type===`time`||n.type===`week`}function wo(n,e){let t=n.getUTCFullYear(),i=String(n.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${i}`;return`${t}-${i}-${String(n.getUTCDate()).padStart(2,`0`)}`}function tr(n,e,t){return e instanceof Date&&(n===`min`||n===`max`)&&(t===`date`||t===`month`)?wo(e,t):e}function Do(n,e){n.listenToCustomControlModel(i=>e.state().controlValue.set(i)),n.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(n.customControl);let t=xt();return()=>{let i=e.state(),r=i.controlValue();W(t,`controlValue`,r)&&n.setCustomControlModelInput(r);for(let o of Nn){let s;if(o===`errors`?s=e.errors():s=Sn(i,o),W(t,o,s)&&(n.setInputOnDirectives(o,s),e.elementAcceptsNativeProperty(o)&&!n.customControlHasInput(o))){let a=tr(o,s,e.nativeFormElement.type);Pe(e.renderer,e.nativeFormElement,o,a)}}}}function Fo(n){return typeof n==`object`&&n!==null}function Ao(n,e){let t=xt();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let i=e.injector.get(Oe,null,{optional:!0,self:!0});if(i){let r;for(let c of i)Fo(c)&&c.registerOnValidatorChange&&(r??=st$1(0),c.registerOnValidatorChange(()=>{r.update(f=>f+1)}));let o=i.map(c=>typeof c==`function`?c:c.validate.bind(c)),s=G.compose(o),a=ut$1(()=>{r?.();return Zi(s?s(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(a)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,ne(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();W(t,`controlValue`,o)&&ne(()=>e.controlValueAccessor.writeValue(o));for(let s of Nn){let a=Sn(r,s);if(W(t,s,a)){let c=n.setInputOnDirectives(s,a);s===`disabled`&&e.controlValueAccessor.setDisabledState?ne(()=>e.controlValueAccessor.setDisabledState(a)):!c&&e.elementAcceptsNativeProperty(s)&&Pe(e.renderer,e.nativeFormElement,s,a)}}}}function Vo(n,e,t){if(typeof MutationObserver!=`function`)return;let i=new MutationObserver(r=>{r.some(o=>Ro(o))&&e()});i.observe(n,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>i.disconnect())}function Ro(n){if(n.type===`childList`||n.type===`characterData`){if(n.target instanceof Comment)return!1;for(let e of n.addedNodes)if(!(e instanceof Comment))return!0;for(let e of n.removedNodes)if(!(e instanceof Comment))return!0;return!1}return n.type===`attributes`&&n.target instanceof HTMLOptionElement}function Io(n,e,t,i){let r=!1,o=e.nativeFormElement,s=So(()=>e.state().value(),c=>e.state().controlValue.set(c),c=>Mo(o,e.state().value,i));t.set(s.errors),e.onReset=()=>{s.reset();let c=e.state().value();a.controlValue=c,Qi(o,c)},n.listenToDom(`input`,()=>s.setRawValue(void 0)),n.listenToDom(`blur`,()=>e.state().markAsTouched()),er(o)&&Eo(o)&&i.watchValidity(e.destroyRef,o,()=>s.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&Vo(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let a=xt();return()=>{let c=e.state();for(let j of Nn){let be=Sn(c,j);if(W(a,j,be)&&(n.setInputOnDirectives(j,be),e.elementAcceptsNativeProperty(j))){let Nt=tr(j,be,o.type);Pe(e.renderer,o,j,Nt)}}let f=c.controlValue(),E=W(a,`controlValue`,f),ye=o.type===`radio`&&W(a,`radioValue`,o.value);(E||ye)&&Qi(o,f),r=!0}}var nr=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵprov=ie({token:n,factory:t=>To.ɵfac(t),providedIn:`root`})}return n})();var To=(()=>{class n extends nr{document=E(yn$1);cspNonce=E(Ug,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,i,r){let o=i.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let s=a=>{let c=a;(c.animationName===`ng-valid`||c.animationName===`ng-invalid`)&&r()};i.addEventListener(`animationstart`,s),t.onDestroy(()=>{i.removeEventListener(`animationstart`,s)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let i=this.document.createElement(`style`);return this.cspNonce&&(i.nonce=this.cspNonce),i.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(i):t.appendChild(i),i}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=bm(n)))(r||n)}})();static ɵprov=ie({token:n,factory:n.ɵfac})}return n})();var Oo=Symbol();var bt=new x(``);var fa=(()=>{class n{field=MP.required({alias:`formField`});state=ut$1(()=>this.field()());renderer=E(Sa);destroyRef=E(oe);injector=E(Ie$1);element=E(Ir$1).nativeElement;elementIsNativeFormElement=Wt(this.element);elementAcceptsTextualValues=wi(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=E(Ht,{optional:!0,self:!0});config=E(yo,{optional:!0});validityMonitor=E(nr);parseErrorsSource=st$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new xn(this.state)}parseErrors=ut$1(()=>this.parseErrorsSource()?.().map(t=>U$1($({},t),{fieldTree:ne(this.state).fieldTree,formField:this}))??[],{equal:D});errors=ut$1(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:D});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:$t(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,ut$1(()=>o(this))]);if(t.length===0)return;let i=xt();LP({write:()=>{for(let[r,o]of t){let s=o();W(i,r,s)&&(s?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new M(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=i=>t.focus(i)),t?.reset&&(this.resetter=()=>t.reset()),ea(i=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),i(()=>{r.nodeState.formFieldBindings.update(o=>o.filter(s=>s!==this))})},{injector:this.injector})}[Oo];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Ao(t,this);else if(t.customControl)this.ɵngControlUpdate=Do(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Io(t,this,this.parseErrorsSource,this.validityMonitor);else throw new M(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=Ei(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[fD([{provide:bt,useExisting:n},{provide:me,useFactory:()=>E(n).interopNgControl},{provide:Fi,useFactory:()=>E(bt,{self:!0})}]),XI(`formField`)]})}return n})();var Mn=class{_box;_destroyed=new Z;_resizeSubject=new Z;_resizeObserver;_elementObservables=new Map;constructor(e){this._box=e,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(t=>this._resizeSubject.next(t)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new _(t=>{let i=this._resizeSubject.subscribe(t);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),i.unsubscribe(),this._elementObservables.delete(e)}}).pipe(Kt$1(t=>t.some(i=>i.target===e)),Qh({bufferSize:1,refCount:!0}),Kh(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var ir=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=E(xe);constructor(){}ngOnDestroy(){for(let[,t]of this._observers)t.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(t,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new Mn(r)),this._observers.get(r).observe(t)}static ɵfac=function(i){return new(i||n)};static ɵprov=vr$1({token:n,factory:n.ɵfac})}return n})();var Po=[`notch`];var ko=[`*`];var rr=[`iconPrefixContainer`];var or=[`textPrefixContainer`];var sr=[`iconSuffixContainer`];var ar=[`textSuffixContainer`];var Lo=[`textField`];var Bo=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var jo=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function Ho(n,e){n&1&&hp(0,`span`,21)}function zo(n,e){if(n&1&&(fi$1(0,`label`,20),xE(1,1),pE(2,Ho,1,0,`span`,21),_c()),n&2){let t=ME(2);pp(`floating`,t._shouldLabelFloat())(`monitorResize`,t._hasOutline())(`id`,t._labelId),fp(`for`,t._control.disableAutomaticLabeling?null:t._control.id),lv(2),hE(!t.hideRequiredMarker&&t._control.required?2:-1)}}function Go(n,e){if(n&1&&pE(0,zo,3,5,`label`,20),n&2)hE(ME()._hasFloatingLabel()?0:-1)}function Uo(n,e){n&1&&hp(0,`div`,7)}function qo(n,e){}function Wo(n,e){if(n&1&&ap(0,qo,0,0,`ng-template`,13),n&2){ME(2);pp(`ngTemplateOutlet`,LE(1))}}function $o(n,e){if(n&1&&(fi$1(0,`div`,9),pE(1,Wo,1,1,null,13),_c()),n&2){let t=ME();pp(`matFormFieldNotchedOutlineOpen`,t._shouldLabelFloat()),lv(),hE(t._forceDisplayInfixLabel()?-1:1)}}function Ko(n,e){n&1&&(fi$1(0,`div`,10,2),xE(2,2),_c())}function Zo(n,e){n&1&&(fi$1(0,`div`,11,3),xE(2,3),_c())}function Yo(n,e){}function Qo(n,e){if(n&1&&ap(0,Yo,0,0,`ng-template`,13),n&2){ME();pp(`ngTemplateOutlet`,LE(1))}}function Xo(n,e){n&1&&(fi$1(0,`div`,14,4),xE(2,4),_c())}function Jo(n,e){n&1&&(fi$1(0,`div`,15,5),xE(2,5),_c())}function es(n,e){n&1&&hp(0,`div`,16)}function ts(n,e){n&1&&(fi$1(0,`div`,18),xE(1,6),_c())}function ns(n,e){if(n&1&&(fi$1(0,`mat-hint`,22),rD(1),_c()),n&2){let t=ME(2);pp(`id`,t._hintLabelId),lv(),Lp(t.hintLabel)}}function is(n,e){if(n&1&&(fi$1(0,`div`,19),pE(1,ns,2,2,`mat-hint`,22),xE(2,7),hp(3,`div`,23),xE(4,8),_c()),n&2){let t=ME();lv(),hE(t.hintLabel?1:-1)}}var En=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,selectors:[[`mat-label`]]})}return n})();var rs=new x(`MatError`);var wn=(()=>{class n{align=`start`;id=E(ie$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(vp(`id`,r.id),fp(`align`,null),Sp(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var os=new x(`MatPrefix`);var ss=new x(`MatSuffix`);var hr=new x(`FloatingLabelParent`);var lr=(()=>{class n{_elementRef=E(Ir$1);get floating(){return this._floating}set floating(t){this._floating=t,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(t){this._monitorResize=t,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=E(ir);_ngZone=E(xe);_parent=E(hr);_resizeSubscription=new q$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return as(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&Sp(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function as(n){let e=n;if(e.offsetParent!==null)return e.scrollWidth;let t=e.cloneNode(!0);t.style.setProperty(`position`,`absolute`),t.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(t);let i=t.scrollWidth;return t.remove(),i}var dr=`mdc-line-ripple--active`;var Ct=`mdc-line-ripple--deactivating`;var cr=(()=>{class n{_elementRef=E(Ir$1);_cleanupTransitionEnd;constructor(){let t=E(xe),i=E(Sa);t.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let t=this._elementRef.nativeElement.classList;t.remove(Ct),t.add(dr)}deactivate(){this._elementRef.nativeElement.classList.add(Ct)}_handleTransitionEnd=t=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Ct);t.propertyName===`opacity`&&r&&i.remove(dr,Ct)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var ur=(()=>{class n{_elementRef=E(Ir$1);_ngZone=E(xe);open=!1;_notch;ngAfterViewInit(){let t=this._elementRef.nativeElement,i=t.querySelector(`.mdc-floating-label`);i?(t.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):t.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(t){let i=this._notch.nativeElement;!this.open||!t?i.style.width=``:i.style.width=`calc(${t}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(t){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${t}px)`)}static ɵfac=function(i){return new(i||n)};static ɵcmp=WI({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&wp(Po,5),i&2){let o;RE(o=kE())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&Sp(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:ko,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(SE(),gp(0,`div`,1),Mc(1,`div`,2,0),xE(3),Nc(),gp(4,`div`,3))},encapsulation:2})}return n})();var Dn=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n})}return n})();var Fn=new x(`MatFormField`);var ls=new x(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var fr=`fill`;var ds=`auto`;var mr=`fixed`;var cs=`translateY(-50%)`;var pr=(()=>{class n{_elementRef=E(Ir$1);_changeDetectorRef=E(AP);_platform=E(F);_idGenerator=E(ie$1);_ngZone=E(xe);_defaults=E(ls,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=NP(`iconPrefixContainer`);_textPrefixContainerSignal=NP(`textPrefixContainer`);_iconSuffixContainerSignal=NP(`iconSuffixContainer`);_textSuffixContainerSignal=NP(`textSuffixContainer`);_prefixSuffixContainers=ut$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(t=>t?.nativeElement).filter(t=>t!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=SP(En);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(t){this._hideRequiredMarker=_s(t)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||ds}set floatLabel(t){t!==this._floatLabel&&(this._floatLabel=t,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(t){let i=t||this._defaults?.appearance||fr;this._appearanceSignal.set(i)}_appearanceSignal=st$1(fr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||mr}set subscriptSizing(t){this._subscriptSizing=t||this._defaults?.subscriptSizing||mr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(t){this._hintLabel=t,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(t){this._explicitFormFieldControl=t}_destroyed=new Z;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=De();constructor(){let t=this._defaults,i=E(U$2);t&&(t.appearance&&(this.appearance=t.appearance),this._hideRequiredMarker=!!t?.hideRequiredMarker,t.color&&(this.color=t.color)),ea(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ut$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(t){let i=this._control,r=`mat-mdc-form-field-type-`;t&&this._elementRef.nativeElement.classList.remove(r+t.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(pl([void 0,void 0]),Ye(()=>[i.errorState,i.userAriaDescribedBy]),zh(),Kt$1(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Kh(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(t=>!t._isText),this._hasTextPrefix=!!this._prefixChildren.find(t=>t._isText),this._hasIconSuffix=!!this._suffixChildren.find(t=>!t._isText),this._hasTextSuffix=!!this._suffixChildren.find(t=>t._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ph(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let t=this._control.focused;t&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!t&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,t),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,t)}_syncOutlineLabelOffset(){LP({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let t of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(t,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:t=>this._writeOutlinedLabelStyles(t())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ut$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(t){let i=this._control?this._control.ngControl:null;return i&&i[t]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let t=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&t.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(a=>a.align===`start`):null,s=this._hintChildren?this._hintChildren.find(a=>a.align===`end`):null;o?t.push(o.id):this._hintLabel&&t.push(this._hintLabelId),s&&t.push(s.id)}else this._errorChildren&&t.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||t;r=t.concat(i.filter(s=>s&&!o.includes(s)))}else r=t;this._control.setDescribedByIds(r),this._describedByIds=t}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let t=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=t?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,f=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${cs} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${s+a}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,s+a+c+f]}_writeOutlinedLabelStyles(t){if(t!==null){let[i,r]=t;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let t=this._elementRef.nativeElement;if(t.getRootNode){let i=t.getRootNode();return i&&i!==t}return document.documentElement.contains(t)}static ɵfac=function(i){return new(i||n)};static ɵcmp=WI({type:n,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(Cp(o,r._labelChild,En,5),Tp(o,Dn,5)(o,os,5)(o,ss,5)(o,rs,5)(o,wn,5)),i&2){OE();let s;RE(s=kE())&&(r._formFieldControl=s.first),RE(s=kE())&&(r._prefixChildren=s),RE(s=kE())&&(r._suffixChildren=s),RE(s=kE())&&(r._errorChildren=s),RE(s=kE())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(bp(r._iconPrefixContainerSignal,rr,5)(r._textPrefixContainerSignal,or,5)(r._iconSuffixContainerSignal,sr,5)(r._textSuffixContainerSignal,ar,5),wp(Lo,5)(rr,5)(or,5)(sr,5)(ar,5)(lr,5)(ur,5)(cr,5)),i&2){OE(4);let o;RE(o=kE())&&(r._textField=o.first),RE(o=kE())&&(r._iconPrefixContainer=o.first),RE(o=kE())&&(r._textPrefixContainer=o.first),RE(o=kE())&&(r._iconSuffixContainer=o.first),RE(o=kE())&&(r._textSuffixContainer=o.first),RE(o=kE())&&(r._floatingLabel=o.first),RE(o=kE())&&(r._notchedOutline=o.first),RE(o=kE())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&Sp(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[fD([{provide:Fn,useExisting:n},{provide:hr,useExisting:n}])],ngContentSelectors:jo,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(SE(Bo),ap(0,Go,1,1,`ng-template`,null,0,ID),fi$1(2,`div`,6,1),Ep(`click`,function(s){return r._control.onContainerClick(s)}),pE(4,Uo,1,0,`div`,7),fi$1(5,`div`,8),pE(6,$o,2,2,`div`,9),pE(7,Ko,3,0,`div`,10),pE(8,Zo,3,0,`div`,11),fi$1(9,`div`,12),pE(10,Qo,1,1,null,13),xE(11),_c(),pE(12,Xo,3,0,`div`,14),pE(13,Jo,3,0,`div`,15),_c(),pE(14,es,1,0,`div`,16),_c(),fi$1(15,`div`,17),pE(16,ts,2,0,`div`,18)(17,is,5,1,`div`,19),_c()),i&2){let o;lv(2),Sp(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),lv(2),hE(!r._hasOutline()&&!r._control.disabled?4:-1),lv(2),hE(r._hasOutline()?6:-1),lv(),hE(r._hasIconPrefix?7:-1),lv(),hE(r._hasTextPrefix?8:-1),lv(2),hE(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),lv(2),hE(r._hasTextSuffix?12:-1),lv(),hE(r._hasIconSuffix?13:-1),lv(),hE(r._hasOutline()?-1:14),lv(),Sp(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let s=r._getSubscriptMessageType();lv(),hE((o=s)===`error`?16:o===`hint`?17:-1)}},dependencies:[lr,ur,vt$2,cr,wn],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return n})();var An=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=GI({type:n});static ɵinj=Hl({imports:[Pi$1,pr,ne$1]})}return n})();var us=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=WI({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var fs={passive:!0};var gr=(()=>{class n{_platform=E(F);_ngZone=E(xe);_renderer=E(hr$1).createRenderer(null,null);_styleLoader=E(h);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return vt$1;this._styleLoader.load(us);let i=F$1(t),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new Z,s=`cdk-text-field-autofilled`,a=f=>{f.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:f.target,isAutofilled:!0}))):f.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:f.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,a,fs)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(t){let i=F$1(t),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((t,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||n)};static ɵprov=vr$1({token:n,factory:n.ɵfac})}return n})();var _r=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=GI({type:n});static ɵinj=Hl({})}return n})();var vr=new x(`MAT_INPUT_VALUE_ACCESSOR`);var yr=(()=>{class n{isErrorState(t,i){return!!(t&&t.invalid&&(t.touched||i&&i.submitted))}isSignalErrorState(t){if(!t)return!1;let i=t().invalid(),r=t().touched();return i&&r}static ɵfac=function(i){return new(i||n)};static ɵprov=vr$1({token:n,factory:n.ɵfac})}return n})();var St=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(e,t,i,r,o){this._defaultMatcher=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,t?Fo$1(t.field)&&!t.updateValueAndValidity?(this.formField=t,this.ngControl=null):(this.formField=null,this.ngControl=t):this.ngControl=this.formField=null}updateErrorState(){let e=this.errorState,t=this._getCurrentErrorState(this.matcher||this._defaultMatcher);t!==e&&(this.errorState=t,this._stateChanges.next())}_getCurrentErrorState(e){if(this.formField&&e?.isSignalErrorState)return e.isSignalErrorState(this.formField.field())??!1;let t=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return e?.isErrorState(i,t)??!1}};var ms=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var hs=new x(`MAT_INPUT_CONFIG`);var Fl=(()=>{class n{_elementRef=E(Ir$1);_platform=E(F);ngControl=E(me,{optional:!0,self:!0});_autofillMonitor=E(gr);_ngZone=E(xe);_formField=E(Fn,{optional:!0});_renderer=E(Sa);_uid=E(ie$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=E(hs,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Z;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=_s(t),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(t){this._id=t||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(G.required)??!1}set required(t){this._required=_s(t)}_required;get type(){return this._type}set type(t){this._type=t||`text`,this._validateType(),!this._isTextarea&&as$1().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(t){t!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(t):this._inputValueAccessor.value=t,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(t){this._readonly=_s(t)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(t=>as$1().has(t));constructor(){let t=E(Kt,{optional:!0}),i=E(Zt,{optional:!0}),r=E(yr),o=E(vr,{optional:!0,self:!0}),s=E(bt,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?Fo$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new St(r,s||this.ngControl,i,t,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c===`select`,this._isTextarea=c===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&ea(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(t=>{this.autofilled=t.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(t){this._elementRef.nativeElement.focus(t)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(t){if(t!==this.focused){if(!this._isNativeSelect&&t&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=t,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let t=this._elementRef.nativeElement.value;this._previousNativeValue!==t&&(this._previousNativeValue=t,this.stateChanges.next())}_dirtyCheckPlaceholder(){let t=this._getPlaceholder();if(t!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=t,t?i.setAttribute(`placeholder`,t):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){ms.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let t=this._elementRef.nativeElement.validity;return t&&t.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let t=this._elementRef.nativeElement,i=t.options[0];return this.focused||t.multiple||!this.empty||!!(t.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(t){let i=this._elementRef.nativeElement;t.length?i.setAttribute(`aria-describedby`,t.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let t=this._elementRef.nativeElement;return this._isNativeSelect&&(t.multiple||t.size>1)}_iOSKeyupListener=t=>{let i=t.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||n)};static ɵdir=ZI({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&Ep(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(vp(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),fp(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),Sp(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,kP]},exportAs:[`matInput`],features:[fD([{provide:Dn,useExisting:n}]),sm]})}return n})();var Al=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=GI({type:n});static ɵinj=Hl({imports:[An,An,_r,ne$1]})}return n})();export{pr as _,Fl as a,yr as b,Kt as c,bt as d,ca as f,po as g,me as h,En as i,St as l,go as m,An as n,Fn as o,fa as p,Dn as r,G as s,Al as t,Zt as u,ua as v,wn as y};