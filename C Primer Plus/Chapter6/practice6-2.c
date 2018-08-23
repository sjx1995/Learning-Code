#include <stdio.h>
int main(void){
    int value;
    //value的值：36，18，9，4，2，1
    for (value = 36; value > 0; value/=2) {
        printf("%3d", value);
    }
    //若为double类型
    //value的值：36，18，9，4.5，2.25...直到跳出
//    int num = 1;
    double a;
    for (a = 36; a >  0; a/=2) {
        printf("%.20lf", a);
//        num++;
//        printf(" %d\n", num);
    }
    return 0;
}
