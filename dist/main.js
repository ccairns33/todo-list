/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ \"./src/website.js\");\n\n(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.initEventListeners)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/itemsPageDisplay.js":
/*!*********************************!*\
  !*** ./src/itemsPageDisplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"iconColorChange\": () => (/* binding */ iconColorChange)\n/* harmony export */ });\nlet iconColorChange = ( tabsArr ) => {\n    let iconNodeList = document.querySelectorAll(\"i\");\n    let iconArr = [];\n    for (let i = 0; i< 4; i ++ ) {\n        //first four icons are the sidebar icons\n        iconArr.push(iconNodeList[i]);\n    }\n    for (let i = 0; i< tabsArr.length; i++){\n        //the icon format corresponds with the tabArr order, so can simply go by index\n        if (tabsArr[i].classList.contains(\"display-none\")){\n            iconArr[i].classList.remove(\"blue\");\n            if (iconArr[i].classList.contains(\"pink\")){\n                continue;\n            }\n            else {\n                iconArr[i].classList.add(\"pink\");\n            }\n        }\n        else {\n            iconArr[i].classList.add(\"blue\");\n\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/itemsPageDisplay.js?");

/***/ }),

/***/ "./src/newItemPanel.js":
/*!*****************************!*\
  !*** ./src/newItemPanel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadNewItemPanel\": () => (/* binding */ loadNewItemPanel),\n/* harmony export */   \"closeNewItemPanel\": () => (/* binding */ closeNewItemPanel),\n/* harmony export */   \"displayTab\": () => (/* binding */ displayTab)\n/* harmony export */ });\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\nlet loadNewItemPanel = () =>{\n    const itemPanel = document.querySelector(\".overlay\");\n    itemPanel.classList.remove(\"display-none\");\n}\n\nlet closeNewItemPanel = () =>{\n    const itemPanel = document.querySelector(\".overlay\");\n    itemPanel.classList.add(\"display-none\");\n\n    // default to todo panel\n    displayTab(document.querySelector(\".todo-panel\"),\"new-item-main-content\",\"item-panel\");\n\n}\n\n// loading the different panels\nlet displayTab = (activePanel, container, children) =>{\n    ;(0,_website__WEBPACK_IMPORTED_MODULE_0__.hideInactiveTabs)(activePanel,container, children);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/newItemPanel.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initEventListeners\": () => (/* binding */ initEventListeners),\n/* harmony export */   \"getDivChildren\": () => (/* binding */ getDivChildren),\n/* harmony export */   \"hideInactiveTabs\": () => (/* binding */ hideInactiveTabs)\n/* harmony export */ });\n/* harmony import */ var _newItemPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItemPanel */ \"./src/newItemPanel.js\");\n/* harmony import */ var _itemsPageDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemsPageDisplay */ \"./src/itemsPageDisplay.js\");\n\n\n\nlet initEventListeners = () => {\n    const newTodoBtn = document.querySelector(\".new-todo_btn\");\n    newTodoBtn.addEventListener(\"click\", (e) => {\n        (0,_newItemPanel__WEBPACK_IMPORTED_MODULE_0__.loadNewItemPanel)();\n    })\n\n    const closePanel = document.querySelector(\".exit-new-item\");\n    closePanel.addEventListener(\"click\", (e) => {\n        (0,_newItemPanel__WEBPACK_IMPORTED_MODULE_0__.closeNewItemPanel)();\n    })\n\n    // new panel tabs\n    const dateTab = document.querySelector(\".new-item-date\");\n    const todoTab = document.querySelector(\".new-item-todo\");\n    const projectTab = document.querySelector(\".new-item-project\");\n    const noteTab = document.querySelector(\".new-item-note\");\n\n    todoTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".todo-panel\"),\"new-item-main-content\", 'item-panel');\n    })\n    projectTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".project-panel\"),\"new-item-main-content\", 'item-panel');\n    })\n    dateTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".date-panel\"),\"new-item-main-content\", 'item-panel');\n    })\n    noteTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".note-panel\"),\"new-item-main-content\", 'item-panel');\n    })\n\n    // tabs for chagning main content from sidebar nav\n    const todoSideTab = document.querySelector(\".todo-list_tab\");\n    const projectsSideTab = document.querySelector(\".projects_tab\");\n    const datesSideTab = document.querySelector(\".dates_tab\");\n    const notesSideTab = document.querySelector(\".notes_tab\");\n\n    todoSideTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".todo-item_page\"),\"items-container\", 'item-display_page' );\n    })\n    projectsSideTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".project-item_page\"),\"items-container\", 'item-display_page');\n\n    })\n    datesSideTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".date-item_page\"),\"items-container\", 'item-display_page');\n\n    })\n    notesSideTab.addEventListener(\"click\", (e) => {\n        hideInactiveTabs(document.querySelector(\".notes-container\"),\"items-container\", 'item-display_page');\n\n    })\n\n    //event listeners for the todo items in Todo List sidebar\n\n    let arrayTodoItems = getDivChildrenByClass(\"items-container\",\"todo-item_page\");\n    console.log(arrayTodoItems);\n    arrayTodoItems.forEach(element => {\n        let checkmark = element.querySelector(\".todo-checkmark\");\n        let deails = element.querySelector(\".todo-detail\");\n        let editBtn = element.querySelector(\".todo-edit\");\n        let deleteBtn = element.querySelector(\".todo-delete\");\n\n        checkmark.addEventListener(\"click\",(e) => {\n            if(checkmark.classList.contains(\"todo-checkmark_checked\")){\n                checkmark.classList.remove(\"todo-checkmark_checked\");\n            }\n            else{\n               checkmark.classList.add(\"todo-checkmark_checked\");\n            }\n        })\n\n    });\n}\n\nlet getDivChildrenByClass = (containerClass, elementsClass) =>{\n    let div = document.querySelector(\".\"+containerClass),\n        subDiv = div.querySelectorAll(\".\"+elementsClass),\n        myArray = [];\n    \n    for(let i = 0; i < subDiv.length; i++) {\n        let elem = subDiv[i];\n        myArray.push(elem);\n\n    }\n    return myArray;\n}\n\nlet getDivChildren = (containerId, elementsId) =>{\n    let div = document.getElementById(containerId),\n        subDiv = div.getElementsByTagName('div'),\n        myArray = [];\n\n    for(let i = 0; i < subDiv.length; i++) {\n        let elem = subDiv[i];\n        if(elem.id == elementsId) {\n            myArray.push(elem);\n        }\n    }\n    return myArray;\n}\n//add display none for other tabs and calling icon color changing\nlet hideInactiveTabs = (activePanel, container, children) =>{\n    let tabsArr = getDivChildren(container, children);\n    tabsArr.forEach(element => {\n        if(activePanel.classList[0] === element.classList[0]){\n            activePanel.classList.remove(\"display-none\");\n        }\n        else{\n            element.classList.add(\"display-none\");\n        }\n    });\n    (0,_itemsPageDisplay__WEBPACK_IMPORTED_MODULE_1__.iconColorChange)(tabsArr);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/website.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;