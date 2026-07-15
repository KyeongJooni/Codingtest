function solution(my_string, overwrite_string, s) {
    const front = my_string.slice(0, s);
    const back = my_string.slice(s + overwrite_string.length);
    let answer = front + overwrite_string + back;
    return answer;
}