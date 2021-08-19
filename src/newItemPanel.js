import {getDivChildren} from "./website";

let loadNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.remove("display-none");
}

let closeNewItemPanel = () =>{
    const itemPanel = document.querySelector(".overlay");
    itemPanel.classList.add("display-none");

    // default to todo panel
    displayTab(document.querySelector(".todo-panel"));

}

//display none for other tabs
let hideInactiveTabs = (activePanel, container, children) =>{
    let tabsArr = getDivChildren(container, children);
    tabsArr.forEach(element => {
        if(activePanel.classList[0] === element.classList[0]){
            activePanel.classList.remove("display-none");
        }
        else{
            element.classList.add("display-none");
        }
    });
}



export {loadNewItemPanel,closeNewItemPanel,hideInactiveTabs };