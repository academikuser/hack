var events =
  [
    {"event_id": "1","title": "Dog Meeting","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Seattle Park","time":{"startTime": "21:00","endTime": "23:00","date":{"day": "31","month": "3","year": "2017"}},"description": "Just because you've given up on socializing, doesn't mean your dog should!","category" : "Animals","img": "http://i.imgur.com/WQAJ5n2.jpg"},
    {"event_id": "2","title": "Soccer","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Soccer Court, Sports Center","time":{"startTime": "19:00","endTime": "21:00","date":{"day": "1","month": "4","year": "2017"}},"description": "Just a friendly soccer match.","category" : "Sports","img": "http://i.imgur.com/6GDznqY.png"},
    {"event_id": "3","title": "Calculus Study Group","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "BGU Library","time":{"startTime": "9:00","endTime": "11:00","date":{"day": "1","month": "4","year": "2017"}},"description": "Beginners group, we'll study limits of series. ","category" : "Studies","img": "http://i.imgur.com/TJL0Qoh.jpg"},
    {"event_id": "4","title": "Post Hackathon Afternoon Bash","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Lior's Place","time":{"startTime": "14:00","endTime": "16:00","date":{"day": "2","month": "4","year": "2017"}},"description": "Party hard and get Lior in trouble with his neighbors!","category" : "Miscellaneous","img": "http://i.imgur.com/A80k1k5.jpg"},
    {"event_id": "5","title": "Volleyball","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Beersheva Beach, Sports Center","time":{"startTime": "15:00","endTime": "17:00","date":{"day": "2","month": "4","year": "2017"}},"description": "Come and pretend it's Tel Aviv, we have sand.","category" : "Sports","img": "http://i.imgur.com/TbhmGgV.jpg"},
    {"event_id": "6","title": "Basketball","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Basketball Court, Sports Center","time":{"startTime": "17:00","endTime": "19:00","date":{"day": "2","month": "4","year": "2017"}},"description": "Just a friendly basketball match.","category" : "Sports","img": "http://i.imgur.com/dJiFs6q.jpg"},
    {"event_id": "7","title": "Tennis Doubles' Tournament","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Tennis Court, Sports Center","time":{"startTime": "10:00","endTime": "12:00","date":{"day": "3","month": "4","year": "2017"}},"description": "Just a friendly tennis tournament","category" : "Sports","img": "http://i.imgur.com/odjFkvf.jpg"},
    {"event_id": "8","title": "Frisbee","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Grass, Sports Center","time":{"startTime": "16:00","endTime": "18:00","date":{"day": "3","month": "4","year": "2017"}},"description": "Just a friendly frisbee match. Beach for visualization purposes only.","category" : "Sports","img": "http://i.imgur.com/1geSS4t.jpg"},
    {"event_id": "9","title": "Meditation","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Ramon Crater","time":{"startTime": "8:00","endTime": "10:00","date":{"day": "3","month": "4","year": "2017"}},"description": "What better way is there to cap off a stressful week?","category" : "Miscellaneous","img": "http://i.imgur.com/wygPzJv.jpg"},
    {"event_id": "10","title": "Wacky Cat Picture Contest","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Ben Gurion University","time":{"startTime": "12:00","endTime": "14:00","date":{"day": "3","month": "4","year": "2017"}},"description": "Cats rule the university on Saturdays, try to catch their picture doing crazy stuff!","category" : "Animals","img": "http://i.imgur.com/Kdji9yS.jpg"},
    {"event_id": "11","title": "All Day Risk Tournament","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Shaked's Place","time":{"startTime": "10:00","endTime": "12:00","date":{"day": "4","month": "4","year": "2017"}},"description": "Are you ready to conquer the world? You better be.","category" : "Board/Card Games","img": "http://i.imgur.com/eSMGrbq.jpg"},
    {"event_id": "12","title": "Friendly Whist Game","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Building 51, first floor lobby BGU","time":{"startTime": "20:00","endTime": "22:00","date":{"day": "4","month": "4","year": "2017"}},"description": "Does anybody still play this?","category" : "Board/Card Games","img": "http://i.imgur.com/i9pEftR.jpg"},
    {"event_id": "13","title": "Jazz Jam-off","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Music Room, BGU","time":{"startTime": "16:00","endTime": "18:00","date":{"day": "4","month": "4","year": "2017"}},"description": "Come to play or even just listen. :)","category" : "Music","img": "http://i.imgur.com/kAYg4xO.png"},
    {"event_id": "14","title": "Origami Session","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Student House, BGU","time":{"startTime": "18:00","endTime": "20:00","date":{"day": "5","month": "4","year": "2017"}},"description": "Come to teach and learn origami techniques and show off your work!","category" : "Art","img": "http://i.imgur.com/zrrNxc0.jpg"},
    {"event_id": "15","title": "Heroes IV 3 v. 3 Battle!","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "The Bunker, BGU","time":{"startTime": "22:00","endTime": "24:00","date":{"day": "5","month": "4","year": "2017"}},"description": "Some people have a life, others get to play computer games into the night.","category" : "PC/Console Games","img": "http://i.imgur.com/aNGHa65.jpg"},
    {"event_id": "16","title": "The Big Lebowski","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Shaked's Place","time":{"startTime": "20:00","endTime": "22:00","date":{"day": "5","month": "4","year": "2017"}},"description": "I don't work, I don't drive a car, I don't fuckin' ride in a car, I don't handle money, I don't turn on the oven and I sure as shit don't fucking watch movies on shabbas.","category" : "Movie Screening","img": "http://i.imgur.com/xgTOwL5.jpg"},
    {"event_id": "17","title": "Ringo","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Beersheva Beach, Sports Center","time":{"startTime": "9:00","endTime": "11:00","date":{"day": "5","month": "4","year": "2017"}},"description": "Just a friendly ringo match.","category" : "Sports","img": "http://i.imgur.com/BPdZyX2.jpg"},
    {"event_id": "18","title": "Kiteboarding Lessons","creator":{"user_id": "0001","name": "John Doe","phone": "+972 555 555 555","email": "jd@post.bgu.ac.il", "img": ""},"location": "Brandon's Private Beach","time":{"startTime": "9:00","endTime": "11:00","date":{"day": "5","month": "4","year": "2017"}},"description": "Get your free kiteboarding lessons from the one and only Brandon.","category" : "Sports","img": "http://i.imgur.com/76G4ARM.jpg"}
  ];
var eventsCounter = events.length;
var datesCounter = 0;
var dates = [];
var eventsByDatesDictionary =
  {
    "1": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    "2": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0
    },
    "3": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    "4": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0
    },
    "5": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    "6": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0
    },
    "7": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    "8": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0
    },
    "9": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0
    },
    "10": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0
    },
    "11": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0
    },
    "12": {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0
    }
  }

