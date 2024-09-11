"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 9864:
/*!************************************************!*\
  !*** ./src/app/animation/animate.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateComponent": () => (/* binding */ AnimateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 9561);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5050);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _attention_seekers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attention-seekers */ 5432);
/* harmony import */ var _entrances__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrances */ 7486);
/* harmony import */ var _exits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exits */ 8464);
/* harmony import */ var _animate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animate.service */ 5079);










const _c0 = ["wmAnimate", ""];
const _c1 = ["*"];
class AnimateComponent {
    constructor(elm, scroll) {
        this.elm = elm;
        this.scroll = scroll;
        this.replay$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.animating = false;
        this.animated = false;
        this.disabled = false;
        this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.done = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.paused = false;
        this.threshold = 0;
        this.once = false;
    }
    get idle() { return { value: `idle-${this.animate}` }; }
    get play() {
        const params = {};
        if (!!this.timing) {
            params['timing'] = this.timing;
        }
        if (!!this.delay) {
            params['delay'] = this.delay;
        }
        return { value: this.animate, params };
    }
    set speed(speed) {
        this.timing = {
            slower: '3s',
            slow: '2s',
            normal: '1s',
            fast: '500ms',
            faster: '300ms'
        }[speed || 'normal'];
    }
    set postpone(delay) {
        const value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(delay, 0);
        if (value) {
            this.delay = `${value}ms`;
        }
        else {
            this.delay = /^\d+(?:ms|s)$/.test(delay) ? delay : '';
        }
    }
    set disableAnimation(value) { this.disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value); }
    animationStart() { this.animating = true; this.animated = false; this.start.emit(); }
    animationDone() { this.animating = false; this.animated = true; this.done.emit(); }
    set pauseAnimation(value) { this.paused = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value); }
    set enableAOS(value) { this.threshold = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(value, 0.5); }
    set aosOnce(value) { this.once = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value); }
    set replay(replay) {
        if (!!this.trigger && (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(replay)) {
            this.trigger = this.idle;
            this.replay$.next(true);
        }
    }
    ngOnInit() {
        this.trigger = this.idle;
        this.sub = this.replay$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)(!this.paused), this.scroll.trigger(this.elm, this.threshold), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(trigger => !this.animating), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeWhile)(trigger => !trigger || !this.once, true)).subscribe(trigger => {
            this.trigger = trigger ? this.play : this.idle;
        });
    }
    ngOnDestroy() { this.sub.unsubscribe(); }
}
AnimateComponent.ɵfac = function AnimateComponent_Factory(t) { return new (t || AnimateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_animate_service__WEBPACK_IMPORTED_MODULE_3__.AnimateService)); };
AnimateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AnimateComponent, selectors: [["", "wmAnimate", ""]], hostVars: 2, hostBindings: function AnimateComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsyntheticHostListener"]("@animate.start", function AnimateComponent_animation_animate_start_HostBindingHandler() { return ctx.animationStart(); })("@animate.done", function AnimateComponent_animation_animate_done_HostBindingHandler() { return ctx.animationDone(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsyntheticHostProperty"]("@animate", ctx.trigger)("@.disabled", ctx.disabled);
    } }, inputs: { animate: ["wmAnimate", "animate"], speed: "speed", postpone: ["delay", "postpone"], disableAnimation: ["disabled", "disableAnimation"], pauseAnimation: ["paused", "pauseAnimation"], enableAOS: ["aos", "enableAOS"], aosOnce: ["once", "aosOnce"], replay: "replay" }, outputs: { start: "start", done: "done" }, attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function AnimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](0);
    } }, encapsulation: 2, data: { animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('animate', [
                ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.beat, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.bounce, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.flip, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.headShake, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.heartBeat, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.jello, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.pulse, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.rubberBand, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.shake, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.swing, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.tada, ..._attention_seekers__WEBPACK_IMPORTED_MODULE_0__.wobble,
                ..._entrances__WEBPACK_IMPORTED_MODULE_1__.bumpIn, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.bounceIn, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.fadeIn, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.flipIn, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.jackInTheBox, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.landing, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.rollIn, ..._entrances__WEBPACK_IMPORTED_MODULE_1__.zoomIn,
                ..._exits__WEBPACK_IMPORTED_MODULE_2__.bounceOut, ..._exits__WEBPACK_IMPORTED_MODULE_2__.fadeOut, ..._exits__WEBPACK_IMPORTED_MODULE_2__.hinge, ..._exits__WEBPACK_IMPORTED_MODULE_2__.rollOut, ..._exits__WEBPACK_IMPORTED_MODULE_2__.zoomOut
            ])] } });


/***/ }),

/***/ 3404:
/*!************************************************!*\
  !*** ./src/app/animation/animate.directive.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateDirective": () => (/* binding */ AnimateDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 9561);
/* harmony import */ var _animate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate.service */ 5079);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ 7741);





class AnimateDirective extends _animate_service__WEBPACK_IMPORTED_MODULE_0__.AnimateService {
    constructor(elref, viewPort, scroll, zone) {
        super(scroll, viewPort, zone);
        this.elref = elref;
        this.viewPort = viewPort;
        this.element = false;
    }
    set useElement(value) { this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value); }
    get viewRect() {
        const rt = this.element ? this.elref.nativeElement.getBoundingClientRect()
            : this.viewPort.getViewportRect();
        const top = rt.top + (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(this.top, 0);
        const left = rt.left + (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(this.left, 0);
        const bottom = rt.bottom + (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(this.bottom, 0);
        const right = rt.right + (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(this.right, 0);
        return { top, left, bottom, right, height: bottom - top, width: right - left, x: left, y: top, toJSON: () => ({ top, left, bottom, right, height: bottom - top, width: right - left })
        };
    }
}
AnimateDirective.ɵfac = function AnimateDirective_Factory(t) { return new (t || AnimateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
AnimateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AnimateDirective, selectors: [["", "wmAnimateView", ""]], inputs: { useElement: "useElement", top: "top", left: "left", bottom: "bottom", right: "right" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            { provide: _animate_service__WEBPACK_IMPORTED_MODULE_0__.AnimateService, useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => AnimateDirective) },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 5965:
/*!*********************************************!*\
  !*** ./src/app/animation/animate.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateModule": () => (/* binding */ AnimateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ 7741);
/* harmony import */ var _animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate.component */ 9864);
/* harmony import */ var _animate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate.directive */ 3404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class AnimateModule {
}
AnimateModule.ɵfac = function AnimateModule_Factory(t) { return new (t || AnimateModule)(); };
AnimateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AnimateModule });
AnimateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AnimateModule, { declarations: [_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent, _animate_directive__WEBPACK_IMPORTED_MODULE_1__.AnimateDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__.ScrollingModule], exports: [_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent, _animate_directive__WEBPACK_IMPORTED_MODULE_1__.AnimateDirective] }); })();


/***/ }),

/***/ 5079:
/*!**********************************************!*\
  !*** ./src/app/animation/animate.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimateService": () => (/* binding */ AnimateService),
/* harmony export */   "runInZone": () => (/* binding */ runInZone)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 7741);




function runInZone(zone) {
    return source => {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            return source.subscribe((value) => zone.run(() => observer.next(value)), (e) => zone.run(() => observer.error(e)), () => zone.run(() => observer.complete()));
        });
    };
}
class AnimateService {
    constructor(scroll, viewPort, zone) {
        this.scroll = scroll;
        this.viewPort = viewPort;
        this.zone = zone;
        this.view$ = viewPort.change(100).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.viewRect), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(20), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)(1));
    }
    get viewRect() {
        return this.viewPort.getViewportRect();
    }
    trigger(elm, threshold) {
        return source => this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => source), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(trigger => threshold > 0 ? this.aos(elm, threshold) : (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(trigger)));
    }
    aos(elm, threshold) {
        return this.scroll.ancestorScrolled(elm, 0).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.visibility(elm)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.scan)((result, visiblility) => (visiblility >= threshold) || (result && visiblility > 0), false), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)(), runInZone(this.zone));
    }
    visibility(elm) {
        return this.view$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(view => {
            const rect = elm && elm.nativeElement && elm.nativeElement.getBoundingClientRect();
            if (!rect) {
                return 0;
            }
            if (rect.left > view.left - 1 && rect.top > view.top - 1 && rect.right < view.right + 1 && rect.bottom < view.bottom + 1) {
                return 1;
            }
            const a = Math.round(rect.width * rect.height);
            const b = Math.max(0, Math.min(rect.right, view.right) - Math.max(rect.left, view.left));
            const c = Math.max(0, Math.min(rect.bottom, view.bottom) - Math.max(rect.top, view.top));
            return Math.round(b * c / a * 10) / 10;
        }));
    }
}
AnimateService.ɵfac = function AnimateService_Factory(t) { return new (t || AnimateService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone)); };
AnimateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: AnimateService, factory: AnimateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7923:
/*!*****************************************************!*\
  !*** ./src/app/animation/attention-seekers/beat.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "beat": () => (/* binding */ beat)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const beat = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => beat', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.8)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.5)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)' })
        ]))
    ], { params: { timing: '500ms', delay: '' } })
];


