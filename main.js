/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iconColorChange": () => (/* binding */ iconColorChange)
/* harmony export */ });
let iconColorChange = ( clickedTab ) => {
    let iconNodeList = document.querySelectorAll(".sidebar_icon");
    let iconArr = [];
    for (let i = 0; i< iconNodeList.length; i ++ ) {
        iconArr.push(iconNodeList[i]);
    }

    iconArr.forEach(element => {
        if (element.parentElement == clickedTab){
            element.classList.remove("blue");
            if (element.classList.contains("pink")){
                //do nothing, but it shouldn't have pink
            }
            else {
                    element.classList.add("pink");
            }
        }
        else {
            element.classList.add("blue");
        }
    });
}



/***/ }),

/***/ "./src/newItemPanel.js":
/*!*****************************!*\
  !*** ./src/newItemPanel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadNewItemPanel": () => (/* binding */ loadNewItemPanel),
/* harmony export */   "closeNewItemPanel": () => (/* binding */ closeNewItemPanel),
/* harmony export */   "displayTab": () => (/* binding */ displayTab)
/* harmony export */ });
/* harmony import */ var _websiteInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteInit */ "./src/websiteInit.js");


let loadNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.remove("display-none");
}

let closeNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.add("display-none");

    // default to todo panel
    displayTab(document.querySelector(".todo-panel"),"new-item-main-content","item-panel");

}

// loading the different panels
let displayTab = (activePanel, container, children) =>{
    ;(0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.hideInactiveTabs)(activePanel,container, children);
}




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodoEditPanel": () => (/* binding */ displayTodoEditPanel)
/* harmony export */ });
let displayTodoEditPanel = (editBtn) => {
    if (editBtn.classList.contains("todo-edit_clicked")){
        let todoEditPanel = document.querySelector(".overlay-todoitem-edit")
        if (todoEditPanel.classList.contains("display-none")){
            todoEditPanel.classList.remove("display-none");
        }
        else{
            return;
        }
    }
    else{
        return;
    }
}


/***/ }),

/***/ "./src/websiteInit.js":
/*!****************************!*\
  !*** ./src/websiteInit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initEventListeners": () => (/* binding */ initEventListeners),
/* harmony export */   "getDivChildren": () => (/* binding */ getDivChildren),
/* harmony export */   "hideInactiveTabs": () => (/* binding */ hideInactiveTabs)
/* harmony export */ });
/* harmony import */ var _newItemPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItemPanel */ "./src/newItemPanel.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");





