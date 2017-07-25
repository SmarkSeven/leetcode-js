/**
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ['A','A','A','B','B','B'], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
Note:
The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].
**/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function(tasks, n) {
    let arr = new Array(26).fill(0), i = 0
    for (let char of tasks) {
        arr[char.codePointAt() - 65]++
    }
    arr.sort((a,b) => b - a)
    while (i <= 25 && arr[i] === arr[0]) i++
    return Math.max(tasks.length, (arr[0] - 1) * (n + 1) + i);
}

      
