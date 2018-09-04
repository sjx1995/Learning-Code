//统计换行符、空格、其他字符数
#include <stdio.h>
int main(void) {
    char ch;
    int n_num = 0;
    int s_num = 0;
    int o_num = 0;
    const char STOP = '#';
    printf("Enter text:");
    while ((ch = getchar()) != STOP) {
        if (ch == '\n') {
            n_num++;
        }
        else if (ch == ' ') {
            s_num++;
        }
        else {
            o_num++;
        }
    }
    printf("Number of space: %d\nNumber of newline: %d\nNumber of other char: %d\n", s_num, n_num, o_num);
    return 0;
}