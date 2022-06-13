---
layout: meth
parent: Software Development
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

### space
- `\;`
- `\space`

### line break
- `\smallbreak`  
- `\bigbreak`

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

### hide link blue box
```
\usepackage[hidelinks]{hyperref}
```

```
\hypersetup{
    pdfborder = {0 0 0}
}
```

## table
```tex
\begin{center}
\begin{tabular}{|c|c|c|}
	\hline
	Firm 1 \textbackslash \; Firm 2 & innovate & don't innovate \\
	\hline
	innovate  & (5898, 8378)  & (6362, 7938)  \\
	\hline
	don't innovate  & (5618, 8922)  & (6050, 8450)  \\
	\hline
\end{tabular}
\end{center}
```
<https://www.overleaf.com/learn/latex/Tables>

## case

equals to different things in different conditions

```tex
\documentclass{article}
\usepackage{amsmath}

\begin{document}
  \begin{equation}
    X=
    \begin{cases}
      0, & \text{if}\ a=1 \\
      1, & \text{otherwise}
    \end{cases}
  \end{equation}
\end{document}
```

<https://tex.stackexchange.com/a/9068>

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