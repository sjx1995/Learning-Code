/*
 * @Author: Sunly
 * @Date: 2020-10-15 20:17:45
 * @LastEditTime: 2020-10-16 10:25:03
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\125\main.test.js
 */
import { isPalindrome } from "./main";

test("is palindrome 1", () => {
	expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
});

test("is palindrome 2", () => {
	expect(isPalindrome("race a car")).toBe(false);
});

test("is palindrome 3", () => {
	expect(isPalindrome("ab_a")).toBe(true);
});
