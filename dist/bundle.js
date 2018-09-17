/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ZGraphy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ZGraphy */ "./src/ZGraphy.ts");
/* harmony import */ var _src_displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/displayabled/Rectangle */ "./src/displayabled/Rectangle.ts");
/* harmony import */ var _src_displayabled_Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/displayabled/Line */ "./src/displayabled/Line.ts");
/* harmony import */ var _src_core_Eventable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/core/Eventable */ "./src/core/Eventable.ts");




window.onload = function () {
    let zg1 = new _src_ZGraphy__WEBPACK_IMPORTED_MODULE_0__["ZGraphy"](this.document.getElementById("main"));
    const rect = new _src_displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 20, 20);
    const rect2 = new _src_displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 40, 20, 20);
    zg1.add(rect);
    zg1.add(rect2);
    const line1 = new _src_displayabled_Line__WEBPACK_IMPORTED_MODULE_2__["Line"](0, 0, 50, 50);
    rect.addLinkLine(line1, 20, 20, "forward");
    rect2.addLinkLine(line1, 10, 10, "behind");
    rect2.on(_src_core_Eventable__WEBPACK_IMPORTED_MODULE_3__["EventType"].MouseMove, (e) => {
        console.log(`mousmove:${e.clientX},${e.clientY}`);
    });
    zg1.add(line1);
    zg1.run();
    let speedx1 = 0.5;
    let speedy1 = 0.3;
    let speedx2 = 0.6;
    let speedy2 = 0.4;
    setInterval(function () {
        rect.move(speedx1, speedy1);
        if (rect.data.x < 0 || rect.data.x + rect.data.w > 600) {
            speedx1 = -speedx1;
        }
        if (rect.data.y < 0 || rect.data.y + rect.data.h > 600) {
            speedy1 = -speedy1;
        }
        rect2.move(speedx2, speedy2);
        if (rect2.data.x < 0 || rect2.data.x + rect2.data.w > 600) {
            speedx2 = -speedx2;
        }
        if (rect2.data.y < 0 || rect2.data.y + rect2.data.h > 600) {
            speedy2 = -speedy2;
        }
    }, 10);
};


/***/ }),

/***/ "./src/ZGraphy.ts":
/*!************************!*\
  !*** ./src/ZGraphy.ts ***!
  \************************/
/*! exports provided: ZGraphy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZGraphy", function() { return ZGraphy; });
/* harmony import */ var _core_Eventable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Eventable */ "./src/core/Eventable.ts");
/* harmony import */ var _core_EventHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/EventHandle */ "./src/core/EventHandle.ts");


class ZGraphy extends _core_Eventable__WEBPACK_IMPORTED_MODULE_0__["Eventable"] {
    /**
     *
     */
    constructor(dom) {
        super();
        // 初始化Dom和context状态
        if (dom instanceof HTMLCanvasElement) {
            this.canvas = dom;
        }
        else {
            this.dom = dom;
            this.canvas = document.createElement("canvas");
            this.canvas.style.width = dom.style.width;
            this.canvas.style.height = dom.style.height;
            dom.appendChild(this.canvas);
        }
        this.ctx = this.canvas.getContext("2d");
        // 保存元素
        this.child = new Array();
        this.canhandle = new _core_EventHandle__WEBPACK_IMPORTED_MODULE_1__["EventHandle"](this);
        // 绑定事件
        this.bindEvent();
    }
    add(obj) {
        this.child.push(obj);
        return this;
    }
    run() {
        const step = (function () {
            this.ctx.clearRect(0, 0, 1000, 800);
            this.show();
            window.requestAnimationFrame(step);
        }).bind(this);
        window.requestAnimationFrame(step);
    }
    show() {
        for (const path of this.child) {
            path.show(this.ctx);
        }
    }
    bindEvent() {
        this.canvas.addEventListener("mousemove", this.canhandle.onmousemove.bind(this.canhandle));
        this.canvas.addEventListener("click", this.canhandle.onclick.bind(this.canhandle));
    }
    get getchild() {
        return this.child;
    }
}


/***/ }),

/***/ "./src/core/Displayabled.ts":
/*!**********************************!*\
  !*** ./src/core/Displayabled.ts ***!
  \**********************************/
/*! exports provided: Displayabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Displayabled", function() { return Displayabled; });
/* harmony import */ var _Eventable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eventable */ "./src/core/Eventable.ts");

