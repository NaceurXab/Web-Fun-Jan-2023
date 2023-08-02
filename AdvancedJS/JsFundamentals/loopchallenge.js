//print odds
function odd(){
    for (var i = 1 ; i <= 20 ; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}
odd();
//Decreasing Multiples of 3
function div3(){
    for (var i = 1 ; i <= 100 ; i++){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}
div3()
//Print the sequence
function seq(){
    for(var i = 4; i > -4; i-=1.5) {
        console.log(i);
    }
    
}
seq()
//Sigma
function sig(){
    var sum = 0 ;
    for (var i = 1 ; i <= 100 ; i++){
        sum+=i
    }
    return sum
}
console.log(sig())
//factorial
function fact(){
    var res = 1 ;
    for (var i = 2 ; i <= 12 ; i++){
        res*=i
    }
    return res
}
console.log(fact())
