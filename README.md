# DONUT-FORGET-TO-REVIEW

<a name="descsection"></a>
## Description
Donut review site. Coming soon... donut be impatient.

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
I WANT a site where I can share my love for donuts with other donut enthusiasts by sharing reviews and photos, and filter through existing posts,
SO THAT I can grow my donut community.
```

<a name="acceptancesection"></a>
## Acceptance Criteria
```
Given as an unauthenticated user
WHEN I arrive at the website
THEN I am presented with two boxes, one shows slides of donuts and the other is a login box
WHEN I don't have an account, I click "Join us"
THEN I sign up for a username and password and click create a new account
WHEN I have an account, I fill up the boxes with my authentication and click log in


Given as an authenticated user
WHEN I select login, I land to the main feed 
THEN I am presented all post from all users
THEN I am presented with a page that displays the website creators and their favorite donuts
WHEN I click on add review 
WHEN I click on WELCOME 
THEN I can create a donut review with title, description, rating and upload a picture
WHEN I click on PROFILE 
THEN I am presented with all my posts that I can update or delete
WHEN I click logout 
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
* Install dependencies (bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, mysql2, and sequelize) by opening the terminal (ctrl + j on windows) and running:
```
npm install
```
OR each of the following:
```
npm install bcrypt || npm install connect-session-sequelize ||  npm install dotenv || npm install express || npm install express-handlebars || npm install express-session || npm install mysql2 || npm install sequelize
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
git checkout -b yourname-branch
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
  * Florencia: || [GitHub](https://github.com/FlorenciaB94)

  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of homepage](./public/media/screenshot2.png)
  ![Screenshot of logging into blog](./public/media/screenshot1.png)
  ![Screenshot of dashboard](./public/media/screenshot3.png)

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