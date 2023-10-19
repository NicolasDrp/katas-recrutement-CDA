function isEven (number){
    if (number == 0 || number-2 == 0) {
        return true;
    }else if(number ==1 || number-2 == 1){
        return false;
    }else{
        return isEven(number-2);
    }
}

console.log(isEven(20));