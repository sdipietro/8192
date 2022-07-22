/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  window.game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE1BQXhCLENBQWI7RUFDQUMsTUFBTSxDQUFDQyxJQUFQLEdBQWMsSUFBSU4scURBQUosQ0FBU0csSUFBVCxDQUFkO0FBQ0gsQ0FIRCIsInNvdXJjZXMiOlsid2VicGFjazovLzgxOTJfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIHdpbmRvdy5nYW1lID0gbmV3IEdhbWUobWFpbik7XG59KSJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwid2luZG93IiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/scripts/tile.js\");\n\n\nclass Game {\n  constructor(ele) {\n    this.ele = ele;\n    this.tiles = [];\n    this.setupBoard();\n    this.handleKeyDown.bind(this)();\n  } // handleClick() {\n  //     this.ele.children[0].innerText = 'Ouch';\n  // }\n\n\n  handleKeyDown() {\n    // const tiles = Array.from(this.ele.children[0].children);\n    addEventListener('keydown', e => {\n      console.log(e.code);\n    });\n  }\n\n  setupBoard() {\n    const board = document.createElement('ul');\n    board.className = 'board';\n\n    for (let rowIdx = 0; rowIdx < 4; rowIdx++) {\n      for (let colIdx = 0; colIdx < 4; colIdx++) {\n        let tile = document.createElement('li');\n        let tileInstance = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([rowIdx, colIdx]);\n        this.tiles.push(tileInstance);\n        tile.setAttribute('pos', [rowIdx, colIdx]);\n        tile.className = 'tile';\n        board.append(tile);\n      }\n    }\n\n    this.ele.append(board);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsTUFBTUMsSUFBTixDQUFXO0VBQ1BDLFdBQVcsQ0FBQ0MsR0FBRCxFQUFNO0lBQ2IsS0FBS0EsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0MsS0FBTCxHQUFhLEVBQWI7SUFFQSxLQUFLQyxVQUFMO0lBQ0EsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7RUFDSCxDQVBNLENBVVA7RUFDQTtFQUNBOzs7RUFFQUQsYUFBYSxHQUFHO0lBQ1o7SUFDQUUsZ0JBQWdCLENBQUMsU0FBRCxFQUFZQyxDQUFDLElBQUk7TUFDekJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLElBQWQ7SUFDUCxDQUZlLENBQWhCO0VBR0g7O0VBRURQLFVBQVUsR0FBRztJQUNULE1BQU1RLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQWQ7SUFDQUYsS0FBSyxDQUFDRyxTQUFOLEdBQWtCLE9BQWxCOztJQUVBLEtBQUssSUFBSUMsTUFBTSxHQUFHLENBQWxCLEVBQXFCQSxNQUFNLEdBQUcsQ0FBOUIsRUFBaUNBLE1BQU0sRUFBdkMsRUFBMkM7TUFDdkMsS0FBSyxJQUFJQyxNQUFNLEdBQUcsQ0FBbEIsRUFBcUJBLE1BQU0sR0FBRyxDQUE5QixFQUFpQ0EsTUFBTSxFQUF2QyxFQUEyQztRQUN2QyxJQUFJQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFYO1FBQ0EsSUFBSUssWUFBWSxHQUFHLElBQUlwQiw2Q0FBSixDQUFTLENBQUNpQixNQUFELEVBQVNDLE1BQVQsQ0FBVCxDQUFuQjtRQUNBLEtBQUtkLEtBQUwsQ0FBV2lCLElBQVgsQ0FBZ0JELFlBQWhCO1FBQ0FELElBQUksQ0FBQ0csWUFBTCxDQUFrQixLQUFsQixFQUF5QixDQUFDTCxNQUFELEVBQVNDLE1BQVQsQ0FBekI7UUFDQUMsSUFBSSxDQUFDSCxTQUFMLEdBQWlCLE1BQWpCO1FBRUFILEtBQUssQ0FBQ1UsTUFBTixDQUFhSixJQUFiO01BQ0g7SUFDSjs7SUFFRCxLQUFLaEIsR0FBTCxDQUFTb0IsTUFBVCxDQUFnQlYsS0FBaEI7RUFDSDs7QUF0Q007O0FBMENYLCtEQUFlWixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vODE5Ml9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaWxlIGZyb20gJy4vdGlsZSc7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy50aWxlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuc2V0dXBCb2FyZCgpO1xuICAgICAgICB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKSgpO1xuICAgIH1cblxuXG4gICAgLy8gaGFuZGxlQ2xpY2soKSB7XG4gICAgLy8gICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9ICdPdWNoJztcbiAgICAvLyB9XG5cbiAgICBoYW5kbGVLZXlEb3duKCkge1xuICAgICAgICAvLyBjb25zdCB0aWxlcyA9IEFycmF5LmZyb20odGhpcy5lbGUuY2hpbGRyZW5bMF0uY2hpbGRyZW4pO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5jb2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dXBCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBib2FyZC5jbGFzc05hbWUgPSAnYm9hcmQnO1xuXG4gICAgICAgIGZvciAobGV0IHJvd0lkeCA9IDA7IHJvd0lkeCA8IDQ7IHJvd0lkeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2xJZHggPSAwOyBjb2xJZHggPCA0OyBjb2xJZHgrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUluc3RhbmNlID0gbmV3IFRpbGUoW3Jvd0lkeCwgY29sSWR4XSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKHRpbGVJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgdGlsZS5zZXRBdHRyaWJ1dGUoJ3BvcycsIFtyb3dJZHgsIGNvbElkeF0pO1xuICAgICAgICAgICAgICAgIHRpbGUuY2xhc3NOYW1lID0gJ3RpbGUnO1xuXG4gICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kKHRpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGUuYXBwZW5kKGJvYXJkKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiVGlsZSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImVsZSIsInRpbGVzIiwic2V0dXBCb2FyZCIsImhhbmRsZUtleURvd24iLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwiY29kZSIsImJvYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwicm93SWR4IiwiY29sSWR4IiwidGlsZSIsInRpbGVJbnN0YW5jZSIsInB1c2giLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/tile.js":
/*!*****************************!*\
  !*** ./src/scripts/tile.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Tile {\n  constructor(pos) {\n    this.pos = pos;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFOLENBQVc7RUFDUEMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQSxHQUFMLEdBQVdBLEdBQVg7RUFDSDs7QUFITTs7QUFNWCwrREFBZUYsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLzgxOTJfcHJvamVjdC8uL3NyYy9zY3JpcHRzL3RpbGUuanM/MGViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3MpIHtcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaWxlOyJdLCJuYW1lcyI6WyJUaWxlIiwiY29uc3RydWN0b3IiLCJwb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/tile.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly84MTkyX3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;