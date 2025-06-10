split :: Ord a => a -> [a] -> ([a],[a])
split a [] = ([],[])
split x (first:rest)
  | first < x = (first:less,more)
  | first > x = (less,first:more)
  | otherwise = (less,more)
  where (less,more) = split x rest
  
main :: IO ()
main = do
  print(split 7 [1,2,3,4,5,6,7,8,9,10])
  print(split "f" ["a","b","c","d","e","f","g","h","i","j"])