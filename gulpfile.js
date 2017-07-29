// dependencies
var gulp = require('gulp');
var childProcess = require('child_process');
var electron = require('electron').


gulp.task('run', function () { 
  childProcess.spawn(electron, ['--debug=5858', './app/app.js'], { stdio: 'inherit' }); 
});