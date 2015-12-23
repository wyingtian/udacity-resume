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
	"projects" :[
		{
		"title" : "Sample Project 1",
		"dates" : "2014",
		"description" : "Good one",
		"images" : ["http://placehold.it/350x150" ]
		}
	]
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
			"location":"ChangSha",
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
			"degree":"Master of Liberal Arts",
			"url":"www.harvard.edu"
		}
	],
	"onlineCourses":[
		{
			"title":"Front end web developer Nano degree",
			"school":"udacity",
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


function displayWork(){
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
}

displayWork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
})

projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);	
	}	
	if (projects.projects[project].images.length > 0){
		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
}
projects.display();

education.display = function(){
	for (edu in education.school){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[edu].name);
		//$(".education-entry:last").append(formattedTitle);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.school[edu].degree);
		//$(".education-entry:last").append(formattedDegree);	

		var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.school[edu].date);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.school[edu].major);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.school[edu].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}	

	for (online in education.onlineCourses){
		$('#education').append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
		//$(".education-entry:last").append(formattedTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);

		var formatttedOnlineTitleSchool=formattedOnlineTitle+formattedOnlineSchool;
		$(".online-entry:last").append(formatttedOnlineTitleSchool);


		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
		$(".online-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
		$(".online-entry:last").append(formattedOnlineURL);
	}
}
education.display();

$("#mapDiv").append(googleMap);
// function inName(oldName) {
//     var finalName="";
//     var splits = oldName.trim().split(" ");
//     var s = splits[0].substring(1);
//     var b = splits[1];
//     b=b.toUpperCase();
//     var a =  s.toLowerCase();
//     var f = finalName.concat(splits[0].substring(0,1).toUpperCase(),a,' ',b); 
//     return f;
// };

// $('#main').append(internationalizeButton);
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



