reverseList :: [a] -> [a]
reverseList x = rev x []


rev :: [a] -> [a] -> [a]
rev [] y = y
rev (first:rest) y = rev rest (first:y)


main :: IO ()
main = do
  print(reverseList[3,2,1])