# rjade

##### *A Clean, Whitespace-Sensitive Template Language for Writing HTML*

[![Build Status](https://travis-ci.org/jeroenooms/rjade.svg?branch=master)](https://travis-ci.org/jeroenooms/rjade)
[![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/jeroenooms/rjade?branch=master&svg=true)](https://ci.appveyor.com/project/jeroenooms/rjade)
[![Coverage Status](https://codecov.io/github/jeroenooms/rjade/coverage.svg?branch=master)](https://codecov.io/github/jeroenooms/rjade?branch=master)
[![CRAN_Status_Badge](http://www.r-pkg.org/badges/version/rjade)](http://cran.r-project.org/package=rjade)
[![CRAN RStudio mirror downloads](http://cranlogs.r-pkg.org/badges/rjade)](http://cran.r-project.org/web/packages/rjade/index.html)
[![Github Stars](https://img.shields.io/github/stars/jeroenooms/rjade.svg?style=social&label=Github)](https://github.com/jeroenooms/rjade)

> Jade is a high performance template engine heavily influenced by
  Haml and implemented with JavaScript for node and browsers.
  
## Documentation

- Vignette: [Jade: A clean, whitespace-sensitive template language for writing HTML](https://cran.r-project.org/web/packages/rjade/vignettes/intro.html)

## Hello World

Example from http://jade-lang.com

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

To install on Linux have a look at [V8 installation instructions](https://github.com/jeroenooms/v8#installation).
