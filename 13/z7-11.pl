nalezy(X, [X|_]).
nalezy(X, [_|Tail]) :- nalezy(X, Tail).

dlugosc([], 0).
dlugosc([_|Tail], Dl) :-
    dlugosc(Tail, D),
    Dl is D+1.

suma([], 0).
suma([Head|Tail], Suma) :-
    suma(Tail, S),
    Suma is Head+S.

ostatni(X, [X]).
ostatni(X, [_|Tail]) :-
    ostatni(X, Tail).

odwroc([],[]).
odwroc([X|Tail],Odwr) :-
    odwroc(Tail, O),
    append(O, [X], Odwr).

% nalezy(5,[1,2,8,4]).
% dlugosc([1,54,8,2,5],Dl).
% suma([1,1,1,1,9], S).
% ostatni(5,[1,2,8,4]).
% odwroc([1,2,3],X).