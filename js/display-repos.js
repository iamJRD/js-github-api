/*jshint esversion: 6 */
var apiKey = require('./../.env').apiKey;

var DisplayRepos = function(){

};

DisplayRepos.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    $('#results').text('');
    for(var key of response){
      $('#results').append('<li>Repo Name: ' + key.name + '</li>');
      if(key.description){
        $('#results').append('<ul><li>Repo Description: ' + key.description + '</li></ul>');
      }
    }
  }).fail(function(error){
    console.log("OH NOES! SOMETHING WENT TERRIBLY WRONG!");
    console.log(error.responseJSON.message);
  });
};

exports.DisplayRepos = DisplayRepos;
