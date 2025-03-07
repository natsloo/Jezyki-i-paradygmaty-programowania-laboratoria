#include <iostream>
using namespace std;

int main()
{
	unsigned int n = 20;
	long long silnia = 1;

	for (int i = n; i > 1; i--)
		silnia *= i;

	cout << n << "! = " << silnia << endl;

	return 0;
}