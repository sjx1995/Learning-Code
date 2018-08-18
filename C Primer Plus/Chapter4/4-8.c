#include <stdio.h>
#define GALLON_TO_L 3.785
#define MILE_TO_KM 1.609
int main(void){
    float mile, gallon;
    printf("Enter fuel consumption(gallon) and milage(mile):");
    scanf("%f %f", &gallon, &mile);
    printf("1 GALLON of gasoline for %.1f MILES.\n", mile/gallon);
    printf("100 KM with %.1f L of gasoline.", (gallon*GALLON_TO_L*100)/(mile*MILE_TO_KM));
    return 0;
}