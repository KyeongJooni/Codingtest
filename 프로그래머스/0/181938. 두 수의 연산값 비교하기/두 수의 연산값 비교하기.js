function solution(a, b) {
    const answer1 = Number(String(a)+String(b));
    const answer2 = 2*a*b;
    if(answer1>answer2){
        return answer1;
    }
    else return answer2;
}