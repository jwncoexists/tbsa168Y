## San Diego Wedding Planning Application

This application provides a central resource for people planning weddings.

It uses:

- Grunt for task management
- Express for backend
- Angular and ui-router for its frontend
- Sass/CSS for styling
- HTML for markup
- Mongodb for storing data
- Susy & Masonry for grid layouts
- Angular Material Design for navigation components and page styles
- Angular animation

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
$ npm install
$ bower install
```

__For Windows/Vagrant__

```bash
$ npm install --no-bin-links
$ bower install
```

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

The app should auto-reload everytime you change and save anything in the `client` directory (no need to refresh the page). The app runs on `localhost:9000`. It should open the page automatically in Google Chrome on start, but if it doesn't, you can navigate to the site manually.

### Backend Data Models

The backend Mongo Database is configured with the following data models:


Thing:
name: String,
address1: String,
address2: String,
city: String,
state: String,
zip: String,
website: String,
phone: String,
fax: String,
email: String,
info: String,
image: String,
keywords: [String],
active: { type: Boolean, default: true }  

### Routes/API Endpoints

  The base route for making HTTP request is `/api/tasks`. The app supports the standard simple HTTP actions for handling data:

  - `POST` to `/api/things` to create a venue or vendor
  - `GET` to `/api/things` to query a list of all venues/vendors
  - `GET` to `/api/things/:id` for querying a single venue/vendor
  - `PUT` to `/api/things` to update a specific venue/vendor
  - `DELETE` to `/api/things/:id` to delete a venue/vendor

### Screenshots

  ![home page](/doc/home-page.png)
