/*
 * @Author: Sunly
 * @Date: 2020-10-09 09:39:24
 * @LastEditTime: 2020-10-09 11:04:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\66\main.test.js
 */
import { plusOne } from "./main";

test("plus one 1", () => {
	expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test("plus one 2", () => {
	expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
});

test("plus one 3", () => {
	expect(plusOne([8, 9, 9, 9])).toEqual([9, 0, 0, 0]);
});

test("plus one 4", () => {
	expect(plusOne([9, 9])).toEqual([1, 0, 0]);
});
