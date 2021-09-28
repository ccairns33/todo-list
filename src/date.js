import {getDivChildrenByClass, deleteItem, saveAndLoad} from "./websiteInit";

let displayDateEditPanel = (editBtn) => {
    if (editBtn.classList.contains("date-edit_clicked")){
        let dateEditPanel = document.querySelector(".date-item-edit")
        if (dateEditPanel.classList.contains("display-none")){
            dateEditPanel.classList.remove("display-none");
        }
        else{
            return;
        }
    }
    else{
        return;
    }
}

let dateItemsArrayAndListeners = (arrayDateItems) => {
    arrayDateItems = getDivChildrenByClass("items-container","date-item_page");
    console.log(arrayDateItems);
    arrayDateItems.forEach(element => {
        let editBtn = element.querySelector(".date-edit");
        let deleteBtn = element.querySelector(".date-delete");
        
        editBtn.addEventListener("click", (e) => {
            if (editBtn.classList.contains("date-edit_clicked")){
                return;
            }
            else{
                editBtn.classList.add("date-edit_clicked");
                displayDateEditPanel(editBtn);
            }
        })

        // event listener for clicking close on date edit panel
        let dateEditClose = document.querySelector(".exit-date-edit");
        dateEditClose.addEventListener("click", (e) => {
            editBtn.classList.remove("date-edit_clicked");
            let todoEditPanel = document.querySelector(".date-item-edit")
            if(!todoEditPanel.classList.contains("display-none")){
                todoEditPanel.classList.add("display-none");
            }
        })

        // deleting the item on clicking on the trash bin
        deleteBtn.addEventListener("click", deleteItem , (e) => {
        })

    });
}
export{displayDateEditPanel, dateItemsArrayAndListeners}