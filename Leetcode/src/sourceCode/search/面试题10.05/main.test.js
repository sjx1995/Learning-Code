/*
 * @Author: Sunly
 * @Date: 2020-12-01 16:14:57
 * @LastEditTime: 2020-12-01 17:53:17
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\面试题10.05\main.test.js
 */
import { findString } from "./main";

test("find string 1", () => {
	expect(findString(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "ta")).toBe(-1);
});

test("find string 2", () => {
	expect(findString(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "ball")).toBe(4);
});

test("find string 3", () => {
	expect(
		findString(["DirNnILhARNS hOYIFB", "SM ", "YSPBaovrZBS", "evMMBOf", "mCrS", "oRJfjw gwuo", "xOpSEXvfI"], "mCrS")
	).toBe(4);
});
