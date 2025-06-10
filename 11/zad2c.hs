average :: Float -> Float -> Float
average x y = (x+y)/2

main :: IO()
main = do 
  print(average 5 6)
  print(average 12 3)