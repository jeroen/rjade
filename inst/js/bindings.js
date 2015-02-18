/* compile jade and assign to var */
function jade_compile(text, opts){
  global.fn = jade.compile(text, opts);
}

/* convenience fun for one time compile and render */
function jade_compile_and_render(text, opts, locals){
  var fn = jade.compile(text, opts)
  return fn(locals)
}
