onlyEven :: [Integer] -> [Integer]
onlyEven [] = []
onlyEven (first:rest)
  | (mod first 2) == 0 = first : onlyEven rest
  | otherwise = onlyEven rest
  
main :: IO ()
main = do
  print(onlyEven [1,2,3,4,5,6,7,8,9,10])