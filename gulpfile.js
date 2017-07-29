// dependencies
var gulp = require('gulp');
var childProcess = require('child_process');
var electron = require('electron');


gulp.task('run', function () { 
  childProcess.spawn(electron, ['./app/app.js'], { stdio: 'inherit' }); 
});