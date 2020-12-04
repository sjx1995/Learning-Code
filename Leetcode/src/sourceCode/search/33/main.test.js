/*
 * @Author: Sunly
 * @Date: 2020-12-01 18:21:58
 * @LastEditTime: 2020-12-02 15:37:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\33\main.test.js
 */
import { search } from "./main";

test("search 1", () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test("search 2", () => {
	expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
});

test("search 3", () => {
	expect(search([1], 0)).toBe(-1);
});

test("search 4", () => {
	expect(search([4, 5, 6, 7, 8, 9, 0], 9)).toBe(5);
});
