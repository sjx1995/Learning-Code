/*
 * @Author: Sunly
 * @Date: 2020-10-30 18:53:09
 * @LastEditTime: 2020-10-30 20:10:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\55\main.test.js
 */
import { canJump } from "./main";

test("test can jump 1", () => {
	expect(canJump([2, 3, 1, 1, 4])).toBe(true);
});

test("test can jump 2", () => {
	expect(canJump([3, 2, 1, 0, 4])).toBe(false);
});

test("test can jump 3", () => {
	expect(canJump([0])).toBe(true);
});

test("test can jump 4", () => {
	expect(canJump([0, 1])).toBe(false);
});
