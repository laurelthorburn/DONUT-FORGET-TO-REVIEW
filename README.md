# DONUT-FORGET-TO-REVIEW

<a name="descsection"></a>
## Description
We 💗 donuts and we 💗 reviews, so why note combine the two?! The purpose of this site is to allow users to upload photos of their donut adventures, along with reviewing their findings. Users are able to comment on other people's posts in order to share their insight and share in the donut loving journey.

Our site uses handlebars, nodeJS, multer, cloudinary and more in order to provide a seamless user experience.  The user is prompted to login or create an account in order to access posts and interact with the site.

We loved creating this site and we hope you love your time eating and reviewing donuts. Donut wait, go get yourself a donut!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
1. [ Description. ](#descsection)
2. [ User Story. ](#usersection)
3. [ Acceptance Criteria. ](#acceptancesection)
4. [ Installation. ](#installsection)
5. [ Usage. ](#usagesection)
6. [ License. ](#licensesection)
7. [ Contributing. ](#contribsection)
8. [ Tests. ](#testsection)
9. [ Questions. ](#questionssection)
10. [ Screenshots. ](#picsection)
11. [ Links. ](#linksection)
12. [ Resources/Credit. ](#creditsection)

<a name="usersection"></a>
## User Story
```
AS A donut lover,
I WANT a site where I can share my love for donuts with other donut enthusiasts by sharing reviews and photos
SO THAT I can grow my donut community.
```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
Given an unauthenticated user
WHEN I arrive at the website
THEN I am presented with two boxes, one shows slides of donuts and the other is a login box
IF I don't have an account, I can click sign up and be routed the a "Join Us" page
THEN I sign up by entering a unique username and password at least 8 characters and click create a new account
WHEN I have an account, I login with my authentication
IF I enter my login information, I am rerouted to the dashboard page, else I receive an error that my username or password is incorrect

Given an authenticated user
WHEN I select login, I am routed to the main feed/dashboard 
THEN I am presented with all the posts from all users
WHEN I click on add review 
THEN I am able to add a title, comment, rating, and upload an image and am rerouted to an updated feed that displays my review
WHEN I click on 'User Profile' in the nav bar 
THEN I am presented with all my posts that I can edit
WHEN I click 'read more' button on either the dashboard or user profile
THEN I am able to see more details about that post, including comments
WHEN I click add a comment
THEN I can enter a comment and on click I am rerouted to an updated page with my comment displayed at the bottom
WHEN I click the 'Welcome' page in the nav bar
THEN I am presented with a page that displays the website creators and their favorite donuts
WHEN I click logout or am idle on the site for too long
Then I am redirected to login page

```

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/DONUT-FORGET-TO-REVIEW.git
```
* Ensure you are in the current working directory
* Open terminal in working directory and type:
```
npm init
```
* Install dependencies (bcrypt, cloudinary, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, multer and sequelize) by opening the terminal (ctrl + j on windows) and running:
```
npm install
```
OR each of the following:
```
npm install bcrypt || npm install cloudinary || npm install connect-session-sequelize ||  npm install dotenv || npm install express || npm install express-handlebars || npm install express-session || npm install mysql2 || npm install multer || npm install sequelize
```

<a name="usagesection"></a>
## Usage
*  After following user installation guide above, open the database (db) folder in the integrated terminal and log onto mysql:
```
mysql -u root -p
```
* Enter mysql password and then SOURCE the schema file
```
SOURCE schema.sql
```
* Open root folder in the integrated terminal and type in the following order:
```
npm run seed
npm run dev (only works if nodemon is installed)
```
* Open your localhost:3001 
* Enjoy!

<a name="licensesection"></a>
## License
Copyright <2021>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  <a name="contribsection"></a>
## Contributing
  
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b your-branch-name-here
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

  <a name="testsection"></a>
## Tests
  No tests are available at this time.

  <a name="questionssection"></a>
## Questions?

  Questions/comments/concerns? Please send an email to:
  * Laurel: codinglaurel@gmail.com || [GitHub](https://github.com/laurelthorburn)
  * Mariana: marianahodniki1991@gmail.com || [GitHub](https://github.com/mhdavie)
  * Florencia: florenciawebdev@gmail.com || [GitHub](https://github.com/FlorenciaB94)

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of homepage](./public/media/screenshot1.png)
  ![Screenshot of dashboard](./public/media/screenshot2.png)
  ![Screenshot of about us](./public/media/screenshot3.png)

  <a name="linksection"></a>
  ## Links
  
  Deployed Heroku Site: https://donut-forget-to-review.herokuapp.com/

  Github Site: https://github.com/laurelthorburn/DONUT-FORGET-TO-REVIEW

Resources/Credit
* https://cloudinary.com/
* https://medium.com/wdstack/bootstrap-4-vertical-center-1211448a2eff
* https://stackoverflow.com/questions/35133573/import-external-file-content-into-handlebar
* https://stackoverflow.com/questions/43461718/bootstrap-4-center-just-two-cards-not-three-just-two
* https://stackoverflow.com/questions/64906432/has-the-user-liked-the-post-before-or-not-using-sequelize
* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto
* https://stackoverflow.com/questions/18739937/how-to-keep-footer-at-bottom-of-screen
* https://getcssscan.com/css-buttons-examples
* https://www.w3schools.com/howto/howto_js_rangeslider.asp
* https://stackoverflow.com/questions/53280738/join-in-sequelize
* https://github.com/samuelfox1/cloudinary-sandbox
* https://dev.to/alvarosaburido/use-custom-emoji-as-a-cursor-using-css-3j7
* https://codepen.io/joebocock/pen/ZEWoMPb
* https://www.npmjs.com/package/multer
* https://medium.com/@joeokpus/uploading-images-to-cloudinary-using-multer-and-expressjs-f0b9a4e14c54
* https://stackoverflow.com/questions/13645084/access-a-variable-outside-the-scope-of-a-handlebars-js-each-loop
