/*
 * @Author: Sunly
 * @Date: 2020-11-02 18:14:39
 * @LastEditTime: 2020-11-02 18:22:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\349\main.test.js
 */
import { intersection } from "./main";

test("intersection 1", () => {
	expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
});

test("intersection 2", () => {
	expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
});
