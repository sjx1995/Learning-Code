#include <stdio.h>
int main(void){
    int x;
    double num1, num2, result;
    printf("Enter two numbers: ");
    x = scanf("%lf %lf", &num1, &num2);
    while (x == 2){
        result = (num1 - num2) / (num1 * num2);
        printf("%.6lf\n", result);
        printf("Enter two numbers(q or NAN to quit): ");
        scanf("%lf %lf", &num1, &num2);
    }
    printf("bye!");
    return 0;
}