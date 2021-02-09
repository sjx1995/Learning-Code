/*
 * @Author: Sunly
 * @Date: 2021-01-27 19:31:18
 * @LastEditTime: 2021-01-28 17:11:40
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\4\main.js
 */
export const findMedianSortedArrays = (nums1, nums2) => {
	const sortedArr = [];
	while (nums1.length && nums2.length) sortedArr.push(nums1[0] <= nums2[0] ? nums1.pop() : nums2.pop());
	while (nums1.length) sortedArr.push(nums1.pop());
	while (nums2.length) sortedArr.push(nums2.pop());
	return sortedArr.length % 2 === 0
		? (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 + 1]) / 2
		: sortedArr[(sortedArr.length + 1) / 2];
};
