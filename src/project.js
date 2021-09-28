import {getDivChildrenByClass, deleteItem, saveAndLoad} from "./websiteInit";

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
let newProjectPriority = (projectPriorityContainer) =>{
    let projectPriority = "";
    projectPriorityContainer.addEventListener("click", (e) =>  {
        if (e.target.tagName.toLowerCase() === "label"){
            if (e.target.classList.contains("priority-btn-low")){
                projectPriority = "low";
            }
            else if (e.target.classList.contains("priority-btn-medium")){
                projectPriority = "medium";
            }
            else {
                projectPriority = "high";
            }
        }
    })
    return projectPriority;
}
let newProjectSubmition = (projectPriorityContainer,projects, newProjectSubmitBtn,newProjectTitle,newProjectDetails,newProjectDueDate) => {
    // finding todo priority
    let projectPriority = newProjectPriority(projectPriorityContainer);
    newProjectSubmitBtn.addEventListener("click", (e) => {
            
        let projTitle = newProjectTitle.value;
        let projDetails = newProjectDetails.value;
        let projDate = newProjectDueDate.value;
        projects.push({_id: Date.now().toString(),categoryId: "project",title: projTitle,details: projDetails,dueDate: projDate, priority:projectPriority});
        saveAndLoad()

    })
}
    // event listeners for the project items in project sidebar
let projectItemsArrayAndListeners = (arrayProjectItems) => {
    arrayProjectItems = getDivChildrenByClass("items-container","project-item_page");
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
}

let loadProjects = (projects,itemsContainer,arrayProjectItems) => {
    let projectsToRender = projects;
    projectsToRender.forEach(({ _id, category, title, details, dueDate, priority }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="project-item_page d-flex" data-catagory=${category} data-priority=${priority}>
        <div class="project-checkmark"></div>
        <div class="project-title"> ${title}</div>
        <div class="project-detail">item details
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
    updateArrayProjectItems(arrayProjectItems);
}
let updateArrayProjectItems = (arrayProjectItems) => {
    arrayProjectItems = Array.from(document.querySelectorAll(".project-item_page"));
    console.log(arrayProjectItems);
}

export{displayProjectEditPanel, projectItemsArrayAndListeners, updateArrayProjectItems, loadProjects,newProjectSubmition}