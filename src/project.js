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
export{displayProjectEditPanel}