#include <iostream>
#include <cmath>
using namespace std;
int countDigit(int n)
{
    int count = 0;
    while (n)
    {
        count++;
        n /= 10;
    }
    return count;
}
bool armstrong(int num, int digit)
{
    int n = num;
    int rem, ans = 0;
    while (n)
    {
        rem = n % 10;
        n /= 10;
        ans = ans + pow(rem, digit);
    }
         if (ans==num){
        return 1;}
        
        else{
        return 0;
        }
    
}
int main()
{
    int num;
    cout << "Enter the number:";
    cin >> num;
    int digit = countDigit(num);
    cout << armstrong(num, digit);
}