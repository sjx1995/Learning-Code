#include <stdio.h>

char get_choice(void);
char first_char(void);
void compute(char m, float x, float y);

int main(void) {
    int ch;
    float num_1;
    float num_2;
    while ((ch = get_choice()) != 'q') {
        printf("Enter first number:\n");
        while ((scanf("%f", &num_1)) != 1) {
            while (getchar() != '\n') {
                continue;
            }
            printf("The enter not an number.\n");
            printf("Please enter a number, such as 2.5, -1.78E8, or 3:");
        }
        printf("Enter second number:");
        while ((scanf("%f", &num_2)) != 1) {
            while (getchar() != '\n') {
                continue;
            }
            printf("The enter not an number.\n");
            printf("Please enter a number, such as 2.5, -1.78E8, or 3:");
        }
        if ((ch == 'a') || (ch == 's') || (ch == 'm')) {
            compute(ch, num_1, num_2);
        } else if ((ch == 'd') && (num_2 != 0)) {
            compute(ch, num_1, num_2);
        } else if ((ch == 'd') && (num_2 == 0)) {
            while (num_2 == 0) {
                printf("Enter a number other than 0:");
                scanf("%f", &num_2);
            }
            compute(ch, num_1, num_2);
        }
        while (getchar() != '\n') {
            continue;
        }
    }
    printf("Bye.");
    return 0;
}

char get_choice(void) {
    int ch;
    printf("Enter the operation of your choice:\n");
    printf("a. add           s. subtract\n");
    printf("m. multiply      d. divide\n");
    printf("q. quit\n");
    ch = getchar();
    printf("************ %c\n", ch);
    while ((ch != 'a') && (ch != 's') && (ch != 'm') && (ch != 'd') && (ch != 'q')) {
        printf("ERROR INPUT!\n");
        ch = first_char();
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

char first_char(void) {
    int ch;
    ch = getchar();
    while (ch != '\n') {
        continue;
    }
    return ch;
}



