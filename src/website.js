import {loadNewItemPanel, closeNewItemPanel } from "./newItemPanel";

let initEventListeners = () => {
    const newTodoBtn = document.querySelector(".new-todo_btn");
    newTodoBtn.addEventListener("click", (e) => {
        loadNewItemPanel();
    })

    const closePanel = document.querySelector(".exit-new-item");
    closePanel.addEventListener("click", (e) => {
        closeNewItemPanel();
    })
}

export {initEventListeners};