/*
 * @Author: Sunly
 * @Date: 2020-11-19 11:09:55
 * @LastEditTime: 2020-11-19 11:11:40
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\283\main.test.js
 */
import { moveZeroes } from "./main";

test("move zeroes 1", () => {
	expect(moveZeroes([0, 1, 0, 3, 12, 0])).toEqual([1, 3, 12, 0, 0, 0]);
});

test("move zeroes 2", () => {
	expect(moveZeroes([1, 0])).toEqual([1, 0]);
});

test("move zeroes 3", () => {
	expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
});
