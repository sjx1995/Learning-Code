//含参函数调用
#include <stdio.h>
//ANSI函数原型声明
void pound(int n);
int main(void){
    int times = 5;
    char ch = '!';
    float f = 6.0f;
    pound(times);
    //等于pound((int)ch);
    pound(ch);
    //等于pound((int)f);
    pound(f);
    return 0;
}
void pound(int n){
    while (n-- > 0){
        printf("#");
    }
    printf("\n");
}