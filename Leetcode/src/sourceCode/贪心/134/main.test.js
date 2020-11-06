/*
 * @Author: Sunly
 * @Date: 2020-11-02 19:09:38
 * @LastEditTime: 2020-11-02 19:21:01
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\134\main.test.js
 */
import { canCompleteCircuit } from "./main";

test("can complete circuit 1", () => {
	expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toBe(3);
});

test("can complete circuit 1", () => {
	expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toBe(-1);
});
