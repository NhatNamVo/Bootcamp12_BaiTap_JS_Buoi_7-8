// check array
var arrPossition = 0;
var arrLength = 0;
function checkArrayQty(){
    if(mainArray.length === 1){
        return; 
    }
    else if(mainArray.length === 0){
        getID('addItem').click();
    }
    else if(mainArray.length === 2){
        arrPossition = prompt("Xin hãy chọn mảng để thực hiện phép tính")-1;
    }
}
// sum positive number
getID('sumPositive').addEventListener('click',function(){
    checkArrayQty();
    var sum = 0;
    console.log(mainArray[arrPossition])
    for(var item of mainArray[arrPossition]){
        if(item>0){
            sum += parseFloat(item);
        }
    }
    getID('sumPosResult').innerHTML = sum;
});
// count positive number
getID('countPositive').addEventListener('click',function(){
    checkArrayQty();
    var countPosNum = mainArray[arrPossition].filter(function(item){
        return item>0;
    });
    getID('countPosResult').innerHTML = countPosNum.length;
});
//min number in array
getID('minNum').addEventListener('click',function(){
    checkArrayQty();
    var min = 0;
    for(var item of mainArray[arrPossition]){
        if(parseFloat(item)<min){
            min = item;
        }
    }
    getID('minResult').innerHTML = min;
});
// min positive number
getID('minNumber').addEventListener('click', function(){
    checkArrayQty();
    
    var countPosNum = mainArray[arrPossition].filter(function(item){
        return item>0;
    });
    var min = parseFloat(countPosNum[0]);
    for(var item in countPosNum){
        if(parseFloat(countPosNum[item]) < min){
            min = countPosNum[item];
        }
    }
    getID('minNumResult').innerHTML = min;
});
// last even number
getID('lastEven').addEventListener('click',function(){
    checkArrayQty();
    var evenNum = mainArray[arrPossition].filter(function(item){
        return item % 2 == 0;
    });
    if(evenNum.length==0){
        getID('lastEvenResult').innerHTML = -1;
    }
    else{
        getID('lastEvenResult').innerHTML = evenNum[evenNum.length-1];
    }
})
// change position in array
getID('changePos').addEventListener('click', function(){
    checkArrayQty();
    arrLength = mainArray[arrPossition].length;
    showPopPos(arrLength,arrPossition);
});
getID('ChangeArr').addEventListener('click',function(){
    var secondPos = parseInt(getID('secondPos').value);
    var firstPos = parseInt(getID('firstPos').value);
    let refVar;
    refVar = mainArray[arrPossition][firstPos-1];
    mainArray[arrPossition][firstPos-1] = mainArray[arrPossition][secondPos-1];
    mainArray[arrPossition][secondPos-1] = refVar;
    document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML = mainArray[arrPossition];
    strArr = document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML;
    strRes = strColor(strArr,firstPos-1);
    strRes = strColor(strRes,secondPos-1);
    document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML = strRes;
    getID('changePosResult').innerHTML = 'Success'
});
// average array up
getID('arangeArray').addEventListener('click',function(){
    checkArrayQty();
    var subArr = mainArray[arrPossition];
    var lengthArr = subArr.length;
    var refItem;
    for (var i =0; i<lengthArr; i++){
        for(var j = i + 1; j<lengthArr; j++){
            if(parseFloat(subArr[j])<parseFloat(subArr[i])){
                refItem = subArr[j];
                subArr[j] = subArr[i];
                subArr[i] = refItem;
            }
        }
    }
    document.getElementsByClassName('inputData__content')[0].children[arrPossition].children[1].innerHTML = subArr;
    getID('arangeArrResult').innerHTML = 'Success';
})
// find first frime-number
getID('primeNumber').addEventListener('click',function(){
    checkArrayQty();
    var primeNum = mainArray[arrPossition].find(function(item){
        if(item>1){
            for(var i = 2; i<item; i++){
                if(item % i === 0){
                    return false;
                }
            }
            if(i==item){
                return true;
            }
        }
    });
    if(!!primeNum){
        getID('primeNumResult').innerHTML = primeNum;
    }
    else{
        getID('primeNumResult').innerHTML = 'Không có';
    } 
})
// add new array and count integer number
getID('addArray').addEventListener('click', function(){
    checkButton = true;
    if(mainArray.length == 2){
        arrPossition = 1;
        var integerNum = mainArray[arrPossition].filter(function(item){
            return Number.isInteger(parseFloat(item));
        });
        getID('countIntResult').innerHTML = integerNum.length;
    }
    else if(mainArray.length == 1){
        if(!alert('Hãy tạo mảng mới')){
            getID('addItem').click();
        }
    }
});
// compare positive number  and negative number 
getID('compareNum').addEventListener('click',function(){
    checkArrayQty();
    var posNumber = mainArray[arrPossition].filter(function(item){
        return item > 0;
    });
    var negNumber = mainArray[arrPossition].filter(function(item){
        return item <= 0;
    });

    if(posNumber.length>negNumber.length){
        getID('compareNumResult').innerHTML = 'Số dương lớn hơn số âm'
    }
    else if(posNumber.length<negNumber.length){
        getID('compareNumResult').innerHTML = 'Số dương nhỏ hơn số âm' 
    }
    else{
        getID('compareNumResult').innerHTML = 'Số dương bằng hơn số âm'
    }

});