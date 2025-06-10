lastDigit :: Integer -> Integer
lastDigit a = abs a `mod` 10


main :: IO ()
main = do
  print(lastDigit 71)
  print(lastDigit 59)
  print(lastDigit (-11))
  print(lastDigit 5)