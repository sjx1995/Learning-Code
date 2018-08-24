// 倒序打印输入
#include <stdio.h>
int main(void){
    //初始化0， 防止存储字符数据出错
    int num_arr = 0;
    int i = 0;
    char ch[255];
    printf("Enter a sentence: ");
    scanf("%c", &num_arr);
    // ch读取刀换行符结束
    while (num_arr<255 && num_arr!='\n'){
        ch[i++] = num_arr;
        scanf("%c", &num_arr);
    }
    //数组下标 = 位置数-1
    i--;
    while (i>=0) {
        printf("%c", ch[i]);
        i--;
    }
    return 0;
}