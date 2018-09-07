#include <stdio.h>
#include <ctype.h>
#include <stdlib.h>

int main(void) {
    int ch;
    int ch_prve;
    int char_num = 0;
    int word_num = 0;
    while((ch = getchar()) != EOF) {
        if ((!(ispunct(ch))) && (ch != '\n') && (ch != ' ')) {
            char_num++;
        }
        else {
            if (isalpha(ch_prve)) {
                word_num++;
            }
        }
        ch_prve = ch;
    }
    printf("char:%d, word: %d, average: %f\n", char_num, word_num, (float)char_num/word_num);
    system("PAUSE\n");
    return 0;
}