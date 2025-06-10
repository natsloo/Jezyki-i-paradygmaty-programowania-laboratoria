square :: Integer -> Integer
square x = x*x

main :: IO()
main = do 
  print(square 5)
  print(square 12)