/*
 * @Author: Sunly
 * @Date: 2020-12-04 15:58:56
 * @LastEditTime: 2020-12-04 16:19:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\209\main.test.js
 */
import { minSubArrayLen } from "./main";

// test("min sub array length 1", () => {
// 	expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
// });

test("min sub array length 2", () => {
	expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toBe(3);
});
