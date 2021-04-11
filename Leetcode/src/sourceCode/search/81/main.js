/*
 * @Author: Sunly
 * @Date: 2021-04-07 10:36:33
 * @LastEditTime: 2021-04-07 11:37:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\81\main.js
 */
const search = (nums, target) => {
	if (nums.length < 2) return nums.length > 0 && nums[0] === target;
	let breakIndex = nums.length - 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			breakIndex = i;
			break;
		}
	}
	let start, end;
	if (target >= nums[0] && target <= nums[breakIndex - 1]) {
		start = 0;
		end = breakIndex - 1;
	} else if (target >= nums[breakIndex] && target <= nums[nums.length - 1]) {
		start = breakIndex;
		end = nums.length - 1;
	} else {
		return false;
	}
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (target === nums[mid]) return true;
		else if (target > nums[mid]) start = mid + 1;
		else if (target < nums[mid]) end = mid - 1;
	}
	return false;
};

const search = (nums, target) => {
	if (nums.length < 2) return nums.length > 0 && nums[0] === target;
	let start = 0,
		end = nums.length - 1;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] === target) return true;
		if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
			start++;
			end--;
		} else if (nums[start] <= nums[mid]) {
			if (target >= nums[start] && target < nums[mid]) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		} else {
			if (target > nums[mid] && target <= nums[end]) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
	}
	return false;
};
