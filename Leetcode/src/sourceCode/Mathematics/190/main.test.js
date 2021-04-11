/*
 * @Author: Sunly
 * @Date: 2021-03-29 11:11:58
 * @LastEditTime: 2021-03-29 11:34:47
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\190\main.test.js
 */
import { reverseBits } from "./main";

test("reverse bits 1", () => {
	expect(reverseBits("00000010100101000001111010011100")).toBe("00111001011110000010100101000000");
});

test("reverse bits 2", () => {
	expect(reverseBits("11111111111111111111111111111101")).toBe("10111111111111111111111111111111");
});
