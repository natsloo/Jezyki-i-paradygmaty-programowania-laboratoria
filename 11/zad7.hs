sumOfSquares :: Integer -> Integer -> Integer
sumOfSquares a b = a * a + b * b


main :: IO ()
main = do
  print(sumOfSquares 7 1)
  print(sumOfSquares 5 9)