/*
 * @Author: Sunly
 * @Date: 2020-11-25 18:16:06
 * @LastEditTime: 2020-11-25 20:02:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1640\main.js
 */
// export const canFormArray = (arr, pieces) => {
// 	arr.sort((a, b) => a - b);
// 	pieces.sort((a, b) => a[0] - b[0]);
// 	let arrIndex = 0;
// 	for (let i = 0; i < pieces.length; i++) {
// 		for (let j = 0; j < pieces[i].length; j++) {
// 			if (pieces[i][j] !== arr[arrIndex]) return false;
// 			arrIndex++;
// 		}
// 	}
// 	return true;
// 	// const tempArr = [];
// 	// pieces.forEach((item) => tempArr.push(...item));
// 	// if (tempArr.length === arr.length) {
// 	// 	for (let i = 0; i < arr.length; i++) {
// 	// 		if (arr[i] !== tempArr[i]) return false;
// 	// 	}
// 	// 	return true;
// 	// } else {
// 	// 	return false;
// 	// }
// };

// export const canFormArray=(arr, pieces)=>{
//   let arrIndex=0
//   while(pieces.length&&arrIndex<arr.length){
//     for(let i=0;i<pieces.length;i++){
//       if(arr[arrIndex]===pieces[i][0]){

//       }
//     }
//   }
// }

export const canFormArray_1 = (arr, pieces) => {
	const map = new Map();
	pieces.forEach((item) => map.set(item[0], item));
	for (let i = 0; i < arr.length; ) {
		if (!map.has(arr[i])) return false;
		const piece = map.get(arr[i]);
		for (let j = 0; j < piece.length; j++, i++) {
			if (piece[j] !== arr[i]) return false;
		}
	}
	return true;
};

export const canFormArray = (arr, pieces) => {
	const arrToStr = arr.toString() + ",";
	for (const piece of pieces) {
		if (!arrToStr.includes(piece.toString() + ",")) return false;
	}
	return true;
};
