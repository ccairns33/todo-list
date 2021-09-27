/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayDateEditPanel": () => (/* binding */ displayDateEditPanel)
/* harmony export */ });
let displayDateEditPanel = (editBtn) => {
    if (editBtn.classList.contains("date-edit_clicked")){
        let dateEditPanel = document.querySelector(".date-item-edit")
        if (dateEditPanel.classList.contains("display-none")){
            dateEditPanel.classList.remove("display-none");
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
/* harmony export */   "displayTab": () => (/* binding */ displayTab),
/* harmony export */   "panelClicked": () => (/* binding */ panelClicked)
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
let panelClicked = (clickedTab) => {
    let panelNodeList = document.querySelectorAll(".sidetab_panel");
    let panelArr = [];
    for (let i = 0; i< panelNodeList.length; i ++ ) {
        panelArr.push(panelNodeList[i]);
    }
    panelArr.forEach(element => {
        if (element == clickedTab){
            element.classList.add("sidebar-clicked");
        }
        else {
            element.classList.remove("sidebar-clicked")
        }
    })
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectEditPanel": () => (/* binding */ displayProjectEditPanel)
/* harmony export */ });
let displayProjectEditPanel = (editBtn) => {
    if (editBtn.classList.contains("project-edit_clicked")){
        let projectEditPanel = document.querySelector(".project-item-edit")
        if (projectEditPanel.classList.contains("display-none")){
            projectEditPanel.classList.remove("display-none");
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

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodoEditPanel": () => (/* binding */ displayTodoEditPanel),
/* harmony export */   "updateArrayTodoItems": () => (/* binding */ updateArrayTodoItems),
/* harmony export */   "loadTodos": () => (/* binding */ loadTodos),
/* harmony export */   "todoItemsArrayAndListeners": () => (/* binding */ todoItemsArrayAndListeners),
/* harmony export */   "newTodoSubmition": () => (/* binding */ newTodoSubmition)
/* harmony export */ });
/* harmony import */ var _websiteInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteInit */ "./src/websiteInit.js");

let displayTodoEditPanel = (editBtn) => {
    if (editBtn.classList.contains("todo-edit_clicked")){
        let todoEditPanel = document.querySelector(".todo-item-edit")
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
let newTodoPriority = (todoPriorityContainer) =>{
    let todoPriority = "";
    todoPriorityContainer.addEventListener("click", (e) =>  {
        if (e.target.tagName.toLowerCase() === "label"){
            if (e.target.classList.contains("priority-btn-low")){
                todoPriority = "low";
            }
            else if (e.target.classList.contains("priority-btn-medium")){
                todoPriority = "medium";
            }
            else {
                todoPriority = "high";
            }
        }
    })
    return todoPriority;
}
let newTodoSubmition = (todoPriorityContainer,todos, newTodoSubmitBtn,newTodoTitle,newTodoDetails,newTodoDueDate ) => {
    // finding todo priority
    let todoPriority = newTodoPriority(todoPriorityContainer);
    newTodoSubmitBtn.addEventListener("click", (e) => {
            
        let todoTitle = newTodoTitle.value;
        let todoDetails = newTodoDetails.value;
        let todoDate = newTodoDueDate.value;
        todos.push({_id: Date.now().toString(),categoryId: "todo",title: todoTitle,details: todoDetails,dueDate: todoDate, priority:todoPriority});
        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.saveAndLoad)()

    })
}
let todoItemsArrayAndListeners = (arrayTodoItems) => {
    arrayTodoItems = (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.getDivChildrenByClass)("items-container","todo-item_page");
    console.log((0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.getDivChildrenByClass)("items-container","todo-item_page"))
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
                displayTodoEditPanel(editBtn);
            }
        })

        // event listener for clicking close on todo edit panel
        let todoEditClose = document.querySelector(".exit-todo-edit");
        todoEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("todo-edit_clicked");
            let todoEditPanel = document.querySelector(".todo-item-edit")
            if(!todoEditPanel.classList.contains("display-none")){
                todoEditPanel.classList.add("display-none");
            }
        })

        // deleting the todo items on click
        deleteBtn.addEventListener("click", _websiteInit__WEBPACK_IMPORTED_MODULE_0__.deleteItem , (e) => {
        })

    });
}
let loadTodos = (todos,itemsContainer,arrayTodoItems) => {
    let todosToRender = todos;
    todosToRender.forEach(({ _id, category, title, details, dueDate, priority }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="todo-item_page d-flex">
        <div class="todo-checkmark"></div>
        <div class="todo-title"> ${title}</div>
        <div class="todo-detail">item details
          <div class= "todo-detail_wrap display-none">
              <span class= "todo-detail_content">
                <p>${details} </p>
              </span>
          </div>
        </div>
        <div class="todo-date">${dueDate}</div>
        <div class="todo-edit todo-icon" data-edit-todo=${_id}>
          <i class="far fa-edit"></i>
        </div>
        <div class="todo-delete todo-icon" data-delete-todo=${_id}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>`
    })
    updateArrayTodoItems(arrayTodoItems);
}
let updateArrayTodoItems = (arrayTodoItems) => {
    arrayTodoItems = Array.from(document.querySelectorAll(".todo-item_page"));
    console.log(arrayTodoItems);
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
/* harmony export */   "hideInactiveTabs": () => (/* binding */ hideInactiveTabs),
/* harmony export */   "getDivChildrenByClass": () => (/* binding */ getDivChildrenByClass),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "saveAndLoad": () => (/* binding */ saveAndLoad)
/* harmony export */ });
/* harmony import */ var _newItemPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItemPanel */ "./src/newItemPanel.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./src/date.js");






// Selector for todos container
const itemsContainer = document.querySelector('[data-container]');

// Local storage keys
const LOCAL_STORAGE_CATEGORIES_KEY = 'LOCAL_STORAGE_CATEGORIES_KEY';
const LOCAL_STORAGE_TODOS_KEY = 'LOCAL_STORAGE_TODOS_KEY';
const LOCAL_STORAGE_PROJECTS_KEY = 'LOCAL_STORAGE_PROJECTS_KEY';
const LOCAL_STORAGE_DATES_KEY = 'LOCAL_STORAGE_DATES_KEY';
const LOCAL_STORAGE_NOTES_KEY = 'LOCAL_STORAGE_NOTES_KEY';


const LOCAL_STORAGE_SELECTED_CATEGORY_ID_KEY = 'LOCAL_STORAGE_SELECTED_CATEGORY_ID_KEY';

let selectedCategoryId = localStorage.getItem(LOCAL_STORAGE_SELECTED_CATEGORY_ID_KEY);
let categories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CATEGORIES_KEY)) || [];
let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY)) || [];
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let dates = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATES_KEY)) || [];
let notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOTES_KEY)) || [];

// todo selectors for new todo
let newTodoSubmitBtn = document.querySelector(".create-new-todo-submit");
let newTodoTitle = document.querySelector("#new-todo-title");
let newTodoDetails = document.querySelector("#new-todo-details");
let newTodoDueDate = document.querySelector("#new-todo-date");
let todoPriorityContainer = document.querySelector("#new-todo-priority-container")

let arrayTodoItems = [];
let arrayProjectItems = [];
let arrayDateItems = [];


let initEventListeners = () => {
    // add todo items !!
    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadTodos)(todos,itemsContainer,arrayTodoItems);
    console.log(arrayTodoItems);
    
    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.newTodoSubmition)(todoPriorityContainer,todos, newTodoSubmitBtn,newTodoTitle,newTodoDetails,newTodoDueDate);

    const newItemBtn = document.querySelector(".new-todo_btn");
    newItemBtn.addEventListener("click", (e) => {
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

    const container_panel = "new-item-main-content";
    const children_panel = 'item-panel';

    //no color change for these. might add something else later.
    todoTabPanel.addEventListener("click", (e) => {
        (0,_todo__WEBPACK_IMPORTED_MODULE_2__.updateArrayTodoItems)(arrayTodoItems);
        hideInactiveTabs(document.querySelector(".todo-panel"),container_panel, children_panel,todoTabPanel);
    })
    projectTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".project-panel"),container_panel, children_panel,projectTabPanel);
    })
    dateTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".date-panel"),container_panel, children_panel,dateTabPanel);
    })
    noteTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".note-panel"),container_panel, children_panel,noteTabPanel);
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

    ;(0,_todo__WEBPACK_IMPORTED_MODULE_2__.todoItemsArrayAndListeners)();
    

    // event listeners for the project items in project sidebar

    arrayProjectItems = getDivChildrenByClass("items-container","project-item_page");
    console.log(arrayProjectItems);
    arrayProjectItems.forEach(element => {
        let checkmark = element.querySelector(".project-checkmark");
        let detail = element.querySelector(".project-detail");
        let tooltip = element.querySelector(".project-detail_wrap");
        let editBtn = element.querySelector(".project-edit");
        let deleteBtn = element.querySelector(".project-delete");

        checkmark.addEventListener("click",(e) => {
            if(checkmark.classList.contains("project-checkmark_checked")){
                checkmark.classList.remove("project-checkmark_checked");
            }
            else{
               checkmark.classList.add("project-checkmark_checked");
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
            if (editBtn.classList.contains("project-edit_clicked")){
                return;
            }
            else{
                editBtn.classList.add("project-edit_clicked");
                (0,_project__WEBPACK_IMPORTED_MODULE_3__.displayProjectEditPanel)(editBtn);
            }
        })

        // event listener for clicking close on project edit panel
        let todoEditClose = document.querySelector(".exit-project-edit");
        todoEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("project-edit_clicked");
            let todoEditPanel = document.querySelector(".project-item-edit")
            if(!todoEditPanel.classList.contains("display-none")){
                todoEditPanel.classList.add("display-none");
            }
        })

        // deleting the todo items on click
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

    });
    // event listeners for the project items in project sidebar

    arrayDateItems = getDivChildrenByClass("items-container","date-item_page");
    console.log(arrayDateItems);
    arrayDateItems.forEach(element => {
        let editBtn = element.querySelector(".date-edit");
        let deleteBtn = element.querySelector(".date-delete");

       
    // will display and not display deatil text if mouse is in or out
        
        editBtn.addEventListener("click", (e) => {
            if (editBtn.classList.contains("date-edit_clicked")){
                return;
            }
            else{
                editBtn.classList.add("date-edit_clicked");
                (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.displayDateEditPanel)(editBtn);
            }
        })

        // event listener for clicking close on project edit panel
        let dateEditClose = document.querySelector(".exit-date-edit");
        dateEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("date-edit_clicked");
            let todoEditPanel = document.querySelector(".date-item-edit")
            if(!todoEditPanel.classList.contains("display-none")){
                todoEditPanel.classList.add("display-none");
            }
        })

        // deleting the todo items on click
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

    });

    // event listener for exiting note from note tab
    let noteExit = document.querySelector(".note-close_icon");
    noteExit.addEventListener("click", deleteItem, (e) =>{

    })


    

}


let load = () => {
    // clearing old data
    clearChildElements(itemsContainer);

    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadTodos)(todos,itemsContainer,arrayTodoItems);


}
let saveAndLoad = () =>{
    // saves
    console.log(LOCAL_STORAGE_TODOS_KEY)
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos));

    // loading/ rendering
    load();
    
}

let deleteItem = (e) =>{
    let deleteBtn = e.target;
    let item = deleteBtn.parentElement.parentElement;
    let itemParent = item.parentElement;
    // strange bug will delete items-container, in a certain sequence of events. hard to replicate
    if(itemParent.firstChild.id === "items-container"){
        return;
    }
    else {
        itemParent.removeChild(item);
    }
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
let clearChildElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
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
                element.classList.remove("display-none");
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
    if (children === 'item-panel'){
        (0,_newItemPanel__WEBPACK_IMPORTED_MODULE_0__.panelClicked)(clickedTab);
    }
    else {
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.iconColorChange)(clickedTab);
    }
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