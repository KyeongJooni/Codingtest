function solution(n) {
    let sum = 0;
    //n이 홀수인 경우
    if(n%2!=0){
        for(i=1;i<=n;i=i+2){
            sum = sum+i;
        }
    }
    else
        for(i=0;i<=n;i=i+2){
            let j=i*i;
            sum = sum+j;
        }
    return sum;
}