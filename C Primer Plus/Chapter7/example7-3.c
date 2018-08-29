//使用嵌套if语句显示一个数的素数
#include <stdio.h>
//实现用bool代替_Bool
#include <stdbool.h>
int main(){
    //声明待测试数和可能的约数
    unsigned long num;
    unsigned long div;
    //素数标记
    bool isPrime;
    printf("Please enter an integer for analysis(enter q to quit):");
    while (scanf("%lu", &num) == 1) {
        //1既不是素数也不是合数
        if (num == 1) {
            isPrime = false;
            printf("%lu is neither primer nor composite.\n", num);
        }
        //输入不是不是1
        else {
            for (isPrime = true, div = 2; (div * div) <= num; div++) {
                if (num % div == 0) {
                    //num不是素数
                    isPrime = false;
                    if ((div * div) != num) {
                        printf("%lu is divisible by %lu and %lu\n", num, div, num/div);
                    }
                    else {
                        printf("%lu is divisible by %lu\n", num, div);
                    }
                }
            }
        }
        //num是素数
        if (isPrime == true) {
            printf("%lu is primer.\n", num);
        }
        printf("Please another integer for analysis(enter q to quit):");
    }
    printf("Bye!");
    return 0;
}