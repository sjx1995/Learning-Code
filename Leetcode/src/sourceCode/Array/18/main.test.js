/*
 * @Author: Sunly
 * @Date: 2020-10-13 09:43:58
 * @LastEditTime: 2020-10-13 09:45:13
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\18\main.test.js
 */
import { fourSum } from "./main";

test("four sum", () => {
	expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
		[-1, 0, 0, 1],
		[-2, -1, 1, 2],
		[-2, 0, 0, 2],
	]);
});
