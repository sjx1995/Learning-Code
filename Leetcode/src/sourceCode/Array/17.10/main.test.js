/*
 * @Author: Sunly
 * @Date: 2020-10-10 17:18:50
 * @LastEditTime: 2020-10-10 17:44:13
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\17.10\main.test.js
 */
import { majorityElement } from "./main";

test("majority element 1", () => {
	expect(majorityElement([1, 2, 5, 9, 5, 9, 5, 5, 5])).toBe(5);
});

test("majority element 2", () => {
	expect(majorityElement([3, 2])).toBe(-1);
});

test("majority element 3", () => {
	expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
});

test("majority element 4", () => {
	expect(majorityElement([1])).toBe(1);
});
