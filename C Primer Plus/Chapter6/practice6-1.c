#include <stdio.h>
int fun1(int a);
int fun2(int b);
int fun3(int c);
int fun4(int d);
int fun5(int e);
int main(void){
    int quack = 2;
    fun1(quack);        // 2 + 5 = 7
    quack = 2;
    fun2(quack);        // 2 * 10 = 20
    quack = 2;
    fun3(quack);        // 2 - 6 = -4
    quack = 2;
    fun4(quack);        // 2 / 8 = 0
    quack = 2;
    fun5(quack);        // 2 % 3 = 2
    return 0;
}
int fun1(int a){
    a += 5;
    printf("%d\n", a);
}
int fun2(int b){
    b *= 10;
    printf("%d\n", b);
}
int fun3(int c){
    c -= 6;
    printf("%d\n", c);
}
int fun4(int d){
    d /= 8;
    printf("%d\n", d);
}
int fun5(int e){
    e %= 3;
    printf("%d\n", e);
}