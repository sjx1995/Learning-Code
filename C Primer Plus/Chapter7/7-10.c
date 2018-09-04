#include <stdio.h>
#include <stdbool.h>
#define FIRST_PART 0.15
#define SECOND_PART 0.28
#define SINGLE 17850
#define HEAD_OF_HOUSEHOLD 23900
#define MARRIED 29750
#define DIVORCED 14875
int main(void) {
    int switch_num;
    bool IS_RIGHT_NUM = true;
    float income;
    while (IS_RIGHT_NUM) {
        printf("-----\n");
        printf("Enter the number of your situation:\n");
        printf("1.single\n2.head of household\n3.married\n4.divorced\n5.quit\n");
        printf("-----\n");
        scanf("%d", &switch_num);
        switch (switch_num) {
            case 1:
                printf("Enter your income:");
                scanf("%f", &income);
                if (income < SINGLE) {
                    printf("Your tax is $%f\n", income * FIRST_PART);
                } else {
                    printf("Your tax is $%f\n", income * FIRST_PART + (income - SINGLE) * SECOND_PART);
                }
                break;
            case 2:
                printf("Enter your income:");
                scanf("%f", &income);
                if (income < HEAD_OF_HOUSEHOLD) {
                    printf("Your tax is $%f\n", income * FIRST_PART);
                } else {
                    printf("Your tax is $%f\n", income * FIRST_PART + (income - HEAD_OF_HOUSEHOLD) * SECOND_PART);
                }
                break;
            case 3:
                printf("Enter your income:");
                scanf("%f", &income);
                if (income < MARRIED) {
                    printf("Your tax is $%f\n", income * FIRST_PART);
                } else {
                    printf("Your tax is $%f\n", income * FIRST_PART + (income - MARRIED) * SECOND_PART);
                }
                break;
            case 4:
                printf("Enter your income:");
                scanf("%f", &income);
                if (income < DIVORCED) {
                    printf("Your tax is $%f\n", income * FIRST_PART);
                } else {
                    printf("Your tax is $%f\n", income * FIRST_PART + (income - DIVORCED) * SECOND_PART);
                }
                break;
            case 5:
                IS_RIGHT_NUM = false;
                break;
            default:
                printf("Please enter right number!\n");
                break;
        }
    }
    printf("Bye!\n");
    return 0;
}