# rjade

> A Clean, Whitespace-Sensitive Template Language for Writing HTML*

[![CRAN_Status_Badge](http://www.r-pkg.org/badges/version/rjade)](https://cran.r-project.org/package=rjade)
[![CRAN RStudio mirror downloads](http://cranlogs.r-pkg.org/badges/rjade)](https://cran.r-project.org/web/packages/rjade/index.html)

Jade is a high performance template engine heavily influenced by
Haml and implemented with JavaScript for node and browsers.
  
## Documentation

- Vignette: [Jade: A clean, whitespace-sensitive template language for writing HTML](https://cran.r-project.org/web/packages/rjade/vignettes/intro.html)

## Hello World

Example from https://jade-lang.com

```r
# Example from http://jade-lang.com
text <- readLines(system.file("examples/test.jade", package = "rjade"))

# Compile and render seperately
tpl <- jade_compile(text, pretty = TRUE)
tpl()
tpl(youAreUsingJade = TRUE)

# Slightly faster for one-time rendering
jade_render(text, pretty = TRUE)
jade_render(text, pretty = TRUE, locals = list(youAreUsingJade = TRUE))
```

## Installation

Binary packages for __OS-X__ or __Windows__ can be installed directly from CRAN:

```r
install.packages("rjade")
```

To install on Linux have a look at [V8 installation instructions](https://github.com/jeroen/v8#installation).
