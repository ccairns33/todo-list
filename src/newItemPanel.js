import {hideInactiveTabs} from "./website";

let loadNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.remove("display-none");
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


export {loadNewItemPanel,closeNewItemPanel,displayTab };