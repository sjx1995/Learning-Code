/*
 * @Author: Sunly
 * @Date: 2020-10-13 14:06:41
 * @LastEditTime: 2020-10-14 12:21:41
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\3\main.test.js
 */
import { lengthOfLongestSubstring } from "./main";

test("length of longest substring 1", () => {
	expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
});

test("length of longest substring 2", () => {
	expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("length of longest substring 3", () => {
	expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("length of longest substring 4", () => {
	expect(lengthOfLongestSubstring(" ")).toBe(1);
});

test("length of longest substring 5", () => {
	expect(lengthOfLongestSubstring("")).toBe(0);
});

test("length of longest substring 6", () => {
	expect(lengthOfLongestSubstring("cdd")).toBe(2);
});

test("length of longest substring 7", () => {
	expect(lengthOfLongestSubstring("abba")).toBe(2);
});
