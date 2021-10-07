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
        if( todoTitle === "" || todoDetails === "" || todoDate === "" || todoPriority == ""){
            // all fields must be filled to submit.
            alert("Please fill out all fields.");
            return;
        }

        todos.push({_id: Date.now().toString(),category: "todo",title: todoTitle,details: todoDetails,dueDate: todoDate, priority: todoPriority});

        // clearing the text areas and button clicks
        document.querySelector("#new-todo-title").value="";
        document.querySelector("#new-todo-details").value="";
        document.querySelector("#new-todo-date").value="";

        priorityArr.forEach(btn =>{
            btn.classList.remove("todo-priority_clicked");
            btn.classList.remove("todo-priority-btn-"+btn.textContent.toLowerCase()+"_clicked");
            btn.classList.add("todo-priority-btn-"+btn.textContent.toLowerCase());
        })

        saveAndLoad();
        autoCloseNewItemPanel();

    })
}

let todoItemsArrayAndListeners = (arrayTodoItems, todos) => {
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
                editTodoItem(editBtn, e, todos)

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
        deleteBtn.addEventListener("click", (e) => {
            deleteTodoItem(deleteBtn, e, todos)

        })

        

    });
}
let clearTodoPanel = () =>{

}
let loadTodos = (todos,itemsContainer, clicked) => {
    let todosToRender = todos;
    let todoItemAdded = [];
    let display = "";
    if (clicked === "project" || clicked === "date" || clicked === "note"){
        display ="display-none";
    }
    else {
        display = "";
    }

    todosToRender.forEach(({ _id, category, title, details, dueDate,priority }) => {
        todoItemAdded =`<div id="item-display_page" class="todo-item_page d-flex ${display}" data-catagory=${category} data-priority=${priority} data-item-id=${_id} >
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
let editTodoPriority = () =>{
    let priorityContainer = document.querySelector(".edit-todo-priority");
    let priorityArr= Array.from(document.querySelectorAll(".te-priority-btn"))
    priorityContainer.addEventListener("click", (e)=>{
        
        //removes previously clicked btns and adds class to clicked btn
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("te-priority_clicked");
                btn.classList.remove("te-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("te-priority-btn-"+btn.textContent.toLowerCase())
            }
            else {
                btn.classList.add("te-priority_clicked");
                btn.classList.add("te-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.remove("te-priority-btn-"+btn.textContent.toLowerCase())

            }
        });
            
       
    })
}
let editTodoItem = (editBtn, e, todos) =>{
    let editTodoTitle_panel = document.querySelector(".edit-todo-title");
    let editTodoDetails_panel = document.querySelector(".edit-todo-details");
    let editTodoPriority_panel = document.querySelector(".edit-todo-priority");
    let editTodoDate_panel = document.querySelector("#edit-date_todo");

    editTodoPriority_panel.addEventListener("click", (e) =>{
        editTodoPriority();
    })
    let priorityArr= Array.from(document.querySelectorAll(".te-priority-btn"));
    
    //reset values
    editTodoTitle_panel.value = "";
    editTodoDetails_panel.value= "";
    editTodoDate_panel.value="";
    priorityArr.forEach(btn =>{
        btn.classList.remove("te-priority_clicked");
        btn.classList.remove("te-priority-btn-"+btn.textContent.toLowerCase()+"_clicked");
        btn.classList.add("te-priority-btn-"+btn.textContent.toLowerCase());
    })

    let todoEditSumbitBtn = document.querySelector(".todo-edit-submit");
    let todoToEdit = null;

    let todoItem = e.target.parentElement.parentElement;
    let todoPriority = todoItem.dataset.priority;
    let todoTitleElement = todoItem.querySelector(".todo-title");
    let todoDetailsElement = todoItem.querySelector(".todo-detail");
    let todoDateElement = todoItem.querySelector(".todo-date")

    let todoTitle = todoTitleElement.textContent.split('  ').join('');
    let todoDetail = todoDetailsElement.textContent.split("item details").join("").split("\n").join("").split("  ").join("");
    let todoDate = todoDateElement.textContent.split(' ').join('');
    
    //setting project edit starting panel values
    editTodoTitle_panel.value = todoTitle;
    editTodoDetails_panel.value = todoDetail;
    editTodoDate_panel.value=todoDate;
    priorityArr.forEach(btn =>{
        if (btn.textContent.toLowerCase() == todoPriority){
            btn.classList.add("te-priority_clicked");
            btn.classList.add("te-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
            btn.classList.remove("te-priority-btn-"+btn.textContent.toLowerCase())
        }
    })
   
    todoEditSumbitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //finding the corret date and changing the values on local storage
        todoToEdit = todos.find((todo) => todo._id === editBtn.dataset.editTodo);
        todoToEdit.title = editTodoTitle_panel.value;
        todoToEdit.details = editTodoDetails_panel.value;
        todoToEdit.dueDate = editTodoDate_panel.value;
        priorityArr= Array.from(document.querySelectorAll(".te-priority-btn"));
        priorityArr.forEach(btn =>{
            if (btn.classList.contains("te-priority_clicked")){
                todoToEdit.priority = btn.textContent.toLowerCase();

            }
        })


        todoEditAutoClose();
        saveAndLoad();
    });
}
let deleteTodoItem = (deleteBtn, e, todos) =>{
    let todoToDeleteIndex = todos.findIndex((todo) => todo._id === deleteBtn.dataset.deleteTodo);
    todos.splice(todoToDeleteIndex, 1);

    saveAndLoad();
}
let todoEditAutoClose = () =>{
    let todoEditPanel = document.querySelector(".todo-item-edit");
    todoEditPanel.classList.add("display-none");
}

export{displayTodoEditPanel, loadTodos,clearTodoPanel, todoItemsArrayAndListeners,newTodoSubmition, newTodoPriority}