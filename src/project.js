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
        
        //removes previously clicked btns and adds class to clicked btn
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("project-priority_clicked");
                btn.classList.remove("project-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("project-priority-btn-"+btn.textContent.toLowerCase())
            }
            else {
                btn.classList.add("project-priority_clicked");
                btn.classList.add("project-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.remove("project-priority-btn-"+btn.textContent.toLowerCase())

            }
        });
            
       
    })
}
let editProjectPriority = () =>{
    let priorityContainer = document.querySelector(".edit-project-priority");
    let priorityArr= Array.from(document.querySelectorAll(".pe-priority-btn"))
    priorityContainer.addEventListener("click", (e)=>{
        
        //removes previously clicked btns and adds class to clicked btn
        priorityArr.forEach(btn =>{
            if(btn.id !== e.target.id){
                btn.classList.remove("pe-priority_clicked");
                btn.classList.remove("pe-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.add("pe-priority-btn-"+btn.textContent.toLowerCase())
            }
            else {
                btn.classList.add("pe-priority_clicked");
                btn.classList.add("pe-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
                btn.classList.remove("pe-priority-btn-"+btn.textContent.toLowerCase())

            }
        });
            
       
    })
}
let clearProjectPanel = () =>{

}
let newProjectSubmition = (projects, newProjectSubmitBtn,newProjectTitle,newProjectDetails,newProjectDueDate) => {
    newProjectSubmitBtn.addEventListener("click", (e) => {
            
        let projTitle = newProjectTitle.value;
        let projDetails = newProjectDetails.value;
        let projDate = newProjectDueDate.value;
        let projPriority="";

        let priorityArr= Array.from(document.querySelectorAll(".project-priority-btn"));
        priorityArr.forEach(btn=>{
            if(btn.classList.contains("project-priority_clicked")){
                projPriority=btn.textContent.toLowerCase();
            }
        })
        if( projTitle === "" || projDetails === "" || projDate === "" || projPriority === ""){
            // all fields must be filled to submit.
            alert("Please fill out all fields.");
            return;
        }
        projects.push({_id: Date.now().toString(),category: "project",title: projTitle,details: projDetails,dueDate: projDate , priority: projPriority});
        
        // clearing the text areas and button clicks
        document.querySelector("#new-project-title").value="";
        document.querySelector("#new-project-details").value="";
        document.querySelector("#new-project-date").value="";

        priorityArr.forEach(btn =>{
            btn.classList.remove("project-priority_clicked");
            btn.classList.remove("project-priority-btn-"+btn.textContent.toLowerCase()+"_clicked");
            btn.classList.add("project-priority-btn-"+btn.textContent.toLowerCase());
        })
        
        saveAndLoad();
        autoCloseNewItemPanel();

    })
    
}

    // event listeners for the project items in project sidebar
let projectItemsArrayAndListeners = (arrayProjectItems, projects) => {
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
                editProjectItem(editBtn, e, projects)
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
        deleteBtn.addEventListener("click", (e) => {
            deleteProjectItem(deleteBtn, e, projects)
        })

    });
}

let loadProjects = (projects,itemsContainer, clicked) => {
    let projectsToRender = projects;
    let projectItemsAdded = []
    let display = "";
    if (clicked === "todo" || clicked === "date" || clicked === "note"){
       display ="display-none";
    }
    else {
        display = "";
    }
    projectsToRender.forEach(({ _id, category, title, details, dueDate,priority }) => {
        projectItemsAdded = `<div id="item-display_page" class="project-item_page d-flex ${display}" data-catagory=${category} data-priority= ${priority} data-item-id=${_id}>
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
       
      itemsContainer.innerHTML += projectItemsAdded;
    })
   
}
let editProjectItem = (editBtn, e, projects) =>{
    let editProjectTitle_panel = document.querySelector(".edit-project-title");
    let editProjectDetails_panel = document.querySelector(".edit-project-details");
    let editProjectPriority_panel = document.querySelector(".edit-project-priority");
    let editProjectDate_panel = document.querySelector("#edit-date_project");

    editProjectPriority_panel.addEventListener("click", (e) =>{
        editProjectPriority();
    })
    let priorityArr= Array.from(document.querySelectorAll(".pe-priority-btn"));
    
    //reset values
    editProjectTitle_panel.value = "";
    editProjectDetails_panel.value= "";
    editProjectDate_panel.value="";
    priorityArr.forEach(btn =>{
        btn.classList.remove("pe-priority_clicked");
        btn.classList.remove("pe-priority-btn-"+btn.textContent.toLowerCase()+"_clicked");
        btn.classList.add("pe-priority-btn-"+btn.textContent.toLowerCase());
    })

    let projectEditSumbitBtn = document.querySelector(".project-edit-submit");
    let projectToEdit = null;

    let projectItem = e.target.parentElement.parentElement;
    let projectPriority = projectItem.dataset.priority;
    let projectTitleElement = projectItem.querySelector(".project-title");
    let projectDetailsElement = projectItem.querySelector(".project-detail");
    let projectDateElement = projectItem.querySelector(".project-date")

    let projectTitle = projectTitleElement.textContent.split('  ').join('');
    let projectDetail = projectDetailsElement.textContent.split("project details").join("").split("\n").join("").split("  ").join("");
    let projectDate = projectDateElement.textContent.split(' ').join('');
    
    //setting project edit starting panel values
    editProjectTitle_panel.value = projectTitle;
    editProjectDetails_panel.value = projectDetail;
    editProjectDate_panel.value=projectDate;
    priorityArr.forEach(btn =>{
        if (btn.textContent.toLowerCase() == projectPriority){
            btn.classList.add("pe-priority_clicked");
            btn.classList.add("pe-priority-btn-"+btn.textContent.toLowerCase()+"_clicked")
            btn.classList.remove("pe-priority-btn-"+btn.textContent.toLowerCase())
        }
    })
   
    projectEditSumbitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //finding the corret date and changing the values on local storage
        projectToEdit = projects.find((project) => project._id === editBtn.dataset.editProject);
        projectToEdit.title = editProjectTitle_panel.value;
        projectToEdit.details = editProjectDetails_panel.value;
        projectToEdit.dueDate = editProjectDate_panel.value;
        priorityArr= Array.from(document.querySelectorAll(".pe-priority-btn"));
        priorityArr.forEach(btn =>{
            if (btn.classList.contains("pe-priority_clicked")){
                projectToEdit.priority = btn.textContent.toLowerCase();

            }
        })


        projectEditAutoClose();
        saveAndLoad();
    });
}
let deleteProjectItem = (deleteBtn, e, projects) =>{
    let projectToDeleteIndex = projects.findIndex((project) => project._id === deleteBtn.dataset.deleteProject);
    projects.splice(projectToDeleteIndex, 1);

    saveAndLoad();
}
let projectEditAutoClose = () =>{
    let projectEditPanel = document.querySelector(".project-item-edit");
    projectEditPanel.classList.add("display-none");
}


export{displayProjectEditPanel,newProjectPriority, projectItemsArrayAndListeners, clearProjectPanel, loadProjects,newProjectSubmition}