function solution(my_string, n) {
    let answer = '';
    for (const char of my_string) {
        answer += char.repeat(n);
    }
    return answer;
}