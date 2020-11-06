/*
 * @Author: Sunly
 * @Date: 2020-11-03 16:26:48
 * @LastEditTime: 2020-11-03 16:40:30
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1535\main.test.js
 */
import { getWinner } from "./main";

test("get winner 1", () => {
	expect(getWinner([2, 1, 3, 5, 4, 6, 7], 2)).toBe(5);
});

test("get winner 2", () => {
	expect(getWinner([3, 2, 1], 10)).toBe(3);
});

test("get winner 3", () => {
	expect(getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7)).toBe(9);
});

test("get winner 4", () => {
	expect(getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000)).toBe(99);
});

test("get winner 5", () => {
	expect(getWinner([1, 25, 35, 42, 68, 70], 1)).toBe(25);
});
