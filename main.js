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
/* harmony export */   "displayDateEditPanel": () => (/* binding */ displayDateEditPanel),
/* harmony export */   "dateItemsArrayAndListeners": () => (/* binding */ dateItemsArrayAndListeners),
/* harmony export */   "newDateSubmition": () => (/* binding */ newDateSubmition),
/* harmony export */   "loadDates": () => (/* binding */ loadDates)
/* harmony export */ });
/* harmony import */ var _websiteInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteInit */ "./src/websiteInit.js");


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
let newDateSubmition = (dates, newDateSubmitBtn,newDateTitle,newDateDueDate) => {
    newDateSubmitBtn.addEventListener("click", (e) => {
            
        let dateTitle = newDateTitle.value;
        let date = newDateDueDate.value;

        dates.push({_id: Date.now().toString(),category: "date",title: dateTitle,dueDate: date });
        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.saveAndLoad)();
        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.autoCloseNewItemPanel)();

    })
    
}
let loadDates = (dates, itemsContainer)=>{
    let datesToRender = dates;
    datesToRender.forEach(({ _id, category, title, dueDate }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="date-item_page d-flex  display-none" data-category=${category}>
        <div class="date-title_page"> ${title} </div>
        <div class="date-item-date">${dueDate} </div>
        <div class="date-edit date-icon" data-edit-date=${_id}>
          <i class="far fa-edit"></i>
        </div>
        <div class="date-delete date-icon" data-delete-date=${_id}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>`
    });

}


let dateItemsArrayAndListeners = (arrayDateItems) => {
    arrayDateItems = (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.getDivChildrenByClass)("items-container","date-item_page");
    console.log(arrayDateItems);
    arrayDateItems.forEach(element => {
        let editBtn = element.querySelector(".date-edit");
        let deleteBtn = element.querySelector(".date-delete");
        
        editBtn.addEventListener("click", (e) => {
            if (editBtn.classList.contains("date-edit_clicked")){
                return;
            }
            else{
                editBtn.classList.add("date-edit_clicked");
                displayDateEditPanel(editBtn);
            }
        })

        // event listener for clicking close on date edit panel
        let dateEditClose = document.querySelector(".exit-date-edit");
        dateEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("date-edit_clicked");
            let todoEditPanel = document.querySelector(".date-item-edit")
            if(!todoEditPanel.classList.contains("display-none")){
                todoEditPanel.classList.add("display-none");
            }
        })

        // deleting the item on clicking on the trash bin
        deleteBtn.addEventListener("click", _websiteInit__WEBPACK_IMPORTED_MODULE_0__.deleteItem , (e) => {
        })

    });
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");






let loadNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.remove("display-none");
    
    //adding priority event listener
    (0,_todo__WEBPACK_IMPORTED_MODULE_1__.newTodoPriority)();
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.newProjectPriority)();

    
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
/* harmony export */   "displayProjectEditPanel": () => (/* binding */ displayProjectEditPanel),
/* harmony export */   "newProjectPriority": () => (/* binding */ newProjectPriority),
/* harmony export */   "projectItemsArrayAndListeners": () => (/* binding */ projectItemsArrayAndListeners),
/* harmony export */   "updateArrayProjectItems": () => (/* binding */ updateArrayProjectItems),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "newProjectSubmition": () => (/* binding */ newProjectSubmition)
/* harmony export */ });
/* harmony import */ var _websiteInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websiteInit */ "./src/websiteInit.js");


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
let newProjectPriority = () =>{
    let priorityContainer = document.querySelector("#new-project-priority-container");
    let priorityArr= Array.from(document.querySelectorAll(".project-priority-btn"))
    priorityContainer.addEventListener("click", (e)=>{
        
        //removes previously clicked btns and adds class to clicked btn
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("project-priority_clicked");
                btn.classList.remove("project-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("project-priority-btn-"+btn.textContent.toLowerCase())
            }
            else {
                btn.classList.add("project-priority_clicked");
                btn.classList.add("project-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.remove("project-priority-btn-"+btn.textContent.toLowerCase())

            }
        });
            
       
    })
}
let newProjectSubmition = (projects, newProjectSubmitBtn,newProjectTitle,newProjectDetails,newProjectDueDate) => {
    newProjectSubmitBtn.addEventListener("click", (e) => {
            
        let projTitle = newProjectTitle.value;
        let projDetails = newProjectDetails.value;
        let projDate = newProjectDueDate.value;
        let projPriority="";

        let priorityArr= Array.from(document.querySelectorAll(".project-priority-btn"));
        priorityArr.forEach(btn=>{
            if(btn.classList.contains("project-priority_clicked")){
                projPriority=btn.textContent.toLowerCase();
            }
        })
        projects.push({_id: Date.now().toString(),category: "project",title: projTitle,details: projDetails,dueDate: projDate , priority: projPriority});
        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.saveAndLoad)();
        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.autoCloseNewItemPanel)();

    })
    
}

    // event listeners for the project items in project sidebar
let projectItemsArrayAndListeners = (arrayProjectItems) => {
    arrayProjectItems = (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.getDivChildrenByClass)("items-container","project-item_page");
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
                displayProjectEditPanel(editBtn);
            }
        })

        // event listener for clicking close on project edit panel
        let projectEditClose = document.querySelector(".exit-project-edit");
        projectEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("project-edit_clicked");
            let projectEditPanel = document.querySelector(".project-item-edit")
            if(!projectEditPanel.classList.contains("display-none")){
                projectEditPanel.classList.add("display-none");
            }
        })

        // deleting the todo items on click
        deleteBtn.addEventListener("click", _websiteInit__WEBPACK_IMPORTED_MODULE_0__.deleteItem , (e) => {
        })

    });
}

let loadProjects = (projects,itemsContainer) => {
    let projectsToRender = projects;
    projectsToRender.forEach(({ _id, category, title, details, dueDate,priority }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="project-item_page d-flex" data-catagory=${category} data-priority= ${priority}>
        <div class="project-checkmark"></div>
        <div class="project-title"> ${title}</div>
        <div class="project-detail">project details
          <div class= "project-detail_wrap display-none">
              <span class= "project-detail_content">
                <p>${details} </p>
              </span>
          </div>
        </div>
        <div class="project-date">${dueDate}</div>
        <div class="project-edit todo-icon" data-edit-project=${_id}>
          <i class="far fa-edit"></i>
        </div>
        <div class="project-delete project-icon" data-delete-project=${_id}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>`
    })

}
let updateArrayProjectItems = (arrayProjectItems) => {
    arrayProjectItems = (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.getDivChildrenByClass)("items-container","project-item_page");
    console.log("array-projects:" +arrayProjectItems);
    return arrayProjectItems;
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
/* harmony export */   "loadTodos": () => (/* binding */ loadTodos),
/* harmony export */   "todoItemsArrayAndListeners": () => (/* binding */ todoItemsArrayAndListeners),
/* harmony export */   "newTodoSubmition": () => (/* binding */ newTodoSubmition),
/* harmony export */   "newTodoPriority": () => (/* binding */ newTodoPriority)
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
let newTodoPriority = () =>{
    let priorityContainer = document.querySelector("#new-todo-priority-container");
    let priorityArr= Array.from(document.querySelectorAll(".todo-priority-btn"))
    priorityContainer.addEventListener("click", (e)=>{
        //removes previously clicked btns and sets clicked btn with correct classes
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("todo-priority_clicked");
                btn.classList.remove("todo-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("todo-priority-btn-"+btn.textContent.toLowerCase())
            }
            else {
                btn.classList.add("todo-priority_clicked");
                btn.classList.add("todo-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.remove("todo-priority-btn-"+btn.textContent.toLowerCase())

            }
        });
            
       
    })
}
let newTodoSubmition = (todos, newTodoSubmitBtn,newTodoTitle,newTodoDetails,newTodoDueDate ) => {
    // finding todo priority
    // let todoPriority = newTodoPriority(todoPriorityContainer);
    newTodoSubmitBtn.addEventListener("click", (e) => {
            
        let todoTitle = newTodoTitle.value;
        let todoDetails = newTodoDetails.value;
        let todoDate = newTodoDueDate.value;
        let todoPriority="";

        let priorityArr= Array.from(document.querySelectorAll(".todo-priority-btn"));
        priorityArr.forEach(btn=>{
            if(btn.classList.contains("todo-priority_clicked")){
                todoPriority=btn.textContent.toLowerCase();
            }
        })
        todos.push({_id: Date.now().toString(),category: "todo",title: todoTitle,details: todoDetails,dueDate: todoDate, priority: todoPriority});

        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.saveAndLoad)();
        (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.autoCloseNewItemPanel)();

    })
}

