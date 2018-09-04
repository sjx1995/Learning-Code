//程序读取替换
#include <stdio.h>
int main(void) {
    char ch;
    int replace_num = 0;
    const char STOP = '#';

    printf("Please enter:");
    while ((ch = getchar()) != STOP) {
        if (ch == '.') {
            putchar('!');
            replace_num++;
        }
        else if (ch == '!') {
            //连续输出两个'!'
            putchar(ch);
            putchar(ch);
            replace_num++;
        }
        else {
            putchar(ch);
        }
    }
    printf("Number of replace:%d", replace_num);
    return 0;
}