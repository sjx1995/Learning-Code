// (space) askii码 32
// ~(波浪号) askii码 126
#include <stdio.h>

int main(void) {
    int ch;
    int i = 0;
    while ((ch = getchar()) != EOF) {
        if ((ch >= 32) && (ch <= 126)) {
            printf("%c(%d)  ", ch, ch);
        }
        else if (ch == 9) {
            printf("\\t(%d)", ch);
        }
        else if (ch == 10) {
            printf("\\n(%d)", ch);
        }
        else if ((ch < 32) && (ch != 9) && (ch != 10)) {
            printf("^%c(%d)", ch+64, ch);
        }
        i++;
        if (i == 10) {
            printf("\n");
        }
    }
    return 0;
}