/*
 * @Author: Sunly
 * @Date: 2020-11-10 16:35:12
 * @LastEditTime: 2020-11-10 19:03:32
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\31\main.js
 */
// export const nextPermutation = (nums) => {
// 	let last = nums.length - 1;
// 	if (nums[last] > nums[last - 1]) {
// 		[nums[last], nums[last - 1]] = [nums[last - 1], nums[last]];
// 		return nums;
// 	}
// 	const map = [];
// 	while (last > 0 && nums[last - 1] > nums[last]) {
// 		map[nums[last]] = last;
// 		last--;
// 	}
// 	if (last === 0) return nums.reverse();
// 	let exchange = 0;
// 	for (let i = 0; i < map.length; i++) {
// 		if (i > nums[last - 1] && !Number.isNaN(map[i])) {
// 			exchange = map[i];
// 			break;
// 		}
// 	}
// 	[nums[exchange], nums[last - 1]] = [nums[last - 1], nums[exchange]];
// 	return (nums = nums.concat(nums.splice(last, nums.length).sort((a, b) => a - b)));
// };

export const nextPermutation = (nums) => {
	if (nums.length <= 1) return nums;
	let last = nums.length - 1,
		exchange = nums.length - 1;
	while (last > 0 && nums[last] <= nums[last - 1]) {
		last--;
	}
	if (last > 0) {
		while (nums[exchange] <= nums[last - 1]) {
			exchange--;
		}
		[nums[last - 1], nums[exchange]] = [nums[exchange], nums[last - 1]];
	}
	nums.splice(nums.length, 0, ...nums.splice(last, exchange + 1).reverse());
	return nums;
};