let todoItemsArrayAndListeners = (arrayTodoItems) => {
    arrayTodoItems = (0,_websiteInit__WEBPACK_IMPORTED_MODULE_0__.getDivChildrenByClass)("items-container","todo-item_page");
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
                console.log("unchecked");
            }
            else{
               checkmark.classList.add("todo-checkmark_checked");
               console.log("checked");

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
let loadTodos = (todos,itemsContainer) => {
    let todosToRender = todos;
    let todoItemAdded = [];
    todosToRender.forEach(({ _id, category, title, details, dueDate,priority }) => {
        todoItemAdded =`<div id="item-display_page" class="todo-item_page d-flex" data-catagory=${category} data-priority=${priority} >
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
      itemsContainer.innerHTML += todoItemAdded;

    })

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
/* harmony export */   "saveAndLoad": () => (/* binding */ saveAndLoad),
/* harmony export */   "autoCloseNewItemPanel": () => (/* binding */ autoCloseNewItemPanel)
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

// project selectors for new project
let newProjectSubmitBtn = document.querySelector(".create-new-project-submit");
let newProjectTitle = document.querySelector("#new-project-title");
let newProjectDetails = document.querySelector("#new-project-details");
let newProjectDueDate = document.querySelector("#new-project-date");
let projectPriorityContainer = document.querySelector("#new-project-priority-container")

// date selectors for new date
let newDateSubmitBtn = document.querySelector(".create-new-date-submit");
let newDateTitle = document.querySelector("#new-date-title");
let newDateDueDate = document.querySelector("#new-date");


let arrayTodoItems = [];
let arrayProjectItems = [];
let arrayDateItems = [];


let initEventListeners = () => {
    // add in items !!
    load();

    // for utilizing new submitions
    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.newTodoSubmition)(todos, newTodoSubmitBtn,newTodoTitle,newTodoDetails,newTodoDueDate);
    (0,_project__WEBPACK_IMPORTED_MODULE_3__.newProjectSubmition)(projects, newProjectSubmitBtn,newProjectTitle,newProjectDetails,newProjectDueDate);
    (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.newDateSubmition)(dates, newDateSubmitBtn,newDateTitle,newDateDueDate);

    // new item panel open and close
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

    // main content for the new item panel
    const container_panel = "new-item-main-content";
    const children_panel = 'item-panel';

    todoTabPanel.addEventListener("click", (e) => {
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

    // event listener for exiting note from note tab
    let noteExit = document.querySelector(".note-close_icon");
    noteExit.addEventListener("click", deleteItem, (e) =>{
    })
}
let autoCloseNewItemPanel = () => {
    let newItemPanel = document.querySelector(".overlay");
    newItemPanel.classList.add("display-none");
}

let load = () => {
    // clearing old data
    clearChildElements(itemsContainer);

    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.loadTodos)(todos,itemsContainer);
    (0,_project__WEBPACK_IMPORTED_MODULE_3__.loadProjects)(projects,itemsContainer);
    (0,_date_js__WEBPACK_IMPORTED_MODULE_4__.loadDates)(dates, itemsContainer);

    (0,_todo__WEBPACK_IMPORTED_MODULE_2__.todoItemsArrayAndListeners)(arrayTodoItems)
    ;(0,_project__WEBPACK_IMPORTED_MODULE_3__.projectItemsArrayAndListeners)(arrayProjectItems)
    ;(0,_date_js__WEBPACK_IMPORTED_MODULE_4__.dateItemsArrayAndListeners)(arrayDateItems);


}
let saveAndLoad = () =>{
    // saves
    // console.log(LOCAL_STORAGE_TODOS_KEY)
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos));
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(projects));
    localStorage.setItem(LOCAL_STORAGE_DATES_KEY, JSON.stringify(dates));



    // loading/ rendering
    load();
    
}

let deleteItem = (e) =>{
    let deleteBtn = e.target;
    let item = deleteBtn.parentElement.parentElement;
    let itemParent = item.parentElement;
// deleted item from DOM, not localstorage
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