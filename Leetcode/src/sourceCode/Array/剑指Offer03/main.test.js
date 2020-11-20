/*
 * @Author: Sunly
 * @Date: 2020-11-19 11:38:09
 * @LastEditTime: 2020-11-19 12:34:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\剑指Offer03\main.test.js
 */
import { findRepeatNumber } from "./main";

test("font repeat number 1", () => {
	expect(findRepeatNumber([2, 3, 1, 0, 2, 5, 3])).toBe(2);
});
