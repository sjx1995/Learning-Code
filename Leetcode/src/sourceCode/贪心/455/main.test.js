/*
 * @Author: Sunly
 * @Date: 2020-10-30 18:06:28
 * @LastEditTime: 2020-10-30 18:07:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\455\main.test.js
 */
import { findContentChildren } from "./main";

test("find content children 1", () => {
	expect(findContentChildren([1, 2, 3], [1, 1])).toBe(1);
});

test("find content children 2", () => {
	expect(findContentChildren([1, 2], [1, 2, 3])).toBe(2);
});
