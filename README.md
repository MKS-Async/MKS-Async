# Future Insight


## Introduction
As a high school student, choosing a college to attend is a critical life decision. Enter Future Insight. This web app is a platform for high school students to connect with college students. Graduating high school students can request and set up meetings with college students from schools they are considering and get inside information on the school and major. College students, on the other hand, can offer tours of their schools for some extra income and pass down valuable information to high school students.


#Team
1. Dana Li
1. Sergey Potashnikov
1. Tim Shiu
1. Cindy Sun 


# MEAN stack
1. Angular, Bootstrap
1. Node/Express
1. Mongo
1. Travis-ci, mocha/chai
1. Heroku, Grunt


## References
1. https://www.npmjs.com/package/angular-material
1. https://docs.travis-ci.com/user/languages/javascript-with-nodejs/


## Git Workflow Example
0. github fork
1. git pull --rebase upstream master
2. git checkout -b <branch>
3. git pull --rebase upstream master
4. git push origin <branch>

Check graph - 

git log --graph --oneline --decorate


##Git Commit Message Template
Commit Message Template - type(scope): subject/description

**Allowed type values:**

Type       |  Description
-----------|----------------------------------------------------------------------
feat       | New feature for the user, not a new feature for build script
fix        | Bug fix for the user, not a fix to a build script
docs       | Changes to the documentation
style      | Formatting, missing semi colons, etc; no production code change
refactor   | Refactoring production code, eg. renaming a variable
test       | Adding missing tests, refactoring tests; no production code change
chore      | Updating grunt tasks etc; no production code change

**Allowed scope values:**

Scope      |  Description
-----------|----------------------------------------------------------------------
init       |  Package.json or other initialization files
runner     |  Grunt files or compilers
web-client |  Front end, user interface
web-server |  Backe end, server endpoints
db         |  Database files
etc        |  Others that may not belong in the above categories

**Sample commit messages:**

git commit -m "feat(web-client): add new signup page"

git commit -m "fix(web-server): server connecting to heroku correctly"


## Database Information
- http://dbdesigner.net/designer/schema/45235
- Picture of the schema in server/models.png
- Json-server, localhost (mongod), and mLab 
