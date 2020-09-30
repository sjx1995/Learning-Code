/*
 * @Author: Sunly
 * @Date: 2020-05-13 10:19:11
 * @LastEditTime: 2020-09-28 10:35:58
 * @LastEditors: Sunly
 * @Description: sum test
 * @FilePath: \leetcode\src\0000 test\sum.test.js
 */
const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3)
})

test('adds 2 and 2 to equal 4', () => {
	expect(sum(2, 2)).toBe(4)
})

test('add two numbers', () => {
	expect(sum(5, 6)).toBe(11)
	expect(sum(20, 25)).toBe(45)
})
