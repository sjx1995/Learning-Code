#include <stdio.h>
int main(void) {
    int num_1 = 0;
    int num_2 = 100;
    int answer;
        printf("Is it %d?\n", (int)((num_1 + num_2)/2.0));
        printf("If the number is bigger than %d, please enter 'b'.\n");
        printf("If the number is smaller than %d, please enter 's'.\n");
        printf("If the number is %d, please enter 'y'.\n");
        while (answer = getchar()) {
            if (answer == 'y'){
                printf("Nice! I got it tight!\n");
                break;
            }
            else if (answer = 'b') {
                num_1 = ((int)((num_1 + num_2)/2.0));
            }
            else if (answer = 's') {
                num_2 = ((int)((num_1 + num_2)/2.0));
            }
            else {
                printf("Sorry, I can't understand.\n");
            }
            printf("Is it %d?\n", (int)((num_1 + num_2)/2.0));
            printf("If the number is bigger than %d, please enter 'b'.\n");
            printf("If the number is smaller than %d, please enter 's'.\n");
            printf("If the number is %d, please enter 'y'.\n");
        }
    return 0;
}