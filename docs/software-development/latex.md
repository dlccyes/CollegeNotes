---
layout: meth
parent: Software Development
---
# LaTeX

$\LaTeX$

## Environment

In local

1. install a LaTeX distro
2. run with an IDE or something else

### Install LaTeX distro

#### Mac

Install mactex which installs texlive

```
brew install --cask mactex-no-gui
sudo tlmgr update --self && sudo tlmgr update --all
```

Add texlive's binary directory to path

```
export PATH=/usr/local/texlive/2023/bin/universal-darwin:$PATH
```

check what's in `/usr/local/texlive` yourself

#### Others

Install texlive

- official <https://www.tug.org/texlive/acquire-netinstall.html>
- <https://www.ibm.com/docs/en/strategicsm/10.1.1?topic=analysis-installing-tex-live-windows>

### Run on VsCode

1. Install LaTeX Workshop extension
2. command palette: `LaTeX Workshop: View LaTeX PDF File`

### Run with other things

- editors
	- <https://tex.stackexchange.com/questions/339/latex-editors-ides>
- xelatex
	- `xelatex XXX.tex` → generate compiled pdf

### Online - Overleaf

[[#Overleaf]]

Simplest solution.

## Symbols

Draw here and you'll know

<http://detexify.kirelabs.org/classify.html>

### vertical bar

`\bigg\rvert` -> $\bigg\rvert$

See <https://tex.stackexchange.com/a/40162>

## Character style

- fancy
	- `\mathcal{}` $\mathcal{k}$
	- `\mathfrak{R}` $\mathfrak{R}$
- normal
	- `\mathrm{}` $\mathrm{k}$
		- for multi-letter variable [ref](https://tex.stackexchange.com/a/482988)

## Modularization

Modularize your files! See [Management in a large project | Overleaf](https://www.overleaf.com/learn/latex/Management_in_a_large_project)

## Create a package

A package defines your styles, commands, etc.

In your `xxx.sty`, put this at the top

```
\ProvidesPackage{<package_name}
```

## Use a package

To use a package, whether an external or internal one

```
\usepackage{<package_name>}
```

## Import contents

The imported file should not have `\begin{}document`

Various type of importing

- `\include`
	- insert contents in the new page
- `\input`
	- insert contents

Check the [offical example](https://www.overleaf.com/project/635005addee2f35584f56fb6)

You still need the `\documentclass` at the top of each final file (not needed in the imported file)

## formatting

### Text Coloring

```tex
{\color{red}Score: 100}
```

### line height

`\linespread{1.5}`  
put it before `\begin{document}`
https://tex.stackexchange.com/a/460857

### space

- `\`
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

## brackets

`$\langle x \rangle$` -> $\langle x \rangle$

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

## Chinese

```tex
\usepackage{fontspec}
\usepackage{xeCJK}

\setCJKmainfont{Noto Serif CJK SC}
\setCJKmonofont{Noto Serif CJK SC}
```

See <https://mamenotes.com/latex_xecjk/>

## Figure

Use pdf or eps for best quality.

```tex
\begin{figure}[t!]
\centerline{\includegraphics[width=90mm]{fig/user_sat_m.pdf}}
\caption{User satisfaction ratio with different numbers of edge servers.}
\label{fig:6}
\end{figure}
```

### Make 2 column wide in 2 column format

```tex
\begin{figure*}
\end{figure*}
```

### Make subfigures side by side

Adjust the number in `\begin{subfigure}[t]{0.3\linewidth}` depending on how many figures you have.

```latex
\begin{figure*}[t!]
    \centering
    \begin{subfigure}[t]{0.3\linewidth}
        \centering
        \includegraphics[width=\linewidth]{fig/sys_util_vs_N.eps}
        \caption{System utility}
        \label{fig:sys_util_n}
    \end{subfigure}
    \begin{subfigure}[t]{0.3\linewidth}
        \centering
        \includegraphics[width=\linewidth]{fig/avg_sp_pro_vs_N.eps}
        \caption{Average SP profit}
        \label{fig:avg_sp_pro_n}
    \end{subfigure}
    \begin{subfigure}[t]{0.3\linewidth}
        \centering
        \includegraphics[width=\linewidth]{fig/avg_user_util_vs_N.eps}
        \caption{Average user utility}
        \label{fig:avg_user_util_n}
    \end{subfigure}
    \caption{Performance with different numbers of SPs in computer-based simulation.}
    \label{fig:sys_pro_n}
\end{figure*}
```


## Theorem, Definition, Proof

```tex
\usepackage{amsthm}
\newtheorem{theorem}{Theorem}
\newtheorem{definition}{Definition}
```

```tex
\begin{definition}
	def
\end{definition}

\begin{theorem}
	theorem
\end{theorem}

\begin{proof}
something
\end{proof}
```

## Algorithm

Comparison of different packages: <https://tex.stackexchange.com/a/230789>

Doc: <https://en.wikibooks.org/wiki/LaTeX/Algorithms>

```tex
\usepackage{algorithm, algpseudocode, algorithmicx, tabularx}

% create custom commands
\algnewcommand\Output{\State \textbf{Output: }}
\algnewcommand\Initialize{\State \textbf{Initialization: }}
\algnewcommand\Indent{\State \hspace*{\algorithmicindent}}
\algnewcommand\Continue{\State \textbf{continue}}

\makeatletter
\algnewcommand{\multiline}[1]{ %
  \begin{tabularx}{\dimexpr\linewidth-\ALG@thistlm}[t]{@{}X@{}}
    #1
  \end{tabularx}
}
\makeatother

\begin{algorithm}
\caption{Coalition} \label{algo:1}
\begin{algorithmic}[1] % number for line number start
    \Initialize{}
        \Indent{Set the positions of servers and SPs.}
        \Indent{Set the users for each SP}
    \Repeat
        \State \multiline{ %
        long long long long long long long long long long long long long long long long long long}
        \State Something
        \ForAll{something}
            \If{$\mathcal{F}_{m_1, k_1}=\mathcal{F}_{m_2, k_2}$}
                \Continue
            \EndIf
            \If{no}
                \State haha
            \EndIf
        \EndFor
        \State Delete empty coalitions
    \Until{No SP has the incentive to change its strategy}
    \Output{The stable coalition formation result.}
\end{algorithmic}
\end{algorithm}
```

## packages

### mdframed

Enclose your contents with a box

**formatting**

```tex
\begin{mdframed}[backgroundcolor=red!5!white, fontcolor=red]
\end{mdframed}
```


## Overleaf

### Generate .dvi file

Change compiler to `latex` in `Menu`

![[latex-1.png]]

Add a file `latexmkrc` with content `END { system ('dvips -Ppdf output.dvi'); }` in the project root

![[latex-2.png]]

Compile your latex file and then download `output.dvi` in `Logs and output files` -> `Other logs and files`

![[latex-3.png]]

References

- [Create .dvi and .ps file with Overleaf | StackOverflow](https://tex.stackexchange.com/a/506962)
- [View generated files | Overleaf](https://www.overleaf.com/learn/how-to/View_generated_files)