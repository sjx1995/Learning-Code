/*
 * @Author: Sunly
 * @Date: 2020-10-10 11:43:17
 * @LastEditTime: 2020-10-10 11:45:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\19\main.test.js
 */
import { removeNthFromEnd } from "./main";

test("remove nth node from end 1", () => {
	expect(removeNthFromEnd([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 3, 5]);
});
