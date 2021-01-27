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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/Game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Game.js":
/*!********************************!*\
  !*** ./src/components/Game.js ***!
  \********************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\nclass Game extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      xIsNext: true,\n      stepNumber: 0\n    };\n  }\n\n  handleClick(i) {\n    const history = this.state.history.slice(0, this.state.stepNumber + 1);\n    const current = history[history.length - 1];\n    const squares = current.squares.slice();\n    if (calculateWinner(squares) || squares[i]) {\n      return;\n    }\n    squares[i] = this.state.xIsNext ? 'X' : 'O';\n    this.setState({\n      history: history.concat([{\n        squares: squares\n      }]),\n      stepNumber: history.length,\n      xIsNext: !this.state.xIsNext\n    });\n  }\n\n  jumpTo(step) {\n    this.setState({\n      stepNumber: step,\n      xIsNext: step % 2 === 0\n    });\n  }\n\n  render() {\n    const history = this.state.history;\n    const current = history[this.state.stepNumber];\n    const winner = calculateWinner(current.squares);\n\n    const moves = history.map((step, move) => {\n      const desc = move ? 'Go to move #' + move : 'Go to game start';\n      return React.createElement(\n        'li',\n        { key: move },\n        React.createElement(\n          'button',\n          { onClick: () => this.jumpTo(move) },\n          desc\n        )\n      );\n    });\n\n    let status;\n    if (winner) {\n      status = 'Winner: ' + winner;\n    } else {\n      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');\n    }\n\n    return React.createElement(\n      'div',\n      { className: 'game' },\n      React.createElement(\n        'div',\n        { className: 'game-board' },\n        React.createElement(Board, {\n          squares: current.squares,\n          onClick: i => this.handleClick(i)\n        })\n      ),\n      React.createElement(\n        'div',\n        { className: 'game-info' },\n        React.createElement(\n          'div',\n          null,\n          status\n        ),\n        React.createElement(\n          'ol',\n          null,\n          moves\n        )\n      )\n    );\n  }\n}\n\n//# sourceURL=webpack:///./src/components/Game.js?");

/***/ })

/******/ });