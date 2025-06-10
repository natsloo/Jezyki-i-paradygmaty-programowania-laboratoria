filter :: (a -> Bool) -> [a] -> [a]
filter p [] = []
filter p (first:rest) 
  | p first = first : Main.filter p rest
  | otherwise = Main.filter p rest

main :: IO ()
main = do
  print(Main.filter (<=3) [3,2,1,3,2,4,5,6])
