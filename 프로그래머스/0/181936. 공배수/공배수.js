function solution(number, n, m) {
    let answer1 = 0;
    let answer2 = 1;
    if(number%n===0&&number%m===0){
        return answer2;
    }
    else return answer1;
}