#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

char get_first(void);
int main(void) {
    int test_char;
    test_char = get_first();
    printf("%c", test_char);
    return 0;
}
char get_first(void) {
    int ch;
    ch = getchar();
    while (isspace(ch)){
        ch = getchar();
    }
    while (getchar() != '\n') {
        continue;
    }
    return ch;
}