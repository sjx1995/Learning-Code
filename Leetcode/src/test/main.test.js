/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:43
 * @LastEditTime: 2020-11-26 15:42:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.test.js
 */
import { raidxSort } from "./main";

test("raidxSort 1", () => {
	expect(raidxSort([1, 4, 678, 3, 8, 9, 99, 222, 467, 3, 23, 45, 21, 78, 65, 46, 34, 4, 56, 99, 71, 23, 78])).toEqual([
		1,
		3,
		3,
		4,
		4,
		8,
		9,
		21,
		23,
		23,
		34,
		45,
		46,
		56,
		65,
		71,
		78,
		78,
		99,
		99,
		222,
		467,
		678,
	]);
});

test("raidxSort 2", () => {
	expect(raidxSort([1])).toEqual([1]);
});
