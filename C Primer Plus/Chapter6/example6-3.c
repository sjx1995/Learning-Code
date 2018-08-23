//求序列 1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 ... 的和
#include <stdio.h>
int main(void){
    //项计数
    int t_ct;
    //power_of_2的值分别是1.0、2.0、4.0、8.0...
    double time, power_of_2;
    int limit;
    printf("Enter the number of terms you want:\n ");
    scanf("%d", &limit);
    for(time = 0, power_of_2 = 1, t_ct = 1; t_ct <= limit; t_ct++, power_of_2 *= 2.0){
        time += 1.0 / power_of_2;
        printf("time = %f when terms = %d.\n", time, t_ct);
    }
    return 0;
}