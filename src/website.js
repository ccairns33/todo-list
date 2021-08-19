import {loadNewItemPanel, closeNewItemPanel,hideInactiveTabs } from "./newItemPanel";

let initEventListeners = () => {
    const newTodoBtn = document.querySelector(".new-todo_btn");
    newTodoBtn.addEventListener("click", (e) => {
        loadNewItemPanel();
    })

    const closePanel = document.querySelector(".exit-new-item");
    closePanel.addEventListener("click", (e) => {
        closeNewItemPanel();
    })

    // new panel tabs
    const dateTab = document.querySelector(".new-item-date");
    const todoTab = document.querySelector(".new-item-todo");
    const projectTab = document.querySelector(".new-item-project");
    const noteTab = document.querySelector(".new-item-note");

    todoTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".todo-panel"),"new-item-main-content", 'item-panel');
    })
    projectTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".project-panel"),"new-item-main-content", 'item-panel');
    })
    dateTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".date-panel"),"new-item-main-content", 'item-panel');
    })
    noteTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".note-panel"),"new-item-main-content", 'item-panel');
    })

    // tabs for chagning main content from sidebar nav
    const todoSideTab = document.querySelector(".todo-list_tab");
    const projectsSideTab = document.querySelector(".projects_tab");
    const datesSideTab = document.querySelector(".dates_tab");
    const notesSideTab = document.querySelector(".notes_tab");

    todoSideTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".todo-item_page"),"items-container", 'item-display_page');
    })
    projectsSideTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".project-item_page"),"items-container", 'item-display_page');
    })
    datesSideTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".date-item_page"),"items-container", 'item-display_page');
    })
    notesSideTab.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".notes-container"),"items-container", 'item-display_page');
    })
}

let getDivChildren = (containerId, elementsId) =>{
    var div = document.getElementById(containerId),
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

export {initEventListeners, getDivChildren};