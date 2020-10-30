/*
 * @Author: Sunly
 * @Date: 2020-10-28 17:58:30
 * @LastEditTime: 2020-10-28 18:11:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1207\main.test.js
 */
import { uniqueOccurrences } from "./main";

test("unique occurrences 1", () => {
	expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
});

test("unique occurrences 2", () => {
	expect(uniqueOccurrences([1, 2])).toBe(false);
});

test("unique occurrences 3", () => {
	expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});
