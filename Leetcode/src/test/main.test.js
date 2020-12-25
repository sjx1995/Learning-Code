/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:43
 * @LastEditTime: 2020-12-25 11:31:21
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.test.js
 */
import { insertionSort } from "./main";

test("insertionSort  1", () => {
	expect(
		insertionSort([1, 4, 678, 3, 8, 9, 99, 222, 467, 3, 23, 45, 21, 78, 65, 46, 34, 4, 56, 99, 71, 23, 78])
	).toEqual([1, 3, 3, 4, 4, 8, 9, 21, 23, 23, 34, 45, 46, 56, 65, 71, 78, 78, 99, 99, 222, 467, 678]);
});

test("insertionSort  2", () => {
	expect(insertionSort([1])).toEqual([1]);
});

import { binarySearch } from "./main";

test("binary search 1", () => {
	expect(binarySearch([1, 3, 4, 8, 9, 21, 23, 34, 45, 46, 56], 9)).toBe(4);
});

test("binary search 2", () => {
	expect(binarySearch([0, 1, 2, 3, 4, 6, 7, 8, 9], 5)).toBe(-1);
});
