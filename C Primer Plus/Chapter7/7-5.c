#include <stdio.h>
int main(void) {
    char ch;
    int replace_num = 0;
    const char STOP = '#';

    printf("Enter text(# to quit):");
    while ((ch = getchar()) != STOP) {
        switch (ch) {
            case '.':
                putchar('!');
                replace_num++;
                break;
            case '!':
                putchar('!');
                putchar('!');
                replace_num++;
                break;
            default:
                putchar(ch);
        }
    }
    printf("Number of replace: %d", replace_num);
    return 0;
}