#include <stdio.h>
#include <stdbool.h>

int main(void) {
    unsigned int num;
    unsigned int primer_num = 2;
    unsigned int test_num;
    bool IS_PRIMER_NUM = true;

    printf("Please enter a number greater than one:");
    scanf("%ud", &num);
    printf("The Primer number less than %u has: ", num);
    for ( ; primer_num <= num ; primer_num++) {
        IS_PRIMER_NUM = true;
        for (test_num = 2; test_num < primer_num; test_num++) {
            if (primer_num % test_num == 0) {
                IS_PRIMER_NUM = false;
                break;
            }
        }
        if (IS_PRIMER_NUM == true) {
            printf("%u ", primer_num);
        }
    }
    return 0;
}