/*
 * @Author: Sunly
 * @Date: 2020-09-27 17:35:22
 * @LastEditTime: 2020-09-27 17:44:39
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\350\main.test.js
 */
import { intersection } from './main.js'

test('intersection of nums1 and nums2', () => {
	expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
})
