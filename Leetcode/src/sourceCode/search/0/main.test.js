/*
 * @Author: Sunly
 * @Date: 2020-11-03 17:48:52
 * @LastEditTime: 2020-11-03 18:15:39
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\二分查找\000\main.test.js
 */
import { binarySearch } from "./main";

test("binary search 1", () => {
	expect(binarySearch([0, 1, 3, 5, 9, 12, 16, 25, 49, 56, 76, 86], 56)).toBe(9);
});

test("binary search 2", () => {
	expect(binarySearch([0, 1, 3, 5, 9, 12, 16, 25, 49, 56, 76, 86], 13)).toBe(-1);
});

test("binary search 3", () => {
	expect(binarySearch([16, 25, 36, 38, 39, 41, 42, 56, 100, 192, 199, 205], 300)).toBe(-1);
});

test("binary search 4", () => {
	expect(binarySearch([16, 25, 36, 38, 39, 41, 42, 56, 100, 192, 199, 205], 100)).toBe(8);
});

test("binary search 5", () => {
	expect(binarySearch([0, 1, 2, 3, 4], 3)).toBe(3);
});
