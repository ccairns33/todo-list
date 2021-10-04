import {hideInactiveTabs} from "./websiteInit";
import {newTodoPriority} from "./todo";
import {newProjectPriority} from "./project";



let loadNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.remove("display-none");
    
    //adding priority event listener
    newTodoPriority();
    newProjectPriority();

    
}

let closeNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.add("display-none");

    // default to todo panel
    displayTab(document.querySelector(".todo-panel"),"new-item-main-content","item-panel");

}


// loading the different panels
let displayTab = (activePanel, container, children) =>{
    hideInactiveTabs(activePanel,container, children);
}
let panelClicked = (clickedTab) => {
    let panelNodeList = document.querySelectorAll(".sidetab_panel");
    let panelArr = [];
    for (let i = 0; i< panelNodeList.length; i ++ ) {
        panelArr.push(panelNodeList[i]);
    }
    panelArr.forEach(element => {
        if (element == clickedTab){
            element.classList.add("sidebar-clicked");
        }
        else {
            element.classList.remove("sidebar-clicked")
        }
    })
}


export {loadNewItemPanel,closeNewItemPanel,displayTab,panelClicked };