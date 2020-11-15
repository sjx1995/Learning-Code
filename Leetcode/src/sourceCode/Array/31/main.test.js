/*
 * @Author: Sunly
 * @Date: 2020-11-10 16:35:18
 * @LastEditTime: 2020-11-10 18:16:33
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\31\main.test.js
 */
import { nextPermutation } from "./main";

test("next permutaion 1", () => {
	expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

test("next permutaion 2", () => {
	expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
});

test("next permutaion 3", () => {
	expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1]);
});

test("next permutaion 4", () => {
	expect(nextPermutation([1, 2, 4, 3])).toEqual([1, 3, 2, 4]);
});

test("next permutaion 5", () => {
	expect(nextPermutation([1, 1])).toEqual([1, 1]);
});
