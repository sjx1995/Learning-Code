/*
 * @Author: Sunly
 * @Date: 2020-10-12 11:31:30
 * @LastEditTime: 2020-10-12 11:33:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\628\main.test.js
 */
import { maximumProduct } from "./main";

test("maximum product 1", () => {
	expect(maximumProduct([1, 2, 3])).toBe(6);
});

test("maximum product 2", () => {
	expect(maximumProduct([1, 2, 3, 4])).toBe(24);
});
