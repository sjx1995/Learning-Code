/*
 * @Author: Sunly
 * @Date: 2020-10-15 19:15:34
 * @LastEditTime: 2020-10-15 19:16:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\387\main.test.js
 */
import { firstUniqChar } from "./main";

test("first uniq char 1", () => {
	expect(firstUniqChar("leetcode")).toBe(0);
});

test("first uniq char 2", () => {
	expect(firstUniqChar("loveleetcode")).toBe(2);
});

test("first uniq char 3", () => {
	expect(firstUniqChar("aadadaad")).toBe(-1);
});
