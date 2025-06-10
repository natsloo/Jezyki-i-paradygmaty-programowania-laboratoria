append :: [a] -> [a] -> [a]
append l m = l ++ m

member :: Eq a => a -> [a] -> Bool
member x [] = False
member x (first:rest) = x == first || member x rest

last :: [a] -> a
last [] = error "pusta lista"
last [x] = x
last (first:rest) = Main.last rest

delete :: Eq a => a -> [a] -> [a]
delete x [] = []
delete x (first:rest)
  | x == first = rest
  | otherwise = first : delete x  rest

main :: IO ()
main = do
  print(member 2 [1,2,3])
  print(delete 2 [1,2,2,3,4,5])
  print(delete 6 [1,2,3,4,5])
  print(append [1,2] [3,4])
  print(Main.last [1,2,2,3,4,5])

  