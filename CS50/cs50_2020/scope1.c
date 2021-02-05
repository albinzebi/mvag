#include <stdio.h>

void tre(void);
float global = 0.505;

int main(void)
{
    tre();
    printf("%f\n", global);

}

void tre(void)
{
    global *= 3;
}