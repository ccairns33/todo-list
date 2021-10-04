import {getDivChildrenByClass, deleteItem, saveAndLoad, autoCloseNewItemPanel} from "./websiteInit";

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
let newDateSubmition = (dates, newDateSubmitBtn,newDateTitle,newDateDueDate) => {
    newDateSubmitBtn.addEventListener("click", (e) => {
            
        let dateTitle = newDateTitle.value;
        let date = newDateDueDate.value;

        dates.push({_id: Date.now().toString(),category: "date",title: dateTitle,dueDate: date });
        saveAndLoad();
        autoCloseNewItemPanel();

    })
    
}
let loadDates = (dates, itemsContainer)=>{
    let datesToRender = dates;
    datesToRender.forEach(({ _id, category, title, dueDate }) => {
        itemsContainer.innerHTML += `<div id="item-display_page" class="date-item_page d-flex  display-none" data-category=${category}>
        <div class="date-title_page"> ${title} </div>
        <div class="date-item-date">${dueDate} </div>
        <div class="date-edit date-icon" data-edit-date=${_id}>
          <i class="far fa-edit"></i>
        </div>
        <div class="date-delete date-icon" data-delete-date=${_id}>
          <i class="far fa-trash-alt"></i>
        </div>
      </div>`
    });

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
export{displayDateEditPanel, dateItemsArrayAndListeners, newDateSubmition, loadDates}