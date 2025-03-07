function potega(x, n) {
  if (n == 0)
    return 1

  if (n % 2 == 0) {
    return potega (x, n/2) * potega (x, n/2)
  }
  else return x * potega (x, n-1)
}
console.log (potega(2, 1))

