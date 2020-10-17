/*
 * @Author: Sunly
 * @Date: 2020-10-10 15:55:21
 * @LastEditTime: 2020-10-10 16:11:34
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1185\main.test.js
 */
import { dayOfTheWeek } from "./main";

test("day of the week 1", () => {
	expect(dayOfTheWeek(31, 8, 2019)).toBe("Saturday");
});

test("day of the week 2", () => {
	expect(dayOfTheWeek(18, 7, 1999)).toBe("Sunday");
});

test("day of the week 3", () => {
	expect(dayOfTheWeek(15, 8, 1993)).toBe("Sunday");
});

test("day of the week 4", () => {
	expect(dayOfTheWeek(1, 1, 1971)).toBe("Friday");
});
