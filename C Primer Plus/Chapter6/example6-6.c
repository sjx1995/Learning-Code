//使用循环读取、打印数组元素
#include <stdio.h>
#define SIZE 10
#define PAR 72
int main(void){
    int index, score[SIZE];
    int sum = 0;
    float average;
    printf("Enter %d golf scores:\n", SIZE);
    //遍历数组 输入数据
    for (index = 0; index < SIZE; index++) {
        scanf("%d", &score[index]);
    }
    printf("The scores read in are as follows:\n");
    //遍历数组 输出数组
    for (index = 0; index < SIZE; index++) {
        printf("%5d", score[index]);
    }
    printf("\n");
    //遍历数组 求和
    for (index = 0; index < SIZE; index++) {
        sum += score[index];
    }
    //求平均值
    average = (float)sum / SIZE;
    printf("Sum of scores = %d, average = %.2f\n", sum, average);
    printf("That's a handicap of %.0f.", average - PAR);
    return 0;
}