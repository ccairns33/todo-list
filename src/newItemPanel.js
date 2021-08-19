
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





export {loadNewItemPanel,closeNewItemPanel };