/***/ }),

/***/ 2405:
/*!*******************************************************!*\
  !*** ./src/app/animation/attention-seekers/bounce.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounce": () => (/* binding */ bounce)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const bounce = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounce', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transformOrigin: 'center bottom' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -30px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -30px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06', offset: 0.43 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.53 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -15px, 0)', animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', offset: 0.7 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, -4px, 0)', offset: 0.9 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d(0, 0, 0)', animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 1915:
/*!*****************************************************!*\
  !*** ./src/app/animation/attention-seekers/flip.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flip": () => (/* binding */ flip)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const flip = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => flip', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ backfaceVisibility: 'visible' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)', animationTimingFunction: 'ease-out', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: ' perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', animationTimingFunction: 'ease-out', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', animationTimingFunction: 'ease-in', offset: 0.5 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', animationTimingFunction: 'ease-in', offset: 0.8 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', animationTimingFunction: 'ease-in', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 6474:
/*!***********************************************************!*\
  !*** ./src/app/animation/attention-seekers/head-shake.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headShake": () => (/* binding */ headShake)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const headShake = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => headShake', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', offset: 0.5 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 1019:
/*!***********************************************************!*\
  !*** ./src/app/animation/attention-seekers/heart-beat.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heartBeat": () => (/* binding */ heartBeat)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const heartBeat = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => heartBeat', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.3)', offset: 0.14 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)', offset: 0.28 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.3)', offset: 0.42 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)', offset: 0.70 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 5432:
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "beat": () => (/* reexport safe */ _beat__WEBPACK_IMPORTED_MODULE_0__.beat),
/* harmony export */   "bounce": () => (/* reexport safe */ _bounce__WEBPACK_IMPORTED_MODULE_1__.bounce),
/* harmony export */   "flip": () => (/* reexport safe */ _flip__WEBPACK_IMPORTED_MODULE_11__.flip),
/* harmony export */   "headShake": () => (/* reexport safe */ _head_shake__WEBPACK_IMPORTED_MODULE_2__.headShake),
/* harmony export */   "heartBeat": () => (/* reexport safe */ _heart_beat__WEBPACK_IMPORTED_MODULE_3__.heartBeat),
/* harmony export */   "jello": () => (/* reexport safe */ _jello__WEBPACK_IMPORTED_MODULE_9__.jello),
/* harmony export */   "pulse": () => (/* reexport safe */ _pulse__WEBPACK_IMPORTED_MODULE_4__.pulse),
/* harmony export */   "rubberBand": () => (/* reexport safe */ _rubber_band__WEBPACK_IMPORTED_MODULE_5__.rubberBand),
/* harmony export */   "shake": () => (/* reexport safe */ _shake__WEBPACK_IMPORTED_MODULE_6__.shake),
/* harmony export */   "swing": () => (/* reexport safe */ _swing__WEBPACK_IMPORTED_MODULE_7__.swing),
/* harmony export */   "tada": () => (/* reexport safe */ _tada__WEBPACK_IMPORTED_MODULE_10__.tada),
/* harmony export */   "wobble": () => (/* reexport safe */ _wobble__WEBPACK_IMPORTED_MODULE_8__.wobble)
/* harmony export */ });
/* harmony import */ var _beat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beat */ 7923);
/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce */ 2405);
/* harmony import */ var _head_shake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head-shake */ 6474);
/* harmony import */ var _heart_beat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heart-beat */ 1019);
/* harmony import */ var _pulse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pulse */ 6009);
/* harmony import */ var _rubber_band__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rubber-band */ 8415);
/* harmony import */ var _shake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shake */ 75);
/* harmony import */ var _swing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swing */ 4364);
/* harmony import */ var _wobble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wobble */ 1511);
/* harmony import */ var _jello__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jello */ 7109);
/* harmony import */ var _tada__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tada */ 728);
/* harmony import */ var _flip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flip */ 1915);














/***/ }),

/***/ 7109:
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/jello.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jello": () => (/* binding */ jello)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const jello = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => jello', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transformOrigin: 'center' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(0) skewY(0)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(0) skewY(0)', offset: 0.111 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(-12.5) skewY(-12.5)', offset: 0.222 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'skewX(0) skewY(0)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 6009:
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/pulse.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pulse": () => (/* binding */ pulse)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const pulse = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => pulse', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.05)' }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)' })
        ]))
    ], { params: { timing: '500ms', delay: '' } })
];


/***/ }),

/***/ 8415:
/*!************************************************************!*\
  !*** ./src/app/animation/attention-seekers/rubber-band.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rubberBand": () => (/* binding */ rubberBand)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const rubberBand = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => rubberBand', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 75:
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/shake.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shake": () => (/* binding */ shake)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const shake = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => shake', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-10px)', offset: 0.1 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(10px)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-10px)', offset: 0.3 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(10px)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-10px)', offset: 0.5 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(10px)', offset: 0.6 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-10px)', offset: 0.7 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(10px)', offset: 0.8 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-10px)', offset: 0.9 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 4364:
/*!******************************************************!*\
  !*** ./src/app/animation/attention-seekers/swing.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swing": () => (/* binding */ swing)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const swing = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => swing', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transformOrigin: 'top center' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 728:
/*!*****************************************************!*\
  !*** ./src/app/animation/attention-seekers/tada.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tada": () => (/* binding */ tada)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const tada = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => tada', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.1 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 1511:
/*!*******************************************************!*\
  !*** ./src/app/animation/attention-seekers/wobble.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wobble": () => (/* binding */ wobble)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const wobble = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => wobble', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-25%) rotate3d(0, 0, 1, -5deg)', offset: 0.15 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(20%) rotate3d(0, 0, 1, 3deg)', offset: 0.3 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-15%) rotate3d(0, 0, 1, -3deg)', offset: 0.45 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(10%) rotate3d(0, 0, 1, 2deg)', offset: 0.6 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-5%) rotate3d(0, 0, 1, -1deg)', offset: 0.75 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 8210:
/*!**************************************************!*\
  !*** ./src/app/animation/entrances/bounce-in.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounceIn": () => (/* binding */ bounceIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const bounceIn = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-bounceIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-bounceInDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-bounceInLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-bounceInUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-bounceInRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0.3)', offset: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.1)', offset: 0.2 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.9)', offset: 0.4 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1.03)', offset: 0.6 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.97)', offset: 0.8 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1)', offset: 1 })
    ])), { params: { timing: '750ms', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceInDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateY(25px)', offset: 0.6 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-10px)', offset: 0.75 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(5px)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceInLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateX(25px)', offset: 0.6 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-10px)', offset: 0.75 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(5px)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceInUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateY(-25px)', offset: 0.6 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(10px)', offset: 0.75 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-5px)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceInRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} cubic-bezier(0.215, 0.61, 0.355, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateX(-25px)', offset: 0.6 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(10px)', offset: 0.75 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-5px)', offset: 0.9 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 4840:
/*!************************************************!*\
  !*** ./src/app/animation/entrances/bump-in.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bumpIn": () => (/* binding */ bumpIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const bumpIn = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-bumpIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bumpIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.5)', opacity: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)', opacity: 1 }))
    ], { params: { timing: '500ms', delay: '' } })
];


/***/ }),

/***/ 7453:
/*!************************************************!*\
  !*** ./src/app/animation/entrances/fade-in.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeIn": () => (/* binding */ fadeIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const fadeIn = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-fadeIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-fadeInRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-fadeInLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-fadeInUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-fadeInDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeInRight', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(-20px)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeInLeft', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(20px)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeInUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(20px)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeInDown', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(-20px)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
    ], { params: { timing: '1s', delay: '' } }),
];


