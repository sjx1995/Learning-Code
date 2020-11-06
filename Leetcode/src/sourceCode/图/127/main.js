/*
 * @Author: Sunly
 * @Date: 2020-11-05 12:21:18
 * @LastEditTime: 2020-11-05 15:00:23
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\图\127\main.js
 */
export const ladderLength = (beginWord, endWord, wordList) => {
	const wordSet = new Set(wordList);
	const queue = [[beginWord, 1]];

	while (queue.length) {
		const [curWord, level] = queue.shift();
		if (curWord === endWord) {
			return level;
		}
		for (let i = 0; i < curWord.length; i++) {
			for (let j = "a".charCodeAt(); j <= "z".charCodeAt(); j++) {
				const maybeNextWord = curWord.slice(0, i) + String.fromCharCode(j) + curWord.slice(i + 1);
				if (wordSet.has(maybeNextWord)) {
					queue.push([maybeNextWord, level + 1]);
					wordSet.delete(maybeNextWord);
				}
			}
		}
	}
	return 0;
};
