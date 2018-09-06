//重复输入，直到文件结尾
//getchar()函数读取到文件结尾会返回一个特殊的值：EOF
//scanf()函数检测到文件结尾也会返回EOF
#include <stdio.h>
int main(void) {
    int ch;
    while((ch = getchar()) != EOF) {
        putchar(ch);
    }
    return 0;
}