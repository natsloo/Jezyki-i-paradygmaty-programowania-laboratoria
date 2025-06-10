doubleAll :: [Integer] -> [Integer]
doubleAll [] = []
doubleAll (first:rest) = first*2 : doubleAll rest

main :: IO ()
main = do
  print(doubleAll [1,2,3,4,5])