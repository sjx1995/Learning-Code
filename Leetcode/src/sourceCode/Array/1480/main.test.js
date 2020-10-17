/*
 * @Author: Sunly
 * @Date: 2020-09-30 18:43:23
 * @LastEditTime: 2020-09-30 18:44:46
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\1480\main.test.js
 */
import { runningSum } from "./main";

test("running sum 1", () => {
	expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
});

test("running sum 2", () => {
	expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("running sum 3", () => {
	expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
});