class Displayabled extends _Eventable__WEBPACK_IMPORTED_MODULE_0__["Eventable"] {
    show(pan) {
    }
}


/***/ }),

/***/ "./src/core/EventHandle.ts":
/*!*********************************!*\
  !*** ./src/core/EventHandle.ts ***!
  \*********************************/
/*! exports provided: EventHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandle", function() { return EventHandle; });
/* harmony import */ var _displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayabled/Rectangle */ "./src/displayabled/Rectangle.ts");
/* harmony import */ var _core_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Point */ "./src/core/Point.ts");
/* harmony import */ var _core_Eventable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Eventable */ "./src/core/Eventable.ts");



class EventHandle {
    constructor(zg) {
        this.child = zg.getchild;
    }
    log(e) {
        console.log(`${e.type}:${e.offsetX},${e.offsetY}`);
    }
    onmousemove(e) {
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        const point = new _core_Point__WEBPACK_IMPORTED_MODULE_1__["Point"](mouseX, mouseY);
        for (let obj of this.child) {
            if (obj instanceof _displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]) {
                if (obj.data.isPointIn(point)) {
                    obj.trigger(_core_Eventable__WEBPACK_IMPORTED_MODULE_2__["EventType"].MouseMove, e);
                }
            }
        }
    }
    onclick(e) {
    }
}


/***/ }),

/***/ "./src/core/Eventable.ts":
/*!*******************************!*\
  !*** ./src/core/Eventable.ts ***!
  \*******************************/
/*! exports provided: EventType, Eventable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eventable", function() { return Eventable; });
var EventType;
(function (EventType) {
    EventType[EventType["Click"] = 0] = "Click";
    EventType[EventType["MouseMove"] = 1] = "MouseMove";
    EventType[EventType["Change"] = 2] = "Change";
})(EventType || (EventType = {}));
class EventHandler {
    constructor(isOnce, handler) {
        this.isOnce = isOnce;
        this.handler = handler;
    }
}
class Eventable {
    constructor() {
        this.handlers = new Map();
    }
    on(en, eh) {
        if (!this.handlers.has(en))
            this.handlers.set(en, new Array());
        this.handlers.get(en).push(new EventHandler(false, eh));
    }
    ;
    once(en, eh) {
        if (!this.handlers.has(en))
            this.handlers.set(en, new Array());
        this.handlers.get(en).push(new EventHandler(true, eh));
    }
    ;
    off() {
    }
    ;
    trigger(en, e) {
        if (this.handlers.has(en) && this.handlers.get(en).length > 0) {
            for (let i = this.handlers.get(en).length - 1; i >= 0; i--) {
                let eh = this.handlers.get(en)[i];
                eh.handler.call(this, e || null);
                if (eh.isOnce) {
                    this.handlers.get(en).splice(i, 1);
                }
            }
        }
    }
    ;
}


/***/ }),

/***/ "./src/core/Point.ts":
/*!***************************!*\
  !*** ./src/core/Point.ts ***!
  \***************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(_X) {
        this._x = _X;
    }
    set y(_Y) {
        this._y = _Y;
    }
}


/***/ }),

/***/ "./src/core/Rect.ts":
/*!**************************!*\
  !*** ./src/core/Rect.ts ***!
  \**************************/
/*! exports provided: Rect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/core/Point.ts");
/* harmony import */ var _Size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Size */ "./src/core/Size.ts");


class Rect {
    constructor(p1, p2) {
        let p11 = p1 || new _Point__WEBPACK_IMPORTED_MODULE_0__["Point"](0, 0);
        let p22 = p2 || new _Size__WEBPACK_IMPORTED_MODULE_1__["Size"](0, 0);
        this._x = this._x1 = p11.x;
        this._y = this._y1 = p11.y;
        if (p22 instanceof _Size__WEBPACK_IMPORTED_MODULE_1__["Size"]) {
            this._w = p22.w;
            this._h = p22.h;
            this._x2 = this._x1 + this._w;
            this._y2 = this._y1 + this._h;
        }
        else if (p22 instanceof _Point__WEBPACK_IMPORTED_MODULE_0__["Point"]) {
            this._x2 = p22.x;
            this._y2 = p22.y;
            this._w = this._x2 - this._x1;
            this._h = this._y2 - this._y1;
        }
    }
    /**
     * isPointIn
     */
    isPointIn(p) {
        if (p.x < this._x2 &&
            p.x > this._x1 &&
            p.y > this._y1 &&
            p.y < this._y2)
            return true;
        return false;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }
}


