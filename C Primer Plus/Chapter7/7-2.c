//每显示8个字母及其ASCII码后换行
#include <stdio.h>
int main(void) {
    char ch;
    const char STOP = '#';

    int ch_num;
    printf("Please enter text:");
    while ((ch = getchar()) != STOP) {
        if (ch == '\n') {
            continue;
        }
        ch_num++;
        if (ch_num % 8 == 0) {
            printf("\n");
        }
        printf("%c:%-10d", ch, ch);
    }
    return 0;
}