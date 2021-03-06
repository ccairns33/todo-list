import {loadNewItemPanel, closeNewItemPanel, panelClicked } from "./newItemPanel";
import {iconColorChange} from "./home";
import {loadTodos, todoItemsArrayAndListeners, newTodoSubmition} from "./todo";
import { projectItemsArrayAndListeners, loadProjects, newProjectSubmition} from "./project";
import {dateItemsArrayAndListeners, newDateSubmition, loadDates} from "./date.js";

// Selector for todos container
const itemsContainer = document.querySelector('[data-container]');

// Local storage keys
const LOCAL_STORAGE_TODOS_KEY = 'LOCAL_STORAGE_TODOS_KEY';
const LOCAL_STORAGE_PROJECTS_KEY = 'LOCAL_STORAGE_PROJECTS_KEY';
const LOCAL_STORAGE_DATES_KEY = 'LOCAL_STORAGE_DATES_KEY';
const LOCAL_STORAGE_NOTES_KEY = 'LOCAL_STORAGE_NOTES_KEY';


const LOCAL_STORAGE_SELECTED_CATEGORY_ID_KEY = 'LOCAL_STORAGE_SELECTED_CATEGORY_ID_KEY';

let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY)) || [];
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let dates = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATES_KEY)) || [];
let notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NOTES_KEY)) || [];

// todo selectors for new todo
let newTodoSubmitBtn = document.querySelector(".create-new-todo-submit");
let newTodoTitle = document.querySelector("#new-todo-title");
let newTodoDetails = document.querySelector("#new-todo-details");
let newTodoDueDate = document.querySelector("#new-todo-date");

// project selectors for new project
let newProjectSubmitBtn = document.querySelector(".create-new-project-submit");
let newProjectTitle = document.querySelector("#new-project-title");
let newProjectDetails = document.querySelector("#new-project-details");
let newProjectDueDate = document.querySelector("#new-project-date");

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
    newTodoSubmition(todos, newTodoSubmitBtn,newTodoTitle,newTodoDetails,newTodoDueDate);
    newProjectSubmition(projects, newProjectSubmitBtn,newProjectTitle,newProjectDetails,newProjectDueDate);
    newDateSubmition(dates, newDateSubmitBtn,newDateTitle,newDateDueDate);

    // new item panel open and close
    const newItemBtn = document.querySelector(".new-todo_btn");
    newItemBtn.addEventListener("click", (e) => {
        loadNewItemPanel();
       
    })
    const closePanel = document.querySelector(".exit-new-item");
    closePanel.addEventListener("click", (e) => {
        closeNewItemPanel();
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
    let clicked = "";

    let tab= document.querySelector(".tab_clicked")
    if (tab === null){
        clicked = "none"
        loadTodos(todos,itemsContainer, clicked);
        loadProjects(projects,itemsContainer, clicked);
        loadDates(dates, itemsContainer, clicked);
    }
    else if (tab.id === "todo_icon" ){
        clicked = "todo";
        loadTodos(todos,itemsContainer, clicked);
        loadProjects(projects,itemsContainer, clicked);
        loadDates(dates, itemsContainer, clicked);

    }
    else if (tab.id === "project_icon"){
        clicked = "project";
        loadProjects(projects,itemsContainer, clicked);
        loadTodos(todos,itemsContainer, clicked);
        loadDates(dates, itemsContainer, clicked);

    }
    else if (tab.id === "date_icon"){
        clicked = "date";
        loadTodos(todos,itemsContainer, clicked);
        loadProjects(projects,itemsContainer, clicked);
        loadDates(dates, itemsContainer, clicked);
    }
    else{
        // can do note at a later time! very redundant work at this point.
        clicked = "note";
        // loadTodos(todos,itemsContainer, clicked);
        // loadProjects(projects,itemsContainer, clicked);
        // loadDates(dates, itemsContainer, clicked);
    }
    
    

    todoItemsArrayAndListeners(arrayTodoItems, todos)
    projectItemsArrayAndListeners(arrayProjectItems, projects)
    dateItemsArrayAndListeners(arrayDateItems, dates);


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
        panelClicked(clickedTab);
    }
    else {
        iconColorChange(clickedTab);
    }
}

export {initEventListeners, getDivChildren, hideInactiveTabs, getDivChildrenByClass, saveAndLoad, autoCloseNewItemPanel};