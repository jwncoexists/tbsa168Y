'use strict';

var app = angular.module('tbsa168App');

app.controller('PhotosCtrl', ['Auth',
  function (Auth) {
    var self = this;
    self.isLoggedIn = Auth.isLoggedIn;
    self.photos = [];
    self.galleryMode = true; // show gallery of photos to start

    // initialize values used to display person's name
    self.name = '';
    self.xmin = 0;
    self.xmax = 0;
    self.ymin = 0;
    self.ymax = 0;

    // initialize list of photos
    var item = {
      image: '/assets/images/photos/TBS A1-68 1st Platoon-edited.jpg',
      thumb: '/assets/images/photos/TBS A1-68 1st Platoon-edited-thumb.jpg',
      name: '1st Platoon',
      regions: [
        // ***** row 1 *******
        {
          name: 'Ron Burton',
          xmin: 73,
          width: 64,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Jim Brinson',
          xmin: 138,
          width: 62,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'John Banning',
          xmin: 201,
          width: 55,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Bern Bradstreet',
          xmin: 257,
          width: 57,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Les Amick',
          xmin: 315,
          width: 65,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Capt Sid Chapin',
          xmin: 381,
          width: 60,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Merritt Chafey',
          xmin: 441,
          width: 71,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Joe Allen',
          xmin: 513,
          width: 55,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Phil Carlin',
          xmin: 569,
          width: 65,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Bob Casey',
          xmin: 635,
          width: 60,
          ymin: 294,
          height: 206,
          active: false
        },
        {
          name: 'Gary Andresen',
          xmin: 696,
          width: 62,
          ymin: 294,
          height: 206,
          active: false
        },
        // ***** row 2 *******
        {
          name: 'Rod Arena',
          xmin: 61,
          width: 64,
          ymin: 226,
          height: 62,
          active: false
        },
        {
          name: 'Randy Champe',
          xmin: 126,
          width: 64,
          ymin: 226,
          height: 62,
          active: false
        },
        {
          name: 'Dave Baker',
          xmin: 191,
          width: 65,
          ymin: 236,
          height: 60,
          active: false
        },
        {
          name: 'Jim Beaver',
          xmin: 257,
          width: 56,
          ymin: 236,
          height: 60,
          active: false
        },
        {
          name: 'John Ames (Anuszewski)',
          xmin: 314,
          width: 66,
          ymin: 206,
          height: 80,
          active: false
        },
        {
          name: 'Dave Boillot',
          xmin: 381,
          width: 62,
          ymin: 236,
          height: 60,
          active: false
        },
        {
          name: 'Ken Bruner',
          xmin: 444,
          width: 59,
          ymin: 236,
          height: 60,
          active: false
        },
        {
          name: 'Rick Brasch',
          xmin: 504,
          width: 56,
          ymin: 236,
          height: 60,
          active: false
        },
        {
          name: 'John Basel',
          xmin: 572,
          width: 66,
          ymin: 220,
          height: 70,
          active: false
        },
        {
          name: 'Paul Budd',
          xmin: 658,
          width: 70,
          ymin: 208,
          height: 80,
          active: false
        },
        // ***** row 3 *******
        {
          name: 'Rufus Artmann',
          xmin: 25,
          width: 50,
          ymin: 209,
          height: 63,
          active: false
        },
        {
          name: 'Peter Acly',
          xmin: 109,
          width: 38,
          ymin: 209,
          height: 63,
          active: false
        },
        {
          name: 'Peter Colt',
          xmin: 174,
          width: 36,
          ymin: 209,
          height: 63,
          active: false
        },
        {
          name: 'Cliff Brahmstad',
          xmin: 237,
          width: 36,
          ymin: 209,
          height: 63,
          active: false
        },
        {
          name: 'Joel Brummel',
          xmin: 303,
          width: 33,
          ymin: 195,
          height: 63,
          active: false
        },
        {
          name: 'Bill Black',
          xmin: 362,
          width: 38,
          ymin: 200,
          height: 63,
          active: false
        },
        {
          name: 'Robert Chisea',
          xmin: 426,
          width: 36,
          ymin: 185,
          height: 63,
          active: false
        },
        {
          name: 'Mike Barretti',
          xmin: 488,
          width: 33,
          ymin: 195,
          height: 73,
          active: false
        },
        {
          name: 'Chuck Collins',
          xmin: 549,
          width: 42,
          ymin: 209,
          height: 63,
          active: false
        },
        {
          name: 'Mark Byrd',
          xmin: 620,
          width: 46,
          ymin: 195,
          height: 63,
          active: false
        },
        // ***** row 4 *******
        {
          name: 'Rob Barnes',
          xmin: 80,
          width: 35,
          ymin: 194,
          height: 42,
          active: false
        },
        {
          name: 'John Cochenour',
          xmin: 146,
          width: 33,
          ymin: 188,
          height: 52,
          active: false
        },
        {
          name: 'Bruce Cheever',
          xmin: 209,
          width: 32,
          ymin: 182,
          height: 55,
          active: false
        },
        {
          name: 'Chuck Carver',
          xmin: 271,
          width: 38,
          ymin: 193,
          height: 48,
          active: false
        },
        {
          name: 'John Clark',
          xmin: 335,
          width: 33,
          ymin: 180,
          height: 50,
          active: false
        },
        {
          name: 'Paul Caswell',
          xmin: 398,
          width: 32,
          ymin: 185,
          height: 50,
          active: false
        },
        {
          name: 'Dick Averitt',
          xmin: 459,
          width: 40,
          ymin: 168,
          height: 56,
          active: false
        },
        {
          name: 'Owen Chambers',
          xmin: 518,
          width: 44,
          ymin: 162,
          height: 62,
          active: false
        },
        {
          name: 'C. Richard Cooper',
          xmin: 587,
          width: 38,
          ymin: 165,
          height: 56,
          active: false
        },
        // ***** row 5 *******
        {
          name: 'Joe Burkhart',
          xmin: 116,
          width: 31,
          ymin: 160,
          height: 60,
          active: false
        },
        {
          name: 'Mike Connor',
          xmin: 177,
          width: 34,
          ymin: 174,
          height: 46,
          active: false
        },
        {
          name: 'Don Buzney',
          xmin: 239,
          width: 39,
          ymin: 178,
          height: 52,
          active: false
        },
        {
          name: 'Dave Collins',
          xmin: 305,
          width: 36,
          ymin: 170,
          height: 46,
          active: false
        }
      ]
    };
    self.photos.push (item);
    item = {
      image: '/assets/images/photos/TBS A1-68 2nd Platoon-edited.jpg',
      thumb: '/assets/images/photos/TBS A1-68 2nd Platoon-edited-thumb.jpg',
      name: '2nd Platoon',
      regions: [
        // ***** row 1 *******
        {
          name: 'Jim Ehmer',
          xmin: 75,
          width: 65,
          ymin: 300,
          height: 220,
          active: false
        },
        {
          name: 'Bill Friese',
          xmin: 142,
          ymin: 300,
          width: 65,
          height: 220,
          active: false
        },
        {
          name: 'Mike Ferguson',
          xmin: 208,
          ymin: 300,
          width: 62,
          height: 220,
          active: false
        },
        {
          name: 'Reed Gibson',
          xmin: 271,
          ymin: 300,
          width: 56,
          height: 220,
          active: false
        },
        {
          name: 'Kent Dobbins',
          xmin: 328,
          ymin: 300,
          width: 60,
          height: 220,
          active: false
        },
        {
          name: 'Jack Gies',
          xmin: 389,
          ymin: 300,
          width: 64,
          height: 220,
          active: false
        },
        {
          name: 'Adrian Gordon',
          xmin: 454,
          ymin: 300,
          width: 51,
          height: 220,
          active: false
        },
        {
          name: 'Jim Gettman',
          xmin: 505,
          ymin: 300,
          width: 66,
          height: 220,
          active: false
        },
        {
          name: 'Len Fuchs',
          xmin: 572,
          ymin: 300,
          width: 63,
          height: 220,
          active: false
        },
        {
          name: 'Jeff Hansen',
          xmin: 636,
          ymin: 300,
          width: 61,
          height: 220,
          active: false
        },
        {
          name: 'Rob Dopher',
          xmin: 698,
          ymin: 300,
          width: 66,
          height: 220,
          active: false
        },
        // ***** row 2 *******
        {
          name: 'Capt. Daniel McMahon',
          xmin: 35,
          ymin: 215,
          width: 80,
          height: 85,
          active: false
        },
        {
          name: 'Dalton Ellis',
          xmin: 116,
          ymin: 230,
          width: 64,
          height: 69,
          active: false
        },
        {
          name: 'Pat Finneran',
          xmin: 181,
          ymin: 225,
          width: 74,
          height: 59,
          active: false
        },
        {
          name: 'Jon Feltner',
          xmin: 242,
          ymin: 240,
          width: 58,
          height: 59,
          active: false
        },
        {
          name: 'John Fogg',
          xmin: 301,
          ymin: 230,
          width: 54,
          height: 69,
          active: false
        },
        {
          name: 'Sam Easton',
          xmin: 356,
          ymin: 230,
          width: 59,
          height: 69,
          active: false
        },
        {
          name: 'Mike DeLong',
          xmin: 416,
          ymin: 230,
          width: 68,
          height: 69,
          active: false
        },
        {
          name: 'Mike Evans',
          xmin: 485,
          ymin: 230,
          width: 60,
          height: 69,
          active: false
        },
        {
          name: 'Bill Etter',
          xmin: 546,
          ymin: 240,
          width: 59,
          height: 59,
          active: false
        },
        {
          name: 'Terry Cross',
          xmin: 606,
          ymin: 240,
          width: 59,
          height: 59,
          active: false
        },
        {
          name: 'Al Gates',
          xmin: 666,
          ymin: 240,
          width: 69,
          height: 59,
          active: false
        },
        // ***** row 3 *******
        {
          name: 'Buck Deggendorf',
          xmin: 160,
          ymin: 210,
          width: 41,
          height: 65,
          active: false
        },
        {
          name: 'Steve Freiherr',
          xmin: 227,
          ymin: 210,
          width: 32,
          height: 65,
          active: false
        },
        {
          name: 'Kevin Doyle',
          xmin: 282,
          ymin: 220,
          width: 37,
          height: 55,
          active: false
        },
        {
          name: 'Fraser Getgood',
          xmin: 343,
          ymin: 200,
          width: 32,
          height: 65,
          active: false
        },
        {
          name: 'Rick Donnelly',
          xmin: 399,
          ymin: 200,
          width: 35,
          height: 65,
          active: false
        },
        {
          name: 'Ike Eisenbach',
          xmin: 466,
          ymin: 200,
          width: 34,
          height: 75,
          active: false
        },
        {
          name: 'Ted Hammett',
          xmin: 525,
          ymin: 210,
          width: 31,
          height: 65,
          active: false
        },
        {
          name: 'David Gee',
          xmin: 586,
          ymin: 210,
          width: 34,
          height: 65,
          active: false
        },
        {
          name: 'Bill Ganter',
          xmin: 648,
          ymin: 210,
          width: 34,
          height: 65,
          active: false
        },
        {
          name: 'Steve Hadar',
          xmin: 713,
          ymin: 210,
          width: 54,
          height: 65,
          active: false
        },
        // ***** row 4 *******
        {
          name: 'Paul Daigle',
          xmin: 125,
          ymin: 190,
          width: 40,
          height: 45,
          active: false
        },
        {
          name: 'Al Greishaber',
          xmin: 190,
          ymin: 190,
          width: 42,
          height: 45,
          active: false
        },
        {
          name: 'Fred Emmett',
          xmin: 250,
          ymin: 190,
          width: 38,
          height: 45,
          active: false
        },
        {
          name: 'Rich Cronin',
          xmin: 290,
          ymin: 190,
          width: 40,
          height: 45,
          active: false
        },
        {
          name: 'Jim Foresman',
          xmin: 370,
          ymin: 190,
          width: 33,
          height: 45,
          active: false
        },
        {
          name: 'Randy Crew',
          xmin: 428,
          ymin: 190,
          width: 33,
          height: 45,
          active: false
        },
        {
          name: 'Bob Gleisberg',
          xmin: 489,
          ymin: 180,
          width: 33,
          height: 55,
          active: false
        },
        {
          name: 'Crane Davis',
          xmin: 545,
          ymin: 190,
          width: 40,
          height: 45,
          active: false
        },
        {
          name: 'Al DeCraene',
          xmin: 608,
          ymin: 190,
          width: 42,
          height: 45,
          active: false
        },
        {
          name: 'Rick Franzen',
          xmin: 675,
          ymin: 190,
          width: 40,
          height: 45,
          active: false
        },
        // ***** row 5 *******
        {
          name: 'Charles Greenfield',
          xmin: 330,
          ymin: 160,
          width: 40,
          height: 60,
          active: false
        },
        {
          name: 'Bill Dakin',
          xmin: 390,
          ymin: 160,
          width: 30,
          height: 60,
          active: false
        },
        {
          name: 'Bob Hagan',
          xmin: 450,
          ymin: 160,
          width: 40,
          height: 60,
          active: false
        },
        {
          name: 'Dave Eckenrode',
          xmin: 518,
          ymin: 160,
          width: 40,
          height: 60,
          active: false
        },
      ]
    };
    self.photos.push (item);
    self.photos.push ({
      image: '/assets/images/photos/TBS A1-68 3rd Platoon-edited.jpg',
      thumb: '/assets/images/photos/TBS A1-68 3rd Platoon-edited-thumb.jpg',
      info: 'Quantico, VA',
      name: '3rd Platoon',
      regions: [
        // ***** row 1 *******
        {
          name: 'Butch Holden',
          xmin: 100,
          width: 70,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Tom Igoe',
          xmin: 171,
          width: 56,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Jay Jacobson',
          xmin: 228,
          width: 50,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'John Hudock',
          xmin: 279,
          width: 52,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Victor Hebert',
          xmin: 334,
          width: 55,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Dan Indgjer',
          xmin: 390,
          width: 57,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Floyd Henry',
          xmin: 448,
          width: 57,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'JJ Huber',
          xmin: 506,
          width: 59,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Rick Huntington',
          xmin: 566,
          width: 59,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Carl Hasdovic',
          xmin: 626,
          width: 54,
          ymin: 305,
          height: 195,
          active: false
        },
        {
          name: 'Bob Hansen',
          xmin: 681,
          width: 57,
          ymin: 305,
          height: 195,
          active: false
        },
        // ***** row 2 *******
        {
          name: 'Capt Timothy McTigue',
          xmin: 45,
          width: 60,
          ymin: 235,
          height: 100,
          active: false
        },
        {
          name: 'Ivan Jones',
          xmin: 106,
          width: 59,
          ymin: 250,
          height: 65,
          active: false
        },
        {
          name: 'John Masters',
          xmin: 166,
          width: 59,
          ymin: 250,
          height: 65,
          active: false
        },
        {
          name: 'Al Kyle',
          xmin: 226,
          width: 59,
          ymin: 250,
          height: 65,
          active: false
        },
        {
          name: 'Ron Kapchus',
          xmin: 286,
          width: 55,
          ymin: 250,
          height: 65,
          active: false
        },
        {
          name: 'Bill Keefe',
          xmin: 336,
          width: 55,
          ymin: 240,
          height: 65,
          active: false
        },
        {
          name: 'John Kispert',
          xmin: 391,
          width: 54,
          ymin: 240,
          height: 65,
          active: false
        },
        {
          name: 'Stu Jones',
          xmin: 450,
          width: 58,
          ymin: 250,
          height: 65,
          active: false
        },
        {
          name: 'Dave Kiser',
          xmin: 516,
          width: 60,
          ymin: 245,
          height: 65,
          active: false
        },
        {
          name: 'Jack Kemeny',
          xmin: 585,
          width: 56,
          ymin: 235,
          height: 65,
          active: false
        },
        {
          name: 'Bob Koury',
          xmin: 645,
          width: 61,
          ymin: 225,
          height: 65,
          active: false
        },
        {
          name: 'Capt Dave Downing',
          xmin: 725,
          width: 55,
          ymin: 225,
          height: 95,
          active: false
        },
        // ***** row 3 *******
        {
          name: 'Jack Larrison',
          xmin: 145,
          width: 35,
          ymin: 235,
          height: 53,
          active: false
        },
        {
          name: 'Russ Johnson',
          xmin: 206,
          width: 36,
          ymin: 230,
          height: 58,
          active: false
        },
        {
          name: 'Bill Jones',
          xmin: 266,
          width: 32,
          ymin: 230,
          height: 53,
          active: false
        },
        {
          name: 'Rich Liebler',
          xmin: 323,
          width: 30,
          ymin: 230,
          height: 53,
          active: false
        },
        {
          name: 'Orval McCormack',
          xmin: 380,
          width: 28,
          ymin: 218,
          height: 58,
          active: false
        },
        {
          name: 'Eric Lewis',
          xmin: 433,
          width: 37,
          ymin: 230,
          height: 58,
          active: false
        },
        {
          name: 'Larry Kosobarich',
          xmin: 495,
          width: 38,
          ymin: 225,
          height: 58,
          active: false
        },
        {
          name: 'John Karch',
          xmin: 558,
          width: 36,
          ymin: 225,
          height: 53,
          active: false
        },
        {
          name: 'Drew Ley',
          xmin: 624,
          width: 31,
          ymin: 225,
          height: 53,
          active: false
        },
        // ***** row 4 *******
        {
          name: 'Gerald Keys',
          xmin: 120,
          width: 33,
          ymin: 210,
          height: 40,
          active: false
        },
        {
          name: 'Ed Kenney',
          xmin: 172,
          width: 37,
          ymin: 210,
          height: 40,
          active: false
        },
        {
          name: 'Jerry Lamp',
          xmin: 235,
          width: 33,
          ymin: 210,
          height: 40,
          active: false
        },
        {
          name: 'Joe Laslie',
          xmin: 296,
          width: 33,
          ymin: 205,
          height: 45,
          active: false
        },
        {
          name: 'John Lancaster',
          xmin: 356,
          width: 28,
          ymin: 195,
          height: 50,
          active: false
        },
        {
          name: 'Jim Lewis',
          xmin: 411,
          width: 32,
          ymin: 205,
          height: 40,
          active: false
        },
        {
          name: 'Mike McClung',
          xmin: 465,
          width: 43,
          ymin: 195,
          height: 45,
          active: false
        },
        {
          name: 'Dick Kurth',
          xmin: 527,
          width: 46,
          ymin: 190,
          height: 50,
          active: false
        },
        {
          name: 'Dave Hauntz',
          xmin: 589,
          width: 56,
          ymin: 185,
          height: 50,
          active: false
        },
        // ***** row 5 *******
        {
          name: 'Bill Kenerly',
          xmin: 261,
          width: 31,
          ymin: 190,
          height: 42,
          active: false
        },
        {
          name: 'Bob Lloyd',
          xmin: 325,
          width: 30,
          ymin: 190,
          height: 42,
          active: false
        },
        {
          name: 'Russ Johnson',
          xmin: 382,
          width: 33,
          ymin: 180,
          height: 48,
          active: false
        },
        {
          name: 'Ron Johnson',
          xmin: 439,
          width: 32,
          ymin: 180,
          height: 48,
          active: false
        },
        {
          name: 'Beirne Lovely',
          xmin: 498,
          width: 40,
          ymin: 180,
          height: 45,
          active: false
        }
      ]
    });
    self.photos.push ({
      image: '/assets/images/photos/TBS A1-68 4th Platoon-edited.jpg',
      thumb: '/assets/images/photos/TBS A1-68 4th Platoon-edited-thumb.jpg',
      info: 'Quantico, VA',
      name: '4th Platoon',
      regions: [
      // ***** row 1 *******
        {
          name: 'Dave Ralston',
          xmin: 110,
          width: 76,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Greg McDonough',
          xmin: 182,
          width: 52,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Jerry Paccassi',
          xmin: 234,
          width: 61,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Dave Raper',
          xmin: 298,
          width: 56,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'George McGaughey',
          xmin: 358,
          width: 60,
          ymin: 247,
          height: 215,
          active: false
        },
        {
          name: 'JJ O\'Brien',
          xmin: 419,
          width: 57,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Jim O’Brien',
          xmin: 477,
          width: 59,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Bob O’Rourke',
          xmin: 537,
          width: 62,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Matt Parker',
          xmin: 600,
          width: 53,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'George Philip',
          xmin: 654,
          width: 58,
          ymin: 257,
          height: 205,
          active: false
        },
        {
          name: 'Skip Ringo',
          xmin: 713,
          width: 64,
          ymin: 257,
          height: 205,
          active: false
        },
        // ***** row 2 *******
        {
          name: 'Captain Eaton',
          xmin: 31,
          width: 69,
          ymin: 182,
          height: 95,
          active: false
        },
        {
          name: 'Jack Powers',
          xmin: 113,
          width: 61,
          ymin: 188,
          height: 67,
          active: false
        },
        {
          name: 'Terry Ranstead',
          xmin: 175,
          width: 61,
          ymin: 193,
          height: 67,
          active: false
        },
        {
          name: 'Tom Nunziato',
          xmin: 237,
          width: 63,
          ymin: 188,
          height: 67,
          active: false
        },
        {
          name: 'Dave Purvis',
          xmin: 301,
          width: 49,
          ymin: 188,
          height: 67,
          active: false
        },
        {
          name: 'Tom McEntire',
          xmin: 360,
          width: 52,
          ymin: 196,
          height: 67,
          active: false
        },
        {
          name: 'Monty Nelson',
          xmin: 419,
          width: 55,
          ymin: 190,
          height: 65,
          active: false
        },
        {
          name: 'Donald Moran',
          xmin: 485,
          width: 58,
          ymin: 196,
          height: 67,
          active: false
        },
        {
          name: 'Mike Morrow',
          xmin: 551,
          width: 51,
          ymin: 194,
          height: 67,
          active: false
        },
        {
          name: 'Gray Ross',
          xmin: 609,
          width: 53,
          ymin: 198,
          height: 62,
          active: false
        },
        {
          name: 'Jim McIntire',
          xmin: 670,
          width: 56,
          ymin: 194,
          height: 67,
          active: false
        },
        // ***** row 3 *******
        {
          name: 'John Narney',
          xmin: 158,
          width: 34,
          ymin: 182,
          height: 47,
          active: false
        },
        {
          name: 'George Pfeiffer',
          xmin: 217,
          width: 41,
          ymin: 175,
          height: 54,
          active: false
        },
        {
          name: 'Paul Parker',
          xmin: 281,
          width: 32,
          ymin: 182,
          height: 47,
          active: false
        },
        {
          name: 'Dan McMurray',
          xmin: 339,
          width: 36,
          ymin: 175,
          height: 54,
          active: false
        },
        {
          name: 'Jim Muir',
          xmin: 401,
          width: 34,
          ymin: 182,
          height: 47,
          active: false
        },
        {
          name: 'Harry Radcliffe',
          xmin: 461,
          width: 35,
          ymin: 175,
          height: 52,
          active: false
        },
        {
          name: 'Dave Peters',
          xmin: 523,
          width: 37,
          ymin: 180,
          height: 49,
          active: false
        },
        {
          name: 'Duncan Ragsdale',
          xmin: 586,
          width: 35,
          ymin: 172,
          height: 56,
          active: false
        },
        {
          name: 'Rich Neal',
          xmin: 646,
          width: 38,
          ymin: 182,
          height: 47,
          active: false
        },
        // ***** row 4 *******
        {
          name: 'Bob Reid',
          xmin: 184,
          width: 38,
          ymin: 152,
          height: 40,
          active: false
        },
        {
          name: 'Tony Pesavento',
          xmin: 254,
          width: 36,
          ymin: 144,
          height: 48,
          active: false
        },
        {
          name: 'Dave Peake',
          xmin: 313,
          width: 33,
          ymin: 152,
          height: 40,
          active: false
        },
        {
          name: 'Jim McKelligon',
          xmin: 374,
          width: 30,
          ymin: 152,
          height: 50,
          active: false
        },
        {
          name: 'Doug O’Connor',
          xmin: 437,
          width: 34,
          ymin: 150,
          height: 54,
          active: false
        },
        {
          name: 'Travis Piper',
          xmin: 502,
          width: 27,
          ymin: 160,
          height: 43,
          active: false
        },
        {
          name: 'Rich Metli',
          xmin: 549,
          width: 24,
          ymin: 157,
          height: 48,
          active: false
        },
        {
          name: 'Ray Norton',
          xmin: 611,
          width: 29,
          ymin: 152,
          height: 48,
          active: false
        },
        {
          name: 'Robert Newlin',
          xmin: 673,
          width: 28,
          ymin: 155,
          height: 49,
          active: false
        },
        // ***** row 4 *******
        {
          name: 'Bob Packard',
          xmin: 221,
          width: 30,
          ymin: 145,
          height: 38,
          active: false
        },
        {
          name: 'Joe Belser',
          xmin: 288,
          width: 29,
          ymin: 139,
          height: 39,
          active: false
        },
        {
          name: 'Tom Pearson',
          xmin: 350,
          width: 29,
          ymin: 138,
          height: 49,
          active: false
        },
        {
          name: 'Joe Renaghan',
          xmin: 410,
          width: 30,
          ymin: 148,
          height: 48,
          active: false
        },
        {
          name: 'Nat Reed',
          xmin: 479,
          width: 25,
          ymin: 154,
          height: 42,
          active: false
        },
        {
          name: 'Joe Milum',
          xmin: 574,
          width: 34,
          ymin: 131,
          height: 54,
          active: false
        },
        {
          name: 'Chip Mills',
          xmin: 641,
          width: 33,
          ymin: 144,
          height: 42,
          active: false
        },
      ]
    });
    self.photos.push ({
      image: '/assets/images/photos/TBS A1-68 5th Platoon-edited.jpg',
      thumb: '/assets/images/photos/TBS A1-68 5th Platoon-edited-thumb.jpg',
      info: 'Quantico, VA',
      name: '5th Platoon',
      regions: [
        // ***** row 1 *******
        {
          name: 'Mike Williams',
          xmin: 98,
          width: 73,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Mike Sandberg',
          xmin: 172,
          width: 53,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Denny Rydstrom',
          xmin: 226,
          width: 66,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Jim Sanborn',
          xmin: 293,
          width: 53,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Chuck Steele',
          xmin: 347,
          width: 62,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Jim Williams',
          xmin: 410,
          width: 47,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Larry St. John',
          xmin: 458,
          width: 63,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Moe Trail',
          xmin: 522,
          width: 53,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Jules Selden',
          xmin: 578,
          width: 50,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'Al Woods',
          xmin: 639,
          width: 59,
          ymin: 295,
          height: 208,
          active: false
        },
        {
          name: 'John Tritsch',
          xmin: 699,
          width: 65,
          ymin: 295,
          height: 208,
          active: false
        },
        // ***** row 2 *******
        {
          name: 'Capt James D. Jones',
          xmin: 34,
          width: 65,
          ymin: 207,
          height: 100,
          active: false
        },
        {
          name: 'Bruce Wiggins',
          xmin: 99,
          width: 53,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Ed Wietecha',
          xmin: 155,
          width: 60,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Jack Sammons',
          xmin: 216,
          width: 58,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Jim Seagraves',
          xmin: 275,
          width: 62,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Ben Warren',
          xmin: 338,
          width: 65,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Dick Sergo',
          xmin: 404,
          width: 55,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Carl Ulrich',
          xmin: 460,
          width: 60,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'John Schmid',
          xmin: 521,
          width: 69,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Mike/Duke Wenzel',
          xmin: 591,
          width: 65,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: '(Wild) Bill Tehan',
          xmin: 657,
          width: 63,
          ymin: 225,
          height: 73,
          active: false
        },
        {
          name: 'Ken Shackelford',
          xmin: 721,
          width: 70,
          ymin: 225,
          height: 73,
          active: false
        },
        // ***** row 3 *******
        {
          name: 'Bob Waller',
          xmin: 135,
          width: 40,
          ymin: 207,
          height: 55,
          active: false
        },
        {
          name: 'Wazzo Wzorek',
          xmin: 204,
          width: 27,
          ymin: 212,
          height: 50,
          active: false
        },
        {
          name: 'Jeff Zimmerman',
          xmin: 255,
          width: 31,
          ymin: 200,
          height: 55,
          active: false
        },
        {
          name: 'JT Williamson',
          xmin: 316,
          width: 39,
          ymin: 212,
          height: 50,
          active: false
        },
        {
          name: 'Andy Solum',
          xmin: 383,
          width: 31,
          ymin: 207,
          height: 50,
          active: false
        },
        {
          name: 'John Spindler',
          xmin: 444,
          width: 32,
          ymin: 200,
          height: 55,
          active: false
        },
        {
          name: 'Mike Smith',
          xmin: 505,
          width: 36,
          ymin: 207,
          height: 55,
          active: false
        },
        {
          name: 'Bob Stocker',
          xmin: 573,
          width: 40,
          ymin: 212,
          height: 50,
          active: false
        },
        {
          name: 'Dave Wilbur',
          xmin: 639,
          width: 39,
          ymin: 212,
          height: 50,
          active: false
        },
        {
          name: 'Tom Wilkerson',
          xmin: 703,
          width: 36,
          ymin: 204,
          height: 50,
          active: false
        },
        // ***** row 4 *******
        {
          name: 'Ben Trout',
          xmin: 225,
          width: 31,
          ymin: 183,
          height: 46,
          active: false
        },
        {
          name: 'Ed Shore',
          xmin: 280,
          width: 38,
          ymin: 183,
          height: 46,
          active: false
        },
        {
          name: 'Courtney Tucker',
          xmin: 350,
          width: 35,
          ymin: 173,
          height: 48,
          active: false
        },
        {
          name: 'Clint Smith',
          xmin: 417,
          width: 30,
          ymin: 183,
          height: 46,
          active: false
        },
        {
          name: 'Bob Winn',
          xmin: 475,
          width: 33,
          ymin: 183,
          height: 46,
          active: false
        },
        {
          name: 'Tom Trompeter',
          xmin: 537,
          width: 42,
          ymin: 175,
          height: 50,
          active: false
        },
        {
          name: 'Larry Webster',
          xmin: 605,
          width: 36,
          ymin: 180,
          height: 48,
          active: false
        },
        {
          name: 'Bob Sook',
          xmin: 670,
          width: 35,
          ymin: 183,
          height: 46,
          active: false
        },
      ]
    });
    self.photos.push ({
      image: '/assets/images/photos/TBS A1-68 Staff-1.jpg',
      thumb: '/assets/images/photos/TBS A1-68 Staff-1-thumb.jpg',
      info: 'Quantico, VA',
      name: 'Staff',
      regions: []
    });
    self.photos.push ({
      image: '/assets/images/photos/TBS A1-68 Staff-2.jpg',
      thumb: '/assets/images/photos/TBS A1-68 Staff-2-thumb.jpg',
      info: 'Quantico, VA',
      name: 'Staff',
      regions: []
    });
    self.photos.push ({
      image: '/assets/images/02-gates-al3.png',
      thumb: '/assets/images/02-gates-al3-thumb.png',
      info: 'Quantico, VA',
      name: 'Staff',
      regions: []
    });


    //
    self.clickGalleryImage = function (event, ind) {
      // set the x & y of the full-size-photo div for a nice animation
      var $pictureDiv = $('.animate-show-hide');
      var x = event.pageX;
      var y = Math.max(0, event.pageY - 100);
      $pictureDiv.css('transform-origin', x + 'px ' + y + 'px');
      self.toggleGalleryMode(ind);
    };
    self.toggleGalleryMode = function (ind) {
      self.galleryMode = !self.galleryMode;
      // if an index is passed in, set scope.clickedPhoto
      if (ind >= 0) {
        self.clickedPhoto = self.photos[ind];
        self.clickedIndex = ind;
      }
    };
    self.goToNext = function() {
      self.clickedIndex = (self.clickedIndex + 1) % self.photos.length;
      self.clickedPhoto = self.photos[self.clickedIndex];
    };
    self.goToPrevious = function() {
      self.clickedIndex = (self.clickedIndex === 0) ? self.photos.length : (self.clickedIndex - 1);
      self.clickedPhoto = self.photos[self.clickedIndex];
    };
    self.getRegionStyle = function(region) {
      var style = {
        'position': 'absolute',
        // 'display': 'inline',
        'top': region.ymin + 'px',
        'left': region.xmin + 'px',
        'width': region.width + 'px',
        'height': region.height + 'px',
        'color': 'yellow',
        'border': 'solid 1px black',
        'opacity': region.active === true ? 1 : 0,
        'font-size': '1em',
        'z-index': 500 };
      return style;
    };

    self.setRegionActive = function(region) {
      region.active = true;
    };

    self.setRegionInactive = function(region) {
      region.active = false;
    };

}]);

app.animation('.animate-show-hide', function() {
  return {
    beforeAddClass : function(element, className, done) {
      if(className === 'ng-hide') {
        jQuery(element).animate({
          opacity:0
        }, done);
      }
      else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if(className === 'ng-hide') {
        element.css('opacity',0);
        jQuery(element).animate({
          opacity:1
        }, done);
      }
      else {
        done();
      }
    }
  };
});
