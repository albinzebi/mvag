#include <stdio.h>

int tre(int x);
int main(void)
{
    int result = tre(5);
    printf("Rezultati eshte: %i\n", result);
}

int tre(int x)
{
    return x * 3;
}