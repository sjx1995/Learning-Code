#include <stdio.h>
#include <stdbool.h>
#define SELECT_ONE 8.75
#define SELECT_TWO 9.33
#define SELECT_THREE 10.00
#define SELECT_FOUR 11.20

char get_choice(void);
void get_wage(char m);
char get_first(void);

int main(void) {
    char switch_num;
    while ((switch_num = get_choice()) != 'q') {
        get_wage(switch_num);
        fflush(stdin);
    }
    printf("Bye!\n");
    return 0;
}

char get_choice(void) {
    int ch;
    printf("*****************************************************************\n");
    printf("Enter the number corresponding to the desired pay rate or action:\n");
    printf("a) $8.75/hr                           b) $9.33/hr\n");
    printf("c) $10.00/hr                          d) $11.20/hr\n");
    printf("q) $quit\n");
    printf("*****************************************************************\n");
    ch = getchar();
    while (((ch < 'a') || (ch > 'd')) && (ch != 'q')) {
        printf("ERROR INPUT! PLEASE TRY AGAIN!\n");
        ch = get_first();
    }
//    while (ch != 'n') {
//        continue;
//    }
    return ch;
}

void get_wage(char m) {
    int working_time;
    switch (m) {
        case 'a':
            printf("please enter your working time:");
            scanf("%d", &working_time);
            printf("Your total wage is $%.2f\n", (float)working_time * SELECT_ONE);
            break;
        case 'b':
            printf("please enter your working time:");
            scanf("%d", &working_time);
            printf("Your total wage is $%.2f\n", (float)working_time * SELECT_TWO);
            break;
        case 'c':
            printf("please enter your working time:");
            scanf("%d", &working_time);
            printf("Your total wage is $%.2f\n", (float)working_time * SELECT_THREE);
            break;
        case 'd':
            printf("please enter your working time:");
            scanf("%d", &working_time);
            printf("Your total wage is $%.2f\n", (float)working_time * SELECT_FOUR);
            break;
        default:
            printf("ENTER ERROR! PLEASE AGAIN!\n");
            break;
    }
}

char get_first(void) {
    int ch;
    ch = getchar();
    while (getchar() != '\n') {
        continue;
    }
    return ch;
}