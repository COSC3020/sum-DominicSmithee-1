function sum(a) {
    if(a == undefined || a.length < 1){
        return 0;
    }
    var sum = a[0];
    for(var i = 1; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
//lista = [];
//console.log(sum(lista));

//listb = [1,2,3];
//console.log(sum(listb));
