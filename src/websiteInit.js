import {loadNewItemPanel, closeNewItemPanel } from "./newItemPanel";
import {iconColorChange} from "./home";

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
        hideInactiveTabs(document.querySelector(".todo-item_page"),"items-container", 'item-display_page' );
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
                editBtn.classList.add("todo-edit_clicked")
            }
        })

    });

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
let hideInactiveTabs = (activePanel, container, children) =>{
    let tabsArr = getDivChildren(container, children);
    tabsArr.forEach(element => {
        if(activePanel.classList[0] === element.classList[0]){
            activePanel.classList.remove("display-none");
        }
        else{
            element.classList.add("display-none");
        }
    });
    iconColorChange(tabsArr);
}

export {initEventListeners, getDivChildren, hideInactiveTabs};