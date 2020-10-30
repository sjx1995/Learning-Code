/*
 * @Author: Sunly
 * @Date: 2020-10-21 19:06:53
 * @LastEditTime: 2020-10-21 19:26:20
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\925\main.test.js
 */
import { isLongPressedName } from "./main.js";

test("is long pressed name 1", () => {
	expect(isLongPressedName("alex", "aaleex")).toBe(true);
});

test("is long pressed name 2", () => {
	expect(isLongPressedName("saeed", "ssaaedd")).toBe(false);
});

test("is long pressed name 3", () => {
	expect(isLongPressedName("leelee", "lleeelee")).toBe(true);
});

test("is long pressed name 4", () => {
	expect(isLongPressedName("laiden", "laiden")).toBe(true);
});

test("is long pressed name 5", () => {
	expect(isLongPressedName("laiden", "")).toBe(false);
});

test("is long pressed name 6", () => {
	expect(isLongPressedName("saeedi", "ssaaeediixxxiii")).toBe(true);
});

test("is long pressed name 7", () => {
	expect(isLongPressedName("pyplrz", "ppyypllr")).toBe(false);
});
