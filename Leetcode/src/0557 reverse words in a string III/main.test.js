/*
 * @Author: Sunly
 * @Date: 2020-05-13 10:26:22
 * @LastEditTime: 2020-05-13 10:28:33
 * @LastEditors: Sunly
 * @Description: 557 测试文件
 * @FilePath: \leetcode\src\0557 reverse words in a string III\main.test.js
 */
const reverseWords = require('./main')
test('reverse words in a string', () => {
	expect(reverseWords("Let's take LeetCode contest")).toBe(
		"s'teL ekat edoCteeL tsetnoc"
	)
})