$(document).ready(function() {
  $('body').addClass('js');
  var $menu = $('#menu'),
    $menulink = $('.menu-link');

  $menulink.click(function() {
    $menulink.toggleClass('active');
    $menu.toggleClass('active');
    return false;
  });

  var eventTitle = document.getElementById("pageTitle").innerHTML;
  eventTitle = eventTitle.slice(9, eventTitle.length-6);

  for(i=0; i<events.length; i++){
    if(events[i].title.localeCompare(eventTitle)==0){
      console.log(events[i]);
      break;
    }
  }
  var curEvent = events[i];
  document.getElementById("eventTitle").innerHTML=curEvent.title;
  document.getElementById("eventCategory").innerHTML=curEvent.category;
  document.getElementById("eventDate").innerHTML=curEvent.time.date.day+"."+curEvent.time.date.month+"."+curEvent.time.date.year;
  document.getElementById("eventHours").innerHTML=curEvent.time.startTime+"-"+curEvent.time.endTime;
  document.getElementById("eventLocation").innerHTML=curEvent.location ;
  document.getElementById("eventCreator").innerHTML=curEvent.creator.name;
  document.getElementById("eventDescription").innerHTML=curEvent.description;
  document.getElementById("eventImage").src=curEvent.img;
  document.getElementById("eventImage").alt=curEvent.title;

});

function createEventsTable(){
  for(i=0; i<eventsCounter; i++){
      var event, eventTime, eventDate, year, month, day;
      event = events[i];
      eventTime = event.time;
      eventDate = eventTime.date;
      year = eventTime.date.year;
      month = eventTime.date.month;
      day = eventTime.date.day;
      if(eventsByDatesDictionary[month][day]==0){
        eventsByDatesDictionary[month][day] = [];
        datesCounter++;
        dates.push(eventDate);
      }
      eventsByDatesDictionary[month][day].push(event);
  }

  //TODO: sort the dates array

  var datesTableEntries = "";
  for(i=0 ; i<datesCounter; i++){
    var curEvent = eventsByDatesDictionary[dates[i].month][dates[i].day];
    var curEventString =
      '<table id="eventsTable" style="width:100%; border-color: black; border-style:solid; border-width: thin;">'
      +'<tr style="width:100%;">'
      +'<td style="width:100%;">';

    for(j=0; j<curEvent.length; j++){
    curEventString = curEventString
      +'<a title="'+ curEvent[j].title + j.toString() +'" href="brown/'+ curEvent[j].title +'.html" onclick="'+ curEvent[j].title + j.toString() +'();return false;">'
      +'<div>'
      +  '  <table style="width: 100%; border-bottom: thin black; border-top: thin black; border-style:solid;">'
      +    '  <tr style="width:100%">'
      +        '<th style="width:50%" rowspan="4"><img src="'+ curEvent[j].img +'" alt="Could not find event picture on url: '+ curEvent[j].image +'" style="width:80px;height:80px;"></th>'
      +        '<td style="width:50%; color:black; font-weight: 900;">'+ curEvent[j].title +'</td>'
      +      '</tr>'
      +      '<tr>'
      +        '<td style="width:50%; color:#626161;">'+curEvent[j].time.startTime+'-'+curEvent[j].time.endTime+'</td>'
      +      '</tr>'
      +      '<tr>'
      +        '<td style="width:50%; color:#626161;">'+curEvent[j].location+'</td>'
      +      '</tr>'
      +      '<tr>'
      +        '<td style="width:50%; color:#626161;">'+curEvent[j].category+'</td>'
      +      '</tr>'
      +    '</table>'
      +'</div>'
      +'</a>'
      ;

  }
    curEventString = curEventString
    +  '</td>'
    +  '</tr>'
    +'</table>';
    datesTableEntries = datesTableEntries
    +'<tr class="datesTableTr"><td class="datesTableTd" colspan="2" style="text-align: center; border-color: black; border-style:solid; border-width: thin;"><h2>'
    +dates[i].day
    +'.'
    +dates[i].month
    +'</h2></td></tr><tr>'
    +curEventString
    +'</tr>';
  }
  document.getElementById("datesTable").innerHTML=datesTableEntries;
}

function sortOnKeys(dict) {

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}
