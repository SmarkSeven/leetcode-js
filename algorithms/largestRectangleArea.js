/**
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.


Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].


The largest rectangle is shown in the shaded area, which has area = 10 unit.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
**/

/**
 * @param {number[]} heights
 * @return {number}
 */

const largestRectangleArea = function(heights) {
    let n = heights.length, res = 0, stack = []
    for (let i = 0; i <= n; i++) {
        let h = heights[i] || 0
        while (stack.length && h < heights[stack[stack.length - 1]]) {
            let index = stack.pop()
            let len = !stack.length ? i : i - stack[stack.length - 1] -1
            res = Math.max(res, len * heights[index])
        }
        stack.push(i)
    }
    res
}