/***/ }),

/***/ "./src/core/Size.ts":
/*!**************************!*\
  !*** ./src/core/Size.ts ***!
  \**************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
class Size {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }
    set w(_X) {
        this._w = _X;
    }
    set h(_Y) {
        this._h = _Y;
    }
}


/***/ }),

/***/ "./src/displayabled/Line.ts":
/*!**********************************!*\
  !*** ./src/displayabled/Line.ts ***!
  \**********************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var _core_Displayabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Displayabled */ "./src/core/Displayabled.ts");

class Line extends _core_Displayabled__WEBPACK_IMPORTED_MODULE_0__["Displayabled"] {
    constructor(x1, y1, x2, y2, w) {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.linew = w;
    }
    show(context) {
        context.save();
        context.lineCap = 'round';
        if (this.linew)
            context.lineWidth = this.linew;
        context.beginPath();
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.stroke();
        context.restore();
    }
    set start(p) {
        this.x1 = p.x;
        this.y1 = p.y;
    }
    set end(p) {
        this.x2 = p.x;
        this.y2 = p.y;
    }
}


/***/ }),

/***/ "./src/displayabled/Rectangle.ts":
/*!***************************************!*\
  !*** ./src/displayabled/Rectangle.ts ***!
  \***************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony import */ var _core_Displayabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Displayabled */ "./src/core/Displayabled.ts");
/* harmony import */ var _core_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Rect */ "./src/core/Rect.ts");
/* harmony import */ var _core_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Point */ "./src/core/Point.ts");
/* harmony import */ var _core_Size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Size */ "./src/core/Size.ts");




