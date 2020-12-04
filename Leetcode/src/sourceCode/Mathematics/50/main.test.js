/*
 * @Author: Sunly
 * @Date: 2020-12-03 14:18:55
 * @LastEditTime: 2020-12-03 17:35:00
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\50\main.test.js
 */
import { myPow } from "./main";

test("my pow 1", () => {
	expect(myPow(2, 10)).toBe(1024);
});

test("my pow 2", () => {
	expect(myPow(2.1, 3)).toBe(9.261);
});

test("my pow 3", () => {
	expect(myPow(2, -2)).toBe(0.25);
});

test("my pow 4", () => {
	expect(myPow(2, -2147483648)).toBe(0);
});
