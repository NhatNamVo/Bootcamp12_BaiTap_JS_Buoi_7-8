//check valid input data
var isValue = false;
getID('inData').addEventListener('focus',function(){
    isValue = true;
    getID('inData').addEventListener('change',function(){
        if(getID('inData').value==""){
            document.getElementsByClassName('isVal')[0].innerHTML='Hãy nhập số vào ô nhập';
        }
        else if(isNaN(getID('inData').value)){
            document.getElementsByClassName('isVal')[0].innerHTML='Hãy nhập ký tự số';
        }
        else{
            document.getElementsByClassName('isVal')[0].innerHTML='';
            isValue = false;
        }
    });
    if(isValue==true){
        if(getID('inData').value==""){
            document.getElementsByClassName('isVal')[0].innerHTML='Hãy nhập số vào ô nhập';
        }
    };
});
// creat array
var mainArray = [];
var subArr = [];
var subCount = 0;
getID('addArr').addEventListener('click',function(){
    
    if(isValue||getID('inData').value==""||isNaN(getID('inData').value)){
        return;
    }
    subArr.push(getID('inData').value);
    document.getElementsByClassName('inputData__content')[0].children[arrMount].children[1].innerHTML = subArr;
});

function addArray(){
    // console.log(subArr);
    mainArray.push(subArr);
    // console.log(mainArray);
}

function delsubArray(){
    subArr = [];
    // subCount++;
}