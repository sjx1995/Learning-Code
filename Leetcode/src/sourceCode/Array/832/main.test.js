/*
 * @Author: Sunly
 * @Date: 2020-10-12 13:57:07
 * @LastEditTime: 2020-10-12 13:58:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\832\main.test.js
 */
import { flipAndInvertImage } from "./main";

test("flip and invert image 1", () => {
	expect(
		flipAndInvertImage([
			[1, 1, 0],
			[1, 0, 1],
			[0, 0, 0],
		])
	).toEqual([
		[1, 0, 0],
		[0, 1, 0],
		[1, 1, 1],
	]);
});

test("flip and invert image 2", () => {
	expect(
		flipAndInvertImage([
			[1, 1, 0, 0],
			[1, 0, 0, 1],
			[0, 1, 1, 1],
			[1, 0, 1, 0],
		])
	).toEqual([
		[1, 1, 0, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 1],
		[1, 0, 1, 0],
	]);
});
