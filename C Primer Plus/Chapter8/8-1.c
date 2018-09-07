#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int char_num = 0;
    int ch;
    while ((ch = getchar()) != EOF) {
        char_num++;
        printf("%c number of char: %d\n", putchar(ch), char_num);
    }
    printf("The number of char: %d\n", char_num);
    system("PAUSE");
    return 0;
}