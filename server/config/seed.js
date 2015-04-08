/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Person = require('../api/person/person.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var markdown = require( "markdown" ).markdown;

// Person.find({}).remove(function() {
//   Person.create(
//   {
//     photo: "/assets/images/01-allen-joe.png",
//     name: "Allen, Joseph Ebert (Joe)",
//     date: "17 July 1945 - 24 May 1968",
//     restingPlace: "Long Beach City Cem, MS",
//     platoon: "1st",
//     bio: 'Joseph Allen Ebert arrived in Vietnam on 11 Feb 1968 and was killed on 24 May \
//     1968 by hostile small arms fire during an Operation Houston \
//     night engagement 12 KM south-southeast of the Phu Bai airfield—Thua \
//     Thien Province, UTM Grid YD950050. Joe’s name on The Wall is \
//     at Panel 76E, Line 003. Joe is buried the Long Beach City Cemetery. \
//     Second Lieutenant Allen was awarded a  silver star \
//     for gallantry in action during the vietnam war.  \n  \n*"The President of \
//     the United States of America takes pride in presenting the Silver Star \
//     (Posthumously) to Second Lieutenant Joe Ebert Allen (MCSN: 0-103089), \
//     United States Marine Corps, for conspicuous gallantry and intrepidity \
//     in action while serving as a Platoon Commander with Company D, First \
//     Battalion, Fifth Marines, FIRST Marine Division (Rein.), FMF, in connection \
//     with combat operations against the enemy in the Republic of Vietnam. \
//     On the evening of 24 May 1968, Second Lieutenant Allen\'s platoon \
//     established an ambush on a suspected enemy infiltration route in Thua \
//     Thien Province. Alertly observing a numerically superior North Vietnamese \
//     Army force moving near his position, he immediately adjusted mortar fire \
//     on the enemy and quickly led his platoon to an advantageous position \
//     from which the Marines commenced delivering accurate fire upon the \
//     hostile force. Although painfully wounded in the initial moments of the \
//     fire fight, he boldly moved among his men, shouting words of encouragement \
//     and directing their fire. Realizing the seriousness of the situation, \
//     Second Lieutenant Allen was maneuvering his squads into an assault \
//     formation when he sustained a second wound from an enemy hand grenade. \
//     Steadfastly refusing medical aid, he advanced to the most forward position \
//     and fearlessly led a determined assault on the enemy positions until he \
//     fell seriously injured by the hostile fire. Inspired by his bold leadership \
//     and resolute determination, his men continued the attack, killing ten enemy \
//     soldiers and seizing numerous weapons. By his courage, aggressive fighting \
//     spirit and unwavering devotion to duty, Second Lieutenant Allen upheld \
//     the highest traditions of the Marine Corps and of the United States Naval \
//     Service. He gallantly gave his life for his country."*',
//     bioHtml: markdown.toHTML('Joseph Allen Ebert arrived in Vietnam on 11 Feb 1968 and was killed on 24 May \
//     1968 by hostile small arms fire during an Operation Houston \
//     night engagement 12 KM south-southeast of the Phu Bai airfield—Thua \
//     Thien Province, UTM Grid YD950050. Joe’s name on The Wall is \
//     at Panel 76E, Line 003. Joe is buried the Long Beach City Cemetery. \
//     Second Lieutenant John Joe Ebert Allen was awarded a  silver star \
//     for gallantry in action during the vietnam war.  \n  \n*"The President of \
//     the United States of America takes pride in presenting the Silver Star \
//     (Posthumously) to Second Lieutenant Joe Ebert Allen (MCSN: 0-103089), \
//     United States Marine Corps, for conspicuous gallantry and intrepidity \
//     in action while serving as a Platoon Commander with Company D, First \
//     Battalion, Fifth Marines, FIRST Marine Division (Rein.), FMF, in connection \
//     with combat operations against the enemy in the Republic of Vietnam. \
//     On the evening of 24 May 1968, Second Lieutenant Allen\'s platoon \
//     established an ambush on a suspected enemy infiltration route in Thua \
//     Thien Province. Alertly observing a numerically superior North Vietnamese \
//     Army force moving near his position, he immediately adjusted mortar fire \
//     on the enemy and quickly led his platoon to an advantageous position \
//     from which the Marines commenced delivering accurate fire upon the \
//     hostile force. Although painfully wounded in the initial moments of the \
//     fire fight, he boldly moved among his men, shouting words of encouragement \
//     and directing their fire. Realizing the seriousness of the situation, \
//     Second Lieutenant Allen was maneuvering his squads into an assault \
//     formation when he sustained a second wound from an enemy hand grenade. \
//     Steadfastly refusing medical aid, he advanced to the most forward position \
//     and fearlessly led a determined assault on the enemy positions until he \
//     fell seriously injured by the hostile fire. Inspired by his bold leadership \
//     and resolute determination, his men continued the attack, killing ten enemy \
//     soldiers and seizing numerous weapons. By his courage, aggressive fighting \
//     spirit and unwavering devotion to duty, Second Lieutenant Allen upheld \
//     the highest traditions of the Marine Corps and of the United States Naval \
//     Service. He gallantly gave his life for his country."*'),
//     bioPhoto: "/assets/images/01-allen-joe2.jpg",
//   },
//
//   {
//     photo: "/assets/images/01-barnes-rob.png",
//     name: "Barnes, Robert Crozier Jr. (Rob)",
//     date: "4 June 1944 - 30 May 1968",
//     restingPlace: "Santa Fe Natl Cem, NM",
//     platoon: "1st",
//     bio: 'Second Lieutenant Robert Crozier Barnes, Jr. was born June 4th, 1944 in Carmi, Illinois. \
//     Service number 0102667. Enlisted in the Marine Corps. He arrived in Vietnam \
//     on January 27, 1968 and served with 1st Marine Division, \
//     1st Recon Battalion, B Company. Service occupation of Basic Infantry Officer. \
//     2nd Lieutenant Barnes was killed by hostile gunfire in Quang Nam Province near \
//     UTM grid AT816862. He was with Recon Team Aldbrook 13 KM SW of Hai Van Bridge. \
//     He earned the following awards: \
//     - National Defense Service Medal \
//     - Combat Infantryman Badge \
//     - Purple Heart \
//     - Vietnam Campaign Medal \
//     - Vietnam Service Medal \
//     Second Lieutenant Barnes is honored on Panel 63W, Row 14 of the Vietnam Veterans Memorial. \
//     Barnes is also listed on the 1st Reconnaissance Battalion Association \
//     memorial at the Semper Fidelis Memorial Park, National Museum of the \
//     Marine Corps.',
//     bioHtml: markdown.toHTML('Second Lieutenant Robert Crozier Barnes, Jr. was born June 4th, 1944 in Carmi, Illinois. \
//     Service number 0102667. Enlisted in the Marine Corps. He arrived in Vietnam \
//     on January 27, 1968 and served with 1st Marine Division, \
//     1st Recon Battalion, B Company. Service occupation of Basic Infantry Officer. \
//     2nd Lieutenant Barnes was killed by hostile gunfire in Quang Nam Province near \
//     UTM grid AT816862. He was with Recon Team Aldbrook 13 KM SW of Hai Van Bridge. \
//     He earned the following awards:  \n\n\
// -   National Defense Service Medal  \n\
// -   Combat Infantryman Badge  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lietenant Barnes is honored on Panel 63W, Row 14 of the Vietnam Veterans Memorial. \
// Barnes is also listed on the 1st Reconnaissance Battalion Association \
// memorial at the Semper Fidelis Memorial Park, National Museum of the \
// Marine Corps.'),
//     bioPhoto: "/assets/images/01-barnes-rob2.jpg",
//   },
//   {
//     photo: "/assets/images/02-cross-terry.png",
//     name: "Cross, Herbert Terrell (Terry)",
//     date: "12 January 1944 - 4 March 1968",
//     restingPlace: "Oakdale Cem, LA",
//     platoon: "2nd",
//     bio: 'Herbert Terrell Cross is the son of Elbert E. and Hazel T. Cross \
//     and the brother of Kenneth A. Cross of Oakdale LA. He enlisted in \
//     the US Marine Corps on May 27, 1967 in Rustin LA and was later \
//     commissioned as an Officer. He arrived in Vietnam on January 23, 1968 \
//     and was assigned to Company A, 1st Battalion, 7th Marines, \
//     1st MARDIV (Rein) FMF.  \n\nWhile on a patrol along the Song Yen River \
//     in near the village of La Chau in Hieu Duc District Quang Nam \
//     Province (AP) anti-personnel mine was detonated resulting in the \
//     death of three Marines and one who was wounded. Following the \
//     explosion the enemy opened fire, which was returned and continued \
//     until a reaction squad arrived forcing the VC to withdraw. \
//     2dLt Cross was one of the casualties; he was killed in action \
//     as a result of multi fragmentation wounds. 2Lt Cross was presented a \
//     posthumous award of the Bronze Star Medal with "V" device \
//     "For meritorious service from January 27 to April 8 1968." \
//     Second Lieutenant Cross is also honored on the Vietnam Veterans \
//     Memorial Panel 48E - Line 52',
//     bioHtml: markdown.toHTML('Herbert Terrell Cross is the son of Elbert E. and Hazel T. Cross \
//     and the brother of Kenneth A. Cross of Oakdale LA. He enlisted in \
//     the US Marine Corps on May 27, 1967 in Rustin LA and was later \
//     commissioned as an Officer. He arrived in Vietnam on January 23, 1968 \
//     and was assigned to Company A, 1st Battalion, 7th Marines, \
//     1st MARDIV (Rein) FMF.  \n\nWhile on a patrol along the Song Yen River \
//     in near the village of La Chau in Hieu Duc District Quang Nam \
//     Province (AP) anti-personnel mine was detonated resulting in the \
//     death of three Marines and one who was wounded. Following the \
//     explosion the enemy opened fire, which was returned and continued \
//     until a reaction squad arrived forcing the VC to withdraw. \
//     2dLt Cross was one of the casualties; he was killed in action \
//     as a result of multi fragmentation wounds. 2Lt Cross was presented a \
//     posthumous award of the Bronze Star Medal with "V" device \
//     "For meritorious service from January 27 to April 8 1968." \
//     Second Lieutenant Cross is also honored on the Vietnam Veterans \
//     Memorial Panel 48E - Line 52'),
//     bioPhoto: "/assets/images/02-cross-terry2.jpg",
//   },
//   {
//     photo: "/assets/images/01-baker-dave.png",
//     name: "Baker, David L (David)",
//     date: "26 April 1945 - 13 November 1980",
//     restingPlace: "Pax River Helo Accid, MD",
//     platoon: "1st",
//     bio: '"Flying is so many parts skill, so many parts planning, so many \
//     parts maintenance, and so many parts luck. The trick is to reduce the \
//     luck by increasing the others." — David L. Baker  \n\nSecond Lieutenant \
//     David L. Baker from South \
//     Milwaukee, WI was killed in a November 1980 crash at the military\'s \
//     only test pilot school at Patuxent River. Md., in which both he and \
//     Larry Ammerman were killed.',
//     bioHtml: markdown.toHTML('"Flying is so many parts skill, so many parts planning, so many \
//     parts maintenance, and so many parts luck. The trick is to reduce the \
//     luck by increasing the others." — David L. Baker  \n\nSecond Lieutenant \
//     David L. Baker is from South \
//     Milwaukee, WI and was killed in a November 1980 crash at the military\'s \
//     only test pilot school at Patuxent River. Md., in which both he and \
//     Larry Ammerman were killed.')
//   },
//   {
//     photo: "/assets/images/01-casey-bob.png",
//     name: "Casey, Robert Brian (Robert)",
//     date: "13 May 1944 - 26 August 1969",
//     restingPlace: "Long Island Nat'l Cem, NY",
//     platoon: "1st",
//     bio: 'First Lieutenant Robert Brian Casey from Idaho Falls, \
//     Idaho was killed in an aircraft accident during A6 Intruder \
//     training at Cherry Point MCAS on August 26, 1969.',
//     bioHtml: markdown.toHTML('First Lieutenant Robert Brian Casey from Idaho Falls, \
//     Idaho was killed in an aircraft accident during A6 Intruder \
//     training at Cherry Point MCAS on August 26, 1969.')
//   },
//   {
//     photo: "/assets/images/01-cooper-coop.png",
//     name: "Cooper, C Richard (Coop)",
//     date: "3 October 1945 - 25 November 1968",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "1st",
//     bio: 'First Lieutenant Donald Cooper of Greenburg, Pennsylvania \
//     was born on October 3, 1945.  He was killed in jet training on \
//     November 25, 1968.  First Lieutenant Cooper entered an approach turn \
//     stall and crashed near Forest Sherman Field in Pensacola, Florida.',
//     bioHtml: markdown.toHTML('First Lieutenant Donald Cooper of Greenburg, Pennsylvania \
//     was born on October 3, 1945.  He was killed in jet training on \
//     November 25, 1968.  First Lieutenant Cooper entered an approach turn \
//     stall and crashed near Forest Sherman Field in Pensacola, Florida.')
//   },
//   {
//     photo: "/assets/images/01-banning-john.png",
//     name: "Banning, Johnathon Jacques (John)",
//     date: "22 March 1943 - 4 November 1973",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "1st",
//     bio: 'Captain John Jacques Banning was born on March 22, 1943 in \
//     Joplin, Missouri.  He was married on November 25, 1967 in North Kansas \
//     City, Missouri to the former Sharon Kay Lucas.  They had two sons, \
//     Matthew and Benjamin together and the couple maintained their \
//     residence in Dale City, Virginia. Captain Banning graduated from \
//     Northwest Missouri State College in June 1967 where he majored in \
//     Biology and Sociology.  Banning died while swimming at \
//     Okinawa.  \n\nJohn Jacques Banning was awarded a silver star \
//     for gallantry in his actions on May 25, 1968.  \n  \n*"The President of \
//     the United States of America takes pleasure in presenting the Silver Star \
//     to Second Lieutenant John Jacques Banning (MCSN: 0-102452), United States \
//     Marine Corps, for conspicuous gallantry and intrepidity in action while \
//     serving as a Platoon Commander with Company A, First Tank Battalion, \
//     FIRST Marine Division (Rein.), FMF, in connection with combat operations \
//     against the enemy in the Republic of Vietnam. On the evening of 25 May 1968, \
//     while occupying a defensive position near Hue, Second Lieutenant Banning\'s \
//     unit was attached to elements of the U.S. Army\'s 101st Airborne Division \
//     when the driver of his tank suddenly observed a large North Vietnamese \
//     Army force silently approaching the perimeter and preparing to assault \
//     the friendly position. Realizing the seriousness of the situation, \
//     Second Lieutenant Banning directed his men to wait for the enemy to advance \
//     further before commencing fire. When approximately one-half of the enemy \
//     had penetrated the perimeter, he directed the delivery of a heavy volume \
//     of accurate fire on the hostile force. Ignoring the intense anti-tank \
//     rocket fire being directed at his tank, he skillfully utilized a night \
//     observation device which enabled him to pinpoint the North Vietnamese \
//     soldiers while continuing to direct his tank\'s suppressive fire, forcing \
//     the enemy to flee in panic and confusion. His heroic and timely actions \
//     inspired all who served with him and were instrumental in his crew \
//     accounting for twelve North Vietnamese soldiers confirmed killed and \
//     numerous weapons captured. By his courage, aggressive leadership and \
//     unwavering devotion to duty in the face of great personal danger, \
//     Second Lieutenant Banning upheld the highest traditions of the Marine \
//     Corps and of the United States Naval Service."*',
//     bioHtml: markdown.toHTML('Captain John Jacques Banning was born on March 22, 1943 in \
//     Joplin, Missouri.  He was married on November 25, 1967 in North Kansas \
//     City, Missouri to the former Sharon Kay Lucas.  They had two sons, \
//     Matthew and Benjamin together and the couple maintained their \
//     residence in Dale City, Virginia. Captain Banning graduated from \
//     Northwest Missouri State College in June 1967 where he majored in \
//     Biology and Sociology.  Banning died while swimming at \
//     Okinawa.  \n\nJohn Jacques Banning was awarded a silver star \
//     for gallantry in his actions on May 25, 1968.  \n  \n*"The President of \
//     the United States of America takes pleasure in presenting the Silver Star \
//     to Second Lieutenant John Jacques Banning (MCSN: 0-102452), United States \
//     Marine Corps, for conspicuous gallantry and intrepidity in action while \
//     serving as a Platoon Commander with Company A, First Tank Battalion, \
//     FIRST Marine Division (Rein.), FMF, in connection with combat operations \
//     against the enemy in the Republic of Vietnam. On the evening of 25 May 1968, \
//     while occupying a defensive position near Hue, Second Lieutenant Banning\'s \
//     unit was attached to elements of the U.S. Army\'s 101st Airborne Division \
//     when the driver of his tank suddenly observed a large North Vietnamese \
//     Army force silently approaching the perimeter and preparing to assault \
//     the friendly position. Realizing the seriousness of the situation, \
//     Second Lieutenant Banning directed his men to wait for the enemy to advance \
//     further before commencing fire. When approximately one-half of the enemy \
//     had penetrated the perimeter, he directed the delivery of a heavy volume \
//     of accurate fire on the hostile force. Ignoring the intense anti-tank \
//     rocket fire being directed at his tank, he skillfully utilized a night \
//     observation device which enabled him to pinpoint the North Vietnamese \
//     soldiers while continuing to direct his tank\'s suppressive fire, forcing \
//     the enemy to flee in panic and confusion. His heroic and timely actions \
//     inspired all who served with him and were instrumental in his crew \
//     accounting for twelve North Vietnamese soldiers confirmed killed and \
//     numerous weapons captured. By his courage, aggressive leadership and \
//     unwavering devotion to duty in the face of great personal danger, \
//     Second Lieutenant Banning upheld the highest traditions of the Marine \
//     Corps and of the United States Naval Service."*')
//   },
//   {
//     photo: "/assets/images/01-brinson-jim.png",
//     name: "Brinson, James Albert Jr. (Jim)",
//     date: "31 December 1944 - 12 October 2006",
//     restingPlace: "Millen Cemetery, GA",
//     platoon: "1st",
//     bio: 'Colonel James A. Brinson was the son of James A. Brinson Sr. and Frances \
//     Lovett Brinson, and a brother to Bobby. He was a retired colonel of the U.S. \
//     Marine Corp and spent the last 10 years of his life in Buford, GA. \
//     He served in Vietnam, and was awarded several medals, including two purple \
//     hearts. Col. Brinson married Donna Brinson of Buford, and they had a son, \
//     Christopher J. Brinson. Col. Brinson was a member of the Masonic Lodge \
//     242 and a member of the Celebration Baptist Church in Hoschton.',
//     bioHtml: markdown.toHTML('Colonel James A. Brinson was the son of James A. Brinson Sr. and Frances \
//     Lovett Brinson, and a brother to Bobby. He was a retired colonel of the U.S. \
//     Marine Corp and spent the last 10 years of his life in Buford, GA. \
//     He served in Vietnam, and was awarded several medals, including two purple \
//     hearts. Col. Brinson married Donna Brinson of Buford, and they had a son, \
//     Christopher J. Brinson. Col. Brinson was a member of the Masonic Lodge \
//     242 and a member of the Celebration Baptist Church in Hoschton.')
//   },
//   {
//     photo: "/assets/images/01-burkhart-joe.png",
//     name: "Burkhart, Joseph J (Joseph)",
//     date: "28 June 1943 - 22 May 1995",
//     restingPlace: "unk: res at death, Tampa,  FL",
//     platoon: "1st",
//     bio: 'Captain Joseph Burkhart was from Bedford, Indiana and spent \
//     five years with the United States Marine Corps from June 29, 1965 \
//     through March 17, 1970. He was a graduate of Indiana University \
//     and died in Tampa, Florida on May 22, 1995.',
//     bioHtml: markdown.toHTML('Captain Joseph Burkhart was from Bedford, Indiana and spent \
//     five years with the United States Marine Corps from June 29, 1965 \
//     through March 17, 1970. He was a graduate of Indiana University \
//     and died in Tampa, Florida on May 22, 1995.')
//   },
//   {
//     photo: "/assets/images/01-chafey-merritt.png",
//     name: "Chafey, Merritt Neville, IV (Merritt)",
//     date: "25 June 1946 - 26 June 2005",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "1st",
//     bio:'Second Lieutenant Merritt N. Chafey IV of Scottsdale, Arizona \
//     married wife Kieko Yoshi Chafey in San Diego, California in 1977.  \
//     Second Lieutenant Chafey died at age 59 in San Diego, California.',
//     bioHtml: markdown.toHTML('Second Lieutenant Merritt N. Chafey IV of Scottsdale, Arizona \
//     married wife Kieko Yoshi Chafey in San Diego, California in 1977.  \
//     Second Lieutenant Chafey died at age 59 in San Diego, California.')
//   },
//   {
//     photo: "/assets/images/01-chambers-owen.png",
//     name: "Chambers, Owen Sterling (Owen)",
//     date: "4 July 1941 - 19 June 1982",
//     restingPlace: "Unk: Parents @: Beaufort Nat'l Cem, SC",
//     platoon: "1st",
//     bio: 'First Lieutenant Owen S. Chambers of Beaufort, South Carolina was \
//     with the United States Marine Corps from June 13, 1965 through June 15, \
//     1970.  1st Lieutenant Chambers passed away on June 19, 1982.',
//     bioHtml: markdown.toHTML('First Lieutenant Owen S. Chambers of Beaufort, South Carolina was \
//     with the United States Marine Corps from June 13, 1965 through June 15, \
//     1970.  1st Lieutenant Chambers passed away on June 19, 1982.')
//   },
//   {
//     photo: "/assets/images/01-champe-randy.png",
//     name: "Champe, Charles Randall (Randy)",
//     date: "13 February 1945 - 13 June 1991",
//     restingPlace: "Santa Fe Natl Cem, NM",
//     platoon: "1st",
//     bio: 'Captain Charles Randall Champe served three tours with the USMC \
//     and then left the Marine Corps to join the \
//     Los Angeles Police Department.  Police Officer Randy Champe was operating \
//     a police helicopter, "Air 12", when it suffered a mechanical failure and crashed near Vernon Street \
//     and Raymond Avenue. Both crew members were killed, as well as a civilian \
//     on the ground.  \n\nMore than 2,000 law enforcement officers from throughout \
//     Southern California converged on the Hollywood Hills to honor them. \
//     More than 30 helicopters saluted the fallen officers with a 10-minute \
//     flyover as part of the smoggy morning ceremony at Forest Lawn Memorial Park \
//     cemetery. The memorial service opened with a bagpipe rendition of \
//     "Amazing Grace" and ended 90 minutes later with the somber blasts of "Taps" \
//     from a gleaming trumpet.  \n\nPolice and military honor guards paid tribute \
//     to the two officers with a 21-gun salute, followed by the ceremonial folding \
//     of the American flags that had been draped over the caskets. Gates and \
//     Capt. Robert Woods, commanding officer of the Air Support Division, \
//     presented the flags to Sue Champe, and Lynette Howe the widows.  \n\nChampe, \
//     a 17-year veteran and the helicopter\'s TFO, served as a Marine in Vietnam.  \n\nIn \
//     memory of the two officers, Police Department officials said the unit \
//     designation "Air 12," which had been assigned to Champe and Howe, will no \
//     longer be used by the department.',
//     bioHtml: markdown.toHTML('Captain Charles Randall Champe served three tours with the USMC \
//     and then left the Marine Corps to join the \
//     Los Angeles Police Department.  Police Officer Randy Champe was operating \
//     a police helicopter, "Air 12", when it suffered a mechanical failure and crashed near Vernon Street \
//     and Raymond Avenue. Both crew members were killed, as well as a civilian \
//     on the ground.  \n\nMore than 2,000 law enforcement officers from throughout \
//     Southern California converged on the Hollywood Hills to honor them. \
//     More than 30 helicopters saluted the fallen officers with a 10-minute \
//     flyover as part of the smoggy morning ceremony at Forest Lawn Memorial Park \
//     cemetery. The memorial service opened with a bagpipe rendition of \
//     "Amazing Grace" and ended 90 minutes later with the somber blasts of "Taps" \
//     from a gleaming trumpet.  \n\nPolice and military honor guards paid tribute \
//     to the two officers with a 21-gun salute, followed by the ceremonial folding \
//     of the American flags that had been draped over the caskets. Gates and \
//     Capt. Robert Woods, commanding officer of the Air Support Division, \
//     presented the flags to Sue Champe, and Lynette Howe the widows.  \n\nChampe, \
//     a 17-year veteran and the helicopter\'s TFO, served as a Marine in Vietnam.  \n\nIn \
//     memory of the two officers, Police Department officials said the unit \
//     designation "Air 12," which had been assigned to Champe and Howe, will no \
//     longer be used by the department.'),
//     bioPhoto: "/assets/images/01-champe-randy2.jpg",
//   },
//   {
//     photo: "/assets/images/01-chisea-robert.png",
//     name: "Chisea, Robert E (Robert)",
//     date: "5 October 1941 - 18 August 1991",
//     restingPlace: "Unk: last known address: Adel, IA",
//     platoon: "1st",
//     bio: 'Second Lieutenant Robert E. Chisea of Des Moines, Iowa completed a \
//     tour with the United States Marine Corps in Vietnam.  \
//     He passed away at the age of 49 in Adel, Iowa.',
//     bioHtml: markdown.toHTML('Second Lieutenant Robert E. Chisea of Des Moines, Iowa completed a \
//     tour with the United States Marine Corps in Vietnam.  \
//     He passed away at the age of 49 in Adel, Iowa.')
//   },
//
//   // *** 2nd platoon
//   {
//     photo: "/assets/images/02-decraene-alan.png",
//     name: "DeCraene, Alan Charles (Alan)",
//     date: "9 May 1945 - 16 February 1970",
//     restingPlace: "Centre County Mem Park, PA",
//     platoon: "2nd",
//     bio: 'First Lieutenant Alan Charles De Craene was born in Kewanee, \
//     Illinois. He enlisted in the Marine Corps and served during the Vietnam Conflict. \
//     Rank of First Lieutenant. Served with III Marine Amphibious Force, 1st MAW, \
//     Marine Aircraft Group 16, HMM 161. Service occupation of Pilot H M M CH 46. \
//     First Lieutenant De Craene died in a helicopter crash on February 16, 1970 in or around South Vietnam, \
//     Thua Thien province while flying a night time emergency resupply mission \
//     in inclement weather. He earned the following awards:  \n\n\
//     -   National Defense Service Medal  \n\
//     -   Vietnam Campaign Medal  \n\
//     -   Vietnam Service Medal  \n\n\
//     First Lieutenant De Craene is honored on the Vietnam Veteran\'s Memorial, VVM Wall, Panel 13w, Line 19.',
//     bioHtml: markdown.toHTML('First Lieutenant Alan Charles De Craene was born in Kewanee, \
//     Illinois. He enlisted in the Marine Corps and served during the Vietnam Conflict. \
//     Rank of First Lieutenant. Served with III Marine Amphibious Force, 1st MAW, \
//     Marine Aircraft Group 16, HMM 161. Service occupation of Pilot H M M CH 46. \
//     First Lieutenant De Craene died in a helicopter crash on February 16, 1970 in or around South Vietnam, \
//     Thua Thien province while flying a night time emergency resupply mission \
//     in inclement weather. He earned the following awards:  \n\n\
// -   National Defense Service Medal  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// First Lieutenant De Craene is honored on the Vietnam Veteran\'s Memorial, VVM Wall, Panel 13w, Line 19.'),
//     bioPhoto: "/assets/images/02-decraene-alan2.jpg",
//   },
//   {
//     photo: "/assets/images/02-eckenrode-dave.png",
//     name: "Eckenrode, David John (Dave)",
//     date: "9 May 1945 - 21 July 1968",
//     restingPlace: "Centre County Mem Park, PA",
//     platoon: "2nd",
//     bio:'Second Lieutenant David John Eckenrode was born in Bellefonte, \
//     Pennsylvania. Service number 0102675. He enlisted in the Marine Corps and \
//     served during the Vietnam Conflict. He achieved rank of Second Lieutenant and served \
//     with 7th Engineer Battalion, B Company. Second Lieutenant Eckenrode was \
//     killed on July 21, 1968 in or around South Vietnam, Quang Nam province. \
//     when he tripped a booby-trap made from a 105mm artillery shell. Second Lieutenant Eckenrode earned the \
//     following awards:  \n\n\
//     -   National Defense Service Medal  \n\
//     -   Purple Heart  \n\
//     -   Vietnam Campaign Medal  \n\
//     -   Vietnam Service Medal  \n\n\
//     Second Lietenant Second Lieutenant Eckenrode is honored on the Vietnam \
//     Veteran\'s Memorial, VVM Wall, Panel 51w, Line 25.',
//     bioHtml: markdown.toHTML('Second Lieutenant David John Eckenrode was born in Bellefonte, \
//     Pennsylvania. Service number 0102675. He enlisted in the Marine Corps and \
//     served during the Vietnam Conflict. He achieved rank of Second Lieutenant and served \
//     with 7th Engineer Battalion, B Company. Second Lieutenant Eckenrode was \
//     killed on July 21, 1968 in or around South Vietnam, Quang Nam province. \
//     when he tripped a booby-trap made from a 105mm artillery shell. Second Lieutenant Eckenrode earned the \
//     following awards:  \n\n\
// -   National Defense Service Medal  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lieutenant Eckenrode is honored on the Vietnam \
//     Veteran\'s Memorial, VVM Wall, Panel 51w, Line 25.'),
//     bioPhoto: "/assets/images/02-eckenrode-dave2.jpg",
//   },
//   {
//     photo: "/assets/images/02-gates-albert.png",
//     name: "Gates, Albert Henry Jr. (Albert)",
//     date: "1 February 1946 - 7 March 1970",
//     restingPlace: "Courts of the MIssing, MIA Mem, HI",
//     platoon: "2nd",
//     bio: 'Captain Albert Henry Gates Jr. of East Greenbush, New York \
//     was a member of the Marine Medium \
//     Helicopter Squadron 263, Marine Air Group 15, 9th Marine Amphibious \
//     Brigade. On March 7, 1970, he was aircraft commander of a Boeing Sea \
//     Knight Cargo Helicopter (CH-46D) flying near Da Nang, South Vietnam, \
//     when the aircraft crashed into the water killing him. His remains were \
//     not recovered. His name is inscribed on the Courts of the Missing at \
//     the Honolulu Memorial.  Captain Albert Henry Gates, Jr. is is honored on \
//     Panel 13W, Row 92 of the Vietnam Veterans Memorial',
//     bioHtml: markdown.toHTML('Captain Albert Henry Gates Jr. of East Greenbush, New York \
//     was a member of the Marine Medium \
//     Helicopter Squadron 263, Marine Air Group 15, 9th Marine Amphibious \
//     Brigade. On March 7, 1970, he was aircraft commander of a Boeing Sea \
//     Knight Cargo Helicopter (CH-46D) flying near Da Nang, South Vietnam, \
//     when the aircraft crashed into the water killing him. His remains were \
//     not recovered. His name is inscribed on the Courts of the Missing at \
//     the Honolulu Memorial.  Captain Albert Henry Gates, Jr. is is honored on \
//     Panel 13W, Row 92 of the Vietnam Veterans Memorial'),
//     bioPhoto: "/assets/images/02-gates-albert2.jpg",
//   },
//   {
//     photo: "/assets/images/02-gibson-carl.png",
//     name: "Gibson, Carl Reed (Carl)",
//     date: "31 May 1945 - 30 April 1968",
//     restingPlace: "Univ of VA Confederate Cem, VA",
//     platoon: "2nd",
//     bio: 'Second Lieutenant Carl Reed Gibson was an 0801 artillery Forward \
//     Observer with the 3rd Battalion, 12th Marine Regiment, Third Marine \
//     Division,  III Marine Amphibious Force. Carl was born 31 May 1945 in \
//     Washington D.C., the son of Dr. and Mrs. Robert Carl Gibson.  Dr. Gibson \
//     was Director of Instruction in the Albemarle County School System in the \
//     late 50’s and early 60’s and was head of the Department of Education at \
//     George Mason College in Fairfax at the time of his son’s death. Carl \
//     graduated from Radford High School in 1963 and entered the University \
//     of Virginia where he was a member of the soccer team, circulation manager \
//     of the Cavalier Daily newspaper, and on the Dean’s List academically.  \
//     He was a member of Kappa Sigma fraternity, majored in Foreign Affairs, \
//     and attended UVa on a Navy ROTC Scholarship.  When he graduated in 1967 \
//     he was commander of the Navy ROTC Drill Team and the Drum and Bugle Corps,  \
//     which he was credited with organizing and training according to Major M. E. \
//     Morris, the 1967 Marine Officer Instructor at UVa.  Gibson was rated the \
//     top man in the battalion in ability and performance, and at his \
//     commissioning ceremony on 3 June 1967 he was presented a special leadership \
//     award –a Marine Officer’s Sword- in “recognition of his demonstrated \
//     outstanding leadership abilities and his many contributions which helped \
//     foster esprit de corps in the midshipman battalion.”  After graduation \
//     2Lt Gibson was sent to The Basic School at Quantico, Va and later to \
//     Artillery Officers School at Fort Sill, Oklahoma. Carl married Sallie \
//     Anne Guerrant of Falcon Drive, Charlottesville on March 12 1967.  \
//     She was a second year student at Mary Baldwin College in Staunton.  \n\n Carl \
//     arrived in Vietnam on 18 April 1968 and was assigned as an FO \
//     (Forward Observer) with the 12th Marines in support of BLT (Battalion \
//       Landing Team) 2/4.  "The Battle of Dai Do was known as Tet II and \
//       involved three Regiments/major elements of the 320th NVA Division which \
//       was trying to overrun the major supply bases at Dong Ha and Quang Tri.  \
//       Success would have undermined the entire DMZ (DeMilitarized Zone) defenses" \
//       according to the Commanding Officer of BLT 2/4,  then Lt. Col William \
//       Weise.  "Second Lieutenent Gibson participated and died in the Battle of \
//       Dai Do as an artillery FO providing much needed artillery fire support \
//       for the Marine infantrymen."  Carl is buried in the UVa Confederate \
//       Cemetery on Grounds at UVa in Charlottesville (at Alderman and McCormick).',
//     bioHtml: markdown.toHTML('Second Lieutenant Carl Reed Gibson was an 0801 artillery Forward \
//     Observer with the 3rd Battalion, 12th Marine Regiment, Third Marine \
//     Division,  III Marine Amphibious Force. Carl was born 31 May 1945 in \
//     Washington D.C., the son of Dr. and Mrs. Robert Carl Gibson.  Dr. Gibson \
//     was Director of Instruction in the Albemarle County School System in the \
//     late 50’s and early 60’s and was head of the Department of Education at \
//     George Mason College in Fairfax at the time of his son’s death. Carl \
//     graduated from Radford High School in 1963 and entered the University \
//     of Virginia where he was a member of the soccer team, circulation manager \
//     of the Cavalier Daily newspaper, and on the Dean’s List academically.  \
//     He was a member of Kappa Sigma fraternity, majored in Foreign Affairs, \
//     and attended UVa on a Navy ROTC Scholarship.  When he graduated in 1967 \
//     he was commander of the Navy ROTC Drill Team and the Drum and Bugle Corps,  \
//     which he was credited with organizing and training according to Major M. E. \
//     Morris, the 1967 Marine Officer Instructor at UVa.  Gibson was rated the \
//     top man in the battalion in ability and performance, and at his \
//     commissioning ceremony on 3 June 1967 he was presented a special leadership \
//     award –a Marine Officer’s Sword- in “recognition of his demonstrated \
//     outstanding leadership abilities and his many contributions which helped \
//     foster esprit de corps in the midshipman battalion.”  After graduation \
//     2Lt Gibson was sent to The Basic School at Quantico, Va and later to \
//     Artillery Officers School at Fort Sill, Oklahoma. Carl married Sallie \
//     Anne Guerrant of Falcon Drive, Charlottesville on March 12 1967.  \
//     She was a second year student at Mary Baldwin College in Staunton.  \n\n Carl \
//     arrived in Vietnam on 18 April 1968 and was assigned as an FO \
//     (Forward Observer) with the 12th Marines in support of BLT (Battalion \
//       Landing Team) 2/4.  "The Battle of Dai Do was known as Tet II and \
//       involved three Regiments/major elements of the 320th NVA Division which \
//       was trying to overrun the major supply bases at Dong Ha and Quang Tri.  \
//       Success would have undermined the entire DMZ (DeMilitarized Zone) defenses" \
//       according to the Commanding Officer of BLT 2/4,  then Lt. Col William \
//       Weise.  "Second Lieutenent Gibson participated and died in the Battle of \
//       Dai Do as an artillery FO providing much needed artillery fire support \
//       for the Marine infantrymen."  Carl is buried in the UVa Confederate \
//       Cemetery on Grounds at UVa in Charlottesville (at Alderman and McCormick).'),
//     bioPhoto: "/assets/images/02-gibson-carl2.jpg",
//   },
//   {
//     photo: "/assets/images/02-hagan-bob.png",
//     name: "Hagan, John Robert (Bob)",
//     date: "22 August 1945 - 31 March 1978",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "2nd",
//     bio: 'Major John Robert Hagan born on August 22, 1945. His hometown was Savannah, GA, and \
//     he was awarded a  silver star \
//     for gallantry in action during the Vietnam war.  \n  \n*"The President of \
//     the United States takes pleasure in presenting the Silver Star Medal to \
//     John R. Hagan (257666152), Second Lieutenant, U.S. Marine Corps, for \
//     conspicuous gallantry and intrepidity in action while serving with \
//     Company G, 2d Battalion, 9th Marines, 3d Marine Division (Rein.), FMF, \
//     in connection with combat operations against the enemy in the Republic \
//     of Vietnam on April 19, 1968. By his courage, aggressive fighting spirit \
//     and steadfast devotion to duty in the face of extreme personal danger, \
//     Second Lieutenant Hagan upheld the highest traditions of the Marine Corps \
//     and the United States Naval Service."*',
//     bioHtml: markdown.toHTML('Major John Robert Hagan born on August 22, 1945. His hometown was Savannah, GA, and \
//     he was awarded a  silver star \
//     for gallantry in action during the Vietnam war.  \n  \n*"The President of \
//     the United States takes pleasure in presenting the Silver Star Medal to \
//     John R. Hagan (257666152), Second Lieutenant, U.S. Marine Corps, for \
//     conspicuous gallantry and intrepidity in action while serving with \
//     Company G, 2d Battalion, 9th Marines, 3d Marine Division (Rein.), FMF, \
//     in connection with combat operations against the enemy in the Republic \
//     of Vietnam on April 19, 1968. By his courage, aggressive fighting spirit \
//     and steadfast devotion to duty in the face of extreme personal danger, \
//     Second Lieutenant Hagan upheld the highest traditions of the Marine Corps \
//     and the United States Naval Service."*')
//   },
//   {
//     photo: "/assets/images/02-donnelly-rick.png",
//     name: "Donnelly, William Richard Jr. (Rick)",
//     date: "15 September 1943 - 10 April 1994",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "2nd",
//     bio: 'Col. William R. Donnelly, 50, a director of the Marine Corps \
//     War College at Quantico, Va., was born in McMinnville, Oregon. \
//     He enlisted in the Marines in 1961 and was appointed to the Naval \
//     Academy and graduated in 1967. Col. Donnelly later received master\'s \
//     degrees in computer science and military studies.  Col. Donnely was \
//     married to wife Diana "Danny" Donnelly of Woodbridge.  \
//     They had three children, Melissa Donnelly of New York and Kathleen and \
//     Timothy Donnelly, both of Woodbridge; his mother, Lillian G. Donnelly \
//     of Phoenix.  Donnelly also had two sisters, Paula Donnelly Roark \
//     of Takoma Park and Colleen Donnelly Vaz of Silver Spring; and a brother, \
//     Timothy G. Donnelly of Phoenix.  \n\nCol. Donnelly served in Vietnam as a \
//     rifle platoon commander. His personal decorations included the Silver Star, \
//     Legion of Merit and three Purple Heart medals. Below is the excerpt \
//     from his Silver Star.  \n  \n*"The President of the United States of \
//     America takes pleasure in presenting the Silver Star to Second \
//     Lieutenant William R. Donnelly, Jr. (MCSN: 0-101619), United \
//     States Marine Corps, for conspicuous gallantry and intrepidity \
//     in action while serving as a Platoon Commander with Company A, \
//     First Battalion, First Marines, FIRST Marine Division (Rein.), FMF, \
//     in connection with operations against the enemy in the Republic of \
//     Vietnam. On 4 February 1968, during Operation HUE CITY, three Marines \
//     moved forward of their unit\'s defensive perimeter to retrieve a \
//     mortally wounded comrade when they suddenly came under intense small \
//     arms, automatic weapons and rocket fire from a well entrenched \
//     North Vietnamese Army force. The initial burst of fire seriously \
//     wounded all the men and pinned them down. Realizing the seriousness \
//     of the situation, Second Lieutenant Donnelly unhesitatingly ran to \
//     the aid of the injured men. Disregarding the hostile fire around him, \
//     he picked up one of the Marines and carried him to a covered position. \
//     Successfully evacuating a second Marine, he returned to the hazardous \
//     area a third time and picked up the remaining injured man. Although \
//     wounded by fragments from an exploding enemy round, he ignored his \
//     painful injury and continued his determined efforts until he reached \
//     a covered position. By his courage, unfaltering determination and \
//     selfless devotion to duty in the face of extreme personal danger, \
//     Second Lieutenant Donnelly saved the lives of the wounded Marines and \
//     upheld the highest traditions of the Marine Corps and of the United \
//     States Naval Service."*',
//     bioHtml: markdown.toHTML('Col. William R. Donnelly, 50, a director of the Marine Corps \
//     War College at Quantico, Va., was born in McMinnville, Oregon. \
//     He enlisted in the Marines in 1961 and was appointed to the Naval \
//     Academy and graduated in 1967. Col. Donnelly later received master\'s \
//     degrees in computer science and military studies.  Col. Donnely was \
//     married to wife Diana "Danny" Donnelly of Woodbridge.  \
//     They had three children, Melissa Donnelly of New York and Kathleen and \
//     Timothy Donnelly, both of Woodbridge; his mother, Lillian G. Donnelly \
//     of Phoenix.  Donnelly also had two sisters, Paula Donnelly Roark \
//     of Takoma Park and Colleen Donnelly Vaz of Silver Spring; and a brother, \
//     Timothy G. Donnelly of Phoenix.  \n\nCol. Donnelly served in Vietnam as a \
//     rifle platoon commander. His personal decorations included the Silver Star, \
//     Legion of Merit and three Purple Heart medals. Below is the excerpt \
//     from his Silver Star.  \n  \n*"The President of the United States of \
//     America takes pleasure in presenting the Silver Star to Second \
//     Lieutenant William R. Donnelly, Jr. (MCSN: 0-101619), United \
//     States Marine Corps, for conspicuous gallantry and intrepidity \
//     in action while serving as a Platoon Commander with Company A, \
//     First Battalion, First Marines, FIRST Marine Division (Rein.), FMF, \
//     in connection with operations against the enemy in the Republic of \
//     Vietnam. On 4 February 1968, during Operation HUE CITY, three Marines \
//     moved forward of their unit\'s defensive perimeter to retrieve a \
//     mortally wounded comrade when they suddenly came under intense small \
//     arms, automatic weapons and rocket fire from a well entrenched \
//     North Vietnamese Army force. The initial burst of fire seriously \
//     wounded all the men and pinned them down. Realizing the seriousness \
//     of the situation, Second Lieutenant Donnelly unhesitatingly ran to \
//     the aid of the injured men. Disregarding the hostile fire around him, \
//     he picked up one of the Marines and carried him to a covered position. \
//     Successfully evacuating a second Marine, he returned to the hazardous \
//     area a third time and picked up the remaining injured man. Although \
//     wounded by fragments from an exploding enemy round, he ignored his \
//     painful injury and continued his determined efforts until he reached \
//     a covered position. By his courage, unfaltering determination and \
//     selfless devotion to duty in the face of extreme personal danger, \
//     Second Lieutenant Donnelly saved the lives of the wounded Marines and \
//     upheld the highest traditions of the Marine Corps and of the United \
//     States Naval Service."*'),
//     bioPhoto: "/assets/images/02-donnelly-rick2.jpg",
//   },
//   {
//     photo: "/assets/images/02-dopher-robert.png",
//     name: "Dopher, Robert Conrad Jr. (Robert)",
//     date: "16 August 1942 - 30 August 2010",
//     restingPlace: "Highland Lawn Cemetery, IN",
//     platoon: "2nd",
//     bio: 'Major Robert Conrad Dopher, Jr. of Satellite Beach, and formerly of \
//     Rolla, Missouri, passed away on August 30, 2010, at the age of 68 from \
//     Pulmonary Fibrosis. Bob was born in Terre Haute, IN, and graduated \
//     from Otter Creek High School. Upon graduation, he enlisted in the \
//     United State Marine Corps. During his career he was sent to Stanford \
//     University through Operation Bootstrap, officer candidate school, \
//     helicopter pilot training and missile design and technology school. \
//     As an OV 10, Huey and Cobra pilot he saw action around the world. \
//     He was involved in the evacuation of Viet Nam as the last pilot of a \
//     cobra helicopter out of the country. Over the course of his career, \
//     Bob earned Air Medal Strike/Flight Award (with numeral 7), Vietnamese \
//     Service Medal, Vietnamese Cross of Gallantry with Palm, Air Medal \
//     Bronze with V, Navy Unit Commendation, Armed Forces Expeditionary Medal, \
//     Sea Service Deployment Ribbon, Humanitarian Service Medal 3rd award \
//     and the Good Conduct Medal 3rd Award. After service to his country, \
//     he went on to earn his Master\'s degree in Computer Science at the \
//     University of Missouri – Rolla and then went onto to retire from the \
//     Electrical Engineering Department. Before being diagnosed with \
//     Pulmonary Fibrosis, one of his greatest joys was traveling the country \
//     in his motor home to see the wonderful sites our country has to offer. \
//     Bob was married to, Karen, of Satellite Beach for 39 years and they \
//     had four children: Cristopher of Brooklyn, New York, Rachel Walker of \
//     St Louis, and twins Becca and Marc of Greenville, SC.',
//     bioHtml: markdown.toHTML('Major Robert C. Dopher, Jr. of Satellite Beach, and formerly of \
//     Rolla, Missouri, passed away on August 30, 2010, at the age of 68 from \
//     Pulmonary Fibrosis. Bob was born in Terre Haute, IN, and graduated \
//     from Otter Creek High School. Upon graduation, he enlisted in the \
//     United State Marine Corps. During his career he was sent to Stanford \
//     University through Operation Bootstrap, officer candidate school, \
//     helicopter pilot training and missile design and technology school. \
//     As an OV 10, Huey and Cobra pilot he saw action around the world. \
//     He was involved in the evacuation of Viet Nam as the last pilot of a \
//     cobra helicopter out of the country. Over the course of his career, \
//     Bob earned Air Medal Strike/Flight Award (with numeral 7), Vietnamese \
//     Service Medal, Vietnamese Cross of Gallantry with Palm, Air Medal \
//     Bronze with V, Navy Unit Commendation, Armed Forces Expeditionary Medal, \
//     Sea Service Deployment Ribbon, Humanitarian Service Medal 3rd award \
//     and the Good Conduct Medal 3rd Award. After service to his country, \
//     he went on to earn his Master\'s degree in Computer Science at the \
//     University of Missouri – Rolla and then went onto to retire from the \
//     Electrical Engineering Department. Before being diagnosed with \
//     Pulmonary Fibrosis, one of his greatest joys was traveling the country \
//     in his motor home to see the wonderful sites our country has to offer. \
//     Bob was married to, Karen, of Satellite Beach for 39 years and they \
//     had four children: Cristopher of Brooklyn, New York, Rachel Walker of \
//     St Louis, and twins Becca and Marc of Greenville, SC.'),
//     bioPhoto: "/assets/images/02-dopher-robert2.jpg",
//   },
//   {
//     photo: "/assets/images/02-evans-mike.png",
//     name: "Evans, Michael Lee (Mike)",
//     date: "27 July 1945 - 16 March 2006",
//     restingPlace: "Evergreen Cem, KY",
//     platoon: "2nd",
//     bio: 'Captain Michael Lee Evans was born on July 27th, 1945 and was a \
//     graduate of the University of Louisville. He served as a Captain \
//     in the Marine Corp for 12 years, serving two consecutive tours in \
//     Vietnam for which he received many high decorations. He was a retired \
//     SPAWARS Department of Navy for 18 years in Crystal City, VA and a member \
//     of Iroquois Presbyterian Church.  Michael passed away on March 16th, \
//     2006 at the age of 60 at the Veterans Administration Hospital.',
//     bioHtml: markdown.toHTML('Captain Michael Lee Evans was born on July 27th, 1945 and was a \
//     graduate of the University of Louisville. He served as a Captain \
//     in the Marine Corp for 12 years, serving two consecutive tours in \
//     Vietnam for which he received many high decorations. He was a retired \
//     SPAWARS Department of Navy for 18 years in Crystal City, VA and a member \
//     of Iroquois Presbyterian Church.  Michael passed away on March 16th, \
//     2006 at the age of 60 at the Veterans Administration Hospital.')
//   },
//   {
//     photo: "/assets/images/02-ferguson-michael.png",
//     name: "Ferguson, Michael Jeromy (Michael)",
//     date: "11 August 1945 - 25 January 2002",
//     restingPlace: "Dallas Ft Worth Nat'l Cem, TX",
//     platoon: "2nd",
//     bio: 'Lieutenant Colonel Michael J. Ferguson of Lakewood, California was \
//     with the Marine Corps from June 7, 1967 until June 30, 1989. He passed \
//     away on January 25, 2002.',
//     bioHtml: markdown.toHTML('Lieutenant Colonel Michael J. Ferguson of Lakewood, California was \
//     with the Marine Corps from June 7, 1967 until June 30, 1989. He passed \
//     away on January 25, 2002.')
//   },
//   {
//     photo: "/assets/images/02-ganter-bill.png",
//     name: "Ganter, William James (Bill)",
//     date: "13 January 1946 - 3 August 2007",
//     restingPlace: "Richmond, KY",
//     platoon: "2nd",
//     bio: 'Lt. Col. William James Ganter, Jr. (Ret.), 61, of Jacks Creek Road, \
//     Richmond, the husband of Sandra, was born January 13, 1946, in Oil City, \
//     PA, to Agnes Fiala Ganter Harvey and the late William James Ganter. \
//     He was a regional sales manger for ROI RAM Optical Instrumentation, \
//     a U. S. Marine veteran and Purple Heart recipient of Vietnam and Desert \
//     Storm and a retired Colonel of the U. S. Army. Mr. Ganter got his MBA from \
//     Rutgers University and was a member \
//     of the B P O E Lodge # 776 of Washington, PA, the V.F.W. Post # 2071 of \
//     Pennsylvania, the American Legion Post # 0179 of New Jersey and a former \
//     volunteer fireman.  \n\nIn addition to his loving wife, Sandra Kehler Ganter, \
//     of Richmond, KY, he is survived by his daughter, Rachel Elaine Ganter of \
//     North Webster, IN, his mother, Agnes Harvey of Wilmington, NC; one sister, \
//     Barbara (Philip) Blandine of Wilmington, NC; three brothers, \
//     Michael (Elizabeth) Ganter of Pittsburgh, PA, Harry (Linda) Ganter of \
//     Savannah, GA and Jeffrey Ganter of Yardley, PA; one aunt, Fredia Fischer \
//     of Orange City, FL; one uncle Robert (Eleanor) Ganter of Matawan, \
//     NJ and several nieces, nephews, cousins and friends.',
//     bioHtml: markdown.toHTML('Lt. Col. William James Ganter, Jr. (Ret.), 61, of Jacks Creek Road, \
//     Richmond, the husband of Sandra, was born January 13, 1946, in Oil City, \
//     PA, to Agnes Fiala Ganter Harvey and the late William James Ganter. \
//     He was a regional sales manger for ROI RAM Optical Instrumentation, \
//     a U. S. Marine veteran and Purple Heart recipient of Vietnam and Desert \
//     Storm and a retired Colonel of the U. S. Army. Mr. Ganter got his MBA from \
//     Rutgers University and was a member \
//     of the B P O E Lodge # 776 of Washington, PA, the V.F.W. Post # 2071 of \
//     Pennsylvania, the American Legion Post # 0179 of New Jersey and a former \
//     volunteer fireman.  \n\nIn addition to his loving wife, Sandra Kehler Ganter, \
//     of Richmond, KY, he is survived by his daughter, Rachel Elaine Ganter of \
//     North Webster, IN, his mother, Agnes Harvey of Wilmington, NC; one sister, \
//     Barbara (Philip) Blandine of Wilmington, NC; three brothers, \
//     Michael (Elizabeth) Ganter of Pittsburgh, PA, Harry (Linda) Ganter of \
//     Savannah, GA and Jeffrey Ganter of Yardley, PA; one aunt, Fredia Fischer \
//     of Orange City, FL; one uncle Robert (Eleanor) Ganter of Matawan, \
//     NJ and several nieces, nephews, cousins and friends.')
//   },
//   {
//     photo: "/assets/images/03-hansen-bob.png",
//     name: "Hansen, Robert William (Bob)",
//     date: "26 January 1944 - 4 January 2009",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "3rd",
//     bio: 'Robert W. Hansen Colonel, USMC (Ret.) Robert W. Hansen, husband of \
//     Nancy (Eastham) Hansen; father of sons, Robert "Swede" Hansen and Alan \
//     "Alwood" Hansen, father-in-law of Kris (Barry) Hansen and Ashley (Garman) \
//     Hansen, died at home on January 4, 2009 of a sudden heart attack. Bob was \
//     a consummate family man who loved his wife, his sons, his daughters-in-law, \
//     his grandchildren, and his friends with unrelenting passion and care. Bob\'s \
//     huge smile would light up the room when he was with friends and family, \
//     and nothing made him happier than spending time with and hugging his four \
//     grandchildren: Madeline, Evan, Julia, and Travis. Bob had a tender heart \
//     and inspired those around him with his encouraging words and gratitude to \
//     God for all good things. While friends and family of Bob mourn his passing, \
//     his death is anything but sad for the trout of Northern Maryland and pesky \
//     squirrels impertinent enough to attempt to pilfer Nancy\'s bird seed. \
//     Bob was born in Northville, Michigan in 1944. He earned his BA degree \
//     from the University of New Mexico in 1967 and his MBA from Syracuse \
//     University in 1975. He retired as a Colonel from the U.S. Marine Corps \
//     in 1996. He served in the Marine Corps for 30 years and proudly represented \
//     his country in the Vietnam War in \'68 and the Gulf War in \'91. His \
//     numerous awards include: the Legion of Merit, Bronze Star with combat \'V\'; \
//     Defense Meritorious Service Medal and Combat Action Ribbon. \
//     His military career took him to the exotic locales of Quantico, VA; \
//     Hawaii; Okinawa; Syracuse, NY; Albany, GA; Camp Lejeune, NC; Bowie, MD; \
//     and Camp Pendleton, CA. After retiring from the Marine Corps, he worked \
//     for SAIC in the Washington, DC area and New Orleans, which he learned to \
//     love. At every stop along the way, he met incredible people and \
//     developed lifelong friendships. In his spare time Bob enjoyed riding his \
//     Harley, fishing with his kids and grandkids, watching sports, tracking \
//     the stock market, working on house projects when he got a "round tuit," \
//     and spending quality time with family. You always knew he was nearby when \
//     you heard his characteristic exclamations: "Yeah-Buddy!", "Good-on-ya!", \
//     "Life is Good!", "Oorah!", and "Semper Fi!"',
//     bioHtml: markdown.toHTML('Robert W. Hansen Colonel, USMC (Ret.) Robert W. Hansen, husband of \
//     Nancy (Eastham) Hansen; father of sons, Robert "Swede" Hansen and Alan \
//     "Alwood" Hansen, father-in-law of Kris (Barry) Hansen and Ashley (Garman) \
//     Hansen, died at home on January 4, 2009 of a sudden heart attack. Bob was \
//     a consummate family man who loved his wife, his sons, his daughters-in-law, \
//     his grandchildren, and his friends with unrelenting passion and care. Bob\'s \
//     huge smile would light up the room when he was with friends and family, \
//     and nothing made him happier than spending time with and hugging his four \
//     grandchildren: Madeline, Evan, Julia, and Travis. Bob had a tender heart \
//     and inspired those around him with his encouraging words and gratitude to \
//     God for all good things. While friends and family of Bob mourn his passing, \
//     his death is anything but sad for the trout of Northern Maryland and pesky \
//     squirrels impertinent enough to attempt to pilfer Nancy\'s bird seed. \
//     Bob was born in Northville, Michigan in 1944. He earned his BA degree \
//     from the University of New Mexico in 1967 and his MBA from Syracuse \
//     University in 1975. He retired as a Colonel from the U.S. Marine Corps \
//     in 1996. He served in the Marine Corps for 30 years and proudly represented \
//     his country in the Vietnam War in \'68 and the Gulf War in \'91. His \
//     numerous awards include: the Legion of Merit, Bronze Star with combat \'V\'; \
//     Defense Meritorious Service Medal and Combat Action Ribbon. \
//     His military career took him to the exotic locales of Quantico, VA; \
//     Hawaii; Okinawa; Syracuse, NY; Albany, GA; Camp Lejeune, NC; Bowie, MD; \
//     and Camp Pendleton, CA. After retiring from the Marine Corps, he worked \
//     for SAIC in the Washington, DC area and New Orleans, which he learned to \
//     love. At every stop along the way, he met incredible people and \
//     developed lifelong friendships. In his spare time Bob enjoyed riding his \
//     Harley, fishing with his kids and grandkids, watching sports, tracking \
//     the stock market, working on house projects when he got a "round tuit," \
//     and spending quality time with family. You always knew he was nearby when \
//     you heard his characteristic exclamations: "Yeah-Buddy!", "Good-on-ya!", \
//     "Life is Good!", "Oorah!", and "Semper Fi!"'),
//     bioPhoto: "/assets/images/03-hansen-bob2.jpg",
//
//   },
//
//   // 3rd Platoon
//   {
//     photo: "/assets/images/03-laslie-joe.png",
//     name: "Laslie, Joseph Taylor (Joe)",
//     date: "23 December 1944 - 26 May 1968",
//     restingPlace: "Attapulgus Methodist Ch Cem, GA",
//     platoon: "3rd",
//     bio: 'Second Lieutenant Joseph Taylor Laslie Jr from Attapulgus, \
//     Georgia. Service number 0102842. Enlisted in the Marine Corps. \
//     Served during the Vietnam Conflict. Rank of Second Lieutenant. \
//     Served with 9th Marine Amphibious Brigade, 2nd Battalion, 4th Marines, \
//     E Company. Casualty on May 25, 1968. This occurred in or around 7 km NW \
//     of Dong Ha, South Vietnam, Quang Tri province. Circumstances of death \
//     attributed to .. "Died through hostile action .. small arms fire". \
//     In the third week of May the North Vietnamese and Viet Kong forces launched \
//     their third - and as it turned out last major offensive of 1968. \
//     The freshly introduced 403th Division and other NVA/VC forces were active \
//     in Quang Tri Province, and BLT 2/4 was introduced into the fighting. \
//     The BLT 2/4 Marines lost 32 men in the fighting between 17 May and 06 June, \
//     with the majority - 19 men - killed in action in very heavy fighting near \
//     Nhi Ha on 25-29 May 1968. 2ndLt Laslie, who had volunteered for infantry \
//     duty in Basic School was killed while calling in supporting fires during \
//     the time of 25-29 May. He died on a medevec helicopter. Second Lieutenant \
//     Laslie earned the following awards  \n\n\
//     -   National Defense Service Medal  \n\
//     -   Purple Heart  \n\
//     -   Vietnam Campaign Medal  \n\
//     -   Vietnam Service Medal  \n\n\
//     He is honored on the Vietnam Veteran\'s Memorial, VVM Wall, Panel 68w, Line 4.',
//     bioHtml: markdown.toHTML('Second Lieutenant Joseph Taylor Laslie Jr. is from Attapulgus, \
//     Georgia. Service number 0102842. Enlisted in the Marine Corps. \
//     Served during the Vietnam Conflict. Rank of Second Lieutenant. \
//     Served with 9th Marine Amphibious Brigade, 2nd Battalion, 4th Marines, \
//     E Company. Casualty on May 25, 1968. This occurred in or around 7 km NW \
//     of Dong Ha, South Vietnam, Quang Tri province. Circumstances of death \
//     attributed to .. "Died through hostile action .. small arms fire". \
//     In the third week of May the North Vietnamese and Viet Kong forces launched \
//     their third - and as it turned out last major offensive of 1968. \
//     The freshly introduced 403th Division and other NVA/VC forces were active \
//     in Quang Tri Province, and BLT 2/4 was introduced into the fighting. \
//     The BLT 2/4 Marines lost 32 men in the fighting between 17 May and 06 June, \
//     with the majority - 19 men - killed in action in very heavy fighting near \
//     Nhi Ha on 25-29 May 1968. 2ndLt Laslie, who had volunteered for infantry \
//     duty in Basic School was killed while calling in supporting fires during \
//     the time of 25-29 May. He died on a medevec helicopter. Second Lieutenant \
//     Laslie earned the following awards  \n\n\
// -   National Defense Service Medal  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// 2Lt Laslie is honored on the Vietnam Veteran\'s Memorial, VVM Wall, Panel 68w, Line 4.'),
//     bioPhoto: "/assets/images/03-laslie-joe2.jpg",
//   },
//   {
//     photo: "/assets/images/03-johnson-ron.png",
//     name: "Johnson, Ronald Paul (Ron)",
//     date: "1 December 1941 - 2 October 2010",
//     restingPlace: "Quantico Nat'l Cem, VA",
//     platoon: "3rd",
//     bio: 'Ron Johnson was born in Valley City, North Dakota, on December 1, \
//     1941. He was a graduate of the University of Texas, the Naval Postgraduate \
//     School, and the Assemblies of God Theological Seminary. Major Johnson \
//     proudly served in the United States Marine Corps for 21 years, \
//     including a tour of duty in Vietnam. After retirement he had many \
//     opportunities to use his gifts and intellect, serving as a university \
//     professor, an administrator, and a computer analyst at RAFB. Mr. Johnson \
//     loved to teach the Scripture and was passionate about imprinting the \
//     Word of God into the hearts and minds of youth. He was a mentor to many \
//     people, freely giving of his time and wisdom, and will be greatly missed.  \n\nRon \
//     Johnson was a devoted and loving husband, father, grandfather, brother \
//     and friend. His memory will forever be in the hearts of his wife of \
//     42 years, Earline K. Johnson; children, Dr. Kirsten Johnson (Jonathan Herring), \
//     Oxford, England; Marcae Robertson (Nicholas), Noida, India; \
//     Dr. Paul Johnson (Jennifer), Atlanta; grandchildren, Grace and Hope \
//     Robertson, Laurel, Joanna, and Darcy Herring Johnson, Evelyn and Nathan \
//     Johnson; sister, Eileen Maier; brothers, Dennis Johnson, Stan Johnson, \
//     Doug Johnson, and Alan Johnson. Mr. Johnson was preceded in death by his \
//     parents, Darrell and Marie Johnson, and his sister, Jean Miller-Seidel.',
//     bioHtml: markdown.toHTML('Ron Johnson was born in Valley City, North Dakota, on December 1, \
//     1941. He was a graduate of the University of Texas, the Naval Postgraduate \
//     School, and the Assemblies of God Theological Seminary. Major Johnson \
//     proudly served in the United States Marine Corps for 21 years, \
//     including a tour of duty in Vietnam. After retirement he had many \
//     opportunities to use his gifts and intellect, serving as a university \
//     professor, an administrator, and a computer analyst at RAFB. Mr. Johnson \
//     loved to teach the Scripture and was passionate about imprinting the \
//     Word of God into the hearts and minds of youth. He was a mentor to many \
//     people, freely giving of his time and wisdom, and will be greatly missed.  \n\nRon \
//     Johnson was a devoted and loving husband, father, grandfather, brother \
//     and friend. His memory will forever be in the hearts of his wife of \
//     42 years, Earline K. Johnson; children, Dr. Kirsten Johnson (Jonathan Herring), \
//     Oxford, England; Marcae Robertson (Nicholas), Noida, India; \
//     Dr. Paul Johnson (Jennifer), Atlanta; grandchildren, Grace and Hope \
//     Robertson, Laurel, Joanna, and Darcy Herring Johnson, Evelyn and Nathan \
//     Johnson; sister, Eileen Maier; brothers, Dennis Johnson, Stan Johnson, \
//     Doug Johnson, and Alan Johnson. Mr. Johnson was preceded in death by his \
//     parents, Darrell and Marie Johnson, and his sister, Jean Miller-Seidel.'),
//     bioPhoto: "/assets/images/03-johnson-ron2.jpg",
//   },
//   {
//     photo: "/assets/images/03-jones-bill.png",
//     name: "Jones, William A (Bill)",
//     date: "20 April 1945 - 14 September 2002",
//     restingPlace: "unk: Hometown - Morganza, LA",
//     platoon: "3rd",
//     bio: 'Second Lieutenant William Jones of Morganza, Louisiana practiced \
//     law after leaving the Marine Corps up until his death on September \
//     14, 2002.',
//     bioHtml: markdown.toHTML('Second Lieutenant William Jones of Morganza, Louisiana practiced \
//     law after leaving the Marine Corps up until his death on September \
//     14, 2002.')
//   },
//   {
//     photo: "/assets/images/03-jones-stu.png",
//     name: "Jones, Stuart Carlisle Jr. (Stu)",
//     date: "16 December 1945 - 20 August 1977",
//     restingPlace: "unk: Hometown - Boston, MA",
//     platoon: "3rd",
//     bio: 'Second Lieutenant Stuart Carlisle Jones of Boston, MA passed \
//     away in a mountaineering accident in 1977.',
//     bioHtml: markdown.toHTML('Second Lieutenant Stuart Carlisle Jones of Boston, MA passed \
//     away in a mountaineering accident in 1977.')
//   },
//   {
//     photo: "/assets/images/03-kozobarich-larry.png",
//     name: "Kozobarich, Larry L (Larry)",
//     date: "22 April 1945 - 13 June 2007",
//     restingPlace: "Resurrection Catholic Cem, OH",
//     platoon: "3rd",
//     bio: 'Captain Larry Kozobarich of Columbus, OH was a professional \
//     musician after his service in the Marine Corps.  \
//     Captain Kozobarich and his wife Jeri lived in Westerville, OH \
//     when he passed away in June 2007.',
//     bioHtml: markdown.toHTML('Captain Larry Kozobarich of Columbus, OH was a professional \
//     musician after his service in the Marine Corps.  \
//     Captain Kozobarich and his wife Jeri lived in Westerville, OH \
//     when he passed away in June 2007.')
//   },
//   {
//     photo: "/assets/images/03-larrison-jack.png",
//     name: "Larrison, John Patrick (Jack)",
//     date: "12 October 1945 - 10 January 1999",
//     restingPlace: "Bay Pines Nat'l Cem, FL",
//     platoon: "3rd",
//     bio: 'Captain John Larrison of St. Petersburg, FL was killed in a \
//     parachute accident in Florida in January 1999.',
//     bioHtml: markdown.toHTML('Captain John Larrison of St. Petersburg, FL was killed in a \
//     parachute accident in Florida in January 1999.')
//   },
//   {
//     photo: "/assets/images/03-mcclung-mike.png",
//     name: "McClung, Michael Ervin (Mike)",
//     date: "28 July 1944 - 2 July 2013",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "3rd",
//     bio: 'Captain Michael E. McClung, Sr. was born on July 28, 1944 in \
//     Charleston, W.Va. to Boyd Ervin and Helen Maxine Rice McClung. \
//     He was married to Re McClung for 44 years, and they lived in Coupeville \
//     for his last eight years after retiring there from California.  \
//     Michael has a bachelor of science from Hanover College in Hanover, Ind.; \
//     a master of science from the University of Southern California and a Ph.D. \
//     from Claremont Graduate School in Claremont, Calif. He was a captain in \
//     the U.S. Marine Corps, having served from 1967 to 1979. He was a Vietnam \
//     veteran and earned the Vietnam Service Medal, a Purple Heart, the Vietnam \
//     Gallantry Cross and many other medals. After serving in the Corps, \
//     he worked in aerospace as a project manager and then as Director of \
//     Technology Systems at DayRunner. Michael was Commandant of the Marine \
//     Corps League Detachment 1210 named after his daughter, \
//     Major Megan M. McClung, USMC and coordinator of the Toys \
//     for Tots campaign on the island.  He enjoyed trains, flying model \
//     airplanes, working in his woodshop and helping his beloved Re in the \
//     gardens. He is survived by his wife, Re McClung, of Coupeville; \
//     son Michael Jr. and his wife Suzie; grandchildren Gabrielle and Nolan; \
//     sister Carol and her husband Alan, and; brother Stuart and his wife Becky. He \
//     was preceded in death by his parents, his brother Steven and \
//     his beloved daughter, Megan Malia-Leilani.  Captain McClung was a \
//     proud Marine, a loving husband, a devoted father, an inspirational and \
//     selfless friend, a mentor, a scholar, a leader, a hero.',
//     bioHtml: markdown.toHTML('Captain Michael E. McClung, Sr. was born on July 28, 1944 in \
//     Charleston, W.Va. to Boyd Ervin and Helen Maxine Rice McClung. \
//     He was married to Re McClung for 44 years, and they lived in Coupeville \
//     for his last eight years after retiring there from California.  \
//     Michael has a bachelor of science from Hanover College in Hanover, Ind.; \
//     a master of science from the University of Southern California and a Ph.D. \
//     from Claremont Graduate School in Claremont, Calif. He was a captain in \
//     the U.S. Marine Corps, having served from 1967 to 1979. He was a Vietnam \
//     veteran and earned the Vietnam Service Medal, a Purple Heart, the Vietnam \
//     Gallantry Cross and many other medals. After serving in the Corps, \
//     he worked in aerospace as a project manager and then as Director of \
//     Technology Systems at DayRunner. Michael was Commandant of the Marine \
//     Corps League Detachment 1210 named after his daughter, \
//     Major Megan M. McClung, USMC and coordinator of the Toys \
//     for Tots campaign on the island.  He enjoyed trains, flying model \
//     airplanes, working in his woodshop and helping his beloved Re in the \
//     gardens. He is survived by his wife, Re McClung, of Coupeville; \
//     son Michael Jr. and his wife Suzie; grandchildren Gabrielle and Nolan; \
//     sister Carol and her husband Alan, and; brother Stuart and his wife Becky. He \
//     was preceded in death by his parents, his brother Steven and \
//     his beloved daughter, Megan Malia-Leilani.  Captain McClung was a \
//     proud Marine, a loving husband, a devoted father, an inspirational and \
//     selfless friend, a mentor, a scholar, a leader, a hero.'),
//     bioPhoto: "/assets/images/03-mcclung-mike2.jpg",
//   },
//   {
//     photo: "/assets/images/03-mccormack-orval.png",
//     name: "McCormack, Orval Wayne (Orval)",
//     date: "18 February 1943 - 1 October 2002",
//     restingPlace: "Quantico Nat'l Cem, VA",
//     platoon: "3rd",
//     bio: 'Colonel Orval Wayne “Mac” McCormack, USMC, Ret. 59, of Spotsylvania \
//     served 30 years in the US Marine Corps. He was a 1967 graduate of the U.S. \
//     Naval Academy and received his masters from George Washington University. \
//      Col McCormack was an active member and Vice-Commander of the Spotsylvania American Legion \
//      Post #320.  \n\nCol McCormack is the husband of Virginia C. McCormack; the \
//      father of son, Chris McCormack of Manassas and daughter, Melissa McCormack \
//      of Stafford.  His mother is Thelma McCormack of Pryor, Oklahoma; brothers, \
//      Terry McCormack of Shalimar, Florida; Tom McCormack of Adair, Okalahoma; \
//      sisters, Norma Callicoat of Stillwater, Oklahoma and Kay Rogers of Pryor, \
//      Oklahoma.',
//     bioHtml: markdown.toHTML('Colonel Orval Wayne “Mac” McCormack, USMC, Ret. 59, of Spotsylvania \
//     served 30 years in the US Marine Corps. He was a 1967 graduate of the U.S. \
//     Naval Academy and received his masters from George Washington University. \
//     Col McCormack was an active member and Vice-Commander of the Spotsylvania American Legion \
//     Post #320.  \n\nCol McCormack is the husband of Virginia C. McCormack; the \
//     father of son, Chris McCormack of Manassas and daughter, Melissa McCormack \
//     of Stafford.  His mother is Thelma McCormack of Pryor, Oklahoma; brothers, \
//     Terry McCormack of Shalimar, Florida; Tom McCormack of Adair, Okalahoma; \
//     sisters, Norma Callicoat of Stillwater, Oklahoma and Kay Rogers of Pryor, \
//     Oklahoma.'),
//     bioPhoto: "/assets/images/03-mccormack-orval2.jpg",
//   },
//
//   // 4th Platoon
//   {
//     photo: "/assets/images/04-muir-jim.png",
//     name: "Muir, James (Jim)",
//     date: "7 June 1942 - 19 May 1968",
//     restingPlace: "East Lawn Palms & Mort, AZ",
//     platoon: "4th",
//     bio: 'First Lieutenant James Muir was born June 7, 1942 in New York City, \
//     the number one son of Thomas & Mary Agnes Muir. In 1946 he moved with \
//     his parents & sister, Janet to Tucson, AZ. Jim was in the first graduating class of \
//     Rincon High School in 1961 & went on to The University of Arizona with a \
//     double major in History & Oriental Studies.  \n\nIn the summer of 1963 he \
//     completed USMC’s Platoon Leader’s course at Quantico, VA. His senior year \
//     he was Vice President of the student body & Yell King. He graduated in \
//     1965 & was commissioned a 2nd Lt. in the Marine Corps. He continued \
//     studies at the East/West Center, University of Hawaii, earning a Master\'s \
//     Degree in 1967. He arrived in Vietnam in 1968 where he served as a \
//     Platoon Leader in Delta 1/4. On April 26, 1968 he was wounded in action \
//     while serving as XO at Con Thien, aka The Hill of Angels. First Lieutenant James Muir passed \
//     away at USNH Guam on May 19, 1968 & was awarded the Bronze Star with V \
//     posthumously. He is missed by all who knew & loved him',
//     bioHtml: markdown.toHTML('First Lieutenant James Muir was born June 7, 1942 in New York City, \
//     the number one son of Thomas & Mary Agnes Muir. In 1946 he moved with \
//     his parents & sister, Janet to Tucson, AZ; a warm dry climate to \
//     benefit his father’s health. Jim was in the first graduating class of \
//     Rincon High School in 1961 & went on to The University of Arizona with a \
//     double major in History & Oriental Studies.  \n\nIn the summer of 1963 he \
//     completed USMC\'s Platoon Leader\'s course at Quantico, VA. His senior year \
//     he was Vice President of the student body & Yell King. He graduated in \
//     1965 & was commissioned a 2nd Lt. in the Marine Corps. He continued \
//     studies at the East/West Center, University of Hawaii, earning a Master\'s \
//     Degree in 1967. He arrived in Vietnam in 1968 where he served as a \
//     Platoon Leader in Delta 1/4. On April 26, 1968 he was wounded in action \
//     while serving as XO at Con Thien, aka The Hill of Angels. First Lieutenant James Muir passed \
//     away at USNH Guam on May 19, 1968 & was awarded the Bronze Star with V \
//     posthumously. He is missed by all who knew & loved him'),
//     bioPhoto: "/assets/images/04-muir-jim2.jpg",
//   },
//   {
//     photo: "/assets/images/04-pearson-tom.png",
//     name: "Pearson, Thomas Rickard Jr. (Tom)",
//     date: "20 June 1945 - 23 January 1968",
//     restingPlace: "Fort Rosecrans Nat'l Cem, SD CA",
//     platoon: "4th",
//     bio: 'Second Lieutenant Thomas Rickard Pearson Jr. of San Diego, CA was \
//     born on June 20, 1945. He died on January 23, 1968 at the age of 22 due \
//     to a mortar, rocket, or artillery incident at Quang Tri Province in \
//     South Vietnam. Second Lieutenant Thomas R. Pearson is honored on the \
//     Vietnam Memorial Wall at Panel 35E, Line 17.',
//     bioHtml: markdown.toHTML('Second Lieutenant Thomas Rickard Pearson Jr. of San Diego, CA was \
//     born on June 20, 1945. He died on January 23, 1968 at the age of 22 due \
//     to a mortar, rocket, or artillery incident at Quang Tri Province in \
//     South Vietnam. Second Lieutenant Thomas R. Pearson is honored on the \
//     Vietnam Memorial Wall at Panel 35E, Line 17.'),
//     bioPhoto: "/assets/images/04-pearson-tom2.jpg",
//   },
//   {
//     photo: "/assets/images/04-ranstead-terry.png",
//     name: "Ranstead, James Terrance (Terry)",
//     date: "29 January 1943 - 22 January 1968",
//     restingPlace: "Fairview Cem, Vinita, OK",
//     platoon: "4th",
//     bio:'Second Lieutenant James Terry Ranstead from Miami, Oklahoma was \
//     born on January 29, 1943. He enlisted in the Marines on May 28, 1967 \
//     and served during the Vietnam Conflict. Second Lieutenant Ranstead served \
//     with 3rd Marine Division, 2nd Battalion, 3rd Marines, G Company. \
//     His service occupation was Basic Infantry Officer. On January 22, 1968 \
//     James was on a combat patrol when a mine was tripped killing him, \
//     5 kilometers south southeast of Tuy Loan Bridge in or around South Vietnam, \
//     Quang Nam province.  \n\nSecond Lieutenant Ranstead and his wife, Damla Jean \
//     Ranstead have two children: Terry and Cheri.  Ranstead earned the following decorations:  \n\n\
// -   National Defense Service Medal  \n\
// -   Combat Infantryman Badge  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lieutenant Ranstead is honored on the Vietnam Veteran\'s Memorial, \
// VVM Wall, Panel 35e, Line 11.',
//     bioHtml: markdown.toHTML('Second Lieutenant James Terry Ranstead from Miami, Oklahoma was \
//     born on January 29, 1943. He enlisted in the Marines on May 28, 1967 \
//     and served during the Vietnam Conflict. Second Lieutenant Ranstead served \
//     with 3rd Marine Division, 2nd Battalion, 3rd Marines, G Company. \
//     His service occupation was Basic Infantry Officer. On January 22, 1968 \
//     James was on a combat patrol when a mine was tripped killing him, \
//     5 kilometers south southeast of Tuy Loan Bridge in or around South Vietnam, \
//     Quang Nam province.  \n\nSecond Lieutenant Ranstead and his wife, Damla Jean \
//     Ranstead have two children: Terry and Cheri.  Ranstead earned the following decorations:  \n\n\
// -   National Defense Service Medal  \n\
// -   Combat Infantryman Badge  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lieutenant Ranstead is honored on the Vietnam Veteran\'s Memorial, \
//     VVM Wall, Panel 35e, Line 11.'),
//     bioPhoto: "/assets/images/04-ranstead-terry2.jpg",
//   },
//   {
//     photo: "/assets/images/04-ross-gray.png",
//     name: "Ross, William Gray (Gray)",
//     date: "11 October 1945 - 15 June 1968",
//     restingPlace: "Fort Donelson Nat'l Cemetery, TN",
//     platoon: "4th",
//     bio: 'Second Lieutenant William Gray Ross from Big Rock, Tennessee. \
//     He enlisted in the Marine Corps. \
//     and served during the Vietnam Conflict. Rank of Second Lieutenant. \
//     2Lt Ross served with 1st Marine Division, 3rd Battalion, 5th Marines, \
//     I Company. Service occupation of Infantry Officer. Second Lieutenant Ross died on June 15, \
//     1968 at the age of 23 in or around Quang Nam in South Vietnam.  \
//     Circumstances of his death are attributed to .. "Died through hostile \
//     action". He earned the following decorations:  \n\n\
// -   National Defense Service Medal  \n\
// -   Combat Infantryman Badge  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lieutenant Ross is honored on the Vietnam Veteran\'s Memorial, \
//     VVM Wall, Panel 57w, Line 31.',
//     bioHtml: markdown.toHTML('Second Lieutenant William Gray Ross is from Big Rock, Tennessee. \
//     He enlisted in the Marine Corps. \
//     and served during the Vietnam Conflict. Rank of Second Lieutenant. \
//     2Lt Ross served with 1st Marine Division, 3rd Battalion, 5th Marines, \
//     I Company. Service occupation of Infantry Officer. Second Lieutenant Ross died on June 15, \
//     1968 at the age of 23 in or around Quang Nam in South Vietnam.  \
//     Circumstances of his death are attributed to .. "Died through hostile \
//     action". He earned the following decorations:  \n\n\
// -   National Defense Service Medal  \n\
// -   Combat Infantryman Badge  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lieutenant Ross is honored on the Vietnam Veteran\'s Memorial, \
//     VVM Wall, Panel 57w, Line 31.'),
//     bioPhoto: "/assets/images/04-ross-gray2.jpg",
//   },
//   {
//     photo: "/assets/images/04-belser-joe.png",
//     name: "Belser, Joseph Henry Jr. (Joe)",
//     date: "15 March 1945 - 15 October 1989",
//     restingPlace: "Greenlawn Mem Park, W Columbia, SC",
//     platoon: "4th",
//     bio: 'Captain Joseph H. Belser, Jr. was awarded a Silver Star, \
//     Bronze Star, and five Purple Hearts during his career with the Marines. \
//     Captain Belser also lost his right leg just below \
//     the knee.  Following is the excerpt for his Silver Star. \n  \n*"The President of the United States of \
//     America takes pleasure in presenting the Silver Star to First Lieutenant \
//     Joseph H. Belser, Jr. (MCSN: 0-101738), United States Marine Corps, \
//     for conspicuous gallantry and intrepidity in action while serving as a \
//     Platoon Commander with Company K, Third Battalion, Twenty-Seventh Marines, \
//     FIRST Marine Division in connection with operations against the enemy in \
//     the Republic of Vietnam. On 24 May 1968 during Operation ALLEN BROOK in \
//     Quang Nam Province, Company K was attacking the village of Le Bac (1) \
//     which was well fortified and occupied by a large North Vietnamese Army \
//     force. As the company approached the area it came under intense automatic \
//     weapons fire and two platoons were separated from the remainder of the \
//     company. Assigned to assist the besieged units and in an attempt to \
//     envelop the enemy, First Lieutenant Belser moved his reserve platoon to \
//     within 300 meters of the hostile positions when the Marines encountered \
//     heavy fire which inflicted several casualties, including First Lieutenant Belser. \
//     Calmly informing his men of the situation, and although seriously wounded \
//     in the arm, he courageously moved across the fire-swept area from one \
//     position to another, encouraging his men and directing their fire while \
//     simultaneously keeping his commanding officer appraised of the situation. \
//     Under his courageous leadership, his men successfully repulsed repeated \
//     attempts by the enemy to overrun their position. Assisted by a platoon from \
//     Company M, First Lieutenant Belser utilized supporting arms fire, \
//     hand grenades and a smoke screen to withdraw his platoon along with their \
//     casualties to the company perimeter. Informed that Company M was heavily \
//     engaged with the enemy and had sustained numerous casualties, he refused \
//     to be evacuated for treatment of his injury and organized a group of Marines \
//     to retrieve the casualties. With complete disregard for his own safety, \
//     he made several trips into the fire-swept area until he was wounded in the \
//     leg by the intense enemy fire and subsequently evacuated. By his courage, \
//     dynamic leadership and selfless devotion to duty in the face of grave \
//     personal risk, First Lieutenant Belser inspired all who observed him and \
//     upheld the highest traditions of the Marine Corps and of the United States \
//     Naval Service."*',
//     bioHtml: markdown.toHTML('Captain Joseph H. Belser, Jr. was awarded a Silver Star, \
//     Bronze Star, and five Purple Hearts during his career with the Marines. \
//     Captain Belser also lost his right leg just below \
//     the knee.  Following is the excerpt for his Silver Star. \n  \n*"The President of the United States of \
//     America takes pleasure in presenting the Silver Star to First Lieutenant \
//     Joseph H. Belser, Jr. (MCSN: 0-101738), United States Marine Corps, \
//     for conspicuous gallantry and intrepidity in action while serving as a \
//     Platoon Commander with Company K, Third Battalion, Twenty-Seventh Marines, \
//     FIRST Marine Division in connection with operations against the enemy in \
//     the Republic of Vietnam. On 24 May 1968 during Operation ALLEN BROOK in \
//     Quang Nam Province, Company K was attacking the village of Le Bac (1) \
//     which was well fortified and occupied by a large North Vietnamese Army \
//     force. As the company approached the area it came under intense automatic \
//     weapons fire and two platoons were separated from the remainder of the \
//     company. Assigned to assist the besieged units and in an attempt to \
//     envelop the enemy, First Lieutenant Belser moved his reserve platoon to \
//     within 300 meters of the hostile positions when the Marines encountered \
//     heavy fire which inflicted several casualties, including First Lieutenant Belser. \
//     Calmly informing his men of the situation, and although seriously wounded \
//     in the arm, he courageously moved across the fire-swept area from one \
//     position to another, encouraging his men and directing their fire while \
//     simultaneously keeping his commanding officer appraised of the situation. \
//     Under his courageous leadership, his men successfully repulsed repeated \
//     attempts by the enemy to overrun their position. Assisted by a platoon from \
//     Company M, First Lieutenant Belser utilized supporting arms fire, \
//     hand grenades and a smoke screen to withdraw his platoon along with their \
//     casualties to the company perimeter. Informed that Company M was heavily \
//     engaged with the enemy and had sustained numerous casualties, he refused \
//     to be evacuated for treatment of his injury and organized a group of Marines \
//     to retrieve the casualties. With complete disregard for his own safety, \
//     he made several trips into the fire-swept area until he was wounded in the \
//     leg by the intense enemy fire and subsequently evacuated. By his courage, \
//     dynamic leadership and selfless devotion to duty in the face of grave \
//     personal risk, First Lieutenant Belser inspired all who observed him and \
//     upheld the highest traditions of the Marine Corps and of the United States \
//     Naval Service."*')
//   },
//   {
//     photo: "/assets/images/04-moran-donald.png",
//     name: "Moran, Donald Martin (Donald)",
//     date: "16 September 1944 - 25 June 2007",
//     restingPlace: "Ft Snelling Nat'l Cem, MN",
//     platoon: "4th",
//     bio: 'Captain Donald Martin Moran, age 62, of Burnsville, MN was born on \
//     September 16, 1944. As a boy in Delano, he mopped his parents\' drugstore \
//     floor, played drum and earned his Eagle Scout badge. He graduated \
//     from Delano High in 1962. Don attended the University of Notre Dame \
//     earning a double degree in liberal arts and electrical engineering in \
//     1967. He was a US Marine Corps captain who served in Vietnam until \
//     1970. He earned a Master\'s in Electrical Engineering from the University \
//     of MN in 1972. Don raised a family in Burnsville. He worked 30 years \
//     for Sperry Univac (Lockheed Martin) and has patents to his credit. \
//     After retirement, Don founded Toddler Food Partners, a nonprofit which \
//     supports nutrition for young children in Haiti, Bangladesh and Malawi. \
//     Don treasured the many friends he made while canoeing, sailing, using \
//     ham radio, skiing, woodworking and traveling. He always had a can-do \
//     attitude, a corny joke and loved any analog device with big knobs or an \
//     enormous antenna. He endeavored to live a principled life and taught his \
//     children self-reliance, integrity and how to rebound from one\'s own \
//     mistakes. Don’s parents are Jim & Esther. He has two children, Brian of \
//     Portland, OR, Betsy (Dan) of Delano, and Megan of Minneapolis; \
//     granddaughters Charlotte and Chloe; brothers Tom (Marcia), Bob (Winsome) \
//     and Dick; many nieces, nephews, and dear friends.',
//     bioHtml: markdown.toHTML('Captain Donald Martin Moran, age 62, of Burnsville, MN was born on \
//     September 16, 1944. As a boy in Delano, he mopped his parents\' drugstore \
//     floor, played drum and earned his Eagle Scout badge. He graduated \
//     from Delano High in 1962. Don attended the University of Notre Dame \
//     earning a double degree in liberal arts and electrical engineering in \
//     1967. He was a US Marine Corps captain who served in Vietnam until \
//     1970. He earned a Master\'s in Electrical Engineering from the University \
//     of MN in 1972. Don raised a family in Burnsville. He worked 30 years \
//     for Sperry Univac (Lockheed Martin) and has patents to his credit. \
//     After retirement, Don founded Toddler Food Partners, a nonprofit which \
//     supports nutrition for young children in Haiti, Bangladesh and Malawi. \
//     Don treasured the many friends he made while canoeing, sailing, using \
//     ham radio, skiing, woodworking and traveling. He always had a can-do \
//     attitude, a corny joke and loved any analog device with big knobs or an \
//     enormous antenna. He endeavored to live a principled life and taught his \
//     children self-reliance, integrity and how to rebound from one\'s own \
//     mistakes. Don’s parents are Jim & Esther. He has two children, Brian of \
//     Portland, OR, Betsy (Dan) of Delano, and Megan of Minneapolis; \
//     granddaughters Charlotte and Chloe; brothers Tom (Marcia), Bob (Winsome) \
//     and Dick; many nieces, nephews, and dear friends.'),
//     bioPhoto: "/assets/images/04-moran-donald2.jpg",
//   },
//   {
//     photo: "/assets/images/04-neal-rich.png",
//     name: "Neal, Richard Oren (Rich)",
//     date: "10 April 1945 - 30 July 2001",
//     restingPlace: "Bayview Memor Park, FL",
//     platoon: "4th",
//     bio: 'Lieutenant Colonel Richard Oren Neal of Rockville, MD served \
//     in the Marine Corps from June 10, 1967 until September 30, 1990.  \
//     He and his wife, Sharon have two Children: Patrick and Meghan.  \
//     Lieutenant Col. Neal earned a Bachelor of electrical engineering from \
//     the Georgia Institute of Technology and a Master of Science in Operations \
//     Research at the Naval Postgraduate School in Monterey, CA.  \
//     Lt. Col Neal passed away on July 30 2001.',
//     bioHtml: markdown.toHTML('Lieutenant Colonel Richard Oren Neal of Rockville, MD served \
//     in the Marine Corps from June 10, 1967 until September 30, 1990.  \
//     He and his wife, Sharon have two Children: Patrick and Meghan.  \
//     Lieutenant Col. Neal earned a Bachelor of electrical engineering from \
//     the Georgia Institute of Technology and a Master of Science in Operations \
//     Research at the Naval Postgraduate School in Monterey, CA.  \
//     Lt. Col Neal passed away on July 30 2001.')
//
//   },
//   {
//     photo: "/assets/images/04-pfeiffer-george.png",
//     name: "Pfeiffer, George Martin Jr. (George)",
//     date: "25 June 1943 - 14 November 1998",
//     restingPlace: "Plano Mutual Cemetery, TX",
//     platoon: "4th",
//     bio: 'Captain George Martin Pfeiffer Jr. of Felton, Delaware was married \
//     to Mary Ennis Pfeiffer on June 3, 1966.  They lived in Plano, Texas \
//     when he passed away on November 14, 1998.',
//     bioHtml: markdown.toHTML('Captain George Martin Pfeiffer Jr. of Felton, Delaware was married \
//       to Mary Ennis Pfeiffer on June 3, 1966.  They lived in Plano, Texas \
//       when he passed away on November 14, 1998.')
//   },
//   {
//     photo: "/assets/images/04-radcliffe-harry.png",
//     name: "Radcliffe, Harry Quinten (Harry)",
//     date: "22 May 1945 - 8 June 2013",
//     restingPlace: "Beachwood Cem, MI",
//     platoon: "4th",
//     bio: 'Harry Quentin Radcliffe is the beloved husband of Nancy (Dozier) \
//     devoted father of Amy Byerle (Lee) and Laurel Schwartz (Michael), \
//     loving grandfather of six grandchildren and brother of Robert and Thomas. \
//     Harry was born in Norfolk, VA on May 22, 1945 and lived all over the \
//     world as his father was a Chaplain in the Navy for 32 years. He graduated \
//     from Vanderbilt University on a US Navy scholarship. He received school \
//     honors in academic achievement in engineering and a prestigious award in \
//     military performance while learning how to fly a private plane. \
//     Harry met Nancy at university and they were married December 30, 1968. \
//     After a few years of marriage, Nancy and Harry had daughter Amy and \
//     four years later, daughter Laurel.  \n\nAfter flying A-4 jets in the Marine \
//     Corps for 6 years, Harry became a test pilot with Lockheed Aircraft \
//     International, later known as Lockheed Martin Corporation. Lockheed soon \
//     realized that Harry had other talents besides flying that involved \
//     technical support, contract writing and management skills. The family \
//     followed him as his successful career developed, living all over the world. \
//     He was manager/president of companies in Singapore (6 years), \
//     California (4 years), Malaysia (7 years) and Argentina (3 years). \
//     The family moved to Washington DC in 1997 and Harry retired from Lockheed \
//     after 25 years. Too restless to settle down, he soon found work with two \
//     other companies, finally retired and moved to Philadelphia in 2010. Harry \
//     often volunteered to support his church, friends, family and communities. \
//     In Philadelphia, he continued flying patients needing medical support \
//     with Angel Flight East, as flying and helping others were a lifelong joy. \
//     Harry made a positive impact on countless people all over the world \
//     with his willing attitude to help others “fix” anything that needed \
//     to be done. He loved solving problems and was often seen holding a \
//     shovel or hammer in order to “make the world a better place.”',
//     bioHtml: markdown.toHTML('Harry Quentin Radcliffe is the beloved husband of Nancy (Dozier) \
//     devoted father of Amy Byerle (Lee) and Laurel Schwartz (Michael), \
//     loving grandfather of six grandchildren and brother of Robert and Thomas. \
//     Harry was born in Norfolk, VA on May 22, 1945 and lived all over the \
//     world as his father was a Chaplain in the Navy for 32 years. He graduated \
//     from Vanderbilt University on a US Navy scholarship. He received school \
//     honors in academic achievement in engineering and a prestigious award in \
//     military performance while learning how to fly a private plane. \
//     Harry met Nancy at university and they were married December 30, 1968. \
//     After a few years of marriage, Nancy and Harry had daughter Amy and \
//     four years later, daughter Laurel.  \n\nAfter flying A-4 jets in the Marine \
//     Corps for 6 years, Harry became a test pilot with Lockheed Aircraft \
//     International, later known as Lockheed Martin Corporation. Lockheed soon \
//     realized that Harry had other talents besides flying that involved \
//     technical support, contract writing and management skills. The family \
//     followed him as his successful career developed, living all over the world. \
//     He was manager/president of companies in Singapore (6 years), \
//     California (4 years), Malaysia (7 years) and Argentina (3 years). \
//     The family moved to Washington DC in 1997 and Harry retired from Lockheed \
//     after 25 years. Too restless to settle down, he soon found work with two \
//     other companies, finally retired and moved to Philadelphia in 2010. Harry \
//     often volunteered to support his church, friends, family and communities. \
//     In Philadelphia, he continued flying patients needing medical support \
//     with Angel Flight East, as flying and helping others were a lifelong joy. \
//     Harry made a positive impact on countless people all over the world \
//     with his willing attitude to help others “fix” anything that needed \
//     to be done. He loved solving problems and was often seen holding a \
//     shovel or hammer in order to “make the world a better place.”'),
//     bioPhoto: "/assets/images/04-radcliffe-harry2.jpg"
//   },
//
//   // 5th Platoon
//   {
//     photo: "/assets/images/05-spindler-john.png",
//     name: "Spindler, John Gates (John)",
//     date: "1 February 1946 - 21 April 1968",
//     restingPlace: "Courts of the MIssing, MIA Mem, HI",
//     platoon: "5th",
//     bio: 'Second Lieutenant John Gates Spindler was born on February 1, 1946 \
//     in St. Louis MO to Leona (nee: Gates) Spindler and Phillip Spindler.  \
//     John Spindler enlisted in the United States Marine Corps Reserve through \
//     the Platoon Leaders/ Class (PLC) program on 14 Jan 1966. Second Lieutenant \
//     Spindler was a member of Company G, 2nd Battalion, 3rd Marines, \
//     3rd Marine Division. On April 21, 1968, he was killed by enemy artillery \
//     fire while fighting in Quang Tri Province, South Vietnam. His remains were \
//     not recovered. His name is inscribed on the Courts of the Missing at the \
//     Honolulu Memorial, and there is also a weapons display in his honor at \
//     the National Museum of the US Marines in Quantico. 2nd Lt. John Gates \
//     Spindler is also honored on Panel 51E, Row 25 of the Vietnam Veterans \
//     Memorial.',
//     bioHtml: markdown.toHTML('Second Lieutenant John Gates Spindler was born on February 1, 1946 \
//     in St. Louis MO to Leona (nee: Gates) Spindler and Phillip Spindler.  \
//     John Spindler enlisted in the United States Marine Corps Reserve through \
//     the Platoon Leaders/ Class (PLC) program on 14 Jan 1966. Second Lieutenant \
//     Spindler was a member of Company G, 2nd Battalion, 3rd Marines, \
//     3rd Marine Division. On April 21, 1968, he was killed by enemy artillery \
//     fire while fighting in Quang Tri Province, South Vietnam. His remains were \
//     not recovered. His name is inscribed on the Courts of the Missing at the \
//     Honolulu Memorial, and there is also a weapons display in his honor at \
//     the National Museum of the US Marines in Quantico. 2nd Lt. John Gates \
//     Spindler is also honored on Panel 51E, Row 25 of the Vietnam Veterans \
//     Memorial.'),
//     bioPhoto: "/assets/images/05-spindler-john2.jpg"
//   },
//   {
//     photo: "/assets/images/05-sandberg-mike.png",
//     name: "Sandberg, Michael Bruce (Mike)",
//     date: "5 August 1945 - 3 November 1973",
//     restingPlace: "unk: last residence, U of A Tucson, AZ",
//     platoon: "5th",
//     bio: 'Captain Michael Bruce Sandberg was born on August 5, 1945 in \
//     Watonwan County, Minnesota.  He married Patricia Mays on June 1971 in \
//     Kaneohe, Oahu, Hawaii, daughter of Roderick Ainsworth Mays and Dorothy \
//     Ellen Perkins. They were married in a military ceremony at Kaneohe, \
//     Marine Corps Air Station on Oahu. There was a reception at the officers \
//     club. Captain Sandberg’s parents are William A and Madeleine (Wahl) \
//     Sandberg.  \n\nCaptain Sandberg, and his wife, Patricia Mays, were \
//     tragically shot and killed on November 3, 1973 in their Tucson condominium \
//     during a home invasion. Both Michael and Patricia were graduate students \
//     at the University of Arizona.',
//     bioHtml: markdown.toHTML('Captain Michael Bruce Sandberg was born on August 5, 1945 in \
//     Watonwan County, Minnesota.  He married Patricia Mays on Jun 1971 in \
//     Kaneohe, Oahu, Hawaii, daughter of Roderick Ainsworth Mays and Dorothy \
//     Ellen Perkins. They were married in a military ceremony at Kaneohe, \
//     Marine Corps Air Station on Oahu. There was a reception at the officers \
//     club. Captain Sandberg’s parents are William A and Madeleine (Wahl) \
//     Sandberg.  \n\nCaptain Sandberg, and his wife, Patricia Mays, were \
//     tragically shot and killed on November 3, 1973 in their Tucson condominium \
//     during a home invasion. Both Michael and Patricia were graduate students \
//     at the University of Arizona.'),
//     bioPhoto: "/assets/images/05-sandberg-mike2.png"
//   },
//   {
//     photo: "/assets/images/05-sergo-dick.png",
//     name: "Sergo, Richard A (Dick)",
//     date: "20 March 1944 - 8 November 2001",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "5th",
//     bio: 'Second Lieutenant Richard A. Sergo of Lyons Illinois earned two \
//     purple hearts during his career with the Marine Corps.  \
//     He graduated from Fenwick High in the Chicago and had a successful \
//     career in the computer industry.  2nd Lt. Sergo passed away on \
//     November 8, 2001 while living in Florida.',
//     bioHtml: markdown.toHTML('Second Lieutenant Richard A. Sergo of Lyons Illinois earned two \
//     purple hearts during his career with the Marine Corps.  \
//     He graduated from Fenwick High in the Chicago and had a successful \
//     career in the computer industry.  2nd Lt. Sergo passed away on \
//     November 8, 2001 while living in Florida.')
//   },
//   {
//     photo: "/assets/images/05-stjohn-larry.png",
//     name: "St. John, Larry David (Larry)",
//     date: "2 September 1941 - 5 December 2011",
//     restingPlace: "CCre: Mem Serv VFW Post 8207, FL",
//     platoon: "5th",
//     bio: 'Larry David St. John of Longwood, FL was born in Shelby, OH on \
//     Sept. 2, 1941 to Elton and Betty St. John. Larry graduated from \
//     Shelby High School in 1959 and The Ohio State University in 1966. \
//     At OSU he met future wife, Zan, and they were married Dec. 23, 1966. \
//     Larry joined the Marine Corps and served from 1966-1970. He attained \
//     the rank of Captain, serving one tour in Vietnam, and earning two \
//     purple hearts and the bronze star. Following military service, \
//     Larry accepted a sales position with Ashland Petroleum Company \
//     where he remained employed for twenty years. The St. Johns have one \
//     daughter, Erin E. Hearon (Mike), residing in Hampton, VA; and \
//     four grandchildren, Brandon, Austin, Dylan and Kaitlyn. Larry also \
//     has a sister, Marsha Bell, of Sun Lakes, AZ.',
//     bioHtml: markdown.toHTML('Larry David St. John of Longwood, FL was born in Shelby, OH on \
//     Sept. 2, 1941 to Elton and Betty St. John. Larry graduated from \
//     Shelby High School in 1959 and The Ohio State University in 1966. \
//     At OSU he met future wife, Zan, and they were married Dec. 23, 1966. \
//     Larry joined the Marine Corps and served from 1966-1970. He attained \
//     the rank of Captain, serving one tour in Vietnam, and earning two \
//     purple hearts and the bronze star. Following military service, \
//     Larry accepted a sales position with Ashland Petroleum Company \
//     where he remained employed for twenty years. The St. Johns have one \
//     daughter, Erin E. Hearon (Mike), residing in Hampton, VA; and \
//     four grandchildren, Brandon, Austin, Dylan and Kaitlyn. Larry also \
//     has a sister, Marsha Bell, of Sun Lakes, AZ.')
//   },
//   {
//     photo: "/assets/images/05-tritsch-john.png",
//     name: "Tritsch, John B (John)",
//     date: "21 August 1945 - 3 November 1992",
//     restingPlace: "Arlington Nat'l Cem, VA",
//     platoon: "5th",
//     bio: "Our dear classmate John Ballou Tritsch died Nov. 3, 1992, of heart disease \
//     in Narberth, Penn. While at Princeton, John was commander of the navy \
//     R.O.T.C. drill team and a member of Elm Club. Following graduation, he was \
//     commissioned as a second lieutenant in the marines and served in Vietnam. \
//     John was severely wounded in combat and sustained shrapnel wounds over most \
//     of his body. He spent many months in a hospital in Japan until he could \
//     return to the U.S., where he spent another six months in an Annapolis hospital. \
//     Upon his recovery, he went to interrogators' school and language school, and was \
//     honorably discharged in 1975 with the rank of captain. John then went on \
//     to receive a master's degree from the Wharton School and became a C.P.A. \
//     while working with Arthur Young. He also worked with FMC, CertainTeed, \
//     Sperry Univac, and Movie Exchange, before starting his own business, \
//     Cornerstone Business Solutions, which specialized in designing computer \
//     business systems. John was interred at Arlington Cemetery with full \
//     military honors. He is survived by his mother, Grace B.; father, John G. '42; \
//     and five Sisters, Grace Dehel, Catherine Olsen, Jean Baskin, Irene Grubb, \
//     and Margaret McNulty.",
//     bioHtml: markdown.toHTML("Our dear classmate John Ballou Tritsch died \
//     Nov. 3, 1992, of heart disease in Narberth, Penn. While at Princeton, \
//     John was commander of the navy R.O.T.C. drill team and a member of Elm Club. \
//     Following graduation, he was commissioned as a second lieutenant in the marines \
//     and served in Vietnam. \n\nJohn was severely wounded in combat and sustained \
//     shrapnel wounds over most of his body. He spent many months in a hospital \
//     in Japan until he could return to the U.S., where he spent another six months \
//     in an Annapolis hospital. Upon his recovery, he went to interrogators' \
//     school and language school, and was honorably discharged in 1975 with the \
//     rank of captain. John then went on to receive a master's degree \
//     from the Wharton School and became a C.P.A. while working with Arthur Young. \
//     He also worked with FMC, CertainTeed, Sperry Univac, and Movie Exchange, \
//     before starting his own business, Cornerstone Business Solutions, which \
//     specialized in designing computer business systems. John was interred \
//     at Arlington Cemetery with full military honors. He is survived by his mother, \
//     Grace B.; father, John G. '42; and five Sisters, Grace Dehel, Catherine Olsen, \
//     Jean Baskin, Irene Grubb, and Margaret McNulty.")
//   },
//   {
//     photo: "/assets/images/05-ulrich-carl.png",
//     name: "Ulrich, Carl William (Carl)",
//     date: "20 September 1944 - 10 December 2010",
//     restingPlace: "unk: Belmont United Met Ch, Richmond",
//     platoon: "5th",
//     bio: 'Second Lieutenant Carl William Ulrich of Richmond, Va., was born September 30, \
//     1944, in Mount Vernon, N.Y., to Carl A. and Alice B. Ulrich, and he \
//     attended schools in Bethesda and Annapolis, Md. His stepparents, Dorothy M. \
//     Ulrich and Charles W. Winter, each played an influential role in his \
//     early life. He attended Rice University in Houston, Texas, on an \
//     NROTC scholarship and served in Vietnam as an officer of the U.S. Marine \
//     Corps. He received a law degree from Georgetown University and proceeded \
//     to work in energy law for almost three decades. In addition to being a \
//     member of the D.C., Texas and Virginia state bars, Carl was a member of \
//     the Public Utilities Section of the American Bar Association. He served \
//     as both chairman and vice-chairman of the Legal Ethics Committee of the \
//     Energy Bar Association. He also provided pro bono legal counsel to the \
//     Chesapeake Bay Foundation to defend the health of his beloved Chesapeake \
//     Bay. Carl entered Wesley Theological Seminary in 1999 to prepare for a \
//     second career as a Methodist minister. He was ordained an elder of the \
//     United Methodist Church in 2005. He served as minister of Accotink UMC \
//     in Fort Belvoir, Silverbrook UMC in Lorton, Central UMC in Mathews, \
//     and Belmont UMC in Richmond. He was very active in the conference and \
//     served on the boards of the Society of Wesleyan Studies and the \
//     Virginia United Methodist Foundation.  \n\nCarl and his wife, Christine \
//     R. Ulrich of Richmond, Va. had two daughters, Susanna V. and Catherine \
//     L. Ulrich; a grandson, Cassius Corey; two sons-in-law, David Corey \
//     and Pawel Nazarewicz; two stepsisters, Juliette "Archie" \
//     Cooper and Helga Reaves. He was preceded in death by his father, \
//     Carl A. Ulrich; and his mother, Alice B. Hamilton.',
//     bioHtml: markdown.toHTML('Second Lieutenant Carl William Ulrich of Richmond, Va., was born September 30, \
//     1944, in Mount Vernon, N.Y., to Carl A. and Alice B. Ulrich, and he \
//     attended schools in Bethesda and Annapolis, Md. His stepparents, Dorothy M. \
//     Ulrich and Charles W. Winter, each played an influential role in his \
//     early life. He attended Rice University in Houston, Texas, on an \
//     NROTC scholarship and served in Vietnam as an officer of the U.S. Marine \
//     Corps. He received a law degree from Georgetown University and proceeded \
//     to work in energy law for almost three decades. In addition to being a \
//     member of the D.C., Texas and Virginia state bars, Carl was a member of \
//     the Public Utilities Section of the American Bar Association. He served \
//     as both chairman and vice-chairman of the Legal Ethics Committee of the \
//     Energy Bar Association. He also provided pro bono legal counsel to the \
//     Chesapeake Bay Foundation to defend the health of his beloved Chesapeake \
//     Bay. Carl entered Wesley Theological Seminary in 1999 to prepare for a \
//     second career as a Methodist minister. He was ordained an elder of the \
//     United Methodist Church in 2005. He served as minister of Accotink UMC \
//     in Fort Belvoir, Silverbrook UMC in Lorton, Central UMC in Mathews, \
//     and Belmont UMC in Richmond. He was very active in the conference and \
//     served on the boards of the Society of Wesleyan Studies and the \
//     Virginia United Methodist Foundation.  \n\nCarl and his wife, Christine \
//     R. Ulrich of Richmond, Va. have two daughters, Susanna V. and Catherine \
//     L. Ulrich; a grandson, Cassius Corey; two sons-in-law, David Corey \
//     and Pawel Nazarewicz; two stepsisters, Juliette "Archie" \
//     Cooper and Helga Reaves. He was preceded in death by his father, \
//     Carl A. Ulrich; and his mother, Alice B. Hamilton.'),
//     bioPhoto: "/assets/images/05-ulrich-carl2.jpg"
//   },
//   {
//     photo: "/assets/images/05-wilbur-dave.png",
//     name: "Wilbur, David E (Dave)",
//     date: "28 September 1944 - 21 April 2001",
//     restingPlace: "unk: Hometown - Claremont, NH",
//     platoon: "5th",
//     bio: 'Captain David E. Wilbur of Claremont, New Hampshire was born on \
//     September 28, 1994 and passed away on April 21, 2001.',
//     bioHtml: markdown.toHTML('Captain David E. Wilbur of Claremont, New Hampshire was born on \
//     September 28, 1994 and passed away on April 21, 2001.')
//   },
//   {
//     photo: "/assets/images/05-wright-hank.jpg",
//     name: "Wright, Henry Arthur (Hank)",
//     date: "9 June 1946 - 06 February 1968",
//     restingPlace: "Mountain View Cem, CA",
//     platoon: "5th",
//     bio: 'Second Lieutenant Henry Arthur Wright of Oakland, California \
//     was a platoon commander in Delta Company, 1/7. He died on 6 February 1968 \
//     during an enemy attack on the Combined Action Platoon B-4 that \
//     was located 3 kilometers south of the Tuy Loan bridge in Quang Nam Province \
//     in South Vietnam.  Marine 2nd Lt. Henry A. Wright of Oakland was \
//     awarded a posthumous Bronze Star Medal for valor for the Feb 6 action \
//     which cost him his life in Vietnam.  His parents, Mr. and Mrs. Roy E. \
//     Wright, 2932 Nicol Ave, received the medal from Col. Donald Kennedy, \
//     director of the 12th Marine Corps District Headquarters in San Francisco. \
//     Second Lieutenant Wright earned the following decorations:  \n\n\
//     -   National Defense Service Medal  \n\
//     -   Combat Infantryman Badge  \n\
//     -   Purple Heart  \n\
//     -   Vietnam Campaign Medal  \n\
//     -   Vietnam Service Medal  \n\n\
//     Second Lieutenant Wright is honored on the Vietnam Veteran\'s Memorial, \
//     VVM Wall, Panel 37e, Line 76',
//     bioHtml: markdown.toHTML('Second Lieutenant Henry Arthur Wright of Oakland, California \
//     was a platoon commander in Delta Company, 1/7. He died on 6 February 1968 \
//     during an enemy attack on the Combined Action Platoon B-4 that \
//     was located 3 kilometers south of the Tuy Loan bridge in Quang Nam Province \
//     in South Vietnam.  Marine 2nd Lt. Henry A. Wright of Oakland was \
//     awarded a posthumous Bronze Star Medal for valor for the Feb 6 action \
//     which cost him his life in Vietnam.  His parents, Mr. and Mrs. Roy E. \
//     Wright, 2932 Nicol Ave, received the medal from Col. Donald Kennedy, \
//     director of the 12th Marine Corps District Headquarters in San Francisco. \
//     Second Lieutenant Wright earned the following decorations:  \n\n\
// -   National Defense Service Medal  \n\
// -   Combat Infantryman Badge  \n\
// -   Purple Heart  \n\
// -   Vietnam Campaign Medal  \n\
// -   Vietnam Service Medal  \n\n\
// Second Lieutenant Wright is honored on the Vietnam Veteran\'s Memorial, \
//     VVM Wall, Panel 37e, Line 76'),
//     bioPhoto: "/assets/images/05-wright-hank2.jpg"
//   }
//
//
//   );
// });

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
    name: 'JonesBill',
    email: 'JonesBill@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'JonesStu',
    email: 'JonesStu@tbs',
    password: '0109999'
  },
  {
    provider: 'local',
    name: 'JonesJim',
    email: 'JonesJim@tbs',
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
