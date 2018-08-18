#include <stdio.h>
#include <string.h>     //提供strlen()函数的原型
#define DENSITY 62.4     //用C预处理器定义字符常量人体密度
int main(void){
    float weight, volume;
    int size, letters;
    char name[40];      //可容纳40个字符的数组
    printf("Hi! What's your name?\n");
    //使用数组存储字符串，数组地址前没有&
    //scanf()只读取字符串中第一个单词，遇到空格、制表符、换行符就停下
    scanf("%s", name);
    printf("%s, What's your weight in pounds?\n", name);
    scanf("%f", &weight);
    size = sizeof name;
    letters = strlen(name);     //使用strlen()获取字符串长度
    volume = weight / DENSITY;
    printf("Well, %s, your volume is %2.2f cubic feet.\n", name, volume);
    printf("Also, your firstname has %d letters,", letters);
    printf(" and we have %d bytes to store it.\n", size);
    return 0;
}
