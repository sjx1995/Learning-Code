/*
 * @Author: Sunly
 * @Date: 2020-11-06 16:26:40
 * @LastEditTime: 2020-11-06 16:36:49
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Stack\20\main.test.js
 */
import { isValid } from "./main";

test("is valid 1", () => {
	expect(isValid("()")).toBe(true);
});

test("is valid 2", () => {
	expect(isValid("()[]{}")).toBe(true);
});

test("is valid 3", () => {
	expect(isValid("(]")).toBe(false);
});

test("is valid 4", () => {
	expect(isValid("([)]")).toBe(false);
});

test("is valid 5", () => {
	expect(isValid("{[]}")).toBe(true);
});
