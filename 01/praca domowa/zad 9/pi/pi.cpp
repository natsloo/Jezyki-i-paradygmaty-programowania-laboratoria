#include <iostream>
#include <cmath>

int main()
{
	std::cout.precision(16);
	double pi = 0;
	long long k = 0;
	while (true) {
		pi += pow(-1, k) / (2 * k + 1);
		if (k % 1000000 == 0) {
			std::cout << "Pi = " << 4 * pi << " dla k = " << k << "\n";
			if (k == 6500000000) return 0;
		}
		k++;
	}
}

// Wybrałam C++, ponieważ najlepiej znam ten język, czuję się w nim komfortowo,
// a dodatkowo jest po prostu szybki - dokładność do kilku cyfr po przecinku
// osiąga się w zasadzie od razu.