/***/ }),

/***/ 3658:
/*!************************************************!*\
  !*** ./src/app/animation/entrances/flip-in.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flipIn": () => (/* binding */ flipIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const flipIn = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-flipInX', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-flipInY', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => flipInX', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ backfaceVisibility: 'visible' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                opacity: 0,
                offset: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: ' perspective(400px) rotate3d(1, 0, 0, -20deg)',
                opacity: 1,
                offset: 0.4
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
                offset: 0.6
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
                offset: 0.8
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(1, 0, 0, 0)',
                offset: 1
            })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => flipInY', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ backfaceVisibility: 'visible' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
                opacity: 0,
                offset: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: ' perspective(400px) rotate3d(0, 1, 0, -20deg)',
                opacity: 1,
                offset: 0.4
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)',
                offset: 0.6
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)',
                offset: 0.8
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'perspective(400px) rotate3d(0, 1, 0, 0)',
                offset: 1
            })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 7486:
/*!**********************************************!*\
  !*** ./src/app/animation/entrances/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounceIn": () => (/* reexport safe */ _bounce_in__WEBPACK_IMPORTED_MODULE_1__.bounceIn),
/* harmony export */   "bumpIn": () => (/* reexport safe */ _bump_in__WEBPACK_IMPORTED_MODULE_0__.bumpIn),
/* harmony export */   "fadeIn": () => (/* reexport safe */ _fade_in__WEBPACK_IMPORTED_MODULE_2__.fadeIn),
/* harmony export */   "flipIn": () => (/* reexport safe */ _flip_in__WEBPACK_IMPORTED_MODULE_3__.flipIn),
/* harmony export */   "jackInTheBox": () => (/* reexport safe */ _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__.jackInTheBox),
/* harmony export */   "landing": () => (/* reexport safe */ _landing__WEBPACK_IMPORTED_MODULE_5__.landing),
/* harmony export */   "rollIn": () => (/* reexport safe */ _roll_in__WEBPACK_IMPORTED_MODULE_6__.rollIn),
/* harmony export */   "zoomIn": () => (/* reexport safe */ _zoom_in__WEBPACK_IMPORTED_MODULE_7__.zoomIn)
/* harmony export */ });
/* harmony import */ var _bump_in__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bump-in */ 4840);
/* harmony import */ var _bounce_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce-in */ 8210);
/* harmony import */ var _fade_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fade-in */ 7453);
/* harmony import */ var _flip_in__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flip-in */ 3658);
/* harmony import */ var _jack_in_the_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jack-in-the-box */ 6210);
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing */ 5894);
/* harmony import */ var _roll_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roll-in */ 6880);
/* harmony import */ var _zoom_in__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom-in */ 9912);










/***/ }),

/***/ 6210:
/*!********************************************************!*\
  !*** ./src/app/animation/entrances/jack-in-the-box.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jackInTheBox": () => (/* binding */ jackInTheBox)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const jackInTheBox = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-jackInTheBox', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => jackInTheBox', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'scale(0.1) rotate(30deg)',
                transformOrigin: 'center bottom',
                opacity: 0,
                offset: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'rotate(-10deg)',
                opacity: 0.7,
                offset: 0.5
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate(3deg)', offset: 0.7 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1)', opacity: 1, offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 5894:
/*!************************************************!*\
  !*** ./src/app/animation/entrances/landing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "landing": () => (/* binding */ landing)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const landing = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-landing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => landing', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'scale(1.2)',
            opacity: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)('*'))
    ], { params: { timing: '2s', delay: '' } })
];


/***/ }),

/***/ 6880:
/*!************************************************!*\
  !*** ./src/app/animation/entrances/roll-in.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rollIn": () => (/* binding */ rollIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const rollIn = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-rollIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => rollIn', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(-100%) rotate3d(0, 0, 1, -120deg)',
            opacity: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(0)', opacity: 1 }))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 9912:
/*!************************************************!*\
  !*** ./src/app/animation/entrances/zoom-in.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zoomIn": () => (/* binding */ zoomIn)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const zoomIn = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-zoomIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-zoomInDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-zoomInLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-zoomInUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('idle-zoomInRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0.3)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(0.65)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1)' })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomInDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.1) translateY(-1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.475) translateY(60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomInLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.1) translateX(-1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.475) translateX(60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomInUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.1) translateY(1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.475) translateY(-60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomInRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.1) translateX(1000px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.475) translateX(-60px)',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 3026:
/*!***********************************************!*\
  !*** ./src/app/animation/exits/bounce-out.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounceOut": () => (/* binding */ bounceOut)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const bounceOut = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('bounceOut', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('bounceOutDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('bounceOutUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('bounceOutRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('bounceOutLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(0.9)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.1)', offset: 0.5 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'scale(1.1)', offset: 0.55 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0.3)', offset: 1 })
        ]))
    ], { params: { timing: '750ms', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceOutDown', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(10px)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-20px)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-20px)', offset: 0.45 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceOutUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(-10px)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(20px)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(20px)', offset: 0.45 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(-2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceOutRight', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(-20px)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => bounceOutLeft', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(20px)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(-2000px)', offset: 1 })
        ]))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 3648:
/*!*********************************************!*\
  !*** ./src/app/animation/exits/fade-out.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeOut": () => (/* binding */ fadeOut)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const fadeOut = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('fadeOut', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('fadeOutRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('fadeOutLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('fadeOutDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('fadeOutUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeOutRight', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(20px)' }))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeOutLeft', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateX(-20px)' }))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeOutDown', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(20px)' }))
    ], { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => fadeOutUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'translateY(-20px)' }))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 7881:
/*!******************************************!*\
  !*** ./src/app/animation/exits/hinge.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hinge": () => (/* binding */ hinge)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const hinge = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('hinge', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => hinge', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transformOrigin: 'top left' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 0', offset: 0 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.2 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.4 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 80deg)', offset: 0.6 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate3d(0, 0, 1, 60deg)', offset: 0.8 }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateY(700px)', offset: 1 })
        ]))
    ], { params: { timing: '2s', delay: '' } })
];


/***/ }),

/***/ 8464:
/*!******************************************!*\
  !*** ./src/app/animation/exits/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bounceOut": () => (/* reexport safe */ _bounce_out__WEBPACK_IMPORTED_MODULE_0__.bounceOut),
/* harmony export */   "fadeOut": () => (/* reexport safe */ _fade_out__WEBPACK_IMPORTED_MODULE_1__.fadeOut),
/* harmony export */   "hinge": () => (/* reexport safe */ _hinge__WEBPACK_IMPORTED_MODULE_2__.hinge),
/* harmony export */   "rollOut": () => (/* reexport safe */ _roll_out__WEBPACK_IMPORTED_MODULE_3__.rollOut),
/* harmony export */   "zoomOut": () => (/* reexport safe */ _zoom_out__WEBPACK_IMPORTED_MODULE_4__.zoomOut)
/* harmony export */ });
/* harmony import */ var _bounce_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bounce-out */ 3026);
/* harmony import */ var _fade_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade-out */ 3648);
/* harmony import */ var _hinge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hinge */ 7881);
/* harmony import */ var _roll_out__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roll-out */ 1207);
/* harmony import */ var _zoom_out__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom-out */ 397);







/***/ }),

/***/ 1207:
/*!*********************************************!*\
  !*** ./src/app/animation/exits/roll-out.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rollOut": () => (/* binding */ rollOut)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const rollOut = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('rollOut', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => rollOut', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            transform: 'translateX(0)',
            opacity: 1
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("{{timing}} {{delay}} cubic-bezier(.8, -0.6, 0.2, 1.5)", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translateX(100%) rotate3d(0, 0, 1, 120deg)', opacity: 0 }))
    ], { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 397:
/*!*********************************************!*\
  !*** ./src/app/animation/exits/zoom-out.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zoomOut": () => (/* binding */ zoomOut)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

const zoomOut = [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('zoomOut', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('zoomOutDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('zoomOutRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('zoomOutUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('zoomOutLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomOut', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0.3)' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0, transform: 'scale(0.3)' })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomOutDown', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.475) translateY(-60px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.1) translateY(2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomOutRight', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.475) translateX(-42px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.1) translateX(2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomOutUp', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.475) translateY(60px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.1) translateY(-2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => zoomOutLeft', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('{{timing}} {{delay}} ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.keyframes)([
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 0,
            transform: 'scale(0.475) translateX(42px)',
            animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            offset: 0
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
            opacity: 1,
            transform: 'scale(0.1) translateX(-2000px)',
            transformOrigin: 'center bottom',
            animationTimingFunction: 'ubic-bezier(0.175, 0.885, 0.32, 1)',
            offset: 0.6
        }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1, transform: 'scale(1) translateX(0)', offset: 1 })
    ])), { params: { timing: '1s', delay: '' } })
];


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greeting/greeting.component */ 1572);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education/education.component */ 2554);
/* harmony import */ var _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-progress/skill-progress.component */ 1284);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);









