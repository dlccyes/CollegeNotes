---
title: page template
layout: meth
parent: Programming
---
# LaTeX
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

$\LaTeX$

## short syntax
- stylized letters
	- `\mathcal{}`
	- `\mathfrak{R}` $\mathfrak{R}$

## formatting
### line height
`\linespread{1.5}`  
put it before `\begin{document}`
https://tex.stackexchange.com/a/460857

### align center
`\begin{center} context \end{center}`

### link color
```tex
\hypersetup{
    colorlinks=true,
    % linkcolor=blue,
    % filecolor=magenta,      
    urlcolor=[HTML]{2c8eb5},
    % pdftitle={Overleaf Example},
    % pdfpagemode=FullScreen,
    }
```

## environment
### local
1. install a LaTeX distro
	- tex live
		- official https://www.tug.org/texlive/acquire-netinstall.html
		- https://www.ibm.com/docs/en/strategicsm/10.1.1?topic=analysis-installing-tex-live-windows
2. run with editor or something else
	- editors
		- https://tex.stackexchange.com/questions/339/latex-editors-ides
	- latex workshop (vscode)
	- xelatex
		- `xelatex XXX.tex` → generate compiled pdf

### online
- overleaf