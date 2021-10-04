import {getDivChildrenByClass, deleteItem, saveAndLoad, autoCloseNewItemPanel} from "./websiteInit";

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
        
        if (e.target.tagName.toLowerCase() === "label") {
            //if target has not been clicked before...
            if (!e.target.classList.contains("todo-priority_clicked")){
                e.target.classList.add("todo-priority_clicked");
                e.target.classList.add("todo-priority-btn-"+e.target.textContent.toLowerCase()+"_clicked")
                e.target.classList.remove("todo-priority-btn-"+e.target.textContent.toLowerCase())

            }
            else {
                e.target.classList.remove("todo-priority_clicked");
                e.target.classList.remove("todo-priority-btn-"+e.target.textContent.toLowerCase()+"_clicked")
                e.target.classList.add("todo-priority-btn-"+e.target.textContent.toLowerCase())
            }
        }
        
        //removes previously clicked btns
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("todo-priority_clicked");
                btn.classList.remove("todo-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("todo-priority-btn-"+btn.textContent.toLowerCase())
            }
        });
            
       
    })
}
let newTodoSubmition = (todoPriorityContainer,todos, newTodoSubmitBtn,newTodoTitle,newTodoDetails,newTodoDueDate ) => {
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
                todoPriority=btn.value;
            }
        })
        todos.push({_id: Date.now().toString(),category: "todo",title: todoTitle,details: todoDetails,dueDate: todoDate, priority: todoPriority});

        saveAndLoad();
        autoCloseNewItemPanel();

    })
}

let todoItemsArrayAndListeners = (arrayTodoItems) => {
    arrayTodoItems = getDivChildrenByClass("items-container","todo-item_page");
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
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

        

    });
}
let loadTodos = (todos,itemsContainer,arrayTodoItems) => {
    let todosToRender = todos;
    let todoItemAdded = [];
    todosToRender.forEach(({ _id, category, title, details, dueDate }) => {
        todoItemAdded =`<div id="item-display_page" class="todo-item_page d-flex" data-catagory=${category} >
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

export{displayTodoEditPanel, loadTodos, todoItemsArrayAndListeners,newTodoSubmition, newTodoPriority}