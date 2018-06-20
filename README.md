# AngularFakebook

A fake social network.

# App overview

- The app is basically composed of 3 components (`status`, `feed` and `friends`) and 2 services (`user-post` and `user`).
- It uses Google's material design component library to give the application a nice, polished look.
- The tests for now are very basic, just checking if the components were correctly rendered. I would need a lot more time in order to dig deeper into the topic.

## Components

- `status`: a form containing an input and a button which enable the user to update his status. Upon updating, the new status message will be shown in the feed.
- `feed`: this is where all friend activity is displayed.
- `friends`: a friends list

## Services

- `user-post`: holds a list of all the posts currently being displayed in the feed. It updates the list when a new status message is submitted through the `status` component.
- `user`: holds a list of all the users, which are shown in the `friends` component.

# Running locally

- Node `9.5.0` or up
- Npm `6.1.0` or up
- Angular 6 CLI installed globally (`$ npm install -g @angular/cli`)
- If all dependencies are satisfied just go to your terminal and run the `ng serve --open` command
- LIVE VERSION hosted on Heroku can be found [here](https://angular-fakebook.herokuapp.com/).
