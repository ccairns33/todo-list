let iconColorChange = ( tabsArr,activePanel ) => {
    let iconNodeList = document.querySelectorAll(".sidebar_icon");
    let iconArr = [];
    for (let i = 0; i< iconNodeList.length; i ++ ) {
        iconArr.push(iconNodeList[i]);
    }
    for (let i = 0; i< tabsArr.length; i++){
        if (tabsArr[i].classList.contains("display-none")){
            iconArr[i].classList.remove("blue");
            if (iconArr[i].classList.contains("pink")){
                continue;
            }
            else {
                iconArr[i].classList.add("pink");
            }
        }
        else {
            iconArr[i].classList.add("blue");

        }
    }
}

export {iconColorChange};