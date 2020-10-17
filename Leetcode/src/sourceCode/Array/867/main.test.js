/*
 * @Author: Sunly
 * @Date: 2020-09-29 19:10:34
 * @LastEditTime: 2020-09-30 13:50:31
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\867\main.test.js
 */
import { transpose_3 } from "./main";

test("transpose matrix 1", () => {
	expect(
		transpose_3([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])
	).toEqual([
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
	]);
});

test("transpose matrix 2", () => {
	expect(
		transpose_3([
			[1, 2, 3],
			[4, 5, 6],
		])
	).toEqual([
		[1, 4],
		[2, 5],
		[3, 6],
	]);
});
