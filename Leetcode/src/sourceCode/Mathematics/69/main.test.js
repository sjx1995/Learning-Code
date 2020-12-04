/*
 * @Author: Sunly
 * @Date: 2020-12-02 18:22:35
 * @LastEditTime: 2020-12-02 19:04:59
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\69\main.test.js
 */
import { mySqrt } from "./main";

test("my sqrt 1", () => {
	expect(mySqrt(4)).toBe(2);
});

test("my sqrt 2", () => {
	expect(mySqrt(8)).toBe(2);
});

test("my sqrt 3", () => {
	expect(mySqrt(9)).toBe(3);
});

test("my sqrt 4", () => {
	expect(mySqrt(26)).toBe(5);
});
