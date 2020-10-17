/*
 * @Author: Sunly
 * @Date: 2020-09-27 17:35:12
 * @LastEditTime: 2020-09-27 18:19:54
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\350\main.js
 */

// 两个数组的交集（350）
// 给定两个数组，编写一个函数来计算它们的交集。

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]

export function intersection(nums1, nums2) {
	const map = {}
	const res = []
	for (const num1 of nums1) {
		if (map[num1]) {
			map[num1]++
		} else {
			map[num1] = 1
		}
	}
	for (const num2 of nums2) {
		const count = map[num2]
		if (count > 0) {
			res.push(num2)
			map[num2]--
		}
	}
	return res
}

// 如果两个数组有排序

export function intersection_for_sorted(nums1, nums2) {
	nums1.sort((a, b) => a - b)
	nums2.sort((a, b) => a - b)
	const res = []
	let p1 = 0
	let p2 = 0
	while (p1 < nums1.length && p2 < nums2.length) {
		if (nums1[p1] < nums2[p2]) {
			p1++
		} else if (nums1[p1] > nums2[p2]) {
			p2++
		} else {
			res.push(nums1[p1])
			p1++
			p2++
		}
	}
	return res
}
