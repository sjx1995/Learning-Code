//使用字符输入函数 getchar() 和字符输出函数 putchar() 函数
//更改输入，空格不变
#include <stdio.h>
#define SPACE ' '
int main(){
    char ch;
    //更清晰的写法，等同于注释掉的三条语句
    while ( (ch = getchar()) != '\n') {
//    ch = getchar();
//    while (ch != '\n') {
        if (ch != SPACE) {              //只替换字母：if(isalpha(ch))
            //字符是被当作整数存储的
            putchar(ch + 1);
        }
        else {
            putchar(SPACE);
        }
//        ch = getchar();
    }
    putchar(ch);
    return 0;
}