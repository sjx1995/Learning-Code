/*
 * @Author: Sunly
 * @Date: 2020-12-15 16:33:17
 * @LastEditTime: 2020-12-15 16:35:42
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\657\main.js
 */
export const judgeCircle = (moves) => {
	let horizon = 0,
		vertical = 0;
	for (let i = 0; i < moves.length; i++) {
		if (moves[i] === "U") vertical++;
		else if (moves[i] === "D") vertical--;
		else if (moves[i] === "R") horizon++;
		else if (moves[i] === "L") horizon--;
	}
	return horizon === 0 && vertical === 0;
};
