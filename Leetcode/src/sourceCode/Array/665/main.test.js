/*
 * @Author: Sunly
 * @Date: 2021-02-07 11:35:59
 * @LastEditTime: 2021-02-07 11:41:11
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\665\test.main.js
 */
import { checkPossibility } from "./main.js";

test("check possibility 1", () => {
	expect(checkPossibility([3, 4, 2, 3])).toBe(false);
});

test("check possibility 2", () => {
	expect(checkPossibility([5, 7, 1, 8])).toBe(true);
});

test("check possibility 1", () => {
	expect(checkPossibility([4, 2, 3])).toBe(true);
});

test("check possibility 2", () => {
	expect(checkPossibility([4, 2, 1])).toBe(false);
});
