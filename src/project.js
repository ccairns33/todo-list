import {getDivChildrenByClass, deleteItem, saveAndLoad, autoCloseNewItemPanel} from "./websiteInit";

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
let newProjectPriority = () =>{
    let priorityContainer = document.querySelector("#new-project-priority-container");
    let priorityArr= Array.from(document.querySelectorAll(".project-priority-btn"))
    priorityContainer.addEventListener("click", (e)=>{
        
        if (e.target.tagName.toLowerCase() === "label") {
            //if target has not been clicked before...
            if (!e.target.classList.contains("project-priority_clicked")){
                e.target.classList.add("project-priority_clicked");
                e.target.classList.add("project-priority-btn-"+e.target.textContent.toLowerCase()+"_clicked")
                e.target.classList.remove("project-priority-btn-"+e.target.textContent.toLowerCase())

            }
            else {
                e.target.classList.remove("project-priority_clicked");
                e.target.classList.remove("project-priority-btn-"+e.target.textContent.toLowerCase()+"_clicked")
                e.target.classList.add("project-priority-btn-"+e.target.textContent.toLowerCase())
            }
        }
        
        //removes previously clicked btns
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("project-priority_clicked");
                btn.classList.remove("project-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("project-priority-btn-"+btn.textContent.toLowerCase())
            }
        });
            
       
    })
}
let newProjectSubmition = (projectPriorityContainer,projects, newProjectSubmitBtn,newProjectTitle,newProjectDetails,newProjectDueDate) => {
    newProjectSubmitBtn.addEventListener("click", (e) => {
            
        let projTitle = newProjectTitle.value;
        let projDetails = newProjectDetails.value;
        let projDate = newProjectDueDate.value;
        projects.push({_id: Date.now().toString(),category: "project",title: projTitle,details: projDetails,dueDate: projDate});
        saveAndLoad();
        autoCloseNewItemPanel();

    })
    
}

    // event listeners for the project items in project sidebar
let projectItemsArrayAndListeners = (arrayProjectItems) => {
    arrayProjectItems = getDivChildrenByClass("items-container","project-item_page");
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
        let projectEditClose = document.querySelector(".exit-project-edit");
        projectEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("project-edit_clicked");
            let projectEditPanel = document.querySelector(".project-item-edit")
            if(!projectEditPanel.classList.contains("display-none")){
                projectEditPanel.classList.add("display-none");
            }
        })

        // deleting the todo items on click
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

    });
}

let loadProjects = (projects,itemsContainer,arrayProjectItems) => {
    let projectsToRender = projects;
    projectsToRender.forEach(({ _id, category, title, details, dueDate }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="project-item_page d-flex" data-catagory=${category}>
        <div class="project-checkmark"></div>
        <div class="project-title"> ${title}</div>
        <div class="project-detail">project details
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

}
let updateArrayProjectItems = (arrayProjectItems) => {
    arrayProjectItems = getDivChildrenByClass("items-container","project-item_page");
    console.log("array-projects:" +arrayProjectItems);
    return arrayProjectItems;
}

export{displayProjectEditPanel,newProjectPriority, projectItemsArrayAndListeners, updateArrayProjectItems, loadProjects,newProjectSubmition}