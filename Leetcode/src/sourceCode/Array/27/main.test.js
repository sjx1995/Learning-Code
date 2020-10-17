/*
 * @Author: Sunly
 * @Date: 2020-09-30 15:30:51
 * @LastEditTime: 2020-09-30 15:33:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\27\main.test.js
 */
import { removeElement } from "./main";

test("remove element 1", () => {
	expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

test("remove element 2", () => {
	expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
