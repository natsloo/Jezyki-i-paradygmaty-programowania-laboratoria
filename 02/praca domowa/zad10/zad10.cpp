#include <iostream>

int x = 2;
int y = 1;

void f() {
	x = x + 1;
	y = y + 2;
	std::cout << "f: " << x << " " << y << "\n";
}

void g() {
	int x = 1;
	x = x + 2;
	y = y + 1;
	std::cout << "g: " << x << " " << y << "\n";
	f();
}

int main() {
	g();
	f();
}