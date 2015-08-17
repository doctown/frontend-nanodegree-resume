/*
This is empty on purpose! Your code to build the resume will go here.

Practice code at end of file.
 */
 
//Personal bio
var name = "David Ogor";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var skills = ["C", "Java", "Python", "Javascript"];
var bio = {
	"name" : "David Ogor",
	"role" : "Web Admin",
	"contactbio" : "(512 - 000 - 0000)",
	"url" : "www.mywebpage.com",
	"msg" : "Welcome to my site",
	"skills" : skills
};

//Current work experience
var work = {
	"position" : "Help Desk Specialist",
	"employer" : "Connections Education",
	"years" : "3 years",
	"City" : "Baltimore"	
};

//Projects
var projects = {
	"name" : "JavaScript",
	"details" : "Learning JavaScript to apply for a coding bootcamp."
};

//Education object and education object using JSON
var education = {
	"name" : "Ga Tech",
	"city" : "Atlanta, Ga",
	"gradYear" : "2017"
};

var educationList = {
	"schools" : [
		{
			"name" : "Ga Tech",
			"city" : "Atlanta, GA",
			"gradYear" : 2017
		},
		{
			"name" : "NCSU",
			"city" : "Raleigh, NC",
			"gradYear" : 2014
		}
	]
};

//Add elements to index file
$("#header").append(bio.msg);
$("#header").prepend(bio.skills.join());
$("#header").prepend(formattedRole);
$("#header").prepend(bio.url);
$("#header").prepend(bio.contactbio);
$("#header").prepend(formattedName);

$("#main").append("<h2>Work Experience</h2>");
for (var key in work) {
	$("#main").append("<b>" + key.toUpperCase() + ": </b>" + work[key] + "<br>");
}

$("#main").append("<hr><h2>Education</h2>");
for (var key in education) {
	$("#main").append("<b>" + key[0].toUpperCase() + key.slice(1) + ": </b>" + education[key] + "<br>");
}

$("#main").append("<hr><h2>Projects</h2>");
for (var key in projects) {
	$("#main").append("<b>" + key[0].toUpperCase() + key.slice(1) + ": </b>");
	$("#main").append(projects[key] + "<br>");
}
/*
Failed attempt to access JSON education list.
for (var element in educationList["schools"]) {
	for (var key in element) {
		$("#main").append(key[0].toUpperCase() + key.slice(1) + ": " + education[key] + "<br>");
	}
}

/*
 //Initial practice with variables and console log.
 
var awesomeThoughts = "I am an awesome David";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(funThoughts);
//$("#main").append(funThoughts);
*/