let initEventListeners = () => {
    const newTodoBtn = document.querySelector(".new-todo_btn");
    newTodoBtn.addEventListener("click", (e) => {
        (0,_newItemPanel__WEBPACK_IMPORTED_MODULE_0__.loadNewItemPanel)();
    })

    const closePanel = document.querySelector(".exit-new-item");
    closePanel.addEventListener("click", (e) => {
        (0,_newItemPanel__WEBPACK_IMPORTED_MODULE_0__.closeNewItemPanel)();
    })

    // new panel tabs
    const dateTabPanel = document.querySelector(".new-item-date");
    const todoTabPanel = document.querySelector(".new-item-todo");
    const projectTabPanel = document.querySelector(".new-item-project");
    const noteTabPanel = document.querySelector(".new-item-note");
    const conatiner_panel = "new-item-main-content";
    const children_panel = 'item-panel';

    todoTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".todo-panel"),conatiner_panel, children_panel);
    })
    projectTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".project-panel"),conatiner_panel, children_panel);
    })
    dateTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".date-panel"),conatiner_panel, children_panel);
    })
    noteTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".note-panel"),conatiner_panel, children_panel);
    })

    // tabs for chagning main content from sidebar nav
    const todoSideTab = document.querySelector(".todo-list_tab");
    const projectsSideTab = document.querySelector(".projects_tab");
    const datesSideTab = document.querySelector(".dates_tab");
    const notesSideTab = document.querySelector(".notes_tab");
    const container_tab = "items-container";
    const children_tab= "item-display_page";

    todoSideTab.addEventListener("click", (e) => {
        let activePanel = document.querySelector(".todo-item_page");

        hideInactiveTabs(activePanel,container_tab, children_tab,todoSideTab);
        
    })
    projectsSideTab.addEventListener("click", (e) => {
        let activePanel = document.querySelector(".project-item_page");

        hideInactiveTabs(activePanel,container_tab, children_tab,projectsSideTab);
    
    })
    datesSideTab.addEventListener("click", (e) => {
        let activePanel = document.querySelector(".date-item_page");
       
        hideInactiveTabs(activePanel,container_tab, children_tab,datesSideTab);
        
    })
    notesSideTab.addEventListener("click", (e) => {
        let activePanel = document.querySelector(".notes-container");

        hideInactiveTabs(activePanel,container_tab, children_tab,notesSideTab);
    
    })
    //event listeners for the todo items in Todo List sidebar

    let arrayTodoItems = getDivChildrenByClass("items-container","todo-item_page");
    console.log(arrayTodoItems);
    arrayTodoItems.forEach(element => {
        let checkmark = element.querySelector(".todo-checkmark");
        let detail = element.querySelector(".todo-detail");
        let tooltip = element.querySelector(".todo-detail_wrap");
        let editBtn = element.querySelector(".todo-edit");
        let deleteBtn = element.querySelector(".todo-delete");

        checkmark.addEventListener("click",(e) => {
            if(checkmark.classList.contains("todo-checkmark_checked")){
                checkmark.classList.remove("todo-checkmark_checked");
            }
            else{
               checkmark.classList.add("todo-checkmark_checked");
            }
        })
    // will display and not display deatil text if mouse is in or out
        detail.addEventListener("mouseover", (e) => {
            if (tooltip.classList.contains("display-none")){
                tooltip.classList.remove("display-none");
            }
        })
        detail.addEventListener("mouseout", (e) => {
            if (!tooltip.classList.contains("display-none")){
                tooltip.classList.add("display-none");
            }
        })
        editBtn.addEventListener("click", (e) => {
            if (editBtn.classList.contains("todo-edit_clicked")){
                return;
            }
            else{
                editBtn.classList.add("todo-edit_clicked");
                (0,_todo__WEBPACK_IMPORTED_MODULE_2__.displayTodoEditPanel)(editBtn);
            }
        })

        // event listener for clicking close on todo edit panel
        let todoEditClose = document.querySelector(".exit-todo-edit");
        todoEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("todo-edit_clicked");
            let todoEditPanel = document.querySelector(".overlay-todoitem-edit")
            if(!todoEditPanel.classList.contains("display-none")){
                todoEditPanel.classList.add("display-none");
            }
        })

        // deleting the todo items on click
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

    });

}

let deleteItem = (e) =>{
    let deleteBtn = e.target;
    let item = deleteBtn.parentElement.parentElement;
    let itemParent = item.parentElement;
    itemParent.removeChild(item);
}
let getDivChildrenByClass = (containerClass, elementsClass) =>{
    let div = document.querySelector("."+containerClass),
        subDiv = div.querySelectorAll("."+elementsClass),
        myArray = [];
    
    for(let i = 0; i < subDiv.length; i++) {
        let elem = subDiv[i];
        myArray.push(elem);

    }
    return myArray;
}

let getDivChildren = (containerId, elementsId) =>{
    let div = document.getElementById(containerId),
        subDiv = div.getElementsByTagName('div'),
        myArray = [];

    for(let i = 0; i < subDiv.length; i++) {
        let elem = subDiv[i];
        if(elem.id == elementsId) {
            myArray.push(elem);
        }
    }
    return myArray;
}
//add display none for other tabs and calling icon color changing
let hideInactiveTabs = (activePanel, container, children, clickedTab) =>{
    let tabsArr = getDivChildren(container, children);
    if (activePanel!= null){
        tabsArr.forEach(element => {
            if(activePanel.classList[0] === element.classList[0]){
                activePanel.classList.remove("display-none");
            }
            else{
                element.classList.add("display-none");
            }
        });
    } 
    else{
        tabsArr.forEach(element => {
            element.classList.add("display-none")
        });
    }
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.iconColorChange)(clickedTab);
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _websiteInit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteInit.js */ "./src/websiteInit.js");

(0,_websiteInit_js__WEBPACK_IMPORTED_MODULE_0__.initEventListeners)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map