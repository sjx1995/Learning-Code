#include <stdio.h>
#include <stdlib.h>

char get_choice(void);
void compute(char m, float x, float y);
float get_float(void);

int main(void) {
    int ch;
    float num_1;
    float num_2;
    while ((ch = get_choice()) != 'q') {
        printf("Enter first number:\n");
        num_1 = get_float();
        printf("Enter second number:");
        num_2 = get_float();
        if ((ch == 'a') || (ch == 's') || (ch == 'm')) {
            compute(ch, num_1, num_2);
        } else if ((ch == 'd') && (num_2 != 0)) {
            compute(ch, num_1, num_2);
        } else if ((ch == 'd') && (num_2 == 0)) {
            while (num_2 == 0) {
                printf("Enter a number other than 0:");
                num_2 = get_float();
            }
            compute(ch, num_1, num_2);
        }
        while (getchar() != '\n') {
            continue;
        }
    }
    printf("Bye.");
    system("PAUSE");
    return 0;
}

char get_choice(void) {
    int ch;
    printf("Enter the operation of your choice:\n");
    printf("a. add           s. subtract\n");
    printf("m. multiply      d. divide\n");
    printf("q. quit\n");
    while ((ch != 'a') && (ch != 's') && (ch != 'm') && (ch != 'd') && (ch != 'q')) {
        printf("ERROR INPUT! ENTER AGAIN!\n");
        ch = getchar();
        while (getchar() != '\n') {
            continue;

        }
    }
    return ch;
}

void compute(char m, float x, float y) {
    switch (m) {
        case 'a':
            printf("%f + %f = %f\n", x, y, x+y);
            break;
        case 's':
            printf("%f - %f = %f\n", x, y, x-y);
            break;
        case 'm':
            printf("%f * %f = %f\n", x, y, x*y);
            break;
        case 'd':
            printf("%f / %f = %f\n", x, y, x/y);
            break;
    }
}

float get_float(void) {
    float x;
    while ((scanf("%f", &x)) != 1) {
        while (getchar() != '\n') {
            continue;
        }
        printf("The enter not an number.\n");
        printf("Please enter a number, such as 2.5, -1.78E8, or 3:");
    }
    return x;
}
