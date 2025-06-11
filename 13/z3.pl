oblicz_nwd(X,Y,Nwd) :-
    X > 0,
    Y > 0,
    nwd_loop(X,Y,Nwd).

nwd_loop(X,X,X).

nwd_loop(X,Y,Nwd) :-
    X > Y,
    X1 is X - Y,
    nwd_loop(X1, Y, Nwd).

nwd_loop(X,Y,Nwd) :-
    Y > X,
    Y1 is Y - X,
    nwd_loop(X, Y1, Nwd).
