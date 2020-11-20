/*
 * @Author: Sunly
 * @Date: 2020-11-11 15:08:28
 * @LastEditTime: 2020-11-11 15:09:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\53\main.test.js
 */
import { maxSubArray } from "./main";

test("max sub array 1", () => {
	expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
