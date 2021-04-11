/*
 * @Author: Sunly
 * @Date: 2021-04-06 11:05:15
 * @LastEditTime: 2021-04-06 11:47:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\80\main.js
 */
const removeDuplicates = nums => {
	if (nums.length < 3) return nums.length;
	let fast = 1,
		slow = 0;
	while (fast < nums.length) {
		if (nums[fast] === nums[slow]) {
			if (fast - slow > 1) {
				nums.splice(fast, 1);
			} else {
				fast++;
			}
		} else {
			slow++;
			fast++;
		}
	}
	return nums.length;
};
