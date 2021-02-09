/*
 * @Author: Sunly
 * @Date: 2021-02-08 12:04:41
 * @LastEditTime: 2021-02-09 15:29:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\978\main.test.js
 */
import { maxTurbulenceSize } from "./main";

test("max turbulence size 1", () => {
	expect(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9])).toBe(5);
});

test("max turbulence size 2", () => {
	expect(maxTurbulenceSize([4, 8, 12, 16])).toBe(2);
});

test("max turbulence size 3", () => {
	expect(maxTurbulenceSize([100])).toBe(1);
});

test("max turbulence size 3", () => {
	expect(maxTurbulenceSize([0, 8, 45, 88, 48, 68, 28, 55, 17, 24])).toBe(8);
});
