/*
 * @Author: Sunly
 * @Date: 2020-09-27 18:36:28
 * @LastEditTime: 2020-09-28 10:54:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\14\main.test.js
 */
import { longestCommonPrefix } from './main.js'

test('test example one', () => {
	expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
})

test('test example two', () => {
	expect(longestCommonPrefix(['aa', 'a'])).toEqual('a')
})

test('test example three', () => {
	expect(longestCommonPrefix(['aa', 'aaaa'])).toEqual('aa')
})

test('test example four', () => {
	expect(longestCommonPrefix(['one', 'two', ''])).toEqual('')
})

test('test for empty array', () => {
	expect(longestCommonPrefix([])).toEqual('')
})
