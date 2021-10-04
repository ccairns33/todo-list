let iconColorChange = ( clickedTab ) => {
    let iconNodeList = document.querySelectorAll(".sidebar_icon");
    let iconArr = [];
    for (let i = 0; i< iconNodeList.length; i ++ ) {
        iconArr.push(iconNodeList[i]);
    }

    iconArr.forEach(element => {
        if (element.parentElement == clickedTab){
            element.classList.remove("blue");
            element.classList.add("tab_clicked");
        }
        else {
            element.classList.add("blue");
            element.classList.remove("tab_clicked");

        }
    });
}

export {iconColorChange};