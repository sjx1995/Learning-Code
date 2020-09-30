/*
 * @Author: Sunly
 * @Date: 2020-05-13 10:25:17
 * @LastEditTime: 2020-05-13 10:51:20
 * @LastEditors: Sunly
 * @Description: 557 反转字符串 https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @FilePath: \leetcode\src\0557 reverse words in a string III\main.js
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let n = s.split(' ')
  let r = n.map(i=>i.split('').reverse().join(''))
  return r.join(' ')
}
module.exports = reverseWords
