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
    photo: "/assets/images/02-decraene-alan.png",
    name: "DeCraene, Alan",
    date: "16 Feb 1970",
    restingPlace: "Centre County Mem Park, PA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-eckenrode-dave.png",
    name: "Eckenrode, Dave",
    date: "21 Jul 1968",
    restingPlace: "Centre County Mem Park, PA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-gates-albert.png",
    name: "Gates, Albert",
    date: "07 Mar 1970",
    restingPlace: "Courts of the MIssing, MIA Mem, HI",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-gibson-carl.png",
    name: "Gibson, Carl",
    date: "30 Apr 1968",
    restingPlace: "Univ of VA Confederate Cem, VA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-hagan-bob.png",
    name: "Hagan, Bob",
    date: "31 Mar 1978",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-donnelly-rick.png",
    name: "Donnelly, Rick",
    date: "10 Apr 1994",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-dopher-robert.png",
    name: "Dopher, Robert",
    date: "30 Aug 2010",
    restingPlace: "Highland Lawn Cemetery, IN",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-evans-mike.png",
    name: "Evans, Mike",
    date: "16 Mar 2006",
    restingPlace: "Evergreen Cem, KY",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-ferguson-michael.png",
    name: "Ferguson, Michael",
    date: "25 Jan 2002",
    restingPlace: "Dallas Ft Worth Nat'l Cem, TX",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-ganter-bill.png",
    name: "Ganter, Bill",
    date: "03 Aug 2007",
    restingPlace: "Richmond, KY",
    platoon: "2nd"
  },
  {
    photo: "/assets/images/02-hansen-bob.png",
    name: "Hansen, Bob",
    date: "04 Jan 2009",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "2nd"
  },


  // 3rd Platoon
  {
    photo: "/assets/images/03-laslie-joe.png",
    name: "Laslie, Joe",
    date: "26 May 1968",
    restingPlace: "Attapulgus Methodist Ch Cem, GA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-johnson-ron.png",
    name: "Johnson, Ron",
    date: "02 Oct 2010",
    restingPlace: "Quantico Nat'l Cem, VA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-jones-bill.png",
    name: "Jones, Bill",
    date: "14 Sep 2002",
    restingPlace: "unk: Hometown - Morganza, LA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-jones-stu.png",
    name: "Jones, Stu",
    date: "20 Aug 1977",
    restingPlace: "unk: Hometown - Boston, MA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-kozobarich-larry.png",
    name: "Kozobarich, Larry",
    date: "13 Jun 2007",
    restingPlace: "Resurrection Catholic Cem, OH",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-larrison-jack.png",
    name: "Larrison, Jack",
    date: "10 Jan 1999",
    restingPlace: "Bay Pines Nat'l Cem, FL",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-mcclung-mike.png",
    name: "McClung, Mike",
    date: "02 Jul 2013",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "3rd"
  },
  {
    photo: "/assets/images/03-mccormack-orval.png",
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
    photo: "/assets/images/04-pearson-tom.png",
    name: "Pearson, Tom",
    date: "23 Jan 1968",
    restingPlace: "Fort Rosecrans Nat'l Cem, SD CA",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-ranstead-terry.png",
    name: "Ranstead, Terry",
    date: "22 Jan 1968",
    restingPlace: "Fairview Cem, Vinita, OK",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-ross-gray.png",
    name: "Ross, Gray",
    date: "15 Jun 1968",
    restingPlace: "Fort Donelson Nat'l Cemetery, TN",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-belser-joe.png",
    name: "Belser, Joe",
    date: "15 Oct 1989",
    restingPlace: "Greenlawn Mem Park, W Columbia, SC",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-moran-donald.png",
    name: "Moran, Donald",
    date: "25 Jun 2007",
    restingPlace: "Ft Snelling Nat'l Cem, MN",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-neal-rich.png",
    name: "Neal, Rich",
    date: "30 Jul 2001",
    restingPlace: "Bayview Memor Park, FL",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-pfeiffer-george.png",
    name: "Pfeiffer, George",
    date: "14 Nov 1998",
    restingPlace: "Plano Mutual Cemetery, TX",
    platoon: "4th"
  },
  {
    photo: "/assets/images/04-radcliffe-harry.png",
    name: "Radcliffe, Harry",
    date: "08 Jun 2013",
    restingPlace: "Beachwood Cem, MI",
    platoon: "4th"
  },

  // 5th Platoon
  {
    photo: "/assets/images/05-spindler-john.png",
    name: "Spindler, John",
    date: "21 Apr 1968",
    restingPlace: "Courts of the MIssing, MIA Mem, HI",
    platoon: "5th"
  },
  {
    photo: "/assets/images/05-sandberg-mike.png",
    name: "Sandberg, Michael",
    date: "03 Nov 1973",
    restingPlace: "unk: last residence, U of A Tucson, AZ",
    platoon: "5th"
  },
  {
    photo: "/assets/images/05-sergo-dick.png",
    name: "Sergo, Dick",
    date: "08 Nov 2001",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "5th"
  },
  {
    photo: "/assets/images/05-stjohn-larry.png",
    name: "St. John, Larry",
    date: "05 Dec 2011",
    restingPlace: "CCre: Mem Serv VFW Post 8207, FL",
    platoon: "5th"
  },
  {
    photo: "/assets/images/05-tritsch-john.png",
    name: "Tritsch, John",
    date: "03 Nov 1992",
    restingPlace: "Arlington Nat'l Cem, VA",
    platoon: "5th"
  },
  {
    photo: "/assets/images/05-ulrich-carl.png",
    name: "Ulrich, Carl",
    date: "10 Dec 2010",
    restingPlace: "unk: Belmont United Met Ch, Richmond",
    platoon: "5th"
  },
  {
    photo: "/assets/images/05-wilbur-dave.png",
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
  User.create(
  {
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  },
  {
    provider: 'local',
    name: 'Dave Peters',
    email: 'dwpeters@san.rr.com',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Acly',
    email: 'acly@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Amick',
    email: 'amick@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Acly',
    email: 'acly@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Andresen',
    email: 'andresen@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ames',
    email: 'ames@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Anuszewski',
    email: 'anuszewski@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Arena',
    email: 'arena@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Artmann',
    email: 'artmann@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Averitt',
    email: 'averitt@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Barretti',
    email: 'barretti@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Basel',
    email: 'basel@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Beaver',
    email: 'beaver@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Black',
    email: 'Bback@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Boillot',
    email: 'boillot@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Bradstreet',
    email: 'bradstreet@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Brahmstad',
    email: 'brahmstad@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Brasch',
    email: 'brasch@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Brummel',
    email: 'brummel@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Bruner',
    email: 'bruner@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Budd',
    email: 'budd@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Burton',
    email: 'burton@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Buzney',
    email: 'buzney@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Byrd',
    email: 'byrd@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Carlin',
    email: 'carlin@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Carver',
    email: 'carver@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Caswell',
    email: 'caswell@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Champe',
    email: 'champe@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Cheever',
    email: 'cheever@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Clark',
    email: 'clark@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Cochenour',
    email: 'cochenour@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Colliins',
    email: 'colliins@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Colt',
    email: 'colt@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Connor',
    email: 'connor@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Crew',
    email: 'crew@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Cronin',
    email: 'cronin@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Daigle',
    email: 'daigle@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Dakin',
    email: 'dakin@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Davis',
    email: 'davis@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Deggendorf',
    email: 'deggendorf@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Delong',
    email: 'delong@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Dobbins',
    email: 'dobbins@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Doyle',
    email: 'doyle@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Easton',
    email: 'easton@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ehmer',
    email: 'ehmer@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Eisenbach',
    email: 'eisenbach@tbs',
    password: '0109999'
  },
{
  provider: 'local',
  name: 'Carlin',
  email: 'carlin@tbs',
  password: '0109999'
},
  {
    provider: 'local',
    name: 'Ellis',
    email: 'ellis@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Emmett',
    email: 'emmett@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Etter',
    email: 'etter@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Feltner',
    email: 'feltner@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Finneran',
    email: 'finneran@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Fogg',
    email: 'fogg@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Foresman',
    email: 'foresman@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Franzen',
    email: 'franzen@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Freiherr',
    email: 'freiherr@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Friese',
    email: 'friese@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Fuchs',
    email: 'fuchs@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gee',
    email: 'fee@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Getgood',
    email: 'getgood@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gettman',
    email: 'gettman@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gies',
    email: 'gies@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gleisberg',
    email: 'gleisberg@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gordon',
    email: 'gordon@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Greenfield',
    email: 'greenfield@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Grieshaber',
    email: 'grieshaber@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hadar',
    email: 'hadar@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hammett',
    email: 'hammett@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hansen',
    email: 'hansen@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hasdovic',
    email: 'hasdovic@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hauntz',
    email: 'hauntz@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Henry',
    email: 'henry@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Herbert',
    email: 'herbert@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Holden',
    email: 'holden@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Huber',
    email: 'huber@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hudock',
    email: 'hudock@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Huntington',
    email: 'huntington@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Igoe',
    email: 'igoe@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Indgjer',
    email: 'indgjer@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Jacobson',
    email: 'Jacobson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Johnson',
    email: 'Johnson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Jones',
    email: 'Jones@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kapchus',
    email: 'Kapchus@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Karch',
    email: 'Karch@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Keefe',
    email: 'Keefe@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kemeny',
    email: 'Kemeny@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kenerly',
    email: 'Kenerly@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kenney',
    email: 'Kenney@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Keys',
    email: 'Keys@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kiser',
    email: 'Kiser@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kispert',
    email: 'Kispert@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Koury',
    email: 'Koury@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kurth',
    email: 'Kurth@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kyle',
    email: 'Kyle@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Lamp',
    email: 'Lamp@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Lancaster',
    email: 'Lancaster@tbs',
    password: '0109999'
  },
{
  provider: 'local',
  name: 'Leiber',
  email: 'Leiber@tbs',
  password: '0109999'
},
  {
    provider: 'local',
    name: 'Lewis',
    email: 'Lewis@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ley',
    email: 'Ley@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Lloyd',
    email: 'Lloyd@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Lovely',
    email: 'Lovely@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Masters',
    email: 'Masters@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McDonough',
    email: 'McDonough@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McEntire',
    email: 'McEntire@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McGaughey',
    email: 'McGaughey@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McIntire',
    email: 'McIntire@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McKelligon',
    email: 'McKelligon@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McMurray',
    email: 'McMurray@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Metli',
    email: 'Metli@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Mills',
    email: 'Mills@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Milum',
    email: 'Milum@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Morrow',
    email: 'Morrow@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Narney',
    email: 'Narney@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Nelson',
    email: 'Nelson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Newlin',
    email: 'Newlin@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Norton',
    email: 'Norton@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Norton',
    email: 'Norton@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Nunziato',
    email: 'Nunziato@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: "O'Brien",
    email: "O'Brien@tbs",
    password: '0109999'
  },
  {
    provider: 'local',
    name: "O'Connor",
    email: "O'Connor@tbs",
    password: '0109999'
  },
  {
    provider: 'local',
    name: "O'Rourke",
    email: "O'Rourke@tbs",
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Paccassi',
    email: 'Paccassi@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Packard',
    email: 'Packard@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Parker',
    email: 'Parker@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Peake',
    email: 'Peake@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Pesavento',
    email: 'Pesavento@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Dave Peters',
    email: 'Peters@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Philip',
    email: 'Philip@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Piper',
    email: 'Piper@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Powers',
    email: 'Powers@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Purvis',
    email: 'Purvis@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ragsdale',
    email: 'Ragsdale@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ralston',
    email: 'Ralston@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Raper',
    email: 'Raper@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Reed',
    email: 'Reed@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Reid',
    email: 'Reid@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Renaghan',
    email: 'Renaghan@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ringo',
    email: 'Ringo@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Rydstrom',
    email: 'Rydstrom@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Sammons',
    email: 'Sammons@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Sanborn',
    email: 'Sanborn@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Schmid',
    email: 'Schmid@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Seagraves',
    email: 'Seagraves@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Selden',
    email: 'Selden@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Shackelford',
    email: 'Shackelford@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Shore',
    email: 'Shore@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Smith',
    email: 'Smith@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Solum',
    email: 'Solum@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Sook',
    email: 'Sook@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Steele',
    email: 'Steele@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Stocker',
    email: 'Stocker@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Tehan',
    email: 'Tehan@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Trail',
    email: 'Trail@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Trompeter',
    email: 'Trompeter@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Trout',
    email: 'Trout@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Tucker',
    email: 'Tucker@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Waller',
    email: 'Waller@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Warren',
    email: 'Warren@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Webster',
    email: 'Webster@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wenzel',
    email: 'Wenzel@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wietecha',
    email: 'Wietecha@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wiggins',
    email: 'Wiggins@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wilkerson',
    email: 'Wilkerson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Williams',
    email: 'Williams@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Williamson',
    email: 'Williamson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Winn',
    email: 'Winn@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Woods',
    email: 'Woods@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wzorek',
    email: 'Wzorek@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Zimmerman',
    email: 'Zimmerman@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Allen',
    email: 'Allen@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Angus',
    email: 'Angus@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Baker',
    email: 'Baker@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Banning',
    email: 'Banning@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Barnes',
    email: 'Barnes@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Brickley',
    email: 'Brickley@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Belser',
    email: 'Belser@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Brinson',
    email: 'Brinson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Burkhart',
    email: 'Burkhart@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Casey',
    email: 'Casey@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Chafey',
    email: 'Chafey@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Chambers',
    email: 'Chambers@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Chapin',
    email: 'Chapin@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Chiesa',
    email: 'Chiesa@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Cooper',
    email: 'Cooper@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Cross',
    email: 'Cross@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'DeCraene',
    email: 'DeCraene@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Donnelly',
    email: 'Donnelly@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Dopher',
    email: 'Dopher@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Downing',
    email: 'Downing@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Eaton',
    email: 'Eaton@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Eckenrode',
    email: 'Eckenrode@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Evans',
    email: 'Evans@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ferguson',
    email: 'Ferguson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ganter',
    email: 'Ganter@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gates',
    email: 'Gates@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Gibson',
    email: 'Gibson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Hagan',
    email: 'Hagan@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Kozobarich',
    email: 'Kozobarich@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Larrison',
    email: 'Larrison@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Laslie',
    email: 'Laslie@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McClung',
    email: 'McClung@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McCormack',
    email: 'McCormack@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'McTigue',
    email: 'McTigue@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Moran',
    email: 'Moran@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Muir',
    email: 'Muir@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Neal',
    email: 'Neal@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Pearson',
    email: 'Pearson@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Pfeiffer',
    email: 'Pfeiffer@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Radcliffe',
    email: 'Radcliffe@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ranstead',
    email: 'Ranstead@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ross',
    email: 'Ross@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Sandberg',
    email: 'Sandberg@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Sergo',
    email: 'Sergo@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Spindler',
    email: 'Spindler@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'St. John',
    email: 'St. John@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Tritsch',
    email: 'Tritsch@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Ulrich',
    email: 'Ulrich@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wilbur',
    email: 'Wilbur@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'Wright',
    email: 'Wright@tbs',
    password: '0109999'
  },

  {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  },
  function() {
      console.log('finished populating users');
    }
  );
});
