/*
 * @Author: Sunly
 * @Date: 2020-09-30 16:52:10
 * @LastEditTime: 2020-09-30 16:53:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\26\main.test.js
 */
import { removeDuplicates } from "./main";

test("remove duplicates in sorted array 1", () => {
	expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("remove duplicates in sorted array 2", () => {
	expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
