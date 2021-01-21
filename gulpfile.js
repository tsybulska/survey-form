const gulp = require('gulp')

const clean = require('./gulp/clean')
const serve = require('./gulp/serve')
const pug2html = require('./gulp/pug2html')
const styles = require('./gulp/styles')
const scripts = require('./gulp/scripts')
const fonts = require('./gulp/fonts')
const fontsStyle = require('./gulp/fontsStyle')
const img = require('./gulp/img')
const svgSprite = require('./gulp/svgSprite')
const copyDependencies = require('./gulp/copyDependencies')
const favicon = require('./gulp/favicon')
const favicon2html = require('./gulp/favicon2html')

const dev = gulp.parallel(pug2html, styles) // favicon, scripts, fonts, svgSprite, img

const build = gulp.series(clean, dev) // copyDependencies, favicon2html, fontsStyle

module.exports.default = gulp.series(build, serve)
