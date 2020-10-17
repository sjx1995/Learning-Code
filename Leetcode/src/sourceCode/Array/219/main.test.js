/*
 * @Author: Sunly
 * @Date: 2020-10-12 14:44:06
 * @LastEditTime: 2020-10-12 16:06:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\219\main.test.js
 */
import { containsNearbyDuplicate } from "./main";

test("contains nearby duplicate 1", () => {
	expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true);
});

test("contains nearby duplicate 2", () => {
	expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true);
});

test("contains nearby duplicate 3", () => {
	expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false);
});

test("contains nearby duplicate 4", () => {
	expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 0)).toBe(false);
});

test("contains nearby duplicate 5", () => {
	expect(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3)).toBe(true);
});
