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
  {
    photo: "/assets/images/no-photo.png",
    name: "Baker, David",
    date: "13 Nov 1980",
    restingPlace: "Pax River Helo Accid, MD",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Casey, Robert",
    date: "26 Aug 1969",
    restingPlace: "Long Island Nat'l Cem, NY",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Cooper, Coop",
    date: "25 Nov 1968",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Banning, John",
    date: "04 Nov 1973",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Brinson, Jim",
    date: "12 Oct 2006",
    restingPlace: "Millen Cemetery, GA",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Burkhart, Joseph",
    date: "22 May 1995",
    restingPlace: "unk: res at death, Tampa,  FL",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Chafey, Merritt",
    date: "26 Jun 2005",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Chambers, Owen",
    date: "19 Jun 1982",
    restingPlace: "Unk: Parents @: Beaufort Nat'l Cem, SC",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Champe, Randy",
    date: "13 Jun 1991",
    restingPlace: "Santa Fe Natl Cem, NM",
    platoon: "1st"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Chisea, Robert",
    date: "218 Aug 1991",
    restingPlace: "Unk: last known address: Adel, IA",
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
  {
    photo: "/assets/images/no-photo.png",
    name: "Donnelly, Rick",
    date: "10 Apr 1994",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Dopher, Robert",
    date: "30 Aug 2010",
    restingPlace: "Highland Lawn Cemetery, IN",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Evans, Mike",
    date: "16 Mar 2006",
    restingPlace: "Evergreen Cem, KY",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Ferguson, Michael",
    date: "25 Jan 2002",
    restingPlace: "Dallas Ft Worth Nat'l Cem, TX",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Ganter, Bill",
    date: "03 Aug 2007",
    restingPlace: "Richmond, KY",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Hansen, Bob",
    date: "04 Jan 2009",
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
  {
    photo: "/assets/images/no-photo.png",
    name: "Johnson, Ron",
    date: "02 Oct 2010",
    restingPlace: "Quantico Nat'l Cem, VA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Jones, Bill",
    date: "14 Sep 2002",
    restingPlace: "unk: Hometown - Morganza, LA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Jones, Stu",
    date: "20 Aug 1977",
    restingPlace: "unk: Hometown - Boston, MA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Kozobarich, Larry",
    date: "13 Jun 2007",
    restingPlace: "Resurrection Catholic Cem, OH",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Larrison, Jack",
    date: "10 Jan 1999",
    restingPlace: "Bay Pines Nat'l Cem, FL",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "McClung, Mike",
    date: "02 Jul 2013",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "McCormack, Orval",
    date: "01 Oct 2002",
    restingPlace: "Quantico Nat'l Cem, VA",
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
  {
    photo: "/assets/images/no-photo.png",
    name: "Belser, Joe",
    date: "15 Oct 1989",
    restingPlace: "Greenlawn Mem Park, W Columbia, SC",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Moran, Donald",
    date: "25 Jun 2007",
    restingPlace: "Ft Snelling Nat'l Cem, MN",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Neal, Rich",
    date: "30 Jul 2001",
    restingPlace: "Bayview Memor Park, FL",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Pfeiffer, George",
    date: "14 Nov 1998",
    restingPlace: "Plano Mutual Cemetery, TX",
    platoon: "4th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Radcliffe, Harry",
    date: "08 Jun 2013",
    restingPlace: "Beachwood Cem, MI",
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
    name: "Sandberg, Michael",
    date: "03 Nov 1973",
    restingPlace: "unk: last residence, U of A Tucson, AZ",
    platoon: "5th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Sergo, Dick",
    date: "08 Nov 2001",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "5th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "St. John, Larry",
    date: "05 Dec 2011",
    restingPlace: "CCre: Mem Serv VFW Post 8207, FL",
    platoon: "5th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Tritsch, John",
    date: "03 Nov 1992",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "5th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Ulrich, Carl",
    date: "10 Dec 2010",
    restingPlace: "unk: Belmont United Met Ch, Richmond",
    platoon: "5th"
  },
  {
    photo: "/assets/images/no-photo.png",
    name: "Wilbur, Dave",
    date: "21 Apr 2001",
    restingPlace: "unk: Hometown - Claremont, NH",
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
