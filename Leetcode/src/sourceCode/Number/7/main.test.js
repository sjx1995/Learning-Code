/*
 * @Author: Sunly
 * @Date: 2020-11-05 10:02:56
 * @LastEditTime: 2020-11-05 11:45:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Other\7\main.test.js
 */
import { reverse } from "./main";

test("reverse 1", () => {
	expect(reverse(123)).toBe(321);
});

test("reverse 2", () => {
	expect(reverse(-123)).toBe(-321);
});

test("reverse 3", () => {
	expect(reverse(120)).toBe(21);
});

test("reverse 4", () => {
	expect(reverse(1534236469)).toBe(0);
});

test("reverse 5", () => {
	expect(reverse(7463847412)).toBe(2147483647);
});

test("reverse 6", () => {
	expect(reverse(7463847413)).toBe(0);
});

test("reverse 7", () => {
	expect(reverse(-8463847412)).toBe(-2147483648);
});

test("reverse 8", () => {
	expect(reverse(-8463847413)).toBe(0);
});
