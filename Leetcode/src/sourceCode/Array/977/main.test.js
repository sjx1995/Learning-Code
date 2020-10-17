/*
 * @Author: Sunly
 * @Date: 2020-10-10 17:59:47
 * @LastEditTime: 2020-10-10 18:00:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\977\main.test.js
 */
import { sortedSquares } from "./main";

test("sorted squares 1", () => {
	expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
});

test("sorted squares 2", () => {
	expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
});
