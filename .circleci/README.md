# CircleCI Config Example

This config for build and deploy Vue App to [Heroku](heroku.com) with using [CircleCI](https://circleci.com/).

More info in [docs](https://circleci.com/docs/2.0/deployment-integrations/#heroku).

## Instructions

1. First of all remove `.example` from `config.yml.example`.
2. Create app on Heroku.
3. Create SSH-key with `ssh-keygen -t rsa` and add keys to Heroku. (More info in [docs](https://devcenter.heroku.com/articles/keys)).
5. Add you repository project to CircleCI.
6. Add **SSH Permissions** to project setting on CircleCI. Set Host name `git.heroku.com`.
6. Add **Environment Variables** for you CircleCI project:
    * HEROKU_APP_NAME
    * HEROKU_API_KEY
    * CIRCLE_WORKING_DIRECTORY *(optional)*
    
Now, then you push you changes on GitHub, CircleCI will build this and deploy to Heroku automatically.