class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.0.8/css/all.css", "integrity", "sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S", "crossorigin", "anonymous"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "link", 0)(1, "app-header")(2, "app-greeting")(3, "app-skills")(4, "app-education")(5, "app-skill-progress")(6, "app-contact")(7, "app-footer")(8, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_1__.GreetingComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_3__.EducationComponent, _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_4__.SkillProgressComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: ["app-contact[_ngcontent-%COMP%] {\n  padding-left: 200px;\n}\n\napp-projects[_ngcontent-%COMP%] {\n  animation: fade_up 2s;\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUVGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUNGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBREY7RUFJQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFIRjtFQU1BO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQUxGO0VBUUE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQU5GO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNvbnRhY3R7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMDBweDtcclxufVxyXG5hcHAtcHJvamVjdHN7XHJcbiAgYW5pbWF0aW9uOiBmYWRlX3VwIDJzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlX3VwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./greeting/greeting.component */ 1572);
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-media/social-media.component */ 4968);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 398);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills/software-skill/software-skill.component */ 8928);
/* harmony import */ var _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skill-progress/skill-progress.component */ 1284);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ 1563);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./education/education.component */ 2554);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _animation_animate_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./animation/animate.module */ 5965);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);

















;
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        { provide: Window, useValue: window }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _animation_animate_module__WEBPACK_IMPORTED_MODULE_11__.AnimateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__.GreetingComponent,
        _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_4__.SocialMediaComponent,
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent,
        _skills_software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_6__.SoftwareSkillComponent,
        _skill_progress_skill_progress_component__WEBPACK_IMPORTED_MODULE_7__.SkillProgressComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__.ContactComponent,
        _education_education_component__WEBPACK_IMPORTED_MODULE_10__.EducationComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _animation_animate_module__WEBPACK_IMPORTED_MODULE_11__.AnimateModule] }); })();


/***/ }),

/***/ 1563:
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media/social-media.component */ 4968);



