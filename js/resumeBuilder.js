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
	"jobs" : [
		{
			"title" : "Help Desk Specialist",
			"employer" : "Connections Education",
			"dates" : "01/2013 - Present",
			"location" : "Baltimore, MD",
			"description" : "Provide support for the Connexus platform."
		}
	]	
};

//Projects
var projects = {
	"project" : [
		{
			"title" : "JavaScript",
			"dates" : "August 2015",
			"description" : "Learning JavaScript to apply for a coding bootcamp.",
			"image" : "https://lh4.ggpht.com/LUgsz3XTdD-dW9qCenNcFZWaBKM6At_MbMjODMCJOC8ZoR4hIm_rVBQghBmk5kQ-kRa66yhEQT0BH88gUmwX=s170"
		}
	],
	"display" : function() {
		for (var idx in projects.project) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[idx].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[idx].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[idx].description);
			var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.project[idx].image)
			
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);
			$(".project-entry:last").append(formattedProjectImage);		
		}
	}
};

$("#mapDiv").append(googleMap);

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


$("#main").append("<hr><h2>Education</h2>");
for (var key in education) {
	$("#main").append("<b>" + key[0].toUpperCase() + key.slice(1) + ": </b>" + education[key] + "<br>");
}

$("#main").append("<hr><h2>Projects</h2>");
for (var key in projects) {
	$("#main").append("<b>" + key[0].toUpperCase() + key.slice(1) + ": </b>");
	$("#main").append(projects[key] + "<br>");
}


//Check for skills in the bio
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill;

	for (idx in bio.skills) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[idx]);
		$("#header").append(formattedSkill);
	}
}

//Add work experience to index
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

//Monitors clicks on the page
$(document).click(function(loc) {logClicks(loc.pageX,loc.pageY);});

//Add international button
$("#main").append(internationalizeButton);

function inName() {
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1);
	name[1] = name[1].toUpperCase();
	console.log(name);
	return name[0] + " " + name[1];
}

projects.display();

/* replaced by for loop:
$("#main").append("<h2>Work Experience</h2>");
for (var key in work) {
	$("#main").append("<b>" + key.toUpperCase() + ": </b>" + work[key] + "<br>");
}
*/

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