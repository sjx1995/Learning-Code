/*
 * @Author: Sunly
 * @Date: 2020-10-30 20:30:43
 * @LastEditTime: 2020-10-30 20:32:29
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\463\main.test.js
 */
import { islandPerimeter } from "./main";

test("island perimeter 1", () => {
	expect(
		islandPerimeter([
			[0, 1, 0, 0],
			[1, 1, 1, 0],
			[0, 1, 0, 0],
			[1, 1, 0, 0],
		])
	).toBe(16);
});
