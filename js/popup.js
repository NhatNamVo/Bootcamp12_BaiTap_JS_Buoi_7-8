var arrMount = 0;
var checkButton = false;
getID('addItem').addEventListener('click',function(){
    var arrShowItem = document.getElementsByClassName('inputData__content')[0];
    arrMount = arrShowItem.children.length;
    if(arrMount<=1){
        getID('popID').classList.add('popAddArr-showed');
        setTimeout(() => {
            getID('popID').classList.add('popAddArr-popup');
        }, 200);
        var eleCopy = document.getElementsByClassName('inputData__button')[0].children[1];       
        arrShowItem.appendChild(eleCopy.cloneNode(true));
        arrShowItem.children[arrMount].children[0].innerHTML = arrMount+1;  
    }
    else{
        return;
    }
});

getID('close').addEventListener('click',function(){
    getID('popID').classList.remove('popAddArr-popup');
    setTimeout(() => {
        getID('popID').classList.remove('popAddArr-showed');
    }, 550);
    addArray();
    delsubArray();
    if(mainArray.length == 2 && checkButton == true){
        getID('addArray').click();
    }
});

var strArr;
function showPopPos(arrLength,arrPossition){
    strArr = document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML;
    arrPossition ++;
    getID('popPos').classList.add('popAddArr-showed');
    document.getElementsByClassName('positionArr')[0].children[0].innerHTML = "Mảng " + arrPossition + " có " + arrLength + " phần tử."
    setTimeout(() => {
        getID('popPos').classList.add('popAddArr-popup');
    }, 200);
}



getID('closepopPos').addEventListener('click',function(){
    document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML = mainArray[arrPossition];
    getID('popPos').classList.remove('popAddArr-popup');
    setTimeout(() => {
        getID('popPos').classList.remove('popAddArr-showed');
    }, 550);
});

