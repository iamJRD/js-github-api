var DisplayRepos = require('./../js/display-repos.js').DisplayRepos;
var app = new DisplayRepos();

var UserInput = function(){

};

UserInput.prototype.gather = function(){
  $('#githubUsername').on('submit', function(event){
    event.preventDefault();
    var username = $('#username').val();
    app.getRepos(username);
  });
};

exports.UserInput = UserInput;
