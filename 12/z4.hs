func :: [(Int, Int, Int)]
func = [(i, j, i*j)| i<-[1..12], j<-[1..12]]


main :: IO ()
main = do
  print(func)