/*
 * @Author: Sunly
 * @Date: 2020-11-05 15:45:23
 * @LastEditTime: 2020-11-05 15:46:53
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\139\main.test.js
 */
import { wordBreak } from "./main";

test("word break 1", () => {
	expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
});

test("word break 2", () => {
	expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
});

test("word break 3", () => {
	expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
});
 