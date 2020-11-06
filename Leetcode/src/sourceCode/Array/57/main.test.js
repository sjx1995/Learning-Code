/*
 * @Author: Sunly
 * @Date: 2020-11-04 15:27:36
 * @LastEditTime: 2020-11-04 17:58:30
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\57\main.test.js
 */
import { insert } from "./main";

test("insert 1", () => {
	expect(
		insert(
			[
				[1, 3],
				[6, 9],
			],
			[2, 5]
		)
	).toEqual([
		[1, 5],
		[6, 9],
	]);
});

test("insert 2", () => {
	expect(
		insert(
			[
				[1, 2],
				[3, 5],
				[6, 7],
				[8, 10],
				[12, 16],
			],
			[4, 8]
		)
	).toEqual([
		[1, 2],
		[3, 10],
		[12, 16],
	]);
});

test("insert 3", () => {
	expect(insert([], [4, 8])).toEqual([[4, 8]]);
});

test("insert 4", () => {
	expect(insert([[1, 5]], [0, 5])).toEqual([[0, 5]]);
});

test("insert 5", () => {
	expect(insert([[1, 2]], [1, 5])).toEqual([[1, 5]]);
});
