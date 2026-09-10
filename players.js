// Ratings and prices are simulator values, not official IPL ratings.
// Auction is divided into realistic player sets.
const AUCTION_SETS=[
{id:"marquee",name:"Marquee Players",players:[
{id:1,name:"Virat Kohli",country:"India",nation:"IND",role:"BAT",age:37,hand:"Right-hand batter",base:2,overall:95,bat:97,bowl:20,field:91},
{id:2,name:"Jasprit Bumrah",country:"India",nation:"IND",role:"BOWL",age:32,hand:"Right-arm fast",base:2,overall:96,bat:25,bowl:98,field:88},
{id:3,name:"Suryakumar Yadav",country:"India",nation:"IND",role:"BAT",age:35,hand:"Right-hand batter",base:2,overall:94,bat:97,bowl:24,field:90},
{id:4,name:"Rashid Khan",country:"Afghanistan",nation:"OS",role:"AR",age:27,hand:"Leg spin",base:2,overall:94,bat:63,bowl:97,field:92},
{id:5,name:"Shubman Gill",country:"India",nation:"IND",role:"BAT",age:27,hand:"Right-hand batter",base:2,overall:93,bat:96,bowl:18,field:88},
{id:6,name:"Heinrich Klaasen",country:"South Africa",nation:"OS",role:"WK",age:35,hand:"Right-hand batter",base:2,overall:93,bat:96,bowl:5,field:87}]},
{id:"batters",name:"Batters",players:[
{id:11,name:"Yashasvi Jaiswal",country:"India",nation:"IND",role:"BAT",age:24,hand:"Left-hand batter",base:1.5,overall:92,bat:95,bowl:15,field:84},
{id:12,name:"Ruturaj Gaikwad",country:"India",nation:"IND",role:"BAT",age:29,hand:"Right-hand batter",base:1.5,overall:90,bat:94,bowl:18,field:85},
{id:13,name:"Rinku Singh",country:"India",nation:"IND",role:"BAT",age:28,hand:"Left-hand batter",base:1,overall:85,bat:89,bowl:10,field:84},
{id:14,name:"Tilak Varma",country:"India",nation:"IND",role:"BAT",age:23,hand:"Left-hand batter",base:1,overall:86,bat:91,bowl:32,field:86},
{id:15,name:"Rajat Patidar",country:"India",nation:"IND",role:"BAT",age:33,hand:"Right-hand batter",base:1,overall:84,bat:87,bowl:12,field:82},
{id:16,name:"Travis Head",country:"Australia",nation:"OS",role:"BAT",age:32,hand:"Left-hand batter",base:2,overall:92,bat:96,bowl:25,field:86},
{id:17,name:"David Miller",country:"South Africa",nation:"OS",role:"BAT",age:37,hand:"Left-hand batter",base:1.5,overall:85,bat:88,bowl:10,field:86},
{id:18,name:"Phil Salt",country:"England",nation:"OS",role:"WK",age:30,hand:"Right-hand batter",base:1.5,overall:87,bat:91,bowl:8,field:82}]},
{id:"allrounders",name:"All-Rounders",players:[
{id:21,name:"Ravindra Jadeja",country:"India",nation:"IND",role:"AR",age:37,hand:"Left bat • spin",base:2,overall:92,bat:85,bowl:89,field:96},
{id:22,name:"Hardik Pandya",country:"India",nation:"IND",role:"AR",age:33,hand:"Right bat • pace",base:2,overall:91,bat:88,bowl:82,field:86},
{id:23,name:"Axar Patel",country:"India",nation:"IND",role:"AR",age:32,hand:"Left bat • spin",base:2,overall:89,bat:79,bowl:88,field:91},
{id:24,name:"Abhishek Sharma",country:"India",nation:"IND",role:"AR",age:26,hand:"Left bat • spin",base:1,overall:87,bat:91,bowl:61,field:83},
{id:25,name:"Shivam Dube",country:"India",nation:"IND",role:"AR",age:33,hand:"Left bat • pace",base:1,overall:84,bat:87,bowl:58,field:76},
{id:26,name:"Liam Livingstone",country:"England",nation:"OS",role:"AR",age:33,hand:"Right bat • spin",base:1.5,overall:88,bat:90,bowl:76,field:82},
{id:27,name:"Sunil Narine",country:"West Indies",nation:"OS",role:"AR",age:38,hand:"Left bat • spin",base:1.5,overall:90,bat:81,bowl:94,field:90},
{id:28,name:"Marco Jansen",country:"South Africa",nation:"OS",role:"AR",age:26,hand:"Left bat • pace",base:1,overall:85,bat:73,bowl:89,field:84}]},
{id:"bowlers",name:"Fast & Spin Bowlers",players:[
{id:31,name:"Arshdeep Singh",country:"India",nation:"IND",role:"BOWL",age:27,hand:"Left-arm fast",base:2,overall:88,bat:25,bowl:92,field:82},
{id:32,name:"Mohammed Siraj",country:"India",nation:"IND",role:"BOWL",age:32,hand:"Right-arm fast",base:2,overall:87,bat:24,bowl:90,field:78},
{id:33,name:"Kuldeep Yadav",country:"India",nation:"IND",role:"BOWL",age:31,hand:"Left-arm wrist spin",base:2,overall:87,bat:30,bowl:91,field:79},
{id:34,name:"Varun Chakravarthy",country:"India",nation:"IND",role:"BOWL",age:35,hand:"Mystery spin",base:2,overall:88,bat:22,bowl:91,field:80},
{id:35,name:"Yuzvendra Chahal",country:"India",nation:"IND",role:"BOWL",age:36,hand:"Leg spin",base:1.5,overall:86,bat:20,bowl:89,field:75},
{id:36,name:"Matheesha Pathirana",country:"Sri Lanka",nation:"OS",role:"BOWL",age:23,hand:"Right-arm fast",base:1.5,overall:89,bat:35,bowl:94,field:78},
{id:37,name:"Pat Cummins",country:"Australia",nation:"OS",role:"BOWL",age:33,hand:"Right-arm fast",base:2,overall:91,bat:62,bowl:93,field:86},
{id:38,name:"Josh Hazlewood",country:"Australia",nation:"OS",role:"BOWL",age:35,hand:"Right-arm fast",base:2,overall:91,bat:18,bowl:95,field:85},
{id:39,name:"Adam Zampa",country:"Australia",nation:"OS",role:"BOWL",age:34,hand:"Leg spin",base:1.5,overall:85,bat:20,bowl:90,field:80},
{id:40,name:"Mitchell Starc",country:"Australia",nation:"OS",role:"BOWL",age:36,hand:"Left-arm fast",base:2,overall:89,bat:48,bowl:94,field:82}]},
{id:"keepers",name:"Wicketkeepers",players:[
{id:41,name:"Rishabh Pant",country:"India",nation:"IND",role:"WK",age:29,hand:"Left-hand batter",base:2,overall:93,bat:94,bowl:10,field:92},
{id:42,name:"KL Rahul",country:"India",nation:"IND",role:"WK",age:34,hand:"Right-hand batter",base:2,overall:90,bat:92,bowl:12,field:89},
{id:43,name:"Sanju Samson",country:"India",nation:"IND",role:"WK",age:31,hand:"Right-hand batter",base:1.5,overall:90,bat:93,bowl:10,field:91},
{id:44,name:"Ishan Kishan",country:"India",nation:"IND",role:"WK",age:28,hand:"Left-hand batter",base:1.5,overall:86,bat:88,bowl:8,field:85},
{id:45,name:"Jitesh Sharma",country:"India",nation:"IND",role:"WK",age:33,hand:"Right-hand batter",base:1,overall:82,bat:85,bowl:8,field:82},
{id:46,name:"Nicholas Pooran",country:"West Indies",nation:"OS",role:"WK",age:30,hand:"Left-hand batter",base:2,overall:91,bat:94,bowl:8,field:86},
{id:47,name:"Jos Buttler",country:"England",nation:"OS",role:"WK",age:35,hand:"Right-hand batter",base:2,overall:92,bat:95,bowl:8,field:89}]},
{id:"uncapped",name:"Emerging & Uncapped",players:[
{id:51,name:"Prashant Veer",country:"India",nation:"IND",role:"AR",age:23,hand:"All-rounder",base:.3,overall:76,bat:78,bowl:70,field:78},
{id:52,name:"Kartik Sharma",country:"India",nation:"IND",role:"WK",age:21,hand:"Right-hand batter",base:.3,overall:75,bat:79,bowl:8,field:76},
{id:53,name:"Vaibhav Suryavanshi",country:"India",nation:"IND",role:"BAT",age:15,hand:"Left-hand batter",base:.3,overall:74,bat:80,bowl:8,field:72},
{id:54,name:"Prabhsimran Singh",country:"India",nation:"IND",role:"WK",age:25,hand:"Right-hand batter",base:.5,overall:78,bat:81,bowl:8,field:78},
{id:55,name:"Nitish Kumar Reddy",country:"India",nation:"IND",role:"AR",age:23,hand:"Right bat • pace",base:1,overall:84,bat:84,bowl:68,field:84},
{id:56,name:"Devdutt Padikkal",country:"India",nation:"IND",role:"BAT",age:26,hand:"Left-hand batter",base:1,overall:79,bat:82,bowl:10,field:79},
{id:57,name:"Jake Fraser-McGurk",country:"Australia",nation:"OS",role:"BAT",age:24,hand:"Right-hand batter",base:1,overall:83,bat:89,bowl:8,field:80}]}
];
