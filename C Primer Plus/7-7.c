#include <stdio.h>
#define LESS_THAN_40 1000
#define MORE_THAN_40 1000*1.5
#define TAX_LESS_THAN_300 0.15
#define TAX_BETWEEN_300_450 0.2
#define TAX_MORE_THAN_450 0.25

int main(void) {
    int working_time;
    int total_wage;
    int tax;
    printf("Input your working time weekly:");
    scanf("%d", &working_time);
    //工资总额
    if (working_time <= 40) {
        total_wage = working_time * LESS_THAN_40;
    }
    else if (working_time > 40) {
        total_wage = (working_time - 40) * MORE_THAN_40 + 40 * LESS_THAN_40;
    }
    //税金
    if (total_wage <= 300) {
        tax = total_wage * TAX_LESS_THAN_300;
    }
    else if (total_wage > 300 && total_wage <= 450) {
        tax = (total_wage - 300) * TAX_BETWEEN_300_450 + 300 * TAX_LESS_THAN_300;
    }
    else if (total_wage > 450) {
        tax = (total_wage - 450) * TAX_MORE_THAN_450 + 150 * TAX_BETWEEN_300_450 + 300 * TAX_LESS_THAN_300;
    }
    //输出
    printf("Your total wage is %d\nYour tax is %d\nYour after-tax wage is %d", total_wage, tax, total_wage-tax);
    return 0;
}