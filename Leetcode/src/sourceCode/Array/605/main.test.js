/*
 * @Author: Sunly
 * @Date: 2020-10-12 16:10:27
 * @LastEditTime: 2020-10-12 16:45:18
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\605\main.test.js
 */
import { canPlaceFlowers } from "./main";

test("can place flowers 1", () => {
	expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});

test("can place flowers 2", () => {
	expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});

test("can place flowers 3", () => {
	expect(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0)).toBe(true);
});

test("can place flowers 4", () => {
	expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)).toBe(true);
});

test("can place flowers 5", () => {
	expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
});

test("can place flowers 6", () => {
	expect(canPlaceFlowers([0, 0, 0, 0, 0, 1, 0, 0], 0)).toBe(true);
});
