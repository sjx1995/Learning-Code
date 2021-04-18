/*
 * @Author: Sunly
 * @Date: 2021-04-14 11:03:44
 * @LastEditTime: 2021-04-14 11:35:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Design\208\main.js
 */
/**
 * Define the Trie node
 */
var TrieNode = function () {
	this.next = {};
	this.isEnd = false;
};

/**
 * Initialize your data structure here.
 */
var Trie = function () {
	this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	if (!word) return;
	let node = this.root;
	for (let i = 0; i < word.length; i++) {
		if (!node.next[word[i]]) {
			node.next[word[i]] = new TrieNode();
		}
		node = node.next[word[i]];
	}
	node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	if (!word) return false;
	let node = this.root;
	for (let i = 0; i < word.length; i++) {
		if (!node.next[word[i]]) return false;
		node = node.next[word[i]];
	}
	return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	if (!prefix) return true;
	let node = this.root;
	for (let i = 0; i < prefix.length; i++) {
		if (!node.next[prefix[i]]) return false;
		node = node.next[prefix[i]];
	}
	return true;
};
