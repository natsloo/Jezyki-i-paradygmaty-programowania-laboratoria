(define (potega x n) 
    (if (= n 0)
        1
    (if (even? n)
        (* (potega x (/ n 2)) (potega x (/ n 2)))
        (* x (potega x (- n 1))))
    )
)
(display (potega 2 6))