class ContactComponent {
    constructor() {
        this.contactInfo = {
            title: "Contact Me ☎️",
            number: "+380635144052",
            email_address: "vova123555@gmail.com"
        };
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 16, vars: 5, consts: [["id", "contact", "wmAnimate", "jackInTheBox", "aos", "", "speed", "normal", 1, "main", "contact-margin-top"], [1, "contact-div-main"], [1, "contact-header"], [1, "heading", "contact-title"], [1, "contact-text-div"], [1, "contact-detail", 3, "href"], [1, "contact-detail-email", 3, "href"], [1, "social"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br")(13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.contactInfo.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", "tel:" + ctx.contactInfo.number, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.contactInfo.number);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.contactInfo.email_address, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.contactInfo.email_address, "");
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent, _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaComponent], styles: [".social[_ngcontent-%COMP%] {\n  margin-left: 15%;\n}\n\n.contact-div-main[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 35%;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.contact-div-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  font-size: 65px;\n  font-weight: 400;\n  margin-bottom: 2rem;\n}\n\n.contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: 40px;\n  font-weight: 400;\n  color: #868e96;\n  text-decoration: none;\n}\n\n.contact-detail[_ngcontent-%COMP%]:hover, .contact-detail-email[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-shadow: 2px 1px 2px #b5b5b5;\n  transition: all 0.3s;\n}\n\n.contact-subtitle[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.contact-text-div[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.contact-margin-top[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.contact-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  margin-left: 1.5rem;\n  margin-top: -4rem;\n}\n\n@media (max-width: 1380px), (max-width: 768px) {\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 56px;\n    font-weight: 400;\n    text-align: center;\n  }\n\n  .contact-title[_ngcontent-%COMP%] {\n    font-size: 40px;\n    text-align: center;\n  }\n\n  .contact-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .contact-text-div[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 1.5rem;\n  }\n\n  .contact-detail[_ngcontent-%COMP%], .contact-detail-email[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .contact-image-div[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxPQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7O0VBRUUsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQUVGOztFQUNBO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBRUY7O0VBQ0E7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQUVGOztFQUNBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQUVGOztFQUNBOztJQUVFLGVBQUE7RUFFRjs7RUFDQTtJQUNFLGFBQUE7RUFFRjtBQUNGIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFse1xyXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbn1cclxuLmNvbnRhY3QtZGl2LW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcbi5zdWJUaXRsZSB7XHJcbiAgY29sb3I6IHJnYigxMzQsIDE0MiwgMTUwKTtcclxufVxyXG5cclxuLmNvbnRhY3QtZGl2LW1haW4gPiAqIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFjdC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA2NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtZGV0YWlsLFxyXG4uY29udGFjdC1kZXRhaWwtZW1haWwge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1kZXRhaWw6aG92ZXIsXHJcbi5jb250YWN0LWRldGFpbC1lbWFpbDpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtc2hhZG93OiAycHggMXB4IDJweCAjYjViNWI1O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uY29udGFjdC1zdWJ0aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbnRhY3QtdGV4dC1kaXYge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtbWFyZ2luLXRvcCB7XHJcbiAgbWFyZ2luLXRvcDogNHJlbTtcclxufVxyXG5cclxuLmNvbnRhY3QtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAtNHJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzODBweCksIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhY3QtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA1NnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LXN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC10ZXh0LWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1kZXRhaWwsXHJcbiAgLmNvbnRhY3QtZGV0YWlsLWVtYWlsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWltYWdlLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2554:
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);



function EducationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div")(2, "div")(3, "div", 8)(4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9)(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](i_r1.className1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](i_r1.className2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r1.content);
} }
class EducationComponent {
    constructor() {
        this.timeline = [
            {
                heading: "Student of the Faculty of Physics",
                duration: "2020",
                subtitle: "KNU University, Kiev",
                className1: "mar-right",
                className2: "prt_about_learnbox_left"
            },
            {
                duration: "2024",
                className1: "mar-left",
                className2: "prt_about_learnbox_right"
            }
        ];
    }
    ngOnInit() {
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 8, vars: 1, consts: [["id", "education", 1, "prt_about_edulearn_wrapper"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "prt_heading_wrapper"], [1, "prt_heading"], [1, "timeline-heading"], [1, "prt_about_learnsection"], ["wmAnimate", "landing", "aos", "", "speed", "normal", 4, "ngFor", "ngForOf"], ["wmAnimate", "landing", "aos", "", "speed", "normal"], [1, "prt_about_learnbox_year"], [1, "prt_about_learnbox_info"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Education \uD83D\uDCBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EducationComponent_div_7_Template, 13, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.timeline);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent], styles: [".prt_about_edulearn_wrapper[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  margin-top: 7rem;\n  margin-bottom: 7rem;\n}\n\n.timeline-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 400;\n}\n\n.prt_heading_wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.prt_heading[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_btn[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  position: relative;\n  width: auto;\n  padding-bottom: 15px;\n}\n\n.prt_heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 400;\n}\n\n.h1[_ngcontent-%COMP%], .h2[_ngcontent-%COMP%], .h3[_ngcontent-%COMP%], .h4[_ngcontent-%COMP%], .h5[_ngcontent-%COMP%], .h6[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 1.1;\n  color: #000000;\n}\n\n.prt_heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  width: auto;\n  background-color: #010101;\n  padding-left: 10px;\n  position: absolute;\n  right: 0;\n  bottom: -10px;\n  color: #6c63ff;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-transform: capitalize;\n  margin-top: 0;\n  font-weight: 500;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000;\n  text-transform: capitalize;\n  margin-bottom: 10px;\n  color: #868e96;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #868e96;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.mar-left[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding-left: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-left[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.mar-right[_ngcontent-%COMP%] {\n  margin-right: 50%;\n  padding-right: 2rem;\n}\n\n@media (max-width: 768px) {\n  .mar-right[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_year[_ngcontent-%COMP%] {\n  float: right;\n  padding-top: 30px;\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 200px;\n  vertical-align: middle;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]   .prt_about_learnbox_info[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.prt_about_learnbox_info[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: calc(100% - 200px);\n}\n\n.prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  margin: 0;\n  color: #a1bcd8;\n  font-weight: 500;\n}\n\n.prt_about_learnsection[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background-color: #202020;\n  width: 2px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  z-index: -1;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnsection[_ngcontent-%COMP%]:after {\n    width: 0;\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 15px;\n  top: 50%;\n  margin-top: -7px;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  left: -41px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_right[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_right[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  margin-bottom: 30px;\n  text-align: right;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after, .prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #000;\n  width: 15px;\n  border-radius: 100%;\n  border: 0px solid #fff;\n  right: -39px;\n  transition: all 0.3s;\n  z-index: 100;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%]:after {\n    visibility: hidden;\n  }\n}\n\n.prt_about_experiencebox[_ngcontent-%COMP%]:after, .prt_contact_details_box[_ngcontent-%COMP%]:after, .prt_couter_wrapper[_ngcontent-%COMP%]:after {\n  right: 0;\n  bottom: 0;\n  content: \"\";\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover:after {\n  background-color: #fff;\n  border: 3px solid #6c63ff;\n  transition: all 0.3s;\n}\n\n.prt_about_learnbox_left[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%]:hover   .prt_about_learnbox_year[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #6c63ff;\n  transition: all 0.3s;\n}\n\n@media (max-width: 768px) {\n  .prt_about_learnbox_left[_ngcontent-%COMP%], .prt_about_learnbox_right[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #202020;\n    padding-bottom: 30px;\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSUY7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQU1GOztBQUpBO0VBRUUsU0FBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBT0Y7O0FBSkE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVNGOztBQVBBO0VBQ0UsU0FBQTtFQUNBLGNBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0FBV0Y7O0FBVEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0FBWUY7O0FBUkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBVkU7RUFIRjtJQUlJLFNBQUE7RUFhRjtBQUNGOztBQVhBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWNGOztBQWJFO0VBSEY7SUFJSSxTQUFBO0VBZ0JGO0FBQ0Y7O0FBZEE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFpQkY7O0FBZkE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWtCRjs7QUFoQkE7RUFDRSxXQUFBO0FBbUJGOztBQWpCQTtFQUNHLG1CQUFBO0VBQ0EseUJBQUE7QUFvQkg7O0FBbEJBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFxQkY7O0FBaEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBbUJGOztBQWpCRTtFQVpGO0lBYVEsUUFBQTtJQUNKLGtCQUFBO0VBb0JGO0FBQ0Y7O0FBaEJBOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FBbUJGOztBQWhCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLG9CQUFBO0FBbUJGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtFQUNBLFlBQUE7QUFtQkY7O0FBbEJFO0VBVkY7SUFXSSxrQkFBQTtFQXFCRjtBQUNGOztBQWxCQTs7RUFFRSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFxQkY7O0FBbEJBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0FBcUJGOztBQWxCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0JBQUE7QUFxQkY7O0FBbEJBOztFQUVFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQXFCRjs7QUFsQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsb0JBQUE7RUFDQSxZQUFBO0FBcUJGOztBQXBCRTtFQVZGO0lBV0ksa0JBQUE7RUF1QkY7QUFDRjs7QUFwQkE7OztFQUdFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQXVCRjs7QUFwQkE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBRUEsb0JBQUE7QUF1QkY7O0FBcEJBOztFQUVFLGNBQUE7RUFLQSxvQkFBQTtBQXVCRjs7QUFuQkE7RUFDRTtJQUVFLGdDQUFBO0lBQ0Esb0JBQUE7RUFxQkY7QUFDRjs7QUFuQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBcUJGO0VBbEJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFvQkY7QUFDRjs7QUFoQkE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBa0JGO0VBZkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQWlCRjtBQUNGOztBQWRBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQWdCRjtFQWJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFlRjtBQUNGOztBQVpBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQWNGO0VBWEE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQWFGO0FBQ0YiLCJmaWxlIjoiZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBydF9hYm91dF9lZHVsZWFybl93cmFwcGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogN3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiA3cmVtO1xyXG59XHJcbi50aW1lbGluZS1oZWFkaW5ne1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5wcnRfaGVhZGluZ193cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybnNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJ0X2hlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuLnBydF9idG4sIC5wcnRfaGVhZGluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG4ucHJ0X2hlYWRpbmcgaDEge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLnBydF9oZWFkaW5nIGgxLCAucHJ0X2hlYWRpbmcgcCB7XHJcbiAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnBydF9oZWFkaW5nIHAge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTAxMDE7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIGNvbG9yOiAjNmM2M2ZmO1xyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8ge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxufVxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8gaDQge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHNwYW4ge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0IHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG5cclxufVxyXG4ubWFyLWxlZnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbi5tYXItcmlnaHR7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0IC5wcnRfYWJvdXRfbGVhcm5ib3hfeWVhciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfeWVhciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQgLnBydF9hYm91dF9sZWFybmJveF9pbmZvIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2luZm8ge1xyXG4gICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gfVxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNhMWJjZDg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuc2VjdGlvbjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICB3aWR0aDogMnB4O1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAtMTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDphZnRlcixcclxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTdweFxyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0IHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3NcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZmZmO1xyXG4gIGxlZnQ6IC00MXB4O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQsXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfcmlnaHQ6aG92ZXI6YWZ0ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3NcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodDpob3ZlcjphZnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjNmM2M2ZmO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zc1xyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zc1xyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6YWZ0ZXIsXHJcbi5wcnRfYWJvdXRfbGVhcm5ib3hfbGVmdDpob3ZlcjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4zc1xyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcclxuICByaWdodDogLTM5cHg7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5wcnRfYWJvdXRfZXhwZXJpZW5jZWJveDphZnRlcixcclxuLnBydF9jb250YWN0X2RldGFpbHNfYm94OmFmdGVyLFxyXG4ucHJ0X2NvdXRlcl93cmFwcGVyOmFmdGVyIHtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgY29udGVudDogXCJcIlxyXG59XHJcblxyXG4ucHJ0X2Fib3V0X2xlYXJuYm94X2xlZnQ6aG92ZXI6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzZjNjNmZjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3NcclxufVxyXG5cclxuLnBydF9hYm91dF9sZWFybmJveF9sZWZ0OmhvdmVyIC5wcnRfYWJvdXRfbGVhcm5ib3hfeWVhciBoMSxcclxuLnBydF9hYm91dF9sZWFybmJveF9yaWdodDpob3ZlciAucHJ0X2Fib3V0X2xlYXJuYm94X3llYXIgaDEge1xyXG4gIGNvbG9yOiAjNmM2M2ZmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnBydF9hYm91dF9sZWFybmJveF9sZWZ0LCAucHJ0X2Fib3V0X2xlYXJuYm94X3JpZ2h0IHtcclxuXHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwMjAyMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfZG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlX3VwIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX3JpZ2h0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlX2xlZnQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);



class FooterComponent {
    constructor() {
        this.state = 'normal';
    }
    ngOnInit() {
    }
    onAnimate() {
        this.state = 'highlited';
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [["wmAnimate", "jackInTheBox", "speed", "normal", 1, "footer-div"], [1, "footer-text"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\t\u00A9 2021, Built by Vladimir Levitskiy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent], styles: [".footer-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #868e96;\n}\n\n.footer-div[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDRCQUFBO0lBQ0Esb0hBQUE7RUFDRjtFQUVBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFBRjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBSkY7RUFPQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0lBQ0Esb0hBQUE7RUFORjtFQVNBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFQRjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG59XHJcblxyXG4uZm9vdGVyLWRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlX2Rvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZV91cCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZV9yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufSJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('divState', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('normal', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    'background-color': 'red',
                    transform: 'translateX(0)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('highlighted', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    'background-color': 'blue',
                    transform: 'translateX(100px)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('normal <=> highlighted', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(300)),
            ])
        ] } });


/***/ }),

