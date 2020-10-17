/*
 * @Author: Sunly
 * @Date: 2020-10-10 18:19:00
 * @LastEditTime: 2020-10-10 18:20:44
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1588\main.test.js
 */
import { sumOddLengthSubarrays } from "./main";

test("sum odd length subarrays 1", () => {
	expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58);
});

test("sum odd length subarrays 2", () => {
	expect(sumOddLengthSubarrays([1, 2])).toBe(3);
});

test("sum odd length subarrays 3", () => {
	expect(sumOddLengthSubarrays([10, 11, 12])).toBe(66);
});
