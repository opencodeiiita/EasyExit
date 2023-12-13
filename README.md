
# EasyExit (Girl's-Only-Repository)
We welcome all the **female contibutors**!!! EasyExit is a full stack web development project which aims to simplify the process of issuing, approval and verification of GatePass for college students.

## What problem EasyExit solves?
Experience campus convenience in style with EasyExit—where swift issue approval and gatepass verification meet effortlessly! 
EasyExit revolutionizes the entire experience by seamlessly simplifying the complex stages involved in the issuance, approval, and meticulous verification of Gate Passes, ensuring a swift and hassle-free process for college students.


## Tech Stack 
* Nodejs (v16.18.0)
* ExpressJS
* MongoDB
* React.JS

## Design Template
[Open Figma File ](https://www.figma.com/file/40sZkuDVFl2WAeVIOLhi8T/EasyExit-UI-Design?type=design&node-id=0%3A1&mode=design&t=mybCFAT2OKooqYUz-1)

  
## Dependencies
You need npm/yarn installed in your local machine in order to run this app.

## Installation

```bash
  npm install 
  npm start
```
## How To Setup 
* Make sure your machine is having internet connection.
* Fork the repository.
* Open shell (which ever your OS support) on your PC.
* Change drive to the location where you want your project to be copied.
* Clone it to your local setup by using command git clone ```<repo link>```.
* Once cloned, Run the following command in the root directory of the project ```npm install```.
* Make sure you have required enviornment variables saved in the ```.env``` file in the root of the project.
* After the process is completed, run the command ```npm start```.
* The website will be live on ```localhost:3000```.


## Reference Links 
- [Download and install the latest version of Git.](https://git-scm.com/downloads)
- [Set your username in Git.](https://help.github.com/articles/setting-your-username-in-git)
- [Set your commit email address in Git.](https://help.github.com/articles/setting-your-commit-email-address-in-git)
- [Setup Nodejs](https://nodejs.org/en/blog/release/v16.18.1/)
- [Docs for passport-local](https://www.passportjs.org/packages/passport-local/)
- [Docs for passport-jwt](http://www.passportjs.org/packages/passport-jwt/)

## Project Structure - Backend

```
/   
    |-- src/
        |-- config/			
            |-- db.config.js                 #Contains configuration for mongoDB NoSQL Database
        |    
        |-- controllers/
            |-- auth.controller.js           #Contains http request controllers for user authentication
            |-- student.controller.js        #Contains http request controllers for student methods
            |-- warden.controller.js         #Contains http request controllers for warden methods
            |-- guard.controller.js          #Contains http request controllers for guard methods
        |
        |-- middlewares/                     
            |-- student.middleware.js        #Contains student Authentication middleware
            |-- warden.middleware.js         #Contains warden Authentication middleware
            |-- guard.middleware.js          #Contains guard Authentication middleware
        |
        |-- models/
            |-- user.model.js                #Contains user model
            |-- form.model.js                #Contains form model
        |
        |-- routes/  
            |-- user.routes.js               #Contains all user routes
            |-- form.routes.js               #Contains all form routes
        |-- public/                          #Contains all the static files
|
|-- app.js

```
  
  

## Claim an issue
Comment on the issue. In case of no activity on the issue even after 2 days, the issue will be reassigned. If you have difficulty approaching the issue, feel free to ask on our discord channel.
## Communication 
Whether you are working on a new feature or facing a doubt please feel free to ask us on our [discord](https://discord.gg/D9999YTkS8) channel. We will be happy to help you out.

## Guidelines 
Please help us follow the best practice to make it easy for the reviewer as well as the contributor. We want to focus on the code quality more than on managing pull request ethics.

- People before code: If any of the following rules are violated, the pull-requests must not be rejected. This is to create an easy and joyful onboarding process for new programmers and first-time contributors.

- Single commit per pull request and name the commit as something meaningful, example: Adding <-your-name-> in students/mentors section.

- Reference the issue numbers in the commit message if it resolves an open issue. Follow the [PR Template](https://github.com/Oshankiii12/EasyExit/blob/main/.github/pull_request_template.md) Issue: < ISSUE NUMBER >

- Provide the link to live gh-pages from your forked repository or relevant screenshot for easier review.

- Pull Request older than 3 days with no response from the contributor shall be marked closed.

- Do not make PR which is not related to any issues. You can create an issue and solve it once we approve them.

- Avoid duplicate PRs, if need be comment on the older PR with the PR number of the follow-up (new PR) and close the obsolete PR yourself.

- Be polite: Be polite to other community members.
