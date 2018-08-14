//输入字符，输出对应ASCII码
//c语言中，char字符是int类型存储的
#include <stdio.h>
int main(void){
    char ch;
    printf("Please enter a character.\n");
    scanf("%c",&ch);
    printf("The code for %c is %d.\n",ch,ch);
    return 0;
}