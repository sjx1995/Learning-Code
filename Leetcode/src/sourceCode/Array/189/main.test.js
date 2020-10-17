/*
 * @Author: Sunly
 * @Date: 2020-09-29 11:39:09
 * @LastEditTime: 2020-09-29 11:41:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\189\main.test.js
 */
import { rotate } from "./main";

test("Example 1 of Rotate the Array", () => {
	expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

test("Example 2 of Rotate the Array", () => {
	expect(rotate([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
});
