/*
 * @Author: Sunly
 * @Date: 2020-11-05 12:21:23
 * @LastEditTime: 2020-11-05 14:55:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\图\127\main.test.js
 */
import { ladderLength } from "./main";

test("ladder length 1", () => {
	expect(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])).toBe(5);
});

test("ladder length 2", () => {
	expect(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])).toBe(0);
});

test("ladder length 3", () => {
	expect(ladderLength("a", "c", ["a", "b", "c"])).toBe(2);
});
