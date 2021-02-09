/*
 * @Author: Sunly
 * @Date: 2021-02-08 11:30:28
 * @LastEditTime: 2021-02-08 11:32:44
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\1423\main.test.js
 */
import { maxScore } from "./main";

test("max score 1", () => {
	expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12);
});

test("max score 2", () => {
	expect(maxScore([2, 2, 2], 2)).toBe(4);
});

test("max score 3", () => {
	expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55);
});

test("max score 4", () => {
	expect(maxScore([1, 1000, 1], 1)).toBe(1);
});

test("max score 5", () => {
	expect(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3)).toBe(202);
});
