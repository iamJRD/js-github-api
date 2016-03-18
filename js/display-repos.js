/*jshint esversion: 6 */
var apiKey = require('./../.env').apiKey;

var DisplayRepos = function(){

};

DisplayRepos.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&per_page=250').then(function(response){
    $('#inputtedUsername').text('You have entered the GitHub username, ' + username + '. Here are 250(max) of their repositories:');
    $('#results').text('');
// WANTED TO MAKE IT TO SHOW AN ERROR MESSAGE FOR USERNAMES WITH NO REPOS
    // if(response === []){
    //   $('#results').append('<li>This username doesn\'t have any repositories!</li>');
    // } else {
      for(var key of response){
        $('#results').append('<li><span class="repo-info">Repo Name:</span> ' + key.name + '</li>');
        $('#results').append('<ul><li><span class="repo-info">Repo Creation Date:</span> ' + moment(key.created_at).format('MMMM Do YYYY') + '</li>');
        if(key.description){
          $('#results').append('<ul><li><span class="repo-info">Repo Description:</span> ' + key.description + '</li>');
        }
        $('#results').append('</ul>');
      }
    // }
  }).fail(function(error){
    console.log("OH NOES! SOMETHING WENT TERRIBLY WRONG!");
    console.log(error.responseJSON.message);
  });
};

exports.DisplayRepos = DisplayRepos;
