/*
 * @Author: Sunly
 * @Date: 2020-10-10 10:58:35
 * @LastEditTime: 2020-10-10 11:22:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\6\main.test.js
 */

import { convert } from "./main";

test("convert 1", () => {
	expect(convert("LEETCODEISHIRING", 3)).toBe("LCIRETOESIIGEDHN");
});

test("convert 2", () => {
	expect(convert("LEETCODEISHIRING", 4)).toBe("LDREOEIIECIHNTSG");
});

test("convert 3", () => {
	expect(convert("AB", 1)).toBe("AB");
});
