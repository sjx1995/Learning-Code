#include <stdio.h>
int main(void) {
    char ch;
    char ch_prev = 'a';
    int ei_num =0;
    const char STOP = '#';

    printf("Please enter(# to quit):");
    while ((ch = getchar()) != STOP) {
        if (ch == 'i') {
            if (ch_prev == 'e') {
                ei_num++;
            }
        }
        ch_prev = ch;
    }
    printf("Number of 'ei':%d", ei_num);
    return 0;
}