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



window.onload = function () {
    let zg1 = new _src_ZGraphy__WEBPACK_IMPORTED_MODULE_0__["ZGraphy"](this.document.getElementById("main"));
    const rect = new _src_displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 10, 20, 20);
    const rect2 = new _src_displayabled_Rectangle__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](10, 40, 20, 20);
    zg1.add(rect);
    zg1.add(rect2);
    const line1 = new _src_displayabled_Line__WEBPACK_IMPORTED_MODULE_2__["Line"](0, 0, 50, 50);
    rect.addLinkLine(line1, 20, 20, "forward");
    rect2.addLinkLine(line1, 10, 10, "behind");
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

class ZGraphy extends _core_Eventable__WEBPACK_IMPORTED_MODULE_0__["Eventable"] {
    /**
     *
     */
    constructor(dom) {
        super();
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
        this.child = new Array();
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
        return {
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1pHcmFwaHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvRGlzcGxheWFibGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0V2ZW50YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlzcGxheWFibGVkL0xpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BsYXlhYmxlZC9SZWN0YW5nbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRjhDO0FBQ1c7QUFDVjtBQUUvQyxNQUFNLENBQUMsTUFBTSxHQUFHO0lBQ2QsSUFBSSxHQUFHLEdBQUcsSUFBSSxvREFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1B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WUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVDLElBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxTQUFTLEVBQUM7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUNqRjtpQkFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Q0FDRiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiXHJcbmltcG9ydCB7IFpHcmFwaHkgYXMgemcgfSBmcm9tICcuL3NyYy9aR3JhcGh5JztcclxuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSBcIi4vc3JjL2Rpc3BsYXlhYmxlZC9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gXCIuL3NyYy9kaXNwbGF5YWJsZWQvTGluZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xyXG4gIGxldCB6ZzEgPSBuZXcgemcodGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikpO1xyXG5cclxuICBjb25zdCByZWN0ID0gbmV3IFJlY3RhbmdsZSgxMCwxMCwyMCwyMCk7XHJcbiAgY29uc3QgcmVjdDIgPSBuZXcgUmVjdGFuZ2xlKDEwLDQwLDIwLDIwKTtcclxuXHJcbiAgemcxLmFkZChyZWN0KTtcclxuICB6ZzEuYWRkKHJlY3QyKTtcclxuXHJcbiAgY29uc3QgbGluZTEgPSBuZXcgTGluZSgwLDAsNTAsNTApO1xyXG4gIHJlY3QuYWRkTGlua0xpbmUobGluZTEsIDIwLCAyMCwgXCJmb3J3YXJkXCIpO1xyXG4gIHJlY3QyLmFkZExpbmtMaW5lKGxpbmUxLCAxMCwgMTAsIFwiYmVoaW5kXCIpO1xyXG5cclxuICB6ZzEuYWRkKGxpbmUxKTtcclxuICB6ZzEucnVuKCk7XHJcblxyXG4gIGxldCBzcGVlZHgxID0gMC41O1xyXG4gIGxldCBzcGVlZHkxID0gMC4zO1xyXG5cclxuICBsZXQgc3BlZWR4MiA9IDAuNjtcclxuICBsZXQgc3BlZWR5MiA9IDAuNDtcclxuXHJcbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCl7XHJcbiAgICByZWN0Lm1vdmUoc3BlZWR4MSwgc3BlZWR5MSk7XHJcbiAgICBpZiggcmVjdC5kYXRhLnggPCAwIHx8IHJlY3QuZGF0YS54ICsgcmVjdC5kYXRhLncgPiA2MDApe1xyXG4gICAgICBzcGVlZHgxID0gLXNwZWVkeDE7XHJcbiAgICB9XHJcbiAgICBpZiggcmVjdC5kYXRhLnkgPCAwIHx8IHJlY3QuZGF0YS55ICsgcmVjdC5kYXRhLmggPiA2MDApe1xyXG4gICAgICBzcGVlZHkxID0gLXNwZWVkeTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdDIubW92ZShzcGVlZHgyLCBzcGVlZHkyKTtcclxuICAgIGlmKCByZWN0Mi5kYXRhLnggPCAwIHx8IHJlY3QyLmRhdGEueCArIHJlY3QyLmRhdGEudyA+IDYwMCl7XHJcbiAgICAgIHNwZWVkeDIgPSAtc3BlZWR4MjtcclxuICAgIH1cclxuICAgIGlmKCByZWN0Mi5kYXRhLnkgPCAwIHx8IHJlY3QyLmRhdGEueSArIHJlY3QyLmRhdGEuaCA+IDYwMCl7XHJcbiAgICAgIHNwZWVkeTIgPSAtc3BlZWR5MjtcclxuICAgIH1cclxuICB9LCAxMCk7XHJcbn0iLCJpbXBvcnQgeyBFdmVudGFibGUgfSBmcm9tIFwiLi9jb3JlL0V2ZW50YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFpHcmFwaHkgZXh0ZW5kcyBFdmVudGFibGV7XHJcblxyXG4gIHByaXZhdGUgZG9tOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGNoaWxkOkFycmF5PGFueT47XHJcblxyXG4gIHByaXZhdGUgY3R4OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZG9tOiBIVE1MRWxlbWVudCB8IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgaWYoIGRvbSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50ICl7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gZG9tO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuZG9tID0gZG9tO1xyXG5cclxuICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG4gICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IGRvbS5zdHlsZS53aWR0aDtcclxuICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gZG9tLnN0eWxlLmhlaWdodDtcclxuICAgICAgZG9tLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICB0aGlzLmNoaWxkID0gbmV3IEFycmF5PGFueT4oKTtcclxuICB9XHJcblxyXG4gIGFkZChvYmo6YW55KTpaR3JhcGh5e1xyXG4gICAgdGhpcy5jaGlsZC5wdXNoKG9iaik7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJ1bigpe1xyXG4gICAgY29uc3Qgc3RlcCA9IChmdW5jdGlvbiAoKXtcclxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDgwMCk7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgfSkuYmluZCh0aGlzKTtcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgfVxyXG5cclxuICBzaG93KCk6dm9pZHtcclxuICAgIGZvciAoY29uc3QgcGF0aCBvZiB0aGlzLmNoaWxkKSB7XHJcbiAgICAgIHBhdGguc2hvdyh0aGlzLmN0eCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50YWJsZSB9IGZyb20gXCIuL0V2ZW50YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpc3BsYXlhYmxlZCBleHRlbmRzIEV2ZW50YWJsZXtcclxuICBwdWJsaWMgc2hvdyhwYW46Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTp2b2lke1xyXG5cclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBFdmVudFR5cGV7XHJcbiAgQ2xpY2ssXHJcbiAgTW91c2VNb3ZlLFxyXG4gIENoYW5nZSxcclxufVxyXG5cclxuY2xhc3MgRXZlbnRIYW5kbGVyIHtcclxuICBpc09uY2U6Ym9vbGVhbjtcclxuICBoYW5kbGVyOkVIYW5kbGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGlzT25jZTpib29sZWFuLFxyXG4gICAgaGFuZGxlcjpFSGFuZGxlcikge1xyXG4gICAgdGhpcy5pc09uY2UgPSBpc09uY2U7XHJcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVIYW5kbGVye1xyXG4gIChlKTphbnkgIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRhYmxle1xyXG4gIHByaXZhdGUgaGFuZGxlcnM6TWFwPEV2ZW50VHlwZSxBcnJheTxFdmVudEhhbmRsZXI+PjtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICB9XHJcbiAgcHVibGljIG9uKGVuOkV2ZW50VHlwZSxlaDpFSGFuZGxlcil7XHJcbiAgICBpZiggIXRoaXMuaGFuZGxlcnMuaGFzKGVuKSApXHJcbiAgICAgIHRoaXMuaGFuZGxlcnMuc2V0KGVuLCBuZXcgQXJyYXk8RXZlbnRIYW5kbGVyPigpKTtcclxuICAgIHRoaXMuaGFuZGxlcnMuZ2V0KGVuKS5wdXNoKG5ldyBFdmVudEhhbmRsZXIoZmFsc2UsIGVoKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgb25jZShlbjpFdmVudFR5cGUsZWg6RUhhbmRsZXIpe1xyXG4gICAgaWYoICF0aGlzLmhhbmRsZXJzLmhhcyhlbikgKVxyXG4gICAgICB0aGlzLmhhbmRsZXJzLnNldChlbiwgbmV3IEFycmF5PEV2ZW50SGFuZGxlcj4oKSk7XHJcbiAgICB0aGlzLmhhbmRsZXJzLmdldChlbikucHVzaChuZXcgRXZlbnRIYW5kbGVyKHRydWUsIGVoKSk7XHJcbiAgfTtcclxuICBwdWJsaWMgb2ZmKCl7XHJcblxyXG4gIH07XHJcbiAgcHVibGljIHRyaWdnZXIoZW46RXZlbnRUeXBlLCBlPzphbnkpe1xyXG4gICAgaWYoIHRoaXMuaGFuZGxlcnMuaGFzKGVuKSAmJiB0aGlzLmhhbmRsZXJzLmdldChlbikubGVuZ3RoID4gMCApe1xyXG4gICAgICBmb3IgKGxldCBpPSB0aGlzLmhhbmRsZXJzLmdldChlbikubGVuZ3RoIC0gMTsgaT49IDAgOyBpLS0pIHtcclxuICAgICAgICBsZXQgZWg6RXZlbnRIYW5kbGVyID0gdGhpcy5oYW5kbGVycy5nZXQoZW4pW2ldO1xyXG4gICAgICAgIGVoLmhhbmRsZXIuY2FsbCh0aGlzLCBlIHx8IG51bGwpO1xyXG4gICAgICAgIGlmKCBlaC5pc09uY2UgKXtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlcnMuZ2V0KGVuKS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vY29yZS9Qb2ludFwiO1xyXG5pbXBvcnQgeyBEaXNwbGF5YWJsZWQgfSBmcm9tIFwiLi4vY29yZS9EaXNwbGF5YWJsZWRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMaW5lIGV4dGVuZHMgRGlzcGxheWFibGVke1xyXG4gIHByaXZhdGUgeDE6bnVtYmVyO1xyXG4gIHByaXZhdGUgeTE6bnVtYmVyO1xyXG4gIHByaXZhdGUgeDI6bnVtYmVyO1xyXG4gIHByaXZhdGUgeTI6bnVtYmVyO1xyXG4gIHByaXZhdGUgbGluZXc6bnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGlzU3RhcnRBcnJvdzpib29sZWFuO1xyXG4gIHByaXZhdGUgaXNFbmRBcnJvdzpib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHgxOm51bWJlciwgXHJcbiAgICB5MTpudW1iZXIsIFxyXG4gICAgeDI6bnVtYmVyLCBcclxuICAgIHkyOm51bWJlciwgXHJcbiAgICB3PzpudW1iZXIpe1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLngxID0geDE7XHJcbiAgICB0aGlzLnkxID0geTE7XHJcbiAgICB0aGlzLngyID0geDI7XHJcbiAgICB0aGlzLnkyID0geTI7XHJcbiAgICB0aGlzLmxpbmV3ID0gdztcclxuICB9XHJcblxyXG4gIHNob3coY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWR7XHJcbiAgICBjb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICBjb250ZXh0LmxpbmVDYXA9J3JvdW5kJztcclxuICAgIGlmKCB0aGlzLmxpbmV3IClcclxuICAgICAgY29udGV4dC5saW5lV2lkdGg9IHRoaXMubGluZXc7XHJcblxyXG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgIGNvbnRleHQubW92ZVRvKHRoaXMueDEsIHRoaXMueTEpO1xyXG4gICAgY29udGV4dC5saW5lVG8odGhpcy54MiwgdGhpcy55Mik7XHJcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG5cclxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0IHN0YXJ0KHA6UG9pbnQpe1xyXG4gICAgdGhpcy54MSA9IHAueDtcclxuICAgIHRoaXMueTEgPSBwLnk7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5kKHA6UG9pbnQpe1xyXG4gICAgdGhpcy54MiA9IHAueDtcclxuICAgIHRoaXMueTIgPSBwLnk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRGlzcGxheWFibGVkIH0gZnJvbSBcIi4uL2NvcmUvRGlzcGxheWFibGVkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgRGlzcGxheWFibGVke1xyXG4gIHByaXZhdGUgeDpudW1iZXI7XHJcbiAgcHJpdmF0ZSB5Om51bWJlcjtcclxuICBwcml2YXRlIHc6bnVtYmVyO1xyXG4gIHByaXZhdGUgaDpudW1iZXI7XHJcbiAgcHJpdmF0ZSBfaWQ6bnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGxpbmtsaW5laW5mbzpNYXA8YW55LGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHgsIHksIHcsIGgpe1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLl9pZCA9IDA7XHJcblxyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLncgPSB3O1xyXG4gICAgdGhpcy5oID0gaDtcclxuXHJcbiAgICB0aGlzLmxpbmtsaW5laW5mbyA9IG5ldyBNYXAoKTtcclxuICB9XHJcblxyXG4gIHNob3coY29udGV4dDpDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOnZvaWR7XHJcbiAgICBjb250ZXh0LnNhdmUoKTtcclxuICAgIFxyXG4gICAgY29udGV4dC5zdHJva2VSZWN0KFxyXG4gICAgICB0aGlzLnggKyAwLjUsXHJcbiAgICAgIHRoaXMueSArIDAuNSxcclxuICAgICAgdGhpcy53LCB0aGlzLmhcclxuICAgICk7XHJcblxyXG4gICAgY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0YSgpe1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnksXHJcbiAgICAgIHc6IHRoaXMudyxcclxuICAgICAgaDogdGhpcy5oLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGlkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5faWQrKztcclxuICB9XHJcblxyXG4gIGFkZExpbmtMaW5lKGxpbmUsIHgsIHksIGRpcmUpe1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLmlkO1xyXG4gICAgY29uc3QgbGluZWluZm8gPSB7XHJcbiAgICAgIGxpbmU6IGxpbmUsXHJcbiAgICAgIGxpbmtwb2ludDoge1xyXG4gICAgICAgIHg6IHgsXHJcbiAgICAgICAgeTogeSxcclxuICAgICAgfSxcclxuICAgICAgbGluZWRpcmVjdGlvbjogZGlyZSwgLy8gZm9yd2FyZCB8IGJlaGluZFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlua2xpbmVpbmZvLnNldChpZCwgbGluZWluZm8pO1xyXG4gIH1cclxuXHJcbiAgbW92ZSggeCwgeSApe1xyXG4gICAgdGhpcy54ICs9IHg7XHJcbiAgICB0aGlzLnkgKz0geTtcclxuXHJcbiAgICBmb3IoY29uc3QgbGluZSBvZiB0aGlzLmxpbmtsaW5laW5mby52YWx1ZXMoKSApe1xyXG4gICAgICBpZihsaW5lLmxpbmVkaXJlY3Rpb24gPT09IFwiZm9yd2FyZFwiKXtcclxuICAgICAgICBsaW5lLmxpbmUuc3RhcnQgPSB7IHg6IHRoaXMueCArIGxpbmUubGlua3BvaW50LngsIHk6IHRoaXMueSArIGxpbmUubGlua3BvaW50Lnl9O1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBsaW5lLmxpbmUuZW5kID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==