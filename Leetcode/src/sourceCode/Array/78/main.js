/*
 * @Author: Sunly
 * @Date: 2021-03-31 11:21:28
 * @LastEditTime: 2021-04-01 10:20:31
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\78\main.js
 */

const subsets_1 = nums => {
	const res = [[]];
	for (let num of nums) {
		const temp = [];
		for (let resItem of res) {
			temp.push([...resItem, num]);
		}
		res.push(...temp);
	}
	return res;
};

const subsets = nums => {
	const res = [];
	const dfs = (index, list) => {
		if (index === nums.length) {
			res.push(list);
			return;
		}
		list.push(nums[index]);
		dfs(index + 1, list);
		list.pop();
		dfs(index + 1, list);
	};
	dfs(0, []);
	return res;
};
