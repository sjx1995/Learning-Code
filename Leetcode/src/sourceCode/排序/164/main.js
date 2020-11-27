/*
 * @Author: Sunly
 * @Date: 2020-11-26 10:12:45
 * @LastEditTime: 2020-11-26 18:15:50
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\164\main.js
 */
export const maximumGap_1 = (nums) => {
	nums.sort((a, b) => a - b);
	let maxGap = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		maxGap = Math.max(nums[i + 1] - nums[i], maxGap);
	}
	return maxGap;
};

export const maximumGap = (nums) => {
	const maxDigit = Math.max(...nums).toString().length;
	for (let i = 0, unit = 10, base = 1; i < maxDigit; i++, unit *= 10, base *= 10) {
		const buckets = [];
		nums.forEach((item) => {
			const index = ~~((item % unit) / base);
			buckets[index] ? buckets[index].push(item) : (buckets[index] = [item]);
		});
		let numsIndex = 0;
		buckets.forEach((item) => {
			while (item.length) nums[numsIndex++] = item.shift();
		});
	}
	let maxGap = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		maxGap = Math.max(maxGap, nums[i + 1] - nums[i]);
	}
	return maxGap;
};

export const maximumGap = (nums) => {
	const n = nums.length;
	if (n < 2) return 0;
	const minVal = Math.min(...nums);
	const maxVal = Math.max(...nums);
	const d = Math.max(1, Math.floor(maxVal - minVal) / (n - 1));
	const bucketSize = Math.floor((maxVal - minVal) / d) + 1;

	const bucket = new Array(bucketSize).fill(0).map(() => []);
	for (let i = 0; i < n; i++) {
		const idx = Math.floor((nums[i] - minVal) / d);
		if (bucket[idx].length) {
			bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);
			bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);
		} else {
			bucket[idx].push([nums[i]], [nums[i]]);
		}
	}

	let ret = 0;
	let prev = 0;
	for (let i = 0; i < bucketSize; i++) {
		if (bucket[i].length) {
			ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);
			prev = i;
		}
	}
	return ret;
};
