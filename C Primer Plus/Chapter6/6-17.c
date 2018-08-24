#include <stdio.h>
int main(void){
    int year;
    double bonus = 1000000.0;
    for (year = 1; bonus > 0; year++) {
        bonus = bonus * 1.08;
        bonus = bonus - 100000;
//        printf("%d have $%lf\n", year, bonus);
    }
    printf("%d years ago, Chuckie Lucky took all his money.", year);
    return 0;
}