/***/ 1572:
/*!************************************************!*\
  !*** ./src/app/greeting/greeting.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreetingComponent": () => (/* binding */ GreetingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);
/* harmony import */ var _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../social-media/social-media.component */ 4968);



class GreetingComponent {
    constructor() {
        this.greeting = {
            username: "Vladimir Levitskiy",
            title: "Hi all, I'm Vladimir",
            subTitle: "Seeking a trainee/junior front-end Angular developer position with the company where my education, qualifications and acquired skills will be utilized to their best to improve the company’s overall performance.",
            resumeLink: "https://docs.google.com/document/d/1NoY9J_gQDR99QvmIipucNLHV4Vvweouo/edit?usp=sharing&ouid=110420136980838416546&rtpof=true&sd=true"
        };
    }
    ngOnInit() {
    }
}
GreetingComponent.ɵfac = function GreetingComponent_Factory(t) { return new (t || GreetingComponent)(); };
GreetingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GreetingComponent, selectors: [["app-greeting"]], decls: 20, vars: 3, consts: [["id", "greeting", 1, "greet-main"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "greeting-main"], [1, "greeting-text-div"], [1, "greeting-text"], [1, "wave-emoji"], [1, "greeting-text-p", "subTitle"], [1, "button-greeting-div"], ["href", "#contact", 1, "main-button"], [1, "main-button", 3, "href"], [1, "greeting-image-div"], ["src", "../../assets/images/manOnTable.svg", "alt", "Sarthak sitting on table"]], template: function GreetingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-social-media");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div")(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "See my resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.greeting.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.greeting.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.greeting.resumeLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent, _social_media_social_media_component__WEBPACK_IMPORTED_MODULE_1__.SocialMediaComponent], styles: [".main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 4rem;\n}\n\n.greet-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.gretting-main[_ngcontent-%COMP%] {\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n\n.greeting-main[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.greeting-main[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.button-greeting-div[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n}\n\n.greeting-text[_ngcontent-%COMP%] {\n  font-size: 70px;\n  line-height: 1.1;\n  margin-top: 1rem;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 40px;\n}\n\n.greeting-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.wave-emoji[_ngcontent-%COMP%] {\n  animation-duration: 1.8s;\n  animation-iteration-count: infinite;\n  animation-name: wave;\n  display: inline-block;\n  transform-origin: 70% 70%;\n}\n\np[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  10% {\n    transform: rotate(-10deg);\n  }\n  20% {\n    transform: rotate(12deg);\n  }\n  30% {\n    transform: rotate(-10deg);\n  }\n  40% {\n    transform: rotate(9deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@media (max-width: 1380px) {\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 768px) {\n  .button-greeting-div[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n    text-align: center;\n  }\n\n  .greeting-main[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.main-button[_ngcontent-%COMP%] {\n  background-color: #55198b;\n  border: solid 1px #55198b;\n  color: white;\n  font-weight: 700;\n  width: max-content;\n  padding: 13px 22px;\n  margin-right: 50px;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  text-decoration: none;\n  display: block;\n  margin-top: 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out 0s;\n}\n\n.main-button[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: black;\n  transition: all 0.3s ease 0s;\n  transform: translateY(-3px);\n}\n\n.project-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n.greeting-text-p[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 40px;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding: 12px 18px;\n    margin-right: 0px;\n  }\n\n  .greeting-text[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-weight: 700;\n  }\n}\n\n@media (max-width: 320px) {\n  .main-button[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n\n\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(20px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-100px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyZWV0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRTtJQUNFLHVCQUFBO0VBTUY7RUFKQTtJQUNFLHlCQUFBO0VBTUY7RUFKQTtJQUNFLHdCQUFBO0VBTUY7RUFKQTtJQUNFLHlCQUFBO0VBTUY7RUFKQTtJQUNFLHVCQUFBO0VBTUY7RUFKQTtJQUNFLHVCQUFBO0VBTUY7RUFKQTtJQUNFLHVCQUFBO0VBTUY7QUFDRjs7QUFIQTtFQUNFO0lBQ0UsZUFBQTtFQUtGOztFQUhBO0lBQ0UsZUFBQTtFQU1GO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLDZCQUFBO0VBTUY7O0VBSkE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFPRjs7RUFMQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtJQUNBLGtCQUFBO0VBUUY7O0VBTkE7SUFDRSxjQUFBO0VBU0Y7QUFDRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFVRjs7QUFSQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBV0Y7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVEEsZ0JBQUE7O0FBT0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBTUY7O0VBSkE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFPRjtBQUNGOztBQUxBO0VBQ0U7SUFDRSxlQUFBO0VBT0Y7QUFDRjs7QUFIQSxlQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxvSEFBQTtFQUtGO0VBRkE7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUlGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLGFBQUE7SUFDQSwyQkFBQTtJQUNBLG9IQUFBO0VBRUY7RUFDQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFBRjtFQUdBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvSEFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoiZ3JlZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG59XHJcbi5ncmVldC1tYWluIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcblxyXG4uZ3JldHRpbmctbWFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmdyZWV0aW5nLW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ncmVldGluZy1tYWluID4gKiB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5idXR0b24tZ3JlZXRpbmctZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5ncmVldGluZy10ZXh0IHtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uZ3JlZXRpbmctdGV4dC1wIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5ncmVldGluZy1pbWFnZS1kaXYgPiBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLndhdmUtZW1vamkge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS44cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tbmFtZTogd2F2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcclxufVxyXG5wIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuLnN1YlRpdGxlIHtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG5Aa2V5ZnJhbWVzIHdhdmUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcclxuICB9XHJcbiAgMzAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzODBweCkge1xyXG4gIC5ncmVldGluZy10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcbiAgLmdyZWV0aW5nLXRleHQtcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5idXR0b24tZ3JlZXRpbmctZGl2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICAuZ3JlZXRpbmctdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ncmVldGluZy10ZXh0LXAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmdyZWV0aW5nLW1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1MTk4YjtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjNTUxOThiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBwYWRkaW5nOiAxM3B4IDIycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbn1cclxuLm1haW4tYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG59XHJcbi5wcm9qZWN0LWJ1dHRvbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmdyZWV0aW5nLXRleHQtcCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLyogTWVkaWEgUXVlcnkgKi9cclxuLy9AbWVkaWEgKG1heC13aWR0aDogMTM4MHB4KSB7XHJcbi8vICAuZ3JlZXRpbmctdGV4dC1wIHtcclxuLy8gICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgfVxyXG4vL31cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLmdyZWV0aW5nLXRleHR7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAubWFpbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIEFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBmYWRlX2Rvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZV91cCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZV9yaWdodCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZV9sZWZ0IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);



class HeaderComponent {
    constructor() {
        this.greeting = {
            username: "Vladimir Levitskiy",
            title: "Hi all, I'm Vladimir",
            subTitle: "Seeking a trainee/junior front-end developer position with the company where my education, qualifications and acquired skills will be utilized to their best to improve the company’s overall performance.",
            resumeLink: "https://docs.google.com/document/d/1NoY9J_gQDR99QvmIipucNLHV4Vvweouo/edit?usp=sharing&ouid=110420136980838416546&rtpof=true&sd=true"
        };
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 25, vars: 1, consts: [["wmAnimate", "landing", "aos", "", "speed", "normal", 1, "header"], ["href", "", 1, "logo"], [1, "grey-color"], [1, "logo-name"], ["type", "checkbox", "id", "menu-btn", 1, "menu-btn"], ["for", "menu-btn", 1, "menu-icon"], [1, "navicon"], [1, "menu"], ["href", "#skills"], ["href", "#education"], ["href", "#contact"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "header", 0)(2, "a", 1)(3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " <");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 7)(13, "li")(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.greeting.username);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent], styles: ["p[_ngcontent-%COMP%] {\n  display: block;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n}\n\n.header[_ngcontent-%COMP%] {\n  max-width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n}\n\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  background-color: #fff;\n}\n\n.grey-color[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px 20px;\n  font-weight: 400;\n  color: black;\n  text-decoration: none;\n}\n\n.header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f4f4f4;\n}\n\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  font-size: 1.5em;\n  text-decoration: none;\n  margin-top: 10px;\n  line-height: normal;\n}\n\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%] {\n  font-family: \"Agustina Regular\";\n  font-weight: bold;\n  font-variant-ligatures: no-common-ligatures;\n  -webkit-font-variant-ligatures: no-common-ligatures;\n  padding: 0 10px;\n  color: #55198b;\n}\n\n.header[_ngcontent-%COMP%]   .logo-name[_ngcontent-%COMP%]:hover {\n  color: red;\n}\n\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  clear: both;\n  max-height: 0;\n  transition: max-height 0.2s ease-out;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  float: right;\n  padding: 28px 20px;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: #333;\n  display: block;\n  height: 2px;\n  position: relative;\n  transition: background 0.2s ease-out;\n  width: 18px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  background: #333;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\n  top: 5px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\n  top: -5px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu[_ngcontent-%COMP%] {\n  max-height: 370px;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n}\n\n.header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:before, .header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked    ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:after {\n  top: 0;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (min-width: 48em) {\n  .header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    max-height: none;\n  }\n\n  .header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 960px) and (min-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUVGOztBQUNBOztFQUVFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREU7RUFDRSxVQUFBO0FBR0o7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLFFBQUE7QUFFRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjs7QUFDQTtFQUNFLHdCQUFBO0FBRUY7O0FBQ0E7O0VBRUUsTUFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBO0VBQ0U7SUFDRSxXQUFBO0VBR0Y7O0VBREE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtFQUlGOztFQUZBO0lBQ0UsZ0JBQUE7RUFLRjs7RUFIQTtJQUNFLGFBQUE7RUFNRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxlQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGVyIHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uZ3JleS1jb2xvciB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuXHJcbi5oZWFkZXIgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciBsaSBhOmhvdmVyLFxyXG4uaGVhZGVyIC5tZW51LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxufVxyXG5cclxuLmhlYWRlciAubG9nbyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi5oZWFkZXIgLmxvZ28tbmFtZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQWd1c3RpbmEgUmVndWxhclwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtdmFyaWFudC1saWdhdHVyZXM6IG5vLWNvbW1vbi1saWdhdHVyZXM7XHJcbiAgLXdlYmtpdC1mb250LXZhcmlhbnQtbGlnYXR1cmVzOiBuby1jb21tb24tbGlnYXR1cmVzO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBjb2xvcjogICM1NTE5OGI7XHJcblxyXG4gICY6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlciAubWVudSB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgbWF4LWhlaWdodDogMDtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogMjhweCAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uIHtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1vdXQ7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjpiZWZvcmUsXHJcbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjpiZWZvcmUge1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xyXG4gIHRvcDogLTVweDtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1idG4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudSB7XHJcbiAgbWF4LWhlaWdodDogMzcwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb246OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb246OmFmdGVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uOm5vdCguc3RlcHMpIC5uYXZpY29uOmJlZm9yZSxcclxuLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb246bm90KC5zdGVwcykgLm5hdmljb246YWZ0ZXIge1xyXG4gIHRvcDogMDtcclxufVxyXG4uc3VidGl0bGV7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICAuaGVhZGVyIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuaGVhZGVyIC5tZW51IHtcclxuICAgIG1heC1oZWlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5oZWFkZXIgLm1lbnUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: 0,
                        transform: 'translateX(-100px)'
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(5000)
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => void', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(5000, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        transform: 'translateX(100px)',
                        opacity: 0
                    }))
                ])
            ])
        ] } });


