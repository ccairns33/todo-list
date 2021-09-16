let iconColorChange = ( clickedTab ) => {
    let iconNodeList = document.querySelectorAll(".sidebar_icon");
    let iconArr = [];
    for (let i = 0; i< iconNodeList.length; i ++ ) {
        iconArr.push(iconNodeList[i]);
    }

    iconArr.forEach(element => {
        if (element.parentElement == clickedTab){
            element.classList.remove("blue");
            if (element.classList.contains("pink")){
                //do nothing, but it shouldn't have pink
            }
            else {
                    element.classList.add("pink");
            }
        }
        else {
            element.classList.add("blue");
        }
    });
}

export {iconColorChange};