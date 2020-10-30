/*
 * @Author: Sunly
 * @Date: 2020-10-19 18:51:18
 * @LastEditTime: 2020-10-20 11:26:21
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\844\main.test.js
 */
import { backspaceCompare } from "./main";

test("backspace compare 1", () => {
	expect(backspaceCompare("ab#c", "ad#c")).toBe(true);
});

test("backspace compare 2", () => {
	expect(backspaceCompare("ab##", "c#d#")).toBe(true);
});

test("backspace compare 3", () => {
	expect(backspaceCompare("a##c", "#a#c")).toBe(true);
});

test("backspace compare 4", () => {
	expect(backspaceCompare("a#c", "b")).toBe(false);
});

test("backspace compare 5", () => {
	expect(backspaceCompare("##", "")).toBe(true);
});

test("backspace compare 6", () => {
	expect(backspaceCompare("a##", "")).toBe(true);
});

test("backspace compare 7", () => {
	expect(backspaceCompare("bxj##tw", "bxj###tw")).toBe(false);
});
