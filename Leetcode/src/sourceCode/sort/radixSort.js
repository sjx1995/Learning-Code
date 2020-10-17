/*
 * @Author: Sunly
 * @Date: 2020-10-15 12:38:28
 * @LastEditTime: 2020-10-15 15:18:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\radixSort.js
 */

function radixSort(arr, maxDigit) {
	let unit = 10,
		base = 1;
	const buckets = [];
	for (let i = 0; i < maxDigit; i++, unit *= 10, base *= 10) {
		for (let j = 0; j < arr.length; j++) {
			let index = ~~((arr[j] % unit) / base);
			if (!buckets[index]) {
				buckets[index] = [];
			}
			buckets[index].push(arr[j]);
		}
		let arrIndex = 0;
		for (let i = 0; i < buckets.length; i++) {
			while (buckets[i] && buckets[i].length) {
				arr[arrIndex++] = buckets[i].shift();
			}
		}
	}
	console.log(arr);
	return arr;
}

let arr = [12, 56, 32, 125, 41, 0, 26, 85, 94, 126, 526, 87, 16, 95, 206];

radixSort(arr, 3);
