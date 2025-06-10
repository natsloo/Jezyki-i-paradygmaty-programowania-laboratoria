silnia :: Integer -> Integer
silnia 0 = 1
silnia n = n * silnia(n-1)


main :: IO ()
main = do
  print(silnia 0)
  print(silnia 5)