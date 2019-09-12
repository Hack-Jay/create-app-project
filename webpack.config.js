module.exports = function(env, argv) {
  return argv.mode === 'production' ?
    require('./build/webpack.prod') :
    require('./build/webpack.dev')
}