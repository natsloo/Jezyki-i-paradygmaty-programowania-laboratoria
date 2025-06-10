rownanie :: Float -> Float -> Float -> (Float,Float)
rownanie a b c = 
  if delta >= 0 
    then ((-b - sqrt delta)/(2*a), (-b + sqrt delta)/(2*a))
    else error "delta ujemna"
  where delta = b*b - 4*a*c
  
rownanie2 :: Float -> Float -> Float -> (Float,Float)
rownanie2 a b c  
  | delta >= 0 = ((-b - sqrt delta)/(2*a), (-b + sqrt delta)/(2*a))
  | otherwise = error "delta ujemna"
  where delta = b*b - 4*a*c
  
main :: IO()
main = do 
  putStr "pierwsza funkcja\n"
  print(rownanie 1 2 (-3))
  print(rownanie 1 5 6)
  print(rownanie 1 12 35)
  print(rownanie 1 (-3) (-10))
  print(rownanie 2 8 (-154))
  print(rownanie 1 2 1)
  putStr "druga funkcja\n"
  print(rownanie2 1 2 (-3))
  print(rownanie2 1 5 6)
  print(rownanie2 1 12 35)
  print(rownanie2 1 (-3) (-10))
  print(rownanie2 2 8 (-154))
  print(rownanie2 1 2 1)