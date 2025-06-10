minmax :: Integer -> Integer -> Integer -> Integer
minmax a b c = maximum [a, b, c] - minimum [a, b, c]


main :: IO ()
main = do
  print(minmax 7 1 4)
  print(minmax 5 0 9)