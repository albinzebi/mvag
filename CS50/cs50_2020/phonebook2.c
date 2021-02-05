#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    // open file
    FILE *file = fopen("phonebook.csv", "a");
    
    // get string from user
    char *name = get_string("Name: ");
    char *number = get_string("Nummber: ");
    
    // print (write) strings to file
    fprintf(file, "%s,%s\n", name, number);
    
    // close file
    fclose(file);
}