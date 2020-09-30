/*
 * @Author: Sunly
 * @Date: 2020-09-29 10:32:54
 * @LastEditTime: 2020-09-29 11:07:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\121\main.test.js
 */
import { maxProfit } from "./main";

test("Example 1 of MaxProfit", () => {
	expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("Example 1 of MaxProfit", () => {
	expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
