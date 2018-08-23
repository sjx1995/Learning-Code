//嵌套循环
#include <stdio.h>
#define ROW 6
#define CHARS 10
int main(void){
    int row;
    char ch;
    //外层嵌套，循环6次，每次循环执行一次内层嵌套和printf()函数
    for (row = 0; row < ROW; row++){
        //内层嵌套，循环10次
        for (ch = 'A'; ch < ('A' + CHARS); ch++){
            printf("%c ", ch);
        }
        printf("\n");
    }
    printf("---\n");
    //通过外层循环控制内层循环
    const int ROWS_1 = 6;
    const int CHARS_1 = 6;
    int row_1;
    char ch_1;
    for (row_1 = 0; row_1 < ROWS_1; row_1++) {
        for (ch_1 = ('A' + row_1); ch_1 < ('A' + ROWS_1); ch_1++){
            printf("%c ", ch_1);
        }
        printf("\n");
    }
    return 0;
}