var apiKey = require('./../.env').apiKey;
// var getRepos = require('./../get-repos-interface.js').getRepos;

$(document).ready(function(event){
  $('#githubUsername').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#username').val("");
    console.log(username);
  });
});
