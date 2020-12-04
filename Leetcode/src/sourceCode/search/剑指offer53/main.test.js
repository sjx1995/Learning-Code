/*
 * @Author: Sunly
 * @Date: 2020-11-03 17:18:31
 * @LastEditTime: 2020-11-03 18:45:51
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\二分查找\剑指offer53\main.test.js
 */
import { missingNumber } from "./main";

test("missing number 1", () => {
	expect(missingNumber([0, 1, 3])).toBe(2);
});

test("missing number 2", () => {
	expect(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])).toBe(8);
});

test("missing number 3", () => {
	expect(missingNumber([0, 1, 2, 4])).toBe(3);
});

test("missing number 4", () => {
	expect(missingNumber([1])).toBe(0);
});

test("missing number 5", () => {
	expect(missingNumber([0])).toBe(1);
});

test("missing number 6", () => {
	expect(missingNumber([0, 1, 2, 3, 4, 5, 6])).toBe(7);
});

test("missing number 6", () => {
	expect(missingNumber([1, 2, 3])).toBe(0);
});
