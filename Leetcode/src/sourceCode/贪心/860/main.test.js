/*
 * @Author: Sunly
 * @Date: 2020-10-30 18:22:29
 * @LastEditTime: 2020-10-30 18:24:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\860\main.test.js
 */
import { lemonadeChange } from "./main";

test("lemonade change 1", () => {
	expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
});

test("lemonade change 2", () => {
	expect(lemonadeChange([5, 5, 10])).toBe(true);
});

test("lemonade change 3", () => {
	expect(lemonadeChange([10, 10])).toBe(false);
});

test("lemonade change 4", () => {
	expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
});
