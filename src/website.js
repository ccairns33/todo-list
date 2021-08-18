import {loadNewItemPanel, closeNewItemPanel,displayTab } from "./newItemPanel";

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
        displayTab(document.querySelector(".todo-panel"));
    })
    projectTab.addEventListener("click", (e) => {
        displayTab(document.querySelector(".project-panel"));
    })
    dateTab.addEventListener("click", (e) => {
        displayTab(document.querySelector(".date-panel"));
    })
    noteTab.addEventListener("click", (e) => {
        displayTab(document.querySelector(".note-panel"));
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