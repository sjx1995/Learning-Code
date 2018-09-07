#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int num_1 = 0;
    int num_2 = 100;
    int answer;
    printf("Is it %d?\n", (int)((num_1 + num_2)/2.0));
    printf("If the number is bigger than %d, please enter 'b'.\n");
    printf("If the number is smaller than %d, please enter 's'.\n");
    printf("If the number is %d, please enter 'y'.\n");
    while ((answer = getchar()) != 'y') {
        if (answer == 'b') {
            num_1 = (int)((num_1 + num_2)/2.0);
        }
        else if (answer == 's') {
            num_2 = (int)((num_1 + num_2)/2.0);
        }
        else {
            printf("I can't understand.\n");
        }
        while (getchar() != '\n') {
            continue;
        }
        printf("Is it %d?\n", (int)((num_1 + num_2)/2.0));
        printf("If the number is bigger than %d, please enter 'b'.\n");
        printf("If the number is smaller than %d, please enter 's'.\n");
        printf("If the number is %d, please enter 'y'.\n");
    }
    printf("I got it right. It's %d.\n", (int)((num_1 + num_2)/2.0));
    system("PAUSE");
    return 0;
}