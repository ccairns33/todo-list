import {loadNewItemPanel, closeNewItemPanel, panelClicked } from "./newItemPanel";
import {iconColorChange} from "./home";
import {displayTodoEditPanel} from "./todo";
import {displayProjectEditPanel} from "./project";
import {displayDateEditPanel} from "./date.js";


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
    const dateTabPanel = document.querySelector(".new-item-date");
    const todoTabPanel = document.querySelector(".new-item-todo");
    const projectTabPanel = document.querySelector(".new-item-project");
    const noteTabPanel = document.querySelector(".new-item-note");

    const conatiner_panel = "new-item-main-content";
    const children_panel = 'item-panel';

    //no color change for these. might add something else later.
    todoTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".todo-panel"),conatiner_panel, children_panel,todoTabPanel);
    })
    projectTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".project-panel"),conatiner_panel, children_panel,projectTabPanel);
    })
    dateTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".date-panel"),conatiner_panel, children_panel,dateTabPanel);
    })
    noteTabPanel.addEventListener("click", (e) => {
        hideInactiveTabs(document.querySelector(".note-panel"),conatiner_panel, children_panel,noteTabPanel);
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
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

    });

    // event listeners for the project items in project sidebar

    let arrayProjectItems = getDivChildrenByClass("items-container","project-item_page");
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
                displayProjectEditPanel(editBtn);
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

    let arrayDateItems = getDivChildrenByClass("items-container","date-item_page");
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
                displayDateEditPanel(editBtn);
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
    if (children === 'item-panel'){
        panelClicked(clickedTab);
    }
    else {
        iconColorChange(clickedTab);
    }
}

export {initEventListeners, getDivChildren, hideInactiveTabs};