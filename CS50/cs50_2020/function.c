#include <stdio.h>
#include <cs50.h>

int sum(int a, int b);

int main(void)
{
    int a = get_int("Type the first number: \n");
    int b = get_int("Type the second number: \n");
    printf("Sum is: %i\n", sum(a, b));
}

int sum(int a, int b)
{
    return a + b;
}