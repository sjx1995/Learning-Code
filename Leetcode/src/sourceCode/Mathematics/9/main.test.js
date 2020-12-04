/*
 * @Author: Sunly
 * @Date: 2020-11-06 14:52:12
 * @LastEditTime: 2020-11-06 14:56:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Number\9\main.test.js
 */
import { isPalindrome } from "./main";

test("is palindrome 1", () => {
	expect(isPalindrome(121)).toBe(true);
});

test("is palindrome 2", () => {
	expect(isPalindrome(-121)).toBe(false);
});

test("is palindrome 3", () => {
	expect(isPalindrome(10)).toBe(false);
});

test("is palindrome 4", () => {
	expect(isPalindrome(0)).toBe(true);
});
