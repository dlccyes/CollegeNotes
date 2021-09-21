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
- capitalized variable for to-be-filled variable, put it in the left
- uncapitalized variable for variable, put it in the right
- `,` : AND
- `;` : OR

## list
```prlog
[X|Y]=[a,b,c,d,e]
%will return
%X=a
%Y=[b,c,d,e]
```
omit variable with `_`
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
- https://blog.bhavul.com/prolog-mind-blown/