/*
 * @Author: Sunly
 * @Date: 2020-11-11 11:53:50
 * @LastEditTime: 2020-11-11 12:16:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\514\main.test.js
 */
import { findRotateSteps } from "./main";

test("find rotate steps 1", () => {
	expect(findRotateSteps("godding", "gd")).toBe(4);
});

test("find rotate steps 2", () => {
	expect(findRotateSteps("iotfo", "fioot")).toBe(11);
});
