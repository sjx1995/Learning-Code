/*
 * @Author: Sunly
 * @Date: 2020-09-28 12:21:10
 * @LastEditTime: 2020-09-28 12:24:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\122\main.test.js
 */
import { bestTimeToBugAndSellStock2 } from './main'

test('example 1 for best time to bug and sell stock', () => {
	expect(bestTimeToBugAndSellStock2([7, 1, 5, 3, 6, 4])).toBe(7)
})

test('example 2 for best time to bug and sell stock', () => {
	expect(bestTimeToBugAndSellStock2([1, 2, 3, 4, 5])).toBe(4)
})

test('example 3 for best time to bug and sell stock', () => {
	expect(bestTimeToBugAndSellStock2([7, 6, 4, 3, 1])).toBe(0)
})
