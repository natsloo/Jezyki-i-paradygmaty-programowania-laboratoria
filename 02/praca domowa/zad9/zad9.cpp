#include <iostream>
#include <chrono>
#include <vector>

void fn(std::vector<int> arr) {}

void fn2(std::vector<int> &arr) {}


int main()
{
    std::vector<int> arr;
    arr.resize(100'000'000);
    auto start = std::chrono::high_resolution_clock::now();
    fn(arr);
    auto stop = std::chrono::high_resolution_clock::now();
    auto difference = std::chrono::duration_cast<std::chrono::milliseconds>(stop - start);
    std::cout << "fn time: " << difference.count() << " ms\n";
    start = std::chrono::high_resolution_clock::now();
    fn2(arr);
    stop = std::chrono::high_resolution_clock::now();
    difference = std::chrono::duration_cast<std::chrono::milliseconds>(stop - start);
    std::cout << "fn2 time: " << difference.count() << " ms\n";
}


//output:
//fn time : 812 ms
//fn2 time : 0 ms
