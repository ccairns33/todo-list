import {getDivChildrenByClass, deleteItem} from "./websiteInit";
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
let todoItemsArrayAndListeners = (arrayTodoItems) => {
    arrayTodoItems = getDivChildrenByClass("items-container","todo-item_page");
    console.log(getDivChildrenByClass("items-container","todo-item_page"))
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
export{displayTodoEditPanel, updateArrayTodoItems, loadTodos, todoItemsArrayAndListeners}