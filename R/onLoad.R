#' @importFrom V8 new_context
ct <- NULL
.onLoad <- function(libname, pkgname){
  ct <<- V8::new_context();
  ct$source(system.file("js/jade.min.js", package = pkgname))
  ct$source(system.file("js/bindings.js", package = pkgname))
}