class Rectangle extends _core_Displayabled__WEBPACK_IMPORTED_MODULE_0__["Displayabled"] {
    constructor(x, y, w, h) {
        super();
        this._id = 0;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.linklineinfo = new Map();
    }
    show(context) {
        context.save();
        context.strokeRect(this.x + 0.5, this.y + 0.5, this.w, this.h);
        context.restore();
    }
    get data() {
        return new _core_Rect__WEBPACK_IMPORTED_MODULE_1__["Rect"](new _core_Point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.x, this.y), new _core_Size__WEBPACK_IMPORTED_MODULE_3__["Size"](this.w, this.h));
    }
    get id() {
        return this._id++;
    }
    addLinkLine(line, x, y, dire) {
        const id = this.id;
        const lineinfo = {
            line: line,
            linkpoint: {
                x: x,
                y: y,
            },
            linedirection: dire,
        };
        this.linklineinfo.set(id, lineinfo);
    }
    move(x, y) {
        this.x += x;
        this.y += y;
        for (const line of this.linklineinfo.values()) {
            if (line.linedirection === "forward") {
                line.line.start = { x: this.x + line.linkpoint.x, y: this.y + line.linkpoint.y };
            }
            else {
                line.line.end = { x: this.x, y: this.y };
            }
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1pHcmFwaHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvRGlzcGxheWFibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0V2ZW50SGFuZGxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0V2ZW50YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9SZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1NpemUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXlhYmxlZC9MaW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9kaXNwbGF5YWJsZWQvUmVjdGFuZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztB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SSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLElBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUNqRjtpQkFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Q0FDRiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgWkdyYXBoeSBhcyB6ZyB9IGZyb20gJy4vc3JjL1pHcmFwaHknO1xyXG5pbXBvcnQgeyBSZWN0YW5nbGUgfSBmcm9tIFwiLi9zcmMvZGlzcGxheWFibGVkL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSBcIi4vc3JjL2Rpc3BsYXlhYmxlZC9MaW5lXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuL3NyYy9jb3JlL0V2ZW50YWJsZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gIGxldCB6ZzEgPSBuZXcgemcodGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikpO1xyXG5cclxuICBjb25zdCByZWN0ID0gbmV3IFJlY3RhbmdsZSgxMCwxMCwyMCwyMCk7XHJcbiAgY29uc3QgcmVjdDIgPSBuZXcgUmVjdGFuZ2xlKDEwLDQwLDIwLDIwKTtcclxuXHJcbiAgemcxLmFkZChyZWN0KTtcclxuICB6ZzEuYWRkKHJlY3QyKTtcclxuXHJcbiAgY29uc3QgbGluZTEgPSBuZXcgTGluZSgwLDAsNTAsNTApO1xyXG4gIHJlY3QuYWRkTGlua0xpbmUobGluZTEsIDIwLCAyMCwgXCJmb3J3YXJkXCIpO1xyXG4gIHJlY3QyLmFkZExpbmtMaW5lKGxpbmUxLCAxMCwgMTAsIFwiYmVoaW5kXCIpO1xyXG5cclxuICByZWN0Mi5vbiggRXZlbnRUeXBlLk1vdXNlTW92ZSwgKGU6TW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYG1vdXNtb3ZlOiR7ZS5jbGllbnRYfSwke2UuY2xpZW50WX1gKTtcclxuICB9KTtcclxuXHJcbiAgemcxLmFkZChsaW5lMSk7XHJcbiAgemcxLnJ1bigpO1xyXG5cclxuICBsZXQgc3BlZWR4MSA9IDAuNTtcclxuICBsZXQgc3BlZWR5MSA9IDAuMztcclxuXHJcbiAgbGV0IHNwZWVkeDIgPSAwLjY7XHJcbiAgbGV0IHNwZWVkeTIgPSAwLjQ7XHJcblxyXG4gIHNldEludGVydmFsKGZ1bmN0aW9uICgpe1xyXG4gICAgcmVjdC5tb3ZlKHNwZWVkeDEsIHNwZWVkeTEpO1xyXG4gICAgaWYoIHJlY3QuZGF0YS54IDwgMCB8fCByZWN0LmRhdGEueCArIHJlY3QuZGF0YS53ID4gNjAwKXtcclxuICAgICAgc3BlZWR4MSA9IC1zcGVlZHgxO1xyXG4gICAgfVxyXG4gICAgaWYoIHJlY3QuZGF0YS55IDwgMCB8fCByZWN0LmRhdGEueSArIHJlY3QuZGF0YS5oID4gNjAwKXtcclxuICAgICAgc3BlZWR5MSA9IC1zcGVlZHkxO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY3QyLm1vdmUoc3BlZWR4Miwgc3BlZWR5Mik7XHJcbiAgICBpZiggcmVjdDIuZGF0YS54IDwgMCB8fCByZWN0Mi5kYXRhLnggKyByZWN0Mi5kYXRhLncgPiA2MDApe1xyXG4gICAgICBzcGVlZHgyID0gLXNwZWVkeDI7XHJcbiAgICB9XHJcbiAgICBpZiggcmVjdDIuZGF0YS55IDwgMCB8fCByZWN0Mi5kYXRhLnkgKyByZWN0Mi5kYXRhLmggPiA2MDApe1xyXG4gICAgICBzcGVlZHkyID0gLXNwZWVkeTI7XHJcbiAgICB9XHJcbiAgfSwgMTApO1xyXG59IiwiaW1wb3J0IHsgRXZlbnRhYmxlIH0gZnJvbSBcIi4vY29yZS9FdmVudGFibGVcIjtcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGUgfSBmcm9tIFwiLi9jb3JlL0V2ZW50SGFuZGxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgWkdyYXBoeSBleHRlbmRzIEV2ZW50YWJsZXtcclxuICAvLyDljIXlkKtjYW52YXPmoIfnrb7nmoRkb23lr7nosaFcclxuICBwcml2YXRlIGRvbTogSFRNTEVsZW1lbnQ7XHJcbiAgLy8gY2FudmFzIGRvbSDlr7nosaFcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgLy8g5YWD57Sg5pWw57uEXHJcbiAgcHJpdmF0ZSBjaGlsZDpBcnJheTxhbnk+O1xyXG4gIC8vIGNhbnZhcyBjb250ZXh05a+56LGhXHJcbiAgcHJpdmF0ZSBjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIC8vIGNhbnZhc+S6i+S7tuWkhOeQhuWvueixoVxyXG4gIHByaXZhdGUgY2FuaGFuZGxlOkV2ZW50SGFuZGxlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tOiBIVE1MRWxlbWVudCB8IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvLyDliJ3lp4vljJZEb23lkoxjb250ZXh054q25oCBXHJcbiAgICBpZiggZG9tIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgKXtcclxuICAgICAgdGhpcy5jYW52YXMgPSBkb207XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5kb20gPSBkb207XHJcblxyXG4gICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gZG9tLnN0eWxlLndpZHRoO1xyXG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBkb20uc3R5bGUuaGVpZ2h0O1xyXG4gICAgICBkb20uYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgLy8g5L+d5a2Y5YWD57SgXHJcbiAgICB0aGlzLmNoaWxkID0gbmV3IEFycmF5PGFueT4oKTtcclxuXHJcbiAgICB0aGlzLmNhbmhhbmRsZSA9IG5ldyBFdmVudEhhbmRsZSh0aGlzKTtcclxuXHJcbiAgICAvLyDnu5Hlrprkuovku7ZcclxuICAgIHRoaXMuYmluZEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBhZGQob2JqOmFueSk6WkdyYXBoeXtcclxuICAgIHRoaXMuY2hpbGQucHVzaChvYmopO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBydW4oKXtcclxuICAgIGNvbnN0IHN0ZXAgPSAoZnVuY3Rpb24gKCl7XHJcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA4MDApO1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgIH0pLmJpbmQodGhpcyk7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpOnZvaWR7XHJcbiAgICBmb3IgKGNvbnN0IHBhdGggb2YgdGhpcy5jaGlsZCkge1xyXG4gICAgICBwYXRoLnNob3codGhpcy5jdHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZEV2ZW50KCl7XHJcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuY2FuaGFuZGxlLm9ubW91c2Vtb3ZlLmJpbmQodGhpcy5jYW5oYW5kbGUpKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNhbmhhbmRsZS5vbmNsaWNrLmJpbmQodGhpcy5jYW5oYW5kbGUpKTtcclxuICB9XHJcblxyXG4gIGdldCBnZXRjaGlsZCgpOkFycmF5PGFueT57XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRXZlbnRhYmxlIH0gZnJvbSBcIi4vRXZlbnRhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzcGxheWFibGVkIGV4dGVuZHMgRXZlbnRhYmxle1xyXG4gIHB1YmxpYyBzaG93KHBhbjpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWR7XHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7IFpHcmFwaHkgfSBmcm9tIFwiLi4vWkdyYXBoeVwiO1xyXG5pbXBvcnQgeyBEaXNwbGF5YWJsZWQgfSBmcm9tIFwiLi9EaXNwbGF5YWJsZWRcIjtcclxuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSBcIi4uL2Rpc3BsYXlhYmxlZC9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vY29yZS9Qb2ludFwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vY29yZS9FdmVudGFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEhhbmRsZXtcclxuICBwcml2YXRlIGNoaWxkOkFycmF5PGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHpnOlpHcmFwaHkpe1xyXG4gICAgdGhpcy5jaGlsZCA9IHpnLmdldGNoaWxkO1xyXG4gIH1cclxuXHJcbiAgbG9nKGUpe1xyXG4gICAgY29uc29sZS5sb2coYCR7ZS50eXBlfToke2Uub2Zmc2V0WH0sJHtlLm9mZnNldFl9YCk7XHJcbiAgfVxyXG5cclxuICBvbm1vdXNlbW92ZShlOk1vdXNlRXZlbnQpe1xyXG4gICAgY29uc3QgbW91c2VYID0gZS5vZmZzZXRYO1xyXG4gICAgY29uc3QgbW91c2VZID0gZS5vZmZzZXRZO1xyXG5cclxuICAgIGNvbnN0IHBvaW50ID0gbmV3IFBvaW50KCBtb3VzZVgsIG1vdXNlWSApO1xyXG5cclxuICAgIGZvciggbGV0IG9iaiBvZiB0aGlzLmNoaWxkICl7XHJcbiAgICAgIGlmKCBvYmogaW5zdGFuY2VvZiBSZWN0YW5nbGUgKXtcclxuICAgICAgICBpZiggb2JqLmRhdGEuaXNQb2ludEluKHBvaW50KSApe1xyXG4gICAgICAgICAgb2JqLnRyaWdnZXIoIEV2ZW50VHlwZS5Nb3VzZU1vdmUsIGUgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBvbmNsaWNrKGU6TW91c2VFdmVudCl7XHJcblxyXG4gIH1cclxufSIsImV4cG9ydCBlbnVtIEV2ZW50VHlwZXtcclxuICBDbGljayxcclxuICBNb3VzZU1vdmUsXHJcbiAgQ2hhbmdlLFxyXG59XHJcblxyXG5jbGFzcyBFdmVudEhhbmRsZXIge1xyXG4gIGlzT25jZTpib29sZWFuO1xyXG4gIGhhbmRsZXI6RUhhbmRsZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaXNPbmNlOmJvb2xlYW4sXHJcbiAgICBoYW5kbGVyOkVIYW5kbGVyKSB7XHJcbiAgICB0aGlzLmlzT25jZSA9IGlzT25jZTtcclxuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRUhhbmRsZXJ7XHJcbiAgKGUpOmFueSAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudGFibGV7XHJcbiAgcHJpdmF0ZSBoYW5kbGVyczpNYXA8RXZlbnRUeXBlLEFycmF5PEV2ZW50SGFuZGxlcj4+O1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmhhbmRsZXJzID0gbmV3IE1hcDxFdmVudFR5cGUsQXJyYXk8RXZlbnRIYW5kbGVyPj4oKTtcclxuICB9XHJcbiAgcHVibGljIG9uKGVuOkV2ZW50VHlwZSxlaDpFSGFuZGxlcil7XHJcbiAgICBpZiggIXRoaXMuaGFuZGxlcnMuaGFzKGVuKSApXHJcbiAgICAgIHRoaXMuaGFuZGxlcnMuc2V0KGVuLCBuZXcgQXJyYXk8RXZlbnRIYW5kbGVyPigpKTtcclxuICAgIHRoaXMuaGFuZGxlcnMuZ2V0KGVuKS5wdXNoKG5ldyBFdmVudEhhbmRsZXIoZmFsc2UsIGVoKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgb25jZShlbjpFdmVudFR5cGUsZWg6RUhhbmRsZXIpe1xyXG4gICAgaWYoICF0aGlzLmhhbmRsZXJzLmhhcyhlbikgKVxyXG4gICAgICB0aGlzLmhhbmRsZXJzLnNldChlbiwgbmV3IEFycmF5PEV2ZW50SGFuZGxlcj4oKSk7XHJcbiAgICB0aGlzLmhhbmRsZXJzLmdldChlbikucHVzaChuZXcgRXZlbnRIYW5kbGVyKHRydWUsIGVoKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgb2ZmKCl7XHJcblxyXG4gIH07XHJcbiAgcHVibGljIHRyaWdnZXIoZW46RXZlbnRUeXBlLCBlPzphbnkpe1xyXG4gICAgaWYoIHRoaXMuaGFuZGxlcnMuaGFzKGVuKSAmJiB0aGlzLmhhbmRsZXJzLmdldChlbikubGVuZ3RoID4gMCApe1xyXG4gICAgICBmb3IgKGxldCBpPSB0aGlzLmhhbmRsZXJzLmdldChlbikubGVuZ3RoIC0gMTsgaT49IDAgOyBpLS0pIHtcclxuICAgICAgICBsZXQgZWg6RXZlbnRIYW5kbGVyID0gdGhpcy5oYW5kbGVycy5nZXQoZW4pW2ldO1xyXG4gICAgICAgIGVoLmhhbmRsZXIuY2FsbCh0aGlzLCBlIHx8IG51bGwpO1xyXG4gICAgICAgIGlmKCBlaC5pc09uY2UgKXtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlcnMuZ2V0KGVuKS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFBvaW50e1xyXG4gIHByaXZhdGUgX3g6bnVtYmVyO1xyXG4gIHByaXZhdGUgX3k6bnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKHg6bnVtYmVyLCB5Om51bWJlcil7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICB9XHJcblxyXG4gIGdldCB4KCl7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIGdldCB5KCl7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIHNldCB4KF9YOm51bWJlcil7XHJcbiAgICB0aGlzLl94ID0gX1g7XHJcbiAgfVxyXG5cclxuICBzZXQgeShfWSl7XHJcbiAgICB0aGlzLl95ID0gX1k7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgeyBTaXplIH0gZnJvbSBcIi4vU2l6ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3R7XHJcbiAgcHJpdmF0ZSBfeDpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfdzpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaDpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeDE6bnVtYmVyO1xyXG4gIHByaXZhdGUgX3kxOm51bWJlcjtcclxuICBwcml2YXRlIF94MjpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfeTI6bnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwMT86UG9pbnQsIHAyPzpQb2ludCB8IFNpemUpe1xyXG4gICAgbGV0IHAxMTpQb2ludCA9IHAxIHx8IG5ldyBQb2ludCgwLDApO1xyXG4gICAgbGV0IHAyMjpQb2ludCB8IFNpemUgPSBwMiB8fCBuZXcgU2l6ZSgwLDApO1xyXG5cclxuICAgIHRoaXMuX3ggPSB0aGlzLl94MSA9IHAxMS54O1xyXG4gICAgdGhpcy5feSA9IHRoaXMuX3kxID0gcDExLnk7XHJcblxyXG4gICAgaWYoIHAyMiBpbnN0YW5jZW9mIFNpemUgKXtcclxuICAgICAgdGhpcy5fdyA9IHAyMi53O1xyXG4gICAgICB0aGlzLl9oID0gcDIyLmg7XHJcbiAgICAgIHRoaXMuX3gyID0gdGhpcy5feDEgKyB0aGlzLl93O1xyXG4gICAgICB0aGlzLl95MiA9IHRoaXMuX3kxICsgdGhpcy5faDtcclxuICAgIH1lbHNlIGlmKCBwMjIgaW5zdGFuY2VvZiBQb2ludCApe1xyXG4gICAgICB0aGlzLl94MiA9IHAyMi54O1xyXG4gICAgICB0aGlzLl95MiA9IHAyMi55O1xyXG4gICAgICB0aGlzLl93ID0gdGhpcy5feDIgLSB0aGlzLl94MTtcclxuICAgICAgdGhpcy5faCA9IHRoaXMuX3kyIC0gdGhpcy5feTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpc1BvaW50SW5cclxuICAgKi9cclxuICBwdWJsaWMgaXNQb2ludEluKHA6UG9pbnQpOmJvb2xlYW4ge1xyXG4gICAgaWYoICBwLnggPCB0aGlzLl94MiAmJlxyXG4gICAgICBwLnggPiAgdGhpcy5feDEgJiZcclxuICAgICAgcC55ID4gdGhpcy5feTEgJiZcclxuICAgICAgcC55IDwgdGhpcy5feTIgKVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldCB4KCl7XHJcbiAgICByZXR1cm4gdGhpcy5feDtcclxuICB9XHJcblxyXG4gIGdldCB5KCl7XHJcbiAgICByZXR1cm4gdGhpcy5feTtcclxuICB9XHJcblxyXG4gIGdldCB3KCl7XHJcbiAgICByZXR1cm4gdGhpcy5fdztcclxuICB9XHJcblxyXG4gIGdldCBoKCl7XHJcbiAgICByZXR1cm4gdGhpcy5faDtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2l6ZXtcclxuICBwcml2YXRlIF93Om51bWJlcjtcclxuICBwcml2YXRlIF9oOm51bWJlcjtcclxuICBjb25zdHJ1Y3Rvcih3Om51bWJlciwgaDpudW1iZXIpe1xyXG4gICAgdGhpcy53ID0gdztcclxuICAgIHRoaXMuaCA9IGg7XHJcbiAgfVxyXG5cclxuICBnZXQgdygpe1xyXG4gICAgcmV0dXJuIHRoaXMuX3c7XHJcbiAgfVxyXG5cclxuICBnZXQgaCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuX2g7XHJcbiAgfVxyXG5cclxuICBzZXQgdyhfWDpudW1iZXIpe1xyXG4gICAgdGhpcy5fdyA9IF9YO1xyXG4gIH1cclxuXHJcbiAgc2V0IGgoX1kpe1xyXG4gICAgdGhpcy5faCA9IF9ZO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4uL2NvcmUvUG9pbnRcIjtcclxuaW1wb3J0IHsgRGlzcGxheWFibGVkIH0gZnJvbSBcIi4uL2NvcmUvRGlzcGxheWFibGVkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGluZSBleHRlbmRzIERpc3BsYXlhYmxlZHtcclxuICBwcml2YXRlIHgxOm51bWJlcjtcclxuICBwcml2YXRlIHkxOm51bWJlcjtcclxuICBwcml2YXRlIHgyOm51bWJlcjtcclxuICBwcml2YXRlIHkyOm51bWJlcjtcclxuICBwcml2YXRlIGxpbmV3Om51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBpc1N0YXJ0QXJyb3c6Ym9vbGVhbjtcclxuICBwcml2YXRlIGlzRW5kQXJyb3c6Ym9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB4MTpudW1iZXIsIFxyXG4gICAgeTE6bnVtYmVyLCBcclxuICAgIHgyOm51bWJlciwgXHJcbiAgICB5MjpudW1iZXIsIFxyXG4gICAgdz86bnVtYmVyKXtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy54MSA9IHgxO1xyXG4gICAgdGhpcy55MSA9IHkxO1xyXG4gICAgdGhpcy54MiA9IHgyO1xyXG4gICAgdGhpcy55MiA9IHkyO1xyXG4gICAgdGhpcy5saW5ldyA9IHc7XHJcbiAgfVxyXG5cclxuICBzaG93KGNvbnRleHQ6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTp2b2lke1xyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcblxyXG4gICAgY29udGV4dC5saW5lQ2FwPSdyb3VuZCc7XHJcbiAgICBpZiggdGhpcy5saW5ldyApXHJcbiAgICAgIGNvbnRleHQubGluZVdpZHRoPSB0aGlzLmxpbmV3O1xyXG5cclxuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICBjb250ZXh0Lm1vdmVUbyh0aGlzLngxLCB0aGlzLnkxKTtcclxuICAgIGNvbnRleHQubGluZVRvKHRoaXMueDIsIHRoaXMueTIpO1xyXG4gICAgY29udGV4dC5zdHJva2UoKTtcclxuXHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHNldCBzdGFydChwOlBvaW50KXtcclxuICAgIHRoaXMueDEgPSBwLng7XHJcbiAgICB0aGlzLnkxID0gcC55O1xyXG4gIH1cclxuXHJcbiAgc2V0IGVuZChwOlBvaW50KXtcclxuICAgIHRoaXMueDIgPSBwLng7XHJcbiAgICB0aGlzLnkyID0gcC55O1xyXG4gIH1cclxufSIsImltcG9ydCB7IERpc3BsYXlhYmxlZCB9IGZyb20gXCIuLi9jb3JlL0Rpc3BsYXlhYmxlZFwiO1xyXG5pbXBvcnQgeyBSZWN0IH0gZnJvbSBcIi4uL2NvcmUvUmVjdFwiO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuLi9jb3JlL1BvaW50XCI7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tIFwiLi4vY29yZS9TaXplXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgRGlzcGxheWFibGVke1xyXG4gIHByaXZhdGUgeDpudW1iZXI7XHJcbiAgcHJpdmF0ZSB5Om51bWJlcjtcclxuICBwcml2YXRlIHc6bnVtYmVyO1xyXG4gIHByaXZhdGUgaDpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaWQ6bnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGxpbmtsaW5laW5mbzpNYXA8YW55LGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgpe1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLl9pZCA9IDA7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLncgPSB3O1xyXG4gICAgdGhpcy5oID0gaDtcclxuXHJcbiAgICB0aGlzLmxpbmtsaW5laW5mbyA9IG5ldyBNYXAoKTtcclxuICB9XHJcblxyXG4gIHNob3coY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWR7XHJcbiAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgIFxyXG4gICAgY29udGV4dC5zdHJva2VSZWN0KFxyXG4gICAgICB0aGlzLnggKyAwLjUsXHJcbiAgICAgIHRoaXMueSArIDAuNSxcclxuICAgICAgdGhpcy53LCB0aGlzLmhcclxuICAgICk7XHJcblxyXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpe1xyXG4gICAgcmV0dXJuIG5ldyBSZWN0KFxyXG4gICAgICBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpLFxyXG4gICAgICBuZXcgU2l6ZSggdGhpcy53LCB0aGlzLmggKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5faWQrKztcclxuICB9XHJcblxyXG4gIGFkZExpbmtMaW5lKGxpbmUsIHgsIHksIGRpcmUpe1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmlkO1xyXG4gICAgY29uc3QgbGluZWluZm8gPSB7XHJcbiAgICAgIGxpbmU6IGxpbmUsXHJcbiAgICAgIGxpbmtwb2ludDoge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgfSxcclxuICAgICAgbGluZWRpcmVjdGlvbjogZGlyZSwgLy8gZm9yd2FyZCB8IGJlaGluZFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlua2xpbmVpbmZvLnNldChpZCwgbGluZWluZm8pO1xyXG4gIH1cclxuXHJcbiAgbW92ZSggeCwgeSApe1xyXG4gICAgdGhpcy54ICs9IHg7XHJcbiAgICB0aGlzLnkgKz0geTtcclxuXHJcbiAgICBmb3IoY29uc3QgbGluZSBvZiB0aGlzLmxpbmtsaW5laW5mby52YWx1ZXMoKSApe1xyXG4gICAgICBpZihsaW5lLmxpbmVkaXJlY3Rpb24gPT09IFwiZm9yd2FyZFwiKXtcclxuICAgICAgICBsaW5lLmxpbmUuc3RhcnQgPSB7IHg6IHRoaXMueCArIGxpbmUubGlua3BvaW50LngsIHk6IHRoaXMueSArIGxpbmUubGlua3BvaW50Lnl9O1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBsaW5lLmxpbmUuZW5kID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==