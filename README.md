## tbsa168Y USMC Reunsion Web Application

This application is for a military reunion.

It uses:

- Grunt for task management
- Express for backend
- Angular and ui-router for its frontend
- Sass/CSS for styling
- HTML for markup
- Mongodb for storing data
- Masonry for grid layouts
- Angular animation
- Mailgun for emails

__Note:__ While everything here should work fine with your computer, there may be some setup required for MongoDB. Try running the app without doing any separate installation, but if it doesn't work, try the following: If you're running Mac OSX, then you can follow [these instructions](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) for getting Mongo setup. If you're running a Linux server (like Vagrant or Nitrous), you can make a run at [these instructions](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/).

### Cloning and Installation

To get started working with the application, clone the repo into a new directory.

```bash
$ git clone https://github.com/jwncoexists/tbs168Y.git <your-folder>
```

Once you've cloned it, make sure to install all the necessary packages.

__For Mac/Linux/Nitrous.io__

```bash
$ pwd # make sure you're in the project directory
$ (sudo) npm install
$ (sudo) npm install mailgun
$ (sudo) npm install mailgun-js
$ bower install
```

__For Windows/Vagrant__

```bash
$ npm install --no-bin-links
$ bower install
```
### Configuration
Setup the following (2) environment variables for MailGun:

- MGMAIL_KEY - your mailgun API key
- MGMAIL_DOMAIN - your mailgun Domain name

### Directory Structure

```
client/
|__app/
|   |__home/
|   |__main/
|   |__app.js & app.scss
|   |...
|
|__assets/
|   |__images/
|
|__components/
|
|__bower_components/
|
server/
...
```

There are two main directories in the app: `client` for the front-end, and `server` for the back-end.

#### Component Organization

This app is organized by feature. For example, the `home` directory contains everything related to the homepage. Styling, controller logic and markup for the homepage is all in the same folder.  The `components` folder contains all angular directives and services.

The `assets` folder is used for static assets like images and fonts.


### Running the App

The app uses [Grunt](http://gruntjs.com/) for running tasks, including running the server in development mode. To get started running the app locally, just run:

```bash
$ grunt serve -d
```

The app should auto-reload everytime you change and save anything
in the `client` directory (no need to refresh the page).
The app runs on `localhost:9000`. It should open the page automatically
in Google Chrome on start, but if it doesn't, you can navigate to the
site manually.


### Routes/API Endpoints

  The base route for making HTTP request is `/api/tasks`. The app supports the standard simple HTTP actions for handling data:

  - `POST` to `/api/emails/msg` to send an email


### Screenshots

  ![home page](/doc/home-page.png)
