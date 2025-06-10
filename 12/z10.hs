sumOfDigits :: Integer -> Integer
sumOfDigits n
  | n < 0 = sumOfDigits(-n) 
  | n < 10 = n
  | otherwise = mod n 10 + sumOfDigits(div n 10) 
  
main :: IO ()
main = do
  print(sumOfDigits (-12345))
  print(sumOfDigits 5)