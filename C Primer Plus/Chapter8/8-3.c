#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int ch;
    int upper_num = 0;
    int lower_num = 0;
    while ((ch = getchar()) != EOF) {
        if (islower(ch)) {
            lower_num++;
        }
        else if (isupper(ch)) {
            upper_num++;
        }
    }
    printf("Number of Upperchar: %d\n", upper_num);
    printf("Number of Lowerchar: %d\n", lower_num);
    system("Pause");
    return 0;
}