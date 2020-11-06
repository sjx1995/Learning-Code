/*
 * @Author: Sunly
 * @Date: 2020-11-03 10:45:11
 * @LastEditTime: 2020-11-03 11:04:53
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\941\main.test.js
 */
import { vaildMountainArray } from "./main";

test("vaild mountain array 1", () => {
	expect(vaildMountainArray([2, 1])).toBe(false);
});

test("vaild mountain array 2", () => {
	expect(vaildMountainArray([3, 5, 5])).toBe(false);
});

test("vaild mountain array 3", () => {
	expect(vaildMountainArray([0, 3, 2, 1])).toBe(true);
});

test("vaild mountain array 4", () => {
	expect(vaildMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
});

test("vaild mountain array 5", () => {
	expect(vaildMountainArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(false);
});
