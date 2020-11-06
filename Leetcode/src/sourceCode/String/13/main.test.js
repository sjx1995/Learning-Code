/*
 * @Author: Sunly
 * @Date: 2020-11-03 11:34:44
 * @LastEditTime: 2020-11-03 11:36:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\13\main.test.js
 */
import { romanToInt } from "./main";

test("Roman To Int 1", () => {
	expect(romanToInt("III")).toBe(3);
});

test("Roman To Int 2", () => {
	expect(romanToInt("IV")).toBe(4);
});

test("Roman To Int 3", () => {
	expect(romanToInt("IX")).toBe(9);
});

test("Roman To Int 4", () => {
	expect(romanToInt("LVIII")).toBe(58);
});

test("Roman To Int 5", () => {
	expect(romanToInt("MCMXCIV")).toBe(1994);
});
