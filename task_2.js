function numPrime(){
    let num = prompt();
    
    if(typeof +num === `number` && +num > 1 && +num < 1000){
        for(let i = 2; i < +num; i++){
            if(+num % i === 0){
                return "число составное";
            } else{
                return "число простое";
            }
        }
    } else{
        return "данные неверны";
    }
}
console.log(numPrime());