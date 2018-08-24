#include <stdio.h>
int main(void){
    int year;
    double Daphne = 100.0;
    double Deirdre = 100.0;
    for (year = 1; Daphne >= Deirdre; year++) {
        Daphne = 100.0 * 0.1 * year + 100;
        Deirdre = Deirdre * 1.05;
//        printf("%d years ago, Daphne has $%lf and Deirdre has $%lf\n", year, Daphne, Deirdre);
    }
    printf("When %d years ago, Deirdre's interest more than Daphne's.\n");
    printf("Daphne's interest is $%lf.\n", Daphne);
    printf("Deirdre's interest is $%lf.", Deirdre);
    return 0;
}