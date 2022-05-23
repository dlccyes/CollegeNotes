---
layout: meth
parent: Software Development
---

# Vim

## my ~/.vimrc
`export TERM=xterm-256color` for color theme to take effect

```vim
"try
"    execute pathogen#infect()
"    filetype plugin indent on
"    syntax on
"
"    let g:vim_markdown_new_list_item_indent
"catch
"endtry

" vim-plug & plugins

" to show chinese
set fileencodings=utf-8,ucs-bom,gb18030,gbk,gb2312,cp936
set termencoding=utf-8
set encoding=utf-8

let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
    silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
    autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif
call plug#begin('~/.vim/plugged')
Plug 'plasticboy/vim-markdown'
Plug 'crusoexia/vim-monokai'
call plug#end()
syntax on

try
    execute "set <A-t>=\et"
    nnoremap <A-t> :color default<CR>
    execute "set <A-Y>=\ey"
    nnoremap <A-Y> :color monokai<CR>
    colorscheme monokai
catch
endtry

nnoremap <S-Up> :m-2<CR>
nnoremap <S-Down> :m+<CR>
inoremap <S-Up> <Esc>:m-2<CR>
inoremap <S-Down> <Esc>:m+<CR>
xnoremap <S-Up> :m-2<CR>gv
xnoremap <S-Down> :m'>+<CR>gv

" indent
func! Indent(ind)
  if &sol
    set nostartofline
  endif
  let vcol = virtcol('.')
  if a:ind
    norm! >>
    exe "norm!". (vcol + shiftwidth()) . '|'
  else
    norm! <<
    exe "norm!". (vcol - shiftwidth()) . '|'
  endif
endfunc
:set shiftwidth=4 ":set autoindent ">> <<
:set smartindent
:set tabstop=4 " tab indent size
:set expandtab
inoremap <S-Tab> <Esc>:call Indent(0)<CR>a
noremap <S-Tab> :call Indent(0)<CR>
nnoremap <Tab> :call Indent(1)<CR>
xnoremap <S-Tab> <gv
xnoremap <Tab> >gv

"line number
nnoremap <S-N> :set number!<CR>
set number!
"markdown enter indent
inoremap <C-\> <Esc>o-
"comment
inoremap <C-_> <Esc> :s/^/
nnoremap <C-_> :s/^/
xnoremap <C-_> :s/^/
"uncomment
inoremap <C-]> <Esc>I<Del><Esc>
nnoremap <C-]> I<Del><Esc>
xnoremap <C-]> :norm x<CR>
```

## syntax
## navigation
- page up/down
	- `ctrl+f` `ctrl+b`
- jump bracket of codes
	- `ctrl+[` `ctrl+]`


### go to character
in normal mode, type `fa` to go to the next a, `Fa` to go to previous a

### go to position
in normal mode, type `18l` to to the 18th character in your current line

### go to line
`:18` to go to line 18

  
## comment & uncomment
https://stackoverflow.com/a/15588798/15493213

### comment
1.  go to start of line
2.  ctrl+v (visual block)
3.  select
4.  shift + I
5.  enter # or whatever
6.  Esc → automatically inject the same thing to each line you select
    
### uncomment
1.  go to start of line
2.  ctrl+v (visual block)
3.  select
4.  d

## autocomplete
`ctrl-x +`
- `ctrl-n` → word completion
- `ctrl-l` → line completion


## commands
### toggle commands
`set commands!`

### ignore case
- `set ignorecase`
- `set smartcase` to ignore case at all lowercase but sensitive otherwise
	- need to have ignorecase on

## other tips
### open man page of current word
`shift+k`