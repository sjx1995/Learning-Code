/*
 * @Author: Sunly
 * @Date: 2020-11-06 11:20:23
 * @LastEditTime: 2020-11-06 11:22:45
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1356\main.test.js
 */
import { sortByBits } from "./main";

test("sort by bits 1", () => {
	expect(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])).toEqual([0, 1, 2, 4, 8, 3, 5, 6, 7]);
});

test("sort by bits 2", () => {
	expect(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])).toEqual([
		1,
		2,
		4,
		8,
		16,
		32,
		64,
		128,
		256,
		512,
		1024,
	]);
});

test("sort by bits 3", () => {
	expect(sortByBits([10000, 10000])).toEqual([10000, 10000]);
});

test("sort by bits 4", () => {
	expect(sortByBits([2, 3, 5, 7, 11, 13, 17, 19])).toEqual([2, 3, 5, 17, 7, 11, 13, 19]);
});

test("sort by bits 5", () => {
	expect(sortByBits([10, 100, 1000, 10000])).toEqual([10, 100, 10000, 1000]);
});
