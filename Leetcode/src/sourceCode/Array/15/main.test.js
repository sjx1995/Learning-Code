/*
 * @Author: Sunly
 * @Date: 2020-10-09 12:29:03
 * @LastEditTime: 2020-10-10 10:42:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\15\main.test.js
 */
import { threeSum } from "./main";

test("three sum", () => {
	expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
		[-1, 0, 1],
		[-1, -1, 2],
	]);
});

test("three sum", () => {
	expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});
