#include <stdio.h>
#include <string.h>
#define PRAISE "You are an extraordinary being."
int main(void){
    char name[40];
    printf("What's your name?");
    scanf("%s", name);
    printf("Hello, %s. %s.\n", name, PRAISE);
    //name数组用size运算得出包含40个存储单元，但strlen()得出只用了x个(x:输入字符串长度)
    printf("Your name of %u letters occupies %u memory cells.\n", strlen(name), sizeof(name));
    //字符常量PRAISE用strlen()可以得出字符串长度(包括空格和标点)，但sizeof则包含字符串结尾不可见的空字符
    printf("The phrase of praise has %u letter ",strlen(PRAISE));
    printf("and occupies %u memory cells.\n", sizeof(PRAISE));
    return 0;
}