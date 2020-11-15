/*
 * @Author: Sunly
 * @Date: 2020-11-09 14:20:29
 * @LastEditTime: 2020-11-09 14:22:03
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\973\main.test.js
 */
import { KClosest } from "./main";

test("k closest 1", () => {
	expect(
		KClosest(
			[
				[1, 3],
				[-2, 2],
			],
			1
		)
	).toEqual([[-2, 2]]);
});

test("k closest 2", () => {
	expect(
		KClosest(
			[
				[3, 3],
				[5, -1],
				[-2, 4],
			],
			2
		)
	).toEqual([
		[3, 3],
		[-2, 4],
	]);
});
