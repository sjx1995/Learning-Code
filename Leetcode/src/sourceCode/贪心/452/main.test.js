/*
 * @Author: Sunly
 * @Date: 2020-11-23 10:27:15
 * @LastEditTime: 2020-11-23 10:57:32
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\452\main.test.js
 */
import { findMinArrowShots } from "./main";

test("find min arrow shots 1", () => {
	expect(
		findMinArrowShots([
			[10, 16],
			[2, 8],
			[1, 6],
			[7, 12],
		])
	).toBe(2);
});

test("find min arrow shots 2", () => {
	expect(
		findMinArrowShots([
			[1, 2],
			[3, 4],
			[5, 6],
			[7, 8],
		])
	).toBe(4);
});

test("find min arrow shots 3", () => {
	expect(findMinArrowShots([[1, 2]])).toBe(1);
});

test("find min arrow shots 4", () => {
	expect(
		findMinArrowShots([
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
		])
	).toBe(2);
});

test("find min arrow shots 5", () => {
	expect(
		findMinArrowShots([
			[2, 3],
			[2, 3],
		])
	).toBe(1);
});

test("find min arrow shots 6", () => {
	expect(
		findMinArrowShots([
			[3, 9],
			[7, 12],
			[3, 8],
			[6, 8],
			[9, 10],
			[2, 9],
			[0, 9],
			[3, 9],
			[0, 6],
			[2, 8],
		])
	).toBe(2);
});

test("find min arrow shots 6", () => {
	expect(
		findMinArrowShots([
			[9, 12],
			[1, 10],
			[4, 11],
			[8, 12],
			[3, 9],
			[6, 9],
			[6, 7],
		])
	).toBe(2);
});
