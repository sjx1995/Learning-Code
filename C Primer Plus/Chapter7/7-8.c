#include <stdio.h>
#include <stdbool.h>
#define SELECT_ONE 8.75
#define SELECT_TWO 9.33
#define SELECT_THREE 10.00
#define SELECT_FOUR 11.20

int main(void) {
    float total_wage;
    int working_time;
    int switch_num;
    bool in_to_while = true;

    while (in_to_while == true) {
        printf("*****************************************************************\n");
        printf("Enter the number corresponding to the desired pay rate or action:\n");
        printf("1) $8.75/hr                           2) $9.33/hr\n");
        printf("3) $10.00/hr                          4) $11.20/hr\n");
        printf("5) $quit\n");
        printf("*****************************************************************\n");
        scanf("%d", &switch_num);
        switch (switch_num) {
            case 1:
                printf("please enter your working time:");
                scanf("%d", &working_time);
                printf("Your total wage is $%.2f\n", (float)working_time * SELECT_ONE);
                break;
            case 2:
                printf("please enter your working time:");
                scanf("%d", &working_time);
                printf("Your total wage is $%.2f\n", (float)working_time * SELECT_TWO);
                break;
            case 3:
                printf("please enter your working time:");
                scanf("%d", &working_time);
                printf("Your total wage is $%.2f\n", (float)working_time * SELECT_THREE);
                break;
            case 4:
                printf("please enter your working time:");
                scanf("%d", &working_time);
                printf("Your total wage is $%.2f\n", (float)working_time * SELECT_FOUR);
                break;
            case 5:
                in_to_while = false;
                break;
            default:
                printf("ENTER ERROR! PLEASE AGAIN!\n");
                break;
        }
    }
    printf("Bye!\n");
    return 0;
}