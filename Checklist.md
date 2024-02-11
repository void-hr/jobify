
## Checklist 1

- [x] create a repo on github and clone it on your local machine
- [x]  initialize the project with npm
- [x]  add gitignore
- [x]  create a node server
- [x]  add .env file to add your host, port and database credentials
- [x]  push your code to github with message “boilerplate server setup”
- [x]  create a health api (role of health api is to check that your server is up and running)
- [x]  connect database with you local express server(Note: you need to create database on https://www.mongodb.com/atlas/database)
- [x]  push your code to github with message “added database config and initialzation”
- [x]  understanding the project requirements
- [x]  design schema model for database https://www.youtube.com/watch?v=h4A0-53Olm4
- [x]  push your code to github with message “added database models”
- [x]  create register route
- [x]  check for the fields that are required for register a user
- [x]  make sure that no duplicate user should exists based on the email field
- [x]  once the user is registered then show a toast user registered successfully
- [x]  create login route
- [x]  check for user
- [x]  return jwt token if the user is successfully login
- [x]  push your code to github with message “added login/register routes and jwt tokenization”
- [ ]  adding error handler middleware (”Something went wrong! Please try after some time.”) https://www.youtube.com/watch?v=deZP3Z33DJ4
- [ ]  push your code to github with message “added error handler middleware”


## Checklist-2

- [x]  you need to create a protected route to create a job post with all the required fields
- [x]  you need to add a middleware that checks for user authorization for protected routes
- [x]  make sure that all the fields in the body of api request so be validated with proper checks in the backend
- [x]  on successful job post return a success message

## Checklist-3

- [x]  you need to create a api to edit the job post
- [ ]  you need to add recruiter name as response to the login/register api
- [x]  you need to create a api to list all the jobs with filters based on skills and job title

## Checklist-4

- [x]  you need to create a api to show the detail description of job post
- [x]  you need to implement register/login page
- [x]  once the user have logged in or registered for the first time(NOTE: while registering for the first time. On successful registration user should be automatically logged in)
- [x]  After the login and registration process, store the token returned by the api and name of the logged in user in the localstorage

## Checklist-5

- [x]  you need to implement add job description page
- [x]  you need to implement view job description page
- [x]  you need to implement view job description page with edit button

## Checklist-6

- [x]  you need to implement home page to list all the jobs
- [ ]  you need to implement filters on the home page
