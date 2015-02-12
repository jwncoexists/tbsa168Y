/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Person = require('../api/person/person.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Person.find({}).remove(function() {
  Person.create(
  {
    photo: "/assets/images/no-photo.png",
    name: "Allen, Joe",
    date: "24 May 1968",
    restingPlace: "Long Beach City Cem, MS",
    platoon: "1st"
  },

  {
    photo: "/assets/images/no-photo.png",
    name: "Barnes, Rob",
    date: "30 May 1968",
    restingPlace: "Santa Fe Natl Cem, NM",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Cross, Terry",
    date: "04 Mar 1968",
    restingPlace: "Oakdale Cem, LA",
    platoon: "1st"
  },

  // *** 2nd platoon
  {
    photo: "/assets/images/no-photo.png",
    name: "DeCraene, Alan",
    date: "16 Feb 1970",
    restingPlace: "Centre County Mem Park, PA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Eckenrode, Dave",
    date: "21 Jul 1968",
    restingPlace: "Centre County Mem Park, PA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Gates, Albert",
    date: "07 Mar 1970",
    restingPlace: "Courts of the MIssing, MIA Mem, HI",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Gibson, Carl",
    date: "30 Apr 1968",
    restingPlace: "Univ of VA Confederate Cem, VA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Hagan, Bob",
    date: "31 Mar 1978",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "2nd"
  },

  // 3rd Platoon
  {
    photo: "/assets/images/no-photo.png",
    name: "Laslie, Joe",
    date: "26 May 1968",
    restingPlace: "Attapulgus Methodist Ch Cem, GA",
    platoon: "3rd"
  },

  // 4th Platoon
  {
    photo: "/assets/images/04-muir-jim.png",
    name: "Muir, Jim",
    date: "19 May 1968",
    restingPlace: "East Lawn Palms & Mort, AZ",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Pearson, Tom",
    date: "23 Jan 1968",
    restingPlace: "Fort Rosecrans Nat'l Cem, SD CA",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Ranstead, Terry",
    date: "22 Jan 1968",
    restingPlace: "Fairview Cem, Vinita, OK",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Ross, Gray",
    date: "15 Jun 1968",
    restingPlace: "Fort Donelson Nat'l Cemetery, TN",
    platoon: "4th"
  },

  // 5th Platoon
  {
    photo: "/assets/images/no-photo.png",
    name: "Spindler, John",
    date: "21 Apr 1968",
    restingPlace: "Courts of the MIssing, MIA Mem, HI",
    platoon: "5th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Wright, Hank",
    date: "06 Feb 1968",
    restingPlace: "Mountain View Cem, CA",
    platoon: "5th"
  }


  );
});

// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
