import {loadNewItemPanel, closeNewItemPanel, panelClicked } from "./newItemPanel";
import {iconColorChange} from "./home";
import {displayTodoEditPanel} from "./todo";
import {displayProjectEditPanel} from "./project";
import {displayDateEditPanel} from "./date.js";

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



let initEventListeners = () => {
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

    // event listener for exiting note from note tab
    let noteExit = document.querySelector(".note-close_icon");
    noteExit.addEventListener("click", deleteItem, (e) =>{

    })


    // add todo items !!

    // finding todo priority
    let todoPriority = ""
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
    newTodoSubmitBtn.addEventListener("click", (e) => {
            
        let todoTitle = newTodoTitle.value;
        let todoDetails = newTodoDetails.value;
        let todoDate = newTodoDueDate.value;
        console.log("hit");
        todos.push({_id: Date.now().toString(),categoryId: "todo",title: todoTitle,details: todoDetails,dueDate: todoDate});
        console.log(todos)
        saveAndLoad()

    })

}
let loadTodos = () => {
    let todosToRender = todos;
    todosToRender.forEach(({ _id, categoryId, title, details, dueDate }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="todo-item_page d-flex display-none">
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
}
let load = () => {
    // clearing old data
    clearChildElements(itemsContainer);

    loadTodos();


}
let saveAndLoad = () =>{
    // saves
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