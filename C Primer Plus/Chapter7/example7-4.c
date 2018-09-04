//统计单词的程序
//1.程序要逐个字符读取输入，知道何时停止读取
//2.识别并计算字符、行数和单词
//3.暂时使用STOP表示某个不常用的字符(例如"|")作为输入结束的标记
//4.当STOP在行中，可以分析前一个字符，若不是换行符，则为特殊行
//5.使用getchar()进行输入，每次迭代要通过递增计数器进行计数
//6.如果输入字符是换行符，行数+1
//7.识别单词，把一个单词定义为一个不含空格的字符序列
//    <ctype.h>头文件中的函数isspace(c)，如果c为空白字符，则为真
//8.查找一个单词是否包含某个字符，可以在读取单词开始时设置一个标记值为1，单词读取结束时值设为0，当标记值从0变为1时，单词数+1
#include <ctype.h>          //为isspace()函数提供原型
#include <stdbool.h>        //为bool提供原型
#include <stdio.h>

#define STOP '|'
int main(void) {
    char c;                 //读入字符
    char prev;              //读入的前一个字符
    long n_chars = 0l;      //字符数
    int n_lines = 0;        //行数
    int n_words = 0;        //单词数
    int p_lines = 0;        //不完整行数
    bool inword = false;   //如果c在单词中，inword就为true
    printf("Enter text to be analyzed(| to terminate):");
    prev = '\n';            //用于识别完整的行
    while ((c = getchar()) != STOP){
        n_chars++;          //统计字符
        if (c == '\n') {
            n_lines++;      //统计行
        }
        if (!(isspace(c)) && !inword) {
            n_words++;      //统计单词数
            inword = true;
        }
        if (isspace(c) && inword) {
            inword = false;     //单词末尾设置inword为false，并开始准备读入新单词
        }
        prev = c;
    }
    if (prev != '\n') {
        p_lines++;
    }
    printf("characters = %ld, words = %d, lines = %d, partial lines = %d.", n_chars, n_words, n_lines, p_lines);
    return 0;
}

