function solution(num_list) {
    let sum = num_list.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    let multi = 1
    for(let i=0;i<num_list.length;i++){
        multi = multi*num_list[i];
    }
    if(sum**2>multi){
        return 1;
    }
    else return 0;
}