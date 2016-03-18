# _GitHub API Manipulation_

#### An interactive webpage using GitHub API  | March 18, 2016

#### By: Jared Beckler

## Description

This app uses a form to take user input and access GitHub's API to search for a username that matches said input. Then the app will access that username's repository names and descriptions to display for the user.

## Setup/Installation Requirements

1. Generate a "new token" (API key) from GitHub.
2. Open Terminal and clone into this repository: ```https://github.com/jaredbeckler/js-github-api```
3. Navigate to the project directory and create a file named ```.env```
4. Copy this code: ```exports.apiKey = "YOUR_API_KEY_GOES_IN_HERE";``` into the .env file and insert your API key.
5. Within the project directory run:<br>
       ```$ npm init ```<br>
       ```$ npm install ```<br>
       ```$ bower init ```<br>
       ```$ bower install ```<br>
       ```$ gulp build ```<br>
       ```$ gulp serve ```<br>
6. Your browser will automatically navigate to the app.

## Known Bugs

No display messages for usernames without any repositories.

## Support and contact details

If you have any issues, questions, ideas, or concerns contact me through GitHUb. If you would like to make a contribution to the code, feel free to do so and notify me by e-mail.

## Technologies Used

* JavaScript
* Google Maps API
* Bootstrap
* GIT
* NPM
* Node
* Bower
* Gulp
* SCSS


### License

Copyright (c) 2016  |  Jared Beckler  |  Epicodus  |  Portland, OR
