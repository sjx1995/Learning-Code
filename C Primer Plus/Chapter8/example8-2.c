//验证输入
//使用独立模块来验证输入和管理显示
#include <stdio.h>
#include <stdbool.h>
//验证输入是一个整数
long get_long(void);
//验证范围上下是否有效
bool bad_limits(long begin, long end, long low, long high);
//计算a、b之间整数的平方和
double sum_squares(long a, long b);
int main(void){
    const long MAX = +10000000L;
    const long MIN = -10000000L;
    long start;
    long stop;
    double answer;
    printf("Enter the limits(enter 0 for both limits to quit):\n");
    printf("Lower limit(greater 10000000):");
    start = get_long();
    printf("upper limit(less 10000000):");
    stop = get_long();
    while ((start != 0) && (stop != 0)) {
        if (bad_limits(start, stop, MIN, MAX)) {
            printf("Please again.\n");
        }
        else {
            answer = sum_squares(start, stop);
            printf("The sum of the squares of the integers from %ld to %ld is %g\n", start, stop, answer);
        }
        printf("Enter the limits (Enter 0 for both limits to quit):\n");
        printf("Lower limit(greater 10000000):");
        start = get_long();
        printf("upper limit(less 10000000):");
        stop = get_long();
    }
    printf("Done!\n");
    return 0;
}
long get_long(void) {
    long input;
    char ch;
    while (scanf("%ld", &input) != 1) {
        while ((ch = getchar()) != '\n') {
            putchar(ch);
        }
        printf(" is not an integer.\nPlease enter an integer value:");
    }
    return input;
}
bool bad_limits(long begin, long end, long low, long high) {
    bool not_good = false;
    if (begin > end) {
        printf("%ld isn't smaller than %ld\n", begin, end);
        not_good = true;
    }
    if ((begin < low) || (end < low)) {
        printf("Values must be %ld or greater\n", low);
        not_good = true;
    }
    if ((begin > high) || (end > high)) {
        printf("Values must be %ld or less\n", high);
        not_good = true;
    }
    return not_good;
}
double sum_squares(long a, long b) {
    double total = 0 ;
    long i;
    for (i = a; i <= b; i++) {
        total += (double)i * (double)i;
    }
    return total;
}