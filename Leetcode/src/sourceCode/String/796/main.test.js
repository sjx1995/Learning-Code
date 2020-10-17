/*
 * @Author: Sunly
 * @Date: 2020-10-16 19:38:43
 * @LastEditTime: 2020-10-16 20:12:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\796\main.test.js
 */
import { rotateString } from "./main";

test("rotate string 1", () => {
	expect(rotateString("abcde", "cdeab")).toBe(true);
});

test("rotate string 2", () => {
	expect(rotateString("abcde", "abced")).toBe(false);
});

test("rotate string 3", () => {
	expect(rotateString("", "")).toBe(true);
});

test("rotate string 4", () => {
	expect(rotateString("aa", "a")).toBe(false);
});
