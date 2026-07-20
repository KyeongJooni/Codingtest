function solution(a, d, included) {
    let sum = 0;
    let ace = 0;
    for(let i=0;i<included.length;i++){
        if(included[i]===true){
            ace = a+i*d;
            sum = sum+ace
        }
        else {
        }
    }
    return sum;
}