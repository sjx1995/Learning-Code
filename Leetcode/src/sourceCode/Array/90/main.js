/*
 * @Author: Sunly
 * @Date: 2021-03-31 11:14:50
 * @LastEditTime: 2021-04-01 10:25:19
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\90\main.js
 */
const subsetsWithDup = nums => {
	nums.sort((a, b) => a - b);
	const res = [[]];
	let dulicateStart = 0;
	for (let i = 0; i < nums.length; i++) {
		const temp = [];
		let j = 0;
		if (i !== 0 && nums[i] === nums[i - 1]) {
			j = dulicateStart;
		}
		for (; j < res.length; j++) {
			temp.push([...res[j], nums[i]]);
		}
		dulicateStart = res.length;
		res.push(...temp);
	}
	return res;
};
