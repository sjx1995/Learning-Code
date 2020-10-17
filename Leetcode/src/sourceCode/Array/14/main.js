/*
 * @Author: Sunly
 * @Date: 2020-09-27 18:36:22
 * @LastEditTime: 2020-09-28 12:16:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\14\main.js
 */
// export const longestCommonPrefix = (strs) => {
// 	if (!strs.length) return ''
// 	let longestPrefix = strs[0]
// 	for (let i = 1; i < strs.length; i++) {
// 		let a = longestPrefix.split('')
// 		let b = strs[i].split('')
// 		let tempPrefix = ''
// 		for (let j = 0; j < a.length; j++) {
// 			if (a[j] === b[j]) {
// 				tempPrefix += a[j]
// 			} else {
// 				break
// 			}
// 		}
// 		longestPrefix = tempPrefix
// 	}
// 	return longestPrefix
// }

export const longestCommonPrefix = (strs) => {
	if (!strs.length) return ''
	let longestPrefix = strs[0]
	for (let i = 1; i < strs.length; i++) {
		let j = 0
		for (; j < strs[i].length && j < longestPrefix.length; j++) {
			if (strs[i][j] !== longestPrefix[j]) {
				break
			}
		}
		longestPrefix = longestPrefix.slice(0, j)
		if (!longestPrefix.length) return ''
	}
	return longestPrefix
}
