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
    int after_tax_wage;
    printf("Input your working time weekly:");
    scanf("%d", working_time);
    if (working_time <= 40) {
        total_wage = working_time * LESS_THAN_40;
    }
    else if (working_time > 40) {
        total_wage = (working_time - 40) * MORE_THAN_40 + 40 * LESS_THAN_40;
    }
}