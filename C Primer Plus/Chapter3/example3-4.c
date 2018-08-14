#include <stdio.h>
int main(void){
    unsigned int un = 3000000000;
    short end = 200;
    long big = 65537;
    long long verybig = 12345678908642;
    //无符号的3000000000和有符号的-1294967296在内存中表示相同，当待打印的值大于有符号的最大值时，就会发生这种情况
    printf("un = %u and not %d\n",un,un);
    //传参时，编译器把short类型转换成int类型
    printf("end = %hd and %d\n",end,end);
    printf("big = %ld and not %hd\n",big,big);
    printf("verybig = %lld and not %ld\n",verybig,verybig);
    return 0;
}