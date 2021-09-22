## install
`sudo apt-get install swi-prolog`

## basics
- each line end with `.`
- script file with suffix `.pl`
- type `swipl` to launch console
- if you have `temp.pl`, type `[temp].` to load it
	- after that you can start doing things about the file
- comment with `%`
- `:-` means $\leftarrow$
- variable
	- capitalized
	- put it in the left
- terms
	- uncapitalized
	- put it in the right
- `,` : AND
- `;` : OR
- anonymous variable with `_`
- equality
	- `\=` : unequal
- to make rules symmetric
	- don't mix facts & rules or you might end up in infinite loop
		-     love(Alice,Bob)
			    love(X,Y) :- love(Y,X)
	- instead, separate them
		-     llove(Alice,Bob)
		      love(X,Y) :- llove(X,Y);llove(Y,X)
  - print
	  - `write('something')`
  - if then
	  - `prin(X) :- X is 2 -> write('aaa')`
	  - use `;` to else

## list
```prlog
[X|Y]=[a,b,c,d,e]
%will return
%X=a
%Y=[b,c,d,e]
```
anonymous variable with `_`
```
[_,X|_]=[a,b,c,d,e]
%will return
%X=b
```

## examples
in  file `temp.pl`
```prlog
big(bear).             % Tell Prolog that a bear is big
big(elephant).         % Tell Prolog an elephant is big
small(cat).            % Tell Prolog a cat is small

brown(bear).           % Tell Prolog a bear is brown
black(cat).            % Tell Prolog a cat is black
gray(elephant).        % Tell Prolog an elephant is gray

dark(X) :- black(X).   % Tell Prolog that anything is dark IF it is black
dark(X) :- brown(X).   % Tell Prolog that anything is dark IF it is brown
```
in console (line by line)
1. `[temp].`
2. `dark(X).`
	- will return
	-     X = cat;
		    X = bear.
		- need to press `;` to output next result

## resources
- blog
	- https://blog.bhavul.com/prolog-mind-blown/
- nice comprehensive slides
	- http://www.let.rug.nl/bos/lpn//lpnpage.php?pageid=teaching
		- list view http://www.let.rug.nl/bos/lpn/slides/official/
- 99 problems & solutions
	- https://www.ic.unicamp.br/~meidanis/courses/mc336/2009s2/prolog/problemas/
- 