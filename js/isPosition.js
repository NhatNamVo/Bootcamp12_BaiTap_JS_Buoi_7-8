
getID('firstPos').oninput = isPosition;
getID('secondPos').oninput = isPosition;

console.log(strArr);
function isPosition(inputed){
    var secondPos = parseInt(getID('secondPos').value);
    var firstPos = parseInt(getID('firstPos').value);
    var strRes;
    if (firstPos>arrLength || firstPos<=0){
        document.getElementsByClassName('isPos')[0].innerHTML = "Hãy nhập số vị trí nằm trong mảng";
    }
    else if(!!firstPos){
        document.getElementsByClassName('isPos')[0].innerHTML = "";
        firstPos--;
        strRes = strColor(strArr,firstPos);
        document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML = strRes;
    };
    if (secondPos>arrLength || secondPos<=0){
        document.getElementsByClassName('isPos')[1].innerHTML = "Hãy nhập số vị trí nằm trong mảng";
    }
    else if(!!secondPos){
        document.getElementsByClassName('isPos')[1].innerHTML = "";
        secondPos--;
        strRes = strColor(strRes,secondPos);
        document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML = strRes;
    };
}

function strColor(strChar,numberPos){
    return strChar.replace(mainArray[arrPossition][numberPos],`<span class="strColor">${mainArray[arrPossition][numberPos]}</span>`);
}