/*
 * @Author: Sunly
 * @Date: 2020-11-25 19:10:45
 * @LastEditTime: 2020-11-25 20:02:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1640\main.test.js
 */
import { canFormArray } from "./main";

test("can from array 1", () => {
	expect(canFormArray([85], [[85]])).toBe(true);
});

test("can from array 2", () => {
	expect(canFormArray([15, 88], [[88], [15]])).toBe(true);
});

test("can from array 3", () => {
	expect(canFormArray([49, 18, 16], [[16, 18, 49]])).toBe(false);
});

test("can from array 4", () => {
	expect(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]])).toBe(true);
});

test("can from array 5", () => {
	expect(canFormArray([1, 3, 5, 7], [[2, 4, 6, 8]])).toBe(false);
});

test("can from array 6", () => {
	expect(canFormArray([1, 2, 3], [[2], [1, 3]])).toBe(false);
});

test("can from array 7", () => {
	expect(canFormArray([12], [[1]])).toBe(false);
});
