let iconColorChange = ( tabsArr ) => {
    let iconNodeList = document.querySelectorAll("i");
    let iconArr = [];
    for (let i = 0; i< 4; i ++ ) {
        //first four icons are the sidebar icons
        iconArr.push(iconNodeList[i]);
    }
    for (let i = 0; i< tabsArr.length; i++){
        //the icon format corresponds with the tabArr order, so can simply go by index
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