/***/ }),

/***/ 1284:
/*!************************************************************!*\
  !*** ./src/app/skill-progress/skill-progress.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillProgressComponent": () => (/* binding */ SkillProgressComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);



function SkillProgressComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exp_r2.Stack);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx_r1.progressStyle(exp_r2.progressPercentage));
} }
function SkillProgressComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Proficiency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SkillProgressComponent_div_0_div_4_Template, 5, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.techStack.experience);
} }
class SkillProgressComponent {
    constructor() {
        this.techStack = {
            viewSkillBars: true,
            experience: [
                {
                    Stack: "Front-end",
                    progressPercentage: "75%"
                },
                {
                    Stack: "Backend",
                    progressPercentage: "25%"
                }
            ]
        };
    }
    ngOnInit() {
    }
    progressStyle(percentage) {
        return { width: percentage };
    }
}
SkillProgressComponent.ɵfac = function SkillProgressComponent_Factory(t) { return new (t || SkillProgressComponent)(); };
SkillProgressComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillProgressComponent, selectors: [["app-skill-progress"]], decls: 1, vars: 1, consts: [["class", "skills-container", "wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 4, "ngIf"], ["wmAnimate", "fadeInUp", "aos", "", "speed", "normal", 1, "skills-container"], [1, "skills-bar"], [1, "skills-heading"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skills-image"], ["alt", "Skills", "src", "../../assets/images/skill.svg"], [1, "skill"], [1, "meter"]], template: function SkillProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SkillProgressComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.techStack.viewSkillBars);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".meter[_ngcontent-%COMP%] {\n  height: 20px;\n  position: relative;\n  background: #f3efef;\n  border-radius: 25px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.meter[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: #a1bcd8;\n  position: relative;\n  overflow: hidden;\n}\n\n.skill[_ngcontent-%COMP%] {\n  line-height: 3.5vw;\n}\n\n.skills-bar[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 40%;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n  padding: 20px 10px;\n  margin: 0px auto;\n  margin-top: 2rem;\n}\n\n.skills-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-left: 80px;\n  max-width: 90%;\n  height: auto;\n}\n\n@media (max-width: 1456px) {\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 4rem;\n    width: 100%;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    display: none;\n    order: 2;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-bar[_ngcontent-%COMP%] {\n    line-height: 3rem;\n    margin: 20px;\n  }\n\n  .skills-image[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n@keyframes fade_down {\n  0% {\n    opacity: 0.01;\n    transform: translateY(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_up {\n  0% {\n    opacity: 0.01;\n    transform: translateY(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_right {\n  0% {\n    opacity: 0.01;\n    transform: translateX(40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n\n@keyframes fade_left {\n  0% {\n    opacity: 0.01;\n    transform: translateX(-40px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1), transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFGQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQU1GOztBQUhBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLFdBQUE7RUFNRjs7RUFKQTtJQUNFLGFBQUE7SUFDQSxRQUFBO0VBT0Y7QUFDRjs7QUFKQTtFQUNFO0lBQ0Usc0JBQUE7RUFNRjs7RUFKQTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQU9GOztFQUxBO0lBQ0UsUUFBQTtFQVFGO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBT0Y7RUFKQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBTUY7QUFDRjs7QUFGQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0Esb0hBQUE7RUFJRjtFQURBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0lBQ0Esb0hBQUE7RUFHRjtBQUNGOztBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxvSEFBQTtFQUVGO0VBQ0E7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7SUFDQSxvSEFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0QkFBQTtJQUNBLG9IQUFBO0VBQUY7RUFHQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtJQUNBLG9IQUFBO0VBREY7QUFDRiIsImZpbGUiOiJza2lsbC1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXRlciB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAyMzksIDIzOSk7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbmgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLm1ldGVyID4gc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExYmNkODtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2tpbGx7XHJcbiAgbGluZS1oZWlnaHQ6IDMuNXZ3O1xyXG59XHJcblxyXG4uc2tpbGxzLWJhcntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG4uc2tpbGxzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyID4gKiB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5za2lsbHMtaW1hZ2UgPiBpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NTZweCkge1xyXG4gIC5za2lsbHMtYmFyIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5za2lsbHMtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9yZGVyOiAyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNraWxscy1jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIH1cclxuICAuc2tpbGxzLWJhciB7XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgLnNraWxscy1pbWFnZSB7XHJcbiAgICBvcmRlcjogMjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZV9kb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MHB4KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLFxyXG4gICAgdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVfdXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfcmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVfbGVmdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMC4wMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSxcclxuICAgIHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5490:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _animation_animate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animation/animate.component */ 9864);
/* harmony import */ var _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./software-skill/software-skill.component */ 8928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function SkillsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r1);
} }
class SkillsComponent {
    constructor() {
        this.skillsSection = {
            title: "What I do💁‍♂️",
            subTitle: "Front-end developer who wants to explore every tech stack",
            skills: [
                "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
                "⚡ Progressive Web Applications SPA Stacks",
            ]
        };
    }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 11, vars: 3, consts: [["id", "skills", 1, "main"], [1, "skills-main-div"], ["wmAnimate", "fadeInRight", "aos", "", "speed", "normal", 1, "skills-image-div"], ["alt", "Sarthak Working", "src", "../../assets/images/developerActivity.svg", 1, "skills-image-div"], ["wmAnimate", "fadeInLeft", "aos", "", "speed", "normal", 1, "skills-text-div"], [1, "skills-heading"], [1, "subTitle", "skills-text-subtitle"], [4, "ngFor", "ngForOf"], [1, "subTitle", "skills-text"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-software-skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SkillsComponent_div_10_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.skillsSection.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.skillsSection.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skillsSection.skills);
    } }, directives: [_animation_animate_component__WEBPACK_IMPORTED_MODULE_0__.AnimateComponent, _software_skill_software_skill_component__WEBPACK_IMPORTED_MODULE_1__.SoftwareSkillComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.skills-main-div[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.skills-text-div[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n\n.skills-main-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-bottom: 30px;\n}\n\n.skills-image-div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n}\n\n.skills-heading[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 400;\n}\n\n@media (max-width: 1380px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n\n@media (max-width: 768px) {\n  .skills-heading[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n  }\n\n  .greeting-text-p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: normal;\n  }\n\n  .skills-main-div[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .skills-text-div[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin: 20px;\n  }\n\n  .skills-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .skills-text-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n\n  .skills-image-div[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxPQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQUdGOztFQURBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBSUY7O0VBRkE7SUFDRSxzQkFBQTtFQUtGOztFQUhBO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VBTUY7O0VBSkE7SUFDRSxlQUFBO0VBT0Y7O0VBTEE7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFRRjs7RUFOQTtJQUNFLFFBQUE7RUFTRjtBQUNGIiwiZmlsZSI6InNraWxscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJUaXRsZSB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn1cclxuLnNraWxscy1tYWluLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc2tpbGxzLXRleHQtZGl2IHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnNraWxscy1tYWluLWRpdiA+ICoge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNraWxscy1pbWFnZS1kaXYgPiBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5za2lsbHMtaGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzgwcHgpIHtcclxuICAuc2tpbGxzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2tpbGxzLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZ3JlZXRpbmctdGV4dC1wIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIC5za2lsbHMtbWFpbi1kaXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gIH1cclxuICAuc2tpbGxzLXRleHQtZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5za2lsbHMtdGV4dC1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5za2lsbHMtaW1hZ2UtZGl2IHtcclxuICAgIG9yZGVyOiAyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8928:
/*!*******************************************************************!*\
  !*** ./src/app/skills/software-skill/software-skill.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoftwareSkillComponent": () => (/* binding */ SoftwareSkillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function SoftwareSkillComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skills_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](skills_r1.fontAwesomeClassname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skills_r1.skillName);
} }
class SoftwareSkillComponent {
    constructor() {
        this.skillsSection = {
            softwareSkills: [
                {
                    skillName: "html-5",
                    fontAwesomeClassname: "fab fa-html5"
                },
                {
                    skillName: "css3",
                    fontAwesomeClassname: "fab fa-css3-alt"
                },
                {
                    skillName: "sass",
                    fontAwesomeClassname: "fab fa-sass"
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "fab fa-js"
                },
                {
                    skillName: "Angularjs",
                    fontAwesomeClassname: "fab fa-angular"
                }
            ]
        };
    }
    ngOnInit() {
    }
}
SoftwareSkillComponent.ɵfac = function SoftwareSkillComponent_Factory(t) { return new (t || SoftwareSkillComponent)(); };
SoftwareSkillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoftwareSkillComponent, selectors: [["app-software-skill"]], decls: 4, vars: 1, consts: [[1, "software-skills-main-div"], [1, "dev-icons"], ["class", "software-skill-inline", 4, "ngFor", "ngForOf"], [1, "software-skill-inline"]], template: function SoftwareSkillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SoftwareSkillComponent_li_3_Template, 4, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsSection.softwareSkills);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".software-skills-main-div[_ngcontent-%COMP%] {\n  margin-right: 40%;\n}\n\n.dev-icons[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n  font-size: 3rem;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: center;\n}\n\n.software-skill-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover {\n  color: #645beb;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #868e96;\n  font-size: 10px;\n}\n\n.software-skill-inline[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:hover    ~ p[_ngcontent-%COMP%] {\n  color: #645beb;\n}\n\n.subTitle[_ngcontent-%COMP%] {\n  color: #868e96;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvZnR3YXJlLXNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtBQUlGIiwiZmlsZSI6InNvZnR3YXJlLXNraWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvZnR3YXJlLXNraWxscy1tYWluLWRpdntcclxuICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmRldi1pY29ucyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc29mdHdhcmUtc2tpbGwtaW5saW5lIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUgPiBpIHtcclxuICBjb2xvcjogIzg2OGU5NjtcclxufVxyXG5cclxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjQ1YmViO1xyXG59XHJcbi5zb2Z0d2FyZS1za2lsbC1pbmxpbmUgPiBwIHtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnNvZnR3YXJlLXNraWxsLWlubGluZSA+IGk6aG92ZXIgfiBwe1xyXG4gIGNvbG9yOiAjNjQ1YmViO1xyXG59XHJcbi5zdWJUaXRsZSB7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4968:
/*!********************************************************!*\
  !*** ./src/app/social-media/social-media.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaComponent": () => (/* binding */ SocialMediaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SocialMediaComponent {
    constructor() {
        this.socialMediaLinks = {
            github: "https://github.com/Vladimir1428",
            gmail: "vova123555@gmail.com"
        };
    }
    ngOnInit() {
    }
}
SocialMediaComponent.ɵfac = function SocialMediaComponent_Factory(t) { return new (t || SocialMediaComponent)(); };
SocialMediaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialMediaComponent, selectors: [["app-social-media"]], decls: 7, vars: 2, consts: [[1, "social-media-div"], ["target", "_blank", 1, "icon-button", "github", 3, "href"], [1, "fab", "fa-github"], ["target", "_blank", 1, "icon-button", "google", 3, "href"], [1, "fab", "fa-google"]], template: function SocialMediaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialMediaLinks.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "mailto:" + ctx.socialMediaLinks.gmail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".social-media-div[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.icon-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 2.6rem;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 1.3rem;\n  height: 2.6rem;\n  line-height: 2.6rem;\n  margin: 0 5px;\n  position: relative;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n  width: 2.6rem;\n  margin-bottom: 10px;\n}\n\n.facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n}\n\n.linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #0e76a8;\n}\n\n.github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n\n.gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #fca326;\n}\n\n.google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #ea4335;\n}\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #1da1f2;\n}\n\n.instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: #c13584;\n}\n\n.twitter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .gitlab[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .github[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .linkedin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .instagram[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  transition: 0.3s ease-in;\n}\n\n@media (max-width: 768px) {\n  .social-media-div[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFHQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTs7Ozs7OztFQU9FLHVCQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNvY2lhbC1tZWRpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWwtbWVkaWEtZGl2IHtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmljb24tYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1idXR0b24gaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIuNnJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGhlaWdodDogMi42cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjZyZW07XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgd2lkdGg6IDIuNnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZmFjZWJvb2sgaSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG5cclxuLmxpbmtlZGluIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTc2YTg7XHJcbn1cclxuXHJcbi5naXRodWIgaSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLmdpdGxhYiBpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhMzI2O1xyXG59XHJcblxyXG4uZ29vZ2xlIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzU7XHJcbn1cclxuXHJcbi50d2l0dGVyIGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZGExZjI7XHJcbn1cclxuXHJcbi5pbnN0YWdyYW0gaSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxMzU4NDtcclxufVxyXG5cclxuLnR3aXR0ZXIgaTpob3ZlcixcclxuLmdvb2dsZSBpOmhvdmVyLFxyXG4uZ2l0bGFiIGk6aG92ZXIsXHJcbi5naXRodWIgaTpob3ZlcixcclxuLmxpbmtlZGluIGk6aG92ZXIsXHJcbi5mYWNlYm9vayBpOmhvdmVyLFxyXG4uaW5zdGFncmFtIGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnNvY2lhbC1tZWRpYS1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map