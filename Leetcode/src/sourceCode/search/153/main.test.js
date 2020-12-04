/*
 * @Author: Sunly
 * @Date: 2020-12-02 12:01:48
 * @LastEditTime: 2020-12-02 12:08:48
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\153\main.test.js
 */
import { findMin } from "./main";

test("find min 1", () => {
	expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test("find min 2", () => {
	expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test("find min 3", () => {
	expect(findMin([1])).toBe(1);
});

test("find min 4", () => {
	expect(findMin([4, 5, 6, 7, 8, 9])).toBe(4);
});
