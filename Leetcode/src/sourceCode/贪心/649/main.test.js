/*
 * @Author: Sunly
 * @Date: 2020-12-11 11:11:45
 * @LastEditTime: 2020-12-11 11:13:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\649\main.test.js
 */
import { predictPartyVictory } from "./main";

test("predict party victory 1", () => {
	expect(predictPartyVictory("RD")).toBe("Radiant");
});

test("predict party victory 2", () => {
	expect(predictPartyVictory("RDD")).toBe("Dire");
});

test("predict party victory 3", () => {
	expect(predictPartyVictory("RRDDD")).toBe("Radiant");
});
