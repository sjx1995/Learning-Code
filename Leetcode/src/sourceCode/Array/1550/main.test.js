/*
 * @Author: Sunly
 * @Date: 2020-10-12 12:07:46
 * @LastEditTime: 2020-10-12 12:10:55
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1550\main.test.js
 */
import { threeConsecutiveOdds } from "./main";

test("three consecutive odds 1", () => {
	expect(threeConsecutiveOdds([2, 6, 4, 1])).toBe(false);
});

test("three consecutive odds 2", () => {
	expect(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])).toBe(true);
});
