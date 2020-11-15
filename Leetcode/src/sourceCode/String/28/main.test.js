/*
 * @Author: Sunly
 * @Date: 2020-11-06 18:52:22
 * @LastEditTime: 2020-11-09 10:09:50
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\28\main.test.js
 */
import { strStr } from "./main";

test("strStr 1", () => {
	expect(strStr("hello", "ll")).toBe(2);
});

test("strStr 2", () => {
	expect(strStr("aaaaa", "bba")).toBe(-1);
});

test("strStr 3", () => {
	expect(strStr("aaaaa", "")).toBe(0);
});

test("strStr 4", () => {
	expect(strStr("a", "a")).toBe(0);
});
