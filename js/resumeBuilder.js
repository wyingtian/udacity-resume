/*
This is empty on purpose! Your code to build the resume will go here.
 */


//HTMLheaderName=HTMLheaderName.replace('%data%','thing');



var bio = {
	"name" : "Yingtian Wang",
	"role" : "Web developer",
	"contacts" : {
		"email": "wyingtian@gmail.com",
		"mobile": "917-767-8887",
		"github": "www.github.com",
		//"twitter": "@ying",
		"location": "Boston",
	},
	"bio_pic":"images/fry.jpg",
	"welcomMessage":"Welcome to my resume page",
	"skills":["HTML/CSS","JavaScript","C","Java"]

};

var projects = {
	"title" : "Sample Project 1",
	"dates" : "2014",
	"description" : "Good one",
	"images" : ["http://www.google.com","http://www.baidu.com" ]

};
var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"dates":"January 3000 - Future",
			"description":"bla bla bla bla bla bla bla bla bla bla bla bla"
		},{
			"employer":"Panucci's Pizaa",
			"title": "Dellivery Boy",
			"dates": "1998- December31,1999",
			"description":"bla bla bla bla bla bla bla bla bla bla bla bla"
		}
	]

};

var education = {
	"school" : [
		{
			"name":"Central South University",
			"location":"Chang sha",
			"date":"2009",
			"major":"Electrical Engineering",
			"degree":"Master of Engineering",
			"url":"www.csu.edu.cn"
		},
		{
			"name":"Harvard extension school",
			"location":"Boston",
			"major":"Software Engineering",
			"date": "2014",
			"url":"www.harvard.edu"
		}
	],
	"online coursese":[
		{
			"title":"Front end web developer Nano degree",
			"dates":"2015",
			"url":"www.udacity.com"
		}
	]
};

var HTMLheaderRole = HTMLheaderRole.replace('%data%',bio.role);
$("#header").prepend(HTMLheaderRole);
var HTMLheaderName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(HTMLheaderName);


 var formattedBioMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedBioMobile);

var formattedBioEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedBioEmail);

var formattedBioGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedBioGithub);

var formattedBioLocation = HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formattedBioLocation);


var formattedBioPic = HTMLbioPic.replace("%data%",bio.bio_pic);
$("#header").append(formattedBioPic);

var formattedWlcomMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomMessage);
$("#header").append(formattedWlcomMsg);

// if skills array not empty, add each skills
if(bio.skills.length !== 0){
	$("#header").append(HTMLskillsStart);
	for (i = 0 ; i < bio.skills.length ; i++)
	$("#skills").append(HTMLskills.replace('%data%',bio.skills[i]));
}

// for - in loop iterates jobs in work object and append 

for (entry in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[entry].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[entry].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[entry].dates);
	$(".work-entry:last").append(formattedWorkDates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[entry].description);
	$(".work-entry:last").append(formattedDescription);

}


//  HTMLmobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
// //HTMLemail = HTMLemail.replace('%data%',bio.contacts.email);
// //var HTMLcontactGeneric = HTMLcontactGeneric.replace('%data%',HTMLemail);
// //HTMLcontactGeneric = HTMLcontactGeneric.replace('%data%',HTMLmobile);
// //HTMLcontactGeneric = HTMLcontactGeneric.replace('%data%','');
// //$("#header").append(HTMLcontactGeneric);

// //HTMLemail = HTMLemail.replace('%data%',bio.contacts.email);
// $("#topContacts").append(HTMLmobile);
//$("#header").append(bio.contacts);
//ß$("#header").append(bio.name);



