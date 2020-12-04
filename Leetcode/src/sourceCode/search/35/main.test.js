/*
 * @Author: Sunly
 * @Date: 2020-12-01 11:57:14
 * @LastEditTime: 2020-12-01 11:59:20
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\35\main.test.js
 */
import { searchInput } from "./main";

test("search input 1", () => {
	expect(searchInput([1, 3, 5, 6], 5)).toBe(2);
});

test("search input 2", () => {
	expect(searchInput([1, 3, 5, 6], 2)).toBe(1);
});

test("search input 3", () => {
	expect(searchInput([1, 3, 5, 6], 7)).toBe(4);
});

test("search input 4", () => {
	expect(searchInput([1, 3, 5, 6], 0)).toBe(0);
});
