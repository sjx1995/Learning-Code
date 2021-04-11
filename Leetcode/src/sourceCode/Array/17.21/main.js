/*
 * @Author: Sunly
 * @Date: 2021-04-02 11:20:38
 * @LastEditTime: 2021-04-08 12:32:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\17.21\main.js
 */
const trap = height => {
	if (height.length <= 2) return 0;
	let leftMax = [height[0]];
	for (let i = 1; i < height.length; i++) {
		leftMax.push(Math.max(leftMax[i - 1], height[i]));
	}

	let rightMax = [height[height.length - 1]];
	for (let i = height.length - 2; i >= 0; i--) {
		rightMax.unshift(Math.max(height[i], rightMax[0]));
	}

	let totalWater = 0;
	for (let i = 0; i < height.length; i++) {
		totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
	}

	return totalWater;
};

const trap = height => {
	if (height.length <= 2) return 0;
	let totalWater = 0;
	let left = 0,
		right = height.length - 1;
	let leftMax = 0,
		rightMax = 0;
	while (left < right) {
		leftMax = Math.max(leftMax, height[left]);
		rightMax = Math.max(rightMax, height[right]);
		if (height[left] < height[right]) {
			totalWater += leftMax - height[left];
			left++;
		} else {
			totalWater += rightMax - height[right];
			right--;
		}
	}
	return totalWater;
};

const trap = height => {
	if (height.length <= 2) return 0;
	let totalWater = 0;
	let left = 0,
		right = height.length - 1;
	let leftMax = 0,
		rightMax = 0;
	while (left < right) {
		leftMax = Math.max(leftMax, height[left]);
		rightMax = Math.max(rightMax, height[right]);
		if (height[left] < height[right]) {
			totalWater += leftMax - height[left];
			left++;
		} else {
			totalWater += rightMax - height[right];
			right--;
		}
	}
	return totalWater;
};

const trap = height => {
	let ans = 0;
	const stack = [];
	for (let i = 0; i < height.length; i++) {
		while (stack.length && height[i] > height[stack[stack.length - 1]]) {
			const top = stack.pop();
			if (!stack.length) break;
			const left = stack[stack.length - 1];
			const curWidth = i - left - 1;
			const curHeight = Math.min(height[left], height[i]) - height[top];
			ans += curHeight * curWidth;
		}
		stack.push(i);
	}
	return ans;
};
