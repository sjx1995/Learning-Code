//100美元 5%优惠
//<=5磅     6.5美元
//5-20磅    14美元
//>20磅     14美元 + 105美元/磅
//显示售价、订购重量、订购的蔬菜费用、订单总费用、折扣、运费包装费、费用总额
#include <stdbool.h>
#include <stdio.h>
#define VEGETABLE_A 2.05
#define VEGETABLE_B 1.15
#define VEGETABLE_C 1.09
#define OFFER_PRICE 100
#define OFFER 0.05
#define WEIGHT_1 5
#define WEIGHT_2 20
#define FARE_1 6.5
#define FARE_2 14
#define FARE_3 0.5

int main(void) {
    bool is_loop = true;
    float weight_input = 0.0;
    float weight_a = 0.0;
    float weight_b = 0.0;
    float weight_c = 0.0;
    float price_a = 0.0;
    float price_b = 0.0;
    float price_c = 0.0;
    float weight_total = 0.0;
    float price = 0.0;
    float price_total = 0.0;
    float price_offer = 0.0;
    float price_fare = 0.0;
    char ch;
    while (is_loop) {
        printf("*********************************\n");
        printf("Switch vegetable name:\n");
        printf("a.artichoke    b.beet    c.carrot\n");
        printf("q.quit and output the bill\n");
        printf("*********************************\n");
        scanf("%c", &ch);
        switch (ch) {
            case 'a':
                printf("Enter weight of artichoke:");
                scanf("%f", &weight_input);
                price = weight_input * VEGETABLE_A;
                price_a += price;
                weight_a += weight_input;
                break;
            case 'b':
                printf("Enter weight of beef:");
                scanf("%f", &weight_input);
                price = weight_input * VEGETABLE_B;
                price_b += price;
                weight_b += weight_input;
                break;
            case 'c':
                printf("Enter weight of carrot:");
                scanf("%f", &weight_input);
                price = weight_input * VEGETABLE_C;
                price_c += price;
                weight_c += weight_input;
                break;
            case 'q':
                is_loop = false;
                break;
            default:
                printf("ERROR INPUT! PLEASE ENTER AGAIN!\n");
                break;
        }
        fflush (stdin);
        //总重
        weight_total += weight_input;
        weight_input = 0;
        //总价
        price_total += price;
    }
    //优惠
    if (price > OFFER_PRICE) {
        price_offer += price * OFFER;
    }
    //运费
    if (weight_total <= WEIGHT_1) {
        price_fare += FARE_1;
        price += FARE_1;
    }
    else if ((weight_total > WEIGHT_1) && (weight_total <= WEIGHT_2)) {
        price_fare += FARE_2;
        price += FARE_2;
    }
    else if (weight_total > WEIGHT_2) {
        price_fare += (FARE_2 + (weight_total - WEIGHT_2) * FARE_3);
        price += (FARE_2 + (weight_total - WEIGHT_2) * FARE_3);
    }
    printf("******** price of vegetable *********\n");
    printf("Per pound of artichoke: $%.2f\n", VEGETABLE_A);
    printf("Per pound of beef: $%.2f\n", VEGETABLE_B);
    printf("Per pound of carrot: $%.2f\n", VEGETABLE_C);
    printf("******* Purchase information ********\n");
    printf("Artichoke: %.2f pound(s)\n", weight_a);
    printf("Beef: %.2f pound(s)\n", weight_b);
    printf("Carrot: %.2f pound(s)\n", weight_c);
    printf("********* Cost of vegetable *********\n");
    printf("Pay $%.2f for artichoke\n", price_a);
    printf("Pay $%.2f for beef\n", price_b);
    printf("Pay $%.2f for carrot\n", price_c);
    printf("********* Total order cost **********\n");
    printf("Total order cost: $%.2f\n", price_total);
    printf("******** Total order weight *********\n");
    printf("Total order weight: %.2f pound(s)\n", weight_total);
    printf("************** Offer ****************\n");
    printf("Offer: $%.2f\n", price_offer);
    printf("*** Shipping and packaging coasts ***\n");
    printf("Shipping and packaging coasts: $%.2f\n", price_fare);
    printf("************ Total coast ************\n");
    printf("Total coast: $%.2f\n", price);
    printf("**************** END ****************\n");
    return 0;
}